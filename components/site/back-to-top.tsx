"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
 const [show, setShow] = useState(false);
 useEffect(() => {
 const onScroll = () => setShow(window.scrollY > 600);
 const raf = requestAnimationFrame(onScroll);
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => {
 cancelAnimationFrame(raf);
 window.removeEventListener("scroll", onScroll);
 };
 }, []);
 return (
 <button
 type="button"
 aria-label="Back to top"
 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
 className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-lg transition-all duration-300 hover:bg-ink hover:text-paper ${
 show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
 }`}
 >
 <ArrowUp size={18} strokeWidth={2} />
 </button>
 );
}

