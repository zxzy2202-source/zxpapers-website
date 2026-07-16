# Thermal Labels Category Aggregation Template Design

## Scope

Create a reusable product-category aggregation template and apply it first to `/products/thermal-labels`. Preserve the existing URL, child routes, image administration, inquiry workflow and brand system. Do not migrate other category pages in this phase.

## Audience And Page Job

The primary audience is distributors, 3PL and fulfillment operators, packaging suppliers, private-label brands, food businesses and industrial procurement teams. The page has one job: help a buyer enter the correct thermal-label product path quickly, then collect the information required for a comparable B2B quotation.

The primary navigation dimension is product family. Size, application and material selection are secondary paths.

## Information Architecture

The page order is fixed:

1. Compact category hero with a direct category definition, buyer fit, two inquiry actions and four procurement facts.
2. A jump-navigation rail linking to product families, popular sizes, applications, selection guidance, FAQ and inquiry.
3. Product families as the primary catalog module.
4. Popular stock sizes.
5. Applications.
6. A four-step selection guide: printer, size, surface/environment, material/adhesive.
7. Quality and evidence boundaries.
8. FAQ.
9. B2B inquiry.
10. Related label programs.

The product-family module includes distinct routes for Blank Thermal Labels, Custom Printed Thermal Labels, Shipping Labels, Barcode and FNSKU Labels, Linerless Labels and an internal jump to Popular Sizes. Remove internal priority labels such as `P0`, `P1` and `P2`. Use buyer-facing labels such as `Stock range`, `Custom program` and `Printer-specific` only when they accurately describe the destination.

Application cards do not replace product-family navigation. Food/freezer, pharmacy, 3PL and industrial applications may link to the closest valid product or inquiry route, but their text must state what the buyer still needs to confirm.

## Visual Direction

The page follows an industrial label-procurement catalog rather than a marketing landing-page composition.

- Brand ink: `#07172F`
- Brand action blue: `#1E6FD9`
- Inquiry amber: `#F59E0B`
- Cool content background: `#F8FAFC`
- Evidence teal: `#0F766E`
- Display headings: existing Sora font
- Body, controls and specification text: existing Inter font

The memorable element is a procurement-path navigation rail that exposes the four valid ways into the catalog: product, size, application and material. It is structural navigation, not decoration.

Product families are genuine repeated catalog items and may use cards. The desktop layout gives Shipping Labels more visual weight and uses compact entries for the remaining families. On mobile, the featured family is full-width and the other families become compact thumbnail rows. Avoid nested cards, oversized type and decorative gradients.

## Responsive Behavior

- The jump-navigation rail scrolls horizontally on narrow screens and remains keyboard accessible.
- Product-family entries appear within the first two mobile viewports after the header and hero.
- Popular sizes use a stable two-column mobile grid and a wider desktop grid.
- Application cards use a horizontal mobile scroller with stable card dimensions instead of six vertically stacked large cards.
- The ordered selection guide uses a real four-step workflow rail.
- Existing inquiry and WhatsApp actions remain. No new modal, filter state or sticky overlay is added.
- All interactive controls retain visible focus treatment and respect reduced-motion preferences.

## Component Architecture

Add a reusable `ProductCategoryTemplate` and a typed `ProductCategoryConfig` contract. The template owns the section order and responsive presentation. The Thermal Labels configuration owns category-specific copy, product families, sizes, applications, selection steps, evidence content, FAQ, inquiry prompts and related links.

The route remains a server component. It resolves existing image slots, builds metadata and JSON-LD, then passes the resolved configuration and images to the template. The existing inquiry component remains responsible for submission and error feedback.

Do not add client-side catalog filters in this phase. Static links keep the page crawlable, fast and understandable without JavaScript.

## SEO And GEO

- Keep the self-referencing canonical for `/products/thermal-labels`.
- Publish `CollectionPage` with a complete `ItemList` of distinct product and size destinations.
- Publish `BreadcrumbList` and `FAQPage`.
- Remove the category-level `Product` schema because the page represents a collection, not one purchasable product.
- Keep one visible H1.
- Give every linked family and size a unique descriptive label.
- Provide visible direct answers for direct thermal versus thermal transfer, printer fit, size/core/OD, surface and environment, adhesive route and evidence scope.
- Phrase compatibility, BPA/BPS/phenol-free, FSC, REACH, food-contact, MOQ and timing statements as material- or order-specific confirmations unless exact evidence is available.

## Content Reduction

The current page mixes product families, applications, materials and sizes across a long sequence. The redesign removes duplicated explanations and gives each section one job:

- Product cards navigate.
- Application cards describe operating conditions and point to a valid next step.
- The selection guide explains how to qualify a specification.
- Evidence content defines what documents and tests can support a claim.
- FAQ answers high-intent sourcing questions.
- Inquiry copy requests the missing commercial and technical inputs.

## Verification And Success Criteria

- The desktop page and a 390 px mobile viewport have no horizontal document overflow.
- The product-family section begins before 1,800 px on the mobile document.
- The popular-size section begins before 5,000 px on the mobile document.
- Total mobile document height is at least 20 percent shorter than the measured 16,876 px baseline.
- The page returns HTTP 200 and contains one H1.
- The canonical is `https://www.zxpapers.com/products/thermal-labels`.
- CollectionPage, ItemList, BreadcrumbList and FAQPage JSON-LD are present; category-level Product JSON-LD is absent.
- All existing child routes, inquiry actions, WhatsApp link and image slots remain valid.
- Contract tests, TypeScript and the production build pass.
- Playwright verifies desktop and mobile section order, link destinations, overflow and console state.

