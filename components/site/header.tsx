"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

const nav = [
 { label: "Work", href: "#work", id: "work" },
 { label: "Background", href: "#background", id: "background" },
 { label: "Contact", href: "#contact", id: "contact" },
];

function ThemeToggle() {
 const [dark, setDark] = useState(false);
 useEffect(() => {
 const id = requestAnimationFrame(() =>
 setDark(document.documentElement.classList.contains("dark"))
 );
 return () => cancelAnimationFrame(id);
 }, []);
 const toggle = () => {
 const next = !dark;
 setDark(next);
 document.documentElement.classList.toggle("dark", next);
 try {
 localStorage.setItem("theme", next ? "dark" : "light");
 } catch {}
 };
 return (
 <button
 type="button"
 onClick={toggle}
 aria-label="Toggle dark mode"
 className="p-2 text-muted transition-colors hover:text-ink"
 >
 {dark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
 </button>
 );
}

export function Header() {
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [active, setActive] = useState("");

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 8);
 const raf = requestAnimationFrame(onScroll);
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => {
 cancelAnimationFrame(raf);
 window.removeEventListener("scroll", onScroll);
 };
 }, []);

 useEffect(() => {
 const onKey = (e: KeyboardEvent) => {
 if (e.key === "Escape") setOpen(false);
 };
 window.addEventListener("keydown", onKey);
 return () => window.removeEventListener("keydown", onKey);
 }, []);

 useEffect(() => {
 const sections = nav
 .map((n) => document.getElementById(n.id))
 .filter((el): el is HTMLElement => el !== null);
 if (sections.length === 0) return;
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) setActive(entry.target.id);
 });
 },
 { rootMargin: "-45% 0px -50% 0px" }
 );
 sections.forEach((s) => observer.observe(s));
 return () => observer.disconnect();
 }, []);

 return (
 <header
 className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${
 scrolled
 ? "border-b border-line bg-paper/80"
 : "border-b border-transparent bg-transparent"
 }`}
 >
 <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
 <Link
 href="/"
 onClick={() => setOpen(false)}
 className="-my-1 py-1 font-serif text-lg tracking-tight text-ink"
 >
 Nabil Zikri
 </Link>

 <div className="-mr-2 flex items-center gap-1">
 <nav className="-my-2 hidden items-center gap-1 text-sm sm:flex">
 {nav.map((item) => (
 <a
 key={item.id}
 href={item.href}
 className={`px-3 py-2 transition-colors ${
 active === item.id ? "text-ink" : "text-muted hover:text-ink"
 }`}
 >
 {item.label}
 </a>
 ))}
 </nav>

 <ThemeToggle />

 <button
 type="button"
 aria-label={open ? "Close menu" : "Open menu"}
 aria-expanded={open}
 aria-controls="mobile-menu"
 onClick={() => setOpen((v) => !v)}
 className="p-2 text-ink sm:hidden"
 >
 {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
 </button>
 </div>
 </div>

 {open && (
 <nav id="mobile-menu" className="border-t border-line bg-paper px-6 pb-2 sm:hidden">
 {nav.map((item) => (
 <a
 key={item.id}
 href={item.href}
 onClick={() => setOpen(false)}
 className={`block border-b border-line py-3 text-base last:border-b-0 ${
 active === item.id ? "text-ink" : "text-muted"
 }`}
 >
 {item.label}
 </a>
 ))}
 </nav>
 )}
 </header>
 );
}

