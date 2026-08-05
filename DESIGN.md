# Full-site paper product architecture and design contract

## Scope and authority

The current implementation scope covers both paper product lines: **Thermal Paper Rolls** and **NCR & Business Forms**. Keep every valid English URL. The unique family owners are `/products/thermal-paper-rolls` and `/products/ncr-forms`; size, chemistry, part-count, format, application, market, and capability pages support those owners without duplicating their full family copy.

The primary information architecture is: Home; Products with four families; OEM & Custom; Manufacturing; Resources; Markets; About; Contact. Products contains Thermal Paper Rolls, Thermal Labels, Printed & Packaging Labels, and NCR & Business Forms. Sizes and part counts belong in Popular Specifications, never beside product families as peer navigation.

## Reference sources

- `vendor/open-design/adapter/STATIC_POLICY.md`
- `vendor/open-design/upstream/design-systems/enterprise/DESIGN.md`
- `vendor/open-design/upstream/design-systems/enterprise/tokens.css`
- `vendor/open-design/upstream/design-systems/enterprise/components.html`
- `vendor/open-design/upstream/craft/anti-ai-slop.md`
- `zxpapers-最终页面树-20260729.md`
- `docs/DESIGN_SYSTEM.md`

Open Design is a static design input only. Its enterprise references inform density, borders, focus states, and responsive grouping; ZX Papers brand tokens, real assets, and source-driven product facts remain authoritative.

## Full-site visual contract

Use a procurement specification workbench rather than a marketing-card catalogue. The first viewport must identify the supplied family, intended buyer or application, quote-critical inputs, and a concrete RFQ action. Use Navy and Slate for structure, Amber only for the primary action, Sora for headings, and Inter for body copy. Keep a 4px spacing base, a 1240px maximum container, 6px controls, 8px cards, flat borders, visible focus rings, and 150–230ms purposeful motion. Do not use decorative gradients, floating section cards, invented metrics, generic feature grids, emoji icons, or unsupported claims.

Shared page components are `site-header`, `products-mega-menu`, `breadcrumb-trail`, `procurement-hero`, `product-family-router`, `specification-summary`, `popular-specifications`, `compatibility-check`, `evidence-register`, `related-owner-links`, `progressive-rfq`, `mobile-inquiry-bar`, and `site-footer`. Family, configuration, application, and evidence pages share templates; configuration objects supply canonical owner, facts, imagery, FAQs, and RFQ fields.

On mobile, use one-column content, a closed-by-default layered navigation, normal-flow hero content, definition lists instead of wide tables where possible, and 44px minimum targets. On desktop, use keyboard-operable mega menus and 7/5 or 8/4 content grids. The page body must never scroll horizontally. Real product, form, or manufacturing imagery is required where an image is shown; if no verified image exists, use a specification-led layout without a placeholder.

Customer-facing copy stays in procurement-oriented English. Prefer concrete inputs such as printer model, roll width, finished OD, core ID, paper grade, part count, copy sequence, numbering, proof approval, carton pack, and destination documents. Unknown parameters may be `Not sure`. MOQ, lead time, compatibility, chemistry, certification, and retention statements must be conditional on the quoted material, application, destination, and project review.

## Implementation gates

Header, Footer, Breadcrumb, metadata, JSON-LD, sitemap, and internal links must consume the same page ownership model. Canonical, Open Graph URL, structured-data URL, and the final breadcrumb item must agree. Thermal Paper Rolls and NCR each have one family owner. All existing English URLs remain reachable. Verify build, representative desktop/mobile pages, keyboard navigation, canonical and breadcrumb consistency, and the complete inquiry path before publish.

# Homepage UI optimization contract

## Design Direction

Use an incremental "Inquiry Path Slimming / Procurement Workbench" direction for the existing ZhixinPaper homepage. Preserve the current content, real product and factory imagery, routes, SEO/GEO entities, admin-configurable hero and inquiry behavior. Reorder and restyle the page so a buyer follows one clear path: confirm supply scope, prepare quote details, select a product, confirm specifications, choose a buying route, review production and compliance evidence, and submit an RFQ.

The hero remains the primary branded moment. Add a practical Quote Readiness Panel that asks for product, specification, customization and delivery information. Product entries become lighter procurement cards with separate media and content instead of oversized image-overlay tiles. Dark navy is reserved for the hero and final RFQ.

## Reference Sources

- `vendor/open-design/adapter/STATIC_POLICY.md`
- `vendor/open-design/adapter/RESOURCE_INDEX.md`
- `vendor/open-design/upstream/design-systems/default/DESIGN.md`
- `vendor/open-design/upstream/design-systems/default/tokens.css`
- `vendor/open-design/upstream/design-systems/default/components.manifest.json`
- `vendor/open-design/upstream/craft/anti-ai-slop.md`
- `vendor/open-design/upstream/craft/typography.md`
- `vendor/open-design/upstream/craft/typography-hierarchy.md`
- `vendor/open-design/upstream/craft/color.md`
- `vendor/open-design/upstream/craft/laws-of-ux.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/superpowers/specs/2026-06-28-homepage-conversion-ui-design.md`
- `src/app/page.tsx`

