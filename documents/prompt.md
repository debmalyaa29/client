 # MASTER PROMPT — PREMIUM CINEMATIC RICE MILL WEBSITE

You are an **award-winning digital product designer, creative director, 3D web experience designer, and elite frontend engineer**.

Build a premium, cinematic, founder-led website for a businessman who supplies **rice mill machinery and complete rice mill solutions**.

This must NOT look like a generic business website, template, SaaS landing page, AI-generated portfolio, or ordinary machinery catalogue.

The target feeling is:

> **Luxury Industrial Editorial + Cinematic 3D + Personal Brand**

The visitor should immediately feel:

> “This is an established, serious, technically capable rice-mill machinery business.”

The website should feel like a combination of a high-end industrial brand, premium editorial website, cinematic product presentation, and modern interactive 3D experience.

---

# 1. CORE DESIGN DIRECTION

## Color system

The entire website must be based around:

### Primary Ivory
`#F5F0E6`

### Light Ivory
`#FBF8F1`

### Secondary Ivory
`#EFE7D8`

### Soft Warm Ivory
`#F7F2E8`

### Dark Ivory
`#EAE0CD`

### Warm Charcoal
`#25221D`

### Deep Charcoal
`#24211B`

### Primary Gold
`#B08A3E`

### Light Gold
`#D6BC7A`

### Dark Gold
`#806329`

Do NOT use bright yellow or cheap-looking metallic gold.

Gold must feel like **brushed brass / muted luxury gold**.

## Important color rule

Do NOT make the entire website gold.

Gold is an accent.

Use gold for:

- thin dividers
- small labels
- numbers
- icons
- borders
- active navigation
- hover states
- buttons
- progress indicators
- subtle 3D lighting
- decorative lines
- small highlights

The majority of the interface should remain ivory, warm white and charcoal.

---

# 2. DESIGN PERSONALITY

The website should feel:

- premium
- elegant
- industrial
- mature
- cinematic
- sophisticated
- technical
- trustworthy
- minimal
- editorial
- modern

Avoid:

- generic Bootstrap layouts
- generic cards everywhere
- excessive rounded cards
- neon cyberpunk aesthetics
- excessive gradients
- excessive glassmorphism
- excessive particles
- excessive gold
- huge glowing buttons
- random 3D objects
- unnecessary animations
- "AI generated website" aesthetics
- dark futuristic gaming aesthetics

The design should have confidence and restraint.

---

# 3. WEBSITE STRUCTURE

Build the following experience:

1. Navigation
2. Cinematic 3D Hero
3. Founder introduction
4. Business details
5. Top-selling products
6. Complete rice mill solution
7. Interactive rice-milling process
8. Why choose us
9. Projects / installations
10. Contact
11. Footer

Do NOT create a separate:

- Founder Story section
- Founder CTA section

The founder should be strongly present in the Hero, but the website should remain focused on the business and machinery.

---

# 4. NAVIGATION

Create a minimal premium navigation.

Desktop:

LOGO / BUSINESS NAME

HOME  
BUSINESS  
PRODUCTS  
SOLUTIONS  
PROJECTS  
CONTACT

Right side:

CONTACT US

Navigation should initially feel integrated with the hero.

On scroll:

- subtle ivory background
- slight blur
- thin border
- muted gold active indicator
- smooth transition

Do not create a huge navbar.

Mobile navigation should be elegant and minimal.

---

# 5. HERO — SIGNATURE EXPERIENCE

The hero is the most important section.

This must NOT be a normal hero with a rectangular image and text.

Create a cinematic 3D composition.

## Main elements

- 3D Earth
- Founder portrait/photo
- large editorial typography
- subtle gold lighting
- atmospheric background
- cinematic depth
- scroll indicator

Example headline:

RICE MILL MACHINERY  
BUILT FOR PERFORMANCE.

or:

ENGINEERING THE FUTURE  
OF RICE MILLING.

Do not blindly use these exact words if better business-specific copy is available.

## Founder

The founder's image should be visually prominent.

Do not simply place it inside a card.

Use the photograph as a composition element.

Possible treatment:

- cutout portrait
- large editorial image
- subtle mask
- soft atmospheric lighting
- gold rim lighting
- layered depth

The founder should feel like the face of the business.

---

# 6. 3D EARTH

Create a premium interactive 3D Earth.

The Earth should communicate:

- global reach
- engineering
- connectivity
- scale
- modern technology

