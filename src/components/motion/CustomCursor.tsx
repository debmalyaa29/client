"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { isReducedMotion, isTouchDevice, BRAND_COLORS } from "@/lib/animation/tokens";

type CursorMode = "default" | "link" | "explore" | "view" | "input";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Strictly disable on touch or coarse pointers (tablets/phones) and reduced motion
    if (typeof window === "undefined" || isTouchDevice() || isReducedMotion()) {
      return;
    }

    // Verify pointer precision
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    setMounted(true);
    document.body.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Direct hardware-accelerated GSAP quickTo setters for zero-latency movement
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.06, ease: "power3.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.06, ease: "power3.out" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power2.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power2.out" });

    // Initial positioning off-screen
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    let isVisible = false;

    const onPointerMove = (e: PointerEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);

      if (!isVisible) {
        isVisible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.2, overwrite: "auto" });
      }
    };

    const onPointerLeave = () => {
      isVisible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.2, overwrite: "auto" });
    };

    const onPointerEnter = () => {
      isVisible = true;
      gsap.to([dot, ring], { opacity: 1, duration: 0.2, overwrite: "auto" });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], [data-cursor], input, textarea, select"
      ) as HTMLElement | null;

      if (!target) {
        setMode("default");
        return;
      }

      const cursorAttr = target.getAttribute("data-cursor");
      if (cursorAttr === "explore") {
        setMode("explore");
      } else if (cursorAttr === "view") {
        setMode("view");
      } else if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        setMode("input");
      } else {
        setMode("link");
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    document.addEventListener("mouseenter", onPointerEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      document.removeEventListener("mouseenter", onPointerEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  // Choreograph mode changes smoothly with GSAP
  useEffect(() => {
    if (!mounted || !dotRef.current || !ringRef.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    switch (mode) {
      case "link":
        // Interactive state: Deep Atlas Navy accent (#0E1D61) with subtle glow
        gsap.to(dot, {
          scale: 0.7,
          backgroundColor: BRAND_COLORS.atlasNavy,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(ring, {
          scale: 1.35,
          borderColor: BRAND_COLORS.atlasNavy,
          backgroundColor: BRAND_COLORS.atlasNavyMuted,
          duration: 0.25,
          ease: "power2.out",
        });
        break;

      case "explore":
      case "view":
        // Media inspection badge with label
        gsap.to(dot, {
          scale: 0,
          duration: 0.15,
        });
        gsap.to(ring, {
          scale: 2.1,
          borderColor: BRAND_COLORS.goldLight,
          backgroundColor: "rgba(37, 34, 29, 0.92)",
          duration: 0.25,
          ease: "power2.out",
        });
        break;

      case "input":
        // Hidden ring over text fields to preserve native editing feel
        gsap.to(dot, {
          scale: 0.5,
          backgroundColor: BRAND_COLORS.charcoal,
          duration: 0.15,
        });
        gsap.to(ring, {
          scale: 0.6,
          opacity: 0.2,
          duration: 0.2,
        });
        break;

      case "default":
      default:
        // Muted gold architectural state
        gsap.to(dot, {
          scale: 1,
          backgroundColor: BRAND_COLORS.gold,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(ring, {
          scale: 1,
          opacity: 1,
          borderColor: "rgba(176, 138, 62, 0.4)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          duration: 0.25,
          ease: "power2.out",
        });
        break;
    }
  }, [mode, mounted]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999 overflow-hidden select-none"
    >
      {/* Primary High-Precision Focal Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B08A3E] will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Secondary Dynamic Following Ring with Deep Atlas Navy and Media Badges */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-[#B08A3E]/40 flex items-center justify-center will-change-transform shadow-2xs backdrop-blur-[0.5px]"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <span
          ref={labelRef}
          className="text-[8px] font-mono tracking-widest text-[#FBF8F1] uppercase font-bold select-none leading-none"
        >
          {mode === "explore" ? "EXPLORE" : mode === "view" ? "VIEW" : ""}
        </span>
      </div>
    </div>
  );
}
