import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent-dim selection:text-accent-blue">
      {/* BACKGROUND AMBIENCE */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-pulse duration-[10s]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
