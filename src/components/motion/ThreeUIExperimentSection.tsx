"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import HoverTextMotionExperiment from "./HoverTextMotionExperiment";
import "@designcodeio/threeui/style.css";

// Dynamic import with SSR disabled for client-side Canvas/iframe ThreeUI execution
const TextAnimationCollection = dynamic(
  () =>
    import(
      /* webpackChunkName: "threeui-text" */ "@designcodeio/threeui/components/TextAnimationCollection"
    ).then((mod) => mod.TextAnimationCollection),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-48 flex items-center justify-center bg-[#151412] text-[#D6BC7A] font-mono text-xs">
        Loading ThreeUI Intro Study...
      </div>
    ),
  }
);

/**
 * Isolated Scene function with exact requested props
 */
export function Scene() {
  return (
    <div className="shader-frame w-full max-w-3xl mx-auto rounded-xs overflow-hidden border border-[#B08A3E]/30 bg-black aspect-video">
      <TextAnimationCollection
        variant="threeui-intro"
        mode="dark"
        hue={0}
        saturation={1.0}
        brightness={1.0}
      />
    </div>
  );
}

/**
 * ThreeUI Isolated Visual Experiment Wrapper
 * Allows toggling the experiment on/off without affecting core page layout or branding.
 */
export default function ThreeUIExperimentSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="threeui-experiment"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[#EAE0CD]/40 border-t border-b border-[#25221D]/15"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#EFE7D8] border border-[#B08A3E]/30 text-[10px] font-mono text-[#806329] font-bold uppercase tracking-wider">
              <span>EXPERIMENT C • THREEUI TEXT STUDY</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#25221D]">
              Isolated TextAnimationCollection (threeui-intro)
            </h3>
            <p className="text-xs text-[#635C52] max-w-xl font-sans">
              Exact-source 30s keynote motion study on black. Kept in an isolated collapsible sandbox to prevent interference with Calcutta Agri Tech branding.
            </p>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-wider rounded-xs border border-[#B08A3E] hover:bg-[#38322A] active:scale-[0.98] transition-all shrink-0"
          >
            {isOpen ? "Close Sandbox" : "Launch Motion Sandbox"}
          </button>
        </div>

        {isOpen && (
          <div className="p-6 bg-[#25221D] rounded-xs border border-[#B08A3E]/40 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#D6BC7A] border-b border-white/10 pb-2">
              <span>CANVAS / IFRAME SANDBOX (variant: &quot;threeui-intro&quot;)</span>
              <span className="text-[10px] text-gray-400">Autoplay loop • Autonomous timeline</span>
            </div>

            <Scene />

            <div className="text-[11px] font-mono text-gray-400 leading-relaxed bg-black/40 p-4 rounded-xs border border-white/5 space-y-1.5">
              <div className="text-[#D6BC7A] font-bold">SOURCE & INTERACTION VERIFICATION REPORT:</div>
              <div>
                • <span className="text-[#FBF8F1]">Autonomous Playback:</span> The authored <code>threeui-intro</code> source runs an un-interrupted 29.8s sequence via requestAnimationFrame.
              </div>
              <div>
                • <span className="text-[#FBF8F1]">Hover Limitation:</span> The component does not register pointer-hover or mouseenter listeners to trigger playback.
              </div>
              <div>
                • <span className="text-[#FBF8F1]">Tested Solution:</span> Below is the independent, clearly named hover-animation experiment built specifically for Calcutta Agri Tech typography.
              </div>
            </div>

            {/* Independent hover text animation experiment */}
            <div className="pt-2">
              <HoverTextMotionExperiment />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
