"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";
import type { Project } from "@/data/projects";

function subscribeReducedMotion(callback: () => void) {
    if (typeof window === "undefined") return () => {};
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
    return false;
}

interface ProjectMediaProps {
    project: Project;
    priority?: boolean;
    isDetailPage?: boolean;
    objectFit?: "contain" | "cover";
    className?: string;
    sizes?: string;
}

export default function ProjectMedia({
    project,
    priority = false,
    isDetailPage = false,
    objectFit = "contain",
    className = "",
    sizes = "(max-width: 1024px) 100vw, 58vw",
}: ProjectMediaProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [videoError, setVideoError] = useState<boolean>(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
    const prefersReducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot
    );
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const hexColor = project.hexColor || "#a855f7";
    const posterSrc = project.poster || project.image;
    const hasVideo = Boolean(project.video) && !videoError && !prefersReducedMotion;

    // IntersectionObserver for responsive autoplay/pause
    useEffect(() => {
        const element = containerRef.current;
        const video = videoRef.current;
        if (!element || !video || !hasVideo) return;

        // Ensure element properties for autoplay compliance
        video.muted = isMuted;
        video.defaultMuted = true;

        if (!("IntersectionObserver" in window)) {
            video.play().catch(() => {});
            return;
        }

        const playbackObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const shouldPlay =
                        entry.isIntersecting &&
                        (entry.intersectionRatio >= 0.4 || isDetailPage || priority);

                    if (shouldPlay) {
                        if (video.paused) {
                            video.play().catch(() => {
                                // Browser policy prevented autoplay
                            });
                        }
                    } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
                        if (!video.paused) {
                            video.pause();
                        }
                    }
                }
            },
            {
                threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
            }
        );

        playbackObserver.observe(element);
        return () => {
            playbackObserver.disconnect();
        };
    }, [hasVideo, isMuted, isDetailPage, priority]);

    // Listen to fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(Boolean(document.fullscreenElement));
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const target = containerRef.current || videoRef.current;
        if (!target) return;

        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen?.();
            } else if (target.requestFullscreen) {
                await target.requestFullscreen();
            } else {
                const targetWithWebkit = target as unknown as { webkitRequestFullscreen?: () => Promise<void> };
                if (targetWithWebkit.webkitRequestFullscreen) {
                    await targetWithWebkit.webkitRequestFullscreen();
                }
            }
        } catch (err) {
            console.error("Fullscreen toggle failed:", err);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!videoRef.current) return;
        const nextMuted = !isMuted;
        videoRef.current.muted = nextMuted;
        setIsMuted(nextMuted);
    };

    return (
        <div
            ref={containerRef}
            className={`group/media relative w-full h-full rounded-xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] border transition-all duration-500 ${className}`}
            style={
                {
                    borderColor: isHovered ? `${hexColor}66` : "rgba(255, 255, 255, 0.1)",
                    "--hover-border": `${hexColor}66`,
                    "--hover-glow": `${hexColor}33`,
                } as React.CSSProperties
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 
              Foundation Layer: Poster / fallback image is ALWAYS rendered and visible.
              Guarantees zero blank screen, zero flicker, and immediate visual display.
            */}
            <Image
                src={posterSrc}
                alt={project.title}
                fill
                priority={priority}
                sizes={sizes}
                className={`transition-transform duration-700 group-hover:scale-[1.02] ${
                    objectFit === "cover" ? "object-cover" : "object-contain"
                } object-center`}
            />

            {/* Video element layered directly over the image, fades in once playing */}
            {hasVideo && (
                <video
                    key={project.video}
                    ref={videoRef}
                    src={project.video}
                    poster={posterSrc}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                    onPlaying={() => setIsVideoPlaying(true)}
                    onLoadedData={() => {
                        // Attempt to play if visible
                        if (videoRef.current && (isDetailPage || priority)) {
                            videoRef.current.play().catch(() => {});
                        }
                    }}
                    onError={() => {
                        setVideoError(true);
                        setIsVideoPlaying(false);
                    }}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 group-hover:scale-[1.02] ${
                        isVideoPlaying ? "opacity-100" : "opacity-0"
                    } ${
                        !isDetailPage ? "pointer-events-none" : ""
                    } ${
                        objectFit === "cover" ? "object-cover" : "object-contain"
                    } object-center`}
                />
            )}

            {/* Detail Page Controls: Fullscreen & Mute Toggle */}
            {isDetailPage && hasVideo && (
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 pointer-events-auto">
                    <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                        title={isMuted ? "Unmute" : "Mute"}
                        className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 hover:border-white/40 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>
                    <button
                        type="button"
                        onClick={toggleFullscreen}
                        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                        title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                        className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 hover:border-white/40 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                    </button>
                </div>
            )}
        </div>
    );
}
