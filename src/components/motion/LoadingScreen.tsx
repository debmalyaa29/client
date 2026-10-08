"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { isReducedMotion } from "@/lib/animation/tokens";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If reduced-motion is requested or previously loaded in session, dismiss immediately
    if (isReducedMotion()) {
      setLoading(false);
      return;
    }

    const overlay = overlayRef.current;
    const progressBar = progressBarRef.current;
    const percentText = percentTextRef.current;
    const brand = brandRef.current;
    const coords = coordsRef.current;
    if (!overlay || !progressBar) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      },
    });

    const progressObj = { value: 0 };

    // 1. Initial brand reveal
    tl.fromTo(
      brand,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );

    // 2. Coords subtitle reveal
    tl.fromTo(
      coords,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" },
      "-=0.2"
    );

    // 3. Progress counter and gold line growth
    tl.to(
      progressObj,
      {
        value: 100,
        duration: 0.95,
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.round(progressObj.value);
          if (progressBar) progressBar.style.width = `${val}%`;
          if (percentText) percentText.textContent = `${val.toString().padStart(2, "0")}%`;
        },
      },
      "-=0.2"
    );

    // 4. Cinematic exit curtain
    tl.to(
      [brand, coords, progressBar.parentElement, percentText],
      { opacity: 0, y: -10, duration: 0.35, ease: "power2.in" }
    );
    tl.to(
      overlay,
      {
        yPercent: -100,
        duration: 0.7,
        ease: "power3.inOut",
      },
      "-=0.1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#24211B] text-[#FBF8F1] px-6 select-none"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-md w-full flex flex-col items-center text-center space-y-6 relative z-10">
        
        {/* Brand Emblem */}
        <div ref={brandRef} className="space-y-2 opacity-0">
          <div className="w-12 h-12 rounded-sm bg-[#25221D] border border-[#B08A3E]/60 flex items-center justify-center font-serif text-2xl font-bold text-[#D6BC7A] mx-auto shadow-sm">
            C
          </div>
          <div className="font-serif text-2xl sm:text-3xl tracking-wider text-[#FBF8F1] uppercase">
            Calcutta Agri Tech
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#B08A3E] uppercase font-bold">
            Engineering • Precision • Industrial Scale
          </div>
        </div>

        {/* Gold Precision Progress Line */}
        <div className="w-full max-w-xs space-y-2 pt-4">
          <div className="w-full h-[2px] bg-[#38322A] rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-[#B08A3E] w-0 transition-none"
            />
          </div>
          
          <div className="flex items-center justify-between text-[11px] font-mono text-[#EFE7D8]/60">
            <span>CALIBRATING RIGS</span>
            <span ref={percentTextRef} className="text-[#D6BC7A] font-bold">
              00%
            </span>
          </div>
        </div>

        {/* Coordinates Details */}
        <div ref={coordsRef} className="opacity-0 text-[10px] font-mono text-[#806329] tracking-widest uppercase">
          HQ: Sodepur, Kolkata • Lat 22.71° N, Lon 88.38° E
        </div>

      </div>
    </div>
  );
}
