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
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-neutral-950">
            {/* Parallax Background Image */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-background.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover opacity-60 object-[55%_20%] lg:object-[10%_20%]"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/20 to-neutral-950" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-16">
                <motion.div
                    style={{ opacity: opacity, y: textY }}
                    className="flex flex-col gap-2 sm:gap-4"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4"
                    >
                        <div className="h-px w-12 bg-white/50" />
                        <span className="text-sm font-medium tracking-[0.3em] text-white/80 uppercase">
                            Software Developer • Weekend Explorer
                        </span>
                    </motion.div>

                    <h1 className="text-6xl sm:text-8xl lg:text-[10rem] leading-[0.85] font-black tracking-tighter text-white">
                        BEYOND <br />
                        {/* <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)" }}>HORIZONS</span> */}
                        <span className="text-transparent bg-clip-text bg-white/20 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)] md:[-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">HORIZONS</span>
                    </h1>

                    <p className="max-w-xl text-lg sm:text-xl text-white/60 mt-8 leading-relaxed font-light">
                        Debugging code by day, chasing sunsets by weekend.
                        From technical off-road trails to serene breakfast rides, the bike is my escape from the loop.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30"
            >
                <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                <div className="h-12 w-px bg-white/20 overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-1/2 w-full bg-white"
                    />
                </div>
            </motion.div>
        </section>
    );
};
