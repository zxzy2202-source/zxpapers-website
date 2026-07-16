# Can Labels Category Aggregation Design

## Scope

Migrate `/products/can-labels` from the legacy showcase page to the reusable `ProductCategoryTemplate` introduced for Thermal Labels. Preserve the canonical URL, the two product routes, the five existing size routes, image-slot administration, inquiry workflow and site-wide brand system.

This phase changes only the category aggregation page. It does not migrate `/blank`, `/custom-printed` or the five size detail pages, and it does not add Can Labels-specific behavior to the shared template.

## Product Knowledge And Claim Boundaries

The page content is based on the Feishu product knowledge sections for Food Packaging Labels, Metal Cans and Containers, White and Clear BOPP, Permanent Adhesives, Lamination and Varnish, website page briefs, GEO answers and the claim registry.

The following rules are mandatory:

- A metal can is not one universal surface. Aluminum, steel, coating, print, varnish, seams, dust, machining oil, condensation and cleaning can change adhesion.
- Paper, White BOPP, Clear BOPP and PET are selection starting points. Final performance depends on the full label construction and real application conditions.
- `Permanent` does not mean permanent on every surface or under every temperature, oil, chemical or curvature condition.
- Lamination and varnish may improve appearance or print protection but do not automatically make a label waterproof, oil-proof or chemical-proof.
- A label used on the outside of food packaging is not automatically approved for direct food contact.
- Do not publish unconditional `food-safe`, `FDA compliant`, `BPA-free`, `ISO`, fixed MOQ, fixed lead-time or guaranteed resistance claims without evidence tied to the selected material and order.

## Audience And Page Job

The primary audience is food and beverage brands, private-label brands, food OEM/ODM factories, co-packers, pet-food manufacturers, industrial product manufacturers, packaging procurement teams and label distributors.

The page has one job: help a buyer identify the correct custom or blank can-label route, then collect enough information to qualify the container, environment, material, artwork, machine and commercial requirements before quotation.

Custom printed OEM supply is the primary conversion route. Blank labels remain a secondary route for buyers printing or applying labels in-house.

## Search Intent And Page Boundary

The page targets one commercial category intent: custom can labels for food, beverage and metal containers. It should naturally support terms such as `custom can labels`, `metal can labels`, `food can labels`, `beverage can labels`, `printed can labels` and `OEM can label supplier`.

The page must not become a general owner for beverage bottle labels, general food packaging labels, jar labels or chemical label solutions. Those topics may appear as related applications or links, but the H1, answer summary and primary navigation remain centered on can labels.

Recommended H1 direction: `Custom Can Labels for Food, Beverage and Metal Containers`.

## Information Architecture

The page order is fixed:

1. Compact category hero with a direct answer summary, buyer fit, two actions and procurement facts.
2. Horizontal jump navigation for product routes, sizes, applications, selection, FAQ and inquiry.
3. Product routes, with Custom Printed Can Labels as the featured entry and Blank Can Labels as a compact secondary entry.
4. Five existing can-size destinations: 211 x 400, 211 x 603, 300 x 407, 307 x 510 and 401 x 700.
5. Application routes for food cans, beverage and craft cans, pet-food cans, oil and coating containers, industrial or chemical containers and multi-SKU co-packing programs.
6. A four-step selection guide: can and surface; filling, labeling and exposure; material, adhesive and finish; artwork, roll and commercial requirements.
7. Qualification and evidence content covering actual-container tests, environmental exposure, print or barcode approval and machine trials.
8. Visible sourcing FAQ.
9. A Can Labels-specific inquiry form and WhatsApp specification message.
10. Related product and solution links.

Each module has one job. Product and size entries navigate, applications describe risk and qualification inputs, selection explains the decision order, evidence defines approval boundaries, and inquiry collects the missing specification.

## Visual And Responsive Direction

The page uses the shared industrial procurement visual system:

- Brand ink: `#07172F`
- Inquiry amber: `#F59E0B`
- Evidence teal: `#0F766E`
- Cool content background: `#F8FAFC`
- Display headings: existing Sora font
- Body and specification text: existing Inter font

Real can, label and production images provide category identity. The featured Custom Printed Can Labels route is the single high-emphasis catalog block. Other product, size and application entries remain compact and comparison-friendly.

On mobile, compact product rows avoid long card stacks, can sizes use a stable two-column grid, applications use a horizontal snap scroller, selection steps stack in order, and the inquiry panel stacks above the form. No new modal, filter state, decorative cards or sticky overlay is introduced.

## Component And Data Architecture

Add `src/config/product-categories/can-labels.ts` satisfying the existing `ProductCategoryConfig` contract. The configuration owns copy, linked routes, images, applications, sizes, selection steps, evidence content, FAQ, inquiry prompts and related links.

Replace the legacy page implementation with the same server-side composition used by Thermal Labels:

- resolve category images through `resolveProductCategoryImages`;
- build metadata through `buildProductCategoryMetadata`;
- build JSON-LD through `buildProductCategorySchemas`;
- render `ProductCategoryTemplate` with the resolved configuration and WhatsApp URL.

Reuse `canLabelSizes` as the source of the five existing size routes. Do not change `ProductCategoryTemplate`, `ProductCategoryConfig`, `InquiryForm` or child detail pages unless a test exposes an actual contract defect.

Image slots remain the primary source. Every image has an explicit fallback and descriptive alt text, so an unresolved slot does not leave an empty module.

## SEO And GEO

- Keep a self-referencing canonical for `/products/can-labels`.
- Publish `CollectionPage` with `ItemList`, plus `BreadcrumbList` and visible `FAQPage` content.
- Do not publish category-level `Product` schema.
- Keep one visible H1 and a concise answer summary that identifies container, surface and environment as selection inputs.
- Use descriptive linked labels for the two product routes and five sizes.
- State the relationship between can surface, contamination, temperature, media, adhesive, finish, roll specification and approval testing.
- Use conditional language for moisture, oil, temperature, adhesion, food-contact, certification, MOQ and timing statements.
- Link to related material, application or OEM routes only when they represent a real next step.

## Inquiry Qualification

The inquiry prompt requests:

- buyer type and application;
- can material, coating, dimensions, label area and seam position;
- filling and labeling sequence, surface cleaning and container temperature;
- water, condensation, oil, chemical, abrasion and storage exposure;
- paper or film preference, adhesive and finish;
- label dimensions, roll core, outer diameter, winding, gap, applicator and line speed;
- artwork versions, colors, white ink, barcode and SKU quantities;
- sample, test, document, packing, destination and delivery-window requirements.

The form does not pre-qualify an order using a fixed MOQ or promise a fixed production lead time.

## Verification And Success Criteria

- The page returns HTTP 200 and contains exactly one H1.
- Desktop and 390 px mobile layouts have no horizontal document overflow.
- The product-route and size sections appear early enough to support catalog browsing without excessive scrolling.
- All two product links and five existing size links remain valid.
- The canonical is `https://www.zxpapers.com/products/can-labels`.
- CollectionPage, ItemList, BreadcrumbList and FAQPage JSON-LD are present; category-level Product JSON-LD is absent.
- Visible FAQ and JSON-LD FAQ content match.
- Unconditional food-safe, FDA, BPA-free, ISO, MOQ, lead-time and universal resistance claims are absent.
- Inquiry and WhatsApp actions contain Can Labels-specific qualification prompts.
- Contract tests, TypeScript and the production build pass.
- Browser checks verify desktop and mobile section order, link destinations, overflow, inquiry access and console state without producing user-facing screenshots.
