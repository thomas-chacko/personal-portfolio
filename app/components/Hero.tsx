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
                        <h2 className="mb-6 flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-white/70 md:mb-4 md:gap-4 md:text-sm">
                            <span className="h-[1px] w-10 bg-white/70 md:w-8" />
                            Visual Storyteller
                        </h2>
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            style={{ y: textY }}
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="text-6xl sm:text-7xl font-black uppercase leading-[1.20] md:leading-[0.90] tracking-tighter mix-blend-screen md:text-8xl lg:text-[9rem]"
                        >
                            Capturing
                            <br />
                            <span className="text-transparent bg-clip-text bg-white/20 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)] md:[-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">The Moment</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-6 max-w-lg text-base leading-relaxed text-white/90 font-light md:mt-8 md:text-xl"
                    >
                        Exploring the world one frame at a time. From the peaks of Patagonia to the streets of Tokyo.
                    </motion.p>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-8 md:mt-12"
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-white/50"
                        >
                            Connect With Me
                        </motion.p>
                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            {[
                                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'from-blue-600 to-blue-500', hoverColor: 'group-hover:from-blue-500 group-hover:to-blue-400', href:"https://www.facebook.com/" },
                                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', color: 'from-pink-600 via-purple-600 to-orange-500', hoverColor: 'group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-orange-400', href:"https://instagram.com/thomaschacko.in" },
                                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', color: 'from-sky-500 to-blue-500', hoverColor: 'group-hover:from-sky-400 group-hover:to-blue-400',href:"https://x.com/" },
                                { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', color: 'from-red-600 to-red-500', hoverColor: 'group-hover:from-red-500 group-hover:to-red-400',href:"https://www.youtube.com/@tom_rev" },
                                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: 'from-blue-700 to-blue-600', hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-500', href:"https://www.linkedin.com/in/thomas-chacko-7003a9283/" },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    target="_blank"
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.3 + index * 0.1,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative"
                                    aria-label={social.name}
                                >
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 rounded-full bg-linear-to-br ${social.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70`} />

                                    {/* Icon container */}
                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10 md:h-14 md:w-14">
                                        {/* Gradient overlay on hover */}
                                        <div className={`absolute inset-0 rounded-full bg-linear-to-br ${social.color} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />

                                        {/* SVG Icon */}
                                        <svg
                                            className="relative z-10 h-5 w-5 fill-white transition-all duration-300 group-hover:scale-110 md:h-6 md:w-6"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d={social.icon} />
                                        </svg>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        {social.name}
                                        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
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
