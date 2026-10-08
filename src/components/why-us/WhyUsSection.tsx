"use client";

import React from "react";
import { Clock } from "lucide-react";

export default function WhyUsSection() {
  const points = [
    {
      num: "01",
      title: "Direct Engineering Accountability",
      desc: "Founded and personally led by Debabrata Dey. Every client facility receives direct engineering oversight, avoiding third-party agency delays or unverified sub-contractors.",
    },
    {
      num: "02",
      title: "Guaranteed Head Rice Recovery",
      desc: "Our customized rubber roll compounds and aspiration fluid dynamics systematically optimize whole grain yield by 2% to 4%, delivering immediate ROI within the first harvest season.",
    },
    {
      num: "03",
      title: "Rapid Sodepur Depot Spares",
      desc: "Strategic centralized warehouse in Sodepur, Kolkata stocked with genuine replacement rolls, optical ejector valves, CCD sensor lamps, and woven wire screens for same-day dispatch.",
    },
    {
      num: "04",
      title: "Multi-Shift Heavy Metallurgy",
      desc: "Reinforced cast steel housings and vibration-damped structural chassis built to endure continuous 24-hour peak harvest milling schedules without dimensional warping.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EFE7D8]/30 border-t border-b border-[#25221D]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold">
              {"// SECTION 07 • INDUSTRIAL COMPETENCE"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              WHY LEADING PROCESSORS <br />
              <span className="italic font-light text-[#806329]">CHOOSE CALCUTTA AGRI TECH.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#635C52] text-sm sm:text-base leading-relaxed">
            Milling efficiency is defined on the plant floor. We combine decades of local grain physical insight with international component standards.
          </div>
        </div>

        {/* 4 Architectural Benefit Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#FBF8F1] border border-[#25221D]/10 hover:border-[#B08A3E]/50 rounded-xs p-8 space-y-4 transition-all duration-300 relative group shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-[#25221D]/10 pb-4">
                <span className="font-serif text-3xl font-bold text-[#806329]">
                  {p.num}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B08A3E]">
                  STANDARD SPECIFICATION
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#25221D]">
                {p.title}
              </h3>
              <p className="text-sm text-[#635C52] leading-relaxed font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Assurance Banner */}
        <div className="p-6 sm:p-8 rounded-xs bg-[#25221D] text-[#FBF8F1] border border-[#B08A3E]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-[#D6BC7A]">
              ZERO-DOWNTIME HARVEST COMMITMENT
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold">
              Emergency Field Service Available Across West Bengal & Neighboring States
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase px-4 py-2 rounded-xs bg-[#342F28] border border-[#D6BC7A]/40 text-[#D6BC7A] shrink-0">
            <Clock className="w-4 h-4" />
            <span>24/7 Harvest Season Hotline</span>
          </div>
        </div>

      </div>
    </section>
  );
}
