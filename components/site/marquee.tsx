const tools = [
 "React",
 "Next.js",
 "TypeScript",
 "Supabase",
 "Capacitor",
 "Android",
 "Python",
 "Tailwind CSS",
 "WebCrypto",
 "Git",
 "Vercel",
];

export function Marquee() {
 const row = [...tools, ...tools];
 return (
 <section aria-label="Tools and technologies" className="overflow-hidden border-y border-line py-7 sm:py-9">
 <div className="marquee-mask">
 <ul className="marquee-track flex w-max items-center">
 {row.map((t, i) => (
 <li
 key={i}
 className="flex shrink-0 items-center gap-5 whitespace-nowrap px-5 font-serif text-2xl text-faint sm:px-7 sm:text-3xl"
 >
 {t}
 <span aria-hidden="true" className="text-accent">&middot;</span>
 </li>
 ))}
 </ul>
 </div>
 </section>
 );
}

