import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
