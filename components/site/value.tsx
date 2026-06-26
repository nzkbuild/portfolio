import { Reveal } from "@/components/site/reveal";
import { SectionHead } from "@/components/site/section-head";

const proof = [
 { label: "~30 monthly users", note: "Boring App, live across 4 countries" },
 { label: "Live for a client", note: "Insurance landing page" },
 { label: "Design to deploy", note: "I own the whole build" },
];

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

export function Value() {
 return (
 <section id="approach" className="border-t border-line bg-surface/40">
 <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
 <SectionHead
 index="01"
 label="Approach"
 title="The rare mix of operations sense and the ability to build."
 meta="Why hire me"
 />

 <Reveal>
 <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
 {proof.map((p) => (
 <div key={p.label} className="bg-paper p-5">
 <dt className="text-lg font-bold text-ink">{p.label}</dt>
 <dd className="mt-1 font-mono text-xs text-faint">{p.note}</dd>
 </div>
 ))}
 </dl>
 </Reveal>

 <div className="mt-10 border-t border-line">
 {pillars.map((p, i) => (
 <Reveal key={p.n} delay={i * 70}>
 <div className="grid gap-3 border-b border-line py-8 sm:grid-cols-[5rem_1fr] sm:gap-8">
 <span className="font-mono text-sm text-faint">{p.n}</span>
 <div>
 <h3 className="text-xl font-bold text-ink sm:text-2xl">{p.title}</h3>
 <p className="mt-3 max-w-prose leading-relaxed text-muted">{p.body}</p>
 </div>
 </div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}

