export interface ExperienceEntry {
    id: number;
    role: string;
    organization: string;
    period: string;
    statusLabel?: string;
    description: string;
    responsibilities: string[];
    skills: string[];
    accent: "purple" | "cyan" | "blue";
}

export const experienceEntries: ExperienceEntry[] = [
    {
        id: 1,
        role: "Full-Stack Developer",
        organization: "TOUR (Between Minds)",
        period: "2026 — Present",
        statusLabel: "Full-Stack Development",
        description:
            "Building and developing TOUR, a student-led research publishing platform designed to help people turn questions and curiosity into structured research and share their findings with a wider audience.",
        responsibilities: [
            "Developing and maintaining full-stack features across the platform",
            "Building responsive user interfaces and backend services for research submission and publishing workflows",
            "Designing and integrating APIs, database models, and application logic",
            "Implementing researcher-facing features for submitting, managing, and refining research",
            "Improving platform usability and creating a more accessible, human-centered research experience",
        ],
        skills: ["Full-Stack Dev", "React", "Next.js", "REST APIs", "Database Models", "UI/UX Design"],
        accent: "cyan",
    },
    {
        id: 2,
        role: "Technical Lead",
        organization: "RareBridge",
        period: "2026 — Present",
        statusLabel: "Technical Leadership",
        description:
            "Providing technical direction and architecture decisions for RareBridge, a health-information initiative connecting rare-disease patients, caregivers, and families with verified resources, clinical trials, and specialist discovery.",
        responsibilities: [
            "Technical direction and architectural planning for platform services",
            "Coordinating development workflows and core API integrations",
            "Contributing to backend service transition from Prisma/PostgreSQL to structured data pipelines",
            "Helping shape human-centered features for rare-disease communities",
        ],
        skills: ["Technical Leadership", "NestJS", "Prisma", "PostgreSQL", "Google Sheets API", "React"],
        accent: "purple",
    },
    {
        id: 3,
        role: "Backend Engineer",
        organization: "Rwanda E-Pharmacy",
        period: "2025 — 2026",
        statusLabel: "Development & Testing Phase",
        description:
            "Engineered backend REST APIs and database infrastructure for a digital pharmacy platform designed around patients, pharmacies, and pharmacists during its active development and demonstration phase.",
        responsibilities: [
            "Architected scalable REST APIs using NestJS framework",
            "Designed database schemas and migrations with Prisma ORM and PostgreSQL",
            "Built interactive Swagger API documentation and streamlined frontend integration",
            "Implemented secure authentication and role-based access control workflows",
        ],
        skills: ["NestJS", "Prisma", "PostgreSQL", "REST APIs", "Swagger", "JWT Auth"],
        accent: "cyan",
    },
    {
        id: 4,
        role: "Technical Lead & UI/UX Designer",
        organization: "OpportunityMap",
        period: "2025 — 2026",
        statusLabel: "Product Design & Dev",
        description:
            "Led product design and technical frontend execution for OpportunityMap, translating product requirements into intuitive user interface designs and responsive web applications.",
        responsibilities: [
            "Translated complex user needs into high-fidelity Figma UI/UX designs",
            "Guided technical direction and component architecture for frontend delivery",
            "Developed responsive web components using React, Next.js, and Tailwind CSS",
            "Collaborated cross-functionally with team members to deliver seamless user experiences",
        ],
        skills: ["UI/UX Design", "Figma", "React", "Next.js", "Tailwind CSS", "Technical Direction"],
        accent: "blue",
    },
];
