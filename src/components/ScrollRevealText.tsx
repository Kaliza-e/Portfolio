"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";

function RevealWord({
    word,
    start,
    end,
    progress,
}: {
    word: string;
    start: number;
    end: number;
    progress: MotionValue<number>;
}) {
    const opacity = useTransform(progress, [start, end], [0.2, 1]);
    const color = useTransform(progress, [start, end], ["#6b7280", "#0f172a"]);
    const darkColor = useTransform(progress, [start, end], ["#4b5563", "#ffffff"]);

    return (
        <motion.span style={{ opacity }}>
            <span className="dark:hidden">
                <motion.span style={{ color }}>{word}</motion.span>
            </span>
            <motion.span className="hidden dark:inline" style={{ color: darkColor }}>
                {word}
            </motion.span>
        </motion.span>
    );
}

export default function ScrollRevealText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const springProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const floatXLeft = useTransform(springProgress, [0, 1], [-200, 200]);
    const floatOpacity = useTransform(springProgress, [0, 0.5, 1], [0, 0.2, 0]);
    const floatXRight = useTransform(springProgress, [0, 1], [200, -200]);

    const paragraph1 =
        "I create digital experiences that combine creativity, smart technology, and clean engineering. I enjoy building ideas that are useful, polished, and made to leave a lasting impression.";
    const paragraph2 =
        "From web products to immersive interfaces, I bring a thoughtful mix of design, problem-solving, and technical depth to every project I take on.";

    const words1 = paragraph1.split(" ");
    const words2 = paragraph2.split(" ");
    const totalWords = words1.length + words2.length;

    return (
        <section
            ref={containerRef}
            className="py-40 relative overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-500"
        >
            <motion.div
                style={{ x: floatXLeft, opacity: floatOpacity }}
                className="absolute top-1/4 left-10 text-6xl md:text-8xl font-black text-neonPurple/20 pointer-events-none uppercase"
            >
                Invention
            </motion.div>
            <motion.div
                style={{ x: floatXRight, opacity: floatOpacity }}
                className="absolute bottom-1/4 right-10 text-6xl md:text-8xl font-black text-neonBlue/20 pointer-events-none uppercase"
            >
                Innovation
            </motion.div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="space-y-12">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight text-center flex flex-wrap justify-center gap-x-3 gap-y-2">
                        {words1.map((word, i) => {
                            const start = i / totalWords;
                            const end = start + 1 / totalWords;
                            return (
                                <RevealWord
                                    key={`w1-${i}`}
                                    word={word}
                                    start={start}
                                    end={end}
                                    progress={springProgress}
                                />
                            );
                        })}
                    </p>

                    <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight text-center flex flex-wrap justify-center gap-x-3 gap-y-2">
                        {words2.map((word, i) => {
                            const start = (words1.length + i) / totalWords;
                            const end = start + 1 / totalWords;
                            return (
                                <RevealWord
                                    key={`w2-${i}`}
                                    word={word}
                                    start={start}
                                    end={end}
                                    progress={springProgress}
                                />
                            );
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
}