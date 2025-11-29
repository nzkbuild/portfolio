"use client";

import StatusPill from "@/app/components/StatusPill";
import { LayoutTemplate, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function SNRXLitePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary to-bg-surface1 border-b border-white/5">
        <Container size="narrow">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <LayoutTemplate size={28} className="text-text-muted" />
              </div>
              <StatusPill status="Online" variant="online" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              SNRX <span className="breathing-highlight">Lite</span>
              <span className="block text-3xl md:text-4xl mt-2 text-text-secondary font-normal">
                A learning experiment in deployment
              </span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Minimal landing page built to learn custom domain configuration and static site hosting.
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
              <p>
                This was a small project with a simple goal: learn how custom domains work and how to deploy a static site to production.
              </p>

              <div className="bg-accent-blue/10 border border-accent-blue/20 p-8 rounded-2xl backdrop-blur-sm">
                <p className="text-text-primary italic">
                  "I wanted to understand DNS records, domain registration, and how GitHub Pages handles custom domains.
                  So I built a minimal landing page and went through the entire deployment process."
                </p>
              </div>

              <p>
                The site itself is just HTML and CSS. Clean layout. Responsive design. Nothing fancy.
                The value was not in the code - it was in learning the deployment workflow and domain configuration.
              </p>

              <p>
                This project is archived now, but the knowledge carried forward. Every deployment since - KIOS on Vercel, other experiments -
                benefited from understanding how DNS, hosting, and domain linking actually work.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* What I Learned Section */}
      <section className="py-16 md:py-24 bg-bg-surface1 border-y border-white/5">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">What I Learned</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            <motion.div variants={fadeInItem} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Custom domain configuration</h3>
              <p className="text-text-secondary">
                Learned how to configure DNS records (A, CNAME) to point a custom domain to a hosting provider. Understood propagation times and how to troubleshoot DNS issues.
              </p>
            </motion.div>

            <motion.div variants={fadeInItem} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Static site deployment</h3>
              <p className="text-text-secondary">
                Used GitHub Pages to deploy a static site. Learned about build processes, public directories, and how static hosting differs from dynamic applications.
              </p>
            </motion.div>

            <motion.div variants={fadeInItem} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Responsive HTML/CSS fundamentals</h3>
              <p className="text-text-secondary">
                Built a clean, minimal layout without frameworks. Practiced responsive design principles and cross-browser compatibility.
              </p>
            </motion.div>
          </StaggerContainer>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">Tech Stack</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            <motion.div variants={fadeInItem} className="flex items-start justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">HTML / CSS</h3>
                <p className="text-text-secondary text-sm">Vanilla markup and styling</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInItem} className="flex items-start justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">GitHub Pages</h3>
                <p className="text-text-secondary text-sm">Static site hosting</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInItem} className="flex items-start justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">Custom Domain</h3>
                <p className="text-text-secondary text-sm">DNS configuration and domain linking</p>
              </div>
            </motion.div>
          </StaggerContainer>
        </Container>
      </section>

      {/* Links Section */}
      <section className="py-16 md:py-24 bg-bg-surface1 border-t border-white/5">
        <Container size="narrow" className="text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-8">View Live Site</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://snrx.life"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                <ExternalLink size={20} />
                Visit SNRX Lite
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
