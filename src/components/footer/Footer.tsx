"use client";

import React from "react";
import { businessData } from "@/data/business";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#24211B] text-[#F5F0E6] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#B08A3E]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F5F0E6]/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-[#F5F0E6] text-[#24211B] flex items-center justify-center font-serif text-lg font-bold border border-[#B08A3E]">
                C
              </div>
              <span className="font-serif text-xl font-bold uppercase tracking-tight text-[#F5F0E6]">
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

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-[11px] uppercase tracking-widest text-[#B08A3E] font-bold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#AFA698]">
              <li>
                <a href="#home" className="hover:text-[#F5F0E6] transition-colors">Home</a>
              </li>
              <li>
                <a href="#business" className="hover:text-[#F5F0E6] transition-colors">Business Pillars</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#F5F0E6] transition-colors">Machinery Catalog</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F5F0E6] transition-colors">Turnkey Solutions</a>
              </li>
            </ul>
          </div>

          {/* Process & Case Studies (2 cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-[11px] uppercase tracking-widest text-[#B08A3E] font-bold">
              OPERATIONS
            </span>
            <ul className="space-y-2 text-[#AFA698]">
              <li>
                <a href="#process" className="hover:text-[#F5F0E6] transition-colors">8-Stage Process</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F5F0E6] transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F0E6] transition-colors">Plant Inspection</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F0E6] transition-colors">Spares Depot</a>
              </li>
            </ul>
          </div>

          {/* Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs text-[#AFA698]">
            <span className="text-[11px] uppercase tracking-widest text-[#B08A3E] font-bold">
              SODEPUR OFFICE
            </span>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6BC7A] shrink-0 mt-0.5" />
                <span>{businessData.contact.address}, {businessData.contact.city} {businessData.contact.pincode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D6BC7A] shrink-0" />
                <a href={`tel:${businessData.contact.phone.replace(/\s+/g, "")}`} className="hover:text-[#F5F0E6]">
                  {businessData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D6BC7A] shrink-0" />
                <a href={`mailto:${businessData.contact.email}`} className="hover:text-[#F5F0E6]">
                  {businessData.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Quiet Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#AFA698]">
          <div>
            © 2026 {businessData.name}. All industrial rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Founder: Debabrata Dey</span>
            <span>•</span>
            <span>Sodepur, Kolkata 700113</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
