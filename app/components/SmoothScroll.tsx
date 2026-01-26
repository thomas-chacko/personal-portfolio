"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll = () => {
    useEffect(() => {
        // More refined mobile detection - allow smooth scroll on tablets and larger phones
        const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth < 768;
        
        // Skip only on very small mobile devices for performance
        if (isMobile) return;

        const lenis = new Lenis({
            duration: 1.8, // Smoother, more luxurious feel
            easing: (t) => {
                // Custom easing for more natural feel
                return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            },
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.0, // Better control
            touchMultiplier: 1.5, // Smooth touch scrolling
            infinite: false,
            autoResize: true,
            syncTouch: true, // Better touch device support
            syncTouchLerp: 0.1, // Smooth touch interpolation
            touchInertiaMultiplier: 35, // Natural touch momentum
        });

        // Enhanced RAF loop for smoother performance
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Handle resize events
        const handleResize = () => {
            lenis.resize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', handleResize);
            lenis.destroy();
        };
    }, []);

    return null;
};
