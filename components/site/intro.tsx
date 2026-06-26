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
 <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
 <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-12">
 <div className="lg:col-span-7">
 <p className="rise font-mono text-xs uppercase tracking-[0.2em] text-faint" style={{ animationDelay: "0ms" }}>
 Profile &mdash; nzkbuild / 2026
 </p>
 <h1 className="rise mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.98] tracking-tight text-ink" style={{ animationDelay: "80ms" }}>
 I turn messy operations into software that ships.
 </h1>
 <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: "160ms" }}>
 Operations and admin by training, a builder by habit. I shipped Boring
 App to Google Play on my own, and I build internal tools that replace
 spreadsheet chaos.
 </p>
 <div className="rise mt-9 flex flex-wrap items-center gap-x-3 gap-y-4" style={{ animationDelay: "240ms" }}>
 <a href="#work" className="group inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform active:scale-95">
 View my work
 <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
 </a>
 <a href="mailto:nbzkri@gmail.com" className="inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5 active:scale-95">
 <Mail size={16} strokeWidth={1.75} />
 Get in touch
 </a>
 <div className="flex items-center gap-4 pl-1 font-mono text-xs text-muted">
 {secondary.map((l) => (
 <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
 {l.label}
 </a>
 ))}
 </div>
 </div>
 </div>

 <div className="rise lg:col-span-5" style={{ animationDelay: "320ms" }}>
 <dl className="overflow-hidden rounded-sm border border-line">
 {profile.map((p, i) => (
 <div key={p.k} className={i > 0 ? "border-t border-line p-4" : "p-4"}>
 <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{p.k}</dt>
 <dd className="mt-1.5 text-sm text-ink">{p.v}</dd>
 </div>
 ))}
 </dl>
 </div>
 </div>
 </div>
 </section>
 );
}

