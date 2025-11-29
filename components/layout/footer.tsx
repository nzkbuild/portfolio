import { Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="py-16 border-t border-glass-border text-center bg-bg-primary">
            <Container size="wide" className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2 text-text-primary font-bold text-xl tracking-tight opacity-50 hover:opacity-100 transition-opacity">
                    <Terminal size={20} />
                    nzkbuild
                </div>
                <p className="text-text-muted text-sm">
                    (c) {new Date().getFullYear()} nzkbuild. Built with Next.js, Tailwind CSS & Supabase.
                </p>
            </Container>
        </footer>
    );
}
