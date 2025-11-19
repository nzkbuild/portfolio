"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Terminal,
  Users,
  Cpu,
  Activity,
  ArrowRight,
  Bot,
  Database,
  LayoutTemplate,
} from "lucide-react";

// --- CONTENT DATA ---

const projects = [
  {
    id: "kios",
    title: "KIOS (Internal Operations System)",
    tagline: "A tool to organise staff roles, appointments and outreach activities.",
    context:
      "Requested internally to replace multiple spreadsheets and help the team work with clearer information.",
    note: "Developed during my Protégé placement for a large public-sector organisation.",
    features: [
      "Custom PIN login for staff",
      "Role-based views for management and frontline teams",
      "Centralised tables for daily operations",
      "Built through continuous feedback from the people who use it",
    ],
    tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: <Database size={20} className="text-indigo-400" />,
    featured: true,
    status: "Active Development",
  },
  {
    id: "snrx",
    title: "Support and Resistance X (SNRX)",
    tagline: "Automated trading system built in MQL4 and MQL5.",
    context:
      "My entry point into coding. I wanted a rule-based system that removed emotion from my decisions as a beginner trader.",
    features: [
      "Deployed on VPS or RDP",
      "Executes predefined trading logic on MT4 and MT5",
      "Backtested and forward tested",
      "Helped me learn discipline, patterns and clean logic",
    ],
    tech: ["MQL4", "MQL5", "MetaTrader", "VPS/RDP"],
    icon: <Activity size={20} className="text-emerald-400" />,
    featured: false,
    status: "Completed",
  },
  {
    id: "lab",
    title: "Trading Automation Lab",
    tagline: "Experiments with crypto bots, Telegram signals and Python bridges.",
    context:
      "A hands-on sandbox where I learned how different systems pass data, trigger actions and talk through APIs.",
    features: [
      "Grid trading prototype for Luno Malaysia",
      "Telegram bot for sending trade alerts",
      "Python to MT4 and MT5 execution bridge",
      "Focused on data flow, timing and integration",
    ],
    tech: ["Python", "REST APIs", "Luno API", "Telegram Bot API"],
    icon: <Bot size={20} className="text-yellow-400" />,
    featured: false,
    status: "Experimental",
  },
];

const timelineData = [
  {
    date: "Early 2025",
    title: "Automation Start",
    desc: "Started learning MQL4 and MQL5 to automate trading decisions. Learned loops, logic and error handling.",
  },
  {
    date: "April 2025",
    title: "Built SNRX",
    desc: "Created Support and Resistance X and deployed it on VPS.",
  },
  {
    date: "Mid 2025",
    title: "Experiment Phase",
    desc: "Experimented with Python automation, Luno grid bots and Telegram alerts.",
  },
  {
    date: "August 4, 2025",
    title: "Protégé Program",
    desc: "Joined a public-sector organisation through a Protégé program. Frontline work exposed me to daily operational friction.",
  },
  {
    date: "October 2025",
    title: "KIOS Begins",
    desc: "Asked internally if I could build a better tracking system. Started KIOS.",
  },
  {
    date: "November 2025 onward",
    title: "Full Stack Deep Dive",
    desc: "Deep dive into Next.js, Supabase, Tailwind, GitHub and deployment workflows.",
  },
  {
    date: "December 2025",
    title: "Graduation",
    desc: "Official graduation for Human Resource Management.",
  },
];

const skills = {
  tech: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
    "React Basics",
    "Git & GitHub",
    "Vercel",
    "Python Basics",
    "MQL4 / MQL5",
  ],
  workflow: [
    "Cursor and VS Code",
    "Rapid prototyping",
    "Operational analysis",
    "User workflow translation",
  ],
  ai: [
    "Claude for logic breakdowns",
    "ChatGPT for structure and planning",
    "Gemini for UI ideas and layout thinking",
  ],
};

// --- SMALL COMPONENTS ---

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({ href, children, onClick, isMobile = false }: NavLinkProps) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        if (onClick) onClick();
      }
    }}
    className={`text-sm font-medium transition-colors hover:text-indigo-300 ${
      isMobile
        ? "block py-4 text-lg text-slate-300 border-b border-slate-800"
        : "text-slate-400"
    }`}
  >
    {children}
  </a>
);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>
    )}
  </div>
);

