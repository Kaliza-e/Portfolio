"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Users, Palette, Sparkles, Cpu, Gamepad2, Laptop, Code } from "lucide-react";
import { projects } from "@/data/projects";
import { projectCountLabel, siteConfig } from "@/data/site";
import { FileDown } from "lucide-react";
import { LiquidButton } from "@/components/ui/LiquidButton";

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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Full Stack Developer</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8">
                                A Full Stack Web Developer and UI Designer who believes that great products are not just built — they are designed to feel alive.
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
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-white/10 z-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-neonPurple/10 flex items-center justify-center">
                                        <Sparkles className="text-neonPurple" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Focus</p>
                                        <p className="font-bold">Scalable Systems & UI/UX</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Roles & Leadership Section */}
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
                                        Artificial Intelligence & Innovation
                                    </h3>

                                    <p className="text-neonPurple font-bold text-sm uppercase tracking-widest">
                                        Current Learning Focus
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                                I am continuously expanding my knowledge in Artificial Intelligence, Machine Learning, IoT systems, and modern software engineering. I enjoy participating in hackathons and innovation challenges where I can apply technology to solve meaningful community problems.
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
                                        Future Vision
                                    </h3>

                                    <p className="text-neonBlue font-bold text-sm uppercase tracking-widest">
                                        IwacuTech
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                                I aspire to establish IwacuTech, a technology company focused on creating innovative software solutions that improve education, healthcare, transportation, agriculture, and everyday life across Africa through responsible technology and artificial intelligence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                                    My journey into technology began when I attended the African Girls Can Code Initiative  Camp, where I was introduced to programming for the very first time. That experience inspired me to pursue software development and showed me how technology can be used to create meaningful change.
                                </p>

                                <p>
                                    Since then, I have continued building my skills at Rwanda Coding Academy, developing projects across web development, mobile applications,  IoT systems, and UI/UX design. I enjoy learning new technologies, collaborating with others during hackathons, and constantly challenging myself to create better solutions for real-world problems.
                                </p>

                                <p>
                                    Today, I continue exploring software engineering while preparing for university, with the long-term vision of becoming an AI engineer and entrepreneur who builds technology capable of improving lives both in Rwanda and around the world.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-8">
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                                        <p className="text-3xl font-bold text-neonPurple">2024</p>
                                        <p className="text-sm font-bold uppercase tracking-widest mt-2">Started Coding</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                                        <p className="text-3xl font-bold text-neonBlue">{projectCountLabel(projects.length)}</p>
                                        <p className="text-sm font-bold uppercase tracking-widest mt-2">Projects Completed</p>
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
                                    { title: "Web Development", icon: Laptop, desc: "Crafting high-performance, responsive web apps." },
                                    { title: "Mobile Development", icon: Cpu, desc: "Building native mobile experiences with React Native." },
                                    { title: "UI/UX Design", icon: Palette, desc: "Designing beautiful, human-centered interfaces." },
                                    { title: "System Architecture", icon: Code, desc: "Designing robust and scalable software systems." },
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-neonPurple/50 transition-colors">
                                        <item.icon className="text-neonPurple mb-4 group-hover:scale-110 transition-transform" />
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