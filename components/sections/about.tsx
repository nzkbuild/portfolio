import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/motion";

export function About() {
    return (
        <section id="about" className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-white/5 skew-y-3 transform origin-top-left -z-10"></div>
            <Container size="wide">
                <FadeIn className="max-w-3xl mx-auto">
                    <SectionHeader title="My journey" />

                    <div className="space-y-10 text-lg md:text-xl text-text-secondary leading-loose">
                        <p>
                            I did not come from a computer science path. I studied <span className="text-text-primary font-medium">Human Resource Management</span> and will officially graduate in December 2025.
                            My early work involved helping people, understanding policies and
                            figuring out how daily operations actually run.
                        </p>

                        <div className="bg-white/5 border-l-4 border-accent-blue p-8 md:p-10 rounded-r-2xl my-10 transform hover:translate-x-2 transition-transform duration-300 backdrop-blur-sm">
                            <p className="text-text-primary font-medium italic text-xl md:text-2xl leading-relaxed">
                                "Working frontline showed me how much time gets lost because information
                                lives in different places. The team works hard, but the tools slow them down."
                            </p>
                        </div>

                        <p>
                            Before web development, I spent early 2025 learning MQL4 and MQL5
                            to build trading automation. I deployed systems on VPS setups,
                            tested execution logic and learned how to handle real-time data.
                            It taught me <span className="text-text-primary">discipline, structure</span> and how to think through a
                            process from start to finish.
                        </p>

                        <p>
                            When my supervisor asked if I could create a better way to track
                            internal work, everything clicked. I realised the same logic from
                            automation could help with operations. That was the start of KIOS.
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
