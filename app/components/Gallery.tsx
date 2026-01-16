"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
    "/assets/hero-background.jpg",
    "/assets/hero-background.jpg",
    "/assets/hero-background.jpg",
    "/assets/hero-background.jpg",
    "/assets/hero-background.jpg",
    "/assets/hero-background.jpg",
];

export const Gallery = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    // Add physics-based smoothing to the scroll value
    // This creates that "luxury" weight/inertia feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Create opposite movements for the rows
    const xForward = useTransform(smoothProgress, [0, 1], ["-25%", "25%"]);
    const xBackward = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

    // Slight rotation for dynamic feel
    const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);

    return (
        <section ref={container} className="relative h-[300vh] bg-neutral-950 z-0">
            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
                    <span className="text-[20vw] font-black uppercase tracking-tighter text-white/10 rotate-90 md:rotate-0">
                        Moments
                    </span>
                </div>

                {/* Content Container - Rotated slightly for creativity */}
                <motion.div
                    style={{ rotate: -3 }}
                    className="relative w-[150vw] -ml-[25vw] flex flex-col gap-4 md:gap-8 opacity-90 z-10"
                >
                    {/* Row 1: Moves Left */}
                    <motion.div style={{ x: xBackward }} className="flex gap-4 md:gap-8 w-max">
                        {[...images, ...images].map((src, i) => (
                            <div key={`r1-${i}`} className="relative h-[120px] md:h-[240px] aspect-[16/9] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 border border-white/10">
                                <Image src={src} alt="gallery" fill className="object-cover" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 2: Moves Right (Hero Row - Larger) */}
                    <motion.div style={{ x: xForward }} className="flex gap-4 md:gap-8 w-max">
                        {[...images, ...images].map((src, i) => (
                            <div key={`r2-${i}`} className="relative h-[180px] md:h-[350px] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl z-20 hover:scale-105 transition-transform duration-500 border border-white/20">
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10" />
                                <Image src={src} alt="gallery" fill className="object-cover" />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 3: Moves Left */}
                    <motion.div style={{ x: xBackward }} className="flex gap-4 md:gap-8 w-max">
                        {[...images, ...images].map((src, i) => (
                            <div key={`r3-${i}`} className="relative h-[120px] md:h-[240px] aspect-[16/9] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 border border-white/10">
                                <Image src={src} alt="gallery" fill className="object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950 pointer-events-none" />
                <div className="absolute top-0 w-full h-32 bg-linear-to-b from-neutral-950 to-transparent z-20" />
                <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-neutral-950 to-transparent z-20" />

            </div>
        </section>
    );
};