Do NOT use a cheap-looking Google Earth clone.

Visual style:

- warm ivory/cream globe
- charcoal land masses
- subtle muted-gold longitude/latitude lines
- soft atmospheric glow
- restrained particles
- cinematic lighting
- very slow rotation

Avoid bright blue oceans.

The Earth should belong to the Ivory + Gold visual system.

## Earth animation

Initial state:

Earth slowly rotates.

On scroll:

Earth responds to the camera.

Possible sequence:

EARTH  
↓  
INDIA  
↓  
BUSINESS  
↓  
FOUNDER  
↓  
MACHINERY

The camera should gradually move toward India and then transition into the industrial story.

Do not make the animation too fast.

---

# 7. CINEMATIC STORYTELLING

The website should feel like one continuous cinematic journey.

The recommended narrative:

EARTH  
↓
INDIA  
↓
FOUNDER  
↓
BUSINESS  
↓
RICE MILL  
↓
MACHINE  
↓
COMPONENTS  
↓
PROCESS  
↓
PROJECTS  
↓
CONTACT

Do not make each section feel disconnected.

Use transitions between sections.

---

# 8. GOOGLE FLOW

Use Google Flow / cinematic AI-generated visuals for:

- hero cinematic background concepts
- rice-field atmosphere
- rice grain macro shots
- industrial environments
- machinery cinematic shots
- factory atmosphere
- product concept visuals
- installation/project atmosphere

Do NOT use generated video where an interactive 3D object is more appropriate.

Use:

VIDEO = cinematic storytelling

3D = interaction

GSAP = choreography

---

# 9. BLENDER

Use Blender for custom 3D assets and animations.

Blender should be the primary authoring tool for custom machinery.

Use it for:

- rice mill machinery
- custom machine components
- internal mechanisms
- exploded-view animations
- product rotations
- camera sequences
- materials
- lighting
- optimization

Export optimized:

`.glb`

or

`.gltf`

Use realistic industrial materials.

Models should be optimized for the web.

Do not ship unnecessarily huge models.

---

# 10. MESHY

Use Meshy as an AI-assisted 3D asset creation tool.

Workflow:

Meshy  
→ concept/model  
→ Blender  
→ cleanup  
→ retopology  
→ materials  
→ optimization  
→ animation  
→ GLB  
→ React Three Fiber

Do NOT blindly place raw Meshy models directly into production.

The final assets must be cleaned and optimized.

---

# 11. 3D WEB ENGINE

Use:

**React Three Fiber + Three.js + Drei**

as the primary web 3D stack.

Architecture:

React  
→ React Three Fiber  
→ Three.js  
→ Drei

Use React Three Fiber for:

- Earth
- machinery
- 3D product scenes
- camera
- lighting
- model interaction
- 3D transitions

Use Drei where appropriate for reusable Three.js/R3F utilities.

---

# 12. DO NOT DUPLICATE 3D ENGINES

Do NOT use Babylon.js, Three.js and Spline to render the same experience.

Primary engine:

**React Three Fiber + Three.js**

Babylon.js is optional only if a specific feature is demonstrably better implemented with Babylon.

Spline is optional for isolated scenes where it provides a meaningful advantage.

Do not add libraries just because they are available.

Performance and maintainability are more important than library count.

---

# 13. SPLINE

Spline may be used for isolated interactive 3D scenes if it is significantly faster or better than building that scene in R3F.

However:

Do NOT create a Spline scene and a Three.js scene for the same object.

Choose the appropriate technology per experience.

---

# 14. THEATRE.JS

Theatre.js may be used for authoring complex cinematic 3D sequences.

Possible uses:

- camera animation
- Earth rotation
- machinery animation
- exploded product views
- cinematic camera paths

IMPORTANT:

Do not allow Theatre.js and GSAP to simultaneously control the exact same property.

Use:

Theatre.js = complex 3D sequence authoring

GSAP = website scroll choreography

---

# 15. CURTAINS.JS

Do not use Curtains.js unless a specific DOM/WebGL image distortion effect is actually needed.

Do not add it merely for the sake of adding another library.

---

# 16. GSAP + SCROLLTRIGGER

GSAP + ScrollTrigger should be the **master cinematic choreography system**.

Use it for:

- scroll-linked animation
- pinned sections
- camera movement
- 3D transitions
- typography reveals
- image reveals
- section transitions
- progress indicators
- product animation
- parallax
- timeline sequencing

