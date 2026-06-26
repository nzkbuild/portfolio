export function SectionHead({
 index,
 label,
 title,
 meta,
}: {
 index: string;
 label: string;
 title: string;
 meta?: string;
}) {
 return (
 <header className="mb-12 sm:mb-16">
 <div className="flex items-center justify-between gap-4">
 <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
 {index} / {label}
 </span>
 {meta ? (
 <span className="font-mono text-xs uppercase tracking-[0.15em] text-faint">{meta}</span>
 ) : null}
 </div>
 <h2 className="mt-7 max-w-3xl text-3xl font-bold leading-[1.05] text-ink sm:text-5xl">
 {title}
 </h2>
 </header>
 );
}

