import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent-dim selection:text-accent-blue">
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
        </div>
    );
}
