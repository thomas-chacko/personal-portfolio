import type { Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://iamthomas.vercel.app'),
  title: {
    default: "Thomas Chacko | Full-Stack Developer, Voyager & Explorer",
    template: "%s | Thomas Chacko"
  },
  description: "Thomas Chacko - Best full-stack and front end web developer, voyager, and passionate explorer from Kochi, Kerala, India. Welcome to my animated personal portfolio website. Specializing in React, Next.js, TypeScript development. Explore 50+ destinations, 15K+ kilometers of off-road adventures, motorcycle travel stories, and web development portfolio.",
  keywords: [
    // Core Identity
    "Thomas Chacko", 
    "Thomas Chacko developer", 
    "Thomas Chacko full stack developer",
    "Thomas Chacko front end developer",
    "Thomas Chacko voyager",
    "Thomas Chacko explorer",
    // Roles
    "front end developer",
    "full-stack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "software engineer",
    // Portfolio Descriptors
    "best portfolio website",
    "animated personal portfolio website",
    "creative portfolio website",
    "top developer portfolio",
    "best developer portfolio 2024",
    "interactive portfolio website",
    "award winning portfolio design",
    // Location Based
    "front end developer Kochi",
    "full-stack developer Kochi",
    "web developer Kochi",
    "best portfolio website Kerala",
    "best portfolio website Kochi",
    "Kochi tech developer",
    "web developer Kerala India",
    "Kerala web developer",
    "best front end developer Kerala",
    // Secondary Identity (Rider/Voyager)
    "voyager India",
    "explorer Kerala",
    "adventure motorcycle rider India",
    "adventure rider portfolio",
    "motorcycle travel India",
    "tech and motorcycles"
  ],
  authors: [{ name: "Thomas Chacko", url: "https://iamthomas.vercel.app" }],
  creator: "Thomas Chacko",
  publisher: "Thomas Chacko",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iamthomas.vercel.app",
    title: "Thomas Chacko | Full-Stack Developer, Voyager & Explorer",
    description: "Professional full-stack developer, voyager, and explorer from Kochi, Kerala. 50+ destinations explored, 15K+ km ridden. React, Next.js, TypeScript expert.",
    siteName: "Thomas Chacko - Developer, Voyager & Explorer",
    images: [
      {
        url: "/assets/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Chacko - Full-Stack Developer, Voyager & Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Chacko | Full-Stack Developer, Voyager & Explorer",
    description: "Professional developer, voyager, and explorer from Kerala, India. Adventure motorcycle rider with 50+ destinations & 15K+ km.",
    images: ["/assets/hero-background.jpg"],
    creator: "@thomaschacko",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thomas Chacko",
    jobTitle: "Full-Stack Web Developer, Front End Developer",
    description: "Thomas Chacko - Professional full-stack developer, front end developer, voyager, and explorer from Kochi, Kerala, India. Creator of an animated personal portfolio website.",
    url: "https://iamthomas.vercel.app",
    image: "https://iamthomas.vercel.app/assets/hero-background.jpg",
    sameAs: [
      "https://youtube.com/@tom_rev",
      "https://twitter.com/thomaschacko",
      "https://github.com/thomaschacko",
      "https://linkedin.com/in/thomaschacko"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN"
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Front End Development",
      "Full-Stack Development",
      "Web Design",
      "Web Animations",
      "Creative Portfolios",
      "Voyager",
      "Explorer",
      "Adventure Motorcycle Riding"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Front End & Full-Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Kochi, Kerala, India"
      },
      skills: "React, Next.js, TypeScript, JavaScript, Front End Development, UI/UX Animations"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://iamthomas.vercel.app" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kochi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${josefinSans.variable} ${cinzel.variable} antialiased`}
      >
        <SmoothScroll />
        <div className="bg-noise" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
