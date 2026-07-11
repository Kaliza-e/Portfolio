"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, useInView, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { educationEntries, accentStyles } from "@/data/education";

function TimelineDot({
    active,
    filled,
    accent,
    reduceMotion,
}: {
    active: boolean;
    filled: boolean;
    accent: keyof typeof accentStyles;
    reduceMotion: boolean;
}) {
    const styles = accentStyles[accent];

    return (
        <div className="relative flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
            {active && !reduceMotion && (
                <>
                    <motion.span
                        className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full ${styles.dot}`}
                        animate={{ scale: [1, 1.75, 1], opacity: [0.15, 0.4, 0.15] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                        style={{ filter: "blur(8px)" }}
                    />
                    <motion.span
                        className={`absolute w-5 h-5 md:w-6 md:h-6 rounded-full ${styles.dot}`}
                        animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0.55, 0.25] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.15 }}
                        style={{ filter: "blur(3px)" }}
                    />
                </>
            )}
            <motion.div
                animate={active && !reduceMotion ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={active && !reduceMotion ? { repeat: Infinity, duration: 2.2, ease: "easeInOut" } : { duration: 0.3 }}
                className={`relative z-10 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-white dark:border-[#010409] transition-colors duration-400 ${
                    filled || active ? styles.dot : "bg-transparent border-slate-300 dark:border-white/25"
                }`}
            />
        </div>
    );
}

function EducationEntry({
    entry,
    index,
    filledThrough,
    reduceMotion,
}: {
    entry: (typeof educationEntries)[number];
    index: number;
    filledThrough: number;
    reduceMotion: boolean;
}) {
    const rowRef = useRef<HTMLDivElement>(null);
    const inView = useInView(rowRef, { margin: "-30%", amount: 0.45 });
    const styles = accentStyles[entry.accent];
    const filled = index <= filledThrough;

    return (
        <div
            ref={rowRef}
            className={`relative flex flex-col md:flex-row md:gap-8 lg:gap-10 ${index > 0 ? "mt-12 md:mt-16 lg:mt-20" : ""}`}
        >
            <div className="hidden md:flex shrink-0 w-10 lg:w-12 pt-7 lg:pt-8 justify-center">
                <TimelineDot active={inView} filled={filled} accent={entry.accent} reduceMotion={reduceMotion} />
            </div>

            <div className="md:hidden flex items-center gap-3 mb-2">
                <TimelineDot active={inView} filled={filled} accent={entry.accent} reduceMotion={reduceMotion} />
                <span className="text-xs text-slate-400 dark:text-white/35">{entry.date}</span>
            </div>

            <motion.article
                initial={reduceMotion ? false : { opacity: 0, x: -28, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="flex-1 min-w-0 w-full"
            >
                <div
                    className={`relative overflow-hidden rounded-2xl border bg-white dark:bg-white/[0.02] px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 lg:px-12 lg:py-8 min-h-[88px] md:min-h-[104px] transition-all duration-400 ${
                        inView
                            ? `${styles.border} shadow-[0_20px_60px_-24px_rgba(168,85,247,0.35)]`
                            : "border-slate-200/90 dark:border-white/10 shadow-sm"
                    }`}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 lg:gap-10">
                        <motion.div
                            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0.92, rotate: -4 }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center p-2.5 bg-slate-50 dark:bg-white/[0.03]"
                        >
                            <Image
                                src={entry.logo}
                                alt=""
                                width={40}
                                height={40}
                                className="object-contain w-9 h-9 md:w-10 md:h-10"
                            />
                        </motion.div>

                        <div className="min-w-0 flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-12">
                            <div className="min-w-0 space-y-2">
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
                                        {entry.institution}
                                    </h3>
                                    <span className="hidden sm:inline text-sm md:text-base text-slate-400 dark:text-white/35 tabular-nums">
                                        {entry.date}
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <p className="text-base md:text-lg text-slate-600 dark:text-white/70">{entry.program}</p>
                                    <span className={`text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border ${styles.badge}`}>
                                        {entry.statusLabel}
                                    </span>
                                </div>
                            </div>

                            {entry.highlights.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 0.2 + index * 0.05 }}
                                    className="flex flex-wrap lg:justify-end gap-2 shrink-0 max-w-xl lg:max-w-md xl:max-w-lg"
                                >
                                    {entry.highlights.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-500 dark:text-white/45 whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <motion.div
                        className={`absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b ${styles.line} rounded-full`}
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        style={{ originY: 0 }}
                    />
                </div>
            </motion.article>
        </div>
    );
}

export default function Education() {
    const sectionRef = useRef<HTMLElement>(null);
    const [filledThrough, setFilledThrough] = useState(0);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.2", "end 0.9"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
    const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

    useMotionValueEvent(smoothProgress, "change", (value) => {
        const last = educationEntries.length - 1;
        setFilledThrough(last <= 0 ? 0 : Math.round(value * last));
    });

    return (
        <section
            ref={sectionRef}
            id="education"
            className="relative py-32 md:py-40 lg:py-44 overflow-hidden transition-colors duration-500"
        >
            <div className="absolute top-1/4 -left-32 w-[560px] h-[560px] bg-neonPurple/6 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-[560px] h-[560px] bg-neonCyan/6 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-10">
                <div className="text-center mb-20 md:mb-28 lg:mb-32 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black tracking-[0.6em] uppercase text-neonPurple mb-4 block"
                    >
                        Education
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-slate-900 dark:text-white"
                    >
                        Academic{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-neonBlue to-neonCyan">
                            Background
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="h-0.5 w-28 md:w-32 bg-gradient-to-r from-neonPurple to-neonCyan mx-auto mt-8 rounded-full origin-center"
                    />
                </div>

                <div className="relative md:pl-6 lg:pl-8">
                    <div className="hidden md:block absolute left-[19px] lg:left-[23px] top-2 bottom-2 w-[2px] rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                        <motion.div
                            className="w-full origin-top rounded-full bg-gradient-to-b from-neonPurple via-neonBlue to-neonCyan shadow-[0_0_14px_rgba(168,85,247,0.55)]"
                            style={{ scaleY: lineScale, height: "100%" }}
                        />
                    </div>

                    {educationEntries.map((entry, index) => (
                        <EducationEntry
                            key={entry.id}
                            entry={entry}
                            index={index}
                            filledThrough={filledThrough}
                            reduceMotion={!!reduceMotion}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 md:mt-32 lg:mt-36 text-center"
                >
                    <a
                        href="/#certificates"
                        className="inline-flex items-center gap-3 text-sm md:text-base font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white hover:text-neonPurple dark:hover:text-neonPurple transition-colors"
                    >
                        View certifications
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            aria-hidden
                        >
                            →
                        </motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}