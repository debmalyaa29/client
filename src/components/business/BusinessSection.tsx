"use client";

import React from "react";
import Image from "next/image";
import { businessData } from "@/data/business";
import { Wrench, ShieldAlert, Cpu, Gauge, Quote } from "lucide-react";

export default function BusinessSection() {
  const pillars = [
    {
      icon: Gauge,
      title: "Maximized Grain Recovery",
      description: "Our aspiration geometries and rubber-roll profiling minimize broken rice by up to 3.5%, directly increasing head rice yield per metric ton of raw paddy milled.",
    },
    {
      icon: Cpu,
      title: "Intelligent Optical Sorting",
      description: "High-definition CCD sensors and FPGA image processors detect micro-defects at microsecond velocity, reducing rejected whole grain to virtually zero.",
    },
    {
      icon: Wrench,
      title: "Heavy-Duty Structural Rigidity",
      description: "Cast-iron structural sub-bases with dynamically balanced vibratory motors prevent resonance fatigue during 24/7 harvest-season non-stop milling runs.",
    },
    {
      icon: ShieldAlert,
      title: "Bengal Engineering Hub Support",
      description: "Direct engineering support and genuine replacement spares stocked locally at our Sodepur, Kolkata depot to ensure zero mill operational bottlenecks.",
    },
  ];

  return (
    <section id="business" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EFE7D8]/50 border-t border-b border-[#25221D]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold">
              {"// SECTION 02 • CORE PRINCIPLES"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-[1.15]">
              MORE THAN MACHINERY. <br />
              <span className="italic font-light text-[#806329]">AN INDUSTRIAL STANDARD.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#635C52] text-sm sm:text-base leading-relaxed">
            {businessData.subheadline} Headquartered in Sodepur, Kolkata, Calcutta Agri Tech bridges mechanical precision with real-world mill floor economics.
          </div>
        </div>

        {/* Founder Quotation & Philosophy Box */}
        <div className="bg-[#FBF8F1] border border-[#B08A3E]/30 rounded-xs p-6 sm:p-10 relative overflow-hidden shadow-xs">
          <div className="absolute top-4 right-6 text-[#EAE0CD] select-none pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xs overflow-hidden border border-[#B08A3E]/40 mb-3 bg-[#EAE0CD]">
                <Image
                  src={businessData.founder.photo}
                  alt={businessData.founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#25221D]">
                {businessData.founder.name}
              </h4>
              <span className="text-[11px] font-mono text-[#806329] uppercase">
                {businessData.founder.role}
              </span>
            </div>

            <div className="lg:col-span-9 space-y-4">
              <blockquote className="font-serif text-xl sm:text-2xl text-[#25221D] italic leading-relaxed">
                &ldquo;{businessData.founder.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-[#635C52] leading-relaxed max-w-3xl font-sans">
                {businessData.founder.bio}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBF8F1] border border-[#25221D]/10 hover:border-[#B08A3E]/50 rounded-xs p-6 space-y-4 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xs bg-[#EFE7D8] flex items-center justify-center border border-[#B08A3E]/30 text-[#806329] group-hover:bg-[#25221D] group-hover:text-[#D6BC7A] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#B08A3E]">
                    CRITERION 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#25221D] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#635C52] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
