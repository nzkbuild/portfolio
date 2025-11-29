import Link from "next/link";
import { ArrowRight, Database, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <Container size="wide">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <FadeIn className="flex-1 space-y-10 z-10" delay={0.1}>
                        {/* Status Pill */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-semibold tracking-wide uppercase shadow-sm hover:bg-white/10 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
                            </span>
                            Protege Trainee at KWSP Kluang
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight leading-[1.05]">
                            I build <span className="relative inline-block text-text-primary">
                                tools
                                <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-accent-blue/20 rounded-full blur-sm"></span>
                            </span> <br />
                            that people use.
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed text-text-secondary max-w-xl">
                            From HR and frontline operations to full-stack development.
                            I build internal systems that solve real operational friction.
                            Not senior, just obsessed with solving problems.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-6">
                            <Button asChild size="lg">
                                <Link href="#projects">
                                    View Projects
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild variant="secondary" size="lg">
                                <Link href="#contact">
                                    Let's talk
                                </Link>
                            </Button>
                        </div>
                    </FadeIn>

                    {/* Visual Element - Glass Card */}
                    <FadeIn className="flex-1 w-full max-w-lg lg:max-w-full relative perspective-1000" delay={0.3} direction="left">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-purple-500/20 rounded-full blur-[80px] animate-pulse"></div>

                        <div className="relative z-10 bg-black/90 backdrop-blur-3xl rounded-3xl border border-white/10 p-1 shadow-2xl transform rotate-y-12 hover:rotate-0 transition-transform duration-700 ease-out">
                            <div className="bg-bg-primary/50 rounded-2xl overflow-hidden">
                                {/* Window Controls */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
                                    </div>
                                    <div className="text-xs font-mono text-text-muted flex items-center gap-2">
                                        <Database size={12} />
                                        kios_dashboard.tsx
                                    </div>
                                </div>

                                {/* Code Preview */}
                                <div className="p-8 space-y-6 font-mono text-sm">
                                    <div className="flex gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue">
                                            <Activity size={24} />
                                        </div>
                                        <div className="space-y-3 flex-1 py-1">
                                            <div className="h-2.5 w-1/3 bg-white/10 rounded"></div>
                                            <div className="h-2.5 w-1/2 bg-white/5 rounded"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-6 border-t border-white/10">
                                        <div className="flex justify-between text-xs text-text-muted">
                                            <span>Status</span>
                                            <span className="text-status-success">Active</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full w-[75%] bg-accent-blue rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="pt-6 flex gap-3">
                                        <span className="px-3 py-1.5 rounded bg-accent-blue/10 text-accent-blue text-xs">TypeScript</span>
                                        <span className="px-3 py-1.5 rounded bg-white/5 text-text-muted text-xs">React</span>
                                        <span className="px-3 py-1.5 rounded bg-white/5 text-text-muted text-xs">Supabase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