// --- MAIN COMPONENT ---

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-100">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md border-slate-800"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-bold text-xl tracking-tight text-slate-100 flex items-center gap-2 hover:text-white transition-colors"
          >
            <Terminal size={20} className="text-indigo-500" />
            nzkbuild
          </a>

          <div className="hidden md:flex gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#timeline">Timeline</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 absolute w-full px-6 py-2 shadow-2xl">
            <NavLink
              href="#about"
              isMobile
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              href="#projects"
              isMobile
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              href="#timeline"
              isMobile
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </NavLink>
            <NavLink
              href="#contact"
              isMobile
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-300 text-xs font-medium tracking-wide">
              <Users size={12} />
              Early-career builder with HR and operations background
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Hi, I’m Nabil.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-xl">
              I build tools that make everyday work smoother. I come from HR and
              frontline operations, so I see the real problems people deal with.
              I first learned automation through trading systems, then shifted
              into web development to improve workflows at the organisation I am
              serving now. My goal is simple. Build things that genuinely help
              people do their jobs better.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-indigo-900/20"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
              >
                Let’s talk
              </a>
            </div>
          </div>

          {/* Simple visual block */}
          <div className="flex-1 w-full max-w-md md:max-w-full opacity-90">
            <div className="relative aspect-square max-h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    kios_dashboard.tsx
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1/3 h-24 rounded bg-slate-800/50 border border-slate-800"></div>
                    <div className="w-1/3 h-24 rounded bg-slate-800/50 border border-slate-800"></div>
                    <div className="w-1/3 h-24 rounded bg-slate-800/50 border border-slate-800"></div>
                  </div>
                  <div className="h-32 rounded bg-slate-800/30 border border-slate-800 p-4">
                    <div className="w-3/4 h-4 bg-slate-700/50 rounded mb-3"></div>
                    <div className="w-1/2 h-4 bg-slate-700/50 rounded"></div>
                  </div>
                  <div className="flex justify-end">
                    <div className="px-4 py-2 rounded bg-indigo-500/20 text-indigo-300 text-xs font-mono">
                      Status: Optimization active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 bg-slate-900/30 border-y border-slate-800/50"
      >
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader title="My journey" />

          <div className="space-y-8 text-lg text-slate-400 leading-relaxed font-light">
            <p>
              I did not come from a computer science path. I studied Human
              Resource Management and will officially graduate in December 2025.
              My early work involved helping people, understanding policies and
              figuring out how daily operations actually run.
            </p>

            <div className="pl-6 border-l-2 border-indigo-500/30 italic">
              <p className="mb-4">
                On August 4, 2025, I joined a government-linked organisation
                through a Protégé program. Working frontline showed me how much
                time gets lost because information lives in different places.
                The team works hard, but the tools slow them down.
              </p>
            </div>

            <p>
              Before web development, I spent early 2025 learning MQL4 and MQL5
              to build trading automation. I deployed systems on VPS setups,
              tested execution logic and learned how to handle real-time data.
              It taught me discipline, structure and how to think through a
              process from start to finish.
            </p>

            <p>
              When my supervisor asked if I could create a better way to track
              internal work, everything clicked. I realised the same logic from
              automation could help with operations. That was the start of KIOS,
              a tool I am still actively building.
            </p>

            <p>
              Today I work with a mix of web technologies and AI-assisted tools
              like Claude, ChatGPT and Gemini. I am not trying to chase hype. I
              just want to build things that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeader
          title="Featured projects"
          subtitle="Real tools built for real use cases. From operations to automation experiments."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-indigo-500/30 transition-all group ${
                project.featured ? "lg:col-span-2 lg:p-10" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${
                        project.status === "Active Development"
                          ? "bg-indigo-500/10 text-indigo-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/nzkbuild"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.featured && (
                    <a
                      href="#"
                      className="text-slate-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-indigo-200/90 font-medium text-lg mb-4">
                {project.tagline}
              </p>

              <p className="text-slate-400 mb-3 italic border-l-2 border-slate-800 pl-4 py-1">
                “{project.context}”
              </p>
              {project.note && (
                <p className="text-slate-500 text-sm mb-6">{project.note}</p>
              )}

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 text-xs rounded hover:text-slate-200 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* SNRX Lite */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-indigo-500/30 transition-all lg:col-span-2 flex flex-col md:flex-row md:items-center gap-6 opacity-80 hover:opacity-100">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 shrink-0">
              <LayoutTemplate size={20} className="text-slate-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-200">SNRX Lite</h3>
              <p className="text-slate-400 text-sm mt-1">
                A minimal landing page experiment to learn custom domains and
                hosting.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-500 text-xs rounded">
                HTML/CSS
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-500 text-xs rounded">
                GitHub Pages
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 bg-slate-900/20 border-y border-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Code className="text-indigo-500" size={20} /> Tech stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tech.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-lg font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Cpu className="text-indigo-500" size={20} /> Workflow
            </h3>
            <div className="space-y-3">
              {skills.workflow.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-400"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Bot className="text-indigo-500" size={20} /> AI in my workflow
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              I use AI tools to speed up learning and prototyping. Claude helps
              with logic breakdowns. ChatGPT helps with structure and planning.
              Gemini helps me think through layouts and UI. I use them the same
              way I use any other tool. Understand the problem faster, build
              with fewer mistakes.
            </p>
            <div className="space-y-2">
              {skills.ai.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-400 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24 px-6 max-w-3xl mx-auto">
        <SectionHeader title="Timeline" subtitle="How I got here." />

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-800">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start group">
              <div
                className={`absolute left-0 ml-2.5 -translate-x-1/2 mt-1.5 w-3 h-3 rounded-full border-2 border-slate-900 z-10 transition-colors ${
                  index === timelineData.length - 2
                    ? "bg-indigo-500 ring-4 ring-indigo-500/20"
                    : "bg-slate-600 group-hover:bg-indigo-400"
                }`}
              />
              <div className="pl-10">
                <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">
                  {item.date}
                </span>
                <h4 className="text-lg font-bold text-slate-200 mt-1">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-base mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-b from-slate-950 to-indigo-950/10 border-t border-slate-900"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let’s talk.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you are hiring for a junior or hybrid role where I can grow as a
            developer while staying close to operations and people, I would be
            happy to talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a
              href="mailto:nbzkri@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-900/50 px-6 py-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 hover:-translate-y-1 duration-300"
            >
              <Mail size={20} className="text-indigo-400" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nbzkri/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-900/50 px-6 py-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 hover:-translate-y-1 duration-300"
            >
              <Linkedin size={20} className="text-indigo-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/nzkbuild"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-900/50 px-6 py-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 hover:-translate-y-1 duration-300"
            >
              <Github size={20} className="text-indigo-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} nzkbuild. Built with React and Tailwind.
        </p>
      </footer>
    </div>
  );
}
