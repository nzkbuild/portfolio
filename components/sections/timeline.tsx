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
                                        index === timelineData.length - 3
                                            ? "bg-accent-blue shadow-[0_0_12px_var(--accent-blue)] scale-125"
                                            : "bg-white/20 group-hover:bg-accent-blue"
                                    )}
                                />
                                <div className="pl-12 w-full">
                                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors group-hover:translate-x-1 duration-300 backdrop-blur-sm">
                                        <span className="text-xs font-bold tracking-wider text-accent-blue uppercase mb-3 block">
                                            {item.date}
                                        </span>
                                        <h4 className="text-xl font-bold text-text-primary mb-3">
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
