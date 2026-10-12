"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import EarthCanvas from "@/components/3d/EarthCanvas";
import { businessData } from "@/data/business";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { isReducedMotion } from "@/lib/animation/tokens";

interface HeroSectionProps {
  onOpenInquiry: (machine?: string) => void;
}

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const earthColRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Staged cinematic sequence:
      // 1. Heritage badge
      if (badgeRef.current) {
        tl.from(badgeRef.current, {
          y: -16,
          opacity: 0,
          duration: 0.8,
        });
      }

      // 2. Earth Container reveal
      if (earthColRef.current) {
        tl.from(
          earthColRef.current,
          {
            scale: 0.92,
            opacity: 0,
            duration: 1.4,
            ease: "expo.out",
          },
          "-=0.6"
        );
      }

      // 3. Signature editorial headline
      if (titleRef.current) {
        tl.from(
          titleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1.1,
          },
          "-=1.1"
        );
      }

      // 4. Description paragraph
      if (descRef.current) {
        tl.from(
          descRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.8"
        );
      }

      // 5. CTAs
      if (ctaRef.current) {
        tl.from(
          ctaRef.current.children,
          {
            y: 16,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.6"
        );
      }

      // 7. Stats grid
      if (statsRef.current) {
        tl.from(
          statsRef.current.children,
          {
            y: 15,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.6"
        );
      }

      // 8. Bottom stream prompt
      if (bottomScrollRef.current) {
        tl.from(
          bottomScrollRef.current,
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-[#F5F0E6] bg-grid-pattern"
    >
      {/* Subtle Ambient Gold Lighting Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B08A3E]/7 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-[#D6BC7A]/6 blur-[120px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 my-auto">
        
        {/* Left Column: Editorial Typography & Positioning (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Architectural Heritage Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-[#EFE7D8] border border-[#B08A3E]/30 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08A3E]" />
            <span className="text-xs font-mono tracking-wider text-[#806329] font-semibold">
              Kolkata Rice Industrial Corridor • Sodepur Hub
            </span>
          </div>

          {/* Signature Headline */}
          <div className="space-y-2">
            <h1 ref={titleRef} className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-[#25221D] leading-[1.08]">
              Engineering the <br />
              <span className="italic font-light text-[#806329]">Future</span> of <br />
              Rice Milling.
            </h1>
            <p ref={descRef} className="max-w-xl text-base sm:text-lg text-[#635C52] font-sans leading-relaxed pt-2">
              Calcutta Agri Tech delivers high-yield grain processing machinery, precision gravity destoners, and optical color sorters built to withstand industrial multi-shift operation.
            </p>
          </div>

          {/* Action CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenInquiry("Complete Plant Inquiry")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-wider border border-[#B08A3E] rounded-xs hover:bg-[#38322A] transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden cursor-pointer"
            >
              <span>Consult Engineering Desk</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6BC7A]" />
            </button>

            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EFE7D8] text-[#25221D] text-xs font-mono uppercase tracking-wider border border-[#25221D]/20 rounded-xs hover:bg-[#E4D8C4] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:outline-hidden cursor-pointer"
            >
              <span>Inspect Machinery Catalog</span>
              <span className="text-[#806329]">↓</span>
            </a>
          </div>

          {/* Integrated Founder Citation & Key Metrics */}
          <div ref={statsRef} className="pt-6 border-t border-[#25221D]/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {businessData.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#25221D] flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  {stat.unit && <span className="text-xs font-mono font-normal text-[#806329]">{stat.unit}</span>}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#635C52] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Clean 3D Earth Globe (5 cols) */}
        <div ref={earthColRef} className="lg:col-span-5 relative flex items-center justify-center">
          <EarthCanvas className="w-full max-w-[480px] mx-auto" />
        </div>

      </div>

      {/* Bottom Editorial Scroll Prompt */}
      <div ref={bottomScrollRef} className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#635C52] pt-8 border-t border-[#25221D]/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B08A3E]" />
          <span>CONTINUOUS INDUSTRIAL STREAM</span>
        </div>
        <a
          href="#business"
          aria-label="Scroll to discover business story"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#25221D] font-semibold hover:text-[#806329] hover:bg-[#EFE7D8]/80 transition-colors focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
        >
          <span>Scroll to Discover Story</span>
          <ArrowDown className="w-4 h-4 text-[#806329] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
