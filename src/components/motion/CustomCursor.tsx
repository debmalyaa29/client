"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { isReducedMotion, isTouchDevice } from "@/lib/animation/tokens";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "link" | "explore" | "drag">("default");
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // High-precision responsive springs for dot and trailing ring
  const dotX = useSpring(rawX, { damping: 30, stiffness: 500 });
  const dotY = useSpring(rawY, { damping: 30, stiffness: 500 });

  const ringX = useSpring(rawX, { damping: 22, stiffness: 200 });
  const ringY = useSpring(rawY, { damping: 22, stiffness: 200 });

  useEffect(() => {
    if (isTouchDevice() || isReducedMotion()) return;
    setMounted(true);
    document.body.classList.add("custom-cursor-active");

    const onPointerMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onPointerLeave = () => setVisible(false);
    const onPointerEnter = () => setVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, select, textarea"
      ) as HTMLElement | null;

      if (!target) {
        setCursorState("default");
        return;
      }

      const cursorType = target.getAttribute("data-cursor");
      if (cursorType === "drag") {
        setCursorState("drag");
      } else if (cursorType === "explore") {
        setCursorState("explore");
      } else {
        setCursorState("link");
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    document.addEventListener("mouseenter", onPointerEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      document.removeEventListener("mouseenter", onPointerEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [rawX, rawY, visible]);

  if (!mounted) return null;

  return (
    <>
      {/* Primary Gold Focal Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: cursorState === "link" ? 0.7 : cursorState === "drag" || cursorState === "explore" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed top-0 left-0 z-9999 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B08A3E]"
      />

      {/* Secondary Muted Gold Spring-Following Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: cursorState === "link" ? 1.4 : cursorState === "drag" || cursorState === "explore" ? 2.2 : 1,
          backgroundColor:
            cursorState === "drag" || cursorState === "explore"
              ? "rgba(37, 34, 29, 0.85)"
              : cursorState === "link"
              ? "rgba(176, 138, 62, 0.1)"
              : "rgba(0, 0, 0, 0)",
          borderColor:
            cursorState === "drag" || cursorState === "explore"
              ? "#D6BC7A"
              : cursorState === "link"
              ? "#B08A3E"
              : "rgba(176, 138, 62, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="pointer-events-none fixed top-0 left-0 z-9998 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center text-[9px] font-mono tracking-widest text-[#FBF8F1] uppercase font-bold"
      >
        {cursorState === "drag" && "DRAG"}
        {cursorState === "explore" && "VIEW"}
      </motion.div>
    </>
  );
}
