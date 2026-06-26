"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
 children,
 delay = 0,
 className = "",
}: {
 children: React.ReactNode;
 delay?: number;
 className?: string;
}) {
 const ref = useRef<HTMLDivElement>(null);
 const [shown, setShown] = useState(false);

 useEffect(() => {
 const el = ref.current;
 if (!el) return;
 if (typeof IntersectionObserver === "undefined") {
 const id = requestAnimationFrame(() => setShown(true));
 return () => cancelAnimationFrame(id);
 }
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 setShown(true);
 observer.disconnect();
 }
 });
 },
 { rootMargin: "0px 0px -12% 0px" }
 );
 observer.observe(el);
 return () => observer.disconnect();
 }, []);

 return (
 <div
 ref={ref}
 className={`reveal ${shown ? "is-visible" : ""} ${className}`.trim()}
 style={{ transitionDelay: `${delay}ms` }}
 >
 {children}
 </div>
 );
}

