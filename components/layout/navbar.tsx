"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    isMobile?: boolean;
}

const NavLink = ({ href, children, onClick, isMobile = false }: NavLinkProps) => (
    <Link
        href={href}
        onClick={(e) => {
            // Smooth scroll handling for anchor links
            if (href.startsWith("#")) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    if (onClick) onClick();
                }
            }
        }}
        className={cn(
            "text-sm font-medium transition-all duration-300 hover:text-accent-blue relative group",
            isMobile
                ? "block py-4 text-lg text-text-secondary border-b border-glass-border"
                : "text-text-secondary"
        )}
    >
        {children}
        {!isMobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full" />
        )}
    </Link>
);

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isProjectPage = pathname?.startsWith("/projects/");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
                scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg"
                    : "bg-transparent border-b border-transparent py-6"
            )}
        >
            <Container size="wide" className="flex items-center justify-between">
                <Link
                    href="/"
                    className="font-bold text-xl tracking-tight text-text-primary flex items-center gap-3 hover:text-white transition-colors group"
                >
                    <div className="p-2.5 rounded-xl bg-bg-surface2 border border-white/10 group-hover:border-accent-blue transition-colors">
                        <Terminal size={20} className="text-accent-blue" />
                    </div>
                    nzkbuild
                </Link>

                <div className="hidden md:flex gap-12">
                    {isProjectPage ? (
                        <Link
                            href="/"
                            className="text-sm font-medium text-text-secondary hover:text-white transition-colors flex items-center gap-2"
                        >
                            <ArrowLeft size={16} />
                            Back to Portfolio
                        </Link>
                    ) : (
                        <>
                            <NavLink href="#about">About</NavLink>
                            <NavLink href="#projects">Projects</NavLink>
                            <NavLink href="#timeline">Timeline</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </>
                    )}
                </div>

                <button
                    className="md:hidden text-text-secondary hover:text-white p-2 rounded-lg hover:bg-bg-surface2 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 origin-top",
                    isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                )}
            >
                <div className="px-6 py-6 flex flex-col gap-2">
                    {isProjectPage ? (
                        <Link
                            href="/"
                            className="block py-4 text-lg text-text-secondary border-b border-glass-border flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <ArrowLeft size={18} />
                            Back to Portfolio
                        </Link>
                    ) : (
                        <>
                            <NavLink href="#about" isMobile onClick={() => setIsMenuOpen(false)}>About</NavLink>
                            <NavLink href="#projects" isMobile onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                            <NavLink href="#timeline" isMobile onClick={() => setIsMenuOpen(false)}>Timeline</NavLink>
                            <NavLink href="#contact" isMobile onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
