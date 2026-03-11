import type { Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://iamthomas.vercel.app'),
  title: {
    default: "Thomas Chacko | Front End & Full-Stack Developer",
    template: "%s | Thomas Chacko"
  },
  description: "Thomas Chacko - Best front end developer and full-stack web developer from Kochi, Kerala, India. Welcome to my animated personal portfolio website. Specializing in React, Next.js, and TypeScript. Also an avid voyager and explorer.",
  keywords: [
    // Core Identity
    "Thomas",
    "Thomas Chacko",
    "Thomas developer",
    "Thomas Chacko developer",
    "Thomas Chacko motorcycle rider",
    "Thomas Chacko full stack developer",
    "Thomas Chacko front end developer",
    "Thomas Chacko voyager",
    "Thomas Chacko explorer",
    "Thomas Chacko Kochi",
    "Thomas Chacko Kerala",
    // Roles
    "front end developer",
    "front end developer Kochi",
    "best front end developer Kerala",
    "full-stack developer",
    "full-stack developer Kochi",
    "web developer",
    "web developer Kochi",
    "web developer Kerala India",
    "React developer Kochi",
    "Next.js developer Kerala",
    "TypeScript developer India",
    "software engineer Kerala",
    // Portfolio Descriptors
    "best portfolio website",
    "best portfolio website Kerala",
    "best portfolio website Kochi",
    "animated personal portfolio website",
    "creative portfolio website",
    "top developer portfolio",
    "best developer portfolio 2024",
    "interactive portfolio website",
    // Secondary Identity
    "voyager India",
    "explorer Kerala",
    "adventure motorcycle rider India",
    "motorcycle rider Kerala",
    "off-road rider Kochi",
    "motovlogger Kerala",
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
    title: "Thomas Chacko | Best Front End Developer - Animated Portfolio",
    description: "Best front end developer and full-stack web developer from Kochi, Kerala. Creator of an award-winning animated personal portfolio website. React & Next.js expert.",
    siteName: "Thomas Chacko - Developer, Voyager & Explorer",
    images: [
      {
        url: "/assets/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Chacko - Front End Developer & Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Chacko | Best Front End & Full-Stack Developer",
    description: "Professional developer, voyager, and explorer from Kerala, India. Check out my animated personal portfolio website.",
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
    jobTitle: "Front End Developer & Full-Stack Web Developer",
    description: "Thomas Chacko - Best front end developer, full-stack developer, voyager, and explorer from Kochi, Kerala, India. Creator of an animated personal portfolio website.",
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
      "Best Portfolio Website Design",
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
      skills: "React, Next.js, TypeScript, JavaScript, Front End Development, UI/UX Animations, Node.js"
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
