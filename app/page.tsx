import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  // Enhanced Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thomas Chacko",
    "alternateName": "Tom Rev",
    "url": "https://iamthomas.vercel.app",
    "image": "https://iamthomas.vercel.app/assets/hero-background.jpg",
    "jobTitle": "Full-Stack Web Developer",
    "description": "Professional full-stack web developer and adventure motorcycle rider from Kochi, Kerala, India. Specializing in React, Next.js, and TypeScript development with a passion for off-road motorcycle adventures.",
    "sameAs": [
      "https://github.com/thomas-chacko",
      "https://www.linkedin.com/in/thomas-chacko-7003a9283",
      "https://www.youtube.com/@tom_rev",
      "https://instagram.com/thomaschacko.in"
    ],
    "knowsAbout": [
      "Web Development", 
      "Full-Stack Development", 
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Motorcycle Riding", 
      "Adventure Travel", 
      "Off-Road Riding",
      "Dirt Bike Riding",
      "Software Engineering",
      "Frontend Development",
      "Backend Development"
    ],
    "homeLocation": {
      "@type": "Place",
      "name": "Kochi, Kerala, India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Kochi"
      },
      "skills": "React, Next.js, TypeScript, JavaScript, Web Development, Full-Stack Development"
    },
    "interestIn": [
      {
        "@type": "Thing",
        "name": "Adventure Motorcycle Riding",
        "description": "Off-road and adventure motorcycle riding across India"
      },
      {
        "@type": "Thing",
        "name": "Web Development",
        "description": "Building modern web applications with React and Next.js"
      }
    ]
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
