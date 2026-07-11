export interface EducationEntry {
    id: number;
    institution: string;
    program: string;
    status: "current" | "completed";
    statusLabel: string;
    date: string;
    description: string;
    highlights: string[];
    image: string;
    logo: string;
    accent: "purple" | "cyan" | "blue";
}

export const educationEntries: EducationEntry[] = [
    {
        id: 1,
        institution: "Rwanda Coding Academy",
        program: "Advanced Level — Software Development",
        status: "current",
        statusLabel: "Currently Enrolled",
        date: "2024 — 2027",
        description:
            "Pursuing an intensive software engineering education focused on full-stack web development, mobile application development, UI/UX design, embedded systems, cybersecurity, networking, and cloud technologies. Actively participating in hackathons, innovation challenges, and real-world software projects.",
        highlights: [
            "Full Stack Development",
            "Mobile Development",
        ],
        image: "/education_rca.png",
        logo: "/logo_rca.png",
        accent: "purple",
    },
    {
        id: 2,
        institution: "Lycee Notre Dame de citeaux",
        program: "Ordinary Level Education",
        status: "completed",
        statusLabel: "Completed",
        date: "2021 — 2023",
        description:
            "Completed Ordinary Level studies while developing strong analytical, leadership, and problem-solving skills. Built a solid foundation in mathematics, sciences, and technology that inspired a passion for software engineering.",
        highlights: [
            "Mathematics",
            "Sciences",
            "Leadership",
        ],
        image: "/education_lndc.png",
        logo: "/logo_lndc.png",
        accent: "cyan",
    },
    {
        id: 3,
        institution: "Espoir Primary School",
        program: "Primary School",
        status: "completed",
        statusLabel: "Completed",
        date: "2014 — 2021",
        description:
            "Completed primary education with excellent academic performance while actively participating in extracurricular activities that fostered creativity, teamwork, and communication skills.",
        highlights: [
            "Academic Excellence",
            "Creativity",
            "Teamwork",
        ],
        image: "/education_espoir.png",
        logo: "/logo_espoir.png",
        accent: "blue",
    },
];

export const accentStyles = {
    purple: {
        gradient: "from-neonPurple/20 to-neonPurple/5",
        border: "border-neonPurple/30",
        badge: "bg-neonPurple/15 text-neonPurple border-neonPurple/25",
        dot: "bg-neonPurple shadow-[0_0_20px_rgba(168,85,247,0.8)]",
        line: "from-neonPurple to-neonPurple/40",
    },
    cyan: {
        gradient: "from-neonCyan/20 to-neonCyan/5",
        border: "border-neonCyan/30",
        badge: "bg-neonCyan/15 text-neonCyan border-neonCyan/25",
        dot: "bg-neonCyan shadow-[0_0_20px_rgba(6,182,212,0.8)]",
        line: "from-neonCyan to-neonCyan/40",
    },
    blue: {
        gradient: "from-neonBlue/20 to-neonBlue/5",
        border: "border-neonBlue/30",
        badge: "bg-neonBlue/15 text-neonBlue border-neonBlue/25",
        dot: "bg-neonBlue shadow-[0_0_20px_rgba(59,130,246,0.8)]",
        line: "from-neonBlue to-neonBlue/40",
    },
} as const;