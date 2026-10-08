# System Architecture --- Premium Rice Mill Machinery Website

## 1. Architecture Overview

This project is a premium, cinematic, 3D-first rice mill machinery
website with a secure Supabase backend.

The architecture separates:

-   Presentation
-   3D rendering
-   Animation orchestration
-   Business/content data
-   Authentication
-   Authorization
-   Database
-   Storage
-   Server-side operations
-   Security
-   Deployment

Core principle:

> **The frontend provides the experience. The server and database
> enforce security.**

The browser must never be considered a trusted environment.

------------------------------------------------------------------------

# 2. High-Level Architecture

``` text
                              USER
                               │
                               ▼
                         HTTPS / TLS
                               │
                               ▼
                    ┌────────────────────┐
                    │  React / Next.js   │
                    │     Frontend       │
                    └─────────┬──────────┘
                              │
          ┌───────────────────┼────────────────────┐
          │                   │                    │
          ▼                   ▼                    ▼
      UI / Pages          3D Experience       Authenticated UI
          │                   │                    │
          │             Three.js / R3F             │
          │             GSAP / ScrollTrigger       │
          │                   │                    │
          └───────────────────┼────────────────────┘
                              │
                              ▼
                     Server / API Layer
                              │
                 ┌────────────┼─────────────┐
                 │            │             │
                 ▼            ▼             ▼
             Supabase       Storage       External
               Auth        Buckets        Services
                 │
                 ▼
             PostgreSQL
                 │
                 ▼
              RLS Policies
```

------------------------------------------------------------------------

# 3. Technology Stack

## Frontend

-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Skiper UI

## 3D

-   Three.js
-   React Three Fiber
-   Drei

## Animation

-   GSAP
-   GSAP ScrollTrigger
-   Framer Motion

Optional:

-   Theatre.js for complex authored 3D sequences
-   Spline only for isolated scenes where it provides a clear advantage

Do not use multiple renderers for the same scene.

------------------------------------------------------------------------

# 4. Backend

## Primary Backend Platform

**Supabase**

Supabase provides:

-   PostgreSQL
-   Authentication
-   MFA
-   Row-Level Security
-   Storage
-   Server-side database access
-   Database APIs
-   Realtime functionality if required later

The project should avoid unnecessary backend infrastructure when
Supabase can securely provide the required functionality.

------------------------------------------------------------------------

# 5. Authentication Architecture

Supabase Auth is the authentication provider.

``` text
User
 │
 ▼
Login / Signup
 │
 ▼
Supabase Auth
 │
 ├── Session
 ├── Email verification
 ├── Password reset
 └── MFA
 │
 ▼
Authenticated user
 │
 ▼
Application
```

Authentication must never depend solely on frontend state.

The server must verify the authenticated session before allowing
protected operations.

------------------------------------------------------------------------

# 6. Authentication Requirements

The authentication system must support:

-   Login
-   Logout
-   Signup where required
-   Email verification
-   Password reset
-   Session expiration
-   Secure session refresh
-   MFA / 2FA
-   Account recovery
-   Authentication rate limiting
-   Brute-force protection

Administrative accounts should require MFA.

------------------------------------------------------------------------

# 7. Authentication Token Handling

Do not store authentication tokens in `localStorage`.

Prefer the authentication/session mechanism recommended for the selected
Supabase framework integration.

Security requirements:

-   Use secure session handling.
-   Use HTTPS in production.
-   Use HTTP-only cookies where the architecture supports them.
-   Use Secure cookies.
-   Use appropriate SameSite configuration.
-   Do not expose refresh tokens to unnecessary client code.
-   Never place JWT signing secrets in frontend code.

------------------------------------------------------------------------

# 8. Authorization Architecture

Authentication and authorization are separate.

``` text
Authentication
      │
      ▼
Who is this user?
      │
      ▼
Authorization
      │
      ▼
What may this user access?
```

Every protected operation must check authorization.

Never trust:

-   Frontend role values.
-   User IDs supplied by the browser.
-   Hidden UI elements.
-   Client-side route guards.
-   Local storage values.
-   Query parameters as proof of ownership.

