"use client";

import React from "react";
import Image from "next/image";
import EarthCanvas from "@/components/3d/EarthCanvas";
import { businessData } from "@/data/business";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenInquiry: (machine?: string) => void;
}

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  return (
    <section
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
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-[#EFE7D8] border border-[#B08A3E]/30 w-fit shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08A3E]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#806329] font-semibold">
              Kolkata Rice Industrial Corridor • Sodepur Hub
            </span>
          </div>

          {/* Signature Headline — Strictly Preserved Line Breaks & Editorial Hierarchy */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-[#25221D] leading-[1.08]">
              ENGINEERING THE <br />
              <span className="italic font-light text-[#806329]">FUTURE</span> OF <br />
              RICE MILLING.
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-[#635C52] font-sans leading-relaxed pt-2">
              Calcutta Agri Tech delivers high-yield grain processing machinery, precision gravity destoners, and optical color sorters built to withstand industrial multi-shift operation.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenInquiry("Complete Plant Inquiry")}
              className="px-6 py-3.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest border border-[#B08A3E] rounded-xs hover:bg-[#38322A] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
            >
              <span>Consult Engineering Desk</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6BC7A]" />
            </button>

            <a
              href="#products"
              className="px-6 py-3.5 bg-[#EFE7D8]/80 text-[#25221D] text-xs font-mono uppercase tracking-widest border border-[#25221D]/20 rounded-xs hover:bg-[#EAE0CD] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
            >
              <span>Inspect Machinery Catalog</span>
              <span className="text-[#806329]">↓</span>
            </a>
          </div>

          {/* Integrated Founder Citation & Key Metrics with Architectural Divider Rhythm */}
          <div className="pt-6 border-t border-[#25221D]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:divide-x sm:divide-[#25221D]/10">
            {businessData.stats.map((stat, idx) => (
              <div key={idx} className={`space-y-1 ${idx > 0 ? "sm:pl-4" : ""}`}>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#25221D] flex items-baseline gap-1 tabular-nums">
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
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          
          {/* Layer 1: 3D Earth Interactive Canvas */}
          <div className="w-full relative z-0 flex items-center justify-center">
            <EarthCanvas className="w-full max-w-[480px] mx-auto" />
          </div>

          {/* Layer 2: Founder Cutout Portrait Card (Overlaid Composition) */}
          <div className="relative z-10 w-full max-w-sm -mt-14 sm:-mt-16 bg-[#FBF8F1]/95 backdrop-blur-md border border-[#B08A3E]/35 rounded-xs p-4 shadow-lg flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
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
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#635C52] pt-8 border-t border-[#25221D]/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B08A3E]" />
          <span>CONTINUOUS INDUSTRIAL STREAM</span>
        </div>
        <a
          href="#business"
          className="flex items-center gap-1.5 text-[#25221D] hover:text-[#B08A3E] transition-colors uppercase tracking-widest text-[11px] focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B08A3E]"
        >
          <span>Scroll to Discover Story</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
