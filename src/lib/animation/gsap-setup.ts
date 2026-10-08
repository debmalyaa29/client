"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isConfigured = false;

/**
 * Safely registers GSAP plugins on the client-side once.
 */
export function initGsap() {
  if (typeof window === "undefined") return { gsap, ScrollTrigger };

  if (!isConfigured) {
    gsap.registerPlugin(ScrollTrigger);
    // Configure defaults for smooth industrial pacing
    gsap.defaults({
      ease: "power3.out",
      duration: 0.8,
    });
    isConfigured = true;
  }

  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };
