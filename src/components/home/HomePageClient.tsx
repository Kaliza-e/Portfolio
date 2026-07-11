"use client";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Wind, ArrowUpRight, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import { LiquidButton } from "@/components/ui/LiquidButton";
import About from "@/components/About";
import Projects from "@/components/Projects";
import LoadingScreen from "@/components/LoadingScreen";
import HeroOrb from "@/components/HeroOrb";
import ScrollControls from "@/components/ScrollControls";
import Skills from "@/components/Skills";
import ScrollRevealText from "@/components/ScrollRevealText";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import { siteConfig } from "@/data/site";

export default function HomePageClient() {
    const [loaded, setLoaded] = useState(false);
    const [highEnergy, setHighEnergy] = useState(false);

    useEffect(() => {
        if (!loaded) return;
        const hash = window.location.hash;
        if (!hash) return;
        const timer = setTimeout(() => {
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
    }, [loaded]);

    const onEnterComplete = useCallback(() => setLoaded(true), []);

    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to content
            </a>

            <LoadingScreen onComplete={onEnterComplete} />

            <motion.main
                id="main-content"
                initial={false}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className={`page-main-layout min-h-screen relative ${highEnergy ? "high-energy-mode" : ""} ${loaded ? "" : "pointer-events-none"}`}
                aria-hidden={!loaded}
            >
                <ScrollControls />
                <Navbar />

                <section className="hero-section relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
                    <div className="hero-container container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className="hero-content z-20 text-center lg:text-left"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight text-slate-900 dark:text-white">
                                Hi, Welcome to{" "}
                                <span className="text-neonPurple neon-text-purple">Kaliza Esther&apos;s</span>
                                <br />
                            </h1>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonCyan text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight block">
                                Portfolio
                            </span>

                            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                                <LiquidButton href="/projects" color="purple" className="px-8 py-4">
                                    <Briefcase size={18} />
                                    View Projects
                                </LiquidButton>
                                <LiquidButton href="/contact" color="cyan" className="px-8 py-4">
                                    Hire Me
                                    <ArrowUpRight size={18} />
                                </LiquidButton>
                            </div>
                            <div className="mt-4 flex justify-center lg:justify-start">
                                <a
                                    href={siteConfig.resumePath}
                                    download={siteConfig.resumeDownloadName}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-neonPurple dark:hover:text-neonPurple transition-colors duration-200"
                                    aria-label="Download CV"
                                >
                                    <Wind size={13} className="animate-pulse" />
                                    {siteConfig.resumeLabel}
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="hero-visual h-[280px] sm:h-[380px] md:h-[420px] lg:h-[520px] relative z-10 flex items-center justify-center"
                        >
                            <HeroOrb onToggle={setHighEnergy} />
                        </motion.div>
                    </div>
                </section>

                <About />
                <ScrollRevealText />
                <Skills />
                <Projects />
                <Certificates />
                <Education />

                <div className="h-[20vh]" />
            </motion.main>
        </>
    );
}