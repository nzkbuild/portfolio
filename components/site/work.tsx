import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { SectionHead } from "@/components/site/section-head";

function Shots({ project }: { project: Project }) {
 if (!project.shots?.length) return null;
 if (project.shotStyle === "phone") {
 return (
 <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
 {project.shots.map((s) => (
 <div key={s.src} className="group relative h-[440px] w-[210px] shrink-0 overflow-hidden rounded-sm border border-line bg-surface">
 <Image src={s.src} alt={s.alt} fill sizes="210px" className="object-contain transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]" />
 </div>
 ))}
 </div>
 );
 }
 return (
 <div className="mt-10 grid gap-3 sm:grid-cols-2">
 {project.shots.map((s) => (
 <div key={s.src} className="group relative aspect-video overflow-hidden rounded-sm border border-line bg-surface">
 <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]" />
 </div>
 ))}
 </div>
 );
}

function Field({ k, children }: { k: string; children: React.ReactNode }) {
 return (
 <div className="border-b border-line py-2.5">
 <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">{k}</dt>
 <dd className="mt-1 font-mono text-sm text-ink">{children}</dd>
 </div>
 );
}

export function Work() {
 const visual = projects.filter((p) => p.shots?.length);
 const textOnly = projects.filter((p) => !p.shots?.length);

 return (
 <section id="work" className="border-t border-line">
 <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
 <SectionHead
 index="02"
 label="Work"
 title="Selected work, and what it delivered."
 meta={`${projects.length} projects`}
 />

 <div className="space-y-20 sm:space-y-28">
 {visual.map((p, i) => (
 <Reveal key={p.id}>
 <article className="border-t border-ink/80 pt-8">
 <div className="grid gap-8 md:grid-cols-12 md:gap-10">
 <div className="md:col-span-4">
 <dl>
 <Field k="No.">{String(i + 1).padStart(2, "0")}</Field>
 <Field k="Status"><span className="text-accent">{p.status}</span></Field>
 <Field k="Year">{p.year}</Field>
 </dl>
 <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">Stack</p>
 <p className="mt-2 font-mono text-xs leading-relaxed text-muted">{p.tech.join(" / ")}</p>
 </div>

 <div className="md:col-span-8">
 <h3 className="text-3xl font-bold text-ink sm:text-4xl">{p.title}</h3>
 <p className="mt-3 text-lg text-muted">{p.subtitle}</p>
 <p className="mt-6 leading-relaxed text-ink">{p.summary}</p>
 {p.impact && (
 <div className="mt-6 border-l-2 border-accent pl-5">
 <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Result</span>
 <p className="mt-2 text-lg leading-relaxed text-ink">{p.impact}</p>
 </div>
 )}
 {p.links?.length ? (
 <div className="mt-6 flex flex-wrap gap-x-5">
 {p.links.map((l) => (
 <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-accent-ink">
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

 <div className="mt-20 border-t border-line pt-10 sm:mt-28">
 <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-faint">Earlier experiments</p>
 <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
 {textOnly.map((p) => (
 <Reveal key={p.id}>
 <article className="border-t border-line pt-4">
 <div className="flex items-baseline justify-between gap-3">
 <h3 className="text-lg font-bold text-ink">{p.title}</h3>
 <span className="font-mono text-xs text-faint">{p.year}</span>
 </div>
 <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
 <p className="mt-3 font-mono text-[11px] text-faint">{p.tech.join(" / ")}</p>
 </article>
 </Reveal>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

