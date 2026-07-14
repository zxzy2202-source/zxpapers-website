# NCR Receipt Books Channel Page Design

## Objective

Redesign `/products/ncr-receipt-books` as a dedicated procurement page for overseas distributors, commercial printing companies, and wholesale procurement buyers. The page must help buyers define a repeatable private-label receipt-book SKU, understand the production controls behind it, and submit a complete quotation brief.

The route, canonical URL, navigation label, and inquiry field names remain unchanged.

## Business Goal

The primary conversion is a qualified wholesale inquiry that includes:

- Buyer type and resale program
- 2-part or 3-part copy distribution
- Receipt-book size and orientation
- Sets per book
- Binding, wraparound cover, and perforation
- Start and end number rules
- Artwork, print colors, languages, and legal text
- Private-label cover, book labels, and export packing
- Initial quantity, destination, and repeat-order plan

The page must reduce uncertainty around faint lower copies, missing or duplicated numbers, binding drift, packing inconsistency, and repeat orders that do not match the approved specification.

## Target Buyers

### Overseas Distributors

Need a resale-ready receipt-book range with stable specifications, private-label covers, predictable carton data, and consistent repeat orders.

### Commercial Printing Companies

Need outsourced collating, numbering, perforation, and binding capacity when an order exceeds internal finishing capability or requires a controlled production program.

### Wholesale Procurement Buyers

Need volume pricing, branch-specific numbering or packing, approved specifications, and a reliable repeat-order reference.

## Reference Architecture

Use `/products/ncr-forms` as the structural reference because it already serves the same channel-buyer audience. Adapt the architecture rather than copying its content.

| NCR forms reference module | Receipt-books adaptation |
| --- | --- |
| Procurement hero | Private-label NCR receipt books for repeat wholesale orders |
| Four order facts | 2/3-part, 50/100 sets, numbered and perforated, private-label program |
| Direct answer | What are NCR receipt books? plus accurate-pricing checklist |
| Channel buyer programs | Distributor, commercial printer, and wholesale procurement programs |
| Choose by copy count | 2-part and 3-part copy roles |
| Choose by finished format | Stock, custom printed, private label, and branch-specific book programs |
| Sales enablement by application | Retail, field service, rental, donation, education, and transport receipt use |
| Wholesale specification workflow | Copy structure, size, sets per book, binding, numbering, artwork, and packing |
| Material and quality control | CB/CFB/CF transfer, number-range checks, perforation, and book-count verification |
| FAQ and inquiry | Receipt-book sourcing FAQ, related NCR products, and qualified quote brief |

Exclude loose NCR paper, 4-part and 5+ part products, continuous computer forms, and broad application content that belongs on the NCR aggregation page.

## Page Architecture

### 1. Procurement Hero

Purpose: identify the product, buyer, and commercial outcome immediately.

Recommended H1:

> Private-Label NCR Receipt Books for Repeat Wholesale Orders

Supporting copy should state that ZhixinPaper supplies duplicate and triplicate carbonless receipt books with controlled numbering, custom covers, binding, private-label packing, and approved repeat-order specifications.

Primary CTA: `Build a Quote Brief`

Secondary CTA: `WhatsApp`

### 2. Order Facts

Show four compact facts directly below the hero:

- Copy sets: 2-part or 3-part
- Book format: 50, 100, or custom sets per book
- Production control: numbered and perforated
- Channel program: private label and repeat SKU

### 3. Direct Answer

Use the approved split layout: a real handwriting or receipt-use image on the left and the answer content on the right.

Heading:

> What Are NCR Receipt Books?

Direct answer:

> NCR receipt books are bound carbonless receipt sets that transfer one handwritten entry to one or more copies without separate carbon paper. A 2-part book gives the customer an original and retains an office copy; a 3-part book adds an accounts, warehouse, or file copy.

Below the definition, show the accurate-pricing checklist:

- Buyer type and resale program
- 2-part or 3-part copy roles
- Size and sets per book
- Binding, cover, and perforation
- Number range and artwork
- Quantity, packing, destination, and repeat-order plan

