"use client";

import { useEffect } from "react";
import { initGsap, gsap } from "@/lib/animation/gsap-setup";
import { isReducedMotion } from "@/lib/animation/tokens";

export default function ScrollChoreography() {
  useEffect(() => {
    if (isReducedMotion()) return;

    initGsap();

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const travelDistance = isMobile ? 16 : 28;

    const ctx = gsap.context(() => {
      // ==========================================
      // 1. HERO SECTION CHOREOGRAPHY
      // ==========================================
      
      // Staggered line reveal for the editorial headline
      const heroLines = document.querySelectorAll<HTMLElement>(".hero-headline-line");
      if (heroLines.length > 0) {
        gsap.from(heroLines, {
          yPercent: 110,
          opacity: 0,
          duration: 1.0,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.15,
        });
      }

      // Hero corridor badge
      const heroBadge = document.querySelector<HTMLElement>(".hero-badge");
      if (heroBadge) {
        gsap.from(heroBadge, {
          y: -12,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.05,
        });
      }

      // Hero subtext
      const heroFade = document.querySelector<HTMLElement>(".hero-fade-in");
      if (heroFade) {
        gsap.from(heroFade, {
          y: travelDistance * 0.6,
          opacity: 0,
          duration: 0.85,
          delay: 0.35,
          ease: "power2.out",
        });
      }

      // Hero CTA row
      const heroCta = document.querySelector<HTMLElement>(".hero-cta");
      if (heroCta) {
        gsap.from(heroCta, {
          y: travelDistance * 0.7,
          opacity: 0,
          duration: 0.85,
          delay: 0.48,
          ease: "power2.out",
        });
      }

      // Hero metrics row
      const heroStats = document.querySelectorAll<HTMLElement>(".hero-stats > div");
      if (heroStats.length > 0) {
        gsap.from(heroStats, {
          y: travelDistance * 0.8,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          delay: 0.6,
          ease: "power2.out",
        });
      }

      // Hero founder cutout card entrance
      const heroFounderCard = document.querySelector<HTMLElement>(".hero-founder-card");
      if (heroFounderCard) {
        gsap.from(heroFounderCard, {
          y: travelDistance * 1.2,
          opacity: 0,
          duration: 1.0,
          delay: 0.35,
          ease: "power3.out",
        });

        // Parallax scrub on desktop for cinematic depth
        if (!isMobile) {
          gsap.to(heroFounderCard, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }

      // ==========================================
      // 2. NARRATIVE SECTION HEADER REVEALS
      // ==========================================
      const sectionHeaders = document.querySelectorAll<HTMLElement>("section:not(#home) h2");
      sectionHeaders.forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 86%",
            toggleActions: "play none none none",
          },
          y: travelDistance,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      });

      // Subtle expansion on section dividing borders
      const dividingLines = document.querySelectorAll<HTMLElement>("section .border-b, section .border-t");
      dividingLines.forEach((line) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          opacity: 0.3,
          duration: 0.9,
          ease: "power2.out",
        });
      });

      // ==========================================
      // 3. PRODUCT SHOWCASE TIMED ENTRANCES
      // ==========================================
      const productSelectors = document.querySelectorAll<HTMLElement>("#products .col-span-4 > button");
      if (productSelectors.length > 0) {
        gsap.from(productSelectors, {
          scrollTrigger: {
            trigger: "#products",
            start: "top 82%",
            toggleActions: "play none none none",
          },
          x: -16,
          opacity: 0,
          stagger: 0.08,
          duration: 0.75,
          ease: "power2.out",
        });
      }

      const productMainShowcase = document.querySelector<HTMLElement>("#products .col-span-8");
      if (productMainShowcase) {
        gsap.from(productMainShowcase, {
          scrollTrigger: {
            trigger: "#products",
            start: "top 82%",
            toggleActions: "play none none none",
          },
          x: 18,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      }

      // ==========================================
      // 4. TURNKEY ENGINEERING 4-PHASE & CAPACITY TIERS
      // ==========================================
      const turnkeyCards = document.querySelectorAll<HTMLElement>(".turnkey-stage-card");
      if (turnkeyCards.length > 0) {
        gsap.from(turnkeyCards, {
          scrollTrigger: {
            trigger: ".turnkey-stage-card",
            start: "top 86%",
            toggleActions: "play none none none",
          },
          y: travelDistance,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      const plantTierCards = document.querySelectorAll<HTMLElement>(".plant-tier-card");
      if (plantTierCards.length > 0) {
        gsap.from(plantTierCards, {
          scrollTrigger: {
            trigger: ".plant-tier-card",
            start: "top 86%",
            toggleActions: "play none none none",
          },
          y: travelDistance * 1.15,
          opacity: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
        });
      }

      // ==========================================
      // 5. PROCESS SECTION (8-STAGE RICE MILLING JOURNEY)
      // ==========================================
      const processStepButtons = document.querySelectorAll<HTMLElement>(".process-step-btn");
      if (processStepButtons.length > 0) {
        gsap.from(processStepButtons, {
          scrollTrigger: {
            trigger: "#process .process-steps-row",
            start: "top 88%",
            toggleActions: "play none none none",
          },
          scale: 0.86,
          opacity: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      const processDetailPanel = document.querySelector<HTMLElement>(".process-detail-panel");
      if (processDetailPanel) {
        gsap.from(processDetailPanel, {
          scrollTrigger: {
            trigger: processDetailPanel,
            start: "top 86%",
            toggleActions: "play none none none",
          },
          y: travelDistance,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      }

      // ==========================================
      // 6. COMMISSIONED CASE STUDIES STAGGER
      // ==========================================
      const projectCards = document.querySelectorAll<HTMLElement>("#projects .space-y-8 > div");
      if (projectCards.length > 0) {
        gsap.from(projectCards, {
          scrollTrigger: {
            trigger: "#projects .space-y-8",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: travelDistance * 1.1,
          opacity: 0,
          stagger: 0.14,
          duration: 0.85,
          ease: "power3.out",
        });
      }

      // ==========================================
      // 7. CONTACT SECTION REVEAL
      // ==========================================
      const contactForm = document.querySelector<HTMLElement>("#contact form");
      if (contactForm) {
        gsap.from(contactForm, {
          scrollTrigger: {
            trigger: contactForm,
            start: "top 84%",
            toggleActions: "play none none none",
          },
          y: travelDistance,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
