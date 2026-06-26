import { ArrowUpRight, Mail } from "lucide-react";

const profile = [
 { k: "Role", v: "Operations and admin, and I build" },
 { k: "Based", v: "Johor Bahru, Malaysia" },
 { k: "Status", v: "Available for work" },
 { k: "Shipped", v: "Boring App, ~30 monthly users in 4 countries" },
];

const secondary = [
 { label: "LinkedIn", href: "https://www.linkedin.com/in/nbzkri/" },
 { label: "GitHub", href: "https://github.com/nzkbuild" },
 { label: "R\u00e9sum\u00e9", href: "https://www.linkedin.com/in/nbzkri/" },
];

export function Intro() {
 return (
 <section className="border-b border-line">
 <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
 <p className="rise font-mono text-xs uppercase tracking-[0.2em] text-faint" style={{ animationDelay: "0ms" }}>
 Profile &mdash; nzkbuild / 2026
 </p>
 <h1 className="rise mt-7 max-w-4xl text-[clamp(2.5rem,7vw,5.25rem)] font-bold leading-[0.98] tracking-tight text-ink" style={{ animationDelay: "80ms" }}>
 I turn messy operations into software that ships.
 </h1>
 <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted" style={{ animationDelay: "160ms" }}>
 Operations and admin by training, a builder by habit. I shipped Boring App
 to Google Play on my own, and I build internal tools that replace
 spreadsheet chaos.
 </p>

 <dl className="rise mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2" style={{ animationDelay: "240ms" }}>
 {profile.map((p) => (
 <div key={p.k} className="bg-paper p-5">
 <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{p.k}</dt>
 <dd className="mt-1.5 text-sm text-ink">{p.v}</dd>
 </div>
 ))}
 </dl>

 <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
 <a href="#work" className="group inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform active:scale-95">
 View my work
 <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
 </a>
 <a href="mailto:nbzkri@gmail.com" className="inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5 active:scale-95">
 <Mail size={16} strokeWidth={1.75} />
 Get in touch
 </a>
 <div className="ml-1 flex items-center gap-4 font-mono text-xs text-muted">
 {secondary.map((l) => (
 <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
 {l.label}
 </a>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

