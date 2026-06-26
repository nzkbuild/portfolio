export interface ProjectLink {
 label: string;
 href: string;
}

export interface Shot {
 src: string;
 alt: string;
}

export interface Project {
 id: string;
 title: string;
 subtitle: string;
 year: string;
 status: string;
 summary: string;
 highlights: string[];
 tech: string[];
 links?: ProjectLink[];
 shots?: Shot[];
 shotStyle?: "phone" | "wide";
 featured?: boolean;
}

export const projects: Project[] = [
 {
 id: "boring-app",
 title: "Boring App",
 subtitle:
 "A private place to keep and find important documents, numbers, and dates.",
 year: "2026",
 status: "Live on Google Play",
 summary:
 "A calm, offline Android app for the boring but important parts of adult life: documents, account numbers, renewals, and appointments. No account, no cloud, nothing leaves the phone. I built and launched it solo, from the product idea to a published app on Google Play.",
 highlights: [
 "Works fully offline, with nothing collected and no ads",
 "On-device document scanning and search inside scanned pages",
 "Encrypted PIN lock (AES-256) with optional encrypted backups",
 "One-time purchase, no subscription",
 ],
 tech: ["React", "Capacitor", "Android", "IndexedDB", "WebCrypto", "Tesseract.js"],
 links: [
 { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.boringsoftware.b" },
 ],
 shotStyle: "phone",
 shots: [
 { src: "/boring-app/play-01.png", alt: "Boring App records home screen" },
 { src: "/boring-app/play-02.png", alt: "A record with its key facts" },
 { src: "/boring-app/play-03.png", alt: "On-device document scanning" },
 { src: "/boring-app/play-04.png", alt: "Private by design, no cloud" },
 { src: "/boring-app/play-06.png", alt: "Reminders for the dates that matter" },
 { src: "/boring-app/play-07.png", alt: "Optional extra protection" },
 ],
 featured: true,
 },
 {
 id: "kios",
 title: "KIOS",
 subtitle: "An internal tool that replaced scattered spreadsheets at a KWSP branch.",
 year: "2025",
 status: "In use",
 summary:
 "Built during my Prot\u00e9g\u00e9 placement at KWSP Kluang to track programs, employers, and staff in one place instead of several spreadsheets. I designed it, built it, and adjusted it with feedback from the people using it every day.",
 highlights: [
 "One shared system in place of several spreadsheets",
 "Role-based access with a simple PIN sign-in",
 "Built and refined from real user feedback",
 ],
 tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
 links: [{ label: "Source", href: "https://github.com/nzkbuild/kios-final" }],
 shotStyle: "wide",
 shots: [
 { src: "/ref/dashboard.png", alt: "KIOS dashboard" },
 { src: "/ref/programs-page.png", alt: "KIOS programs page" },
 { src: "/ref/employers-page.png", alt: "KIOS employers page" },
 { src: "/ref/staff-management-page.png", alt: "KIOS staff management page" },
 ],
 },
 {
 id: "insurance-landing",
 title: "Insurance Agent Landing Page",
 subtitle: "A landing page built to turn visitors into enquiries for an insurance agent.",
 year: "2026",
 status: "Completed",
 summary:
 "A focused landing page for an insurance agent: a clear hero, a breakdown of services, reasons to choose them, how it works, an FAQ, and a simple contact form. Built to load fast and read clearly on a phone.",
 highlights: [
 "Clear services and trust-building sections",
 "FAQ and a simple enquiry form",
 "Responsive and fast on mobile",
 ],
 tech: ["Next.js", "TypeScript", "Tailwind CSS"],
 links: [{ label: "View live", href: "https://naqiudin.netlify.app/" }],
 shotStyle: "wide",
 shots: [
 { src: "/insurance-agent/main.jpg", alt: "Insurance landing page hero" },
 { src: "/insurance-agent/services.jpg", alt: "Services section of the insurance landing page" },
 ],
 },
 {
 id: "snrx",
 title: "SNRX",
 subtitle: "A rule-based automated trading system, and my first real code.",
 year: "2023",
 status: "Completed",
 summary:
 "My entry point into programming. A rules-based trading system written in MQL4 and MQL5 that took the emotion out of a manual process. It is where I learned state, logic, and testing.",
 highlights: ["Automated execution on MetaTrader 4 and 5", "Backtested and run on a VPS"],
 tech: ["MQL4", "MQL5", "MetaTrader"],
 },
 {
 id: "trading-lab",
 title: "Trading Automation Lab",
 subtitle: "API and bot experiments for learning how systems connect.",
 year: "2023",
 status: "Experiments",
 summary:
 "A sandbox where I wired up APIs to understand how systems talk to each other: a Luno grid bot, Telegram alerts, and Python-to-MetaTrader bridges.",
 highlights: ["Luno grid trading prototype", "Telegram bot for trade alerts", "Python to MetaTrader bridge"],
 tech: ["Python", "REST APIs", "Telegram Bot API"],
 },
 {
 id: "snrx-lite",
 title: "SNRX Lite",
 subtitle: "A static landing page for learning the web basics.",
 year: "2022",
 status: "Completed",
 summary:
 "A plain HTML and CSS page I used to learn DNS, custom domains, and static hosting on GitHub Pages.",
 highlights: ["Hand-written HTML and CSS", "Custom domain on GitHub Pages"],
 tech: ["HTML", "CSS", "GitHub Pages"],
 },
];


export interface TimelineEntry {
 period: string;
 role: string;
 org: string;
 note: string;
 kind: "work" | "education";
}

export const timeline: TimelineEntry[] = [
 {
 period: "Aug 2025 - Feb 2026",
 role: "Prot\u00e9g\u00e9, Relationship & Advisory",
 org: "KWSP (EPF), Kluang",
 note: "Supported daily branch administration: member documentation, record updates, and reporting. Built KIOS to move manual tracking into one simple system.",
 kind: "work",
 },
 {
 period: "2022 - 2025",
 role: "BBA (Hons), Human Resource Management",
 org: "Universiti Poly-Tech Malaysia (UPTM)",
 note: "Graduated with a 3.17 CGPA. Foundation in HR operations, compliance, and organizational behavior.",
 kind: "education",
 },
 {
 period: "Feb 2022 - May 2022",
 role: "Retail Sales Associate",
 org: "RedOne, Kluang",
 note: "Handled customer enquiries, service documentation, and follow-up, with care for data privacy.",
 kind: "work",
 },
 {
 period: "Aug 2021 - Dec 2021",
 role: "Admin Intern",
 org: "Pejabat Tanah Daerah Kluang",
 note: "Organized confidential land and government records, and supported day-to-day office administration.",
 kind: "work",
 },
 {
 period: "2019 - 2021",
 role: "Diploma, Human Resource Management",
 org: "Kolej Poly-Tech MARA (KPTM), Batu Pahat",
 note: "Graduated with a 3.74 CGPA.",
 kind: "education",
 },
];

export interface SkillGroup {
 label: string;
 items: string[];
}

export const skills: SkillGroup[] = [
 {
 label: "Operations & admin",
 items: ["Records & documentation", "Data entry & tracking", "Reporting & scheduling", "Compliance & PDPA awareness"],
 },
 {
 label: "Building",
 items: ["React & Next.js", "TypeScript", "Supabase", "Capacitor (Android)", "Python", "Git"],
 },
 {
 label: "Everyday tools",
 items: ["Excel & Microsoft Office", "AI-assisted drafting"],
 },
];

