import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Terminal } from "@/components/ui/terminal";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <Container size="wide">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <FadeIn className="flex-1 space-y-10 z-10" delay={0.1}>
                        {/* Status Pill */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-status-success/10 border border-status-success/20 text-status-success text-xs font-bold tracking-widest uppercase shadow-2xl hover:bg-status-success/20 hover:border-status-success/30 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-xl pointer-events-none">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
                            </span>
                            Available for Opportunities
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-text-primary via-text-primary to-text-muted tracking-tight leading-[1.05]">
                            I build <span className="relative inline-block text-accent-blue">
                                systems
                                <span className="absolute -bottom-2 left-0 w-full h-[8px] bg-accent-blue/30 rounded-full blur-[4px]"></span>
                            </span> <br />
                            that scale ops.
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed text-text-secondary max-w-xl font-medium">
                            HR Management graduate turned full-stack developer.
                            I bridge the gap between people operations and automation.
                            Currently looking to join a team where I can leverage both skillsets to build tools that erase friction.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-6">
                            <Button asChild size="lg" className="hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                                <Link href="#projects">
                                    View Projects
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <MagneticButton>
                                <Button asChild variant="secondary" size="lg" className="hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-lg">
                                    <Link href="/RESUME - MUHAMMAD NABIL ZIKRI BIN SALIHAN 2026.pdf" target="_blank" prefetch={false}>
                                        <FileText size={18} className="mr-2" />
                                        Resume
                                    </Link>
                                </Button>
                            </MagneticButton>
                            
                            <div className="flex items-center gap-2 ml-2 md:ml-4 border-l border-white/10 pl-4 md:pl-6">
                                <Link href="https://github.com/nzkbuild" target="_blank" className="text-text-muted hover:text-white transition-all hover:scale-110 p-2 rounded-full hover:bg-white/5">
                                    <Github size={22} />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link href="https://www.linkedin.com/in/nbzkri/" target="_blank" className="text-text-muted hover:text-[#0A66C2] transition-colors hover:scale-110 p-2 rounded-full hover:bg-[#0A66C2]/10">
                                    <Linkedin size={22} />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Terminal */}
                    <FadeIn className="flex-1 w-full max-w-lg lg:max-w-full" delay={0.3} direction="left">
                        <Terminal />
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
