import { timeline, skills } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

export function Background() {
 return (
 <section id="background" className="border-t border-line bg-surface/60">
 <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
 <header className="mb-12 sm:mb-16">
 <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Background</p>
 <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-5xl">
 From HR and operations into building software.
 </h2>
 </header>

 <Reveal>
 <ol className="space-y-8">
 {timeline.map((t) => (
 <li key={t.role + t.period} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
 <div className="font-mono text-sm text-faint sm:pt-1">{t.period}</div>
 <div>
 <h3 className="font-serif text-lg text-ink">{t.role}</h3>
 <p className="mt-0.5 text-sm text-muted">{t.org}</p>
 <p className="mt-2 text-sm leading-relaxed text-muted">{t.note}</p>
 </div>
 </li>
 ))}
 </ol>
 </Reveal>

 <div className="mt-14 grid gap-8 sm:grid-cols-3">
 {skills.map((g, i) => (
 <Reveal key={g.label} delay={i * 90}>
 <h3 className="font-serif text-base text-ink">{g.label}</h3>
 <ul className="mt-3 space-y-1.5">
 {g.items.map((it) => (
 <li key={it} className="text-sm text-muted">{it}</li>
 ))}
 </ul>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}

