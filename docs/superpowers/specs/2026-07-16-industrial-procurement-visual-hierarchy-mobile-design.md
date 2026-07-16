# Industrial Procurement Visual Hierarchy And Mobile Design

## Objective

Refine the reusable `ProductDetailTemplate` with stronger visual hierarchy and a mobile-first inquiry experience. The representative route remains `/products/linerless-labels/3-1-8-x-263`.

The approved direction is `Industrial Procurement Dossier`: a professional sourcing document with explicit procurement stages, disciplined navy and amber emphasis, stronger table hierarchy, and a mobile inquiry bar.

The page's single job is to help a B2B buyer determine whether the product and supplier fit the purchasing brief, then submit a qualified RFQ with minimal friction.

## Skill Influence

`frontend-design` defines the page thesis, subject-specific visual signature, typography hierarchy, and restraint. The signature element is a procurement-stage rail that turns section numbering into meaningful sourcing progress rather than decoration.

`ui-styling` defines the Tailwind implementation, mobile-first breakpoints, safe-area behavior, focus states, minimum touch targets, overflow handling, and accessible state transitions.

No shadcn component installation is required. Existing React, Tailwind, Lucide, link, form, and semantic HTML primitives are sufficient.

## Visual Tokens

- Deep navy `#07172F`: hero base, RFQ panel, specification group headers.
- Primary navy `#0F2B5B`: stage numbers, data emphasis, links, and active structural accents.
- Amber `#F59E0B`: primary CTA, stage rail, risk markers, and key icons.
- Cool white `#FFFFFF`: primary content surfaces.
- Mist `#F4F7FA`: alternating content bands and table rows.
- Graphite `#172033`: primary light-surface headings and high-priority values.
- Slate `#5B6678`: supporting copy.

Use the existing Sora display and Inter body fonts. No new font files are introduced. Letter spacing remains normal for headings; utility labels may use restrained uppercase without wide decorative tracking.

## Procurement Stage System

Add a reusable `StageIntro` visual primitive with:

- two-digit stage number;
- concise uppercase stage label;
- H2;
- supporting description;
- optional `id` for section navigation.

Desktop layout uses a bounded stage column beside the H2 content:

```text
01  PRODUCT FIT     Is this roll suitable for your program?
                    Supporting answer and qualification context
```

Mobile layout stacks the number and stage label above the H2. The stage marker has a navy background or navy text with an amber rule, occupies little vertical space, and never becomes an isolated decorative card.

Use these stage assignments:

1. `01 Product fit` — procurement overview.
2. `02 Risk control` — buyer risks.
3. `03 Specification` — grouped specifications.
4. `04 Application` — application review.
5. `05 Approval route` — workflow.
6. `06 Evidence` — quality and evidence boundary.
7. `07 Request quote` — RFQ.
8. `08 Sourcing FAQ` — FAQ.
9. `09 Related programs` — related products.

The decision-fact strip is not numbered because it is a summary instrument panel, not a procurement stage.

## Hero

- Preserve the actual product image, breadcrumbs, B2B badge, H1, description, Request Quote CTA, and sample/WhatsApp CTA.
- Use the existing full-bleed hero rather than adding a separate hero card.
- Keep desktop hero compact.
- On mobile use a minimum height around 420 px so the H1, description, and two vertically stacked CTA buttons fit without occlusion.
- Limit H1 width and use balanced line-height. The H1 remains the only hero-scale heading.
- CTA buttons use stable full width on narrow mobile and natural width above the small breakpoint.

## Decision Fact Instrument Panel

Restyle the four facts as a procurement instrument panel:

- label is small and secondary;
- value is larger, darker, and higher contrast;
- icon sits in a narrow amber/navy indicator region;
- dividers are clearer than the current generic grid;
- minimum height is 72-80 px;
- two columns on mobile, four on desktop;
- no rounded floating cards.

## Section Hierarchy

### Procurement Overview

- White dossier surface inside the mist band with one navy top rule.
- Product image remains prominent but bounded.
- Direct answer and qualification checklist use high-contrast headings and quiet dividers.
- Buyer profiles form a compact strip.
- Supply capabilities use meaningful icons and slightly varied navy/amber emphasis so the four items do not read as identical placeholders.
- The supply note is styled as a controlled evidence boundary, not fine-print noise.

### Risk Control

- Use six sequential amber risk markers `R1` through `R6`.
- Question has highest card priority, consequence is secondary, response is in a pale navy control region.
- Desktop remains three columns.
- Mobile changes to one-column divided rows with no card-like detached margins.

### Specifications

- Keep deep-navy group headers.
- Strengthen field-name/value contrast.
- Use a narrow amber rule at the group edge.
- Preserve alternating rows and mobile label/value stacking.
- Table content stays semantic `dl/dt/dd`.

### Application

- Retain one real application image.
- Add compact application labels and stronger `Confirm` treatment.
- Mobile image is full width with a stable aspect ratio; content follows in source order.

### Approval Route

- Replace the generic grid appearance with a procurement timeline.
- Desktop: responsive four-column grid with an amber connecting rail behind stage points.
- Tablet: two columns with logical source order.
- Mobile: vertical rail, numbered nodes, title, and description.
- The `ol` remains semantic and all seven steps remain in source order.

