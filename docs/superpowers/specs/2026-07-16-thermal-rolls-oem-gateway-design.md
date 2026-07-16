# Thermal Paper Rolls OEM Gateway And Custom-Page Consolidation Design

## Objective

Reposition `/products/thermal-paper-rolls` as an OEM-led product-line gateway for thermal paper roll distributors, private-label brands, converters, and print partners while preserving its generic thermal paper rolls manufacturer/supplier topic. Consolidate duplicate custom-print URLs so each commercial and informational intent has one clear canonical owner.

## Business Assumptions

- Primary buyers are thermal paper importers and distributors, private-label brands, converters, print brokers, and receipt-media operators.
- Secondary buyers are multi-location retail or restaurant brands running branded receipt, coupon, or QR programs.
- Single stores and very small custom orders are content audiences or channel leads, not the primary factory acquisition target.
- The main conversion is a specification-based OEM inquiry containing enough information for feasibility review and pricing.

## Buyer Problems To Resolve

The page must directly address these purchasing risks:

1. A roll is quoted by width only and does not fit or feed in the target printer.
2. Stated length, paper weight, outer diameter, and core are not defined consistently across suppliers.
3. Artwork overlaps the live-print area, colors or languages are wrong, or QR/barcodes fail in the actual workflow.
4. The approved sample, production batch, packing, and repeat order do not follow the same specification.
5. Export cartons, inner protection, labels, or pallet configuration do not match the destination and sales channel.
6. BPA-free, BPS-free, phenol-free, FSC, certification, or compliance claims are presented without current product-scope evidence.
7. MOQ, proof, sample, and production timing are promised before artwork and process feasibility are reviewed.

## Current Problems

- `/products/thermal-paper-rolls` is visually strong but still reads mainly as a standard-size catalog.
- The current hero prioritizes POS, ATM, and kiosk, which overstates high-barrier application ownership and underrepresents the requested OEM/private-label focus.
- The site has two custom-roll product URLs plus one broad OEM custom-printing URL with overlapping keywords, duplicated content, and conflicting claims.
- Published custom pages disagree on MOQ, proof timing, production lead time, certification, compliance, color tolerance, and machine capability.
- The generic inquiry form cannot upload artwork and currently collects most technical requirements through a free-text message.

## Approved Information Architecture

| URL | Canonical role | Primary topic | Schema |
|---|---|---|---|
| `/products/thermal-paper-rolls` | OEM-led product-line gateway | thermal paper rolls manufacturer/supplier; OEM and wholesale program discovery | `CollectionPage`, `ItemList`, `FAQPage`, `BreadcrumbList` |
| `/products/thermal-paper-rolls/custom-printed` | Canonical custom-roll product page | custom printed thermal paper rolls; branded receipt rolls; private-label thermal rolls | `Product`, `FAQPage`, `BreadcrumbList` |
| `/products/custom-printed-thermal-rolls` | Permanent redirect | no independent topic | no page schema |
| `/oem/custom-printing` | Cross-product OEM printing service hub | OEM printing services for thermal rolls and labels | `Service`, `FAQPage`, `BreadcrumbList` |

The old custom-roll URL redirects permanently to `/products/thermal-paper-rolls/custom-printed`. Next.js may emit HTTP 308 for its permanent redirect primitive; this is the accepted implementation equivalent of the approved permanent 301 migration intent.

## Current Gateway Page

### Metadata

**Title**

```text
Thermal Paper Rolls Manufacturer | OEM & Wholesale Supply
```

**Description**

```text
Distributors, private-label brands and print partners can review thermal paper rolls by specification, printing, packing and document needs before requesting an OEM quote.
```

**H1**

```text
Thermal Paper Rolls for OEM, Private Label & Wholesale Supply
```

### Opening Answer

```text
ZhixinPaper supports blank and custom thermal paper roll programs for distributors, private-label brands, converters and print partners. Each program is reviewed against the application, complete roll specification, artwork, quantity, packing, destination and document requirement before pricing.
```

### Hero Actions

- Primary: `Plan an OEM Roll Program` -> `#oem-programs`
- Secondary: `Send Your Specification` -> `#inquiry`
- Supporting cues: blank and custom programs, private-label or neutral packing, artwork/proof/sample review, and repeat-order specification control.
- Do not show fixed MOQ, proof time, lead time, certification, or compliance badges in the hero.

### Module Order

1. **OEM Program Selector**
   - Distributor Stock Program
   - Private-Label Supply
   - Custom Printed Rolls
   - Converter / Print Partner
