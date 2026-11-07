"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectMedia from "@/components/ProjectMedia";
import { ProjectActions } from "@/components/ProjectActions";
import { projects } from "@/data/projects";

type ProjectDetailClientProps = {
    slug: string;
};

export default function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
    const project = projects.find((item) => item.slug === slug);

    if (!project) notFound();

    const ProjectIcon = project.icon;

    return (
        <main className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 relative pb-28">
            <Navbar />

            {/* Background glow effects matching the portfolio theme */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 pt-36 max-w-5xl relative z-10">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-purple-500 mb-8 hover:gap-3 transition-all group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header Meta: Icon + Date */}
                <div className="flex items-center gap-3 mb-5">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                            background: `linear-gradient(135deg, ${project.hexColor}25, ${project.hexColor}10)`,
                            border: `1px solid ${project.hexColor}40`,
                        }}
                    >
                        {ProjectIcon && <ProjectIcon size={18} style={{ color: project.hexColor }} />}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-white/70">
                        <Calendar size={12} className="text-purple-500" />
                        {project.date}
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                    {project.title.split(' ').map((word, i) => (
                        <span
                            key={i}
                            className={
                                i === project.title.split(' ').length - 1
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue inline-block"
                                    : "inline-block"
                            }
                        >
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-8">
                    {project.longDesc || project.description}
                </p>

                {/* Media Showcase */}
                <div className="relative w-full aspect-[16/9] max-h-[620px] rounded-2xl overflow-hidden bg-slate-900/60 border border-black/10 dark:border-white/10 shadow-2xl mb-10">
                    <ProjectMedia
                        project={project}
                        isDetailPage={true}
                        priority={true}
                        objectFit="contain"
                        className="w-full h-full rounded-2xl"
                        sizes="(max-width: 1200px) 100vw, 1024px"
                    />
                </div>

                {/* Tech Stack Badges */}
                <div className="mb-10">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-white/40 mb-4">
                        Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 backdrop-blur-sm transition-colors hover:bg-slate-200 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-white/40 mb-4">
                        Project Links
                    </h3>
                    <ProjectActions project={project} />
                </div>
            </div>
        </main>
    );
}
