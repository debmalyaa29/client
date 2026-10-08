"use client";

import { useEffect } from "react";
import { initGsap, gsap, ScrollTrigger } from "@/lib/animation/gsap-setup";
import { isReducedMotion } from "@/lib/animation/tokens";

export default function ScrollChoreography() {
  useEffect(() => {
    if (isReducedMotion()) return;

    initGsap();

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
          y: 28,
          opacity: 0,
          duration: 0.9,
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

      // 3. Grid Card Staggered Entrances
      const cardContainers = [
        "#business .grid.grid-cols-1.md\\:grid-cols-2",
        "#solutions .grid.grid-cols-1.lg\\:grid-cols-3",
        "#why-us .grid.grid-cols-1.md\\:grid-cols-2",
      ];

      cardContainers.forEach((selector) => {
        const container = document.querySelector<HTMLElement>(selector);
        if (!container || !container.children.length) return;

        gsap.from(container.children, {
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 35,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        });
      });

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
