"use client";

import React, { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { useTheme } from "next-themes";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

const Footer = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(!window.matchMedia("(pointer: fine)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Cursor tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 50, stiffness: 100, mass: 1 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Drifting smoke offsets
    const driftX1 = useMotionValue(0);
    const driftY1 = useMotionValue(0);
    const driftX2 = useMotionValue(0);
    const driftY2 = useMotionValue(0);

    useEffect(() => {
        // Create an organic drifting motion for the smoke layers
        const drift = (val: any, range: number, duration: number) => {
            animate(val, [range, -range, range], {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut"
            });
        };
        drift(driftX1, 40, 7);
        drift(driftY1, 20, 5);
        drift(driftX2, -30, 8);
        drift(driftY2, 40, 6);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const socials = siteConfig.socials;

    const isDark = mounted ? resolvedTheme === "dark" : true;
    
    // Smoke colors
    const colors = isDark 
        ? ["#a855f7", "#06b6d4", "#3b82f6", "#ec4899"] 
        : ["#ec4899", "#22d3ee", "#818cf8", "#f472b6"]; 

    const baseColor = isDark ? "#1e293b" : "#94a3b8"; 

    // Combine cursor and drifting for final smoke positions
    const smokePos1X = useTransform([smoothX, driftX1], ([x, dx]: any[]) => (x as number) + (dx as number));
    const smokePos1Y = useTransform([smoothY, driftY1], ([y, dy]: any[]) => (y as number) + (dy as number));
    const smokePos2X = useTransform([smoothX, driftX2], ([x, dx]: any[]) => (x as number) + (dx as number));
    const smokePos2Y = useTransform([smoothY, driftY2], ([y, dy]: any[]) => (y as number) + (dy as number));

    // Complex background string
    const background = useTransform(
        [smokePos1X, smokePos1Y, smokePos2X, smokePos2Y],
        ([x1, y1, x2, y2]: any[]) => `
            radial-gradient(circle 280px at ${x1}px ${y1}px, ${colors[0]}77 0%, transparent 60%),
            radial-gradient(circle 220px at ${x2}px ${y2}px, ${colors[1]}66 0%, transparent 70%),
            radial-gradient(circle 250px at ${x1}px ${y2}px, ${colors[2]}55 0%, transparent 80%),
            linear-gradient(${baseColor}, ${baseColor})
        `
    );

    return (
        <footer 
            ref={containerRef}
            className="w-full py-6 px-6 lg:px-24 border-t border-slate-100 dark:border-white/5 relative overflow-hidden transition-colors duration-500"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Social Links Section */}
                <div className="flex flex-wrap justify-between items-center mb-4 gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-1 text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
                        >
                            <span className="text-[10px] font-bold tracking-[0.2em]">{social.name}</span>
                            <span className="text-[10px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                        </a>
                    ))}
                </div>

                {/* MOVING SMOKE Massive Typography */}
                <div className="relative py-2 flex justify-center items-center overflow-visible">
                    <motion.h2 
                        className={`
                            text-[clamp(1.5rem,14vw,16rem)] 
                            font-black 
                            leading-none 
                            tracking-[-0.07em] 
                            uppercase 
                            whitespace-nowrap 
                            select-none 
                            bg-clip-text 
                            -webkit-bg-clip-text 
                            text-transparent
                            transition-all
                            duration-1000
                        `}
                        style={{
                            backgroundImage: isMobile 
                                ? `linear-gradient(${baseColor}, ${baseColor})`
                                : background,
                            backgroundSize: "100% 100%",
                            opacity: isHovered || isMobile ? 1 : 0.8,
                            filter: isHovered ? "blur(0px) contrast(1.1)" : "blur(0.5px) contrast(0.9)",
                        }}
                    >
                        Kaliza Esther
                    </motion.h2>
                </div>

                {/* Footer Meta Section */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-700 space-y-4 md:space-y-0">
                    <p className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300">
                        &copy; 2026 Kaliza Esther Portfolio
                    </p>
                    <div className="flex items-center space-x-4">
                        <span className="w-12 h-[1px] bg-slate-200 dark:bg-slate-800" />
                        <p className="font-bold flex items-center group">
                            Built with 
                            <span className="mx-2 text-neonPurple dark:text-neonPurple group-hover:scale-125 transition-transform duration-300">✦</span>
                            Kaliza Esther
                        </p>
                    </div>
                </div>
            </div>

            <motion.div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
                style={{
                    opacity: isHovered ? 0.08 : 0,
                    background: useTransform(smoothX, (x: any) => `radial-gradient(circle 600px at ${x}px ${mouseY.get()}px, ${colors[0]}22, transparent 80%)`),
                }}
            />
        </footer>
    );
};

export default Footer;