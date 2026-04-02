"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion";

export function Contact() {
    return (
        <section id="contact" className="py-24 border-t border-white/5">
            <Container size="wide">
                <FadeIn>
                    <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
                        {/* Left — editorial headline */}
                        <div>
                            <p className="text-sm font-mono text-text-muted tracking-widest uppercase mb-8">
                                Let's work together
                            </p>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-text-primary tracking-tight leading-[1.02] mb-8">
                                Got a problem <br />
                                <span className="text-text-muted">worth solving?</span>
                            </h2>
                            <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
                                I'm Nabil. I build internal tools, automate workflows, and translate messy ops problems into clean systems. Currently free and looking for the right team.
                            </p>
                        </div>

                        {/* Right — minimal action block */}
                        <div className="flex flex-col gap-4 lg:items-end shrink-0">
                            <a
                                href="https://www.linkedin.com/in/nbzkri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-6 py-4 border border-white/10 rounded-2xl hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all"
                            >
                                <Linkedin size={20} className="text-text-muted group-hover:text-accent-blue transition-colors" />
                                <span className="text-text-primary font-medium">linkedin.com/in/nbzkri</span>
                                <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                            <a
                                href="https://github.com/nzkbuild"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-6 py-4 border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/5 transition-all"
                            >
                                <Github size={20} className="text-text-muted group-hover:text-text-primary transition-colors" />
                                <span className="text-text-primary font-medium">github.com/nzkbuild</span>
                                <ArrowUpRight size={16} className="text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-text-muted text-sm">
                            Muhammad Nabil Zikri — Kuala Lumpur, Malaysia
                        </p>
                        <p className="text-text-muted text-sm font-mono">
                            © {new Date().getFullYear()}
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
