"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroOrb({ onToggle }: { onToggle?: (active: boolean) => void }) {
    const [activated, setActivated] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    const handleClick = useCallback(() => {
        const next = !activated;
        setActivated(next);
        onToggle?.(next);
    }, [activated, onToggle]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        }
    }, [handleClick]);

    // Generate upper band zigzag & triangle points (y = 186)
    const upperZigzag = "M 90 186 L 100 178 L 110 186 L 120 178 L 130 186 L 140 178 L 150 186 L 160 178 L 170 186 L 180 178 L 190 186 L 200 178 L 210 186 L 220 178 L 230 186 L 240 178 L 250 186 L 260 178 L 270 186 L 280 178 L 290 186 L 300 178 L 310 186";
    const upperTriangles = [110, 130, 150, 170, 190, 210, 230, 250, 270, 290].map(x => (
        <polygon key={`ut-${x}`} points={`${x - 4},194 ${x},187 ${x + 4},194`} fill="#FFFFFF" />
    ));

    // Generate lower band zigzag & triangle points (y = 214)
    const lowerZigzag = "M 90 214 L 100 206 L 110 214 L 120 206 L 130 214 L 140 206 L 150 214 L 160 206 L 170 214 L 180 206 L 190 214 L 200 206 L 210 214 L 220 206 L 230 214 L 240 206 L 250 214 L 260 206 L 270 214 L 280 206 L 290 214 L 300 206 L 310 214";
    const lowerTriangles = [110, 130, 150, 170, 190, 210, 230, 250, 270, 290].map(x => (
        <polygon key={`lt-${x}`} points={`${x - 4},222 ${x},215 ${x + 4},222`} fill="#FFFFFF" opacity="0.45" />
    ));

    return (
        <div className="relative w-full h-full max-w-[440px] max-h-[440px] mx-auto flex flex-col items-center justify-center select-none">
            <motion.div
                role="button"
                tabIndex={0}
                aria-label={activated ? "Deactivate theme orb" : "Activate theme orb"}
                aria-pressed={activated}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative w-full aspect-square cursor-pointer flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-neonPurple rounded-full group"
            >
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full overflow-visible transition-all duration-500"
                    aria-hidden="true"
                >
                    <defs>
                        {/* Soft wide background glow */}
                        <radialGradient id="heroOrbAmbientGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={activated ? "#06b6d4" : "#a855f7"} stopOpacity={activated ? "0.45" : "0.35"} />
                            <stop offset="50%" stopColor={activated ? "#a855f7" : "#3b82f6"} stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                        </radialGradient>

                        {/* Sphere lighting: Lit upper-left, deep dark lower-right */}
                        <radialGradient id="sphereGrad" cx="33%" cy="33%" r="67%">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                            <stop offset="22%" stopColor={activated ? "#22d3ee" : "#c084fc"} />
                            <stop offset="55%" stopColor={activated ? "#0284c7" : "#7e22ce"} />
                            <stop offset="85%" stopColor={activated ? "#0f172a" : "#3b0764"} />
                            <stop offset="100%" stopColor="#020617" />
                        </radialGradient>

                        {/* Orbit Ring Gradient */}
                        <linearGradient id="orbitRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={activated ? "#22d3ee" : "#c084fc"} stopOpacity="0.6" />
                            <stop offset="50%" stopColor={activated ? "#818cf8" : "#60a5fa"} stopOpacity="0.25" />
                            <stop offset="100%" stopColor={activated ? "#c084fc" : "#38bdf8"} stopOpacity="0.6" />
                        </linearGradient>

                        {/* Sphere ClipPath to ensure bands never spill outside sphere */}
                        <clipPath id="sphereClip">
                            <circle cx="200" cy="200" r="84" />
                        </clipPath>
                    </defs>

                    {/* 1. Behind everything: Soft wide glow */}
                    <circle
                        cx="200"
                        cy="200"
                        r="185"
                        fill="url(#heroOrbAmbientGlow)"
                        className="transition-all duration-700"
                    />

                    {/* 2. Outer subtle dotted circle */}
                    <circle
                        cx="200"
                        cy="200"
                        r="165"
                        fill="none"
                        stroke={activated ? "#38bdf8" : "#c084fc"}
                        strokeWidth="1.5"
                        strokeDasharray="2 7"
                        strokeLinecap="round"
                        opacity="0.3"
                        className="transition-colors duration-500"
                    />

                    {/* 3. Orbiting Ring & Dots */}
                    <g className="origin-center">
                        <motion.g
                            animate={shouldReduceMotion ? {} : { rotate: 360 }}
                            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                            style={{ transformOrigin: "200px 200px" }}
                        >
                            {/* Tilted Orbit Ring: angled upward to the right at 20 deg */}
                            <g transform="rotate(-20 200 200)">
                                <ellipse
                                    cx="200"
                                    cy="200"
                                    rx="145"
                                    ry="48"
                                    fill="none"
                                    stroke="url(#orbitRingGrad)"
                                    strokeWidth="1.5"
                                />

                                {/* Dot 1: Larger bright dot at upper right on ring */}
                                <circle
                                    cx="325"
                                    cy="176"
                                    r="4.5"
                                    fill="#FFFFFF"
                                    className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                                />

                                {/* Dot 2: Smaller dot in accent color at lower left on ring */}
                                <circle
                                    cx="75"
                                    cy="224"
                                    r="3"
                                    fill={activated ? "#38bdf8" : "#3b82f6"}
                                />
                            </g>
                        </motion.g>
                    </g>

                    {/* 4. Sphere (Smooth glowing planet/jewel) */}
                    <circle
                        cx="200"
                        cy="200"
                        r="84"
                        fill="url(#sphereGrad)"
                        className="transition-all duration-700 drop-shadow-2xl"
                    />

                    {/* 5. Two Decorative Bands (Clipped strictly inside sphere edge) */}
                    <g clipPath="url(#sphereClip)">
                        {/* Upper Band: Bright & Fully Visible */}
                        <g>
                            <path
                                d={upperZigzag}
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth="2.2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                opacity="0.95"
                            />
                            {upperTriangles}
                        </g>

                        {/* Lower Band: Softer & More Transparent */}
                        <g>
                            <path
                                d={lowerZigzag}
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth="1.8"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                opacity="0.45"
                            />
                            {lowerTriangles}
                        </g>
                    </g>
                </svg>
            </motion.div>

            {/* Hint label matching existing interactive behavior */}
            <motion.p
                className="mt-3 text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 pointer-events-none"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
            >
                {activated ? "● ACTIVE — click to reset" : "○ click to activate"}
            </motion.p>
        </div>
    );
}