import { NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

export async function POST(request: Request) {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        return NextResponse.json(
            { error: "Email service is not configured. Please add WEB3FORMS_ACCESS_KEY to your .env.local file." },
            { status: 503 }
        );
    }

    const ip = getClientIp(request);

    try {
        const limited = await rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60 * 60 * 1000 });
        if (!limited.ok) {
            return NextResponse.json(
                { error: "Too many messages sent. Please try again later." },
                { status: 429 }
            );
        }
    } catch (rateLimitError) {
        console.error("Rate limit check failed:", rateLimitError);
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > 20_000) {
        return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }

    try {
        const body = await request.json();

        if (typeof body._honeypot === "string" && body._honeypot.trim()) {
            return NextResponse.json({ success: true });
        }

        const name = typeof body.name === "string" ? body.name.trim().slice(0, MAX_NAME) : "";
        const email = typeof body.email === "string" ? body.email.trim().slice(0, MAX_EMAIL) : "";
        const subject = typeof body.subject === "string" ? body.subject.trim().slice(0, MAX_SUBJECT) : "";
        const message = typeof body.message === "string" ? body.message.trim().slice(0, MAX_MESSAGE) : "";

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                subject: subject ? `[Portfolio] ${subject}` : "New Portfolio Contact Message",
                message: message,
                from_name: name,
                replyto: email,
            }),
        });

        const textResult = await response.text();
        let result;
        try {
            result = JSON.parse(textResult);
        } catch (e) {
            console.error("Web3Forms returned non-JSON:", textResult);
            return NextResponse.json({ error: "Email service provider returned an unexpected response." }, { status: 500 });
        }

        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            console.error("Web3Forms error:", result);
            return NextResponse.json(
                { error: result.message || "Failed to send message. Please try again." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }
}