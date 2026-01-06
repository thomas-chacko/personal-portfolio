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
        <motion.span style={{ opacity }} className="relative text-white">
            {children}
        </motion.span>
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
        <section ref={container} className="relative py-16 lg:py-32 bg-neutral-950 text-white z-10 border-b border-white/5">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

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
                                <motion.div style={{ y }} className="relative h-[60vh] w-full">
                                    <Image
                                        src="/assets/hero-background.jpg"
                                        alt="Riding"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
                                </motion.div>
                            </div>
                            <p className="mt-6 text-sm tracking-widest text-white/40 uppercase text-right">01 &mdash; Mountain Passes</p>
                        </div>

                        {/* Parallax Manifesto Section */}
                        <div className="py-12 lg:py-32 relative z-10 flex flex-col gap-24">

                            {/* Card 01 - Moves Faster */}
                            <motion.div
                                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                                className="relative self-start w-full max-w-md"
                            >
                                <div className="absolute -left-4 -top-8 text-8xl font-black text-white/[0.02] select-none">01</div>
                                <h4 className="text-2xl font-bold text-white mb-4 border-l-2 border-red-500 pl-4">Signal vs Noise</h4>
                                <p className="text-neutral-400 leading-relaxed">
                                    In an ecosystem of constant pings, slacks, and jira tickets, the helmet becomes a sanctuary.
                                    There are no notifications here. Just the raw input of wind, engine frequency, and the road ahead.
                                    It's a complete <span className="text-white">system interrupt</span> for the digital mind.
                                </p>
                            </motion.div>

                            {/* Card 02 - Moves Slower (Stays longer) */}
                            <motion.div
                                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
                                className="relative self-end w-full max-w-md text-right"
                            >
                                <div className="absolute -right-4 -top-8 text-8xl font-black text-white/[0.02] select-none">02</div>
                                <h4 className="text-2xl font-bold text-white mb-4 border-r-2 border-blue-500 pr-4">Debugging Reality</h4>
                                <p className="text-neutral-400 leading-relaxed">
                                    Code is deterministic; if (a) then (b). The road is dynamic. A patch of gravel, a sudden rainstorm, a stray dog...
                                    it demands <span className="text-white">total presence</span>. You can't autopilot through a hairpin turn.
                                    This forced focus clears the cognitive cache better than any sleep mode.
                                </p>
                            </motion.div>

                            {/* Card 03 - Neural Shift */}
                            <motion.div
                                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                                className="relative self-center w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                                <h4 className="text-xl font-mono text-purple-400 mb-4 tracking-widest uppercase">The Return Value</h4>
                                <p className="text-lg text-white/80 font-light leading-relaxed">
                                    "I don't ride to escape life, but to prevent life from escaping me."
                                </p>
                                <div className="mt-6 flex items-center gap-3 text-sm text-neutral-500 font-mono">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span>Battery_Recharged.init()</span>
                                </div>
                            </motion.div>

                        </div>

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