------------------------------------------------------------------------

# 9. Row-Level Security

PostgreSQL Row-Level Security must be enabled for protected user-owned
data.

Example:

``` text
User A
  │
  ├── profile A       ✓
  ├── inquiry A       ✓
  └── documents A     ✓

User A
  │
  ├── profile B       ✗
  ├── inquiry B       ✗
  └── documents B     ✗
```

RLS policies must determine which records the authenticated user can
access.

Do not depend on frontend filtering for data isolation.

------------------------------------------------------------------------

# 10. Database Architecture

Initial database structure:

``` text
profiles
    │
    ├── user_id
    ├── name
    ├── contact information
    └── metadata

inquiries
    │
    ├── id
    ├── user_id
    ├── message
    ├── status
    └── timestamps

products
    │
    ├── id
    ├── name
    ├── description
    ├── media references
    └── metadata

projects
    │
    ├── id
    ├── title
    ├── description
    ├── media references
    └── metadata

contact_messages
    │
    ├── id
    ├── name
    ├── email
    ├── phone
    ├── message
    └── timestamps
```

Additional tables should only be introduced when a real requirement
exists.

Do not unnecessarily turn static marketing content into database
records.

------------------------------------------------------------------------

# 11. Public vs Private Data

## Public

Examples:

-   Company information
-   Public products
-   Public projects
-   Public machinery information
-   Public contact information
-   Public images
-   Public videos
-   Public 3D assets

These can remain static or be publicly readable where appropriate.

## Private

Examples:

-   User profiles
-   Customer inquiries
-   Private documents
-   Internal notes
-   Administrative data
-   Private project information
-   User-specific records

Private information must require authentication and authorization.

------------------------------------------------------------------------

# 12. Database Access Model

Preferred flow:

``` text
Frontend
   │
   ▼
Authenticated request
   │
   ▼
Server / Supabase client
   │
   ▼
Authentication verification
   │
   ▼
Authorization
   │
   ▼
RLS
   │
   ▼
PostgreSQL
```

Do not bypass authorization simply because a database API is technically
accessible.

------------------------------------------------------------------------

# 13. Supabase Service-Role Key

The Supabase service-role key is privileged.

It must:

-   Never appear in frontend source.
-   Never be committed to GitHub.
-   Never be sent to the browser.
-   Never be included in public JavaScript bundles.
-   Never be exposed through API responses.
-   Never be logged.

It may only be used in trusted server-side environments when privileged
operations are genuinely required.

------------------------------------------------------------------------

# 14. Storage Architecture

Supabase Storage may be used for private application files.

Example:

``` text
Supabase Storage
│
├── public-assets/
│   ├── product-images/
│   ├── project-images/
│   └── documents intended for public access
│
└── private/
    ├── user-files/
    ├── customer-documents/
    └── internal-files/
```

Private files must be protected by authentication and authorization.

Never assume that hiding a storage URL makes a file private.

------------------------------------------------------------------------

# 15. 3D Asset Architecture

The 3D experience uses:

``` text
Google Flow
     │
     ▼
Cinematic visual concepts
     │
     ▼
Blender / Meshy
     │
     ▼
Optimized GLB / GLTF
     │
     ▼
React Three Fiber
     │
     ▼
Three.js
```

Recommended assets:

``` text
public/
└── assets/
    ├── images/
    │   ├── founder.webp
    │   ├── logo.svg
    │   └── products/
    ├── videos/
    │   ├── hero-cinematic.mp4
    │   └── product/
    ├── models/
    │   ├── earth/
    │   └── machinery/
    └── projects/
```

Large 3D assets should be optimized before deployment.

------------------------------------------------------------------------

# 16. Earth Architecture

The Earth is a primary hero visual.

Narrative:

``` text
EARTH
  ↓
INDIA
  ↓
FOUNDER
  ↓
BUSINESS
  ↓
MACHINERY
```

The Earth should use:

-   Warm ivory/cream surface
-   Charcoal land masses
-   Muted gold geographic/latitude lines
-   Soft atmospheric lighting
-   Restrained particles
-   Slow rotation
-   Cinematic camera movement

