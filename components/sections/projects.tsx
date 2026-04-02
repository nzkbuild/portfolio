"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { ProjectDialog } from "@/components/ui/project-dialog";

export function Projects() {
    const [activeProject, setActiveProject] = useState<any>(null);

    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-16 md:py-24">
            <Container size="wide">
                <FadeIn className="mb-16">
                    <div className="flex items-end justify-between gap-8 border-b border-white/5 pb-8">
                        <div>
                            <p className="text-sm font-mono text-text-muted tracking-widest uppercase mb-4">Work</p>
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-text-primary tracking-tight">
                                Featured projects
                            </h2>
                        </div>
                        <p className="text-text-muted text-base max-w-xs text-right hidden md:block leading-relaxed">
                            Real tools for real problems. Not tutorials.
                        </p>
                    </div>
                </FadeIn>

                {/* Featured project */}
                {featured && (
                    <FadeIn className="mb-6">
                        <div
                            onClick={() => setActiveProject(featured)}
                            className="group cursor-pointer border border-white/8 rounded-2xl p-8 md:p-12 bg-bg-surface1/40 hover:bg-bg-surface1/70 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-mono text-text-muted tracking-widest">★ Featured</span>
                                    <Badge variant={featured.status === "Active Development" ? "default" : "success"}>
                                        {featured.status === "Active Development" && (
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse mr-2" />
                                        )}
                                        {featured.status}
                                    </Badge>
                                </div>
                                <button className="flex items-center gap-2 text-text-muted hover:text-accent-blue transition-colors text-sm font-medium self-start">
                                    Case Study <ArrowUpRight size={16} />
                                </button>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-text-primary tracking-tight mb-4 group-hover:text-accent-blue transition-colors duration-300">
                                {featured.title}
                            </h3>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
                                {featured.tagline}
                            </p>
                            <p className="text-text-muted italic text-base max-w-2xl mb-10 leading-relaxed border-l border-white/10 pl-5">
                                {featured.context}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {featured.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-xs font-mono text-text-muted border border-white/8 rounded-lg">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                )}

                {/* Rest — indexed list */}
                <StaggerContainer className="flex flex-col border-t border-white/5">
                    {rest.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInItem}
                            onClick={() => setActiveProject(project)}
                            className="group cursor-pointer flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-white/5 hover:bg-white/2 transition-colors px-2 -mx-2"
                        >
                            <span className="text-xs font-mono text-text-muted w-6 shrink-0">
                                {String(idx + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <Badge variant={project.status === "Completed" ? "success" : "warning"} className="hidden sm:flex">
                                        {project.status}
                                    </Badge>
                                </div>
                                <p className="text-text-secondary text-base leading-relaxed truncate pr-4">
                                    {project.tagline}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                                <div className="hidden lg:flex gap-2">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="px-2.5 py-1 text-xs font-mono text-text-muted border border-white/8 rounded-lg">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <ArrowUpRight size={18} className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </Container>

            <ProjectDialog
                project={activeProject}
                open={!!activeProject}
                onOpenChange={(isOpen: boolean) => !isOpen && setActiveProject(null)}
            />
        </section>
    );
}

