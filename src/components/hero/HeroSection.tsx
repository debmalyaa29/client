"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import EarthCanvas from "@/components/3d/EarthCanvas";
import { businessData } from "@/data/business";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
  const founderCardRef = useRef<HTMLDivElement>(null);
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

      // 6. Founder Portrait Card
      if (founderCardRef.current) {
        tl.from(
          founderCardRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1.0,
            ease: "power2.out",
          },
          "-=0.7"
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
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#806329] font-semibold">
              Kolkata Rice Industrial Corridor • Sodepur Hub
            </span>
          </div>

          {/* Signature Headline */}
          <div className="space-y-2">
            <h1 ref={titleRef} className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-[#25221D] leading-[1.08]">
              ENGINEERING THE <br />
              <span className="italic font-light text-[#806329]">FUTURE</span> OF <br />
              RICE MILLING.
            </h1>
            <p ref={descRef} className="max-w-xl text-base sm:text-lg text-[#635C52] font-sans leading-relaxed pt-2">
              Calcutta Agri Tech delivers high-yield grain processing machinery, precision gravity destoners, and optical color sorters built to withstand industrial multi-shift operation.
            </p>
          </div>

          {/* Action CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenInquiry("Complete Plant Inquiry")}
              className="px-6 py-3.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest border border-[#B08A3E] rounded-xs hover:bg-[#38322A] transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <span>Consult Engineering Desk</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6BC7A]" />
            </button>

            <a
              href="#products"
              className="px-6 py-3.5 bg-[#EFE7D8]/80 text-[#25221D] text-xs font-mono uppercase tracking-widest border border-[#25221D]/20 rounded-xs hover:bg-[#EAE0CD] transition-all duration-200 flex items-center gap-2"
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
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#635C52] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Layered 3D Earth Globe + Founder Composition (5 cols) */}
        <div ref={earthColRef} className="lg:col-span-5 relative flex flex-col items-center justify-center">
          
          {/* Layer 1: 3D Earth Interactive Canvas */}
          <div className="w-full relative z-0 flex items-center justify-center">
            <EarthCanvas className="w-full max-w-[480px] mx-auto" />
          </div>

          {/* Layer 2: Founder Cutout Portrait Card (Overlaid Composition) */}
          <div ref={founderCardRef} className="relative z-10 w-full max-w-sm -mt-14 sm:-mt-16 bg-[#FBF8F1]/95 backdrop-blur-md border border-[#B08A3E]/35 rounded-xs p-4 shadow-lg flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
            <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xs overflow-hidden shrink-0 border border-[#B08A3E]/40 bg-[#EAE0CD]">
              <Image
                src={businessData.founder.photo}
                alt={businessData.founder.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 96px, 112px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25221D]/40 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B08A3E] font-bold">
                FOUNDER & CHIEF ENGINEER
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#25221D] leading-tight">
                {businessData.founder.name}
              </h3>
              <p className="text-xs text-[#635C52] font-sans line-clamp-2 leading-relaxed">
                Spearheading modern rice milling automation & grain recovery engineering across Bengal.
              </p>
              <div className="flex items-center gap-1.5 pt-1 text-[11px] font-mono text-[#806329]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A3E]" />
                <span>On-Site Factory Consultation</span>
              </div>
            </div>
          </div>
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
          className="flex items-center gap-1.5 text-[#25221D] hover:text-[#B08A3E] transition-colors uppercase tracking-widest text-[11px]"
        >
          <span>Scroll to Discover Story</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
