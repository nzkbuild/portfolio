import { timeline, skills } from "@/lib/data";

export function Background() {
 return (
 <section id="background" className="border-t border-line">
 <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
 <h2 className="mb-10 font-sans text-xs font-medium uppercase tracking-[0.18em] text-faint sm:mb-12">
 Background
 </h2>

 <ol className="space-y-7 sm:space-y-8">
 {timeline.map((t) => (
 <li
 key={t.role + t.period}
 className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6"
 >
 <div className="text-sm text-faint sm:pt-1">{t.period}</div>
 <div>
 <h3 className="font-serif text-lg text-ink">{t.role}</h3>
 <p className="mt-0.5 text-sm text-muted">{t.org}</p>
 <p className="mt-2 text-sm leading-relaxed text-muted">{t.note}</p>
 </div>
 </li>
 ))}
 </ol>

 <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-3">
 {skills.map((g) => (
 <div key={g.label}>
 <h3 className="font-serif text-base text-ink">{g.label}</h3>
 <ul className="mt-3 space-y-1.5">
 {g.items.map((it) => (
 <li key={it} className="text-sm text-muted">
 {it}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}

