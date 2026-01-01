import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-black min-h-[200vh]">
      <Hero />
      <section className="relative z-10 flex h-screen items-center justify-center bg-black">
        <div className="text-white/50 text-xl font-light">
          More content goes here...
        </div>
      </section>
    </main>
  );
}
