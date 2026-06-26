import { Header } from "@/components/site/header";
import { Intro } from "@/components/site/intro";
import { Marquee } from "@/components/site/marquee";
import { Value } from "@/components/site/value";
import { Work } from "@/components/site/work";
import { Background } from "@/components/site/background";
import { Contact } from "@/components/site/contact";

export default function Home() {
 return (
 <>
 <Header />
 <main>
 <Intro />
 <Marquee />
 <Value />
 <Work />
 <Background />
 <Contact />
 </main>
 </>
 );
}

