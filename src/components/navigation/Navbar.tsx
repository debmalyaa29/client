"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { businessData } from "@/data/business";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: (machineName?: string) => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track current section
      const sections = ["home", "business", "products", "solutions", "process", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Business", href: "#business", id: "business" },
    { label: "Products", href: "#products", id: "products" },
    { label: "Solutions", href: "#solutions", id: "solutions" },
    { label: "Milling Process", href: "#process", id: "process" },
    { label: "Installations", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#25221D]/10 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#home" className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]">
          <div className="w-9 h-9 rounded-xs bg-[#25221D] flex items-center justify-center border border-[#B08A3E]/40 text-[#F5F0E6] font-serif text-lg font-semibold transition-transform duration-300 group-hover:scale-105">
            C
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#25221D] uppercase">
              {businessData.name}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#806329]">
              Industrial Milling Systems • Sodepur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B08A3E] ${
                  isActive
                    ? "text-[#25221D] font-bold"
                    : "text-[#635C52] hover:text-[#25221D]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B08A3E] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${businessData.contact.phone.replace(/\s+/g, "")}`}
            className="hidden md:flex items-center gap-1.5 text-xs font-mono text-[#635C52] hover:text-[#25221D] px-2 py-1 transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#B08A3E]"
          >
            <Phone className="w-3.5 h-3.5 text-[#B08A3E]" />
            <span>{businessData.contact.phone}</span>
          </a>

          <button
            onClick={() => onOpenInquiry()}
            className="flex items-center gap-2 px-4 py-2 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest border border-[#B08A3E]/60 rounded-xs hover:bg-[#342F28] active:scale-[0.98] transition-all duration-200 hover:shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
          >
            <span>Inquire Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D6BC7A]" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#25221D] hover:text-[#B08A3E] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B08A3E] rounded-xs"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with smooth Framer Motion entrance & exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#F5F0E6]/98 backdrop-blur-md border-b border-[#25221D]/15 shadow-xl px-6 py-6 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1 divide-y divide-[#25221D]/10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-mono uppercase tracking-wider text-[#25221D] hover:text-[#B08A3E] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#B08A3E]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${businessData.contact.phone.replace(/\s+/g, "")}`}
                className="py-2.5 px-4 bg-[#EFE7D8] text-[#25221D] text-xs font-mono uppercase tracking-widest border border-[#25221D]/15 rounded-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08A3E]" />
                <span>Call {businessData.contact.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 bg-[#25221D] text-[#FBF8F1] text-xs font-mono uppercase tracking-widest border border-[#B08A3E] rounded-xs active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
              >
                <span>Consult Engineering Desk</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6BC7A]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
