"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "/about", icon: User },
    { name: "Skills", href: "/#skills", icon: Sparkles },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;

    return (
        <nav
            className={`navbar-root fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-2xl ${mounted ? "opacity-100" : "opacity-95"}`}
            aria-label="Main navigation"
        >
            <div
                className={`navbar-container
                flex items-center justify-between px-4 py-2 rounded-full 
                bg-white/10 dark:bg-black/40 backdrop-blur-xl 
                border border-black/10 dark:border-white/10
                dark:border-x-slate-700/50 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
                ${scrolled ? "border-neonPurple/30" : "border-black/5 dark:border-white/10"}
                transition-all duration-300
            `}
            >
                <div className="nav-logo-section flex items-center space-x-4">
                    <Link href="/" className="nav-home-link p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-slate-800 dark:text-white" aria-label="Home">
                        <Home size={20} />
                    </Link>
                    <div className="nav-separator h-4 w-[1px] bg-black/10 dark:bg-white/40" />
                </div>

                <div className="nav-links-group flex items-center space-x-2 md:space-x-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="nav-link-item flex items-center space-x-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all group"
                            title={link.name}
                        >
                            <link.icon size={18} className="text-slate-600 dark:text-white group-hover:text-neonPurple transition-colors" />
                            <span className="text-sm font-medium text-slate-700 dark:text-white group-hover:text-black dark:group-hover:text-neonPurple transition-colors hidden sm:inline">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <div className="h-4 w-[1px] bg-black/10 dark:bg-white/40" />
                    <button
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-slate-800 dark:text-white"
                        aria-label="Toggle theme"
                        type="button"
                    >
                        {mounted ? (isDark ? <Sun size={20} /> : <Moon size={20} />) : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}