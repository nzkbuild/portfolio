import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { Now } from "@/components/sections/now";
import { Contact } from "@/components/sections/contact";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent-dim selection:text-accent-blue cursor-none">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Now />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