The Earth is a storytelling device, not a generic decorative 3D object.

------------------------------------------------------------------------

# 17. Machinery 3D Architecture

Product scenes should support:

``` text
Complete Machine
       ↓
Rotation
       ↓
Camera Approach
       ↓
Component Separation
       ↓
Internal Mechanism
       ↓
Component Highlight
       ↓
Product Information
       ↓
Camera Pullback
       ↓
Machine Assembly
```

Use Blender for custom machinery modeling and animation.

Use Meshy only where AI-assisted asset generation provides value.

Clean, optimize, retopologize, and validate Meshy assets before web
deployment.

------------------------------------------------------------------------

# 18. Animation Architecture

## GSAP

GSAP is responsible for:

-   Scroll choreography
-   ScrollTrigger
-   Camera movement
-   Earth transitions
-   Machinery sequences
-   Pinning
-   Progress indicators
-   Large-scale timeline animation
-   Typography choreography

## Framer Motion

Framer Motion is responsible for:

-   UI transitions
-   Menus
-   Drawers
-   Modals
-   Buttons
-   Small component transitions

Do not make GSAP and Framer Motion fight over the same property.

------------------------------------------------------------------------

# 19. Page Architecture

The homepage contains:

``` text
Navigation
    ↓
Cinematic 3D Hero
    ↓
Business Introduction
    ↓
Top-Selling Products
    ↓
Complete Rice Mill Solutions
    ↓
Interactive Rice-Milling Process
    ↓
Why Choose Us
    ↓
Projects / Installations
    ↓
Contact
    ↓
Footer
```

------------------------------------------------------------------------

# 20. Rice-Milling Process

The interactive process is:

``` text
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
```

The section should use scroll-linked animation.

GSAP ScrollTrigger controls:

-   Active stage
-   Progress line
-   Camera movement
-   Product/process visual
-   Text transitions

------------------------------------------------------------------------

# 21. Product Architecture

Products should not be presented as a generic card grid.

Desktop:

``` text
Horizontal Product Gallery
        ↓
Selected Product
        ↓
Expanded visual
        ↓
3D / image
        ↓
Product information
        ↓
View Product
```

Mobile:

``` text
Tap product
   ↓
Expand
   ↓
Product information
   ↓
3D / image
```

Only display machinery/products confirmed by the client.

Never invent technical specifications.

------------------------------------------------------------------------

# 22. Contact Architecture

Contact submissions should be handled securely.

``` text
Contact Form
    ↓
Client validation
    ↓
Server validation
    ↓
Rate limiting
    ↓
Spam protection
    ↓
Database insertion
    ↓
Optional notification
```

Never trust client-side validation alone.

Contact form submissions should not expose database credentials.

------------------------------------------------------------------------

# 23. API Architecture

Every protected API endpoint must define:

``` text
Authentication
Authorization
Input schema
Business rules
Rate limit
Database access
Safe response
Logging
```

Conceptual endpoint flow:

``` text
Request
  ↓
HTTPS
  ↓
CORS validation
  ↓
Authentication
  ↓
Authorization
  ↓
Input validation
  ↓
Rate limiting
  ↓
Business logic
  ↓
Database / Storage
  ↓
Safe response
```

------------------------------------------------------------------------

# 24. Input Validation

Validate all untrusted input.

Examples:

-   Form values
-   Search parameters
-   IDs
-   Query parameters
-   JSON bodies
-   File uploads
-   URLs
-   Webhook payloads

Use schema validation on the server.

Frontend validation improves user experience but is not a security
boundary.

------------------------------------------------------------------------

# 25. Rate Limiting

Apply rate limits to:

-   Login
-   Signup
-   Password reset
-   MFA verification
-   Contact forms
-   API endpoints
-   Uploads
-   Search
-   AI features
-   Webhooks

Return safe `429` responses when limits are exceeded.

------------------------------------------------------------------------

# 26. XSS Protection

Requirements:

-   Avoid unsafe HTML injection.
-   Sanitize HTML when HTML is required.
-   Escape untrusted output.
-   Avoid unsafe DOM APIs.
-   Configure CSP where appropriate.

Do not render untrusted HTML directly.

