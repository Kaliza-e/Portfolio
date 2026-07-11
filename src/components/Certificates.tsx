"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronRight, X } from "lucide-react";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { certificates, isCertificatePdf, certificateAssetUrl, type Certificate } from "@/data/certificates";

function formatCounter(id: number) {
    return `(${String(id).padStart(2, "0")})`;
}

function CertificatePreview({
    cert,
    className,
    fill = false,
}: {
    cert: Certificate;
    className?: string;
    /** When true, image fills the card edge-to-edge (flip back). Lightbox uses contain. */
    fill?: boolean;
}) {
    const assetUrl = certificateAssetUrl(cert.image);

    if (isCertificatePdf(cert.image)) {
        return (
            <iframe
                key={cert.image}
                src={`${assetUrl}#toolbar=0&navpanes=0&view=FitH`}
                title={`${cert.title} certificate`}
                className={className ?? "absolute inset-0 w-full h-full border-0 pointer-events-none"}
            />
        );
    }

    return (
        <Image
            key={cert.image}
            src={assetUrl}
            alt={`${cert.title} certificate`}
            fill
            className={
                fill
                    ? "object-cover object-center"
                    : "object-contain object-center bg-white"
            }
            sizes="500px"
        />
    );
}

function CertificateFlipCard({
    cert,
    onOpenLightbox,
}: {
    cert: Certificate;
    onOpenLightbox: () => void;
}) {
    return (
        <div
            className="cert-flip-container group w-full max-w-[500px] cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={onOpenLightbox}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpenLightbox();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View ${cert.title} certificate`}
        >
            <div className="cert-flip-inner relative w-full aspect-[500/340] transition-transform duration-[600ms] ease-in-out group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
                <div className="cert-flip-face absolute inset-0 rounded-xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(168,85,247,0.25)] border border-black/10 dark:border-white/10 [backface-visibility:hidden]">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-[#0a0a12] dark:via-[#12121f] dark:to-[#0d061a]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-neonPurple/15 via-transparent to-neonCyan/10" />
                    <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 dark:text-white/35">
                                {cert.date}
                            </span>
                            <div className="w-11 h-11 rounded-xl bg-neonPurple/10 border border-neonPurple/20 flex items-center justify-center">
                                <Award size={20} className="text-neonPurple" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-semibold text-neonPurple/80 dark:text-neonPurple">
                                {cert.issuer}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-white/45 leading-relaxed max-w-sm">
                                {cert.description}
                            </p>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-white/30">
                            Hover to preview · Click to expand
                        </p>
                    </div>
                </div>

                <div className="cert-flip-face absolute inset-0 rounded-xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(6,182,212,0.2)] border border-black/10 dark:border-white/10 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white">
                    <div className="absolute inset-0">
                        <CertificatePreview cert={cert} fill />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
        </div>
    );
}

function CertificateLightbox({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#020617]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40">{cert.date}</p>
                        <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                        <p className="text-sm text-neonPurple">{cert.issuer}</p>
                    </div>
                    <button type="button" onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white/70" aria-label="Close">
                        <X size={22} />
                    </button>
                </div>
                <div className="flex-1 min-h-[60vh] bg-slate-950 relative">
                    <CertificatePreview cert={cert} className="absolute inset-0 w-full h-full min-h-[60vh] border-0" />
                </div>
                <div className="px-5 py-3 border-t border-white/10 flex justify-end">
                    <a href={certificateAssetUrl(cert.image)} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-neonCyan hover:text-white">
                        Open in new tab
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Certificates() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxCert, setLightboxCert] = useState<Certificate | null>(null);
    const [leftOffset, setLeftOffset] = useState(0);

    const pinRef = useRef<HTMLDivElement>(null);
    const leftInnerRef = useRef<HTMLDivElement>(null);
    const scrollDistanceRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    const activeCert = certificates[activeIndex] ?? certificates[0];
    const pinHeightVh = certificates.length * 100;

    const measure = useCallback(() => {
        const leftInner = leftInnerRef.current;
        if (!leftInner) return;
        const viewport = window.innerHeight;
        scrollDistanceRef.current = Math.max(0, leftInner.offsetHeight - viewport);
    }, []);

    const syncFromScroll = useCallback(() => {
        const pin = pinRef.current;
        const leftInner = leftInnerRef.current;
        if (!pin || !leftInner) return;

        const viewport = window.innerHeight;
        const dist = scrollDistanceRef.current || Math.max(0, leftInner.offsetHeight - viewport);
        scrollDistanceRef.current = dist;

        const pinTop = pin.getBoundingClientRect().top;
        const scrolledIntoPin = Math.max(0, -pinTop);
        const progress = dist > 0 ? Math.min(1, scrolledIntoPin / dist) : 0;

        setLeftOffset(-progress * dist);

        const idx =
            certificates.length <= 1
                ? 0
                : Math.min(certificates.length - 1, Math.round(progress * (certificates.length - 1)));

        setActiveIndex(idx);
    }, []);

    useEffect(() => {
        const run = () => {
            measure();
            syncFromScroll();
        };
        run();
        const t = setTimeout(run, 150);
        const t2 = setTimeout(run, 500);

        const onScroll = () => {
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(() => {
                syncFromScroll();
                rafRef.current = null;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", run);
        return () => {
            clearTimeout(t);
            clearTimeout(t2);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", run);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [measure, syncFromScroll]);

    const scrollToIndex = (index: number) => {
        const pin = pinRef.current;
        const dist = scrollDistanceRef.current;
        if (!pin || dist <= 0) return;

        const progress = index / Math.max(1, certificates.length - 1);
        const pinStart = pin.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: pinStart + progress * dist, behavior: "smooth" });
    };

    return (
        <section id="certificates" className="relative transition-colors duration-500">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-neonPurple/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neonCyan/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Header — scrolls away before pin starts */}
            <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16 max-w-[1400px] relative z-10">
                <span className="text-xs font-black tracking-[0.6em] uppercase text-neonPurple mb-4 block">Credentials</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-slate-900 dark:text-white">
                    Certificates
                </h2>
                <p className="mt-5 text-slate-500 dark:text-white/40 text-base md:text-lg font-medium max-w-xl">
                    Scroll — names move on the left, the preview card stays centered on the right.
                </p>
            </div>

            {/* Mobile */}
            <div className="lg:hidden container mx-auto px-4 pb-16 relative z-10">
                <div className="mb-8">
                    <CertificateFlipCard cert={activeCert} onOpenLightbox={() => setLightboxCert(activeCert)} />
                </div>
                {certificates.map((cert, i) => (
                    <div key={cert.id}>
                        <button
                            type="button"
                            onClick={() => setActiveIndex(i)}
                            className="w-full text-left py-8 flex gap-4 items-start"
                        >
                            <span className={`text-xs font-mono ${i === activeIndex ? "text-neonPurple" : "text-slate-400"}`}>
                                {formatCounter(cert.id)}
                            </span>
                            <h3 className={`text-xl sm:text-2xl md:text-3xl leading-tight ${i === activeIndex ? "font-black text-slate-900 dark:text-white" : "text-slate-400"}`}>
                                {cert.title}
                            </h3>
                        </button>
                        {i < certificates.length - 1 && (
                            <div
                                className="h-px w-full bg-slate-300/80 dark:bg-[#2a2a2a]"
                                aria-hidden
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop — pinned split: left scrolls, right card fixed center */}
            <div
                ref={pinRef}
                className="hidden lg:block relative z-10"
                style={{ height: `${pinHeightVh}vh` }}
            >
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 h-full max-w-[1400px]">
                        <div className="grid grid-cols-[55%_45%] gap-10 xl:gap-16 h-full">
                            {/* LEFT — certificate names scroll vertically */}
                            <div className="relative h-full overflow-hidden">
                                <div
                                    ref={leftInnerRef}
                                    className="will-change-transform"
                                    style={{ transform: `translate3d(0, ${leftOffset}px, 0)` }}
                                >
                                    {certificates.map((cert, index) => {
                                        const isActive = index === activeIndex;
                                        return (
                                            <div
                                                key={cert.id}
                                                className={`h-screen flex items-center shrink-0 relative ${index > 0
                                                        ? "border-t border-slate-300/80 dark:border-[#2a2a2a]"
                                                        : ""
                                                    }`}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() => scrollToIndex(index)}
                                                    className="w-full text-left flex items-center gap-6 xl:gap-10 outline-none focus-visible:ring-2 focus-visible:ring-neonPurple/50 rounded-lg py-4"
                                                >
                                                    <span
                                                        className={`shrink-0 text-sm font-mono tabular-nums transition-colors duration-300 ${isActive ? "text-neonPurple" : "text-slate-400 dark:text-white/25"
                                                            }`}
                                                    >
                                                        {formatCounter(cert.id)}
                                                    </span>
                                                    <h3
                                                        className={`text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-tight transition-all duration-300 ${isActive
                                                                ? "text-slate-900 dark:text-white font-black"
                                                                : "text-slate-400 dark:text-white/30 font-normal"
                                                            }`}
                                                    >
                                                        {cert.title}
                                                    </h3>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* RIGHT — card locked to vertical center of screen */}
                            <div className="relative h-full flex items-center justify-center">
                                <div className="w-full max-w-[500px] px-2">
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 dark:text-white/35">
                                            {activeCert.date}
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 dark:text-white/35">
                                            Preview
                                        </span>
                                    </div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeCert.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                        >
                                            <CertificateFlipCard
                                                cert={activeCert}
                                                onOpenLightbox={() => setLightboxCert(activeCert)}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 text-center relative z-10">
                <LiquidButton href="/#education" color="cyan" className="px-10 py-4 text-[10px] tracking-[0.2em]">
                    Explore Full Academic Archive
                    <ChevronRight size={14} />
                </LiquidButton>
            </div>

            <AnimatePresence>
                {lightboxCert && <CertificateLightbox cert={lightboxCert} onClose={() => setLightboxCert(null)} />}
            </AnimatePresence>
        </section>
    );
}