"use client";

import React from "react";
import Image from "next/image";
import { businessData } from "@/data/business";
import { Wrench, ShieldAlert, Cpu, Gauge } from "lucide-react";

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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-[1.15]">
              More than Machinery. <br />
              <span className="italic font-light text-[#806329]">An Industrial Standard.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#635C52] text-sm sm:text-base leading-relaxed">
            {businessData.subheadline} Headquartered in Sodepur, Kolkata, Calcutta Agri Tech bridges mechanical precision with real-world mill floor economics.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-xs overflow-hidden">
              <Image
                src={businessData.founder.photo}
                alt={`${businessData.founder.name}, ${businessData.founder.role}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#25221D] leading-tight">
                {businessData.founder.name}
              </h3>
              <div className="text-xs font-mono text-[#806329] uppercase tracking-wider">
                {businessData.founder.role} • {businessData.name}
              </div>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-[#25221D] italic leading-relaxed border-l-2 border-[#B08A3E] pl-4 sm:pl-5">
              &ldquo;{businessData.founder.quote}&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#635C52] leading-relaxed font-sans">
              {businessData.founder.bio}
            </p>

            <div className="pt-6 border-t border-[#25221D]/15 grid grid-cols-2 gap-6 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-xs uppercase text-[#806329] tracking-wider font-semibold">
                  Engineering Heritage
                </span>
                <div className="font-serif text-xl font-bold text-[#25221D]">
                  20+ Years
                </div>
                <div className="text-xs text-[#635C52]">
                  Eastern India Rice Belt
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase text-[#806329] tracking-wider font-semibold">
                  Headquarters & Depot
                </span>
                <div className="font-serif text-xl font-bold text-[#25221D]">
                  Sodepur, Kolkata
                </div>
                <div className="text-xs text-[#635C52]">
                  B.T. Road Industrial Corridor
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <span className="text-xs font-mono tracking-wider uppercase text-[#B08A3E]">
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
