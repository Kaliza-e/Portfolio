import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { getClientIp } from "./rate-limit-ip";

export { getClientIp } from "./rate-limit-ip";

const hits = new Map<string, { count: number; resetAt: number }>();

let upstashLimiter: Ratelimit | null = null;

function getUpstashLimiter(): Ratelimit | null {
    if (upstashLimiter) return upstashLimiter;

    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) return null;

    upstashLimiter = new Ratelimit({
        redis: new Redis({ url, token }),
        limiter: Ratelimit.slidingWindow(5, "1 h"),
        analytics: true,
        prefix: "portfolio-contact",
    });

    return upstashLimiter;
}

function inMemoryRateLimit(
    key: string,
    { limit = 5, windowMs = 60 * 60 * 1000 }: { limit?: number; windowMs?: number } = {}
): { ok: boolean; retryAfterMs?: number } {
    const now = Date.now();
    const entry = hits.get(key);

    if (!entry || now > entry.resetAt) {
        hits.set(key, { count: 1, resetAt: now + windowMs });
        return { ok: true };
    }

    if (entry.count >= limit) {
        return { ok: false, retryAfterMs: entry.resetAt - now };
    }

    entry.count += 1;
    return { ok: true };
}

export async function rateLimit(
    key: string,
    options: { limit?: number; windowMs?: number } = {}
): Promise<{ ok: boolean; retryAfterMs?: number }> {
    const limiter = getUpstashLimiter();

    if (limiter) {
        const result = await limiter.limit(key);
        if (!result.success) {
            return {
                ok: false,
                retryAfterMs: Math.max(0, result.reset - Date.now()),
            };
        }
        return { ok: true };
    }

    if (process.env.NODE_ENV === "production") {
        console.warn(
            "Contact rate limiting is in-memory only. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN for production."
        );
    }

    return inMemoryRateLimit(key, options);
}