export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  code: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Movia",
    description:
      "A modern smart transportation management system that enables passengers to book buses, track routes in real time, and allows administrators to manage buses, schedules, drivers, and routes efficiently.",
    image: "/projects/movia.webp",
    tech: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Leaflet",
      "WebSocket",
      "Docker",
    ],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Aura AI",
    description:
      "An AI-powered personal safety application designed to help users quickly alert trusted contacts, share live locations, and access emergency assistance.",
    image: "/projects/aura-ai.webp",
    tech: [
      "React Native",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
    ],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Terimbere Cooperative",
    description:
      "A digital cooperative management platform that simplifies member registration, savings, loans, contributions, financial reporting, and administrative operations.",
    image: "/projects/terimbere.webp",
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "REST API",
    ],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    id: 4,
    title: "NoiFix",
    description:
      "An IoT-powered renewable energy harvesting system that converts environmental noise into electrical energy while monitoring voltage generation through real-time dashboards.",
    image: "/projects/noifix.webp",
    tech: [
      "Arduino",
      "React",
      "Node.js",
      "Python",
      "MongoDB",
      "IoT",
    ],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    id: 5,
    title: "IsokoSense",
    description:
      "A smart IoT solution for monitoring water quality and usage with live dashboards, analytics, and automated reporting for sustainable resource management.",
    image: "/projects/isokosense.webp",
    tech: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "IoT",
    ],
    live: "#",
    code: "#",
  },
  {
    id: 6,
    title: "Foodly",
    description:
      "A full-stack recipe discovery and sharing platform where users can explore recipes, upload their own dishes, and engage with a community of food lovers.",
    image: "/projects/foodly.webp",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    live: "#",
    code: "#",
  },
  {
    id: 7,
    title: "Musica",
    description:
      "A modern music streaming application featuring playlists, artist discovery, responsive design, and an engaging user experience.",
    image: "/projects/musica.webp",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    live: "#",
    code: "#",
  },
];