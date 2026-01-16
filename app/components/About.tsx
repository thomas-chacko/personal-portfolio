"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
    { label: "Years Riding", value: "05+" },
    { label: "Destinations", value: "30+" },
    { label: "Kilometers", value: "50k" },
    { label: "Weekend Rides", value: "∞" },
];

const TextReveal = ({ children }: { children: string }) => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.8", "end 0.2"],
    });

    const words = children.split(" ");

    return (
        <div ref={target} className="flex flex-wrap items-center py-2 lg:py-24 lg:min-h-[50vh] relative">
            <h3 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] flex flex-wrap gap-x-3 md:gap-x-8 gap-y-0 z-10 w-full">
                {words.map((word, wordIndex) => {
                    const letters = word.split("");
                    return (
                        <span key={wordIndex} className="flex leading-20  lg:leading-40">
                            {letters.map((letter, letterIndex) => {
                                // Calculate a unique range for each letter across the whole text
                                const step = 1 / (children.length);
                                // Absolute index in the string approx
                                const absIndex = children.indexOf(word) + letterIndex;
                                // Actually easier to just map the index if we flattened it, but let's approximate nicely:
                                // To make it "fill" as we scroll, we want the early letters to fill first.
                                // Let's use the container's scroll progress.
                                // We need to offset the start/end for each letter.

                                // Adjusting range to be within the "visible" scroll area (e.g., 0.2 to 0.8)
                                const start = (absIndex / children.length) * 0.5 + 0.2;
                                const end = start + 0.1;

                                return (
                                    <Char key={letterIndex} progress={scrollYProgress} range={[start, end]}>
                                        {letter}
                                    </Char>
                                );
                            })}
                        </span>
                    );
                })}
            </h3>
        </div>
    );
};

const Char = ({ progress, range, children }: { progress: any, range: [number, number], children: string }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity, willChange: "opacity" }} className="relative text-white">
            {children}
        </motion.span>
    );
};

const ParallaxManifesto = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yFast = useTransform(scrollYProgress, [0, 1], [100, -200]);
    const ySlow = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const yReverse = useTransform(scrollYProgress, [0, 1], [50, -100]);

    return (
        <div ref={sectionRef} className="py-12 lg:py-48 relative z-10 flex flex-col gap-32">

            {/* Card 01 */}
            <motion.div
                style={{ y: yFast, willChange: "transform" }}
                className="relative self-start w-full max-w-lg group"
            >
                <div className="hidden lg:block absolute -left-8 -top-12 text-[10rem] leading-none font-black text-white/[0.02] select-none -z-10 group-hover:text-white/[0.05] transition-colors">01</div>
                <div className="border-l-4 border-red-500 pl-6 py-2 backdrop-blur-sm bg-black/20 rounded-r-xl">
                    <h4 className="text-3xl font-bold text-white mb-2">The Analog Escape</h4>
                    <div className="h-px w-12 bg-white/20 mb-4" />
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        No pixels. No latency. Just the <span className="text-white font-medium">physics of movement</span>.
                        In a world suffocated by notifications, the helmet is the only true noise-cancelling device.
                    </p>
                </div>
            </motion.div>

            {/* Card 02 */}
            <motion.div
                style={{ y: ySlow, willChange: "transform" }}
                className="relative self-end w-full max-w-lg text-right group"
            >
                <div className="hidden lg:block absolute -right-8 -top-12 text-[10rem] leading-none font-black text-white/[0.02] select-none -z-10 group-hover:text-white/[0.05] transition-colors">02</div>
                <div className="border-r-4 border-blue-500 pr-6 py-2 backdrop-blur-sm bg-black/20 rounded-l-xl flex flex-col items-end">
                    <h4 className="text-3xl font-bold text-white mb-2">Mental Defrag</h4>
                    <div className="h-px w-12 bg-white/20 mb-4" />
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Complex algorithms require clear memory. The rhythm of the road organizes the chaos,
                        turning <span className="text-white font-medium">runtime errors</span> into clarity.
                    </p>
                </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div
                style={{ y: yReverse, willChange: "transform" }}
                className="relative self-center w-full max-w-xl p-10 bg-linear-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
                <h4 className="text-xl font-mono text-purple-300 mb-6 tracking-widest uppercase flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
                    System Status
                </h4>
                <p className="text-2xl text-white font-light leading-normal">
                    &quot;The machine needs fuel, but the mind needs <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">freedom</span>.&quot;
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-sm text-neutral-500 font-mono">
                    <span>/usr/bin/ride</span>
                    <span className="text-green-400">Process_Complete</span>
                </div>
            </motion.div>

        </div>
    );
};

export const About = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={container} className="relative py-12 lg:py-16 bg-neutral-950 text-white z-10 border-b border-white/5">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:gap-24">

                    {/* Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-sm font-medium tracking-[0.4em] text-white/40 mb-8 uppercase">
                                The Developer & Rider
                            </h2>
                            <h3 className="text-5xl sm:text-7xl font-bold leading-none mb-8">
                                CODE & <br />
                                <span className="text-neutral-500">THROTTLE</span>
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed max-w-sm">
                                I write logic for a living, but ride to feel alive. Whether it's a quick breakfast spin or a technical off-road trail, the bike is my reset button.
                            </p>

                            {/* Decorative Grid */}
                            <div className="mt-12 w-full h-px bg-white/10" />
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-xs tracking-widest text-white/40 uppercase">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="lg:w-2/3 flex flex-col gap-16 lg:gap-32 pt-12 lg:pt-0">
                        {/* Image 1 */}
                        <div className="relative group">
                            <div className="overflow-hidden rounded-sm">
                                <motion.div style={{ y, willChange: "transform" }} className="relative h-[60vh] w-full">
                                    <Image
                                        src="/assets/hero-background.jpg"
                                        alt="Riding"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                    <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
                                </motion.div>
                            </div>
                            <p className="mt-6 text-sm tracking-widest text-white/40 uppercase text-right">01 &mdash; Mountain Passes</p>
                        </div>

                        <ParallaxManifesto />

                        {/* Image 2 (Simulated with div as we only have one placeholder) */}
                        <TextReveal>
                            CHASING THE HORIZON BEYOND THE KNOWN.
                        </TextReveal>

                    </div>
                </div>
            </div>
        </section>
    );
};