import { Reveal } from "@/components/site/reveal";

const pillars = [
 {
 n: "01",
 title: "I ship, end to end",
 body: "From idea to a real product: I design it, build it, and deploy it. Boring App went from a concept to a published app on Google Play, built entirely solo.",
 },
 {
 n: "02",
 title: "I think in operations",
 body: "My background is HR, admin, and member service, so I have lived the manual, spreadsheet-bound problems software should fix. I build tools people actually use, with compliance and privacy in mind.",
 },
 {
 n: "03",
 title: "I learn fast and deliver",
 body: "I taught myself Next.js, Supabase, Capacitor, and more while shipping for real users. Hand me an unfamiliar problem and I will find a way to solve it.",
 },
];

const tech = ["React", "Next.js", "TypeScript", "Supabase", "Capacitor", "Python", "Tailwind CSS", "Git", "Vercel"];

export function Value() {
 return (
 <section id="approach" className="border-t border-line">
 <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
 <h2 className="mb-10 font-sans text-xs font-medium uppercase tracking-[0.18em] text-faint sm:mb-12">
 Why work with me
 </h2>

 <div className="flex flex-col divide-y divide-line">
 {pillars.map((p, i) => (
 <Reveal key={p.n} delay={i * 80}>
 <div className="grid gap-2 py-8 first:pt-0 sm:grid-cols-[4rem_1fr] sm:gap-6">
 <div className="font-mono text-sm text-faint">{p.n}</div>
 <div>
 <h3 className="font-serif text-xl text-ink sm:text-2xl">{p.title}</h3>
 <p className="mt-3 max-w-prose leading-relaxed text-muted">{p.body}</p>
 </div>
 </div>
 </Reveal>
 ))}
 </div>

 <Reveal delay={120}>
 <div className="mt-12 border-t border-line pt-8">
 <p className="mb-4 text-sm text-faint">Tools I build with</p>
 <ul className="flex flex-wrap gap-2">
 {tech.map((t) => (
 <li
 key={t}
 className="rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-accent/40 hover:text-ink"
 >
 {t}
 </li>
 ))}
 </ul>
 </div>
 </Reveal>
 </div>
 </section>
 );
}

