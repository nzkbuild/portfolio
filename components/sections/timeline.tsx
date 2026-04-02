"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { timelineData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

export function Timeline() {
    return (
        <section id="timeline" className="py-16 md:py-24">
            <Container size="wide">
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <SectionHeader title="Timeline" subtitle="How I got here." />
                    </FadeIn>

                    <StaggerContainer className="relative space-y-16 before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent-blue before:via-white/10 before:to-transparent">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInItem}
                                className="relative flex items-start group"
                            >
                                <div
                                    className={cn(
                                        "absolute left-0 ml-2.5 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full border-4 border-bg-primary z-10 transition-all duration-300",
                                        index === 0 // Assuming index 0 is current or most recent
                                            ? "bg-accent-blue shadow-[0_0_15px_var(--accent-blue)] scale-125"
                                            : "bg-white/20 group-hover:bg-accent-blue"
                                    )}
                                />
                                <div className="pl-12 w-full">
                                    <div className="bg-bg-surface1/60 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group-hover:translate-x-2 duration-300 backdrop-blur-xl shadow-sm">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-wider text-accent-blue uppercase w-fit">
                                                <span className={cn(
                                                    "w-1.5 h-1.5 rounded-full",
                                                    item.type === "education" ? "bg-purple-400" : "bg-status-success"
                                                )}></span>
                                                {item.date}
                                            </span>
                                            <span className="text-sm font-medium text-text-muted flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {item.location}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-display font-bold text-text-primary mb-4">
                                            {item.title}
                                        </h4>
                                        <p className="text-text-secondary text-lg leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </Container>
        </section>
    );
}
