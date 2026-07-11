"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollControls() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neonPurple via-neonBlue to-neonCyan z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Back to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: showTopBtn ? 1 : 0, scale: showTopBtn ? 1 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                aria-label="Back to top"
                type="button"
                className="fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-2xl hover:border-neonPurple transition-colors group"
            >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-neonPurple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
        </>
    );
}