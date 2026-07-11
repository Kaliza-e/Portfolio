"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const mouseRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            if (rafRef.current !== null) return;
            rafRef.current = requestAnimationFrame(() => {
                if (glowRef.current) {
                    glowRef.current.style.left = `${mouseRef.current.x}px`;
                    glowRef.current.style.top = `${mouseRef.current.y}px`;
                }
                rafRef.current = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow hidden md:block" aria-hidden />;
}