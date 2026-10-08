# Calcutta Agri Tech — Design System Specification

> Visual Identity: **Luxury Industrial Editorial**  
> Target Persona: Commercial Rice Millers, Agro-Processing Executives, Plant Engineers across Eastern India & Bengal.  
> Taste Skill Configuration: `DESIGN_VARIANCE: 6` | `MOTION_INTENSITY: 4` | `VISUAL_DENSITY: 4`

---

## 1. Brand Essence & Foundations

Calcutta Agri Tech marries heavy-gauge industrial engineering reliability with an editorial, architectural aesthetic. The experience avoids generic tech-SaaS cliches (e.g. purple mesh gradients, rounded pill cards, frantic particle loops) in favor of precision metallurgy, architectural grids, warm ivory surfaces, and restrained gold accents.

---

## 2. Color Palette & Semantic Roles

| Token | Hex | Role & Usage |
|---|---|---|
| **Ivory Surface** | `#F5F0E6` | Primary page canvas; editorial warmth; subtle architectural grid backdrops |
| **Warm White** | `#FBF8F1` | Primary card container surface; elevated reading plane; input backgrounds |
| **Beige Secondary** | `#EFE7D8` | Badges, secondary button fills, subtle section alternations, table headers |
| **Charcoal Warm** | `#25221D` | Primary text; prominent CTA buttons; heavy contrast cards; header monogram |
| **Muted Gold** | `#B08A3E` | Primary accent; precision borders, active indicators, engineering markers |
| **Deep Gold** | `#806329` | Editorial italic accents; secondary labels; high-contrast text on ivory |
| **Light Gold** | `#D6BC7A` | Glow highlights; dark card badges; icons on charcoal surfaces |
| **Border Neutral** | `rgba(37, 34, 29, 0.12)` | Hairline dividers, grid borders, architectural framing lines |

---

## 3. Typography Hierarchy

Fonts loaded via `@next/font/google`:
- **Display & Headings**: `Cormorant Garamond` (`--font-serif`) — Italianate high-contrast serif with classic foundry proportion.
- **Body & Technical Controls**: `Plus Jakarta Sans` (`--font-sans`) — Crisp geometric sans with high x-height for legible industrial specs.
- **Technical Monospace**: System Monospace (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`) — For coordinates, machine capacities, process stages, and section indexing.

### Type Scale
- **Display Hero H1**: `text-4xl sm:text-5xl md:text-6xl xl:text-7xl` (`leading-[1.08]`, `tracking-tight`, `font-serif font-normal`)
- **Section Heading H2**: `text-3xl sm:text-4xl md:text-5xl` (`leading-tight`, `font-serif font-normal text-[#25221D]`)
- **Card Heading H3**: `text-lg sm:text-xl` (`font-serif font-bold text-[#25221D] leading-snug`)
- **Body Copy**: `text-sm sm:text-base` (`font-sans leading-relaxed text-[#635C52] max-w-prose`)
- **Section Super-Title**: `text-xs font-mono uppercase tracking-widest text-[#806329] font-semibold`
- **Data / Metrics**: `text-2xl sm:text-3xl font-serif font-bold text-[#25221D]` with `text-xs font-mono text-[#806329]` unit tags

---

## 4. Spacing, Grids & Container Widths

- **Max Container Width**: `max-w-7xl mx-auto w-full` (1280px constraint).
- **Horizontal Margins**: `px-4 sm:px-6 lg:px-8`
- **Section Vertical Rhythm**: `py-20 lg:py-28` for primary sections, `py-16` for transitional bands.
- **Architectural Grid**: 48px × 48px linear gradient grid (`rgba(37, 34, 29, 0.04) 1px`).

---

## 5. UI Elements & Surface Treatments

### Corners & Radii
- **Strictly Small Radii**: `rounded-xs` (0.125rem / 2px) or `rounded-sm` (0.25rem / 4px).
- **No pill shapes** (`rounded-full` only on circular icon badges and status dots).
- Communicates machined sheet-metal precision and blueprints.

### Borders & Dividers
- Hairline architectural borders: `border border-[#25221D]/10` or `border-[#B08A3E]/30`.
- Card hover states: transition border to `border-[#B08A3E]/60` with smooth 200–300ms easing.

### Shadows
- Restrained, warm-tinted shadows: `shadow-xs`, `shadow-sm`, max `shadow-md` on active hero/popular cards.
- Zero harsh pure black drop shadows.

### Buttons & CTAs
1. **Primary Industrial Button**:
   - `bg-[#25221D] text-[#FBF8F1] border border-[#B08A3E] hover:bg-[#342F28] transition-all`
   - Monospace uppercase label, tracking-widest, with trailing arrow icon.
2. **Secondary Architectural Button**:
   - `bg-[#EFE7D8]/80 text-[#25221D] border border-[#25221D]/20 hover:bg-[#EAE0CD]`
3. **Gold Highlight Button** (e.g. Most Commissioned Tier):
   - `bg-[#B08A3E] text-[#25221D] border border-[#D6BC7A] hover:bg-[#D6BC7A] font-bold`

---

## 6. Motion & Interaction Principles

1. **Safety First**: Animations must NEVER hide content behind unresolved `opacity: 0` states. Progressive enhancement only.
2. **Reduced Motion**: All motion queries check `prefers-reduced-motion` and disable transforms/delays immediately.
3. **Restrained Transitions**: Durations between 200ms and 450ms, using subtle ease curves (`cubic-bezier(0.16, 1, 0.3, 1)` or `easeOut`).
4. **Touch Devices**: Custom cursors disable completely on `pointer: coarse` or mobile viewports.

---

## 7. Strict Do's and Don'ts

### DO
- ✅ Preserve the exact restored hero headline: `ENGINEERING THE <br/> FUTURE OF <br/> RICE MILLING.`
- ✅ Preserve all 4 lifecycle phases and all 3 plant capacity tiers visible at all times.
- ✅ Maintain verified Calcutta Agri Tech business facts (Debabrata Dey, Sodepur Kolkata).
- ✅ Keep high contrast between charcoal type and warm ivory backgrounds.
- ✅ Use subtle, precise micro-interactions.

### DON'T
- ❌ Do NOT use generic purple/blue gradients or dark SaaS dashboard themes.
- ❌ Do NOT use pill-shaped cards or generic round floating widgets.
- ❌ Do NOT reintroduce scroll-triggered opacity locks that make cards blank.
- ❌ Do NOT introduce large arbitrary full-page component libraries.
- ❌ Do NOT break responsive readability on 375px–1440px viewports.
