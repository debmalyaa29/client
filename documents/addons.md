# Calcutta Agri Tech — Branch-Based Compliance & Business Profile Improvements

## Objective

Work inside the existing Calcutta Agri Tech website repository.

Create a separate Git branch for these changes and implement the requested improvements in that branch only. The current `main` branch is the stable version and must remain untouched.

This is a controlled enhancement task, NOT a website rebuild, redesign, or refactoring project.

Preserve the existing brand identity, layout, color scheme, content, animations, business logic, APIs, database, authentication, deployment configuration, and working functionality unless a specific change below requires a minimal modification.

**Do not modify anything outside the scope of this task.**

## 1. Git Branch and Repository Safety

Before modifying any files:

1. Inspect the current Git branch, working tree, recent commits, and repository structure.
2. Identify uncommitted changes. Do not discard, overwrite, stash, or commit the user's existing work without authorization.
3. Check whether `main` is synchronized with the remote repository before branching.
4. Create and switch to a new branch named:

   `feature/compliance-business-profile`

5. If this branch already exists, inspect it and preserve its work. Do not recreate or reset it blindly.
6. If switching branches is unsafe because of existing uncommitted changes, stop and explain the issue before proceeding.
7. Verify that the new branch was created from the intended baseline.
8. Perform all requested implementation and commits on this feature branch only.

Do not merge into `main`, rewrite Git history, force-push, or push changes to a remote repository without explicit authorization.

After branching, verify the active branch before making any changes.

## 2. First Audit the Existing Website

Before implementation, inspect:

- Frontend framework, routes, components, and styling conventions.
- Backend endpoints, forms, and data collection.
- Authentication and database integrations, if present.
- Existing privacy notices, policies, consent controls, and cookie behavior.
- Third-party SDKs, analytics, embedded content, and external scripts.
- Existing business information and claims.
- Image alt text, keyboard interactions, and color contrast.
- Existing tests and deployment configuration.

Identify which requirements are applicable to the actual application.

Reuse existing components and architecture wherever possible. Do not introduce a new framework, unnecessary dependencies, or a new design system.

Create a concise audit checklist and implementation plan before making changes.

## 3. Privacy Policy

Add a dedicated Privacy Policy page using the website's existing routing and design conventions.

The page should accurately explain, where applicable:

- What personal information is collected.
- Why each category of information is collected.
- How contact or enquiry form submissions are processed.
- The lawful basis for processing where applicable.
- Data sharing, service providers, and third-party integrations.
- Retention and deletion practices.
- Security measures, described without unsupported guarantees.
- Applicable user rights and how to exercise them.
- Contact details for privacy-related enquiries.
- Relevant information about cookies and tracking technologies.

Requirements:

- Base the policy on actual website behavior and verified business practices.
- Do not invent legal entities, addresses, retention periods, certifications, or privacy guarantees.
- Mark unknown business or operational details for owner confirmation.
- Do not claim that the website is compliant with every applicable law.
- Make the page accessible through an appropriate footer link.

## 4. Refund and Cancellation Policy

Add a dedicated Refund and Cancellation Policy page.

First determine whether the website sells products online, accepts payments, processes deposits, accepts orders, or only generates business enquiries.

If the website is an informational business profile with no online purchases, do not invent an e-commerce refund process. Clearly state that refunds and cancellations are handled according to the applicable transaction or written agreement, only if that reflects the owner's actual policy.

If the website does support transactions, document the owner's verified terms, including where applicable:

- Eligibility for refunds.
- Cancellation procedure and deadlines.
- Return or replacement conditions.
- Shipping and return costs.
- Refund processing timelines.
- Exceptions and contact details.

Do not invent refund guarantees, timelines, or consumer rights. Flag unresolved policy decisions for owner approval.

Link the policy in the footer where appropriate.

## 5. Cookie Policy

Add a Cookie Policy page that accurately describes the technologies used by the actual website.

Where applicable, document:

- Essential cookies and their purposes.
- Analytics and performance cookies.
- Advertising or marketing cookies.
- Third-party cookies and embedded services.
- Cookie duration and provider.
- How visitors can change or withdraw their preferences.

Do not claim that a particular cookie or SDK is present unless verified by inspecting the implementation.

Distinguish browser cookies from local storage, session storage, and other tracking technologies where relevant.

Provide a footer link to the Cookie Policy.

## 6. Cookie Consent Banner

Implement a cookie consent banner consistent with the existing Calcutta Agri Tech design.

The banner must:

