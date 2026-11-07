import { Globe, Users, Droplets, Utensils, Music, BookOpen, Shield, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
    id: number;
    slug: string;
    title: string;
    date: string;
    description: string;
    longDesc?: string;
    image: string;
    video?: string;
    poster?: string;
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
            "Information and support platform connecting rare-disease patients, caregivers and families with a searchable disease library, specialist discovery, clinical-research updates and a caregiver community.",
        longDesc:
            "A health-information initiative connecting rare-disease patients and families with verified resources, specialist discovery, and community support.",
        image: "/project_rarebridge.png",
        video: "/videos/rarebridge.mp4",
        poster: "/videos/rarebridge-poster.jpg",
        hexColor: "#ec4899",
        tech: [
            "React 18",
            "Vite",
            "TypeScript",
            "Tailwind CSS",
            "MUI",
            "Radix UI",
            "Motion",
            "Recharts",
            "React Hook Form",
            "Zod",
            "React Router",
            "jsPDF",
            "NestJS",
            "Prisma",
            "PostgreSQL",
            "Google Sheets API",
        ],
        live: "https://rarebridge-frontend.vercel.app/",
        code: "https://github.com/Kaliza-e/rarebridge-frontend.git",
        featured: true,
        icon: Shield,
    },
    {
        id: 3,
        slug: "tour",
        title: "Tour — Between Minds",
        date: "2026",
        description:
            "Student-led research platform where young people explore STEM and society topics, submit and publish research, get peer feedback and admin review, join a question hub, and get help from an integrated 'Ask Tour AI' assistant.",
        longDesc:
            "A research publishing platform designed to streamline paper submissions, peer feedback, administrative reviews, and knowledge discovery.",
        image: "/project_tour.png",
        video: "/videos/tour.mp4",
        poster: "/videos/tour-poster.jpg",
        hexColor: "#3b82f6",
        tech: [
            "Next.js 14",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "Neon PostgreSQL",
            "NextAuth",
            "TanStack Query",
            "Framer Motion",
            "Cloudinary",
            "WebSockets",
            "AI knowledge-base search",
        ],
        live: "https://tour-between-minds.vercel.app/",
        code: "https://github.com/Kaliza-e/Tour.git",
        featured: true,
        icon: BookOpen,
    },
    {
        id: 4,
        slug: "terimbere",
        title: "Terimbere Cooperative",
        date: "2026",
        description:
            "Digital cooperative management system for member onboarding, savings, loans, contributions, an audited transaction ledger and automated financial reports.",
        longDesc:
            "A web platform digitizing cooperative operations including member savings tracking, loan administration, contribution records, and financial reports.",
        image: "/project_terimbere.png",
        video: "/videos/terimbere.mp4",
        poster: "/videos/terimbere-poster.jpg",
        hexColor: "#06b6d4",
        tech: [
            "React 19",
            "Vite",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Recharts",
            "Axios",
            "React Router",
            "Spring Boot",
            "PostgreSQL",
            "REST API",
        ],
        live: "#",
        code: "https://github.com/Kaliza-e/CooperativeMIS.git",
        featured: true,
        icon: Users,
    },
    {
        id: 5,
        slug: "foodly",
        title: "Foodly",
        date: "2025",
        description:
            "Recipe discovery and sharing platform where people browse dishes, share their own recipes, build a personal recipe list and save favourites.",
        image: "/project_foodly.png",
        video: "/videos/foodly.mp4",
        poster: "/videos/foodly-poster.jpg",
        hexColor: "#f59e0b",
        tech: [
            "React 19",
            "Vite",
            "TypeScript",
            "Tailwind CSS",
            "React Router",
            "Framer Motion",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        live: "#",
        code: "https://github.com/Kaliza-e/Foodly.git",
        icon: Utensils,
    },
    {
        id: 6,
        slug: "musica",
        title: "Musica",
        date: "2026",
        description:
            "Modern music streaming app with artist discovery, top tracks, playlists, an in-app player and premium tiers.",
        image: "/project_musica.png",
        video: "/videos/musica.mp4",
        poster: "/videos/musica-poster.jpg",
        hexColor: "#8b5cf6",
        tech: [
            "React 19",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "GSAP",
            "Lenis",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        live: "#",
        code: "https://github.com/Kaliza-e/Muzik.git",
        icon: Music,
    },
    // TODO: add video: '/videos/isonga.mp4' when the recording is ready
    {
        id: 7,
        slug: "isonga",
        title: "Isonga Connect",
        date: "2026",
        description:
            "Rwandan civic-tech platform connecting residents with local leaders through location-based updates and announcements.",
        longDesc:
            "Isonga Connect connects residents with local leaders through location-based updates and announcements about community activities, public services, health, education and emergencies. Your community. Your updates.",
        image: "/project_isonga.png",
        video: "/videos/isonga.mp4",
        hexColor: "#22c55e",
        tech: [
            "Next.js",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "TanStack Query",
            "Framer Motion",
            "React Hook Form",
            "Zod",
            "Recharts",
            "NestJS",
            "Prisma",
            "PostgreSQL",
        ],
        live: "#",
        code: "https://github.com/Kaliza-e/isonga_frontend.git",
        featured: false,
        icon: MapPin,
    },
];
