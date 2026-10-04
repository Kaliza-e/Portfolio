"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2,
    Database,
    Smartphone,
    Palette,
    Terminal,
    Cloud,
    Box,
    Layers,
    Server,
    Filter,
    Sparkles
} from "lucide-react";

export interface SkillCategory {
    id: number;
    label: string;
    desc: string;
    statusLabel: string;
    group: "core" | "design" | "tools" | "emerging";
    icon: React.ElementType;
    color: string;
    shadow: string;
    tags: string[];
}

const skills: SkillCategory[] = [
    {
        id: 0,
        label: "Frontend Development",
        desc: "Interactive interfaces & modern web applications",
        statusLabel: "Core Stack • Used in 7+ Projects",
        group: "core",
        icon: Code2,
        color: "#06b6d4",
        shadow: "rgba(6, 182, 212, 0.35)",
        tags: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
    },
    {
        id: 1,
        label: "Backend Engineering",
        desc: "APIs, application architecture & server-side systems",
        statusLabel: "Production APIs & Microservices",
        group: "core",
        icon: Server,
        color: "#8b5cf6",
        shadow: "rgba(139, 92, 246, 0.35)",
        tags: ["Node.js", "Express.js", "NestJS", "Spring Boot", "REST APIs", "Java", "JWT Auth"],
    },
    {
        id: 2,
        label: "Databases & Data",
        desc: "Relational and NoSQL data systems",
        statusLabel: "Data Infrastructure & ORMs",
        group: "core",
        icon: Database,
        color: "#3b82f6",
        shadow: "rgba(59, 130, 246, 0.35)",
        tags: ["PostgreSQL", "MongoDB", "Prisma", "Neon", "MySQL", "SQL"],
    },
    {
        id: 3,
        label: "Mobile Development",
        desc: "Cross-platform mobile applications",
        statusLabel: "Mobile Applications",
        group: "design",
        icon: Smartphone,
        color: "#ec4899",
        shadow: "rgba(236, 72, 153, 0.35)",
        tags: ["React Native", "JavaScript", "TypeScript", "Mobile UI", "REST APIs"],
    },
    {
        id: 4,
        label: "UI/UX & Product Design",
        desc: "Interfaces, prototypes & user-centered product design",
        statusLabel: "Product & UI Design",
        group: "design",
        icon: Palette,
        color: "#f59e0b",
        shadow: "rgba(245, 158, 11, 0.35)",
        tags: ["Figma", "Prototyping", "Wireframing", "Design Systems", "Responsive Design", "UI Design", "UX Design"],
    },
    {
        id: 5,
        label: "Programming Languages",
        desc: "Languages used across application development and computing",
        statusLabel: "Core & Academic Stack",
        group: "tools",
        icon: Terminal,
        color: "#a855f7",
        shadow: "rgba(168, 85, 247, 0.35)",
        tags: ["TypeScript", "JavaScript", "Java", "Python", "C", "C++", "SQL"],
    },
    {
        id: 6,
        label: "DevOps & Cloud Tools",
        desc: "Deployment, collaboration & development infrastructure",
        statusLabel: "Dev Environment & CI/CD",
        group: "tools",
        icon: Cloud,
        color: "#14b8a6",
        shadow: "rgba(20, 184, 166, 0.35)",
        tags: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman", "Swagger", "VS Code", "Linux"],
    },
    {
        id: 7,
        label: "IoT & Embedded Systems",
        desc: "Hardware, sensors & connected systems",
        statusLabel: "Hardware Integration & Sensors",
        group: "emerging",
        icon: Box,
        color: "#10b981",
        shadow: "rgba(16, 185, 129, 0.35)",
        tags: ["Arduino", "Embedded C", "Sensors", "Microcontrollers", "Hardware Integration", "IoT"],
    },
    {
        id: 8,
        label: "Web3 & Blockchain",
        desc: "Blockchain applications & decentralized technologies",
        statusLabel: "Exploratory & Smart Contracts",
        group: "emerging",
        icon: Layers,
        color: "#6366f1",
        shadow: "rgba(99, 102, 241, 0.35)",
        tags: ["Solidity", "Smart Contracts", "Web3.js", "IPFS"],
    },
];

const filterOptions = [
    { id: "all", label: "All Capabilities" },
    { id: "core", label: "Full-Stack & Backend" },
    { id: "design", label: "Mobile & Design" },
    { id: "tools", label: "DevOps & Languages" },
    { id: "emerging", label: "Hardware & Emerging" },
] as const;

