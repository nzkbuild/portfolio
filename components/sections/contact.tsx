import { Mail, Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion";

export function Contact() {
    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-surface0"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

            <Container size="wide" className="text-center relative z-10">
                <FadeIn className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-8 tracking-tight">
                        Let's talk.
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary mb-16 leading-relaxed">
                        If you're hiring for a junior or hybrid role where I can grow as a
                        developer while staying close to operations and people, I'd be
                        happy to talk.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="mailto:nbzkri@gmail.com"
                            className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-all bg-white/5 backdrop-blur-xl px-8 py-5 rounded-3xl border border-white/10 hover:border-accent-blue/50 hover:-translate-y-2 hover:shadow-2xl duration-300"
                        >
                            <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                                <Mail size={20} />
                            </div>
                            <span className="font-medium">Email</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nbzkri/"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-all bg-white/5 backdrop-blur-xl px-8 py-5 rounded-3xl border border-white/10 hover:border-accent-blue/50 hover:-translate-y-2 hover:shadow-2xl duration-300"
                        >
                            <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <span className="font-medium">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/nzkbuild"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-all bg-white/5 backdrop-blur-xl px-8 py-5 rounded-3xl border border-white/10 hover:border-accent-blue/50 hover:-translate-y-2 hover:shadow-2xl duration-300"
                        >
                            <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                                <Github size={20} />
                            </div>
                            <span className="font-medium">GitHub</span>
                        </a>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
