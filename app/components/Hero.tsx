"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black text-white"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/assets/hero-background.jpg"
                    alt="Abstract Hero Background"
                    fill
                    priority
                    className="object-cover opacity-80"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Thomas
                        <br />
                        The Explorer
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="max-w-xl text-lg text-white/70 md:text-xl font-light tracking-wide"
                >
                    Building the web, wandering the world. A personal gallery of pixels and peaks.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};