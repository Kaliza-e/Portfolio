"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

let rippleId = 0;

export default function HeroOrb({ onToggle }: { onToggle?: (active: boolean) => void }) {
    const [activated, setActivated] = useState(false);
    const [ripples, setRipples] = useState<number[]>([]);
    const orbRef = useRef<HTMLDivElement>(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 60, damping: 20 });
    const sy = useSpring(my, { stiffness: 60, damping: 20 });
    const rotX = useTransform(sy, [-120, 120], [12, -12]);
    const rotY = useTransform(sx, [-120, 120], [-12, 12]);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = orbRef.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set(e.clientX - (rect.left + rect.width / 2));
        my.set(e.clientY - (rect.top + rect.height / 2));
    }, [mx, my]);

    const onMouseLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

    const onClick = useCallback(() => {
        const next = !activated;
        setActivated(next);
        onToggle?.(next);

        const id = ++rippleId;
        setRipples(r => [...r, id]);
        setTimeout(() => setRipples(r => r.filter(x => x !== id)), 1400);
    }, [activated, onToggle]);

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
        }
    }, [onClick]);

    return (
        <div className="orb-wrapper">
            <motion.div
                ref={orbRef}
                role="button"
                tabIndex={0}
                aria-label={activated ? "Deactivate theme orb" : "Activate theme orb"}
                aria-pressed={activated}
                className={`orb-container${activated ? " orb-active" : ""}`}
                style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                onKeyDown={onKeyDown}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
            >
                {/* Rings */}
                <div className="orb-ring r1" />
                <div className="orb-ring r2" />
                <div className="orb-ring r3" />

                {/* Orbiting particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="orb-dot" style={{ "--di": i } as React.CSSProperties} />
                ))}

                {/* Core */}
                <div className="orb-core">
                    <div className="orb-shine" />
                    {ripples.map(id => <div key={id} className="orb-ripple" />)}
                </div>
            </motion.div>

            {/* Hint label */}
            <motion.p
                className="orb-hint"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
            >
                {activated ? "● ACTIVE — click to reset" : "○ click to activate"}
            </motion.p>
        </div>
    );
}