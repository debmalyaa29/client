"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { isReducedMotion, isTouchDevice } from "@/lib/animation/tokens";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Strictly desktop-only & respect reduced-motion
    if (isTouchDevice() || isReducedMotion()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    // Add class to body to hide default pointer only when desktop cursor is active
    document.body.classList.add("custom-cursor-active");

    // Performant GSAP quickTo setters
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const setRingX = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power2.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power2.out" });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
        isVisible = true;
      }
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.25 });
      isVisible = false;
    };

    const onMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
      isVisible = true;
    };

    // Hover state management via event delegation (no React state updates!)
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, select, textarea"
      ) as HTMLElement | null;

      if (!target) {
        // Default state
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(176, 138, 62, 0.45)",
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 1, backgroundColor: "#B08A3E", duration: 0.2 });
        if (label) gsap.to(label, { opacity: 0, scale: 0.8, duration: 0.15 });
        return;
      }

      const cursorType = target.getAttribute("data-cursor");

      if (cursorType === "explore") {
        gsap.to(ring, {
          scale: 2.2,
          borderColor: "#B08A3E",
          backgroundColor: "rgba(37, 34, 29, 0.85)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
        if (label) {
          label.textContent = "EXPLORE";
          gsap.to(label, { opacity: 1, scale: 1, duration: 0.2 });
        }
      } else if (cursorType === "drag") {
        gsap.to(ring, {
          scale: 2.4,
          borderColor: "#D6BC7A",
          backgroundColor: "rgba(37, 34, 29, 0.85)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
        if (label) {
          label.textContent = "360° DRAG";
          gsap.to(label, { opacity: 1, scale: 1, duration: 0.2 });
        }
      } else if (cursorType === "view") {
        gsap.to(ring, {
          scale: 2.0,
          borderColor: "#B08A3E",
          backgroundColor: "rgba(37, 34, 29, 0.85)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
        if (label) {
          label.textContent = "VIEW";
          gsap.to(label, { opacity: 1, scale: 1, duration: 0.2 });
        }
      } else {
        // Standard interactive link/button
        gsap.to(ring, {
          scale: 1.5,
          borderColor: "#B08A3E",
          backgroundColor: "rgba(176, 138, 62, 0.08)",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0.7, backgroundColor: "#D6BC7A", duration: 0.2 });
        if (label) gsap.to(label, { opacity: 0, scale: 0.8, duration: 0.15 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Primary Gold Focal Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-9999 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B08A3E] opacity-0"
      />

      {/* Secondary Muted Gold Trailing Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-9998 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#B08A3E]/45 opacity-0 flex items-center justify-center transition-colors"
      >
        <span
          ref={labelRef}
          className="text-[9px] font-mono tracking-widest text-[#FBF8F1] uppercase font-bold opacity-0 scale-75 select-none pointer-events-none"
        />
      </div>
    </>
  );
}
