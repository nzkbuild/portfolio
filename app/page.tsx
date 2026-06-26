import { Header } from "@/components/site/header";
import { Intro } from "@/components/site/intro";
import { Work } from "@/components/site/work";
import { Background } from "@/components/site/background";
import { Contact } from "@/components/site/contact";
import { Reveal } from "@/components/site/reveal";

export default function Home() {
 return (
 <>
 <Header />
 <main>
 <Intro />
 <Reveal>
 <Work />
 </Reveal>
 <Reveal>
 <Background />
 </Reveal>
 <Reveal>
 <Contact />
 </Reveal>
 </main>
 </>
 );
}

