"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { LiquidButton } from "./ui/LiquidButton";
import { projects } from "@/data/projects";

const MAX_HOME_PROJECTS = 10;
const homeProjects = projects.slice(0, MAX_HOME_PROJECTS);

function ProjectCard({ project, index }: {
    project: (typeof projects)[number],
    index: number
}) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    return (
        <div ref={containerRef} className="h-screen w-full sticky top-0 flex items-center justify-center p-3 md:p-6 lg:p-8 overflow-hidden perspective-1000">
            <motion.div
                style={{ scale, opacity, y, transformOrigin: 'top center' }}
                className="relative w-full h-full max-h-[1100px] flex flex-col lg:flex-row overflow-hidden rounded-xl md:rounded-2xl bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-2xl will-change-transform"
            >
                {/* Image Section (Left) */}
                <div className="relative w-full lg:w-[55%] h-[40%] lg:h-full bg-slate-100 dark:bg-black overflow-hidden shrink-0 group border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority={index < 2}
                    />
                </div>

                {/* Content Section (Right) */}
                <div className="w-full lg:w-[45%] h-[60%] lg:h-full p-6 md:p-10 lg:p-14 xl:p-20 flex flex-col justify-center relative bg-white dark:bg-[#0a0a0c] z-10 shrink-0 border-t lg:border-t-0 lg:border-l border-black/5 dark:border-white/5">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-4 lg:mb-6">
                            <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 flex items-center justify-center">
                                {project.icon && <project.icon size={18} className="text-slate-800 dark:text-white" />}
                            </div>
                            <span className="text-slate-500 dark:text-white/60 text-xs font-bold tracking-widest uppercase">{project.date}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-3 lg:mb-5 leading-[1.1] tracking-tight">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className={i === project.title.split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue inline-block" : "inline-block"}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h3>

                        <p className="text-xs md:text-sm lg:text-base text-slate-600 dark:text-slate-400 mb-6 lg:mb-8 leading-relaxed max-w-xl">
                            {project.longDesc || project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
                            {project.tech.map((skill, si) => (
                                <span
                                    key={si}
                                    className="rounded-full bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-700 dark:text-slate-300 backdrop-blur-sm transition-colors hover:bg-slate-200 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <LiquidButton href={`/projects/${project.slug}`} color="purple" className="w-max">
                            VIEW PROJECT
                            <ArrowUpRight size={16} className="-translate-y-0.5" />
                        </LiquidButton>
                    </motion.div>

                    {/* Faint Background Number */}
                    <div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-12 text-slate-900/[0.03] dark:text-white/[0.03] text-[8rem] lg:text-[15rem] font-black leading-none pointer-events-none select-none z-0">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative w-full isolate">
            {/* Header — tall enough for large title; no overlap with Skills above */}
            <div className="relative pt-20 md:pt-28 pb-14 md:pb-20 px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900/10 dark:text-white/20 uppercase tracking-tighter leading-[1.05]">
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue opacity-100">
                            Works
                        </span>
                    </h2>
                </motion.div>
            </div>

            {/* The Stacking Section — first 10 */}
            <div className="relative w-full">
                {homeProjects.map((project, i) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={i}
                    />
                ))}
            </div>

            {/* View All Work CTA */}
            <div className="h-[40vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <LiquidButton href="/projects" color="purple" className="px-12 py-6 text-xs tracking-[0.2em]">
                        View All Work
                        <ArrowRight size={18} />
                    </LiquidButton>
                    <p className="mt-6 text-sm text-slate-400 dark:text-white/30 font-medium">
                        {projects.length} projects and counting
                    </p>
                </motion.div>
            </div>
        </section>
    );
}