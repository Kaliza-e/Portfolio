import { Globe, Users, Droplets, Utensils, Music, BookOpen, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
    id: number;
    slug: string;
    title: string;
    date: string;
    description: string;
    longDesc?: string;
    image: string;
    hexColor?: string;
    tech: string[];
    live: string;
    code: string;
    featured?: boolean;
    icon: LucideIcon;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "movia",
        title: "Movia",
        date: "2026",
        description:
            "Smart bus booking and real-time transit management platform for passengers and administrators.",
        longDesc:
            "A full-stack transportation platform featuring real-time bus tracking, route management, online ticket booking, and fleet management analytics.",
        image: "/project_movia.png",
        hexColor: "#a855f7",
        tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "Leaflet", "WebSocket", "Docker"],
        live: "#",
        code: "https://github.com/Kaliza-e/movia-frontend.git",
        featured: true,
        icon: Globe,
    },
    {
        id: 2,
        slug: "rarebridge",
        title: "RareBridge",
        date: "2026",
        description:
            "Information and support platform connecting rare-disease patients, caregivers, resources, and specialist discovery.",
        longDesc:
            "A health-information initiative connecting rare-disease patients and families with verified resources, specialist discovery, and community support.",
        image: "/project_rarebridge.png",
        hexColor: "#ec4899",
        tech: ["NestJS", "Prisma", "PostgreSQL", "Google Sheets API", "React"],
        live: "https://rarebridge-frontend.vercel.app/",
        code: "#",
        featured: true,
        icon: Shield,
    },
    {
        id: 3,
        slug: "tour",
        title: "Tour — Between Minds",
        date: "2026",
        description:
            "Student-led research publishing platform for submitting, reviewing, and publishing academic research.",
        longDesc:
            "A research publishing platform designed to streamline paper submissions, peer feedback, administrative reviews, and knowledge discovery.",
        image: "/project_tour.png",
        hexColor: "#3b82f6",
        tech: ["Next.js", "React", "TypeScript", "Prisma", "Neon PostgreSQL"],
        live: "https://tour-between-minds.vercel.app/",
        code: "#",
        featured: true,
        icon: BookOpen,
    },
    {
        id: 4,
        slug: "terimbere",
        title: "Terimbere Cooperative",
        date: "2026",
        description:
            "Digital cooperative platform simplifying member onboarding, savings, loans, and automated financial reporting.",
        longDesc:
            "A web platform digitizing cooperative operations including member savings tracking, loan administration, contribution records, and financial reports.",
        image: "/project_terimbere.png",
        hexColor: "#06b6d4",
        tech: ["Spring Boot", "React", "PostgreSQL", "REST API"],
        live: "#",
        code: "https://github.com/Kaliza-e/CooperativeMIS.git",
        featured: true,
        icon: Users,
    },
    {
        id: 5,
        slug: "isokosense",
        title: "IsokoSense",
        date: "2026",
        description:
            "IoT solution for real-time water quality monitoring, live data visualization, and automated resource reporting.",
        image: "/project_isokosense.png",
        hexColor: "#14b8a6",
        tech: ["React", "Spring Boot", "PostgreSQL", "IoT"],
        live: "#",
        code: "https://github.com/AquaSureTeam/AquaSure.git",
        icon: Droplets,
    },
    {
        id: 6,
        slug: "foodly",
        title: "Foodly",
        date: "2025",
        description:
            "Full-stack recipe discovery and sharing platform for exploring and publishing culinary recipes.",
        image: "/project_foodly.png",
        hexColor: "#f59e0b",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        live: "#",
        code: "https://github.com/Kaliza-e/Foodly.git",
        icon: Utensils,
    },
    {
        id: 7,
        slug: "musica",
        title: "Musica",
        date: "2026",
        description:
            "Modern music streaming application featuring playlists, artist discovery, and interactive media controls.",
        image: "/project_musica.png",
        hexColor: "#8b5cf6",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        live: "#",
        code: "https://github.com/Kaliza-e/Musica.git",
        icon: Music,
    },
];