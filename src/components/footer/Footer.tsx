"use client";

import React from "react";
import Link from "next/link";
import { businessData } from "@/data/business";
import { ShieldCheck } from "lucide-react";
import { triggerOpenCookiePreferences } from "@/components/compliance/CookieConsentBanner";

export default function Footer() {
  return (
    <footer className="bg-[#24211B] text-[#F5F0E6] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#B08A3E]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F5F0E6]/10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-[#F5F0E6] text-[#24211B] flex items-center justify-center font-serif text-lg font-bold border border-[#B08A3E]">
                C
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#F5F0E6]">
                {businessData.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#AFA698] max-w-sm leading-relaxed font-sans">
              Founded and led by Debabrata Dey. Premier engineering of turnkey rice mill plants, high-efficiency gravity destoners, and optical CCD color sorters.
            </p>

            <div className="pt-2 text-xs font-mono text-[#D6BC7A]">
              ENGINEERED & ASSEMBLED IN SODEPUR, KOLKATA
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-xs uppercase tracking-wider text-[#B08A3E] font-bold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#AFA698]">
              <li>
                <Link href="#home" className="hover:text-[#F5F0E6] transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">Home</Link>
              </li>
              <li>
                <Link href="#business" className="hover:text-[#F5F0E6] transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">Business Pillars</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#F5F0E6] transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">Machinery Catalog</Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-[#F5F0E6] transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">Turnkey Solutions</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-xs uppercase tracking-wider text-[#B08A3E] font-bold">
              GOVERNANCE & POLICIES
            </span>
            <ul className="space-y-2 text-[#AFA698]">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#F5F0E6] transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#F5F0E6] transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-[#F5F0E6] transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]">
                  Cookie & Storage Policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => triggerOpenCookiePreferences()}
                  className="text-[#D6BC7A] hover:underline flex items-center gap-1.5 transition-colors focus-visible:ring-1 focus-visible:ring-[#D6BC7A]"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Cookie Preferences</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#AFA698]">
          <div>
            © 2026 {businessData.name}. All industrial rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span>Founder: Debabrata Dey</span>
            <span>•</span>
            <span>Sodepur, Kolkata 700113</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
