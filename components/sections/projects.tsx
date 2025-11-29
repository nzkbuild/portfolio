"use client";

import Link from "next/link";
import { ArrowRight, LayoutTemplate } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24">
            <Container size="wide">
                <FadeIn>
                    <SectionHeader
                        title="Featured projects"
                        subtitle="Real tools built for real use cases. From operations to automation experiments."
                    />
                </FadeIn>

                <StaggerContainer className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInItem}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 transition-all hover:border-white/20 hover:bg-white/10 backdrop-blur-xl shadow-sm",
                                project.featured ? "lg:col-span-2" : ""
                            )}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-6">
                                <div className="flex items-start gap-6">
                                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 group-hover:border-accent-blue transition-colors shadow-sm shrink-0">
                                        <project.icon size={24} className={cn(project.iconColor)} />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm font-medium text-text-muted tracking-wide uppercase block">
                                            {project.subtitle}
                                        </span>
                                    </div>
                                </div>
                                <Badge
                                    variant={
                                        project.status === "Active Development" ? "default" :
                                            project.status === "Completed" ? "success" : "warning"
                                    }
                                    className="mt-1"
                                >
                                    {project.status === "Active Development" && (
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse mr-2"></span>
                                    )}
                                    {project.status}
                                </Badge>
                            </div>

                            <p className="text-text-primary font-medium text-xl md:text-2xl mb-8 leading-snug max-w-3xl">
                                {project.tagline}
                            </p>

                            <div className="bg-white/5 rounded-2xl p-8 mb-10 border border-white/10">
                                <p className="text-text-secondary italic text-lg leading-relaxed">
                                    "{project.context}"
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mb-10">
                                {project.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 text-base text-text-secondary"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_var(--accent-blue)] mt-2.5 shrink-0" />
                                        <span className="leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-4 py-2 bg-white/5 border border-white/10 text-text-muted text-sm font-medium rounded-xl hover:text-text-primary hover:border-white/20 transition-colors cursor-default"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={project.href}
                                className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-hover font-semibold transition-all hover:gap-3 text-lg"
                            >
                                View Project <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    ))}

                    {/* SNRX Lite */}
                    <motion.div
                        variants={fadeInItem}
                        className="rounded-2xl border border-white/10 bg-white/5 lg:col-span-2 flex flex-col md:flex-row md:items-center gap-10 opacity-90 hover:opacity-100 transition-opacity p-8 md:p-10 backdrop-blur-xl"
                    >
                        <div className="p-5 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                            <LayoutTemplate size={32} className="text-text-muted" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-text-primary mb-3">SNRX Lite</h3>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                A minimal landing page experiment to learn custom domains and
                                static site hosting.
                            </p>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 text-text-muted text-sm rounded-xl">
                                HTML/CSS
                            </span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 text-text-muted text-sm rounded-xl">
                                GitHub Pages
                            </span>
                        </div>
                        <Link
                            href="/projects/snrx-lite"
                            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-hover font-medium transition-all hover:gap-3 text-lg"
                        >
                            View Project <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </StaggerContainer>
            </Container>
        </section>
    );
}