The Open Design `default` system supplies calm B2B density, flat surfaces, restrained motion and hierarchy guidance. ZhixinPaper's Navy/Amber/Slate palette and Sora/Inter typography remain authoritative.

## Design Tokens

- Brand surfaces: `brand-ink`, `brand-navy-deep`, `brand-navy`, `brand-navy-hover`.
- Primary action: `amber-500`; action hover: `amber-400` or existing branded variant.
- Page surfaces: `white`, `slate-50`; borders: `slate-200` and `slate-300`.
- Text: `slate-950`, `slate-600`, `slate-500`.
- Headings: Sora 600; body: Inter 400/500; retain the existing Next.js local font loading behavior.
- Spacing follows a 4px base. Section rhythm uses 48px mobile, 64px tablet and 64-80px desktop rather than uniform `py-20` everywhere.
- Controls use `rounded-md`; panels and cards use `rounded-lg`; no new arbitrary radii.
- Cards are flat by default. Hover uses a stronger Navy border, title color change and at most 2px arrow movement. Images may scale to at most 1.02 and must respect reduced motion.
- Keyboard focus uses the existing amber focus ring.

## Page Structure

1. Hero with dynamic imagery, H1, concise trust proof, primary/secondary CTA and Quote Readiness Panel.
2. Compact manufacturer facts strip using the current factual values.
3. Core product selector containing all six product entities and links.
4. Popular sizes/specification entry.
5. Three buyer routes for repeat supply, OEM and multi-SKU factory supply.
6. Custom production and the four-stage approval sequence.
7. Factory and quality evidence with real imagery, company facts, certification, QC and equipment routes.
8. Dark page-level RFQ with the existing checklist, WhatsApp link and InquiryForm.

## Component Plan

- `home-hero`: existing `PageHero` with both desktop and compact mobile readiness content.
- `quote-readiness-panel`: four numbered procurement inputs and an RFQ anchor.
- `manufacturer-facts-strip`: semantic definition list from `procurementFacts`.
- `core-product-selector`: section heading, six product cards and all-products link.
- `product-route-card`: separate image, specification, title, summary and product-specific CTA.
- `popular-size-selector`: existing `PopularSizesCarousel`.
- `buyer-route-list`: existing three buyer routes in a continuous bordered layout.
- `approval-sequence`: existing customization capabilities and ordered process.
- `factory-evidence`: real factory image, facts, evidence routes and compliance scope.
- `homepage-rfq`: existing RFQ checklist, WhatsApp and InquiryForm.

## Copy Tone

Keep all customer-facing copy in direct procurement-oriented English. Prefer concrete terms such as specification review, sample approval, repeat-order record, quoted grade, carton pack, printer compatibility, destination documents and OEM/private label. Avoid generic promises. Product actions should name the next task: Get a Roll Quote, Review Label Options, Start a Custom Print Project, Source NCR Forms, Review Applicator Requirements and Discuss Jumbo Roll Supply.

## Responsive Rules

- Below 640px, keep the primary CTA visible early, stack CTA controls, render the readiness panel in normal flow, retain a 2x2 facts strip and use single-column product cards with restrained image height.
- From 640px to 1023px, use a 2x2 readiness checklist and two-column product cards. Keep factory evidence image-first.
- At 1024px and above, use a roughly 7/5 hero split, a 3x2 product grid, continuous buyer-route columns and a two-column factory evidence block.
- Do not lock the hero to a height that clips content. Prevent horizontal overflow. Keep focus visible and all touch targets at least 44px high.

## Implementation Notes

- Primary implementation remains in `src/app/page.tsx`.
- Preserve `readPublicHero()`, hero image slots, metadata, schema, internal links, `id="core-products"`, `id="home-rfq"`, and `formId="home-rfq-form"`.
- Use `PageHero.rightSlot` and `PageHero.mobileRightSlot` rather than editing the shared component.
- Add one shared quote-readiness data source so hero and final RFQ cannot drift.
- Change `ProductLineCard` from an image-overlay tile into a white bordered procurement card. Preserve every `SlotKey`, fallback URL, alt and href.
- Prefer the existing Button variants for standalone CTAs. Do not nest interactive elements inside whole-card links.
- Reorder Popular Sizes ahead of Buying Routes.
- Do not change routes, admin, backend or data APIs.

## Image Manifest

No new images are required. Continue using all three dynamic hero images and their existing fallbacks, the six `home:category-*` image slots, and the resolved factory image. These are existing real product/factory resources. No AI-generated or stock assets are introduced.

## Risks / Open Questions

