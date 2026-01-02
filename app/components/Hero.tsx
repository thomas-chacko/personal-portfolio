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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-neutral-950 text-white"
        >
            {/* 1. Cinematic Background with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 h-[120%]">
                <Image
                    src="/assets/hero-background.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-[55%_20%] lg:object-[10%_20%]"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-black/60" />
            </motion.div>



            {/* 4. Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h2 className="mb-4 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white/60 md:text-sm">
                            <span className="h-[1px] w-8 bg-white/60" />
                            Visual Storyteller
                        </h2>
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            style={{ y: textY }}
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="text-5xl sm:text-6xl font-black uppercase leading-[0.9] tracking-tighter mix-blend-screen md:text-8xl lg:text-[9rem]"
                        >
                            Capturing
                            <br />
                            <span className="text-transparent bg-clip-text bg-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">The Moment</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-8 max-w-lg text-lg leading-relaxed text-white/80 font-light md:text-xl"
                    >
                        Exploring the world one frame at a time. From the peaks of Patagonia to the streets of Tokyo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-10 flex flex-wrap gap-6"
                    >
                        <button className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-bold tracking-widest text-black transition-all hover:bg-neutral-200">
                            <span className="relative z-10">VIEW GALLERY</span>
                        </button>
                        <button className="group flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-bold tracking-widest backdrop-blur-sm transition-all hover:bg-white/10">
                            <span>CONTACT ME</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* 7. Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="h-10 w-6 rounded-full border-2 border-white/30 flex justify-center p-1"
                    >
                        <div className="w-1 h-2 bg-white rounded-full" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
