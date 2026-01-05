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

export const About = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={container} className="relative py-32 bg-neutral-950 text-white z-10">
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
                    <div className="lg:w-2/3 flex flex-col gap-32 pt-12 lg:pt-0">
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

                        {/* Text Block */}
                        <div className="max-w-2xl py-12">
                            <p className="text-3xl sm:text-4xl leading-tight font-light text-white/80">
                                <span className="text-white font-normal">I ride to disconnect</span>.
                                The road is a silent therapist, providing the clarity that no amount of code reviews can offer.
                            </p>
                        </div>

                        {/* Image 2 (Simulated with div as we only have one placeholder) */}
                        <div className="relative group pl-12 sm:pl-24">
                            <div className="overflow-hidden rounded-sm">
                                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="relative h-[50vh] w-full bg-neutral-900 border border-white/5">
                                    {/* Placeholder specific logic to re-use image but look different */}
                                    <Image
                                        src="/assets/hero-background.jpg"
                                        alt="Coastal"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-125"
                                    />
                                </motion.div>
                            </div>
                            <p className="mt-6 text-sm tracking-widest text-white/40 uppercase">02 &mdash; Coastal Winds</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};