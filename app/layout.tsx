import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Josefin_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iamthomas.vercel.app'),
  title: {
    default: "Thomas Chacko | Full-Stack Developer & Adventure Motorcycle Rider from Kochi, Kerala",
    template: "%s | Thomas Chacko"
  },
  description: "Thomas Chacko - Professional full-stack web developer and passionate adventure motorcycle rider from Kochi, Kerala, India. Specializing in React, Next.js, TypeScript development. Explore 50+ destinations, 15K+ kilometers of off-road adventures, motorcycle travel stories, and web development portfolio. Follow my journey on YouTube @tom_rev.",
  keywords: [
    "Thomas Chacko", 
    "Thomas Chacko developer", 
    "Thomas Chacko motorcycle rider",
    "Thomas Chacko Kochi",
    "Thomas Chacko Kerala",
    "full-stack developer Kochi",
    "web developer Kerala India",
    "adventure motorcycle rider India",
    "motorcycle rider Kerala",
    "off-road rider Kochi",
    "dirt bike rider India",
    "React developer Kochi",
    "Next.js developer Kerala",
    "TypeScript developer India",
    "software engineer Kerala",
    "adventure rider portfolio",
    "motorcycle travel India",
    "bike rider developer",
    "tech and motorcycles",
    "developer motorcycle enthusiast",
    "Kochi developer portfolio",
    "Kerala web developer",
    "Indian motorcycle rider",
    "adventure touring India",
    "tom_rev YouTube",
    "thomaschacko.in"
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
    title: "Thomas Chacko | Full-Stack Developer & Adventure Motorcycle Rider from Kochi, Kerala",
    description: "Professional full-stack developer and adventure motorcycle rider from Kochi, Kerala. 50+ destinations explored, 15K+ km ridden. React, Next.js, TypeScript expert. Watch my adventures on YouTube @tom_rev",
    siteName: "Thomas Chacko - Developer & Motorcycle Rider Portfolio",
    images: [
      {
        url: "/assets/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Chacko - Developer & Rider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Chacko | Full-Stack Developer & Motorcycle Rider Kochi",
    description: "Professional developer from Kerala, India. Adventure motorcycle rider with 50+ destinations & 15K+ km. React, Next.js expert. YouTube: @tom_rev",
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
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://iamthomas.vercel.app" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${josefinSans.variable} ${cinzel.variable} antialiased`}
      >
        <SmoothScroll />
        <div className="bg-noise" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
