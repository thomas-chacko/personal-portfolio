import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { Garage } from "./components/Garage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Hero />
      <div className="relative z-20">
        <About />
        {/* <Projects /> */}
        <Gallery />
        {/* <Garage /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
