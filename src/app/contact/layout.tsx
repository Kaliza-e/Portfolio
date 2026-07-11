import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Kaliza Esther for collaborations, projects, and opportunities.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}