# Compact B2B Product Detail Template Design

## Objective

Rework `ProductDetailTemplate` into a compact B2B procurement layout that is faster to scan, compare, and convert without removing the product facts, risk controls, specifications, workflow, evidence, FAQ, related products, or SEO/GEO content already approved for `/products/linerless-labels/3-1-8-x-263`.

The redesign addresses three current problems:

- repeated left-introduction/right-content layouts make every section feel the same;
- large headings, images, fixed card heights, and generous vertical spacing make the page unnecessarily long;
- the qualified RFQ appears after too much supporting content.

## Design Direction

Use a compact procurement-document aesthetic: restrained navy and amber, smaller section typography, dense but readable rows, clear dividers, and a limited number of informative images. The page should feel like a professional sourcing brief rather than a sequence of promotional panels.

No global header, footer, brand token, navigation, or inquiry-backend redesign is included.

## Information Architecture

Render modules in this order:

1. Compact product hero.
2. Four decision facts.
3. Combined procurement overview.
4. Buyer risk controls.
5. Full-width grouped specification tables.
6. Application review.
7. Compact approval workflow.
8. Quality and evidence boundary.
9. Qualified RFQ.
10. B2B sourcing FAQ.
11. Related product programs.

The RFQ moves before FAQ and related products because a qualified buyer should not need to consume every supporting answer before contacting sales. FAQ and recommendations remain visible after the conversion point for search discovery and buyers who need more evidence.

## Hero And Decision Facts

- Reduce the hero minimum height from approximately 430 px to 370 px.
- Keep the product image as a full-bleed hero background and preserve breadcrumbs, B2B badge, one H1, supporting copy, quote CTA, and sample CTA.
- Limit the readable hero copy width so the title does not spread too far across wide screens.
- Reduce decision-fact minimum height and vertical padding while preserving all four facts and icons.
- Keep two fact columns on mobile and four on desktop.

## Combined Procurement Overview

Merge the current direct-answer and supply-program sections into one `procurement-overview` band.

Desktop structure:

- left: one product/application image in a stable 4:3 frame;
- right: direct answer label, H2, answer, and four qualification checklist rows;
- below: a compact buyer strip followed by four supply-program items.

The buyer strip uses concise inline rows or compact grid cells. Supply-program items use a two- or four-column bordered grid with no fixed large height. Each item keeps its title, description, and buyer value. The review-dependent note remains visible below the grid.

This merge removes one full section boundary and avoids repeating a large introduction block immediately after the direct answer.

## Buyer Risk Controls

- Use one full-width section heading above the content.
- Render six risk items in a three-column desktop grid, two columns on tablet, and one on mobile.
- Remove the left-column context image from the visible layout.
- Remove fixed `min-height`; cards grow from their actual content.
- Keep question, consequence, and review response, separated by a thin divider.
- Use the existing risk image configuration as retained data, not rendered content.

## Specifications

- Use one full-width section heading.
- Render each specification group as a compact bordered table-like block.
- Keep the group heading and description in a narrow header row.
- Render specification fields as horizontal rows on desktop: label in a fixed or bounded first column, value in the second column, optional note below or in a third region.
- Use alternating white and light-slate row backgrounds for scanning.
- On mobile, stack label above value and note.
- Remove the specification context image from the visible layout while retaining its configuration.

## Application Review

- Retain one image because application surfaces are visually useful.
- Use a shorter wide image region rather than stretching the image to the full height of all application copy.
- Keep four application items as compact rows with title, description, and `Confirm` line.
- On desktop use a 40/60 split; on mobile place image before text.

## Approval Workflow

- Use one full-width section heading.
- Remove the visible workflow context image while retaining its configuration.
- Render seven steps as a compact responsive grid: four columns on wide desktop, two on tablet, one on mobile.
- Each step displays its number, title, and concise description with consistent alignment.
- Order remains semantic through one `ol`; CSS controls columns without changing source order.

## Evidence

- Retain the factory/quality image because it supports the evidence section.
- Use a shorter 40/60 split rather than a full-height stretched image.
- Keep all five evidence checks and the evidence-boundary note.
- Reduce heading size and internal vertical spacing.

