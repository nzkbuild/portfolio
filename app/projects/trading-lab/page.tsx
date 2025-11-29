"use client";

import StatusPill from "@/app/components/StatusPill";
import { Bot, Github, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function TradingLabPage() {
  const experiments = [
    {
      title: "Luno Grid Trading Bot",
      desc: "Prototype grid trading strategy for Luno Malaysia exchange. Learned about order management and API rate limits.",
    },
    {
      title: "Telegram Signal Bot",
      desc: "Built a bot to send trade alerts via Telegram. Explored webhooks, message formatting, and real-time notifications.",
    },
    {
      title: "Python to MT4/MT5 Bridge",
      desc: "Created a bridge to execute Python-generated signals on MetaTrader platforms. Learned about inter-process communication.",
    },
    {
      title: "API Integration Experiments",
      desc: "Tested different exchange APIs to understand rate limits, authentication, and data formats.",
    },
  ];

  const techStack = [
    { name: "Python", desc: "Primary language for bots and bridges" },
    { name: "REST APIs", desc: "Exchange and platform integrations" },
    { name: "Luno API", desc: "Crypto exchange for grid trading" },
    { name: "Telegram Bot API", desc: "Messaging and alerts" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary to-bg-surface1 border-b border-white/5">
        <Container size="narrow">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <Bot size={28} className="text-yellow-400" />
              </div>
              <StatusPill status="Experimental" variant="experimental" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Trading <span className="breathing-highlight">Automation</span> Lab
              <span className="block text-3xl md:text-4xl mt-2 text-text-secondary font-normal">
                Experiments with APIs, bots, and data flow
              </span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              A hands-on sandbox where I learned how different systems pass data, trigger actions, and communicate through APIs.
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
              <p>This was not a commercial product. It was a learning environment. A place to break things, test ideas, and figure out how systems talk to each other.</p>

              <div className="bg-accent-blue/10 border border-accent-blue/20 p-8 rounded-2xl backdrop-blur-sm">
                <p className="text-text-primary italic">
                  "I wanted to understand how data flows between platforms. How a signal in one system can trigger an action in another.
                  How timing, authentication, and error handling work in the real world."
                </p>
              </div>

              <p>
                I built grid trading prototypes for Luno Malaysia. I created Telegram bots to send alerts.
                I wrote Python bridges to execute trades on MetaTrader from external scripts. Most of it worked. Some of it did not.
                All of it taught me something.
              </p>

              <p>
                This lab is archived now. The lessons I learned here carried forward into KIOS and my current web development work.
                Understanding APIs, managing state, and handling async operations - that knowledge came from here.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Experiments Section */}
      <section className="py-16 md:py-24 bg-bg-surface1 border-y border-white/5">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">Experiments</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {experiments.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2">{exp.title}</h3>
                <p className="text-text-secondary">{exp.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* What I Learned Section */}
      <section className="py-16 md:py-24">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">What I Learned</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            <motion.div variants={fadeInItem} className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 size={20} className="text-yellow-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-text-primary font-semibold mb-1">API integration patterns</h3>
                <p className="text-text-secondary text-sm">
                  Every platform has its own authentication, rate limits, and data formats. Learning to read documentation and adapt became second nature.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInItem} className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 size={20} className="text-yellow-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Asynchronous operations</h3>
                <p className="text-text-secondary text-sm">
                  Webhooks, callbacks, polling - different ways to handle timing when systems do not respond instantly.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInItem} className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 size={20} className="text-yellow-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Error handling and resilience</h3>
                <p className="text-text-secondary text-sm">
                  Live systems fail. Network issues. API downtime. Rate limit exceeded. Learning to handle failures gracefully is as important as writing the happy path.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-2xl font-bold text-text-primary mb-8">Explore More</h2>

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
