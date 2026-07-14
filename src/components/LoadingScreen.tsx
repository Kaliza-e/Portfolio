"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [exiting, setExiting] = useState(false);

    const finish = useCallback(() => {
        setExiting(true);
        setTimeout(onComplete, 700);
    }, [onComplete]);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            finish();
            return;
        }

        // Speed up on mobile — 2x faster interval and larger increments
        const isMobile = window.innerWidth < 768;
        const intervalMs = isMobile ? 25 : 50;
        const baseIncrement = isMobile ? 6 : 3;

        let prog = 0;
        const progressTimer = setInterval(() => {
            prog += Math.random() * baseIncrement + 1;
            if (prog >= 100) {
                prog = 100;
                clearInterval(progressTimer);
                setTimeout(finish, isMobile ? 200 : 500);
            }
            setProgress(prog);
        }, intervalMs);

        return () => clearInterval(progressTimer);
    }, [finish]);

    return (
        <AnimatePresence>
            {!exiting ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="loading-screen"
                >
                    <div className="loading-scanlines" />
                    <div className="loading-grid" />

                    <div className="loading-content">
                        <div className="relative w-64 h-64 mb-12 flex items-center justify-center mx-auto">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-neonPurple/20 border-dashed border-[4px]"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border-2 border-neonBlue/30 border-t-transparent border-l-transparent"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-neonPurple to-neonCyan blur-[2px] flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                            >
                                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                                    <span
                                        className="text-[11px] font-black tracking-[0.15em] uppercase select-none"
                                        style={{
                                            background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            filter: "none",
                                        }}
                                    >
                                        KE
                                    </span>
                                </div>
                            </motion.div>

                            <svg className="absolute inset-0 w-full h-full -rotate-90" aria-hidden>
                                <circle
                                    cx="128"
                                    cy="128"
                                    r="120"
                                    stroke="url(#gradient)"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray={2 * Math.PI * 120}
                                    strokeDashoffset={2 * Math.PI * 120 * (1 - Math.min(progress, 100) / 100)}
                                    className="transition-all duration-300"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, letterSpacing: "0.6em" }}
                            animate={{ opacity: 1, letterSpacing: "0.35em" }}
                            transition={{ delay: 0.5, duration: 0.9 }}
                            className="loading-subtitle"
                        >
                            SYSTEM INITIALIZING
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="loading-roles"
                        >
                            <span>INTELLIGENCE</span>
                            <span className="loading-diamond">◆</span>
                            <span>DESIGN</span>
                            <span className="loading-diamond">◆</span>
                            <span>INNOVATION</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="loading-progress-wrap"
                        >
                            <div className="loading-track">
                                <div className="loading-bar" style={{ width: `${Math.min(progress, 100)}%` }} />
                            </div>
                            <span className="loading-percent">{Math.floor(Math.min(progress, 100))}%</span>
                        </motion.div>


                    </div>

                    <div className="lc tl" /><div className="lc tr" />
                    <div className="lc bl" /><div className="lc br" />
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}