------------------------------------------------------------------------

# 27. CSRF Protection

If cookies are used for authentication:

-   Configure appropriate SameSite behavior.
-   Use CSRF protection for state-changing requests where required.
-   Validate request origins where appropriate.
-   Never blindly accept cross-site state-changing requests.

------------------------------------------------------------------------

# 28. CORS

Production CORS must use an explicit allowlist.

Never use unrestricted credentialed CORS.

Only trusted application origins should be allowed.

------------------------------------------------------------------------

# 29. HTTPS

Production deployment must force HTTPS.

Requirements:

-   HTTP to HTTPS redirect.
-   Secure cookies.
-   HSTS where appropriate.
-   No mixed content.
-   HTTPS API endpoints.

------------------------------------------------------------------------

# 30. SSRF Protection

Any server-side URL fetching must validate destination URLs.

Block:

-   Localhost
-   Private IP addresses
-   Internal hostnames
-   Cloud metadata endpoints
-   Dangerous protocols
-   Untrusted redirect destinations

Use domain allowlists whenever possible.

------------------------------------------------------------------------

# 31. Webhook Verification

Incoming webhooks must:

1.  Verify signature.
2.  Validate timestamp/replay protection where supported.
3.  Validate payload schema.
4.  Reject invalid requests.
5.  Prevent duplicate/replayed events.

Webhook secrets remain server-side.

------------------------------------------------------------------------

# 32. Prompt Injection Security

If AI features are introduced:

``` text
Untrusted Input
      ↓
AI
      ↓
Validated Output
      ↓
Server Authorization
      ↓
Tool / Action
```

Never allow AI output to directly perform privileged operations without
server-side validation and authorization.

AI-generated actions must use least privilege.

------------------------------------------------------------------------

# 33. CORS / CSP / Security Headers

Production should consider:

``` text
Strict-Transport-Security
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Configure policies based on actual application requirements.

Avoid unnecessarily permissive policies.

------------------------------------------------------------------------

# 34. Error Architecture

Production errors should be safe.

Client receives:

``` text
Something went wrong. Please try again.
```

Server logs contain controlled diagnostic information.

Never expose:

-   Stack traces
-   SQL
-   Database URLs
-   Internal paths
-   Secrets
-   Tokens
-   Infrastructure details

------------------------------------------------------------------------

# 35. Logging Architecture

Security-relevant events should be logged server-side.

Examples:

-   Failed authentication
-   Authorization failure
-   Rate-limit violations
-   Webhook failures
-   SSRF blocks
-   Suspicious requests
-   Administrative actions
-   Prompt-injection attempts

Never log:

-   Passwords
-   JWTs
-   Refresh tokens
-   API keys
-   Session cookies
-   MFA secrets
-   Private credentials

------------------------------------------------------------------------

# 36. Source Maps

Production source maps should not be publicly accessible by default.

If error monitoring requires source maps:

``` text
Production build
      ↓
Private error-monitoring service
      ↓
Restricted source maps
```

Do not publish internal source code through public `.map` files.

------------------------------------------------------------------------

# 37. Dependency Architecture

Keep dependencies maintained.

Before deployment:

``` bash
npm audit
```

Also use appropriate dependency/security scanning.

Requirements:

-   Update vulnerable packages.
-   Remove unused dependencies.
-   Review new dependencies.
-   Keep lockfiles.
-   Resolve critical/high vulnerabilities where practical.
-   Avoid abandoned packages.

------------------------------------------------------------------------

# 38. Repository Architecture

Recommended:

``` text
project/
├── app/ or src/
│   ├── components/
│   ├── components/3d/
│   ├── pages/
│   ├── animations/
│   ├── data/
│   ├── lib/
│   ├── hooks/
│   └── server/
│
├── public/
│   └── assets/
│       ├── images/
│       ├── videos/
│       └── models/
│
├── supabase/
│   ├── migrations/
│   ├── functions/
│   └── seed/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── security/
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Exact framework-specific directories may vary.

------------------------------------------------------------------------

# 39. Data / Configuration Architecture

Keep verified business information separate from application logic.

Example:

