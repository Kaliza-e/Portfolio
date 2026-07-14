"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Calendar, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

const allYears = Array.from(new Set(projects.map(p => p.date))).sort((a, b) => Number(b) - Number(a));

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 24 },
    },
    exit: {
        opacity: 0,
        y: -30,
        scale: 0.92,
        transition: { duration: 0.25 },
    },
};

export default function AllProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("All");

    const filtered = activeFilter === "All"
        ? projects
        : projects.filter(p => p.date === activeFilter);

    return (
        <main className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500">
            <Navbar />

            {/* Hero Header */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

                {/* Floating grid lines */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-purple-500 mb-10 hover:gap-4 transition-all group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            All{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                                Works
                            </span>
                        </h1>

                        <p className="max-w-xl text-lg text-slate-500 dark:text-white/40 font-medium leading-relaxed mb-12">
                            Passionate Full Stack Software Developer, Mobile Application Developer, and UI/UX Designer building intelligent, scalable, and user-centered digital experiences.
                        </p>

                        {/* Year filter pills */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Filter size={16} className="text-slate-400 dark:text-white/30 mr-1" />
                            {["All", ...allYears].map((year) => (
                                <motion.button
                                    key={year}
                                    whileTap={{ scale: 0.93 }}
                                    onClick={() => setActiveFilter(year)}
                                    className="relative px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300"
                                    style={{
                                        background: activeFilter === year
                                            ? "linear-gradient(135deg, #a855f7, #06b6d4)"
                                            : "transparent",
                                        color: activeFilter === year ? "#fff" : undefined,
                                        border: activeFilter === year
                                            ? "1px solid transparent"
                                            : "1px solid rgba(148,163,184,0.2)",
                                    }}
                                >
                                    {year}
                                    {activeFilter === year && (
                                        <motion.div
                                            layoutId="filter-glow"
                                            className="absolute inset-0 rounded-full"
                                            style={{ boxShadow: "0 8px 30px rgba(168,85,247,0.3)" }}
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                        >
                            {filtered.map((project, i) => {
                                const ProjectIcon = project.icon;
                                return (
                                    <motion.div
                                        key={project.slug}
                                        variants={cardVariants}
                                        layout
                                        className="group relative"
                                    >
                                        <Link href={`/projects/${project.slug}`} className="block">
                                            <div
                                                className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                                                style={{
                                                    border: "1px solid rgba(148,163,184,0.12)",
                                                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                                }}
                                            >
                                                {/* Image Section */}
                                                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-black/40">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    {/* Overlay gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0c] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                                                    {/* Year badge */}
                                                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/5 dark:border-white/10">
                                                        <Calendar size={11} className="text-purple-500" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-white/80">{project.date}</span>
                                                    </div>

                                                    {/* Hover arrow */}
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileHover={{ opacity: 1, scale: 1 }}
                                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-black/5 dark:border-white/10"
                                                    >
                                                        <ArrowUpRight size={16} className="text-slate-900 dark:text-white" />
                                                    </motion.div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 bg-white dark:bg-[#0a0a0c]">
                                                    {/* Icon + Title */}
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <div
                                                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                                                            style={{
                                                                background: `linear-gradient(135deg, ${project.hexColor}20, ${project.hexColor}08)`,
                                                                border: `1px solid ${project.hexColor}30`,
                                                            }}
                                                        >
                                                            <ProjectIcon size={18} style={{ color: project.hexColor }} />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                                                {project.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                                                        {project.description}
                                                    </p>

                                                    {/* Tech tags */}
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.tech.slice(0, 3).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all duration-300"
                                                                style={{
                                                                    background: "rgba(148,163,184,0.08)",
                                                                    color: "rgba(148,163,184,0.7)",
                                                                    border: "1px solid rgba(148,163,184,0.1)",
                                                                }}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {project.tech.length > 3 && (
                                                            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 px-1">
                                                                +{project.tech.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Bottom accent line on hover */}
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    style={{
                                                        background: `linear-gradient(to right, ${project.hexColor}, transparent)`,
                                                    }}
                                                />
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-32"
                        >
                            <p className="text-2xl font-bold text-slate-300 dark:text-white/20">No projects found for {activeFilter}</p>
                        </motion.div>
                    )}
                </div>
            </section>

        </main>
    );
}