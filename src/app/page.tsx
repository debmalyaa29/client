"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import CustomCursor from "@/components/motion/CustomCursor";
import LoadingScreen from "@/components/motion/LoadingScreen";
import ScrollChoreography from "@/components/motion/ScrollChoreography";
import HeroSection from "@/components/hero/HeroSection";
import BusinessSection from "@/components/business/BusinessSection";
import ProductGallery from "@/components/products/ProductGallery";
import SolutionsSection from "@/components/solutions/SolutionsSection";
import ProcessSection from "@/components/process/ProcessSection";
import WhyUsSection from "@/components/why-us/WhyUsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import ThreeUIExperimentSection from "@/components/motion/ThreeUIExperimentSection";
import Footer from "@/components/footer/Footer";
import InquiryModal from "@/components/contact/InquiryModal";

export default function HomePage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<string>("");

  const handleOpenInquiry = (machineName?: string) => {
    setSelectedMachine(machineName || "");
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#25221D] flex flex-col font-sans selection:bg-[#B08A3E] selection:text-[#FBF8F1]">
      {/* Cinematic Precision Brand Loader */}
      <LoadingScreen />

      {/* Desktop Precision GSAP Cursor */}
      <CustomCursor />

      {/* Cinematic Scroll Choreography Engine */}
      <ScrollChoreography />

      {/* Top Fixed Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Single-Story Cinematic Flow */}
      <main className="flex-1">
        {/* 1. Hero with 3D Earth & Founder */}
        <HeroSection onOpenInquiry={handleOpenInquiry} />

        {/* 2. Business Principles & Founder Philosophy */}
        <BusinessSection />

        {/* 3. Machinery Catalog with Horizontal Expanding Panels */}
        <ProductGallery onOpenInquiry={handleOpenInquiry} />

        {/* 4. Complete Rice Mill Turnkey Solutions */}
        <SolutionsSection onOpenInquiry={handleOpenInquiry} />

        {/* 5. 8-Stage Interactive Rice Milling Process */}
        <ProcessSection />

        {/* 6. Why Choose Us / Industrial Competence */}
        <WhyUsSection />

        {/* 7. Commissioned Project Installations & Case Studies */}
        <ProjectsSection onOpenInquiry={handleOpenInquiry} />

        {/* 8. Contact & Sodepur Engineering Desk Form */}
        <ContactSection />

        {/* Experiment C: Isolated ThreeUI Motion & Hover Typography Experiment */}
        <ThreeUIExperimentSection />
      </main>

      {/* 9. Quiet Deep Charcoal Footer */}
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
