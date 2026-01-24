"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const techStack = [
    { name: "Next.js 14", category: "Core" },
    { name: "TypeScript", category: "Language" },
    { name: "Rust", category: "Backend" },
    { name: "Tailwind", category: "Style" },
    { name: "Postgres", category: "Database" },
    { name: "Docker", category: "DevOps" },
];

const motoGear = [
    { name: "Triumph Tiger", category: "Machine" },
    { name: "Klim Badlands", category: "Protection" },
    { name: "Garmin Zumo", category: "Navigation" },
    { name: "GoPro Hero 11", category: "Optics" },
    { name: "Ram Mounts", category: "Support" },
    { name: "Enduristan", category: "Luggage" },
];

export const Garage = () => {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const yDev = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yMoto = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={container} className="relative bg-neutral-900 border-t border-white/5 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* HEADLINE Mobile Only */}
                <div className="lg:hidden p-8 border-b border-white/5">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-white">The Garage</h2>
                    <p className="text-white/40 font-mono mt-2 text-sm">/// EQUIP_CHECK</p>
                </div>

                {/* LEFT: DEV STACK */}
                <div className="w-full lg:w-1/2 p-8 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center relative group">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <motion.div
                        style={{ y: isMobile ? 0 : yDev }}
                        className="relative z-10"
                    >
                        <h3 className="hidden lg:block text-xs font-bold tracking-[0.3em] text-blue-400 uppercase mb-12">
                            Digital Arsenal
                        </h3>

                        <div className="space-y-8">
                            {techStack.map((item, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 group/item hover:border-blue-500/50 transition-colors">
                                    <span className="text-2xl lg:text-4xl font-bold text-neutral-400 group-hover/item:text-white transition-colors">{item.name}</span>
                                    <span className="text-xs font-mono text-neutral-600 group-hover/item:text-blue-400">{item.category}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: MOTO GEAR */}
                <div className="w-full lg:w-1/2 p-0 lg:p-0 relative flex flex-col">
                    {/* Sticky Header for Right Side */}
                    <div className="absolute top-0 right-0 p-8 lg:p-12 z-20 pointer-events-none">
                        <h3 className="hidden lg:block text-xs font-bold tracking-[0.3em] text-red-400 uppercase text-right">
                            Physical Kit
                        </h3>
                    </div>

                    <div className="h-[50vh] lg:h-1/2 relative overflow-hidden border-b border-white/5">
                        <motion.div
                            style={{ scale: isMobile ? 1 : 1.1 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/assets/hero-background.jpg"
                                alt="Garage"
                                fill
                                className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-neutral-900/50 hover:bg-transparent transition-colors duration-500" />
                        </motion.div>
                    </div>

                    <div className="flex-1 bg-neutral-950 p-8 lg:p-24 flex flex-col justify-center relative group">
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <motion.div
                            style={{ y: isMobile ? 0 : yMoto }}
                            className="space-y-6 relative z-10"
                        >
                            {motoGear.map((item, i) => (
                                <div key={i} className="flex items-center justify-between group/item">
                                    <span className="text-xl lg:text-2xl font-medium text-neutral-500 group-hover/item:text-white transition-colors">{item.name}</span>
                                    <div className="h-px w-8 bg-neutral-800 group-hover/item:bg-red-500 transition-colors" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Center Label Badge */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-neutral-950 border border-white/10 rounded-full items-center justify-center z-30">
                <span className="font-black text-xl italic tracking-tighter">VS</span>
            </div>
        </section>
    );
};
