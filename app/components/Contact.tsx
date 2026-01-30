"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export const Contact = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    // Smooth spring physics for buttery scroll
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(smoothProgress, [0, 1], [-25, 25]);

    return (
        <section ref={container} className="relative flex flex-col items-center justify-center bg-neutral-950 overflow-hidden py-24" aria-label="Contact Thomas Chacko">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.div style={{ y, willChange: "transform" }} className="mb-8">
                    <span className="inline-block px-3 py-1 rounded-full border border-green-500/30 text-green-500 text-xs font-mono tracking-widest uppercase bg-green-500/5 backdrop-blur-md">
                        ● System Online
                    </span>
                </motion.div>

                <h2 className="text-sm md:text-base font-medium tracking-[0.5em] text-neutral-500 uppercase mb-8">
                    Ready for Deployment
                </h2>

                <span className="group relative block" aria-label="Send email to Thomas Chacko">
                    <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-difference hover:opacity-50 transition-opacity duration-300">
                        LET'S TALK
                    </h1>
                    <div className="absolute -bottom-4 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </span>

                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
                    {["Instagram", "Twitter / X", "LinkedIn", "GitHub"].map((social, i) => (
                        <a key={i} href="#" className="text-sm font-bold tracking-widest uppercase text-neutral-400 hover:text-white hover:underline underline-offset-8 transition-colors">
                            {social}
                        </a>
                    ))}
                </div>
            </div>

            {/* Decoration */}
            <div className="absolute bottom-12 left-12 hidden md:block text-xs font-mono text-neutral-700">
                COORD: 35.6762° N, 139.6503° E
            </div>
            <div className="absolute bottom-12 right-12 hidden md:block text-xs font-mono text-neutral-700">
                FREQ: 104.5 MHz
            </div>

        </section>
    );
};