Example:

Scroll position  
→ ScrollTrigger  
→ GSAP timeline  
→ R3F camera  
→ Earth rotation  
→ founder movement  
→ machinery movement  
→ typography  
→ section transition

The entire website should feel synchronized.

---

# 17. FRAMER MOTION

Use Framer Motion for normal React UI interactions.

Use Framer Motion for:

- mobile menu
- modal
- drawer
- buttons
- cards
- UI entrance animations
- small component transitions
- page transitions
- interactive UI elements

Do NOT use Framer Motion for complicated scroll-driven 3D choreography when GSAP is more appropriate.

Therefore:

GSAP = cinematic / scroll animation

Framer Motion = React UI animation

---

# 18. PRODUCT EXPERIENCE

Do NOT create a boring grid of product cards as the primary product experience.

Create a premium interactive product gallery.

Example:

CLEANER  
HUSKER  
SEPARATOR  
WHITENER  
POLISHER  
GRADER  
SORTER

On desktop, use an expanding horizontal gallery.

When the user hovers or selects a product:

- panel expands
- product image/3D model enlarges
- background subtly changes
- title appears
- short description appears
- gold line animates
- VIEW PRODUCT appears

Use smooth motion.

On mobile, replace hover behavior with tap/select interaction.

---

# 19. 3D PRODUCT EXPERIENCE

For important products, create a 3D presentation.

Initial state:

Complete machine.

As user scrolls:

1. Machine rotates.
2. Camera approaches.
3. Components separate.
4. Internal mechanism becomes visible.
5. Individual component gets highlighted.
6. Description appears.
7. Camera pulls back.
8. Machine assembles again.

This should feel like a premium product film controlled by scrolling.

---

# 20. RICE MILL PROCESS

Create an interactive process section.

Show:

PADDY  
↓  
CLEANING  
↓  
HUSKING  
↓  
SEPARATION  
↓  
WHITENING  
↓  
POLISHING  
↓  
GRADING  
↓  
SORTING

Use a gold progress line.

As the visitor scrolls:

- active stage changes
- corresponding visual changes
- text updates
- machinery/product visualization updates

The process should feel educational and cinematic.

---

# 21. BUSINESS SECTION

Do not create a giant wall of text.

Use editorial typography.

Example:

MORE THAN  
MACHINERY.

Then supporting copy about:

- experience
- engineering
- reliability
- complete solutions
- installation
- service

Only use real business statistics.

Do not invent:

- years of experience
- number of installations
- number of customers
- countries served
- production capacity

If the information is not provided, create clearly marked placeholders.

---

# 22. PROJECTS

Create a premium project gallery.

Each project should feel like a case study.

Example:

PROJECT 01

COMPLETE RICE MILL SETUP

Location

Short description

VIEW PROJECT →

Use large photography.

Animation:

- image clip reveal
- subtle zoom
- text reveal
- gold line transition

Do not make projects look like ordinary cards.

---

# 23. WHY CHOOSE US

Use a minimal editorial layout.

Possible themes:

ENGINEERING  
RELIABILITY  
PERFORMANCE  
SERVICE  
COMPLETE SOLUTIONS

Use icons sparingly.

Avoid generic icon-card grids.

---

# 24. CONTACT

Do NOT create a separate Founder CTA.

Use a normal premium Contact section.

Possible headline:

LET'S BUILD YOUR  
RICE MILL.

Include:

- phone
- WhatsApp
- email
- location
- inquiry form

Use actual client information when provided.

Do not invent contact details.

---

# 25. FOOTER

Dark charcoal:

`#24211B`

Use:

- business name/logo
- short description
- navigation
- contact
- social links if provided
- copyright

Use gold only as a subtle accent.

Footer should feel premium and quiet.

---

# 26. SHADCN / SKIPER UI

Use:

```bash
npx shadcn add @skiper-ui/skiper40
```

Use Skiper UI components only where they genuinely improve the experience.

Do NOT blindly use every component.

Customize components to match:

- Ivory
- Charcoal
- Muted Gold

Do not allow default component styling to override the brand identity.

---

# 27. DESIGN SKILLS

Use the installed design skills:

```bash
npx skills@latest add emilkowalski/skills

npx skills add Leonxlnx/taste-skill

npx impeccable install
```

Use their principles to improve:

- motion
- interaction
- composition
- typography
- spacing
- visual hierarchy
- accessibility
- responsiveness
- polish

Do not simply imitate another website.

