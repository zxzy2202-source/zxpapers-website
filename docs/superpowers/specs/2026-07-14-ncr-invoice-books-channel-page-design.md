# NCR Invoice Books Channel Page Design

## Objective

Replace the generic NCR invoice books landing page with a dedicated B2B channel page that helps overseas distributors, commercial printers, and stationery wholesalers qualify the product, prepare a complete RFQ, and evaluate ZhixinPaper as a repeat-order supplier.

The page must follow the visual and information patterns already established by `/products/ncr-forms`, while remaining specific to invoice book procurement.

## Audience And Buying Stage

Primary audiences:

- Overseas distributors building a resale range
- Commercial printers outsourcing collating, numbering, binding, or full production
- Stationery wholesalers and private-label buyers

The page serves buyers in supplier discovery, technical evaluation, shortlisting, and RFQ preparation. It is not written as an end-user retail product page.

## Conversion Goal

The primary goal is a specification-complete wholesale inquiry that can be priced without repeated clarification.

Primary CTA: `Build an Invoice Book Quote`

Secondary CTA: `WhatsApp Sales`

The quote brief must prompt the buyer for:

- Buyer type and sales channel
- 2-part or 3-part copy roles
- Finished size and orientation
- Sets per book and order quantity
- Numbering range and allocation rules
- Perforation, binding, cover, and writing shield requirements
- Artwork, languages, and print colors
- Private-label packing, destination, and repeat-order plan

## Page Structure

1. Compact hero with channel positioning and two CTAs
2. Four procurement facts: copy sets, number control, supply program, and lead time
3. Direct-answer section explaining NCR invoice books and the information required for pricing
4. Channel buyer risks: copy clarity, number integrity, perforation and binding, and repeat-order consistency
5. Invoice book programs: duplicate, triplicate, loose or padded sets, and private-label books
6. 2-part versus 3-part decision table
7. Specification matrix covering paper, size, printing, numbering, finishing, covers, and packing
8. Proof, production, numbering, binding, quality-control, and packing workflow
9. Private-label and repeat-order SKU controls
10. Representative use cases and sales programs
11. Procurement FAQ
12. Quote brief and inquiry form

## Content Direction

The hero promise is:

> Wholesale NCR Invoice Books Built for Controlled, Repeatable Supply

Supporting copy should state that ZhixinPaper manufactures custom duplicate and triplicate invoice books with controlled numbering, approved binding, private-label packing, and repeat-order specifications for distributors and commercial printers.

Replace universal `tax-ready` claims with precise wording: ZhixinPaper prints the buyer-supplied and buyer-approved invoice layout. The buyer remains responsible for confirming local tax, invoicing, and recordkeeping requirements.

Use concise, factual language. Avoid unqualified claims such as lowest price, guaranteed compliance, or exact MOQ when the value depends on size and finishing.

## Visual Design

Match the established NCR catalog design system:

- Compact, full-width hero with left-aligned copy
- Navy, white, slate, and amber palette
- White and light-slate full-width section bands
- Bordered grids and comparison tables instead of decorative card collections
- Restrained corner radii and shadows
- Lucide icons only for facts, process steps, and commands
- Independent image slots for hero, overview, buyer risk, product programs, production, and packing
- Desktop two-column layouts that collapse to one column on mobile
- Horizontally scrollable wide tables on narrow screens

The page should remain primarily server-rendered. Use native `details` elements for FAQ disclosure and keep client-side JavaScript limited to existing shared interactive components.

## Component Architecture

Create `src/components/products/NcrInvoiceBooksCatalogPage.tsx` as a dedicated presentation component. It receives resolved images, WhatsApp URL, product programs, use cases, FAQs, and quote data from the route.

Update `src/app/products/ncr-invoice-books/page.tsx` to own:

- Metadata and social previews
- Page copy and procurement data
- Image slot resolution
- Breadcrumb, Product, FAQ, and HowTo JSON-LD
- Props passed to the presentation component

Update image slot configuration only for invoice-book-specific assets. Do not change shared NCR page behavior.

## SEO Design

Primary intent: wholesale custom NCR invoice books from a manufacturer.

Primary topic entities:

- NCR invoice books
- Carbonless invoice books
- Duplicate invoice books
- Triplicate invoice books
- Custom printed invoice books
- Sequential numbering
- Carbonless CB, CFB, and CF paper
- Perforation, binding, covers, and private-label packing

Use one descriptive H1. H2 headings must map to buyer questions and procurement decisions. The title and description must accurately summarize the visible page, and the canonical URL must remain unchanged.

Internal links should connect to NCR forms, 2-part forms, 3-part forms, custom NCR forms, NCR receipt books, delivery note forms, OEM packaging, and quality control.

## GEO Design

Provide self-contained answer blocks that an AI system can quote without surrounding context:

- What is an NCR invoice book?
- When should a buyer choose 2-part versus 3-part?
- What specifications are required for a wholesale quote?
- How is numbering controlled across books, cartons, branches, or SKUs?
- How are repeat orders kept consistent?
- What proof and quality checks occur before mass production?

Each answer must identify the product, buyer context, decision criteria, and practical limitation. Comparison and specification information must be rendered as visible HTML, not only JSON-LD.

## Structured Data

Include:

- `BreadcrumbList` for the navigation hierarchy
- `Product` with a stable `@id`, category, audience, images, manufacturer, and visible additional properties
- `FAQPage` matching the visible FAQ content
- `HowTo` for the visible wholesale ordering workflow

Do not add `Offer` pricing because the product is custom quoted and no stable public price is available. Do not claim FAQ rich-result eligibility; FAQ markup is retained for machine-readable question-answer context.

## Accessibility And Performance

- Preserve the existing skip link and semantic layout
- Use one H1 and sequential heading levels
- Give every image a buyer-relevant alt description
- Ensure every link, button, summary, and form control is keyboard reachable
- Provide visible focus styles
- Do not rely on color alone for copy roles or status
- Maintain readable tables on mobile
- Use `next/image` with responsive `sizes`
- Avoid new animation dependencies and unnecessary client components

## Verification

- TypeScript check passes
- Production build passes
- Desktop checks at 1440 x 1000
- Mobile checks at 390 x 844
- Target route returns HTTP 200
- No browser console errors
- H1, metadata, canonical, and JSON-LD are present
- All CTA and internal-link targets resolve
- No horizontal page overflow at mobile width
- Visual comparison confirms consistency with `/products/ncr-forms`