2. **GEO Opening Answer**: what information is needed before an OEM thermal roll quote.
3. **Problem Prevention**: printer fit, short-roll/quotation ambiguity, artwork and QR validation, repeat-order consistency, and packing risk.
4. **Product Routes**: blank rolls, custom printed rolls, POS receipt rolls, terminal rolls, material options, and standard sizes.
5. **Approval Workflow**: requirements, feasibility, PDF proof, physical sample when required, printer/scan test, approved master specification, production, inspection, and packing.
6. **OEM Supply Program**: packaging configuration, neutral/private-label production, version/IP control, repeat supply, and change confirmation.
7. **Evidence-Bounded FAQ**.
8. **Specification-Based OEM RFQ**.

### OEM Program Cards

**Distributor Stock Program**

```text
Build a multi-size blank-roll range around the required paper, carton configuration, SKU labels, destination and replenishment plan.
```

**Private-Label Supply**

```text
Review branded or neutral cartons, retail or distributor labels, pack quantities and repeat-order references before the packaging specification is approved.
```

**Custom Printed Rolls**

```text
Submit the print side, artwork, colors, repeat, live-print area, language and QR or barcode use for feasibility, proof and sample planning.
```

**Converter / Print Partner**

```text
Discuss overflow capacity, confidentiality, neutral production, artwork versions, packing references and repeat-order controls for partner programs.
```

Each card links to a relevant canonical child page or the inquiry section. Cards do not repeat long child-page specifications.

### GEO Answer Block

**Question**

```text
What information is needed before an OEM thermal paper roll quote?
```

**Answer**

```text
A quotation should define the application, printer model, width, outer diameter or length, core, paper grade, winding, print side, artwork, colors, repeat, quantity, packing, destination and document requirement. Custom MOQ, proof route and lead time are confirmed after specification and artwork review.
```

### Problem-To-Response Content

| Buyer question | Business risk | Page response |
|---|---|---|
| Will it fit the terminal? | Loading, feeding, printing, cutting, or sensor failure | Confirm application, printer, full dimensions, core, winding, marks, and sample-test scope |
| How do I compare roll quotations? | Short-roll disputes and false unit-price comparisons | Quote against width, OD or length, core, paper, pack, quantity, and agreed inspection basis |
| Will the artwork and QR work? | Wrong copy, overlap, scan failure, or print rejection | Review print side, live-print area, repeat, proof, physical sample, and scan/printer test where required |
| Will repeat orders match? | Batch drift, complaints, and repeated qualification | Reference the approved specification, packing, master sample, lot, and change confirmation |
| Will packing survive the route? | Moisture, deformation, damaged edges, and channel rejection | Review inner protection, carton, pallet, labels, destination, and arrival checks |

### Product Routing

The gateway summarizes and links to canonical product owners using literal entity names:

- Blank Thermal Paper Rolls
- Custom Printed Thermal Paper Rolls
- POS Receipt Paper Rolls
- 57mm x 40mm Payment Terminal Rolls -> `/products/thermal-rolls/57x40mm`
- BPA-Free and Phenol-Free Material Options
- Standard Thermal Paper Roll Sizes

The gateway answers “what is available and how to choose.” Child pages own detailed size, application, compliance, and custom-print intent.

### Approval Workflow Copy

```text
Requirements -> feasibility review -> PDF proof -> physical sample when required -> printer or scan test -> approved master specification -> production and inspection -> confirmed packing and repeat-order reference
```

Fixed MOQ, fees, proof time, sample time, and production lead time are replaced with:

```text
Confirmed after specification, artwork, material, packing and document review.
```

### Qualified RFQ

The existing form remains the submission mechanism. Its initial message template collects:

```text
Buyer type / program:
Application and printer model:
Width:
Outer diameter or required length:
Core:
Paper option:
Winding or sensor mark:
Blank or custom printed:
Print side, colors and repeat:
Quantity by SKU:
Packing requirement:
Destination:
Document requirement:
Current problem or sample reference:
```

This scope does not add file upload. The page tells buyers to send artwork or current-roll files by email or WhatsApp after submitting the inquiry.

## Canonical Custom-Roll Product Page

`/products/thermal-paper-rolls/custom-printed` owns all product-specific custom-roll intent.

### Metadata

**Title**

```text
Custom Printed Thermal Paper Rolls | OEM & Private Label
```

**H1**

```text
Custom Printed Thermal Paper Rolls for OEM & Private Label Programs
```

### Required Content

- Custom print use cases: logo, reverse-side promotion, coupon, static QR/barcode, multilingual copy, and private-label supply.
- Required inputs: roll specification, printer, print side, artwork, colors, repeat, live-print area, language, quantity, packing, destination, and document requirements.
- Approval process: feasibility, proof, optional physical sample, printer/scan test, and approved master sample.
- Packaging and repeat-order controls.
- Product-specific FAQ and custom-roll RFQ.
- Links back to the gateway and to the broader OEM service hub.

The page must not publish unsupported fixed MOQ, proof time, production time, color tolerance, scan rate, ink performance, certification, or market-compliance promises.

## OEM Custom-Printing Service Hub

