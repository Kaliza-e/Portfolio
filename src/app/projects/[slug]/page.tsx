import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Kaliza Esther`,
        description: project.desc,
        openGraph: {
            title: project.title,
            description: project.desc,
            images: [{ url: project.image }],
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    return <ProjectDetailClient slug={slug} />;
}