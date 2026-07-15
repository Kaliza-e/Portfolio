"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Code2, ArrowUpRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { siteConfig } from "@/data/site";

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-500">
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
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-neonPurple mb-4 block">Get in Touch</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Connect</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
                >
                    {[
                        { icon: Mail, title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "text-neonPurple" },
                        { icon: Phone, title: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, color: "text-neonBlue" },
                        { icon: MapPin, title: "Location", value: siteConfig.location, color: "text-neonCyan" },
                        { icon: Globe, title: "LinkedIn", value: "linkedin.com/in/kaliza-esther", href: "https://www.linkedin.com/in/kaliza-esther-794108415", color: "text-neonPurple" },
                        { icon: Code2, title: "GitHub", value: "github.com/Kaliza-e", href: "https://github.com/Kaliza-e", color: "text-neonBlue" },
                    ].map((item, i) =>
                        item.href ? (
                            <a
                                key={i}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group hover:border-neonPurple/50 transition-all text-center"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center mb-4 mx-auto shadow-sm ${item.color}`}>
                                    <item.icon size={20} />
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{item.title}</h4>
                                <p className="font-bold text-sm md:text-base break-words">{item.value}</p>
                            </a>
                        ) : (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group hover:border-neonPurple/50 transition-all text-center">
                                <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center mb-4 mx-auto shadow-sm ${item.color}`}>
                                    <item.icon size={20} />
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{item.title}</h4>
                                <p className="font-bold text-sm md:text-base">{item.value}</p>
                            </div>
                        )
                    )}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <LiquidButton href="/contact" color="purple" className="px-8 py-4">
                        Send a Message
                        <ArrowUpRight size={18} />
                    </LiquidButton>
                </motion.div>
            </div>
        </section>
    );
}
