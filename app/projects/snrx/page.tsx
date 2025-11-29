"use client";

import StatusPill from "@/app/components/StatusPill";
import { Activity, Github, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function SNRXPage() {
  const features = [
    "Automated trade execution on MT4 and MT5 platforms",
    "Support and resistance level detection",
    "Risk management with position sizing",
    "Backtested and forward tested logic",
    "Deployed on VPS for 24/7 operation",
  ];

  const techStack = [
    { name: "MQL4 / MQL5", desc: "MetaTrader scripting languages" },
    { name: "MetaTrader 4/5", desc: "Trading platforms" },
    { name: "VPS / RDP", desc: "Remote deployment environment" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary to-bg-surface1 border-b border-white/5">
        <Container size="narrow">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <Activity size={28} className="text-emerald-400" />
              </div>
              <StatusPill status="Completed" variant="completed" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              SNRX
              <span className="block text-3xl md:text-4xl mt-2 text-text-secondary font-normal">
                Support and Resistance <span className="breathing-highlight">X</span>
              </span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Automated trading system built in MQL4 and MQL5. My entry point into coding.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-8">Overview</h2>

            <div className="space-y-8 text-lg text-text-secondary leading-relaxed">
              <p>This is where I learned to code. Not from a textbook or a bootcamp - from trying to remove emotion from my beginner trading decisions.</p>

              <div className="bg-accent-blue/10 border border-accent-blue/20 p-8 rounded-2xl backdrop-blur-sm">
                <p className="text-text-primary italic">
                  "I wanted a rule-based system that would execute trades based on logic, not fear or greed.
                  Building SNRX taught me loops, conditionals, error handling, and discipline."
                </p>
              </div>

              <p>
                SNRX detects support and resistance levels, executes trades based on predefined rules, and manages risk automatically.
                I deployed it on a VPS. I backtested it. I forward tested it. Some trades worked. Some did not.
                But the system taught me how to think through a process from start to finish.
              </p>

              <p>
                This project is not actively maintained anymore. I have moved on to web development.
                But it was my foundation - the place where I learned that code is just logic written down.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* What I Learned Section */}
      <section className="py-16 md:py-24 bg-bg-surface1 border-y border-white/5">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-8">What I Learned</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">Discipline over emotion</h3>
                  <p className="text-text-secondary text-sm">
                    A system does not panic. It follows the rules you set. This taught me the value of consistent execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">Pattern recognition</h3>
                  <p className="text-text-secondary text-sm">
                    Writing algorithms to detect price patterns helped me understand how to break down complex problems into simple steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">Real-time data handling</h3>
                  <p className="text-text-secondary text-sm">
                    Markets move fast. Learning to process live price feeds taught me about timing, state management, and error handling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">Testing and iteration</h3>
                  <p className="text-text-secondary text-sm">
                    Backtesting taught me the value of validating your logic before deploying it. Forward testing showed me that theory and reality differ.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">Key Features</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                <span className="text-text-secondary">{feature}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 bg-bg-surface1 border-y border-white/5">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">Tech Stack</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="flex items-start justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{tech.name}</h3>
                  <p className="text-text-secondary text-sm">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Links Section */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <Container size="narrow" className="text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-8">Related Work</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/nzkbuild"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
