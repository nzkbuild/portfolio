import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

function Shots({ project }: { project: Project }) {
 if (!project.shots?.length) return null;
 if (project.shotStyle === "phone") {
 return (
 <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
 {project.shots.map((s) => (
 <div
 key={s.src}
 className="group relative h-[420px] w-[200px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface"
 >
 <Image src={s.src} alt={s.alt} fill sizes="200px" className="object-contain transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]" />
 </div>
 ))}
 </div>
 );
 }
 return (
 <div className="mt-8 grid gap-4 sm:grid-cols-2">
 {project.shots.map((s) => (
 <div
 key={s.src}
 className="group relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface"
 >
 <Image src={s.src} alt={s.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]" />
 </div>
 ))}
 </div>
 );
}

function Tags({ items }: { items: string[] }) {
 return (
 <ul className="mt-6 flex flex-wrap gap-2">
 {items.map((t) => (
 <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</li>
 ))}
 </ul>
 );
}

function ProjectLinks({ project }: { project: Project }) {
 if (!project.links?.length) return null;
 return (
 <div className="mt-4 flex flex-wrap items-center gap-x-2">
 {project.links.map((l) => (
 <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="group/link -mx-2 inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-accent transition-all hover:bg-accent/10 hover:text-accent-ink active:scale-95">
 {l.label}
 <ArrowUpRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
 </a>
 ))}
 </div>
 );
}

export function Work() {
 const visual = projects.filter((p) => p.shots?.length);
 const textOnly = projects.filter((p) => !p.shots?.length);

 return (
 <section id="work" className="border-t border-line">
 <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
 <header className="mb-14 sm:mb-20">
 <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Selected work</p>
 <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-5xl">
 Things I have designed, built, and shipped.
 </h2>
 </header>

 <div className="space-y-20 sm:space-y-28">
 {visual.map((p, i) => (
 <Reveal key={p.id} delay={Math.min(i * 60, 160)}>
 <article>
 <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
 <span className="font-mono text-sm text-faint">{String(i + 1).padStart(2, "0")}</span>
 <span className="text-xs font-medium uppercase tracking-wider text-accent">{p.status}</span>
 </div>
 <h3 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">{p.title}</h3>
 <p className="mt-3 text-base text-muted sm:text-lg">{p.subtitle}</p>
 <p className="mt-5 max-w-2xl leading-relaxed text-ink">{p.summary}</p>

 <ul className="mt-6 grid gap-2 sm:max-w-xl">
 {p.highlights.map((h) => (
 <li key={h} className="flex gap-3 text-sm text-muted">
 <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
 <span>{h}</span>
 </li>
 ))}
 </ul>

 <Tags items={p.tech} />
 <ProjectLinks project={p} />
 <Shots project={p} />
 </article>
 </Reveal>
 ))}
 </div>

 <div className="mt-20 grid gap-x-10 gap-y-10 border-t border-line pt-12 sm:mt-28 sm:grid-cols-2">
 {textOnly.map((p, i) => (
 <Reveal key={p.id} delay={Math.min(i * 60, 180)}>
 <article>
 <div className="flex items-baseline justify-between gap-3">
 <h3 className="font-serif text-xl text-ink">{p.title}</h3>
 <span className="font-mono text-xs text-faint">{p.year}</span>
 </div>
 <p className="mt-2 text-sm text-muted">{p.subtitle}</p>
 <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
 <ul className="mt-3 flex flex-wrap gap-2">
 {p.tech.map((t) => (
 <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">{t}</li>
 ))}
 </ul>
 </article>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}