### Evidence And RFQ

- Evidence uses a stronger navy label and amber verification markers.
- Evidence and RFQ should visually feel like one conversion sequence, using compatible dark and light surfaces without merging their semantics.
- RFQ remains a navy qualification panel plus white form panel.
- The RFQ H2 and stage marker are visually dominant.
- Inputs, labels, error states, and submit button remain owned by the existing `InquiryForm`.

### FAQ And Related Products

- FAQ remains visually secondary after RFQ.
- Questions use 48 px minimum tap targets and a clearer open state with navy text and amber disclosure indicator.
- Related product items remain three columns on desktop.
- Mobile uses horizontal scrolling with scroll snap: one complete item plus a visible edge of the next item.
- The horizontal list has an accessible region label and no essential content depends on the partial preview.
- Links maintain visible focus states and each item remains a semantic article.

## Mobile Inquiry Bar

Create `MobileInquiryBar.tsx` as a small client component rendered only below the desktop breakpoint.

It contains:

- primary link: `Request Quote`, targeting `#inquiry`;
- secondary external link: WhatsApp, with icon and text;
- accessible labels and visible focus states;
- a fixed bottom position with a white surface, top border, restrained shadow, and `env(safe-area-inset-bottom)` padding;
- minimum 44 px interactive height per control.

The component observes the `#inquiry` section using `IntersectionObserver`. It hides while the RFQ section intersects the viewport and reappears after the section leaves, preventing it from covering inputs or submit controls.

Behavior details:

- default visible after hydration;
- if `IntersectionObserver` is unavailable, remain visible but the page reserves enough bottom padding so content is not hidden;
- transition only opacity and translate, and disable motion under `prefers-reduced-motion`;
- use `aria-hidden` and remove pointer interaction while hidden;
- no analytics, local storage, or network request.

The page adds mobile-only bottom padding equal to the bar height plus safe area. Desktop adds no extra padding.

## Mobile Layout Requirements

- 390 px viewport has no horizontal overflow except the intentional related-products scroller.
- Hero H1 does not occlude breadcrumbs, badge, body copy, or CTAs.
- Fact panel is two columns with readable wrapping.
- Procurement overview, risks, specifications, applications, workflow, evidence, RFQ, and FAQ are single-column in semantic order.
- Specification labels appear above values on narrow screens.
- Workflow uses a vertical rail.
- FAQ remains original config order.
- Related-product scroller uses `overflow-x-auto`, `snap-x`, stable item widths, and touch-friendly links.
- Fixed inquiry bar never covers the form or final related-product content.

## Accessibility

- Preserve one H1 and logical H2/H3 hierarchy.
- Stage numbers are supplemental; H2 headings communicate the section without them. Decorative rail elements use `aria-hidden`.
- Keep native details/summary FAQ semantics.
- Minimum mobile tap targets are 44 px; FAQ summaries target 48 px or more.
- All links and buttons show visible focus.
- WhatsApp links use `target="_blank"` with `rel="noopener noreferrer"`.
- Related-product horizontal scrolling remains keyboard accessible.
- Respect `prefers-reduced-motion`.
- Color contrast must remain sufficient on navy, amber, mist, and white surfaces.

## Architecture And File Boundaries

- Modify `ProductDetailTemplate.tsx` for stage hierarchy and responsive styling.
- Create `MobileInquiryBar.tsx` for viewport-aware fixed mobile actions.
- Extend the focused contract test to lock component usage and hierarchy markers.
- Add focused behavior tests for the client bar only if the repository's current test stack supports DOM execution without introducing a new framework. Otherwise verify its source contract plus production HTML and TypeScript; do not add a large testing dependency for one observer component.
- Do not modify product config, metadata, schemas, image slots, global theme, PageHero, InquiryForm, navigation, or the inquiry backend unless verification exposes a concrete blocker.

## SEO And GEO Preservation

- Keep all current visible copy and source order for product facts, answers, risks, specifications, applications, workflow, evidence, RFQ, FAQ, and related products.
- Keep title, description, canonical, Open Graph data, and JSON-LD builders unchanged.
- Product, BreadcrumbList, and FAQPage schemas continue using the same config.
- Do not add Offer, price, rating, review, fixed MOQ, fixed lead time, certification, or universal compatibility claims.

## Verification

Contract tests must assert:

- all nine stage labels and meaningful numbers are rendered;
- risk markers, specification hierarchy, workflow rail, FAQ open state styling, and mobile related scroller exist;
- `MobileInquiryBar` is imported and rendered with inquiry and WhatsApp targets;
- the template remains server-rendered and the client directive is isolated to the bar;
- RFQ remains before FAQ;
- all visible content still consumes the existing config;
- existing schema and image-slot contracts remain valid.

Run TypeScript, all contract tests, and the Next.js production build. Restart the production preview on port 3002 and verify HTTP 200, one H1, production canonical, stage markers, RFQ-before-FAQ order, mobile bar source markup, related scroller markup, and Product/BreadcrumbList/FAQPage JSON-LD.

Per the user's earlier instruction, review uses direct browser preview rather than screenshots.
