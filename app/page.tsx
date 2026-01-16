import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Hero />
      <About />
      <Gallery />
      {/* <Projects /> */}
      <div className="w-full h-screen" />
    </main>
  );
}