- Explain the use of cookies and similar technologies in clear language.
- Link to the Privacy Policy and Cookie Policy.
- Provide equally understandable Accept All and Reject Non-Essential options.
- Provide a Manage Preferences option when applicable.
- Allow visitors to change or withdraw consent later.
- Remember the visitor's choice using an appropriate mechanism.
- Respect the selected preferences on subsequent visits.
- Avoid treating continued browsing or scrolling as consent.
- Avoid preselected optional categories.
- Avoid hiding the reject option or making rejection unnecessarily difficult.

Technical requirements:

1. Audit existing cookies, scripts, SDKs, and embedded services before implementing consent.
2. Essential technologies may operate only to the extent necessary for the website's actual operation.
3. Non-essential tracking must not run before the required consent has been obtained.
4. If consent is rejected, ensure optional tracking remains disabled.
5. If consent is withdrawn, stop future optional tracking where technically possible and explain any limitations.
6. Do not break authentication, essential security controls, forms, or core site functionality.
7. Use the project's existing storage and consent patterns if suitable.
8. Avoid installing a third-party consent platform unless there is a demonstrated need and approval.

Do not merely display a banner while continuing to load non-essential tracking scripts.

## 7. Form Consent and Data Collection

Audit all forms, including contact, enquiry, quotation, newsletter, registration, and feedback forms that actually exist.

Implement the following where applicable:

- Collect only the information necessary for the stated purpose.
- Remove unnecessary fields only when they are not required for a legitimate business purpose.
- Clearly explain why required personal information is needed.
- Identify the relevant privacy notice next to the form.
- Provide a separate, optional, unchecked consent control for optional marketing communications when required.
- Do not bundle marketing consent with an ordinary business enquiry.
- Do not make optional marketing consent a condition of submitting an unrelated enquiry.
- Validate consent on the server when consent is legally or operationally required.
- Avoid storing consent records that contain unnecessary personal information.
- Record only the minimum consent evidence necessary for the applicable purpose.
- Ensure validation errors are understandable and accessible.
- Prevent duplicate submissions and avoid collecting information unnecessarily through logs.

Do not add mandatory consent checkboxes indiscriminately. Distinguish between acknowledging a privacy notice, providing consent where consent is the appropriate legal basis, and accepting contractual terms.

Preserve existing form submission behavior and backend integrations.

## 8. Audit Third-Party SDKs and Dependencies

Inspect actual dependencies, scripts, APIs, plugins, SDKs, fonts, analytics, maps, embedded media, and other external integrations.

For each relevant integration, assess:

- Its purpose.
- Whether it is actually used.
- What information it may receive.
- Whether it introduces cookies or tracking.
- Whether it loads before consent.
- Whether it is necessary for core functionality.
- Whether an existing first-party or less invasive alternative is practical.

Remove an integration only when it is demonstrably unnecessary and removal will not break existing functionality.

Do not blindly delete packages, upgrade unrelated dependencies, change API contracts, or introduce new SDKs.

Document findings and unresolved risks in the project audit notes.

## 9. Remove Dark Patterns

Review existing consent interfaces, forms, popups, buttons, and other relevant interactions.

Remove deceptive or coercive patterns, including:

- Misleading button labels.
- Hidden rejection options.
- Preselected optional consent.
- False urgency or fabricated scarcity.
- Unnecessary barriers to withdrawal.
- Disproportionately difficult rejection or cancellation.
- Misleading defaults or deceptive visual hierarchy.

Preserve the existing brand style while ensuring choices are clear, understandable, and fair.

Do not redesign unrelated sections.

## 10. Remove Fake Reviews and Unsupported Claims

Audit testimonials, ratings, customer reviews, performance statistics, product claims, certifications, awards, guarantees, and business claims displayed on the website.

- Remove fabricated reviews, fabricated ratings, and unverifiable testimonials presented as genuine.
- Do not create replacement reviews.
- Remove or flag unsupported claims that cannot be verified from available business materials.
- Retain claims supported by credible existing documentation.
- Do not invent customer counts, sales numbers, performance figures, certifications, or awards.
- Preserve legitimate product specifications and business facts.
- If a claim requires owner verification, document it for review instead of replacing it with another unsupported claim.

Keep edits limited to the affected content.

## 11. Accessibility: Alt Text

Audit images throughout the website, including business profile imagery, product images, founder portraits, logos, and meaningful illustrations.

- Add descriptive alt text to meaningful images.
- Use empty alt text for purely decorative images.
- Avoid repetitive keyword stuffing.
- Do not invent the identity, role, credentials, or achievements of people pictured.
- Preserve existing image assets and rendering behavior.
- Ensure images implemented through CSS or other techniques do not introduce inaccessible essential content.