CTA: `Send Your Receipt Book Specification`

### 4. Channel Buyer Programs

Use the same audience logic as the NCR aggregation page, but make each program receipt-book specific.

- Overseas distributors: range planning, private-label covers, carton data, and repeat SKUs
- Commercial printers: outsourced collating, numbering, perforation, binding, and overflow capacity
- Wholesale procurement: branch allocation, approved specifications, volume pricing, and delivery terms

### 5. Choose by Copy Count

Present 2-part and 3-part programs with visible copy-role examples.

- 2-part: customer original plus bound office copy
- 3-part: customer original plus accounts and file or warehouse copies

Each option links to its corresponding NCR part page and explains when the extra copy is operationally justified.

### 6. Choose by Book Program

Use an asymmetric visual directory rather than four identical cards.

- 2-part distributor program
- 3-part controlled-record program
- Custom printed receipt books
- Private-label and branch-specific programs

Each item uses a distinct, relevant image and describes its resale or repeat-order role.

### 7. Resale Applications

Show end-use demand that helps distributors and printers qualify their own customers:

- Retail and cash sales
- Field service and mobile collection
- Rentals and deposits
- Charity and donation receipts
- Schools, clubs, and membership payments
- Transport, delivery, and local service counters

This section is sales enablement, not a generic industry gallery. Each item explains the receipt fields or copy roles commonly required.

### 8. Repeatable SKU Workflow and Specification Matrix

The workflow uses real action names instead of generic stage labels:

1. Send the current sample or artwork
2. Approve layout, copy roles, and number rules
3. Verify the first production run
4. Reorder the approved SKU

The specification matrix groups requirements into:

- Copy structure
- Book format
- Finishing
- Tracking and numbering
- Printing and legal text
- Private-label packing

### 9. Material, Numbering, and Quality Control

Use a factory or quality-inspection image with concise definitions and controls:

- CB top sheet, CFB middle sheet, and CF bottom sheet
- Pressure-transfer and lower-copy readability test
- Start and end number approval
- Missing and duplicate number checks
- Perforation position and tear-off test
- Sets per book, books per wrap, and books per carton verification

### 10. FAQ, Related Products, and Quote Brief

The FAQ contains 9 to 10 practical questions covering definition, 2-part versus 3-part, sets per book, numbering, binding, copy colors, multilingual text, samples, MOQ, lead time, private label, and repeat orders.

Related links:

- Custom NCR Forms
- NCR Invoice Books
- Delivery Note Forms
- 2-Part NCR Forms
- 3-Part NCR Forms
- NCR Forms and Carbonless Paper

The final inquiry panel requests the full specification and uses the shared `InquiryForm` component with a receipt-book-specific initial message.

## Visual Direction

- Preserve the existing ZhixinPaper navy, amber, slate, Sora, header, and footer system.
- Use a restrained B2B procurement-catalog style with medium-high information density and minimal motion.
- Avoid repeated rounded cards, decorative badges, large shadows, and identical image-card grids.
- Use square or slightly rounded framed tools consistently; buttons may retain the site's existing radius.
- Use distinct images for the direct answer, buyer risk, 2-part program, 3-part program, private label, factory control, and packing.
- Desktop layouts may be asymmetric; every section collapses to a strict single column below 768px.
- Keep desktop hero CTA labels on one line and visible in the first viewport.

## SEO and GEO Design

### Primary Search Intent

- NCR receipt books
- Carbonless receipt books
- Duplicate receipt books
- Triplicate receipt books
- Custom receipt book printing
- Numbered receipt books
- Private-label receipt books
- Wholesale receipt books

### Entity and Topic Coverage

The page explicitly defines NCR receipt books, 2-part and 3-part copy roles, CB/CFB/CF paper, sequential numbering, perforation, binding, wraparound covers, sets per book, private-label packing, production proof, and repeat-order SKU control.

### Metadata

Recommended title:

> NCR Receipt Books for Distributors | Duplicate and Triplicate

Recommended description:

> Wholesale NCR receipt books for distributors and printers, including duplicate and triplicate books, controlled numbering, custom covers, binding, private-label packing, and repeat-order specifications.

