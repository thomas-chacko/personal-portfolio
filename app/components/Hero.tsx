"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

// Animated Text Component for character-by-character animation
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
    return (
        <h2 className={className}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + index * 0.05,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block"
                    style={{
                        // Preserve spaces
                        minWidth: char === " " ? "0.25em" : "auto"
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </h2>
    );
};

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            ref={containerRef}
            className="sticky top-0 z-0 h-dvh w-full overflow-hidden bg-neutral-950"
            aria-label="Hero section - Thomas Chacko introduction"
        >
            {/* Background Image - Static, no animations */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <Image
                    src="/assets/dirt-bike-rider-participating-races-circuits-adventure-thrill-with-motorcycle.jpg"
                    alt="Thomas Chacko riding dirt bike on adventure trail"
                    fill
                    priority
                    className="object-cover object-[65%_center] sm:object-center opacity-70"
                    sizes="100vw"
                    quality={90}
                />
                {/* Modern Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-b from-neutral-950/30 via-neutral-950/10 to-neutral-950" />
                <div className="absolute inset-0 bg-linear-to-r from-neutral-950/50 via-transparent to-transparent sm:from-neutral-950/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col justify-end pb-24 sm:justify-center sm:pb-0 px-6 sm:px-12">
                <div className="max-w-360">
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                className="inline-block h-px w-8 bg-white/60 origin-left"
                                aria-hidden="true"
                            />
                            <AnimatedText
                                text="Traveler • Explorer • Dev"
                                className="font-cinzel text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/80"
                                delay={0.8}
                            />
                        </motion.div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="font-cinzel text-[13vw] sm:text-8xl lg:text-9xl font-bold tracking-wide text-white/90 leading-[0.9] sm:leading-[0.9]"
                        >
                            BEYOND
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="font-cinzel text-[13vw] sm:text-8xl lg:text-9xl font-bold tracking-tight text-white/60 leading-[0.9] sm:leading-[0.9]"
                        >
                            HORIZONS
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="font-josefin-sans mt-8 max-w-md md:max-w-xl text-base sm:text-lg text-neutral-300 font-light leading-relaxed"
                    >
                        From debugging complex systems to navigating technical off-road trails.
                        Merging the digital and physical worlds, one journey at a time.
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-4"
                aria-label="Scroll down indicator"
            >
                <span className="font-cinzel text-sm font-medium tracking-widest text-white/50 uppercase animate-pulse">Scroll</span>
                <div className="h-px w-12 bg-white/50"></div>
            </motion.div>
        </section>
    );
};
