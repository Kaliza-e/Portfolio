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
        <div ref={containerRef} className="h-screen w-full sticky top-0 flex items-center justify-center p-3 md:p-6 lg:p-8 overflow-hidden">
            <motion.div
                style={{ scale, opacity, y, transformOrigin: 'top center' }}
                className="relative w-full h-full max-h-[1100px] flex flex-col lg:flex-row overflow-hidden rounded-xl md:rounded-2xl bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_60px_-10px_rgba(168,85,247,0.15)] will-change-transform"
            >
                {/* Image Section (Left) — dark framed panel, full image always visible */}
                <div className="relative w-full lg:w-[58%] h-[45%] lg:h-full shrink-0 overflow-hidden group">
                    {/* Dark gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0d0d1a] to-slate-950" />
                    {/* Colored glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neonPurple/10 via-transparent to-neonBlue/10 z-[1]" />

                    {/* Image inside a padded, rounded frame */}
                    <div className="absolute inset-0 z-[2] flex items-center justify-center p-6 md:p-8 lg:p-10">
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] border border-white/10 group-hover:border-neonPurple/40 transition-colors duration-500">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                                priority={index < 2}
                                sizes="(max-width: 1024px) 100vw, 58vw"
                            />
                        </div>
                    </div>

                    {/* Mobile bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0c]/70 to-transparent z-[3] pointer-events-none lg:hidden" />

                    {/* Preview badge */}
                    <div className="absolute top-4 left-4 z-[4] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-[0.25em] text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Preview
                    </div>

                    {/* Index badge */}
                    <div className="absolute top-4 right-4 z-[4] w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-black text-white/50">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>

                {/* Content Section (Right) */}
                <div className="w-full lg:w-[42%] h-[55%] lg:h-full p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center relative bg-white dark:bg-[#0a0a0c] z-10 shrink-0">
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
                    <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 text-slate-900/[0.03] dark:text-white/[0.03] text-[6rem] lg:text-[10rem] font-black leading-none pointer-events-none select-none z-0">
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