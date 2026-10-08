"use client";

import { useEffect } from "react";
import { initGsap, gsap, ScrollTrigger } from "@/lib/animation/gsap-setup";
import { isReducedMotion } from "@/lib/animation/tokens";

export default function ScrollChoreography() {
  useEffect(() => {
    if (isReducedMotion()) return;

    initGsap();

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const travelDistance = isMobile ? 16 : 30;

    const ctx = gsap.context(() => {
      // 1. Cinematic Section Header Reveals
      const sectionHeaders = document.querySelectorAll<HTMLElement>(
        "section:not(#home) h2"
      );

      sectionHeaders.forEach((header) => {
        const parent = header.closest("section");
        if (!parent) return;

        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: travelDistance * 0.8,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      });

      // 2. Section Dividing Lines Growth Animation
      const dividingLines = document.querySelectorAll<HTMLElement>(
        "section .border-b, section .border-t"
      );
      dividingLines.forEach((line) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0.2,
          duration: 1.0,
          ease: "power2.out",
        });
      });

      // 3. Grid Card Staggered Entrances (progressive subtle reveal without hiding content)
      // Preserved native visibility to ensure zero layout flashing or missing cards


      // 4. Case Study Staggered Appearance
      const projectCards = document.querySelectorAll<HTMLElement>(
        "#projects .space-y-8 > div"
      );
      projectCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // 5. Contact Section Elements Reveal
      const contactForm = document.querySelector<HTMLElement>(
        "#contact form"
      );
      if (contactForm) {
        gsap.from(contactForm, {
          scrollTrigger: {
            trigger: contactForm,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 30,
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