## RFQ

- Move RFQ directly after evidence.
- Preserve the navy qualification panel and white form panel.
- Reduce panel padding and heading size.
- Keep all product-specific checklist and prefilled qualification fields.
- Preserve the WhatsApp link and existing form validation behavior.

## FAQ

- Use one full-width heading above the questions.
- Do not render the FAQ context image. Its slot and fallback remain registered.
- Render ten native `details` elements in two desktop columns while preserving DOM order. Use CSS multi-column or an ordered grid strategy that does not reorder questions for keyboard or mobile users.
- On mobile use one column in original order.
- Keep the first answer open only if it does not create uneven desktop columns; otherwise render all closed and update the contract accordingly. The preferred implementation keeps native disclosure semantics and all questions closed for balanced columns.
- Move the small text-only related links out of the FAQ intro; the visual related-product section already provides discovery links.

## Related Products

- Keep the three approved recommendations.
- Use a three-column desktop grid and one mobile column.
- Change media frames from 4:3 to 16:9 to reduce height.
- Reduce item padding and copy height while preserving label, H3, description, buyer fit, and link.
- Keep stable equal-height item bodies and visible focus states.

## Typography And Spacing

- Standard section H2: 28-32 px desktop, 24-28 px mobile.
- Hero remains the only hero-scale heading.
- Section vertical padding: 36-48 px rather than 48-64 px.
- Body text: 14-16 px with comfortable line height.
- Utility labels and table labels: 11-13 px.
- Reduce repeated `mt-7` and `mt-8` gaps where a 16-24 px gap is sufficient.
- Avoid fixed card heights except where equal-height related-product items materially improve alignment.

## Image Policy

Visible template images are limited to:

1. Hero.
2. Procurement overview.
3. Application review.
4. Quality/evidence.
5. Related-product thumbnails.

The risk, specification, workflow, and FAQ image configuration fields and admin slots remain intact but are not rendered in this compact layout. This preserves uploaded data and allows a future layout variant to reuse them.

## Responsive And Accessibility Requirements

- Preserve one H1 and logical H2/H3 hierarchy.
- Maintain original content order in the DOM.
- Keep native `details`/`summary` keyboard behavior and visible focus states.
- Keep specification rows, workflow steps, related items, and RFQ fields inside a 390 px viewport.
- Do not introduce horizontal scrolling for primary content.
- Do not make information hover-dependent.
- Preserve meaningful image alt text.
- No new animation or client-side dependency is introduced.

## SEO And GEO Requirements

- Keep all visible product facts, direct answer, supply-program content, risks, specifications, applications, workflow, evidence, FAQ, and related-product copy.
- Keep metadata and canonical unchanged unless a later content-specific review requests it.
- Continue generating Product, BreadcrumbList, and FAQPage JSON-LD from the same configuration.
- Visible FAQ questions and answers remain exactly aligned with FAQPage schema.
- Do not emit Offer, price, availability, rating, review, certification, fixed MOQ, fixed lead time, or universal compatibility.

## Template Boundary

The change is implemented in the reusable `ProductDetailTemplate` and its contract tests. Configuration content remains product-specific. The linerless detail route remains the representative page used to verify the compact template.

No other current product page is migrated to this template as part of this change. Any future page using `ProductDetailTemplate` inherits the compact layout by design.

## Verification

Contract tests must assert:

- direct answer and supply program render inside one procurement-overview module;
- RFQ appears before FAQ in template source order;
- risk, specification, workflow, and FAQ context images are not rendered;
- risk grid, full-width specification groups, responsive workflow grid, two-column FAQ, and 16:9 related products exist;
- visible FAQ still consumes the same config used by FAQPage schema;
- the route and all registered image slots remain valid.

TypeScript, all contract tests, and the production build must pass. The production preview on port 3002 must return HTTP 200 with one H1, production canonical, procurement overview, RFQ before FAQ, related products, and Product/BreadcrumbList/FAQPage JSON-LD.

Review uses the direct browser preview rather than screenshots, per the user's instruction.
