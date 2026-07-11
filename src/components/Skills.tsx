"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Brain, Code2, TrendingUp, Layout, Box, Cloud, Database, Lock
} from "lucide-react";

const skills = [
    {
        id: 0,
        label: "Full Stack Development",
        desc: "Modern Web Applications & Enterprise Systems",
        icon: Code2,
        color: "#06b6d4",
        shadow: "rgba(6, 182, 212, 0.35)",
        tags: ["React", "Next.js", "Node.js", "Express"],
        level: 92,
        accent: "#06b6d4"
    },
    {
        id: 1,
        label: "Backend Engineering",
        desc: "APIs, Databases & Server Architecture",
        icon: Database,
        color: "#8b5cf6",
        shadow: "rgba(139, 92, 246, 0.35)",
        tags: ["Spring Boot", "NestJS", "MongoDB", "PostgreSQL"],
        level: 88,
        accent: "#8b5cf6"
    },
    {
        id: 2,
        label: "Mobile Development",
        desc: "Cross-platform Mobile Applications",
        icon: Layout,
        color: "#ec4899",
        shadow: "rgba(236, 72, 153, 0.35)",
        tags: ["React Native", "Mobile UI", "APIs"],
        level: 85,
        accent: "#ec4899"
    },
    {
        id: 3,
        label: "UI/UX Design",
        desc: "User-Centered Digital Experiences",
        icon: TrendingUp,
        color: "#f59e0b",
        shadow: "rgba(245, 158, 11, 0.35)",
        tags: ["Figma", "Prototyping", "Design Systems"],
        level: 90,
        accent: "#f59e0b"
    },
    {
        id: 4,
        label: "IoT & Embedded Systems",
        desc: "Hardware Integration & Smart Devices",
        icon: Box,
        color: "#10b981",
        shadow: "rgba(16, 185, 129, 0.35)",
        tags: ["Arduino", "Sensors", "Embedded C"],
        level: 78,
        accent: "#10b981"
    },
    {
        id: 5,
        label: "Web3 Development",
        desc: "Blockchain Applications & Smart Contracts",
        icon: Cloud,
        color: "#3b82f6",
        shadow: "rgba(59, 130, 246, 0.35)",
        tags: ["Solidity", "Web3.js", "IPFS"],
        level: 76,
        accent: "#3b82f6"
    },
];

export default function Skills() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="skills" className="pt-32 pb-40 md:pb-48 relative overflow-hidden transition-colors duration-500">
            {/* Ambient Background */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black tracking-[0.6em] uppercase text-purple-500 mb-4 block"
                    >
                        Capabilities
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase"
                    >
                        Technical{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                            Arsenal
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-0.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"
                    />
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        const isHovered = hoveredId === skill.id;

                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: index * 0.07, type: "spring", stiffness: 280, damping: 22 }}
                                onHoverStart={() => setHoveredId(skill.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                whileHover={{ y: -6 }}
                                className="relative group cursor-default"
                            >
                                {/* Glow border on hover */}
                                <div
                                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, ${skill.color}60, transparent 60%)`,
                                        borderRadius: "1rem",
                                    }}
                                />

                                <div
                                    className="relative h-full rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-500"
                                    style={{
                                        background: isHovered
                                            ? `linear-gradient(145deg, ${skill.color}12, transparent)`
                                            : undefined,
                                        border: `1px solid ${isHovered ? skill.color + "50" : "rgba(148,163,184,0.1)"}`,
                                        backgroundColor: isHovered ? undefined : "rgba(255,255,255,0.02)",
                                        boxShadow: isHovered
                                            ? `0 20px 60px -10px ${skill.shadow}, inset 0 1px 0 ${skill.color}20`
                                            : "0 1px 3px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    {/* Shimmer on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
                                        style={{
                                            background: `radial-gradient(ellipse at 20% 20%, ${skill.color}08 0%, transparent 60%)`,
                                        }}
                                    />

                                    {/* Icon + number row */}
                                    <div className="flex items-start justify-between">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                                            style={{
                                                background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}08)`,
                                                border: `1px solid ${skill.color}30`,
                                            }}
                                        >
                                            <Icon size={22} style={{ color: skill.color }} />
                                        </div>
                                        <span
                                            className="text-xs font-black tabular-nums transition-colors duration-300"
                                            style={{ color: isHovered ? skill.color : "rgba(148,163,184,0.4)" }}
                                        >
                                            {String(skill.id + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Label & Desc */}
                                    <div className="flex flex-col gap-1">
                                        <h3
                                            className="text-base font-bold text-slate-900 dark:text-white leading-tight tracking-tight transition-colors duration-300"
                                        >
                                            {skill.label}
                                        </h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-snug">
                                            {skill.desc}
                                        </p>
                                    </div>

                                    {/* Skill Level Bar */}
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                                Proficiency
                                            </span>
                                            <motion.span
                                                className="text-[10px] font-black"
                                                style={{ color: skill.color }}
                                                animate={{ opacity: isHovered ? 1 : 0.5 }}
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </div>
                                        <div className="h-1 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}99)` }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {skill.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all duration-300"
                                                style={{
                                                    background: isHovered ? `${skill.color}18` : "rgba(148,163,184,0.08)",
                                                    color: isHovered ? skill.color : "rgba(148,163,184,0.7)",
                                                    border: `1px solid ${isHovered ? skill.color + "30" : "rgba(148,163,184,0.1)"}`,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}