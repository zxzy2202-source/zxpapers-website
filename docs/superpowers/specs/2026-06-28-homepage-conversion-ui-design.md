# Homepage Conversion UI Design

Date: 2026-06-28
Project: ZhixinPaper B2B export website
Scope: Homepage UI optimization for inquiry conversion

## Objective

Improve the homepage so overseas B2B buyers can quickly understand what ZhixinPaper supplies, confirm whether their product/specification fits, trust the factory, and start a quotation request.

The page should prioritize inquiry conversion over broad brand storytelling. SEO and GEO content should remain intact, but the visual hierarchy should make the buying path clearer and reduce repeated trust signals.

## Target Buyers

- Importers and distributors buying receipt rolls, shipping labels, NCR forms, and packaging labels in bulk.
- POS paper and label resellers checking common sizes, MOQ, export packing, and repeat-order stability.
- OEM/private-label buyers looking for custom printing, artwork proofing, branded packing, and compliance options.
- Converter or peer-factory buyers interested in jumbo roll supply and OEM cooperation.

## Primary Buyer Questions

The homepage should answer these questions in the first 30 seconds:

1. What products can this factory supply?
2. Do they handle my size, material, and custom printing requirement?
3. Are they a real export-ready factory?
4. What information do I need to send to get a useful quote?
5. What is the fastest next action: quote form, WhatsApp, or product page?

## Recommended Approach

Use the "Inquiry Path Slimming" approach:

- Keep the current homepage content foundation.
- Improve hierarchy, spacing, and section emphasis.
- Consolidate repeated factory proof.
- Make product entry cards feel like buying paths rather than generic catalog tiles.
- Keep the main CTA visible and specific: quote, WhatsApp, and product-specific inquiry.

This is preferred over a full visual rebuild because the existing page already has strong product, factory, SEO, and GEO coverage. The main issue is conversion clarity, not missing content.

## Visual Direction

### Palette

- Factory navy: `brand-navy-alt` / `brand-navy` for authority and export trust.
- Amber: `amber-500` for primary quote actions.
- Slate: `slate-50` through `slate-900` for a clean industrial B2B interface.
- White: used generously to reduce visual weight and make quote actions easier to find.

Avoid adding a decorative new palette. The page should stay recognizably ZhixinPaper.

### Typography

- Continue using Sora for headings and Inter for body text.
- Use tighter heading hierarchy inside cards and panels.
- Avoid oversized display type outside the hero.
- Keep English copy direct and procurement-oriented.

### Signature Element

Add a "Quote Readiness Panel" concept in the hero/right-side slot. It should feel like a practical procurement checklist, not a decorative stats card.

Suggested content:

- Product type: rolls, labels, NCR, packaging labels
- Size/spec: width, length, core, GSM, adhesive, ply
- Custom need: logo, Pantone, QR, bilingual printing, private packaging
- Destination: port/country for FOB, CIF, or DDP quotation

The panel should tell buyers exactly what to prepare before asking for a quote, lowering inquiry friction and improving lead quality.

## Homepage Structure Changes

### Hero

- Keep the existing factory/product image carousel and dual CTA.
- Rework the right-side procurement card into the Quote Readiness Panel.
- Keep trust badges short and specific: ISO 9001, BPA-free options, OEM/private label, FCL 3-5 days.
- Avoid repeating the same factory stats too many times in the hero area.

### Product Finder

Make the product section serve buying intent:

- Stock rolls and labels
- Custom printed rolls, labels, and NCR forms
- Compliance-sensitive products such as BPA-free or phenol-free thermal paper
- Jumbo roll and OEM supply

Each card should include:

- Clear product title
- Buyer-use case
- Typical specs
- Specific CTA, such as "Get Roll Quote" or "Start Custom Project"

### Factory Proof

Consolidate repeated trust information into one stronger proof block:

- Factory area
- Production capacity
- Export markets
- OEM/private-label capability
- Certificates and export documents

This block should be readable at a glance and should not duplicate the hero too heavily.

### Dark Sections

Limit dark navy sections to the strongest conversion or differentiation moments.

- Keep Jumbo Roll & OEM Partnership as the main dark section.
- Consider moving logistics/container loading to a lighter section style.
- Avoid stacking several dark bands close together, because it makes CTA emphasis weaker.

### Final CTA

Keep the final CTA, but make it echo the procurement checklist:

- Product
- Size/spec
- Quantity
- Destination
- Custom printing or blank stock

The final CTA should reinforce that buyers can get a quote within 24 hours when they send these details.

## SEO and GEO Requirements

- Preserve the homepage H1 and major product entity coverage.
- Keep Key Facts About ZhixinPaper for AI-readable entity extraction.
- Keep product category links and internal links.
- Preserve concise factual language about factory capability, certificates, export terms, and served markets.
- Do not hide key text inside images.

## Implementation Boundaries

- Primary file: `src/app/page.tsx`.
- Optional small supporting styles in `src/app/globals.css` only if needed.
- No routing changes.
- No backend changes.
- No admin changes.
- No broad refactor outside homepage components unless required to remove obvious duplication safely.

## Verification

After implementation:

- Run TypeScript check or project build.
- Start the local Next.js dev server if needed.
- Inspect desktop and mobile homepage views.
- Confirm CTAs remain visible and text does not overflow.
- Confirm no important SEO/GEO sections were removed.

## Open Decision

Proceed with the recommended "Inquiry Path Slimming" implementation unless the user asks for a stronger brand-led redesign.
