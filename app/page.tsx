import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Hero />
      <About />
      <Gallery />
      <div className="w-full h-screen" />
    </main>
  );
}
