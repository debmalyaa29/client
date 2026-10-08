"use client";

import React from "react";
import { ArrowUpRight, Cpu, HardHat, Cog, SlidersHorizontal, CheckCircle2 } from "lucide-react";

interface SolutionsSectionProps {
  onOpenInquiry: (solutionName: string) => void;
}

export default function SolutionsSection({ onOpenInquiry }: SolutionsSectionProps) {
  const plantTiers = [
    {
      capacity: "2.0 – 4.0 TPH",
      tier: "Standard Commercial Mill",
      target: "Ideal for regional agro-processors & expanding family-run rice mills.",
      features: [
        "Pre-cleaning, Destoning & Pneumatic Shelling",
        "Single-pass vertical whitening & rotary grading",
        "Compact footprint layout for quick civil commissioning",
        "Manual / Semi-automated electric control panel",
      ],
    },
    {
      capacity: "6.0 – 10.0 TPH",
      tier: "Industrial Processing Plant",
      target: "Built for high-volume commercial mills supplying multi-state supply chains.",
      features: [
        "Multi-stage vertical whiteners with twin mist polishers",
        "High-throughput CCD optical color sorter integration",
        "Automated pneumatic aspiration and husk collection",
        "Centralized PLC touch desk with power metering",
      ],
      popular: true,
    },
    {
      capacity: "12.0 – 20.0 TPH",
      tier: "Mega Multi-Line Complex",
      target: "Engineered for enterprise exporters demanding 24/7 continuous harvest processing.",
      features: [
        "Continuous multi-stream grain handling & parboiling integration",
        "7-chute multi-spectral optical sorting with AI defect recognition",
        "SCADA computerized plant telemetry & cloud diagnostics",
        "Fully synchronized low-broken ratio guarantee",
      ],
    },
  ];

  const turnkeyStages = [
    { icon: HardHat, step: "01", title: "Civil & Flow Blueprinting", desc: "Custom architectural CAD layouts optimizing grain gravitational flow and minimizing elevator transfer breakage." },
    { icon: Cog, step: "02", title: "Structural Steel & Piping", desc: "Heavy-gauge structural frames, anti-abrasion grain transit ducts, and precision cyclone aspiration piping." },
    { icon: Cpu, step: "03", title: "MCC & PLC Automation", desc: "Centralized industrial control desks with interlocked fail-safes preventing hopper choking and motor overloads." },
    { icon: SlidersHorizontal, step: "04", title: "Commissioning & Tuning", desc: "On-site harvest trial runs, rubber-roll pressure calibration, and operator training to guarantee yield." },
  ];

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EFE7D8]/40 border-t border-b border-[#25221D]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold">
              {"// SECTION 05 • COMPLETE PLANT ENGINEERING"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              TURNKEY RICE MILL <br />
              <span className="italic font-light text-[#806329]">SOLUTIONS & LAYOUTS.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#635C52] text-sm sm:text-base leading-relaxed">
            From greenfield design to multi-ton commercial commissioning, Calcutta Agri Tech delivers fully integrated turnkey plants calibrated for highest grain recovery.
          </div>
        </div>

        {/* Turnkey Engineering 4-Stage Lifecycle — Guaranteed Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {turnkeyStages.map((stg, sIdx) => {
            const Icon = stg.icon;
            return (
              <div
                key={sIdx}
                className="turnkey-stage-card bg-[#FBF8F1] border border-[#25221D]/10 rounded-xs p-6 space-y-4 relative group hover:border-[#B08A3E]/60 transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#B08A3E] font-bold">
                    PHASE {stg.step}
                  </span>
                  <div className="w-8 h-8 rounded-xs bg-[#EFE7D8] flex items-center justify-center text-[#806329] border border-[#B08A3E]/30 group-hover:bg-[#25221D] group-hover:text-[#D6BC7A] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#25221D] leading-snug">
                  {stg.title}
                </h3>
                <p className="text-xs text-[#635C52] leading-relaxed">
                  {stg.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Plant Capacity Tiers — Guaranteed Visibility & Verified Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plantTiers.map((tier, tIdx) => (
            <div
              key={tIdx}
              className={`plant-tier-card rounded-xs p-8 flex flex-col justify-between border transition-all duration-300 relative ${
                tier.popular
                  ? "bg-[#25221D] text-[#FBF8F1] border-[#B08A3E] shadow-md -translate-y-1 sm:-translate-y-2"
                  : "bg-[#FBF8F1] text-[#25221D] border-[#25221D]/15 hover:border-[#B08A3E]/50 hover:-translate-y-0.5"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-6 bg-[#B08A3E] text-[#25221D] text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-xs shadow-2xs">
                  MOST COMMISSIONED SPECIFICATION
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className={`text-xs font-mono tracking-wider uppercase ${tier.popular ? "text-[#D6BC7A]" : "text-[#806329]"}`}>
                    CAPACITY RANGE
                  </span>
                  <div className="font-serif text-3xl font-bold leading-tight tabular-nums">
                    {tier.capacity}
                  </div>
                  <div className={`text-base font-serif font-medium ${tier.popular ? "text-[#EFE7D8]" : "text-[#25221D]"}`}>
                    {tier.tier}
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${tier.popular ? "text-[#AFA698]" : "text-[#635C52]"}`}>
                  {tier.target}
                </p>

                <div className={`space-y-2.5 pt-4 border-t ${tier.popular ? "border-[#FBF8F1]/10" : "border-[#25221D]/10"}`}>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${tier.popular ? "text-[#D6BC7A]" : "text-[#B08A3E]"}`} />
                      <span className={tier.popular ? "text-[#EFE7D8]" : "text-[#25221D]"}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenInquiry(`Turnkey Solution (${tier.capacity})`)}
                  className={`w-full py-3 text-xs font-mono uppercase tracking-widest rounded-xs border active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E] ${
                    tier.popular
                      ? "bg-[#B08A3E] text-[#25221D] font-bold border-[#D6BC7A] hover:bg-[#D6BC7A]"
                      : "bg-[#25221D] text-[#FBF8F1] border-[#B08A3E]/60 hover:bg-[#342F28]"
                  }`}
                >
                  <span>Request Turnkey Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
