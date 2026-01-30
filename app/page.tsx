import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thomas Chacko",
    "url": "https://thomaschacko.com",
    "image": "https://thomaschacko.com/assets/hero-background.jpg",
    "jobTitle": "Full-Stack Developer",
    "description": "Full-stack developer and adventure motorcycle rider. Merging the digital and physical worlds, one journey at a time.",
    "sameAs": [
      "https://github.com/thomas-chacko",
      "https://www.linkedin.com/in/thomas-chacko-7003a9283",
      "https://www.youtube.com/@tom_rev",
      "https://instagram.com/thomaschacko.in"
    ],
    "knowsAbout": ["Web Development", "Full-Stack Development", "Motorcycle Riding", "Adventure Travel", "Software Engineering"],
    "homeLocation": {
      "@type": "Place",
      "name": "Kochi, Kerala, India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    }

  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-neutral-950 min-h-screen text-white">
        <Hero />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
