"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const countRef = useRef(0);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {isInView && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration, ease: "easeOut" }}
                    onUpdate={() => {
                        if (ref.current && isInView) {
                            const progress = Math.min(countRef.current / duration, 1);
                            const currentValue = Math.floor(progress * end);
                            ref.current.textContent = currentValue + suffix;
                            countRef.current += 0.016; // ~60fps
                        }
                    }}
                >
                    {end}{suffix}
                </motion.span>
            )}
        </motion.span>
    );
};

export const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Reverse scroll animations - elements move opposite to scroll direction
    const yReverse = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const yReverseSlow = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const xReverse = useTransform(scrollYProgress, [0, 1], [-60, 60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

    const achievements = [
        { value: 50, suffix: "+", label: "Places Explored", icon: "🗺️" },
        { value: 200, suffix: "+", label: "Rides Completed", icon: "🏍️" },
        { value: 15, suffix: "K", label: "Kilometers", icon: "⚡" },
        { value: 100, suffix: "+", label: "Adventures", icon: "🎯" },
    ];

    const passions = [
        "Solo Riding", "Road Trips", "Mountain Routes",
        "Coastal Highways", "Off-Road Trails", "Sunset Rides",
        "Photography", "Exploring Hidden Gems", "Adventure Vlogs"
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen bg-neutral-900 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950" />



                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            <motion.div
                className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32"
                style={{ opacity }}
            >
                {/* Split Screen Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-20">
                    {/* Left Side - Content with Reverse Scroll */}
                    <motion.div
                        style={{ y: yReverse }}
                        className="space-y-6 sm:space-y-8 order-2 lg:order-1"
                    >
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-12 sm:w-16 bg-linear-to-r from-white/50 to-transparent" />
                            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/70 font-semibold">
                                About Me
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] sm:leading-[0.95] text-white">
                                Bike Traveller
                                <br />
                                <span className="text-white">& Explorer</span>
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-4 sm:space-y-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
                        >
                            <p>
                                I'm a passionate bike traveller exploring the beauty of local landscapes and hidden gems.
                                Every ride is a new adventure, every road tells a different story.
                            </p>
                            <p>
                                From winding mountain passes to serene coastal highways, I document my journeys
                                and share the thrill of the open road with fellow adventure enthusiasts.
                            </p>
                        </motion.div>

                        {/* Passions Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4"
                        >
                            {passions.map((passion, index) => (
                                <motion.span
                                    key={passion}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
                                >
                                    {passion}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image with Reverse Scroll */}
                    <motion.div
                        style={{ y: yReverseSlow, rotate }}
                        className="relative order-1 lg:order-2"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group"
                        >
                            {/* Main Image */}
                            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image
                                    src="/assets/hero-background.jpg"
                                    alt="Bike Traveller"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                                    priority
                                />
                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                                {/* Animated Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/20"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>

                            {/* Floating Quote Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute -bottom-4 sm:-bottom-8 left-4 sm:-left-8 right-4 sm:right-8 lg:right-auto lg:w-96"
                            >
                                <div className="backdrop-blur-2xl bg-linear-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl">
                                    <div className="text-4xl sm:text-6xl text-white/70 mb-1 sm:mb-2 leading-none">"</div>
                                    <p className="text-white/90 text-sm sm:text-base italic leading-relaxed">
                                        Life is a journey, not a destination. Every mile brings a new story.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>


            </motion.div>
        </section>
    );
};