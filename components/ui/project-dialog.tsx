"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, Target, Lightbulb, Zap, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectDialog({ project, open, onOpenChange }: any) {
    if (!project) return null;

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            />
                        </Dialog.Overlay>

                        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 md:p-6">
                            <Dialog.Content asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    transition={{ duration: 0.2, type: "spring", bounce: 0 }}
                                    className="relative w-full max-w-2xl bg-bg-surface1 border border-white/10 shadow-2xl rounded-3xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
                                >
                                    {/* Header / Top gradient */}
                                    <div className="shrink-0 h-32 bg-bg-surface0 relative overflow-hidden flex items-end px-6 md:px-8 pb-6 border-b border-white/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent pointer-events-none" />
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                                                <project.icon className={project.iconColor} size={24} />
                                            </div>
                                            <div>
                                                <Dialog.Title className="text-xl md:text-2xl font-display font-bold text-text-primary">
                                                    {project.title}
                                                </Dialog.Title>
                                                <Dialog.Description className="text-text-secondary text-sm">
                                                    {project.subtitle}
                                                </Dialog.Description>
                                            </div>
                                        </div>
                                        <Dialog.Close asChild>
                                            <button className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors border border-white/10">
                                                <X size={16} />
                                                <span className="sr-only">Close</span>
                                            </button>
                                        </Dialog.Close>
                                    </div>

                                    {/* Body content */}
                                    <div className="p-6 md:p-8 overflow-y-auto">
                                        <div className="space-y-8">
                                            {/* Intro */}
                                            <div className="text-text-primary text-base md:text-lg leading-relaxed font-medium">
                                                "{project.tagline}"
                                            </div>

                                            {/* Case Study Grid */}
                                            {project.challenge && (
                                                <div className="space-y-4 md:space-y-6">
                                                    <div className="bg-bg-surface0 rounded-2xl p-5 md:p-6 border border-white/5 shadow-sm">
                                                        <h4 className="flex items-center gap-2 text-status-warning font-bold mb-3 uppercase tracking-wider text-xs">
                                                            <Target size={14} /> The Challenge
                                                        </h4>
                                                        <p className="text-text-secondary text-sm leading-relaxed">{project.challenge}</p>
                                                    </div>

                                                    <div className="bg-bg-surface0 rounded-2xl p-5 md:p-6 border border-white/5 shadow-sm">
                                                        <h4 className="flex items-center gap-2 text-accent-blue font-bold mb-3 uppercase tracking-wider text-xs">
                                                            <Lightbulb size={14} /> The Solution
                                                        </h4>
                                                        <p className="text-text-secondary text-sm leading-relaxed">{project.solution}</p>
                                                    </div>

                                                    <div className="bg-bg-surface0 rounded-2xl p-5 md:p-6 border border-white/5 border-l-2 border-l-status-success shadow-sm">
                                                        <h4 className="flex items-center gap-2 text-status-success font-bold mb-3 uppercase tracking-wider text-xs">
                                                            <Zap size={14} /> Business Impact
                                                        </h4>
                                                        <p className="text-text-secondary text-sm leading-relaxed">{project.impact}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tech & Features */}
                                            <div className="space-y-4 pt-4 border-t border-white/5">
                                                <h4 className="text-text-primary font-bold text-sm">Key Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map((t: string) => (
                                                        <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 text-text-secondary rounded-lg text-xs font-medium">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Footer */}
                                    <div className="shrink-0 p-4 md:p-6 bg-bg-surface0 border-t border-white/5 flex justify-between items-center gap-4">
                                        <div className="flex gap-2 md:gap-3">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 md:px-4 md:py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-text-secondary hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium">
                                                    <Github size={18} />
                                                    <span className="hidden md:inline">Source Code</span>
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 md:px-4 md:py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-text-primary transition-all flex items-center justify-center gap-2 text-sm font-medium">
                                                    <ExternalLink size={18} />
                                                    <span className="hidden md:inline">Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                        <Dialog.Close asChild>
                                            <button className="px-6 py-2.5 rounded-xl bg-accent-blue text-white font-medium hover:bg-accent-blue/90 hover:shadow-[0_0_20px_var(--accent-blue)] hover:shadow-accent-blue/20 transition-all text-sm shrink-0">
                                                Got it
                                            </button>
                                        </Dialog.Close>
                                    </div>
                                </motion.div>
                            </Dialog.Content>
                        </div>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
