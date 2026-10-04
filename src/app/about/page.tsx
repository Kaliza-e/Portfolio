"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Users, Palette, Sparkles, Cpu, Laptop, Code, Music, Heart, FileDown } from "lucide-react";
import { projects } from "@/data/projects";
import { projectCountLabel, siteConfig } from "@/data/site";
import { LiquidButton } from "@/components/ui/LiquidButton";
import Experience from "@/components/Experience";

export default function AboutPage() {
    return (
        <main className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neonPurple/5 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-1/2"
                        >
                            <span className="text-xs font-bold tracking-[0.5em] uppercase text-neonPurple mb-4 block">The Narrative</span>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Kaliza Esther</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8">
                                Student at Rwanda Coding Academy, full-stack developer, and technical lead driven by curiosity, empathy, and practical problem-solving.
                            </p>
                            <LiquidButton
                                href={siteConfig.resumePath}
                                download={siteConfig.resumeDownloadName}
                                color="cyan"
                                className="px-8 py-4"
                            >
                                <FileDown size={18} />
                                {siteConfig.resumeLabel}
                            </LiquidButton>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative w-full aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden border-8 border-white dark:border-white/5 shadow-2xl">
                                <Image
                                    src="/esther.png"
                                    alt="Kaliza Esther"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Roles & Leadership Summary Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="p-10 rounded-[3rem] bg-gradient-to-br from-neonPurple/10 to-transparent border border-neonPurple/20 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center shadow-lg">
                                    <Cpu className="text-neonPurple" size={32} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Empathetic Software Engineering
                                    </h3>

                                    <p className="text-neonPurple font-bold text-sm uppercase tracking-widest">
                                        Core Philosophy
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                                I believe technology is at its best when it combines technical capability with genuine human empathy. Whether developing backend APIs with NestJS and Spring Boot, crafting mobile applications, or shaping UI/UX design in Figma, my focus is building accessible solutions that improve everyday life.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="p-10 rounded-[3rem] bg-gradient-to-br from-neonBlue/10 to-transparent border border-neonBlue/20 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center shadow-lg">
                                    <Sparkles className="text-neonBlue" size={32} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Collaborative Tech Leadership
                                    </h3>

                                    <p className="text-neonBlue font-bold text-sm uppercase tracking-widest">
                                        Leadership & Vision
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                                Through roles like Technical Lead at RareBridge and OpportunityMap, I guide product architecture, align development goals with community needs, and work closely with cross-functional teams to translate vision into deployed software.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Experience Section Component */}
            <Experience />

            {/* Detailed Story Section */}
            <section className="py-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-24">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <h2 className="text-4xl font-bold sticky top-32">My Journey</h2>
                            </div>
                            <div className="md:w-2/3 space-y-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>
                                    My interest in technology began with seeing how software can address real challenges in people&apos;s daily lives. Participating in the African Girls Can Code Initiative (AGCCI) in 2024 was a pivotal moment — it deepened my fascination with programming and made the underrepresentation of girls in STEM much more noticeable to me.
                                </p>

                                <p>
                                    As a student at Rwanda Coding Academy, I have continued developing my technical skills across computer science education, collaborative engineering, and leadership roles. I work across full-stack web development, backend APIs, databases, mobile application development, and UI/UX design.
                                </p>

                                <p>
                                    Beyond technical work, my background in music and school cultural activities has shaped how I approach collaboration, creativity, and communication. I view engineering and creative expression as deeply connected — both require harmony, precision, and an understanding of the human audience.
                                </p>

                                <p>
                                    I have contributed to meaningful platforms such as TOUR (research publishing), RareBridge (rare-disease support), Rwanda E-Pharmacy (digital pharmacy infrastructure), and OpportunityMap (opportunity discovery). I aim to continue building software that combines technical rigor with lasting social impact.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-8">
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                                        <p className="text-3xl font-bold text-neonPurple">2024</p>
                                        <p className="text-sm font-bold uppercase tracking-widest mt-2">AGCCI Coding Camp</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                                        <p className="text-3xl font-bold text-neonBlue">{projectCountLabel(projects.length)}</p>
                                        <p className="text-sm font-bold uppercase tracking-widest mt-2">Projects Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <h2 className="text-4xl font-bold sticky top-32">What I Do</h2>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Full-Stack Web", icon: Laptop, desc: "Building modern, responsive web apps with Next.js, React, and TypeScript." },
                                    { title: "Backend & APIs", icon: Code, desc: "Architecting REST APIs and database workflows using NestJS, Spring Boot, Prisma & PostgreSQL." },
                                    { title: "Mobile Apps", icon: Cpu, desc: "Developing cross-platform mobile experiences with React Native." },
                                    { title: "UI/UX & Product Design", icon: Palette, desc: "Designing accessible, human-centered interfaces in Figma." },
                                    { title: "Technical Leadership", icon: Users, desc: "Guiding product architecture, coordinating development, and translating requirements." },
                                    { title: "Creative Collaboration", icon: Music, desc: "Drawing on musical & cultural activities to foster teamwork and creativity." },
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-neonPurple/50 transition-colors">
                                        <item.icon className="text-neonPurple mb-4 group-hover:scale-110 transition-transform" size={24} />
                                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-white/40">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}