- Hero copy length is admin-controlled; the readiness panel must remain robust when title or subtitle length changes.
- `home:category-jumbo-rolls` may serve both the Jumbo card and factory evidence. Retain this existing behavior rather than inventing a new asset source.
- Existing factual values and compliance scope must remain source-driven and cautiously worded.

# Shared footer UI optimization contract

## Design Direction

Treat the shared footer as a procurement closeout rather than a generic brand appendix. Use four layers in order: a focused RFQ band, verified trust evidence, factory contact plus navigation, and a restrained address/copyright utility bar. Preserve the existing Navy/Amber/Slate language and keep Amber reserved for the primary RFQ action, icons and focus feedback.

## Reference Sources

- `vendor/open-design/adapter/STATIC_POLICY.md`
- `vendor/open-design/adapter/RESOURCE_INDEX.md`
- `vendor/open-design/upstream/design-systems/enterprise/DESIGN.md`
- `vendor/open-design/upstream/design-systems/enterprise/tokens.css`
- `vendor/open-design/upstream/design-systems/enterprise/components.html`
- `vendor/open-design/upstream/craft/anti-ai-slop.md`
- `vendor/open-design/upstream/craft/accessibility-baseline.md`
- `vendor/open-design/upstream/craft/typography.md`
- `vendor/open-design/upstream/craft/laws-of-ux.md`
- `docs/DESIGN_SYSTEM.md`
- `src/components/layout/Footer.tsx`
- `src/components/layout/ResponsiveFooterNavigation.tsx`

The Open Design enterprise system informs information density, flat grouping, focus treatment and responsive navigation. ZhixinPaper brand tokens and existing source-driven content remain authoritative.

## Design Tokens

- Surfaces: `brand-navy-alt` for the RFQ band, `brand-ink` for the main footer and `black/10` for the utility bar.
- Primary action: `amber-500` with `amber-400` hover; secondary action uses `outlineLight`.
- Text: white headings, `slate-300` body and `slate-400` supporting text.
- Borders: `white/10` and `white/20`; no shadows or decorative gradients.
- Typography: Sora 600 for titles, Inter 400/600 for body and controls.
- Controls use `rounded-md`, have a minimum 44px target and an Amber focus ring.
- Motion is limited to color, border and chevron rotation and must respect reduced-motion preferences.

## Page Structure

1. RFQ closeout band with specification prompt, `/contact` primary action and the existing WhatsApp route.
2. Four-item trust strip using the current certification and experience statements.
3. Main footer with factory identity/contact on the left and four navigation groups plus popular sizes on the right.
4. Utility bar with the current address, sitemap/FAQ/contact links, copyright and factory location.

## Component Plan

- `footer-rfq-band`: procurement-oriented title, support copy and two actions.
- `footer-trust-strip`: source-driven trust items in a responsive one/two/four-column layout.
- `footer-identity`: existing logo, manufacturer description and business hours.
- `footer-contact-list`: actionable phone, email and WhatsApp plus selectable WeChat text.
- `footer-navigation`: separate CSS-responsive desktop navigation and semantic mobile accordions.
- `footer-popular-sizes`: compact size index, always visible on desktop and collapsible on mobile.
- `footer-legal-bar`: existing address, utility links, copyright and location.

## Copy Tone

Use direct procurement language: product, size, quantity, destination, factory quote and specification review. Retain current factual statements without expanding certifications into unverified promises. Avoid generic marketing claims.

## Responsive Rules

- Below 640px, stack RFQ actions full-width, use a single trust column below 360px and two columns otherwise, and keep navigation groups collapsed by default.
- From 640px to 1023px, allow paired RFQ actions and two-column contact details while navigation remains accordion-based.
- At 1024px and above, use a contact column plus four continuously visible navigation columns.
- Mobile summaries are at least 56px high; every link and button target is at least 44px high.
- Long contact details, addresses and navigation labels wrap without horizontal overflow.
- Desktop/mobile variants use CSS visibility rather than JavaScript media-query state to avoid hydration layout changes.

## Implementation Notes

- Modify only the shared footer components and this design record; do not change routes, source data, backend behavior or dependencies.
- Keep `footerLinks`, `SITE` and `FACTORY` as the content sources.
- Move the existing CTA pair from the contact column into the RFQ band to create one clear conversion zone.
- Preserve native `details`/`summary` semantics on mobile and render a separate non-collapsible desktop navigation hidden from the mobile accessibility tree by CSS display.
- Continue using the existing logo and Lucide icons.

## Image Manifest

No new image is required. Continue using `/images/logo-dark.png` exactly once in the shared footer identity.

## Risks / Open Questions

- No separate social-link, language-selector, privacy-policy or terms modules currently exist in the shared footer sources. Do not invent destinations or legal text; preserve all content that is actually present.
- The footer is global, so validation must cover both a long homepage and a representative internal page at desktop and mobile widths.
