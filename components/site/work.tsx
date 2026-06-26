import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

function Shots({ project }: { project: Project }) {
 if (!project.shots?.length) return null;
 if (project.shotStyle === "phone") {
 return (
 <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
 {project.shots.map((s) => (
 <div key={s.src} className="group relative h-[440px] w-[210px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
 <Image src={s.src} alt={s.alt} fill sizes="210px" className="object-contain transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]" />
 </div>
 ))}
 </div>
 );
 }
 return (
 <div className="mt-10 grid gap-4 sm:grid-cols-2">
 {project.shots.map((s) => (
 <div key={s.src} className="group relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
 <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]" />
 </div>
 ))}
 </div>
 );
}

export function Work() {
 const visual = projects.filter((p) => p.shots?.length);
 const textOnly = projects.filter((p) => !p.shots?.length);

 return (
 <section id="work" className="border-t border-line">
 <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
 <h2 className="mb-16 max-w-3xl font-serif text-4xl leading-[1.05] text-ink sm:mb-24 sm:text-6xl">
 Selected work, and what it delivered.
 </h2>

 <div className="space-y-24 sm:space-y-36">
 {visual.map((p, i) => (
 <Reveal key={p.id}>
 <article className="border-t border-line pt-8">
 <div className="grid gap-8 md:grid-cols-12 md:gap-10">
 <div className="md:col-span-4">
 <div className="flex items-baseline gap-3">
 <span className="font-mono text-2xl text-faint">{String(i + 1).padStart(2, "0")}</span>
 <span className="text-xs font-medium uppercase tracking-wider text-accent">{p.status}</span>
 </div>
 <div className="mt-1 font-mono text-xs text-faint">{p.year}</div>
 <ul className="mt-6 space-y-1.5 border-t border-line pt-5">
 {p.tech.map((t) => (
 <li key={t} className="font-mono text-xs text-muted">{t}</li>
 ))}
 </ul>
 </div>

 <div className="md:col-span-8">
 <h3 className="font-serif text-3xl text-ink sm:text-4xl">{p.title}</h3>
 <p className="mt-3 text-lg text-muted">{p.subtitle}</p>
 <p className="mt-6 leading-relaxed text-ink">{p.summary}</p>
 {p.impact && (
 <div className="mt-6 border-l-2 border-accent pl-5">
 <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Result</span>
 <p className="mt-2 text-lg leading-relaxed text-ink">{p.impact}</p>
 </div>
 )}
 {p.links?.length ? (
 <div className="mt-6 flex flex-wrap gap-x-5">
 {p.links.map((l) => (
 <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-ink">
 {l.label}
 <ArrowUpRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
 </a>
 ))}
 </div>
 ) : null}
 </div>
 </div>
 <Shots project={p} />
 </article>
 </Reveal>
 ))}
 </div>

 <div className="mt-24 border-t border-line pt-10 sm:mt-36">
 <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-faint">Earlier experiments</p>
 <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
 {textOnly.map((p) => (
 <Reveal key={p.id}>
 <article>
 <div className="flex items-baseline justify-between gap-3">
 <h3 className="font-serif text-lg text-ink">{p.title}</h3>
 <span className="font-mono text-xs text-faint">{p.year}</span>
 </div>
 <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
 <ul className="mt-3 space-y-1">
 {p.tech.map((t) => (
 <li key={t} className="font-mono text-[11px] text-faint">{t}</li>
 ))}
 </ul>
 </article>
 </Reveal>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

