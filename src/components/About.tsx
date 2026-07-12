"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { projectCountLabel } from "@/data/site";
import { LiquidButton } from "@/components/ui/LiquidButton";

function FloatingShape() {
    return (
        <motion.div
            animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-32 h-32 pointer-events-none opacity-20 hidden lg:block"
        >
            <div className="w-full h-full rounded-3xl border-2 border-neonPurple rotate-45" />
            <div className="absolute inset-0 rounded-3xl border-2 border-neonBlue -rotate-12 translate-x-4 translate-y-4" />
        </motion.div>
    );
}


export default function About() {
    const containerRef = useRef(null);

    const bioText = "I'm Kaliza Esther, a Full stack web developer, mobile developer and ui designer. I don't just build software; I design digital products that combine clean UI/UX, scalable systems, and real-world impact.";

    return (
        <section id="about" ref={containerRef} className="about-section py-32 relative overflow-hidden">
            <FloatingShape />
            {/* Background Accent */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neonPurple/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-neonPurple mb-4 block">Discovery</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Persona</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Bento Grid (Quadrant Style) */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto lg:h-[800px] max-w-7xl mx-auto">

                    {/* Main Bio Card (Big Quadrant) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-10 md:p-14 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="absolute top-0 right-0 p-8">
                            <div className="w-12 h-12 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center text-slate-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-neonPurple animate-pulse" />
                            </div>
                        </div>

                        <div className="space-y-8 relative z-10">
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                                Architecting <br />
                                <span className="text-neonPurple">Digital</span> Experiences
                            </h3>
                            <p className="text-xl leading-relaxed font-light max-w-lg flex flex-wrap gap-x-1.5">
                                {bioText.split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0.2 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: false, margin: "-10%" }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                    >
                                        <span className="dark:hidden text-slate-400" style={{ transition: 'color 0.5s' }}>{word}</span>
                                        <span className="hidden dark:inline text-slate-500" style={{ transition: 'color 0.5s' }}>{word}</span>
                                    </motion.span>
                                ))}
                            </p>
                        </div>

                        <div className="flex gap-4 pt-10">
                            <LiquidButton href="/contact" color="purple" className="px-8 py-4">
                                Get in Touch
                            </LiquidButton>
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0c] bg-slate-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold`}>
                                        {i === 3 ? "Dev" : "•"}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10"
                    >
                        <Image
                            src="/esther.png"
                            alt="Profile"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover object-top transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                            <span className="text-xs font-bold tracking-widest uppercase">Creative Director</span>
                            <h4 className="text-2xl font-bold">Kaliza Esther</h4>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-8 flex flex-col justify-center items-center text-center hover:bg-neonPurple/5 transition-colors duration-500"
                    >
                        <span className="text-5xl font-black text-neonPurple mb-2">{projectCountLabel(projects.length)}</span>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Projects <br /> Delivered</span>
                    </motion.div>

                    {/* Skills/Focus Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-900 dark:bg-white text-white dark:text-black p-8 flex flex-col justify-between"
                    >
                        <div className="w-10 h-10 rounded-xl bg-white/20 dark:bg-black/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white dark:bg-black" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold leading-tight mb-2">Focusing on <br /> Scalable Systems</h4>
                            <p className="text-xs opacity-60 font-medium">Mobile Development, Clean UI/UX & Backend APIs.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}