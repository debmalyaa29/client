/**
 * Calcutta Agri Tech — Motion Tokens & Guidelines
 * Luxury Industrial Editorial
 */

export const BRAND_COLORS = {
  ivory: "#F5F0E6",
  ivoryLight: "#FBF8F1",
  ivorySecondary: "#EFE7D8",
  charcoal: "#25221D",
  gold: "#B08A3E",
  goldLight: "#D6BC7A",
  goldDark: "#806329",
  atlasNavy: "#0E1D61", // Deep Atlas Navy (#0E1D61) — restrained 4th accent
  atlasNavyMuted: "rgba(14, 29, 97, 0.08)",
  atlasNavyBorder: "rgba(14, 29, 97, 0.22)",
} as const;

export const MOTION_EASINGS = {
  // Primary editorial deceleration: solid, heavy, expensive
  editorial: "power3.out",
  // Cinematic camera and panoramic motion
  cinematic: "power2.inOut",
  // Crisp micro-interactions (buttons, hovers)
  tactile: "power2.out",
  // Exponential reveal for typography and masks
  reveal: "expo.out",
} as const;

export const MOTION_DURATIONS = {
  instant: 0.15,
  fast: 0.3,
  standard: 0.6,
  relaxed: 1.0,
  cinematic: 1.6,
  panoramic: 2.4,
} as const;

/**
 * Check whether the user's system prefers reduced motion.
 */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Check whether the user is on a touch or mobile pointer device.
 */
export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}