``` text
src/data/business.ts
src/data/products.ts
src/data/projects.ts
```

Use placeholders until the client supplies verified information.

Never invent:

-   Company name
-   Founder name
-   Phone
-   Email
-   Address
-   Certifications
-   Experience
-   Customer counts
-   Project counts
-   Countries served
-   Technical specifications
-   Performance claims

------------------------------------------------------------------------

# 40. Frontend vs Server Responsibilities

  Responsibility                    Frontend            Server
  ----------------------------- ------------ -----------------
  UI                                       ✓ 
  3D rendering                             ✓ 
  Animations                               ✓ 
  Form UX validation                       ✓ 
  Authentication UI                        ✓ 
  Authentication verification                                ✓
  Authorization                                              ✓
  RLS                                             ✓ / Database
  Secrets                                                    ✓
  Database privileged access                                 ✓
  Input validation                         ✓                 ✓
  Rate limiting                                              ✓
  Webhook verification                                       ✓
  SSRF protection                                            ✓
  Security decisions                                         ✓
  Logging                            Limited                 ✓
  MFA                               Provider   Provider/server
  Public content                           ✓          Optional
  Private data                    Controlled                 ✓

------------------------------------------------------------------------

# 41. Performance Architecture

The website is visually demanding, so performance is part of the
architecture.

Requirements:

-   Lazy-load 3D scenes.
-   Lazy-load videos.
-   Optimize GLB/GLTF files.
-   Compress textures.
-   Use appropriate texture resolutions.
-   Use LOD where beneficial.
-   Reduce render resolution on weaker devices.
-   Avoid unnecessary post-processing.
-   Use efficient animation loops.
-   Avoid unnecessary React re-renders.
-   Code split heavy 3D components.
-   Provide mobile fallbacks.

------------------------------------------------------------------------

# 42. Responsive Architecture

## Desktop

Full experience:

-   Earth
-   Cinematic camera
-   3D machinery
-   Scroll choreography
-   Product interactions
-   Rich visual transitions

## Tablet

Reduce:

-   Particle count
-   Render resolution
-   3D complexity
-   Video quality where appropriate

## Mobile

Prioritize:

-   Founder
-   Typography
-   Navigation
-   Product usability
-   Contact
-   Fast loading

Simplify or replace expensive 3D scenes when necessary.

The mobile experience must remain premium even when effects are reduced.

------------------------------------------------------------------------

# 43. Accessibility Architecture

Requirements:

-   Semantic HTML.
-   Keyboard navigation.
-   Visible focus states.
-   Accessible navigation.
-   Form labels.
-   Useful error messages.
-   Appropriate contrast.
-   Alt text for meaningful images.
-   Reduced-motion support.

Respect:

``` text
prefers-reduced-motion
```

When reduced motion is enabled:

-   Disable unnecessary camera movement.
-   Reduce scroll animation.
-   Remove excessive parallax.
-   Provide static visual alternatives.

------------------------------------------------------------------------

# 44. Deployment Architecture

Conceptual production deployment:

``` text
                    Internet
                       │
                       ▼
                     HTTPS
                       │
                       ▼
              Frontend Deployment
                       │
                       ▼
               Server / API Layer
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       Supabase      Storage      External
        Auth        Buckets       Services
          │
          ▼
      PostgreSQL
          │
          ▼
          RLS
```

Production secrets must be configured through the deployment platform.

Never hardcode secrets into the repository.

------------------------------------------------------------------------

# 45. Development Environments

Maintain separate configurations for:

``` text
Development
Staging
Production
```

Do not use production credentials during local development.

Do not use production customer data for testing unless explicitly
required and securely handled.

------------------------------------------------------------------------

# 46. Testing Architecture

Testing should include:

## Unit Tests

-   Validation
-   Business logic
-   Utility functions

## Integration Tests

-   Authentication
-   Database operations
-   RLS
-   API routes
-   Storage access

## Security Tests

-   Broken object-level authorization
-   Authentication bypass
-   XSS
-   CSRF
-   Rate limiting
-   CORS
-   SSRF
-   Webhook verification
-   Prompt injection
-   Secret exposure

## Visual / UX Tests