Create an original visual identity.

---

# 28. TYPOGRAPHY

Use a sophisticated editorial typography system.

Large headings should feel confident and expensive.

Use:

- oversized typography
- tight hierarchy
- generous whitespace
- controlled line lengths
- strong contrast between heading and supporting text

Do not use huge text everywhere.

Typography should guide the visitor through the story.

---

# 29. MICRO-INTERACTIONS

Use subtle details:

- gold line expansion
- image zoom 1.03–1.05x
- button magnetic movement where appropriate
- nav indicator
- text reveal
- smooth hover transitions
- subtle cursor follower on desktop
- image masking
- small directional arrows

Avoid distracting effects.

---

# 30. CURSOR

Desktop may have a subtle custom cursor/follower.

Use it only if it improves interaction.

Possible behavior:

Normal:

small dot.

Interactive:

small gold ring / label.

Do NOT create a huge aggressive cursor.

Disable or simplify it on touch devices.

---

# 31. PERFORMANCE

This is extremely important.

The website contains:

- WebGL
- 3D Earth
- machinery
- video
- GSAP
- high-quality imagery

Therefore optimize aggressively.

Use:

- lazy loading
- compressed images
- optimized GLB/GLTF
- texture compression where appropriate
- LOD where appropriate
- lazy-loaded 3D scenes
- requestAnimationFrame efficiently
- GPU-friendly materials
- limited post-processing
- responsive rendering resolution
- mobile fallbacks

Do NOT sacrifice performance for visual effects.

---

# 32. MOBILE

Mobile is NOT an afterthought.

At mobile widths:

- simplify the Earth
- reduce particles
- reduce 3D complexity
- disable expensive effects where necessary
- replace hover interactions with tap
- reduce animation distances
- maintain typography hierarchy
- preserve founder visibility
- maintain product usability

The site must feel premium on mobile.

---

# 33. ACCESSIBILITY

Maintain:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- alt text
- reduced-motion support
- accessible buttons
- accessible forms

Respect:

`prefers-reduced-motion`

When reduced motion is enabled, provide a beautiful static version rather than simply disabling everything.

---

# 34. RESPONSIVE BREAKPOINTS

Design intentionally for:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- large desktop

Do not simply scale the desktop layout down.

Recompose the experience for mobile.

---

# 35. TECH STACK

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Skiper UI where appropriate
- React Three Fiber
- Three.js
- Drei
- GSAP
- ScrollTrigger
- Framer Motion
- optional Theatre.js
- optional Spline
- Blender-created GLB/GLTF assets
- optimized video assets

Do not add unnecessary libraries.

---

# 36. RESPONSIBILITY MATRIX

Use the libraries intentionally:

| Technology | Responsibility |
|---|---|
| React | Application architecture |
| TypeScript | Type safety |
| Tailwind | Styling |
| shadcn/ui | Base UI components |
| Skiper UI | Premium interaction components |
| R3F | React-based 3D |
| Three.js | 3D engine |
| Drei | R3F utilities |
| GSAP | Animation choreography |
| ScrollTrigger | Scroll-driven animation |
| Framer Motion | UI/component animation |
| Theatre.js | Optional 3D sequence authoring |
| Spline | Optional isolated 3D scenes |
| Blender | Custom 3D modeling/animation |
| Meshy | AI-assisted 3D asset creation |
| Google Flow | Cinematic video concepts |

Never use multiple libraries for the same responsibility without a clear reason.

---

# 37. CODE QUALITY

Write production-quality code.

Use:

- reusable components
- clear folder structure
- typed props
- reusable animation utilities
- reusable 3D components
- separation between UI and 3D
- clean state management
- no giant monolithic component
- no duplicated code

Suggested structure:

```text
src/
├── components/
│   ├── navigation/
│   ├── hero/
│   ├── products/
│   ├── process/
│   ├── projects/
│   ├── contact/
│   └── footer/
│
├── components/3d/
│   ├── Earth/
│   ├── Machinery/
│   ├── ProductScene/
│   ├── Camera/
│   └── materials/
│
├── animations/
│   ├── hero.ts
│   ├── products.ts
│   ├── process.ts
│   └── scroll.ts
│
├── assets/
│   ├── images/
│   ├── videos/
│   └── models/
│
├── data/
│   ├── products.ts
│   ├── projects.ts
│   └── business.ts
│
└── pages/
```

---

