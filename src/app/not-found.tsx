import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#25221D] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-grid-pattern selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
      {/* Subtle Ambient Gold Lighting Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#B08A3E]/6 blur-[130px] pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        
        {/* Heritage Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-[#EFE7D8] border border-[#B08A3E]/30 text-xs font-mono text-[#806329] font-semibold">
          <Compass className="w-3.5 h-3.5 text-[#B08A3E] animate-spin" style={{ animationDuration: "12s" }} />
          <span>CALIBRATION OFFSET // STATUS 404</span>
        </div>

        {/* Large Restrained 404 Display */}
        <div className="space-y-2">
          <div className="font-serif text-8xl sm:text-9xl font-light tracking-tighter text-[#25221D] leading-none select-none">
            404
          </div>
          <div className="h-[2px] w-24 bg-[#B08A3E] mx-auto rounded-full" />
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#25221D] tracking-tight pt-2 uppercase">
            The Path Does Not Exist.
          </h1>
        </div>

        {/* Editorial Subtitle */}
        <blockquote className="text-sm sm:text-base text-[#635C52] font-sans italic max-w-md mx-auto leading-relaxed border-l-2 border-[#B08A3E]/40 pl-4 text-left">
          &ldquo;Even the most precise grain recovery systems sometimes lead to the wrong coordinates.&rdquo;
        </blockquote>

        {/* Technical Coordinate Stamp */}
        <div className="text-[11px] font-mono text-[#806329] tracking-widest uppercase">
          CALCUTTA AGRI TECH • SODEPUR INDUSTRIAL CORRIDOR • KOLKATA 700113
        </div>

        {/* Return Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest border border-[#B08A3E] rounded-xs hover:bg-[#38322A] transition-all duration-200 shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-[#D6BC7A] transition-transform group-hover:-translate-x-1" />
            <span>Return to Plant Overview</span>
          </Link>
        </div>

      </div>

      {/* Bottom Editorial Footer Marker */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-[10px] font-mono text-[#635C52] tracking-wider uppercase">
        Calcutta Agri Tech © 2026 • Precision Rice Milling Systems
      </div>
    </main>
  );
}