-   Responsive layout
-   3D fallbacks
-   Reduced motion
-   Navigation
-   Contact forms

------------------------------------------------------------------------

# 47. Security Boundary

The most important security boundary is:

``` text
              UNTRUSTED
                 │
                 ▼
             FRONTEND
                 │
                 ▼
        SERVER VALIDATION
                 │
                 ▼
        AUTHENTICATION
                 │
                 ▼
         AUTHORIZATION
                 │
                 ▼
            RLS / DB
                 │
                 ▼
             TRUSTED
```

The frontend must never be the final authority.

------------------------------------------------------------------------

# 48. Recommended Implementation Order

## Phase 1 --- Foundation

-   Project setup
-   TypeScript
-   Tailwind
-   shadcn
-   Supabase project
-   Environment configuration
-   Basic deployment

## Phase 2 --- Authentication

-   Supabase Auth
-   Login
-   Logout
-   Password reset
-   Email verification
-   MFA
-   Secure sessions

## Phase 3 --- Database

-   Schema
-   Migrations
-   RLS
-   Policies
-   Profiles
-   Inquiries
-   Products/projects if required

## Phase 4 --- Server Security

-   Server authentication checks
-   Authorization
-   Input validation
-   Rate limiting
-   CORS
-   CSRF
-   Security headers
-   Error handling

## Phase 5 --- Public Website

-   Navigation
-   Hero
-   Business section
-   Products
-   Solutions
-   Process
-   Projects
-   Contact
-   Footer

## Phase 6 --- 3D

-   Earth
-   Machinery
-   Product scenes
-   Camera choreography
-   ScrollTrigger integration

## Phase 7 --- Performance

-   Asset optimization
-   Code splitting
-   Lazy loading
-   Mobile fallback
-   Reduced-motion fallback

## Phase 8 --- Security Testing

-   Authentication testing
-   Authorization testing
-   RLS testing
-   Input testing
-   XSS testing
-   CSRF testing
-   SSRF testing
-   Webhook testing
-   Prompt injection testing
-   Dependency scanning

## Phase 9 --- Production

-   HTTPS
-   Production environment
-   Secrets
-   Monitoring
-   Alerts
-   Backup/recovery strategy
-   Final security review

------------------------------------------------------------------------

# 49. Architecture Rules for Antigravity

Antigravity must follow these rules:

1.  Do not expose private Supabase credentials.
2.  Do not expose service-role keys.
3.  Do not store authentication tokens in localStorage.
4.  Do not trust frontend authorization.
5.  Verify authentication server-side.
6.  Verify authorization server-side.
7.  Enforce ownership through RLS.
8.  Validate every untrusted input.
9.  Add rate limiting to sensitive endpoints.
10. Restrict CORS.
11. Force HTTPS in production.
12. Protect against XSS.
13. Protect cookie-based authentication against CSRF.
14. Verify webhook signatures.
15. Protect server-side URL fetching against SSRF.
16. Test AI features against prompt injection.
17. Never expose internal errors.
18. Never log secrets or sensitive authentication data.
19. Do not expose production source maps.
20. Keep dependencies updated.
21. Remove default credentials.
22. Use least privilege.
23. Do not invent business information.
24. Preserve performance on mobile.
25. Respect reduced-motion preferences.

------------------------------------------------------------------------

# 50. Final Architecture Principle

The final system should feel like a premium, cinematic website to the
user while remaining a disciplined production application underneath.

``` text
                    PREMIUM EXPERIENCE
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
       UI                 3D              Motion
        │                  │                  │
     React               R3F              GSAP
     Tailwind            Three.js         ScrollTrigger
     shadcn              Drei             Framer Motion
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                      Server Layer
                           │
              ┌────────────┼────────────┐
              │            │            │
             Auth        API          Security
              │            │            │
              └────────────┼────────────┘
                           │
                        Supabase
                           │
               ┌───────────┼───────────┐
               │           │           │
            Postgres      RLS        Storage
```

> **Design first. Motion second. Technology third. Security always.**

The architecture must allow the website to look highly cinematic without
compromising authentication, authorization, data privacy, performance,
or maintainability.
