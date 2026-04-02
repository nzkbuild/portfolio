import { Database, Activity, Bot, LayoutTemplate } from "lucide-react";

export const projects = [
    {
        id: "kios",
        title: "KIOS",
        subtitle: "Internal Operations System",
        tagline: "A centralized tool to manage programs, employers, and staff roles at KWSP Kluang.",
        context:
            "Built during my Protégé placement to replace multiple spreadsheets. The branch needed a single source of truth for their daily operations.",
        challenge: "The KWSP branch suffered from fragmented daily activity logging using multiple disjointed spreadsheets, making tracking and reporting highly inefficient and error-prone.",
        solution: "Architected and deployed KIOS using Next.js and Supabase. Developed custom PIN authentication, role-based controls, and real-time data sync to handle program management.",
        impact: "Completely digitized the workflow, replacing legacy spreadsheets. Provided management with instant access to actionable data for smarter resource allocation. Designed with 100% compliance in mind.",
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
        challenge: "Manual trading is highly emotional and inconsistent, leading to suboptimal trade execution and continuous stress.",
        solution: "Engineered a rules-based algorithmic trading system utilizing MQL4 and MQL5. Built automated mechanisms to detect and execute along key support/resistance price zones.",
        impact: "Completely removed human emotion from executions. Processed extensive backtested data to validate long-term profitability logic, running smoothly 24/7 on a secure VPS terminal.",
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
        challenge: "Understanding modern web integrations and fragmented API architectures is extremely complex without practical sandbox environments to test data flow.",
        solution: "Developed a variety of exploratory scripts connecting the Luno Exchange API, MetaTrader bridges, and Telegram bots to route automated trading signals.",
        impact: "Accelerated my understanding of async state management, API payload structures, and how distinct business logic systems communicate securely.",
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
        githubUrl: "https://github.com/nzkbuild",
    },
    {
        id: "snrx-lite",
        title: "SNRX Lite",
        subtitle: "Static Landing Page",
        tagline: "A minimal landing page experiment to learn custom domains and static site hosting.",
        context:
            "Exploration into basic web publishing, configuring DNS, and writing pure markup without frameworks.",
        challenge: "Needed a foundational understanding of DNS routing, custom domains, and raw semantic web publishing without relying on heavy frontend frameworks.",
        solution: "Built a pure semantic HTML/CSS landing page to document the SNRX app, manually deploying and routing it on GitHub Pages.",
        impact: "Gained deep fundamental knowledge of internet infrastructure and responsive mobile design structure.",
        features: [
            "Custom domain configuration",
            "Static site hosting",
            "Responsive pure CSS layout",
        ],
        tech: ["HTML/CSS", "GitHub Pages"],
        icon: LayoutTemplate,
        iconColor: "text-text-muted",
        featured: false,
        status: "Completed",
        href: "/projects/snrx-lite",
        githubUrl: "https://github.com/nzkbuild",
        liveUrl: "https://nzkbuild.github.io",
    }
];

export const timelineData = [
    {
        date: "Aug 2025 – Feb 2026",
        title: "Protégé – Relationship & Advisory",
        location: "KWSP (EPF), Kluang",
        desc: "Developed a custom internal management system (KIOS) using Next.js/Supabase to digitize activity logs. Analyzed branch workflows, implemented digital tracking, and provided policy guidance ensuring 100% compliance. Created performance dashboards for data-driven resource allocation.",
        type: "experience"
    },
    {
        date: "2022 – 2025",
        title: "Bachelor of Business Administration (Hons)",
        location: "Universiti Poly-Tech Malaysia (UPTM)",
        desc: "Graduated with 3.17 CGPA in Human Resource Management. Gained a strong foundation in HR operations, compliance, and organizational behavior.",
        type: "education"
    },
    {
        date: "Feb 2022 – May 2022",
        title: "Retail Sales Associate",
        location: "RedOne, Kluang",
        desc: "Managed customer accounts, executed needs analysis, and resolved conflict. Strictly processed contracts in accordance with PDPA data privacy standards.",
        type: "experience"
    },
    {
        date: "Aug 2021 – Dec 2021",
        title: "Admin Intern",
        location: "Pejabat Tanah Daerah Kluang",
        desc: "Organized confidential personnel files ensuring efficient retrieval. Facilitated inter-departmental communication and managed official government correspondence.",
        type: "experience"
    },
    {
        date: "2019 – 2021",
        title: "Diploma in Human Resource Management",
        location: "Kolej Poly-Tech MARA (KPTM) Batu Pahat",
        desc: "Graduated with 3.74 CGPA. Mastered foundational HR tools and Employee Relations operations.",
        type: "education"
    }
];

export const skills = {
    hrOps: [
        "Employee Records Management",
        "Advisory Services",
        "Workflow Automation",
        "Compliance & Privacy (PDPA)",
        "Conflict Resolution",
    ],
    tech: [
        "Next.js & React",
        "TypeScript",
        "Supabase",
        "Tailwind CSS v4",
        "Python",
        "MQL4 / MQL5",
    ],
    tools: [
        "Microsoft Office (Advanced Excel)",
        "Git & GitHub",
        "Vercel",
        "Cursor AI Editor",
    ]
};