# 38. IMPORTANT — DO NOT HALLUCINATE BUSINESS INFORMATION

The client details have not necessarily been supplied yet.

Do NOT invent:

- company name
- founder name
- phone number
- email
- address
- certifications
- statistics
- years of experience
- project count
- customer count
- machinery specifications
- performance numbers

Create a clean data/config layer so these can be replaced easily.

Example:

```ts
const business = {
  name: "CLIENT BUSINESS NAME",
  founder: "FOUNDER NAME",
  phone: "PHONE NUMBER",
  email: "EMAIL ADDRESS",
  location: "LOCATION",
};
```

Clearly mark placeholders.

---

# 39. IMAGE / VIDEO PLACEHOLDERS

If real client assets are not yet available:

DO NOT permanently use random stock images.

Create an asset structure that allows:

```text
founder.webp
hero-cinematic.mp4
earth
products/
projects/
```

Use high-quality temporary placeholders only during development.

Make replacement straightforward.

---

# 40. FINAL EXPERIENCE

The final website should feel like this:

A visitor arrives.

They see a sophisticated ivory canvas.

A premium 3D Earth slowly rotates.

Muted gold lines trace the globe.

The founder enters the composition.

Large editorial typography appears.

The visitor scrolls.

The Earth transitions toward India.

The camera moves through the story.

The founder transitions into the business.

The business transitions into machinery.

A real 3D rice mill machine appears.

The machine rotates.

The user scrolls.

The machine opens.

Internal components become visible.

The user continues scrolling.

The machine transforms into the rice-milling process.

Paddy moves through:

Cleaning → Husking → Separation → Whitening → Polishing → Grading → Sorting.

The experience transitions into real projects.

Projects transition into the contact section.

The experience ends quietly with a premium dark footer.

Everything should feel like **one continuous story**.

---

# 41. MOST IMPORTANT DESIGN PRINCIPLE

Do not try to impress the user with the number of technologies used.

The user should never think:

“Wow, they used Three.js, GSAP, Spline, Theatre.js, Meshy and Blender.”

They should think:

> **“This website is incredibly well designed.”**

Technology must remain invisible.

Use complexity only where it creates a meaningful experience.

---

# 42. DEVELOPMENT ORDER

Build in this order:

### PHASE 1
Design system + typography + navigation.

### PHASE 2
Static page structure.

### PHASE 3
Founder hero composition.

### PHASE 4
3D Earth.

### PHASE 5
GSAP ScrollTrigger hero choreography.

### PHASE 6
Product gallery.

### PHASE 7
3D machinery/product scene.

### PHASE 8
Scroll-controlled product animation.

### PHASE 9
Rice-milling process animation.

### PHASE 10
Projects.

### PHASE 11
Contact + footer.

### PHASE 12
Mobile optimization.

### PHASE 13
Performance optimization.

### PHASE 14
Accessibility.

### PHASE 15
Final visual polish.

Do not attempt to build every 3D scene simultaneously.

First establish a beautiful static website, then progressively add 3D and motion.

---

# 43. QUALITY BAR

Before considering the website finished, evaluate it as if submitting it to:

- Awwwards
- CSS Design Awards
- FWA
- premium agency portfolio review

Ask:

1. Does the first viewport immediately establish the brand?
2. Is the founder visually memorable?
3. Does the Earth have a purpose?
4. Does the 3D machinery actually explain the product?
5. Does scrolling feel cinematic rather than gimmicky?
6. Is the typography excellent?
7. Is spacing excellent?
8. Are transitions intentional?
9. Does the website work without animation?
10. Is mobile equally polished?
11. Does it load reasonably quickly?
12. Does it feel like a real established business?
13. Does it avoid the typical AI-generated website look?

If any answer is no, improve it before adding more effects.

---

# FINAL INSTRUCTION

Do not build a generic rice-mill website.

Build a **premium founder-led industrial brand experience**.

The combination of:

**Ivory + Muted Gold  
Founder Photography  
Cinematic Visuals  
3D Earth  
Custom Machinery  
React Three Fiber  
Three.js  
GSAP ScrollTrigger  
Framer Motion  
Blender  
Meshy  
Google Flow**

should create a website that feels **cinematic, technically sophisticated, trustworthy, premium and original**.

Every animation must have a purpose.

Every section must contribute to the story.

Every interaction must feel intentional.

**Design first. Motion second. Technology third.**

Do not sacrifice usability, performance, responsiveness or clarity for visual effects.