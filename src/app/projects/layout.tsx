import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore featured projects by Kaliza Esther — Web development, mobile development, UI/UX design, and more.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}