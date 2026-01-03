"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HorizontalScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const achievements = [
        { 
            icon: "🗺️",
            title: "Places Explored", 
            description: "From hidden mountain trails to coastal highways, every destination tells a unique story of adventure and discovery.",
            highlight: "50+ Destinations"
        },
        { 
            icon: "🏍️",
            title: "Rides Completed", 
            description: "Countless journeys across diverse terrains, each ride bringing new experiences and unforgettable memories.",
            highlight: "200+ Adventures"
        },
        { 
            icon: "⚡",
            title: "Distance Covered", 
            description: "Miles of open roads, winding paths, and scenic routes that have shaped my journey as a traveller.",
            highlight: "15K+ Kilometers"
        },
        { 
            icon: "🎯",
            title: "Life Experiences", 
            description: "Every trip is more than just a ride—it's about the people met, lessons learned, and moments cherished.",
            highlight: "100+ Stories"
        },
    ];

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-neutral-900">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-neutral-950" />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:100px_100px]" />
                </div>

                {/* Stacked Cards in Center */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {achievements.map((item, index) => {
                        // Calculate scroll progress for each card
                        const cardStart = index / achievements.length;
                        const cardMid = (index + 0.5) / achievements.length;
                        
                        // Alternate direction: even indices from right, odd from left
                        const isFromRight = index % 2 === 0;
                        
                        // Transform for sliding in from side - card stays after entering
                        const x = useTransform(
                            scrollYProgress,
                            [cardStart, cardMid],
                            [isFromRight ? 1000 : -1000, 0]
                        );
                        
                        // Opacity - fade in and STAY visible
                        const opacity = useTransform(
                            scrollYProgress,
                            [cardStart, cardMid],
                            [0, 1]
                        );
                        
                        // Scale effect - scale up and STAY at full size
                        const scale = useTransform(
                            scrollYProgress,
                            [cardStart, cardMid],
                            [0.8, 1]
                        );
                        
                        return (
                            <motion.div
                                key={item.title}
                                style={{ 
                                    x, 
                                    opacity, 
                                    scale,
                                    zIndex: index 
                                }}
                                className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.02, 
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative w-full max-w-2xl"
                                >
                                    {/* Card */}
                                    <div className="relative rounded-2xl sm:rounded-3xl bg-neutral-900 p-6 sm:p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all overflow-hidden shadow-2xl">
                                        {/* Subtle gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <motion.div
                                                className="text-5xl sm:text-6xl lg:text-7xl mb-4 sm:mb-6"
                                                whileHover={{
                                                    rotate: [0, -10, 10, -10, 0],
                                                    scale: 1.1,
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {item.icon}
                                            </motion.div>

                                            {/* Highlight */}
                                            <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-white">
                                                {item.highlight}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                                                {item.description}
                                            </p>

                                            {/* Decorative Line */}
                                            <motion.div
                                                className="mt-6 sm:mt-8 h-1 bg-gradient-to-r from-white/50 via-white/20 to-transparent rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.3,
                                                }}
                                            />

                                            {/* Progress Indicator */}
                                            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
                                                {achievements.map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                                                            i === index
                                                                ? "w-6 sm:w-8 bg-white"
                                                                : "w-1.5 sm:w-2 bg-white/30"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 text-center"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex flex-col items-center gap-2 text-white/50 text-sm"
                    >
                        <span>Scroll to explore</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
