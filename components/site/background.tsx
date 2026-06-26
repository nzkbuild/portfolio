import { timeline, skills } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { SectionHead } from "@/components/site/section-head";

export function Background() {
 return (
 <section id="background" className="border-t border-line bg-surface/40">
 <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
 <SectionHead
 index="03"
 label="Background"
 title="From HR and operations into building software."
 meta="2019 - 2026"
 />

 <Reveal>
 <ol className="border-t border-line">
 {timeline.map((t) => (
 <li key={t.role + t.period} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[13rem_1fr] sm:gap-10">
 <div>
 <div className="font-mono text-xs text-ink">{t.period}</div>
 <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">{t.kind}</div>
 </div>
 <div>
 <h3 className="text-lg font-bold text-ink">{t.role}</h3>
 <p className="font-mono text-xs text-muted">{t.org}</p>
 <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{t.note}</p>
 </div>
 </li>
 ))}
 </ol>
 </Reveal>

 <Reveal>
 <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
 {skills.map((g) => (
 <div key={g.label} className="bg-paper p-5">
 <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">{g.label}</h3>
 <ul className="mt-3 space-y-1.5">
 {g.items.map((it) => (
 <li key={it} className="text-sm text-muted">{it}</li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </Reveal>
 </div>
 </section>
 );
}

