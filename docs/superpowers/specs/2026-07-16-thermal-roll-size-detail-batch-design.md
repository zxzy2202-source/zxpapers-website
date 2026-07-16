# Thermal Roll Size Detail Batch Design

## Scope

Migrate the first batch of six concrete thermal-paper-roll size pages to the approved `ProductDetailTemplate`:

- `/products/thermal-rolls/57x30mm`
- `/products/thermal-rolls/57x40mm`
- `/products/thermal-rolls/57x50mm`
- `/products/thermal-rolls/80x70mm`
- `/products/thermal-rolls/80x80mm`
- `/products/thermal-rolls/110x80mm`

Category, aggregation, blank-roll and custom-printing pages stay unchanged in this batch.

## Audience And Page Job

The audience is distributors, importers, private-label brands and multi-site procurement teams sourcing repeat thermal paper roll orders. Each page must help a buyer qualify the roll specification, compare quotations on the same basis, prepare an RFQ and understand which claims require order-specific confirmation.

## Architecture

Use a shared thermal-roll configuration factory for recurring B2B content, image assignments, procurement risks, approval workflow, evidence boundaries, FAQs and related products. Keep one exported `ProductDetailConfig` per size so each URL retains product-specific metadata, specifications, applications, packaging data and quotation language.

Add a generic server-side image resolver used by all product-detail routes. Each route remains explicit, preserving Next.js static routing and independent metadata while reducing the route implementation to config selection, metadata generation, schema generation and template rendering.

## Content Rules

- Preserve measurements and pallet/container calculations already present in the legacy pages, but label them as reference packing plans that require final carton and pallet confirmation.
- Do not publish fixed MOQ, lead-time, image-life, BPA-free, BPS-free, phenol-free, certification or regulatory promises unless the exact order material and document scope are confirmed.
- Describe printer fit as a qualification process based on printer model, width, outer diameter, core, winding, paper basis, roll length and cutting/feed requirements.
- Give each size a distinct direct answer, application set and RFQ message so pages are useful independently and do not become doorway-page variants.
- Keep one visible H1, a self-referencing canonical, Product/Breadcrumb/FAQ JSON-LD and internal links to the parent range and adjacent sizes.

## Visual System

Reuse the approved Industrial Procurement Dossier presentation without changing its tokens or section order. The signature element remains the numbered nine-stage procurement document structure. Thermal-roll pages use real product, POS, retail, hospitality, kiosk or mobile-printer imagery through registered image slots; shared contextual imagery is acceptable where the same production or approval process applies across sizes.

Mobile behavior remains unchanged: compact hierarchy, horizontal related-product browsing, safe-area-aware fixed quote actions and automatic suppression of the fixed bar while the RFQ form is visible.

## Verification

- Contract tests confirm all six routes use `ProductDetailTemplate` and config-driven metadata/schema helpers.
- Config tests confirm unique canonical paths, product names and thermal-roll procurement fields.
- TypeScript validates image-slot keys and complete `ProductDetailConfig` objects.
- Production build validates all six routes.
- Browser checks confirm HTTP 200, one H1, correct canonical, JSON-LD and responsive rendering on representative 57 mm and 80 mm pages.

