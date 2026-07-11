"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Mail, Send, Phone, MapPin, Sparkles, MessageSquare, Globe, CheckCircle, AlertCircle, Code2 } from "lucide-react";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { useContactForm } from "@/hooks/useContactForm";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
    const { formData, status, errorMessage, updateField, handleSubmit, isSubmitting } = useContactForm();
    return (
        <main className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neonBlue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-xs font-black tracking-[0.5em] uppercase text-neonPurple mb-4 block">Connection</span>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
                            Let's <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Synchronize</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-white/40 max-w-2xl mx-auto font-medium">
                            Whether you have a groundbreaking project in mind or just want to discuss scalable systems, my inbox is always open.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact — stacked, centered */}
            <section className="py-12 md:py-16 pb-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    {/* Info cards — top, centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 mb-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { icon: Mail, title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "text-neonPurple" },
                                { icon: Phone, title: "Comm", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, color: "text-neonBlue" },
                                { icon: MapPin, title: "Base", value: siteConfig.location, color: "text-neonCyan" },
                                { icon: Globe, title: "LinkedIn", value: "linkedin.com/in/kaliza-esther", href: "https://www.linkedin.com/in/kaliza-esther-794108415", color: "text-neonPurple" },
                                { icon: Code2, title: "GitHub", value: "github.com/Kaliza-e", href: "https://github.com/Kaliza-e", color: "text-neonBlue" },
                            ].map((item, i) =>
                                item.href ? (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="p-6 md:p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 group hover:border-neonPurple/50 transition-all block text-center sm:text-left"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-4 mx-auto sm:mx-0 shadow-sm ${item.color}`}>
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{item.title}</h4>
                                        <p className="font-bold text-base md:text-lg break-words">{item.value}</p>
                                    </a>
                                ) : (
                                    <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 group hover:border-neonPurple/50 transition-all text-center sm:text-left">
                                        <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-4 mx-auto sm:mx-0 shadow-sm ${item.color}`}>
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{item.title}</h4>
                                        <p className="font-bold text-base md:text-lg">{item.value}</p>
                                    </div>
                                )
                            )}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-neonPurple/15 to-neonBlue/15 dark:from-neonPurple/20 dark:to-neonBlue/20 border border-slate-200 dark:border-white/20 backdrop-blur-3xl relative overflow-hidden text-center"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-30">
                                <Sparkles className="text-neonPurple dark:text-white/20 animate-spin-slow" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black mb-3">Availability Status</h3>
                            <p className="text-base md:text-lg text-slate-600 dark:text-white/70 mb-6 leading-relaxed max-w-xl mx-auto">
                                Currently accepting high-impact projects and innovative collaborations. Responses usually take less than 24 hours.
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-white/80">Active & Ready</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Form — below info, centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group mx-auto w-full"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neonPurple to-neonBlue rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000" />
                        <div className="relative p-8 md:p-12 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 backdrop-blur-xl">
                            <div className="flex flex-col items-center gap-4 mb-8 text-center">
                                <div className="p-3 rounded-2xl bg-neonPurple/10 text-neonPurple">
                                    <MessageSquare size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Transmit Message</h3>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="_honeypot"
                                    value={formData._honeypot}
                                    onChange={(e) => updateField("_honeypot", e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identity</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => updateField("name", e.target.value)}
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonPurple transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Signal (Email)</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            placeholder="email@example.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => updateField("email", e.target.value)}
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-subject" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Objective</label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        placeholder="What's your project about?"
                                        value={formData.subject}
                                        onChange={(e) => updateField("subject", e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonCyan transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Data Stream (Message)</label>
                                    <textarea
                                        id="contact-message"
                                        rows={5}
                                        placeholder="Tell me more..."
                                        required
                                        value={formData.message}
                                        onChange={(e) => updateField("message", e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonPurple transition-all resize-none"
                                    />
                                </div>

                                {status === "success" && (
                                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                                        <CheckCircle size={20} />
                                        <p className="text-sm font-medium">Message sent! I&apos;ll get back to you within 24 hours.</p>
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                                            <AlertCircle size={20} className="shrink-0" />
                                            <p className="text-sm font-medium">{errorMessage}</p>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-white/50 text-center">
                                            You can also reach me directly at{" "}
                                            <a
                                                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject || "Portfolio inquiry")}`}
                                                className="text-neonPurple font-semibold hover:underline"
                                            >
                                                {siteConfig.email}
                                            </a>
                                        </p>
                                    </div>
                                )}

                                <LiquidButton
                                    type="submit"
                                    color="purple"
                                    disabled={isSubmitting}
                                    className="w-full py-5 text-sm tracking-[0.2em] disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Transmitting..." : "Initiate Transmission"}
                                    <Send size={18} />
                                </LiquidButton>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}