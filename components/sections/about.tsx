"use client";

import { Container } from "@/components/ui/container";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

const chapters = [
    {
        index: "01",
        title: "Operations-first",
        body: "I didn't start in CS. I studied Human Resource Management at UPTM & KPTM — which meant my brain was trained on people, process, and friction long before I wrote my first line of code.",
    },
    {
        index: "02",
        title: "The logic sandbox",
        body: "Before web dev, I was writing MQL4/MQL5 scripts and running grid bots on a VPS. Taught myself how state, data flow, and automated decision-making actually work — without a tutorial telling me why it mattered.",
    },
    {
        index: "03",
        title: "The moment it clicked",
        body: "At KWSP Kluang, I was asked to improve internal tracking. I built KIOS — a full Next.js + Supabase system that replaced three spreadsheets and passed a PDPA audit. Nobody asked me to go that far. I just knew it was the right fix.",
    },
];

export function About() {
    return (
        <section id="about" className="py-20 md:py-32">
            <Container size="wide">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
                    {/* Left — sticky label */}
                    <FadeIn>
                        <div className="lg:sticky lg:top-32">
                            <p className="text-sm font-mono text-text-muted tracking-widest uppercase mb-6">
                                Background
                            </p>
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-tight mb-8">
                                How I got here
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                Most developers I know started with a computer science degree. I started with people management. That gap is the most useful thing about me.
                            </p>
                            <blockquote className="border-l-2 border-accent-blue pl-5">
                                <p className="text-text-secondary italic leading-relaxed">
                                    "The team works hard, but the tools slow them down."
                                </p>
                                <p className="text-text-muted text-sm mt-3 font-mono">
                                    — the realization that changed everything
                                </p>
                            </blockquote>
                        </div>
                    </FadeIn>

                    {/* Right — numbered chapters */}
                    <StaggerContainer className="flex flex-col divide-y divide-white/5">
                        {chapters.map((c) => (
                            <motion.div
                                key={c.index}
                                variants={fadeInItem}
                                className="py-10 first:pt-0 last:pb-0 group"
                            >
                                <div className="flex items-baseline gap-5 mb-4">
                                    <span className="text-xs font-mono text-text-muted tracking-widest shrink-0">
                                        {c.index}
                                    </span>
                                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                                        {c.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-text-secondary leading-relaxed pl-[2.25rem]">
                                    {c.body}
                                </p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </Container>
        </section>
    );
}
