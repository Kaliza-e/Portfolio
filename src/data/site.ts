export const siteConfig = {
    name: "Kaliza Esther",
    title: "Kaliza Esther | Portfolio",
    description:
        "Portfolio of Kaliza Esther — Student, developer, and designer building intelligent experiences with code, design, and innovation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://amnaimran.dev",
    email: "[EMAIL_ADDRESS]",
    phone: "+92 3330495370",
    location: "Kigali, Rwanda",
    resumePath: "/amnaimran-resume.pdf",
    resumeLabel: "Download CV",
    resumeDownloadName: "Amna-Imran-Resume.pdf",
    socials: [
        { name: "LNKDN", href: "https://www.linkedin.com/in/amna-imran-4385052a7/" },
        { name: "MAIL", href: "mailto:amnaimran404@gmail.com" },
        { name: "GITHUB", href: "https://github.com/amna236" },
    ] as const,
};

export const projectCountLabel = (count: number) => `${count}+`;