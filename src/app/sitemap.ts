import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url;

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${base}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...projectRoutes];
}