`/oem/custom-printing` serves cross-product service intent for thermal rolls and labels.

### Metadata

**Title**

```text
OEM Printing Services for Thermal Rolls & Labels
```

### Required Content

- Choose a product path: thermal paper rolls or thermal labels.
- Artwork intake, print-side and live-print-zone review.
- Version, language, SKU, and approval control.
- NDA request and neutral-production workflow.
- Proof, sample, test, and change-confirmation coordination.
- Packaging program and product-page routing.

The service page does not repeat full product specifications, product MOQ tables, country-specific regulatory claims, or generic certification lists.

## Redirect And Internal-Link Migration

- Replace `/products/custom-printed-thermal-rolls` with a permanent redirect to `/products/thermal-paper-rolls/custom-printed`.
- Remove the old URL from Products navigation, footer data, product catalog lists, sitemap, `public/llms.txt`, schema ItemLists, and cross-links.
- Update homepage, product pages, material pages, market pages, OEM pages, and label cross-links that currently reference the old URL.
- Keep `/oem/custom-printing` in the OEM menu only; Products navigation points to the canonical custom-roll product page.
- Ensure all canonical URLs, breadcrumbs, Product/CollectionPage entities, and JSON-LD URLs match the surviving routes.

## Claims And Evidence Rules

- `BPA-free`, `BPS-free`, and `phenol-free` remain separate claims and are confirmed by material and document scope.
- FSC, ISO, test reports, certifications, and regulatory references must identify the applicable subject, product/material scope, date, and verification method before page publication.
- Do not publish `zero jam`, `no dust`, universal printer compatibility, guaranteed scan rates, fixed image life, or fixed transport performance without current test evidence.
- Do not state fixed MOQ, proof time, sample time, production lead time, payment terms, no setup fee, or specific color tolerance until internally confirmed for the exact process.
- Existing global company claims outside these page modules are not expanded by this project.

## SEO And GEO Requirements

- One primary keyword cluster per surviving page.
- Use literal product and buyer entities in H1-H3 headings and internal-link anchors.
- Add concise answer-first blocks for selection, custom-print inputs, sample testing, QR/barcode validation, packaging review, material-claim differences, and document verification.
- Answers remain within their evidence boundary and do not infer factory capability from general purchasing guidance.
- Avoid duplicating child-page specification tables on the gateway.
- Preserve logical breadcrumbs and natural internal links among gateway, custom product, OEM service, blank roll, material option, and size pages.

## Responsive And Accessibility Requirements

- Preserve the current navy, amber, white, Sora, and Inter design system.
- Keep the compact image-led hero and initial CTA visibility on desktop and mobile.
- Use full-width bands and restrained rectangular cards; avoid nested cards and decorative clutter.
- Keep H1 and module text inside their containers at 390px, 768px, 1280px, 1440px, and 1920px widths.
- Maintain visible focus states, semantic headings, link/button names, table headers, native FAQ disclosure behavior, and no horizontal overflow.
- Do not increase initial page JavaScript for content that can remain server-rendered.

## Verification And Acceptance Criteria

### Routing And SEO

- `/products/thermal-paper-rolls` returns 200 with one H1 and the approved metadata.
- `/products/thermal-paper-rolls/custom-printed` returns 200 and is the only indexable product page targeting custom printed thermal paper rolls.
- `/products/custom-printed-thermal-rolls` returns a permanent redirect to the canonical nested URL.
- `/oem/custom-printing` returns 200 and uses a distinct service title, H1, and Service schema.
- Sitemap, navigation, `llms.txt`, JSON-LD, and internal links contain no surviving reference to the duplicate product URL.

### Content

- The gateway shows four OEM program routes.
- At least five problem-to-response items are visible.
- The approval workflow and evidence boundaries are present.
- FAQ includes answer-first content for selection, custom-print inputs, sample testing, packing, material claims, and documents.
- No conflicting fixed MOQ, proof-time, lead-time, compliance, or certification claims remain in the three surviving page experiences.
- The RFQ pre-populates all specified qualification fields and does not claim file-upload support.

### Technical And Visual

- Type-check and production build pass under bundled Node 24.
- Browser checks pass at 390x844, 768x1024, 1280x800, 1440x900, and 1920x1080.
- No horizontal overflow, overlapping content, broken primary images, duplicate H1, or console errors occur.
- Structured data parses and matches visible page content.
- Final screenshots confirm initial CTA visibility, readable program cards, complete approval flow, and usable mobile RFQ.

## Out Of Scope

- Adding file upload, storage, or email attachment processing to `InquiryForm`.
- Creating new terminal, kitchen, parking, ATM, TITO, airport, regional, or compliance pages.
- Publishing country-specific regulatory claims without primary-source validation.
- Redesigning global header, footer, or unrelated product pages.
- Changing the visual identity outside the existing site system.
