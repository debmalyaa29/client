"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isReducedMotion } from "@/lib/animation/tokens";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isReducedMotion()) {
      setIsVisible(false);
      return;
    }

    // Measure document and hero asset readiness
    const startTime = performance.now();
    const minDisplayMs = 600; // Minimal intentional blink-free presentation

    const handleReady = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, minDisplayMs - elapsed);
      setTimeout(() => {
        setIsVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady, { once: true });
      return () => window.removeEventListener("load", handleReady);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="calcutta-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#24211B] text-[#FBF8F1] px-6 select-none"
        >
          {/* Architectural Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="max-w-md w-full flex flex-col items-center text-center space-y-6 relative z-10">
            {/* Monogram Brand Emblem */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-2"
            >
              <div className="w-12 h-12 rounded-xs bg-[#25221D] border border-[#B08A3E]/60 flex items-center justify-center font-serif text-2xl font-bold text-[#D6BC7A] mx-auto shadow-sm">
                C
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-[#FBF8F1] uppercase">
                Calcutta Agri Tech
              </h2>
            </motion.div>

            {/* Three Pillars Core Tenets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#B08A3E] uppercase font-bold"
            >
              <span>ENGINEERING.</span>
              <span>•</span>
              <span>PRECISION.</span>
              <span>•</span>
              <span>PROGRESS.</span>
            </motion.div>

            {/* Restrained Gold Progress Indicator */}
            <div className="w-full max-w-xs space-y-2 pt-2">
              <div className="w-full h-[2px] bg-[#38322A] rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  className="h-full bg-[#B08A3E] origin-left"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#EFE7D8]/50">
                <span>SODEPUR CORRIDOR</span>
                <span className="text-[#D6BC7A]">KOLKATA 700113</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