Do not rename or replace image files unless necessary.

## 12. Accessibility: Color Contrast

Audit text, links, buttons, form controls, consent banners, notices, and interactive states against WCAG 2.2 Level AA contrast criteria.

Use these minimum targets where applicable:

- Normal text: 4.5:1.
- Large text: 3:1.
- Meaningful UI component boundaries and graphical indicators: 3:1 against adjacent colors where required.

Fix failing contrast ratios with the smallest possible changes.

Preserve the current Calcutta Agri Tech brand palette and visual identity as much as possible. Do not introduce an unrelated color scheme or redesign the entire website.

Test hover, focus, disabled, error, and selected states where applicable.

## 13. Accessibility: Keyboard Navigation

Verify that users can navigate and operate applicable website functionality using a keyboard.

Check:

- Logical tab order.
- Visible focus indicators.
- Keyboard operation of links, buttons, menus, dialogs, and cookie preferences.
- Proper focus handling when dialogs open and close.
- No keyboard traps.
- Accessible form labels and validation messages.
- Correct semantic HTML and heading hierarchy.
- Appropriate ARIA only where native HTML is insufficient.
- Respect for reduced-motion preferences in existing animations where applicable.

Do not add custom keyboard handlers when standard semantic HTML already provides the required behavior.

Preserve existing animations and interactions unless a specific accessibility issue requires a targeted adjustment.

## 14. Business Details

Audit the existing business profile and add or correct verified Calcutta Agri Tech business information in the most appropriate existing section.

Include information only when confirmed by the existing repository, approved business materials, or the business owner:

- Business name: Calcutta Agri Tech.
- Verified business address, if provided.
- Official business contact number and email, if provided.
- Official website and relevant social profiles, if verified.
- Business description and actual services.
- Product categories and supported product information.
- Genuine business operating hours, if provided.
- Applicable enquiry or customer-support contact information.

Use semantic markup and make relevant contact information accessible.

Do not invent addresses, phone numbers, email addresses, operating hours, product capabilities, founder identities, customer testimonials, or company registration details.

If information is missing, add an explicit item to the owner-confirmation checklist rather than fabricating it.

Do not create an unnecessary new page if the information can be added appropriately to an existing business profile or contact section.

## 15. Design and Scope Restrictions

This is not a redesign.

- Keep the current website layout and branding.
- Do not introduce a dark theme or new visual identity.
- Do not rebuild the hero section.
- Do not replace existing images or business content without a requirement above.
- Do not change unrelated animations, transitions, or page sections.
- Do not refactor the application architecture.
- Do not alter database schemas, authentication, business logic, or APIs unless a specific requirement cannot be fulfilled without a minimal, justified change.
- Do not add unnecessary dependencies.
- Do not remove working functionality.
- Do not make changes to unrelated routes or components.

If a requested improvement requires a larger architectural change, document the issue and ask before proceeding.

## 16. Testing and Verification

After implementation:

1. Run the project's existing tests and appropriate linting/type checks.
2. Build the application using the existing build process.
3. Test all modified pages and footer links.
4. Test cookie acceptance, rejection, preference changes, and withdrawal.
5. Verify that non-essential tracking does not execute before required consent.
6. Test relevant form validation and consent behavior.
7. Inspect browser console errors and failed network requests.
8. Check keyboard navigation and visible focus states.
9. Verify color contrast against the stated targets.
10. Confirm image alt text and form accessibility.
11. Verify responsive behavior on mobile and desktop.
12. Confirm that existing business functionality still works.
13. Review the final Git diff to ensure no unrelated files or functionality were changed.

Do not claim that a test passed unless it was actually run. Clearly identify any checks that could not be completed.

## 17. Final Report

At completion, provide:

- The feature branch name and starting commit.
- A summary of each implemented requirement.
- Files changed and the reason for each change.
- Third-party SDK audit findings.
- Tests executed and their actual results.
- Remaining legal, privacy, accessibility, or business-owner decisions.
- Any information the owner must supply.
- Any known limitations or unresolved issues.
- The final Git commit hash, if a commit was created.

Commit the work on the feature branch using a clear message only after reviewing the changes and ensuring that the working tree does not contain unrelated user work.

Do not merge the branch into `main` or deploy the changes without explicit approval.

## Final Instruction

Start by inspecting the repository and safely creating the feature branch. Then implement only the scoped improvements above.

**Protect the existing Calcutta Agri Tech website. No unrelated modifications, no invented business information, no fabricated legal assurances, and no changes to `main`.**