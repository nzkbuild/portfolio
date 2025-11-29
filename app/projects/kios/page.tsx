"use client";

import { Database, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScreenshotGallery from "@/app/components/ScreenshotGallery";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function KIOSPage() {
  const screenshots = [
    {
      src: "/ref/login.png",
      alt: "KIOS Login Screen",
      caption: "Custom PIN authentication for staff members",
    },
    {
      src: "/ref/dashboard.png",
      alt: "KIOS Dashboard",
      caption: "Main dashboard with program and activity overview",
    },
    {
      src: "/ref/programs-page.png",
      alt: "Programs Management",
      caption: "Centralized programs tracking and management",
    },
    {
      src: "/ref/create-programs.png",
      alt: "Create New Program",
      caption: "Program creation workflow with form validation",
    },
    {
      src: "/ref/employers-page.png",
      alt: "Employers Directory",
      caption: "Searchable employers database with filtering",
    },
    {
      src: "/ref/add-employers.png",
      alt: "Add Employer",
      caption: "Employer registration form",
    },
    {
      src: "/ref/staff-management-page.png",
      alt: "Staff Management",
      caption: "Role-based staff management interface",
    },
    {
      src: "/ref/sidepanel-expanded.png",
      alt: "Navigation Panel",
      caption: "Collapsible navigation sidebar",
    },
  ];

  const features = [
    "Custom PIN authentication replacing traditional login",
    "Role-based permissions (Admin, RA, Supervisor)",
    "Programs management with status tracking",
    "Employers directory with search and filtering",
    "Staff management and role assignment",
    "Activity logging for audit trails",
    "Real-time data synchronization",
    "Responsive design for desktop and tablet use",
  ];

  const techStack = [
    { name: "Next.js 16", desc: "React framework with App Router" },
    { name: "TypeScript", desc: "Type-safe development" },
    { name: "Supabase", desc: "PostgreSQL database and authentication" },
    { name: "Tailwind CSS", desc: "Utility-first styling" },
    { name: "Vercel", desc: "Deployment and hosting" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary to-bg-surface1 border-b border-white/5">
        <Container size="narrow">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <Database size={28} className="text-accent-blue" />
              </div>
              <Badge variant="default" className="text-sm py-1 px-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse mr-2"></span>
                Active Development
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              KIOS
              <span className="block text-3xl md:text-4xl mt-2 text-text-secondary font-normal">
                Internal <span className="breathing-highlight">Operations</span> System
              </span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              A centralized tool to manage programs, employers, and staff roles at KWSP Kluang.
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
                Before KIOS, the branch tracked programs, employers, and staff roles across multiple Excel files.
                Updates were manual. Information was siloed. Finding what you needed took time.
              </p>

              <div className="bg-accent-blue/10 border border-accent-blue/20 p-8 rounded-2xl backdrop-blur-sm">
                <p className="text-text-primary italic">
                  "Built during my Protégé placement to help simplify daily branch operations.
                  When I saw how much time the team spent managing spreadsheets, I asked if I could
                  build something better. This is the result."
                </p>
              </div>

              <p>
                KIOS centralizes everything into one system. Real-time updates. Role-based access.
                Clear visibility into programs, appointments, and outreach activities. It's not
                revolutionary - it's just practical.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* My Role Section */}
      <section className="py-16 md:py-24 bg-bg-surface1 border-y border-white/5">
        <Container size="narrow">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-8">My Role</h2>

            <div className="space-y-6 text-lg text-text-secondary">
              <p>
                I'm the end-to-end builder of KIOS. I designed the database schema, built the frontend,
                set up authentication, and deployed it to production. All while learning Next.js and
                Supabase on the job.
              </p>

              <p>
                I'm not a senior engineer. I'm a Protégé trainee who identified a problem and was given
                the opportunity to solve it. The system works because I built it with continuous feedback
                from the people who use it every day.
              </p>

              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-accent-blue mt-0.5 shrink-0" />
                  <span>Learned Next.js App Router, TypeScript, and Supabase from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-accent-blue mt-0.5 shrink-0" />
                  <span>Designed PostgreSQL database schema with RLS policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-accent-blue mt-0.5 shrink-0" />
                  <span>Built role-based authentication with custom PIN system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-accent-blue mt-0.5 shrink-0" />
                  <span>Deployed to production and maintained through user feedback</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Key Features Section */}
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
                <span className="w-2 h-2 rounded-full bg-accent-blue mt-2 shrink-0"></span>
                <span className="text-text-secondary">{feature}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 bg-bg-surface1 border-y border-white/5">
        <Container size="wide">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">Screenshots</h2>
            <ScreenshotGallery screenshots={screenshots} />
          </FadeIn>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24">
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
      <section className="py-16 md:py-24 bg-bg-surface1 border-t border-white/5">
        <Container size="narrow" className="text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-8">Explore KIOS</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="https://github.com/nzkbuild/kios-final" target="_blank" rel="noreferrer">
                  <Github size={20} />
                  View Code
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="https://snrx.life" target="_blank" rel="noreferrer">
                  <ExternalLink size={20} />
                  Related Project: SNRX
                </a>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
