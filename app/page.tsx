import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HorizontalScroll } from "./components/HorizontalScroll";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Hero />
      <About />
      <HorizontalScroll />
      <div className="w-full h-screen"/>
    </main>
  );
}
