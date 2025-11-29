import { Code, Cpu, Bot } from "lucide-react";
import { Container } from "@/components/ui/container";
import { skills } from "@/lib/data";
import { FadeIn } from "@/components/ui/motion";

export function Skills() {
    return (
        <section className="py-16 md:py-24 bg-bg-surface1 border-y border-glass-border relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

            <Container size="wide" className="grid md:grid-cols-3 gap-12 relative z-10">
                <FadeIn className="md:col-span-1 bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-accent-blue/30 transition-colors backdrop-blur-sm" delay={0}>
                    <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-3">
                        <Code className="text-accent-blue" size={24} /> Tech stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.tech.map((s) => (
                            <span
                                key={s}
                                className="px-4 py-2 bg-bg-surface2 border border-white/10 text-text-secondary rounded-xl font-medium hover:text-text-primary hover:border-white/20 transition-colors cursor-default text-sm"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </FadeIn>

                <FadeIn className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-accent-blue/30 transition-colors backdrop-blur-sm" delay={0.1}>
                    <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-3">
                        <Cpu className="text-accent-blue" size={24} /> Workflow
                    </h3>
                    <div className="space-y-5">
                        {skills.workflow.map((s, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 text-text-secondary group text-base"
                            >
                                <div className="w-2 h-2 rounded-full bg-accent-blue/50 group-hover:bg-accent-blue group-hover:shadow-[0_0_8px_var(--accent-blue)] transition-all" />
                                {s}
                            </div>
                        ))}
                    </div>
                </FadeIn>

                <FadeIn className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-accent-blue/30 transition-colors backdrop-blur-sm" delay={0.2}>
                    <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-3">
                        <Bot className="text-accent-blue" size={24} /> AI in my workflow
                    </h3>
                    <p className="text-text-secondary text-base mb-8 leading-relaxed">
                        I use AI tools to speed up learning and prototyping. They help me
                        understand problems faster and build with fewer mistakes.
                    </p>
                    <div className="space-y-4">
                        {skills.ai.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 text-text-secondary text-sm group"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-text-primary transition-colors" />
                                {item}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
