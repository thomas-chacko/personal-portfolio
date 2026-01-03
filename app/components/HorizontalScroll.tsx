"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {isInView && (
                <motion.span
                    initial={{ textContent: "0" }}
                    animate={{ textContent: end.toString() }}
                    transition={{ duration, ease: "easeOut" }}
                    onUpdate={(latest: any) => {
                        if (ref.current) {
                            ref.current.textContent = Math.floor(latest.textContent) + suffix;
                        }
                    }}
                >
                    0
                </motion.span>
            )}
        </motion.span>
    );
};

export const HorizontalScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const achievements = [
        { value: 50, suffix: "+", label: "Places Explored", icon: "🗺️" },
        { value: 200, suffix: "+", label: "Rides Completed", icon: "🏍️" },
        { value: 15, suffix: "K", label: "Kilometers", icon: "⚡" },
        { value: 100, suffix: "+", label: "Adventures", icon: "🎯" },
    ];

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-neutral-900">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </div>

                {/* Stacked Cards in Center */}
                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-16">
                    {achievements.map((item, index) => {
                        // Calculate scroll progress for each card
                        const cardStart = index / achievements.length;
                        const cardMid = (index + 0.5) / achievements.length;
                        
                        // Alternate direction: even indices from right, odd from left
                        const isFromRight = index % 2 === 0;
                        
                        // Transform for sliding in from side - card stays after entering
                        const x = useTransform(
                            scrollYProgress,
                            [cardStart, cardMid],
                            [isFromRight ? 1000 : -1000, 0]
                        );
                        
                        // Opacity - fade in and STAY visible
                        const opacity = useTransform(
                            scrollYProgress,
                            [cardStart, cardMid],
                            [0, 1]
                        );
                        
                        // Scale effect - scale up and STAY at full size
                        const scale = useTransform(
                            scrollYProgress,
                            [cardStart, cardMid],
                            [0.8, 1]
                        );
                        
                        return (
                            <motion.div
                                key={item.label}
                                style={{ 
                                    x, 
                                    opacity, 
                                    scale,
                                    zIndex: index 
                                }}
                                className="absolute w-full max-w-2xl"
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.02, 
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative"
                                >
                                {/* Card */}
                                <div className="relative rounded-3xl lg:rounded-4xl bg-linear-to-br from-white/10 to-white/5 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl border border-white/20 hover:border-purple-500/50 transition-all overflow-hidden">
                                    {/* Animated Gradient Background */}
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                        animate={{
                                            backgroundPosition: ["0% 0%", "100% 100%"],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    />

                                    {/* Outer Glow */}
                                    <div className="absolute -inset-2 bg-linear-to-br from-purple-500/30 to-blue-500/30 rounded-3xl lg:rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        {/* Icon */}
                                        <motion.div
                                            className="text-7xl sm:text-8xl lg:text-9xl mb-6 sm:mb-8"
                                            whileHover={{
                                                rotate: [0, -15, 15, -15, 0],
                                                scale: 1.2,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {item.icon}
                                        </motion.div>

                                        {/* Counter */}
                                        <div className="text-7xl sm:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 text-white">
                                            <AnimatedCounter
                                                end={item.value}
                                                suffix={item.suffix}
                                                duration={2.5}
                                            />
                                        </div>

                                        {/* Label */}
                                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white/80 uppercase tracking-wider mb-6 sm:mb-8">
                                            {item.label}
                                        </div>

                                        {/* Decorative Line */}
                                        <motion.div
                                            className="mx-auto h-1.5 bg-linear-to-r from-transparent via-purple-500 to-transparent rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "80%" }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5,
                                            }}
                                        />

                                        {/* Progress Indicator */}
                                        <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2">
                                            {achievements.map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`h-2 rounded-full transition-all duration-300 ${i === index
                                                            ? "w-8 bg-purple-500"
                                                            : "w-2 bg-white/30"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Corner Glows */}
                                    <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500/20 blur-3xl group-hover:bg-purple-500/30 transition-all duration-700" />
                                    <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition-all duration-700" />
                                </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 text-center"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex flex-col items-center gap-2 text-white/50 text-sm"
                    >
                        <span>Scroll to explore</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
