import dynamic from "next/dynamic";
import { Hero } from "./components/Hero";

// Dynamic imports for below-the-fold components
const About = dynamic(() => import("./components/About").then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen bg-neutral-950" />
});

const Gallery = dynamic(() => import("./components/Gallery").then(mod => ({ default: mod.Gallery })), {
  loading: () => <div className="min-h-screen bg-neutral-950" />
});

const Contact = dynamic(() => import("./components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen bg-neutral-950" />
});

const Footer = dynamic(() => import("./components/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="bg-neutral-950 py-12" />
});

export default function Home() {
  // Enhanced Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thomas Chacko",
    "alternateName": "Tom Rev",
    "url": "https://iamthomas.vercel.app",
    "image": "https://iamthomas.vercel.app/assets/hero-background.jpg",
    "jobTitle": "Front End Developer & Full-Stack Developer",
    "description": "Thomas Chacko is a professional front end developer, full-stack web developer, voyager, and explorer from Kochi, Kerala, India. Known for creating one of the best animated personal portfolio websites using React, Next.js, and TypeScript.",
    "sameAs": [
      "https://github.com/thomas-chacko",
      "https://www.linkedin.com/in/thomas-chacko-7003a9283",
      "https://www.youtube.com/@tom_rev",
      "https://instagram.com/thomaschacko.in"
    ],
    "knowsAbout": [
      "Front End Developer",
      "Full-Stack Development", 
      "Best Portfolio Website Design",
      "Animated Personal Portfolio Website",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI Animations",
      "Voyager",
      "Explorer",
      "Motorcycle Riding", 
      "Adventure Travel"
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
      "name": "Front End Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Kochi"
      },
      "skills": "Frontend Development, React, Next.js, TypeScript, JavaScript, Web Animations, Full-Stack Development"
    },
    "interestIn": [
      {
        "@type": "Thing",
        "name": "Exploration & Voyaging",
        "description": "Traveling, exploring new places and experiencing different cultures as a voyager and explorer."
      },
      {
        "@type": "Thing",
        "name": "Web Development & Design",
        "description": "Building modern animated web applications and top-tier creative portfolio websites with React and Next.js"
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
