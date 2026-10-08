"use client";

import React, { useState } from "react";
import MachineryCanvas from "@/components/3d/MachineryCanvas";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";

interface MachineExplorerProps {
  onOpenInquiry: (machineName: string) => void;
}

export default function MachineExplorer({ onOpenInquiry }: MachineExplorerProps) {
  const [machineType, setMachineType] = useState<"destoner" | "sortex">("destoner");
  const [exploded, setExploded] = useState<boolean>(false);

  const destonerParts = [
    { name: "Twin Eccentric Vibratory Drive", desc: "Dual counter-rotating unbalance motors create linear vibration without torsional wobble." },
    { name: "Double-Deck Fluidized Sieve", desc: "Perforated stainless mesh separates dense stones upward and aerated paddy downward." },
    { name: "Negative Pressure Aspiration", desc: "Suction hood fluidizes grain bed while continuously scrubbing out chaff and light dust." },
    { name: "Micro-Differential Air Regulator", desc: "Precision micrometer damper valve maintains exact differential static pressure." },
  ];

  const sortexParts = [
    { name: "5400-px Tri-chromatic CCD Cameras", desc: "Dual high-speed optical matrix identifies pinhead black spots, chalky grains, and glass." },
    { name: "Microsecond Magnetic Ejector Nozzles", desc: "Ultra-fast solenoid air jets blast defect kernels at 1.2 billion cycle endurance." },
    { name: "Anodized Cascading Chutes", desc: "Frictionless micro-grooved alloy channels deliver uniform single-file grain streams." },
    { name: "Smart Linux Touchscreen Controller", desc: "Real-time AI shape and discoloration sensitivity adjustments with cloud monitoring." },
  ];

  const activeParts = machineType === "destoner" ? destonerParts : sortexParts;

  return (
    <section id="explorer" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#25221D] text-[#FBF8F1] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#B08A3E]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#D6BC7A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#FBF8F1]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D6BC7A] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              {"// SECTION 04 • 3D MECHANICAL EXPLORER"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FBF8F1] leading-tight">
              INTERACTIVE 3D <br />
              <span className="italic font-light text-[#D6BC7A]">MECHANICAL RIG.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#EFE7D8]/70 max-w-md">
            Inspect the internal kinematics and precision sub-assemblies of our industrial grain separation and optical sorting systems in real-time 3D.
          </p>
        </div>

        {/* 3D Interactive Rig Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#2E2922] border border-[#B08A3E]/30 rounded-xs p-6 sm:p-8">
          
          {/* Left Controls & Specifications (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Machine Switcher Tabs */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D6BC7A]">
                SELECT SYSTEM RIG:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMachineType("destoner")}
                  className={`py-2.5 px-3 text-xs font-mono uppercase tracking-wider rounded-xs border transition-all text-center ${
                    machineType === "destoner"
                      ? "bg-[#B08A3E] text-[#25221D] font-bold border-[#D6BC7A] shadow-sm"
                      : "bg-[#25221D] text-[#EFE7D8] border-[#FBF8F1]/15 hover:border-[#D6BC7A]/40"
                  }`}
                >
                  CAT-DS Destoner
                </button>
                <button
                  onClick={() => setMachineType("sortex")}
                  className={`py-2.5 px-3 text-xs font-mono uppercase tracking-wider rounded-xs border transition-all text-center ${
                    machineType === "sortex"
                      ? "bg-[#B08A3E] text-[#25221D] font-bold border-[#D6BC7A] shadow-sm"
                      : "bg-[#25221D] text-[#EFE7D8] border-[#FBF8F1]/15 hover:border-[#D6BC7A]/40"
                  }`}
                >
                  CAT-CS Sortex
                </button>
              </div>
            </div>

            {/* Exploded View Toggle Switch */}
            <div className="bg-[#25221D] p-4 rounded-xs border border-[#FBF8F1]/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#EFE7D8] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#D6BC7A]" />
                  <span>Exploded View</span>
                </span>
                <button
                  onClick={() => setExploded(!exploded)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-xs border transition-all ${
                    exploded
                      ? "bg-[#B08A3E] text-[#25221D] font-bold border-[#D6BC7A]"
                      : "bg-[#342F28] text-[#EFE7D8] border-[#FBF8F1]/20 hover:border-[#D6BC7A]"
                  }`}
                >
                  {exploded ? "Active" : "Assembled"}
                </button>
              </div>
              <p className="text-[11px] text-[#AFA698] font-sans">
                {exploded
                  ? "Components separated to inspect internal aspiration screens and pneumatic valve banks."
                  : "Unified production casing ready for multi-shift continuous operation."}
              </p>
            </div>

            {/* Sub-components Explanatory List */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D6BC7A]">
                CRITICAL SUB-ASSEMBLIES:
              </div>
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {activeParts.map((part, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-2.5 rounded-xs bg-[#25221D]/70 border border-[#FBF8F1]/10 text-left space-y-1 hover:border-[#D6BC7A]/30 transition-colors"
                  >
                    <div className="text-xs font-serif font-bold text-[#FBF8F1] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B08A3E]" />
                      <span>{part.name}</span>
                    </div>
                    <p className="text-[11px] text-[#AFA698] leading-relaxed">
                      {part.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Inquiry CTA */}
            <button
              onClick={() =>
                onOpenInquiry(
                  machineType === "destoner"
                    ? "Precision Destoner CAT-DS-1200"
                    : "Optical Color Sorter CAT-CS-540X"
                )
              }
              className="w-full py-3 bg-[#B08A3E] text-[#25221D] font-mono text-xs uppercase tracking-widest font-bold border border-[#D6BC7A] rounded-xs hover:bg-[#D6BC7A] transition-colors flex items-center justify-center gap-2"
            >
              <span>Request CAD Dimensions & Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#25221D]" />
            </button>
          </div>

          {/* Right 3D Viewport (8 cols) */}
          <div className="lg:col-span-8 relative bg-[#25221D]/80 rounded-xs border border-[#FBF8F1]/10 flex items-center justify-center overflow-hidden min-h-[460px]">
            <MachineryCanvas
              machineType={machineType}
              exploded={exploded}
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
