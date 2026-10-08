"use client";

import React, { useState } from "react";
import { millingStepsData } from "@/data/process";
import { Gauge } from "lucide-react";

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = millingStepsData[activeStepIndex];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#25221D]/15 pb-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold">
              {"// SECTION 06 • GRAIN METALLURGY & TRANSFORMATION"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              THE 8-STAGE INTERACTIVE <br />
              <span className="italic font-light text-[#806329]">RICE MILLING PROCESS.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#635C52] max-w-sm">
            Follow the physical transformation of raw field paddy into 99.99% export-grade polished head rice.
          </p>
        </div>

        {/* Gold Horizontal Timeline Indicator */}
        <div className="relative py-4 overflow-x-auto">
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#25221D]/15 -translate-y-1/2 z-0 hidden sm:block" />
          
          {/* Active Progress Gold Line */}
          <div
            className="absolute top-1/2 left-0 h-[2px] bg-[#B08A3E] -translate-y-1/2 z-0 transition-all duration-300 hidden sm:block"
            style={{
              width: `${(activeStepIndex / (millingStepsData.length - 1)) * 100}%`,
            }}
          />

          <div className="flex items-center justify-between min-w-[640px] sm:min-w-0 relative z-10 gap-2 sm:gap-0">
            {millingStepsData.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center group transition-all p-2 rounded-xs focus:outline-hidden ${
                    isActive ? "scale-105" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-[#25221D] text-[#D6BC7A] border-[#B08A3E] shadow-sm"
                        : isPast
                        ? "bg-[#EFE7D8] text-[#806329] border-[#B08A3E]"
                        : "bg-[#FBF8F1] text-[#635C52] border-[#25221D]/20 group-hover:border-[#B08A3E]"
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase mt-2 text-center transition-colors ${
                      isActive ? "text-[#25221D] font-bold" : "text-[#635C52]"
                    }`}
                  >
                    {step.id}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-[#FBF8F1] border border-[#B08A3E]/35 rounded-xs p-8 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Stage Overview & Mechanics (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE7D8] border border-[#B08A3E]/30 rounded-xs text-xs font-mono text-[#806329] font-bold">
                <span>STAGE {activeStep.stepNumber} OF 08</span>
                <span>•</span>
                <span>{activeStep.machine}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#25221D]">
                {activeStep.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#635C52] leading-relaxed font-sans">
              {activeStep.description}
            </p>

            {/* Grain Flow Transformation Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xs bg-[#EFE7D8]/50 border border-[#25221D]/10 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#806329]">
                  INPUT GRAIN STATUS
                </div>
                <div className="text-xs font-semibold text-[#25221D] font-mono">
                  {activeStep.inputGrain}
                </div>
              </div>

              <div className="p-4 rounded-xs bg-[#25221D] border border-[#B08A3E]/40 text-[#FBF8F1] space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#D6BC7A]">
                  OUTPUT DISCHARGE STATE
                </div>
                <div className="text-xs font-semibold text-[#FBF8F1] font-mono">
                  {activeStep.outputGrain}
                </div>
              </div>
            </div>

            {/* Quick Next/Prev controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev: number) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs border border-[#25221D]/20 bg-[#EFE7D8] disabled:opacity-30 hover:bg-[#EAE0CD] transition-colors"
              >
                ← Previous Stage
              </button>
              <button
                disabled={activeStepIndex === millingStepsData.length - 1}
                onClick={() => setActiveStepIndex((prev: number) => Math.min(millingStepsData.length - 1, prev + 1))}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs border border-[#B08A3E] bg-[#25221D] text-[#FBF8F1] disabled:opacity-30 hover:bg-[#38322A] transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </div>

          {/* Right: Key Engineering Metric Highlight (5 cols) */}
          <div className="lg:col-span-5 bg-[#EFE7D8]/60 border border-[#B08A3E]/30 rounded-xs p-8 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#25221D] text-[#D6BC7A] flex items-center justify-center border border-[#B08A3E]/40">
              <Gauge className="w-6 h-6" />
            </div>
            
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#806329] font-bold">
                EFFICIENCY BENCHMARK
              </span>
              <div className="font-serif text-5xl sm:text-6xl font-bold text-[#25221D] leading-none">
                {activeStep.keyMetric}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#635C52]">
                {activeStep.metricLabel}
              </div>
            </div>

            <p className="text-xs text-[#635C52] max-w-xs leading-relaxed pt-2 border-t border-[#25221D]/10">
              Calibrated under continuous test conditions at our Sodepur engineering facility to maintain low cracked grain ratios.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
