"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion";

export function Now() {
    return (
        <section className="py-16 border-t border-white/5">
            <Container size="wide">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 mb-8">
                        <p className="text-sm font-mono text-text-muted tracking-widest uppercase shrink-0">
                            Right now
                        </p>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                            Honestly? Figuring it out — but not sitting still.{" "}
                            I spend most days studying, picking up new tools, and building things that scratch my own itch.
                            Currently deep into AI developer tooling:{" "}
                            <span className="text-text-primary">building a custom CLI AI system</span> and{" "}
                            <span className="text-text-primary">a workflow automation engine</span> for my own dev setup.
                            Open to the right opportunity.
                        </p>
                    </div>

                    {/* Project links */}
                    <div className="md:pl-[calc(theme(spacing.4)+1ch+theme(spacing.10))] flex flex-col sm:flex-row gap-3">
                        <a
                            href="https://github.com/nzkbuild/antigravity-optimizer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-4 py-2.5 border border-white/8 rounded-xl hover:border-white/20 hover:bg-white/3 transition-all"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-status-success shrink-0" />
                            <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                                antigravity-optimizer
                            </span>
                            <ArrowUpRight size={14} className="text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                        <a
                            href="https://github.com/nzkbuild/steroid-workflow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-4 py-2.5 border border-white/8 rounded-xl hover:border-white/20 hover:bg-white/3 transition-all"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-status-success shrink-0" />
                            <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                                steroid-workflow
                            </span>
                            <ArrowUpRight size={14} className="text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}

