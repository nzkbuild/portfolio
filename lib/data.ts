import { Database, Activity, Bot } from "lucide-react";

export const projects = [
    {
        id: "kios",
        title: "KIOS",
        subtitle: "Internal Operations System",
        tagline: "A centralized tool to manage programs, employers, and staff roles at KWSP Kluang.",
        context:
            "Built during my Protege placement to replace multiple spreadsheets. The branch needed a single source of truth for their daily operations.",
        features: [
            "Custom PIN authentication",
            "Role-based permissions (Admin, RA, Supervisor)",
            "Programs and employers tracking",
            "Real-time data synchronization",
        ],
        tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
        icon: Database,
        iconColor: "text-accent-blue",
        featured: true,
        status: "Active Development",
        href: "/projects/kios",
    },
    {
        id: "snrx",
        title: "SNRX",
        subtitle: "Support and Resistance X",
        tagline: "Automated trading system built in MQL4 and MQL5.",
        context:
            "My entry point into coding. I wanted a rule-based system that removed emotion from trading decisions. Taught me discipline, patterns, and clean logic.",
        features: [
            "Automated execution on MT4/MT5",
            "Support and resistance detection",
            "Backtested and forward tested",
            "Deployed on VPS for 24/7 operation",
        ],
        tech: ["MQL4", "MQL5", "MetaTrader", "VPS/RDP"],
        icon: Activity,
        iconColor: "text-status-success",
        featured: false,
        status: "Completed",
        href: "/projects/snrx",
    },
    {
        id: "lab",
        title: "Trading Automation Lab",
        subtitle: "API Experiments",
        tagline: "Experimental sandbox for learning APIs, data flow, and system integration.",
        context:
            "Grid trading bots for Luno, Telegram signal alerts, Python to MT4 bridges. A hands-on lab where I learned how systems talk to each other.",
        features: [
            "Luno grid trading prototype",
            "Telegram bot for trade alerts",
            "Python to MT4/MT5 bridge",
            "API integration experiments",
        ],
        tech: ["Python", "REST APIs", "Luno API", "Telegram Bot API"],
        icon: Bot,
        iconColor: "text-status-warning",
        featured: false,
        status: "Experimental",
        href: "/projects/trading-lab",
    },
];

export const timelineData = [
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
        title: "Protege Program",
        desc: "Joined KWSP Kluang through a Protege program. Frontline work exposed me to daily operational friction.",
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

export const skills = {
    tech: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "React",
        "Git & GitHub",
        "Vercel",
        "Python",
        "MQL4 / MQL5",
    ],
    workflow: [
        "Rapid prototyping",
        "Operational analysis",
        "User workflow translation",
        "AI-assisted development",
    ],
    ai: [
        "Claude for logic breakdowns",
        "ChatGPT for structure and planning",
        "Gemini for UI ideas and layout thinking",
    ],
};
