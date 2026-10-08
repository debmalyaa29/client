# Motion & Animation Architecture Audit
## Calcutta Agri Tech — Luxury Industrial Editorial Motion System

### 1. Current State Assessment
- **GSAP**: Installed (`^3.15.0`), ScrollTrigger available. Currently used minimally in ad-hoc locations; needs centralized orchestration.
- **Three.js**: Installed (`^0.186.1`), active in `EarthCanvas.tsx` and `MachineryCanvas.tsx`. Requires smoother scroll synchronization, cinematic camera choreography, and reduced-motion fallbacks.
- **Framer Motion**: Installed (`^14.0.0`). Strictly reserved for UI states (modals, drawers, micro-interactions).
- **Reduced Motion**: Native media query check exists in Three.js scenes, needs global integration across GSAP ScrollTriggers and cursor interactions.
- **Responsiveness**: Needs mobile-specific motion gating (disable custom cursor on touch/tablets, throttle particle counts, scale down camera travel).

### 2. Motion Standards & Easing Curves
- **Cinematic Entrance / Reveals**: `power3.out` (duration 1.2s - 1.6s) — intentional, industrial weight.
- **Micro-Interactions**: `power2.out` (duration 0.25s - 0.4s) — instantaneous tactile response.
- **Scroll Synchronization**: Scrubbed ScrollTriggers with `scrub: 1` or `scrub: 1.5` for cinematic inertia.
- **Palette & Lighting in Motion**: Ivory `#F5F0E6`, Warm Charcoal `#25221D`, Muted Brushed Gold `#B08A3E`.

### 3. Layer Separation Policy
- **GSAP & ScrollTrigger**: Drives page timelines, section choreography, text splits, parallax, and custom cursor.
- **Three.js / WebGL**: Drives 3D Earth, Machinery exploded assembly, and orbit mechanics.
- **Framer Motion**: Drives modal overlay opacity and mobile navigation drawer.
- **Never collide**: Framer Motion and GSAP must never target the same DOM elements or CSS properties.
