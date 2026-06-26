export function Wordmark({ className = "" }: { className?: string }) {
 return (
 <span className={`inline-flex items-center gap-2 ${className}`}>
 <span
 aria-hidden="true"
 className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-ink font-mono text-xs font-bold text-paper"
 >
 n
 </span>
 <span className="font-mono text-sm font-semibold tracking-tight text-ink">nzkbuild</span>
 </span>
 );
}

