"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, Sparkles, Code2, Layout } from "lucide-react";
import { experienceEntries, type ExperienceEntry } from "@/data/experience";

const accentMap = {
    purple: {
        border: "border-neonPurple/30 group-hover:border-neonPurple/60",
        badge: "bg-neonPurple/15 text-neonPurple border-neonPurple/25",
        glow: "from-neonPurple/15 via-neonPurple/5 to-transparent",
        dot: "bg-neonPurple shadow-[0_0_15px_rgba(168,85,247,0.7)]",
        icon: "text-neonPurple",
    },
    cyan: {
        border: "border-neonCyan/30 group-hover:border-neonCyan/60",
        badge: "bg-neonCyan/15 text-neonCyan border-neonCyan/25",
        glow: "from-neonCyan/15 via-neonCyan/5 to-transparent",
        dot: "bg-neonCyan shadow-[0_0_15px_rgba(6,182,212,0.7)]",
        icon: "text-neonCyan",
    },
    blue: {
        border: "border-neonBlue/30 group-hover:border-neonBlue/60",
        badge: "bg-neonBlue/15 text-neonBlue border-neonBlue/25",
        glow: "from-neonBlue/15 via-neonBlue/5 to-transparent",
        dot: "bg-neonBlue shadow-[0_0_15px_rgba(59,130,246,0.7)]",
        icon: "text-neonBlue",
    },
};

export default function Experience() {
    return (
        <section id="experience" className="py-28 md:py-36 relative overflow-hidden transition-colors duration-500">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-neonPurple/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black tracking-[0.6em] uppercase text-neonPurple mb-4 block"
                    >
                        Experience & Leadership
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase"
                    >
                        Professional{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-neonBlue to-neonCyan">
                            Roles
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-0.5 w-28 bg-gradient-to-r from-neonPurple to-neonCyan mx-auto mt-6 rounded-full"
                    />
                </div>

                {/* Experience Cards List */}
                <div className="space-y-8 max-w-5xl mx-auto">
                    {experienceEntries.map((exp, index) => {
                        const style = accentMap[exp.accent];

                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div
                                    className={`relative overflow-hidden rounded-3xl bg-white dark:bg-white/[0.03] border ${style.border} p-8 md:p-10 transition-all duration-500 shadow-sm hover:shadow-2xl`}
                                >
                                    {/* Hover Radial Gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${style.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                                    />

                                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        {/* Main Role & Org info */}
                                        <div className="space-y-4 max-w-2xl">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full ${style.dot}`} />
                                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <span className="text-lg md:text-xl font-medium text-slate-400 dark:text-slate-500">
                                                    @ <span className="text-slate-800 dark:text-slate-200 font-semibold">{exp.organization}</span>
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                                                    {exp.period}
                                                </span>
                                                {exp.statusLabel && (
                                                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${style.badge}`}>
                                                        {exp.statusLabel}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                                                {exp.description}
                                            </p>

                                            {/* Bulleted responsibilities */}
                                            <ul className="space-y-2 pt-2">
                                                {exp.responsibilities.map((resp, i) => (
                                                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                                                        <ChevronRight size={16} className={`shrink-0 mt-0.5 ${style.icon}`} />
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack Pills */}
                                        <div className="lg:w-72 shrink-0 pt-2 lg:pt-0">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3 block">
                                                Core Tech & Skills
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, si) => (
                                                    <span
                                                        key={si}
                                                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
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
