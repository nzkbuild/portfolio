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
 impact?: string;
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
 subtitle: "A private place to keep and find important documents, numbers, and dates.",
 year: "2026",
 status: "Live on Google Play",
 summary:
 "Adults lose track of the boring but important details of life across email, drawers, and memory. Boring App keeps them in one private place, fully offline, with on-device document scanning and an encrypted lock.",
 impact:
 "Live on Google Play with around 30 monthly active users across Malaysia, India, Hong Kong, and Singapore. Designed, built, and shipped entirely solo.",
 highlights: [
 "Works fully offline, nothing collected, no ads",
 "On-device scanning and search inside scanned pages",
 "Encrypted PIN lock (AES-256) and encrypted backups",
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
 id: "insurance-landing",
 title: "Insurance Agent Landing Page",
 subtitle: "A landing page built to turn visitors into enquiries.",
 year: "2026",
 status: "Live",
 summary:
 "An insurance agent needed a clear, fast way to introduce their services and capture leads. I designed and built a focused landing page: hero, services, reasons to choose, how it works, FAQ, and a contact form.",
 impact:
 "Live for the client: a fast, mobile-first page that gives them a credible home and a clear path to enquiries.",
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
 "My entry point into programming. A rules-based trading system in MQL4 and MQL5 that took the emotion out of a manual process and taught me state, logic, and testing.",
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
 note: "Supported daily branch administration: member documentation, record updates, reporting, and filing. At my branch head request, I built a small internal tool, my first real attempt at software. It stayed an unfinished internal experiment, but it is what pulled me into development.",
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
 items: ["Microsoft Office & Excel", "AI-assisted drafting", "Vercel"],
 },
];

