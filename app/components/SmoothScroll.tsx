"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll = () => {
    useEffect(() => {
        // Mobile check to ensure native scroll performance on devices
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

        if (isMobile) return;

        const lenis = new Lenis({
            duration: 1.5, // Increased from 1.2 for more "weight"
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.8, // Reduced multiplier for more control
            touchMultiplier: 2, // Increased for better touch response if enabled
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};
