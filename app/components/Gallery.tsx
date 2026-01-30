"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

type SpanType = "tall" | "wide" | "normal";

interface GalleryImage {
    src: string;
    alt: string;
    span: SpanType;
}

const galleryImages: GalleryImage[] = [
    {
        src: "/assets/dirt-bike-rider-participating-races-circuits-adventure-thrill-with-motorcycle (1).jpg",
        alt: "Thomas Chacko off-road motorcycle adventure riding dirt bike on challenging terrain - Kerala adventure rider",
        span: "tall",
    },
    {
        src: "/assets/motorcycle-safety-helmet.jpg",
        alt: "Professional motorcycle riding gear and safety equipment - Thomas Chacko adventure motorcycle setup",
        span: "normal",
    },
    {
        src: "/assets/dirt-bike-rider-participating-races-circuits-adventure-thrill-with-motorcycle.jpg",
        alt: "Adventure trail riding motorcycle journey through scenic routes - Thomas Chacko exploring India",
        span: "normal",
    },
    {
        src: "/assets/dirt-bike-rider-participating-races-circuits-adventure-thrill-with-motorcycle.jpg",
        alt: "Dirt bike adventure racing circuits and off-road motorcycle trails - Thomas Chacko riding experience",
        span: "tall",
    },
    {
        src: "/assets/motorcycle-safety-helmet.jpg",
        alt: "Motorcycle helmet and protective riding gear for adventure touring - safety equipment Kerala rider",
        span: "normal",
    },
    {
        src: "/assets/dirt-bike-rider-participating-races-circuits-adventure-thrill-with-motorcycle.jpg",
        alt: "Technical off-road motorcycle trail riding adventure - Thomas Chacko navigating challenging paths",
        span: "normal",
    },
    {
        src: "/assets/dirt-bike-rider-participating-races-circuits-adventure-thrill-with-motorcycle.jpg",
        alt: "Adventure motorcycle touring and exploration rides - Thomas Chacko motorcycle travel stories India",
        span: "normal",
    },
];

const GalleryCard = ({ image, index }: { image: GalleryImage; index: number }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Different parallax speeds for variety
    const speeds = [50, -30, 40, -40, 35, -25];
    const y = useTransform(smoothProgress, [0, 1], [speeds[index % speeds.length], -speeds[index % speeds.length]]);

    // Grid span classes
    const spanClasses: Record<SpanType, string> = {
        tall: "md:row-span-2",
        wide: "md:col-span-2",
        normal: ""
    };

    return (
        <motion.div
            ref={cardRef}
            style={{ y, willChange: "transform" }}
            className={`group relative overflow-hidden rounded-lg bg-neutral-900 ${spanClasses[image.span]}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            {/* Image Container */}
            <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Border Effect */}
                <motion.div
                    className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-500"
                    animate={isHovered ? { scale: [1, 0.98, 1] } : {}}
                    transition={{ duration: 0.6 }}
                />
            </div>

            {/* Caption */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                initial={false}
            >
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white mb-2">
                    {image.alt}
                </h3>
                <div className="h-px w-12 bg-white/50 group-hover:w-24 transition-all duration-500" />
            </motion.div>

            {/* Index Number */}
            <div className="absolute top-4 right-4 font-josefin-sans text-xs text-white/30 group-hover:text-white/60 transition-colors">
                {String(index + 1).padStart(2, '0')}
            </div>
        </motion.div>
    );
};

export const Gallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const titleY = useTransform(smoothProgress, [0, 0.3], [100, 0]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="relative py-16 md:py-28 bg-neutral-950 text-white overflow-hidden"
            aria-label="Thomas Chacko motorcycle adventure photo gallery - off-road riding and travel photography"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    style={{ y: titleY, opacity: titleOpacity, willChange: "transform, opacity" }}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block h-px w-12 bg-white/40 origin-left"
                        />
                        <p className="font-cinzel text-xs md:text-sm font-medium tracking-[0.3em] md:tracking-[0.4em] text-white/40 uppercase">
                            Visual Journey
                        </p>
                    </div>

                    <h2 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                        GALLERY
                    </h2>

                    <p className="font-josefin-sans mt-6 text-base md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
                        A collection of moments captured between code commits and throttle twists.
                        Every image tells a story of exploration, adventure, and the pursuit of freedom.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
                    {galleryImages.map((image, index) => (
                        <GalleryCard key={index} image={image} index={index} />
                    ))}
                </div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-16 md:mt-24 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-josefin-sans text-xs text-neutral-400 tracking-wider">
                            More adventures loading...
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
