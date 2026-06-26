import { Reveal } from "@/components/site/reveal";

const proof = [
 { label: "Live on Google Play", note: "Boring App, shipped solo" },
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
 <section id="approach" className="border-t border-line bg-surface/60">
 <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
 <header className="mb-12 sm:mb-16">
 <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Why work with me</p>
 <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-5xl">
 The rare mix of operations sense and the ability to build.
 </h2>
 </header>

 <Reveal>
 <dl className="grid grid-cols-1 gap-x-8 gap-y-6 border-y border-line py-8 sm:grid-cols-3">
 {proof.map((p) => (
 <div key={p.label}>
 <dt className="font-serif text-xl text-ink">{p.label}</dt>
 <dd className="mt-1 text-sm text-faint">{p.note}</dd>
 </div>
 ))}
 </dl>
 </Reveal>

 <div className="mt-4 flex flex-col divide-y divide-line">
 {pillars.map((p, i) => (
 <Reveal key={p.n} delay={i * 80}>
 <div className="grid gap-2 py-8 sm:grid-cols-[4rem_1fr] sm:gap-6">
 <div className="font-mono text-sm text-faint">{p.n}</div>
 <div>
 <h3 className="font-serif text-xl text-ink sm:text-2xl">{p.title}</h3>
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

