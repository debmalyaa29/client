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
      <LoadingScreen />
      <CustomCursor />
      <ScrollChoreography />
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main id="main-content" className="flex-1">
        <HeroSection onOpenInquiry={handleOpenInquiry} />
        <BusinessSection />
        <ProductGallery onOpenInquiry={handleOpenInquiry} />
        <SolutionsSection onOpenInquiry={handleOpenInquiry} />
        <ProcessSection />
        <WhyUsSection />
        <ProjectsSection onOpenInquiry={handleOpenInquiry} />
        <ContactSection />
      </main>

      <Footer />

      <InquiryModal
        key={`${selectedMachine}-${inquiryModalOpen}`}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultMachine={selectedMachine}
      />
    </div>
  );
}
