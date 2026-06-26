import { ArrowUpRight, Mail } from "lucide-react";

const secondary = [
 { label: "LinkedIn", href: "https://www.linkedin.com/in/nbzkri/" },
 { label: "GitHub", href: "https://github.com/nzkbuild" },
 { label: "R\u00e9sum\u00e9", href: "https://www.linkedin.com/in/nbzkri/" },
];

export function Intro() {
 return (
 <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
 <div
 className="rise flex h-16 w-16 items-center justify-center rounded-full border border-line font-serif text-xl text-ink"
 style={{ animationDelay: "0ms" }}
 >
 NZ
 </div>

 <p
 className="rise mt-6 inline-flex items-center gap-2 text-sm text-muted"
 style={{ animationDelay: "80ms" }}
 >
 <span className="relative flex h-2 w-2">
 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
 </span>
 Hi, I am Nabil &mdash; available for work
 </p>

 <h1
 className="rise mt-7 text-balance font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[1.04] text-ink"
 style={{ animationDelay: "160ms" }}
 >
 I turn messy operations into software that ships.
 </h1>

 <p
 className="rise mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
 style={{ animationDelay: "240ms" }}
 >
 Operations and admin by training, a builder by habit. I shipped Boring App
 to Google Play on my own, and I build internal tools that replace
 spreadsheet chaos.
 </p>

 <div
 className="rise mt-10 flex flex-wrap items-center justify-center gap-3"
 style={{ animationDelay: "320ms" }}
 >
 <a
 href="#work"
 className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform active:scale-95"
 >
 View my work
 <ArrowUpRight
 size={16}
 strokeWidth={2}
 className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
 />
 </a>
 <a
 href="mailto:nbzkri@gmail.com"
 className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5 active:scale-95"
 >
 <Mail size={16} strokeWidth={1.75} />
 Get in touch
 </a>
 </div>

 <div
 className="rise mt-7 flex items-center justify-center gap-5 text-sm text-muted"
 style={{ animationDelay: "380ms" }}
 >
 {secondary.map((l) => (
 <a
 key={l.label}
 href={l.href}
 target="_blank"
 rel="noopener noreferrer"
 className="underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
 >
 {l.label}
 </a>
 ))}
 </div>
 </section>
 );
}

