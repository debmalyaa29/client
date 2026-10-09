"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, Check, MapPin, TrendingUp } from "lucide-react";

interface ProjectsSectionProps {
  onOpenInquiry: (projectName: string) => void;
}

export default function ProjectsSection({ onOpenInquiry }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#25221D]/15 pb-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold">
              {"// SECTION 08 • COMMISSIONED INSTALLATIONS"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              PROVEN PERFORMANCE <br />
              <span className="italic font-light text-[#806329]">COMMISSIONED CASE STUDIES.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#635C52] max-w-sm">
            Real commercial plants engineered, supplied, and tuned by Calcutta Agri Tech delivering measurable recovery gains.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-cursor="view"
              className="bg-[#FBF8F1] border border-[#25221D]/10 hover:border-[#B08A3E]/60 rounded-xs p-6 sm:p-10 shadow-xs transition-all duration-400 relative group overflow-hidden hover:-translate-y-0.5"
            >
              {/* Bottom Gold Reveal Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#B08A3E] transition-all duration-500 ease-out pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#B08A3E] bg-[#EFE7D8] px-2.5 py-1 rounded-xs">
                      {project.code}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#635C52] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#806329]" />
                      <span>{project.location}</span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#25221D] font-semibold border-l border-[#25221D]/20 pl-3">
                      {project.capacity}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#25221D] leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#635C52] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-[#25221D]">
                    <span className="font-mono uppercase font-bold text-[#806329]">
                      ENGINEERING SCOPE:
                    </span>
                    <p className="text-[#635C52] leading-relaxed">
                      {project.scope}
                    </p>
                  </div>
                </div>

                {/* Right Metrics & Equipment Stack (5 cols) */}
                <div className="lg:col-span-5 bg-[#EFE7D8]/50 border border-[#B08A3E]/30 rounded-xs p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#25221D]/10 pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#806329] flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-[#B08A3E]" />
                      <span>MEASURED YIELD GAIN</span>
                    </span>
                    <span className="font-serif text-xl font-bold text-[#25221D]">
                      {project.yieldGain}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#25221D] font-bold">
                      KEY COMMISSIONED RIGS:
                    </div>
                    <div className="space-y-1.5">
                      {project.equipment.map((eq, eIdx) => (
                        <div key={eIdx} className="flex items-center gap-2 text-xs text-[#635C52]">
                          <Check className="w-3.5 h-3.5 text-[#B08A3E] shrink-0" />
                          <span>{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => onOpenInquiry(`Case Study: ${project.title}`)}
                      className="w-full py-2.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest rounded-xs border border-[#B08A3E]/50 hover:bg-[#342F28] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Request Detailed Plant Audit</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D6BC7A]" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
