import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectDetailClientProps = {
    slug: string;
};

export default function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
    const project = projects.find((item) => item.slug === slug);

    if (!project) notFound();

    return (
        <main className="min-h-screen px-6 py-24 text-slate-100">
            <div className="mx-auto max-w-4xl space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Project</p>
                <h1 className="text-4xl font-semibold sm:text-5xl">{project.title}</h1>
                <p className="max-w-2xl text-lg text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    );
}