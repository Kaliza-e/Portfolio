export const siteConfig = {
    name: "Kaliza Esther",
    title: "Kaliza Esther | Portfolio",
    description:
        "Portfolio of Kaliza Esther — Full stack web developer, mobile developer and ui designer.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://github.com/Kaliza-e",
    email: "kalizaesther5@gmail.com",
    phone: "250728045049",
    location: "Kigali, Rwanda",
    resumePath: "/certificates/KALIZA-Resume.pdf",
    resumeLabel: "Download CV",
    resumeDownloadName: "",
    socials: [
        { name: "LNKDN", href: "www.linkedin.com/in/kaliza-esther-794108415" },
        { name: "MAIL", href: "mailto:kalizaesther5@gmail.com" },
        { name: "GITHUB", href: "https://github.com/Kaliza-e" },
    ] as const,
};

export const projectCountLabel = (count: number) => `${count}+`;