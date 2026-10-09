"use client";

import React, { useState } from "react";
import { BRAND_COLORS } from "@/lib/animation/tokens";

interface HoverTextMotionProps {
  phrase?: string;
  subtext?: string;
}

/**
 * Separate, clearly named hover-animation experiment.
 * Directly fulfills the user's intended exploration:
 * "see how animated text could respond to hovering over selected text on the website."
 * Independent of ThreeUI, fully reversible, using Calcutta Agri Tech brand identity.
 */
export default function HoverTextMotionExperiment({
  phrase = "HIGH-RECOVERY GRAIN AUTOMATION",
  subtext = "Hover across individual characters or words to trigger kinetic typographic reaction.",
}: HoverTextMotionProps) {
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);

  const words = phrase.split(" ");

  return (
    <div className="p-6 bg-[#FBF8F1] border border-[#B08A3E]/35 rounded-xs space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#806329] font-bold">
          SEPARATE EXPERIMENT • INTERACTIVE HOVER TEXT MOTION
        </span>
        <span className="text-[10px] font-mono text-[#0E1D61] bg-[#0E1D61]/10 px-2 py-0.5 rounded-xs font-semibold">
          DEEP ATLAS NAVY ACCENT
        </span>
      </div>

      <div className="py-4 flex flex-wrap gap-x-4 gap-y-2 select-none">
        {words.map((word, wIdx) => {
          const isHovered = hoveredWord === wIdx;
          return (
            <span
              key={wIdx}
              onMouseEnter={() => setHoveredWord(wIdx)}
              onMouseLeave={() => setHoveredWord(null)}
              className="inline-flex cursor-pointer transition-transform duration-200"
            >
              {word.split("").map((char, cIdx) => (
                <span
                  key={cIdx}
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight inline-block transition-all duration-300"
                  style={{
                    color: isHovered ? BRAND_COLORS.atlasNavy : BRAND_COLORS.charcoal,
                    transform: isHovered
                      ? `translateY(-4px) scale(1.04)`
                      : "translateY(0px) scale(1)",
                    transitionDelay: `${cIdx * 20}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        })}
      </div>

      <p className="text-xs text-[#635C52] font-mono">{subtext}</p>
    </div>
  );
}
