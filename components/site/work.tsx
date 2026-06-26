import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function Shots({ project }: { project: Project }) {
 if (!project.shots?.length) return null;

 if (project.shotStyle === "phone") {
 return (
 <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
 {project.shots.map((s) => (
 <div
 key={s.src}
 className="relative h-[440px] w-[210px] shrink-0 overflow-hidden rounded-xl border border-line bg-surface"
 >
 <Image src={s.src} alt={s.alt} fill sizes="210px" className="object-contain" />
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
 className="relative aspect-video overflow-hidden rounded-xl border border-line bg-surface"
 >
 <Image
 src={s.src}
 alt={s.alt}
 fill
 sizes="(min-width: 640px) 50vw, 100vw"
 className="object-cover object-top"
 />
 </div>
 ))}
 </div>
 );
}

function Tags({ items }: { items: string[] }) {
 return (
 <ul className="mt-6 flex flex-wrap gap-2">
 {items.map((t) => (
 <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
 {t}
 </li>
 ))}
 </ul>
 );
}

function ProjectLinks({ project }: { project: Project }) {
 if (!project.links?.length) return null;
 return (
 <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
 {project.links.map((l) => (
 <a
 key={l.href}
 href={l.href}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-ink"
 >
 {l.label}
 <ArrowUpRight size={14} strokeWidth={2} />
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
 <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
 <p className="mb-12 text-xs uppercase tracking-[0.18em] text-faint">Selected work</p>

 <div className="space-y-16">
 {visual.map((p) => (
 <article key={p.id}>
 <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
 <h2 className="font-serif text-2xl text-ink sm:text-3xl">{p.title}</h2>
 <span className="text-xs uppercase tracking-wider text-accent">{p.status}</span>
 </div>
 <p className="mt-2 text-base text-muted">{p.subtitle}</p>
 <p className="mt-5 leading-relaxed text-ink">{p.summary}</p>

 <ul className="mt-6 space-y-2">
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
 ))}
 </div>

 <ul className="mt-16 border-t border-line">
 {textOnly.map((p) => (
 <li key={p.id} className="border-b border-line py-6">
 <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
 <h3 className="font-serif text-xl text-ink">{p.title}</h3>
 <span className="text-xs uppercase tracking-wider text-faint">
 {p.year} &middot; {p.status}
 </span>
 </div>
 <p className="mt-1 text-sm text-muted">{p.subtitle}</p>
 <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
 <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
 <ul className="flex flex-wrap gap-2">
 {p.tech.map((t) => (
 <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
 {t}
 </li>
 ))}
 </ul>
 {p.links?.map((lnk) => (
 <a
 key={lnk.href}
 href={lnk.href}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-ink"
 >
 {lnk.label}
 <ArrowUpRight size={13} strokeWidth={2} />
 </a>
 ))}
 </div>
 </li>
 ))}
 </ul>
 </div>
 </section>
 );
}

