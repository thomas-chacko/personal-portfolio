"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
    {
        title: "AlgoTrade Core",
        description: "High-frequency trading engine built with Rust and Python. Sub-millisecond latency for crypto markets.",
        tags: ["Rust", "Python", "gRPC", "Redis"],
        color: "#1e1e24" // Dark grey
    },
    {
        title: "Nebula - OS",
        description: "Web-based operating system interface. A fully functional desktop environment in the browser.",
        tags: ["React", "TypeScript", "WebAssembly", "Vite"],
        color: "#18181b" // Zinc 900
    },
    {
        title: "Velocity UI",
        description: "A comprehensive component library designed for speed and accessibility. Used by 10k+ developers.",
        tags: ["Next.js", "TailwindCSS", "Framer Motion"],
        color: "#0f172a" // Slate 900
    },
    {
        title: "Cyberpunk 2077 - Wiki",
        description: "Interactive map and lore encyclopedia for the game. Features 3D model viewing and pathfinding.",
        tags: ["Three.js", "Vue", "Node.js"],
        color: "#09090b" // Zinc 950
    }
];

const Card = ({ i, project, progress, range, targetScale }: { i: number, project: typeof projects[0], progress: MotionValue<number>, range: [number, number], targetScale: number }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 sm:px-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="flex flex-col md:flex-row relative -top-[15%] md:-top-[25%] h-[550px] md:h-[450px] w-full max-w-5xl rounded-3xl p-6 md:p-10 origin-top border border-white/10 overflow-hidden bg-neutral-900 shadow-2xl"
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-white/0 z-0" />

                <div className="flex flex-col md:flex-row h-full gap-6 md:gap-12 z-10">
                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">{project.title}</h2>
                        <p className="text-white/60 text-sm md:text-lg mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 text-white/50 rounded-full text-xs md:text-sm border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto flex items-center gap-2 text-white/40 group cursor-pointer hover:text-white transition-colors">
                            <span className="text-sm font-medium">View Project</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <div className="w-full md:w-1/2 relative h-full min-h-[200px] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                            <Image
                                fill
                                src="/assets/hero-background.jpg"
                                alt="image"
                                className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <section ref={container} className="relative mt-[20vh] bg-neutral-950">
            <div className="sticky top-0 h-24 sm:h-32 flex items-center px-12 z-20 mix-blend-difference">
                <h2 className="text-4xl font-bold text-white">Selected Works</h2>
            </div>

            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return <Card key={i} i={i} project={project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
            })}
        </section>
    )
}
