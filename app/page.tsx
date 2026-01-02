import { About } from "./components/About";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Hero />
      <About />
    </main>
  );
}
