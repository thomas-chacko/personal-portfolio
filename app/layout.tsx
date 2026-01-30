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
    default: "Thomas Chacko | Developer & Adventure Rider Portfolio",
    template: "%s | Thomas Chacko"
  },
  description: "Thomas Chacko - Full-stack developer and adventure motorcycle rider. Explore my portfolio showcasing web development projects, off-road adventures, and the intersection of code and throttle.",
  keywords: ["Thomas Chacko", "web developer", "full-stack developer", "motorcycle rider", "adventure rider", "portfolio", "software engineer", "off-road riding", "developer portfolio"],
  authors: [{ name: "Thomas Chacko" }],
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
    title: "Thomas Chacko | Developer & Adventure Rider Portfolio",
    description: "Full-stack developer and adventure motorcycle rider. Merging the digital and physical worlds, one journey at a time.",
    siteName: "Thomas Chacko Portfolio",
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
    title: "Thomas Chacko | Developer & Adventure Rider",
    description: "Full-stack developer and adventure motorcycle rider. Merging the digital and physical worlds.",
    images: ["/assets/hero-background.jpg"],
    creator: "@thomaschacko", // Replace with your actual Twitter handle
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