function InteractiveSkillCard({
    skill,
    index,
    selectedTag,
    onTagSelect,
}: {
    skill: SkillCategory;
    index: number;
    selectedTag: string | null;
    onTagSelect: (tag: string | null) => void;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const Icon = skill.icon;
    const hasActiveTag = selectedTag ? skill.tags.includes(selectedTag) : false;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            opacity: 1,
        });
    };

    const handleMouseLeave = () => {
        setMousePos((prev) => ({ ...prev, opacity: 0 }));
        setIsHovered(false);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -8 }}
            className="relative group cursor-default"
        >
            {/* Glow border on hover or when matching selected tag */}
            <div
                className="absolute -inset-[1px] rounded-2xl transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `linear-gradient(135deg, ${skill.color}${hasActiveTag ? "AA" : "60"}, transparent 60%)`,
                    borderRadius: "1rem",
                    opacity: isHovered || hasActiveTag ? 1 : 0,
                }}
            />

            <div
                className="relative h-full rounded-2xl p-7 flex flex-col justify-between gap-6 overflow-hidden transition-all duration-500 bg-white dark:bg-white/[0.03]"
                style={{
                    background: isHovered || hasActiveTag
                        ? `linear-gradient(145deg, ${skill.color}14, transparent)`
                        : undefined,
                    border: `1px solid ${hasActiveTag ? skill.color : isHovered ? skill.color + "60" : "rgba(148,163,184,0.12)"}`,
                    boxShadow: isHovered || hasActiveTag
                        ? `0 20px 60px -10px ${skill.shadow}, inset 0 1px 0 ${skill.color}25`
                        : "0 2px 8px rgba(0,0,0,0.04)",
                }}
            >
                {/* Spotlight cursor tracking beam */}
                <div
                    className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                    style={{
                        opacity: mousePos.opacity,
                        background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${skill.color}18, transparent 80%)`,
                    }}
                />

                {/* Top Row: Icon + Index */}
                <div className="flex items-start justify-between relative z-10">
                    <motion.div
                        animate={isHovered ? { scale: 1.12, rotate: [-2, 4, -2] } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                        style={{
                            background: `linear-gradient(135deg, ${skill.color}25, ${skill.color}08)`,
                            border: `1px solid ${skill.color}35`,
                        }}
                    >
                        <Icon size={22} style={{ color: skill.color }} />
                    </motion.div>
                    <span
                        className="text-xs font-black tabular-nums transition-colors duration-300"
                        style={{ color: isHovered || hasActiveTag ? skill.color : "rgba(148,163,184,0.4)" }}
                    >
                        {String(skill.id + 1).padStart(2, "0")}
                    </span>
                </div>

                {/* Content: Title & Description */}
                <div className="flex flex-col gap-2 relative z-10">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                        {skill.label}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {skill.desc}
                    </p>
                </div>

                {/* Evidence / Status Context Badge */}
                <div className="flex items-center gap-2 relative z-10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: skill.color }} />
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: skill.color }} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {skill.statusLabel}
                    </span>
                </div>

                {/* Interactive Technology Chips (Option B) */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5 relative z-10">
                    {skill.tags.map((tag) => {
                        const isTagSelected = selectedTag === tag;

                        return (
                            <motion.button
                                type="button"
                                key={tag}
                                whileHover={{ scale: 1.08, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onTagSelect(isTagSelected ? null : tag);
                                }}
                                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all duration-300 outline-none"
                                style={{
                                    background: isTagSelected
                                        ? skill.color
                                        : isHovered
                                            ? `${skill.color}20`
                                            : "rgba(148,163,184,0.08)",
                                    color: isTagSelected
                                        ? "#ffffff"
                                        : isHovered
                                            ? skill.color
                                            : "rgba(148,163,184,0.85)",
                                    border: `1px solid ${isTagSelected ? skill.color : isHovered ? skill.color + "40" : "rgba(148,163,184,0.12)"}`,
                                    boxShadow: isTagSelected ? `0 4px 14px ${skill.color}50` : undefined,
                                }}
                            >
                                {tag}
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredSkills = activeFilter === "all"
        ? skills
        : skills.filter((s) => s.group === activeFilter);

    return (
        <section id="skills" className="pt-32 pb-40 md:pb-48 relative overflow-hidden transition-colors duration-500">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
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
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mt-4 max-w-xl mx-auto"
                    >
                        Tools and technologies I use across products, platforms, and real-world solutions.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-0.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"
                    />
                </div>

                {/* Interactive Category Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
                    {filterOptions.map((option) => {
                        const isActive = activeFilter === option.id;
                        return (
                            <button
                                key={option.id}
                                type="button"
                                onClick={() => setActiveFilter(option.id)}
                                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 outline-none ${isActive ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-skills-filter"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-neonPurple via-neonBlue to-neonCyan shadow-[0_4px_20px_rgba(168,85,247,0.35)]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {isActive && <Sparkles size={13} className="animate-spin" style={{ animationDuration: "4s" }} />}
                                    {option.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Tag Indicator / Reset Button */}
                {selectedTag && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                            Filtering by technology: <span className="text-neonPurple font-black">{selectedTag}</span>
                        </span>
                        <button
                            type="button"
                            onClick={() => setSelectedTag(null)}
                            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neonPurple/15 text-neonPurple border border-neonPurple/30 hover:bg-neonPurple/25 transition-colors"
                        >
                            Reset Filter ✕
                        </button>
                    </motion.div>
                )}

                {/* Interactive Animated Bento Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => (
                            <InteractiveSkillCard
                                key={skill.id}
                                skill={skill}
                                index={index}
                                selectedTag={selectedTag}
                                onTagSelect={setSelectedTag}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}