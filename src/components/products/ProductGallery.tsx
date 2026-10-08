"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { productsData } from "@/data/products";
import { ArrowUpRight, ChevronRight, Check } from "lucide-react";
import { isReducedMotion } from "@/lib/animation/tokens";

interface ProductGalleryProps {
  onOpenInquiry: (machineName: string) => void;
}

export default function ProductGallery({ onOpenInquiry }: ProductGalleryProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>(productsData[0].id);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const selectedIndex = productsData.findIndex((p) => p.id === selectedProductId);
  const selectedProduct = productsData[selectedIndex] || productsData[0];

  const handleSelectProduct = (id: string) => {
    if (id === selectedProductId) return;
    if (showcaseRef.current && !isReducedMotion()) {
      gsap.fromTo(
        showcaseRef.current,
        { opacity: 0.35, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
    setSelectedProductId(id);
  };

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#25221D]/15 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold">
              {"// SECTION 03 • MACHINERY LINEUP"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#25221D] leading-tight">
              PRECISION GRAIN PROCESSING <br />
              <span className="italic font-light text-[#806329]">MACHINERY CATALOG.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#635C52] max-w-sm">
            High-yield equipment engineered for Indian paddy varieties, minimizing broken ratios while maximizing operational throughput.
          </p>
        </div>

        {/* Desktop Interactive Expanding Gallery */}
        <div className="hidden lg:grid grid-cols-12 gap-6 min-h-[580px] items-stretch">
          
          {/* Left Column: Vertical Product Selectors (4 cols) */}
          <div className="col-span-4 flex flex-col gap-2">
            {productsData.map((prod, idx) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <button
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod.id)}
                  className={`text-left p-4 rounded-xs border transition-all duration-200 flex items-center justify-between group active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E] ${
                    isSelected
                      ? "bg-[#25221D] text-[#FBF8F1] border-[#B08A3E] border-l-4 border-l-[#B08A3E] shadow-xs translate-x-1"
                      : "bg-[#FBF8F1] text-[#25221D] border-[#25221D]/10 hover:border-[#B08A3E]/40 hover:bg-[#EFE7D8]/60"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono tracking-widest tabular-nums ${isSelected ? "text-[#D6BC7A]" : "text-[#806329]"}`}>
                        0{idx + 1} {"//"} {prod.modelCode}
                      </span>
                    </div>
                    <div className="font-serif text-base font-semibold leading-tight">
                      {prod.name}
                    </div>
                    <div className={`text-xs ${isSelected ? "text-[#EFE7D8]/70" : "text-[#635C52]"}`}>
                      {prod.category}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#D6BC7A] translate-x-1" : "text-gray-400 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Expanded Product Showcase (8 cols) */}
          <div
            ref={showcaseRef}
            className="col-span-8 bg-[#FBF8F1] border border-[#B08A3E]/30 rounded-xs p-8 flex flex-col justify-between shadow-xs relative overflow-hidden"
          >
            {/* Top Gold Progress Indicator */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#25221D]/10">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#806329]">
                <span className="font-bold">SPEC SHEET {selectedIndex + 1} OF {productsData.length}</span>
              </div>
              <div className="w-36 h-1 bg-[#25221D]/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#B08A3E] transition-all duration-400 ease-out"
                  style={{ width: `${((selectedIndex + 1) / productsData.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Product Visual */}
              <div data-cursor="explore" className="md:col-span-6 relative h-[320px] rounded-xs bg-[#EFE7D8]/40 border border-[#25221D]/10 flex items-center justify-center p-6 overflow-hidden group">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                    sizes="400px"
                    priority
                  />
                </div>
                <div className="absolute top-3 left-3 bg-[#25221D]/90 text-[#FBF8F1] text-[10px] font-mono px-2 py-1 rounded-xs tracking-wider">
                  MODEL: {selectedProduct.modelCode}
                </div>
              </div>

              {/* Product Technical Details */}
              <div className="md:col-span-6 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B08A3E] font-semibold">
                  {selectedProduct.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#25221D] leading-tight">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#635C52] leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Key Technical Specs */}
                <div className="space-y-2 pt-2 border-t border-[#25221D]/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#25221D] font-bold">
                    SPECIFICATIONS SUMMARY
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {selectedProduct.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-xs py-1 border-b border-[#25221D]/5 font-mono">
                        <span className="text-[#635C52]">{spec.label}</span>
                        <span className="font-semibold text-[#25221D] tabular-nums">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-6 mt-6 border-t border-[#25221D]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {selectedProduct.features.slice(0, 2).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-1.5 text-xs text-[#25221D] font-sans">
                    <Check className="w-3.5 h-3.5 text-[#B08A3E] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenInquiry(selectedProduct.name)}
                  className="px-5 py-2.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest border border-[#B08A3E] rounded-xs hover:bg-[#38322A] active:scale-[0.98] transition-all flex items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                >
                  <span>Inquire Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D6BC7A]" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden flex flex-col gap-4">
          {productsData.map((prod, idx) => {
            const isExpanded = prod.id === selectedProductId;
            return (
              <div
                key={prod.id}
                className="bg-[#FBF8F1] border border-[#25221D]/15 rounded-xs overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProductId(isExpanded ? "" : prod.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#806329] uppercase tabular-nums">
                      0{idx + 1} {"//"} {prod.modelCode}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#25221D]">
                      {prod.name}
                    </h4>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-[#806329] transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-[#25221D]/10 space-y-4">
                    <div className="relative h-48 w-full bg-[#EFE7D8]/40 rounded-xs flex items-center justify-center p-4">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <p className="text-xs text-[#635C52] leading-relaxed">
                      {prod.description}
                    </p>
                    <div className="space-y-1">
                      {prod.specs.map((s, si) => (
                        <div key={si} className="flex justify-between text-[11px] font-mono py-1 border-b border-[#25221D]/5">
                          <span className="text-[#635C52]">{s.label}</span>
                          <span className="font-semibold text-[#25221D] tabular-nums">{s.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => onOpenInquiry(prod.name)}
                        className="flex-1 py-2.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-wider rounded-xs active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D6BC7A]" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
