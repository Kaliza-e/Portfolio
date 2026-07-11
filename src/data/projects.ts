import { Cpu, Globe, Users, Zap, Droplets, Utensils, Music } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  slug: string;
  title: string;
  date: string;
  description: string;
  longDesc?: string;
  image: string;
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
    date: "2024",
    description:
      "A modern smart transportation management system that enables passengers to book buses, track routes in real time, and allows administrators to manage buses, schedules, drivers, and routes efficiently.",
    longDesc:
      "Movia is a full-stack transportation platform built to modernize public transit. Passengers can book rides, track buses live on a map, and receive real-time alerts — while admins manage fleets, schedules, drivers, and analytics from a unified dashboard.",
    image: "/project_movia.png",
    tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "Leaflet", "WebSocket", "Docker"],
    live: "#",
    code: "#",
    featured: true,
    icon: Globe,
  },
  {
    id: 2,
    slug: "secureshake",
    title: "SecureShake",
    date: "2024",
    description:
      "An emergency alert mobile app designed to help users quickly alert trusted contacts, share live locations, and access emergency assistance.",
    longDesc:
      "SecureShake empowers users to trigger emergency alerts with a single shake gesture. It instantly notifies trusted contacts with a live location link and connects to local emergency services — all without requiring the user to unlock their phone.",
    image: "/project_aura.png",
    tech: ["React Native", "React", "Node.js", "Express", "MongoDB"],
    live: "#",
    code: "#",
    featured: true,
    icon: Zap,
  },
  {
    id: 3,
    slug: "terimbere",
    title: "Terimbere Cooperative",
    date: "2024",
    description:
      "A digital cooperative management platform that simplifies member registration, savings, loans, contributions, financial reporting, and administrative operations.",
    longDesc:
      "Terimbere digitizes the full lifecycle of a cooperative — from member onboarding and savings tracking to loan management, contribution records, and automated financial reports — replacing manual paper-based processes with a secure web platform.",
    image: "/project_terimbere.png",
    tech: ["Spring Boot", "React", "PostgreSQL", "REST API"],
    live: "#",
    code: "#",
    featured: true,
    icon: Users,
  },
  {
    id: 4,
    slug: "noifix",
    title: "NoiFix",
    date: "2023",
    description:
      "An IoT-powered renewable energy harvesting system that converts environmental noise into electrical energy while monitoring voltage generation through real-time dashboards.",
    longDesc:
      "NoiFix is an experimental IoT project that harvests ambient noise energy via piezoelectric transducers, converts it to usable electrical charge, and visualizes the output in real-time through a web dashboard with live charts and analytics.",
    image: "/project_isokosense.png",
    tech: ["Arduino", "React", "Node.js", "Python", "MongoDB", "IoT"],
    live: "#",
    code: "#",
    featured: true,
    icon: Cpu,
  },
  {
    id: 5,
    slug: "isokosense",
    title: "IsokoSense",
    date: "2024",
    description:
      "A smart IoT solution for monitoring water quality and usage with live dashboards, analytics, and automated reporting for sustainable resource management.",
    image: "/project_isokosense.png",
    tech: ["React", "Spring Boot", "PostgreSQL", "IoT"],
    live: "#",
    code: "#",
    icon: Droplets,
  },
  {
    id: 6,
    slug: "foodly",
    title: "Foodly",
    date: "2023",
    description:
      "A full-stack recipe discovery and sharing platform where users can explore recipes, upload their own dishes, and engage with a community of food lovers.",
    image: "/project_foodly.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "#",
    code: "#",
    icon: Utensils,
  },
  {
    id: 7,
    slug: "musica",
    title: "Musica",
    date: "2023",
    description:
      "A modern music streaming application featuring playlists, artist discovery, responsive design, and an engaging user experience.",
    image: "/project_musica.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "#",
    code: "#",
    icon: Music,
  },
];