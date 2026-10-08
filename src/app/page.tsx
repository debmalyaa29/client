"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import BusinessSection from "@/components/business/BusinessSection";
import ProductGallery from "@/components/products/ProductGallery";
import MachineExplorer from "@/components/products/MachineExplorer";
import SolutionsSection from "@/components/solutions/SolutionsSection";
import ProcessSection from "@/components/process/ProcessSection";
import WhyUsSection from "@/components/why-us/WhyUsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import InquiryModal from "@/components/contact/InquiryModal";

export default function HomePage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<string>("");

  const handleOpenInquiry = (machineName?: string) => {
    setSelectedMachine(machineName || "");
    setInquiryModalOpen(true);
  };

  const handleExplore3D = () => {
    const explorerEl = document.getElementById("explorer");
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#25221D] flex flex-col font-sans selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
      {/* Top Fixed Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Single-Story Cinematic Flow */}
      <main className="flex-1">
        {/* 1. Hero with 3D Earth & Founder */}
        <HeroSection onOpenInquiry={handleOpenInquiry} />

        {/* 2. Business Principles & Founder Philosophy */}
        <BusinessSection />

        {/* 3. Machinery Catalog with Horizontal Expanding Panels */}
        <ProductGallery
          onOpenInquiry={handleOpenInquiry}
          onExplore3D={handleExplore3D}
        />

        {/* 4. Interactive 3D Mechanical Explorer Rig (Destoner & CCD Sortex) */}
        <MachineExplorer onOpenInquiry={handleOpenInquiry} />

        {/* 5. Complete Rice Mill Turnkey Solutions */}
        <SolutionsSection onOpenInquiry={handleOpenInquiry} />

        {/* 6. 8-Stage Interactive Rice Milling Process */}
        <ProcessSection />

        {/* 7. Why Choose Us / Industrial Competence */}
        <WhyUsSection />

        {/* 8. Commissioned Project Installations & Case Studies */}
        <ProjectsSection onOpenInquiry={handleOpenInquiry} />

        {/* 9. Contact & Sodepur Engineering Desk Form */}
        <ContactSection />
      </main>

      {/* 10. Quiet Deep Charcoal Footer */}
      <Footer />

      {/* Global Interactive Technical Inquiry Modal */}
      <InquiryModal
        key={`${selectedMachine}-${inquiryModalOpen}`}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultMachine={selectedMachine}
      />
    </div>
  );
}
