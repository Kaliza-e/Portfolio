export const siteConfig = {
    name: "Kaliza Esther",
    title: "Kaliza Esther | Full-Stack Developer & Technical Lead",
    tagline: "Software Developer, Technical Lead & UI/UX Engineer",
    description:
        "Portfolio of Kaliza Esther — Full-stack developer and student at Rwanda Coding Academy, building empathetic, accessible digital solutions across web, mobile, and backend systems.",
    heroBio:
        "Full-stack developer and technical lead building thoughtful software solutions that bridge complex engineering with intuitive, human-centered design.",
    profileBio:
        "Kaliza Esther is a software developer and technical lead studying at Rwanda Coding Academy. Driven by a commitment to solving real-world problems through empathetic engineering, she crafts full-stack web applications, mobile platforms, backend APIs, and intuitive UI/UX designs. Her experience spans initiatives like TOUR, RareBridge, Rwanda E-Pharmacy, and OpportunityMap.",
    problemStatement:
        "I focus on creating software that turns real challenges into accessible, impactful digital tools — combining technical rigor with user empathy.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://github.com/Kaliza-e",
    email: "kalizaesther5@gmail.com",
    phone: "250796250345",
    location: "Kigali, Rwanda",
    resumePath: "/certificates/KALIZA-Resume.pdf",
    resumeLabel: "Download CV",
    resumeDownloadName: "KALIZA-Resume.pdf",
    instagram: "https://www.instagram.com/kaliz_a1108/",
    instagramHandle: "instagram.com/kaliz_a1108",
    socials: [
        { name: "LNKDN", href: "https://www.linkedin.com/in/kaliza-esther-794108415" },
        { name: "INSTA", href: "https://www.instagram.com/kaliz_a1108/" },
        { name: "MAIL", href: "mailto:kalizaesther5@gmail.com" },
        { name: "GITHUB", href: "https://github.com/Kaliza-e" },
    ] as const,
};

export const projectCountLabel = (count: number) => `${count}+`;