### Structured Data

Render visible content and matching JSON-LD for:

- `Product`
- `BreadcrumbList`
- `FAQPage`
- `HowTo`

The Product schema exposes copy count, paper system, size, sets per book, printing, numbering, finishing, packing, and proof process through `additionalProperty`.

The visible FAQ count must equal the FAQ schema count. The visible proof-to-reorder steps must match the HowTo steps in name and order.

### Internal Linking

Use descriptive links to the NCR aggregation page, 2-part and 3-part pages, custom NCR forms, invoice books, and delivery notes. Avoid generic `Learn More` labels.

Update `public/llms.txt` so the route description reflects its distributor and repeat-order positioning.

## Component Architecture

### Route Server Component

`src/app/products/ncr-receipt-books/page.tsx` remains responsible for:

- Metadata
- FAQ, Product, Breadcrumb, and HowTo schemas
- Image-slot resolution
- WhatsApp quote message
- Static product, application, and FAQ data
- Passing typed props to the page component

### Dedicated Page Component

Create `src/components/products/NcrReceiptBooksCatalogPage.tsx` for the receipt-book-specific layout. It remains a Server Component and uses:

- `Layout`
- `PageHero`
- `InquiryForm`
- `next/image`
- `next/link`
- The site's existing Lucide icon family

Do not modify `ProductCategoryShowcaseTemplate` or change other NCR routes.

### Image Slots

Add replaceable slots with relevant fallbacks:

- `ncr-receipt-books:hero`
- `ncr-receipt-books:overview`
- `ncr-receipt-books:buyer-risk`
- `ncr-receipt-books:2-part`
- `ncr-receipt-books:3-part`
- `ncr-receipt-books:private-label`
- `ncr-receipt-books:production`
- `ncr-receipt-books:packing`

Register the slots in `src/config/imageSlots.ts` and fallbacks in `src/lib/imageSlotDefaults.ts`. If an admin slot is empty, the fallback must render without a blank module.

## Data Flow and Failure Handling

1. The route requests every image slot through `getSlotImages`.
2. Each missing slot resolves to a code-defined fallback.
3. The route builds content arrays and JSON-LD from the same visible data sources where practical.
4. The dedicated component renders semantic sections, lists, definitions, native details, links, and the shared inquiry form.
5. A failed external image must not remove text content or collapse the section dimensions.
6. Inquiry validation and backend errors continue to use the shared form's inline error and fallback contact behavior.

## Accessibility and Interaction

- One H1 only.
- Hierarchical H2 and H3 structure.
- Native links for navigation and native details for FAQ.
- Visible `focus-visible` states on links, summaries, and CTAs.
- Decorative icons use `aria-hidden`.
- All images have meaningful alt text, except decorative hero background imagery where an empty alt is appropriate.
- Heading anchors use `scroll-mt-24` where linked.
- No horizontal overflow at 390px.
- Motion remains limited to existing hover and FAQ disclosure feedback and honors reduced motion.

## Verification

- Run `pnpm type-check`.
- Run `pnpm build` and confirm the route is generated.
- Restart the production preview on port 3001 after the build.
- Confirm target and related routes return HTTP 200.
- Confirm canonical URL and exactly one H1.
- Confirm Product, Breadcrumb, FAQ, and HowTo JSON-LD.
- Confirm visible FAQ and HowTo counts match schema data.
- Confirm all target-page images load at desktop and mobile viewports.
- Confirm no horizontal overflow at 1440px and 390px.
- Confirm hero CTAs remain visible and do not wrap on desktop.
- Trigger inquiry validation and confirm the first invalid field receives focus.
- Confirm browser console has no errors.
- Run Lighthouse and record accessibility, SEO, CLS, TBT, and observed LCP.

## Out of Scope

- Changing the URL or primary navigation label
- Redesigning the shared header or footer
- Modifying invoice-book, delivery-note, or generic NCR templates
- Adding checkout, live pricing, or an online product configurator
- Making legal claims for destination-market receipt wording
