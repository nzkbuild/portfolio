import { Header } from "@/components/site/header";
import { Intro } from "@/components/site/intro";
import { Work } from "@/components/site/work";
import { Background } from "@/components/site/background";
import { Contact } from "@/components/site/contact";

export default function Home() {
 return (
 <>
 <Header />
 <main>
 <Intro />
 <Work />
 <Background />
 <Contact />
 </main>
 </>
 );
}

