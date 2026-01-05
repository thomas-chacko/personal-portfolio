"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

// Types
interface JourneyItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    stats: string;
    icon: string;
    image: string;
}

const items: JourneyItem[] = [
    {
        id: "01",
        title: "The Beginning",
        subtitle: "First Gear",
        description: "It started with a map and a full tank. The first 500 kilometers taught me more about patience than years of routine.",
        stats: "500 km",
        icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", // Simple circle/globe
        image: "/assets/hero-background.jpg"
    },
    {
        id: "02",
        title: "Mountain Passes",
        subtitle: "High Altitude",
        description: "Navigating through the clouds. The air gets thinner, but the spirit touches the sky. Every turn reveals a new masterpiece.",
        stats: "18,380 ft",
        icon: "M3 20h18L12 4z", // Mountain triangle
        image: "/assets/hero-background.jpg"
    },
    {
        id: "03",
        title: "Coastal Highways",
        subtitle: "Ocean Breeze",
        description: "Racing the waves along the edge of the continent. The smell of salt and the sound of crashing tides as my constant companions.",
        stats: "1,200 km",
        icon: "M2 20h20M2 16c4-3 8 3 12-2s8 3 8 3", // Waves
        image: "/assets/hero-background.jpg"
    },
    {
        id: "04",
        title: "Desert Crossing",
        subtitle: "Endless Sands",
        description: "Where the road melts into the horizon. Testing endurance against the heat and vast emptiness of the arid plains.",
        stats: "45° C",
        icon: "M12 3v18M3 12h18", // Sun/Cross
        image: "/assets/hero-background.jpg"
    },
    {
        id: "05",
        title: "The Unseen",
        subtitle: "Hidden Gems",
        description: "Venturing off the beaten path to discover villages and cultures that maps often forget to mention.",
        stats: "Unlimited",
        icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", // Map/layers
        image: "/assets/hero-background.jpg"
    }
];

const Card = ({ item }: { item: JourneyItem }) => {
    return (
        <motion.div
            className="group relative h-[450px] w-[350px] sm:h-[550px] sm:w-[450px] shrink-0 cursor-grab active:cursor-grabbing"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
        >
            {/* Glass Card Container */}
            <div className="absolute inset-0 rounded-4xl bg-neutral-900/90 backdrop-blur-md border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20">

                {/* Visual Header (Image) */}
                <div className="relative h-1/2 w-full overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-neutral-900/20 mix-blend-multiply" />

                    {/* Abstract Shapes/Noise */}
                    <div className="absolute inset-0 opacity-30 mix-blend-soft-light"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")' }}
                    />

                    {/* Number Overlay */}
                    <div className="absolute top-6 right-6 font-black text-8xl text-white/10 select-none">
                        {item.id}
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white font-mono text-sm"
                    >
                        {item.stats}
                    </motion.div>

                    {/* Icon SVG */}
                    <div className="absolute top-6 left-6 w-12 h-12 p-3 rounded-2xl bg-white/10 border border-white/20 text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d={item.icon} />
                        </svg>
                    </div>
                </div>

                {/* Content Body */}
                <div className="relative h-1/2 p-8 flex flex-col justify-between">
                    <div>
                        <h4 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">
                            {item.subtitle}
                        </h4>
                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                            {item.title}
                        </h3>
                        <p className="text-white/60 text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    {/* "Read More" Arrow */}
                    <div className="flex items-center gap-3 text-white/40 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">Explore</span>
                        <motion.div className="w-8 h-px bg-current" />
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const HorizontalScroll = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-85%"]);

    // Smooth out the motion
    const springX = useSpring(x, { stiffness: 400, damping: 90 });

    const backgroundTextX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-neutral-950">
            {/* Sticky Container */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Dynamic Background Text (Parallax) */}
                <motion.div
                    style={{ x: backgroundTextX, opacity }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[20vw] font-black uppercase text-white/10 select-none pointer-events-none"
                >
                    Journey
                </motion.div>

                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-120 h-120 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                {/* Horizontal Track */}
                <motion.div style={{ x: springX }} className="flex gap-8 sm:gap-16 px-8 sm:px-24 will-change-transform">
                    {/* Introductory Title Block (First item in scroll) */}
                    <div className="flex flex-col justify-center min-w-[300px] sm:min-w-[400px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6"
                        >
                            Milestones<br />
                            <span className="text-neutral-200">
                                & Memories
                            </span>
                        </motion.h2>
                        <p className="text-white/60 text-lg max-w-sm">
                            A collection of moments that defined the path. Swipe to explore the journey.
                        </p>

                        {/* Scroll indicator hint */}
                        <div className="mt-12 flex items-center gap-4 text-white/40">
                            <span className="animate-pulse">Scroll Down</span>
                            <div className="w-12 h-px bg-white/20" />
                        </div>
                    </div>

                    {/* Cards */}
                    {items.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}

                    {/* End Spacer */}
                    <div className="min-w-[50px] sm:min-w-[200px]" />
                </motion.div>
            </div>
        </section>
    );
};
