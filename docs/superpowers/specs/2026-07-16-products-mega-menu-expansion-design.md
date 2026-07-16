# Products Mega Menu Expansion Design

## Objective

Expand the Products navigation so overseas B2B buyers can reach more specific product pages directly, without making the desktop menu harder to scan or the mobile menu excessively long.

## Business Context

- Primary users are distributors, wholesalers, POS suppliers, label converters, packaging buyers, and business-form resellers.
- Most menu users already know the broad product family they need and benefit from literal product names rather than promotional copy.
- The navigation should shorten the path to a relevant category page while preserving access to the complete catalog, OEM services, and quote conversion.

## Current State

- The desktop mega menu uses a large left marketing panel, a two-by-two product-family grid, and a separate right size rail.
- Each product family exposes only four direct child links even though the navigation configuration contains more routes.
- The mobile menu exposes two child links and one View All link per family.
- The result is visually polished but hides many useful product routes behind category pages.

## Approved Direction

Use a four-column product directory with a compact utility bar above it and a horizontal popular-size strip below it.

- Remove the desktop marketing sidebar and separate size sidebar.
- Keep all four product families visible at the same time.
- Increase visible desktop product-entry links from roughly 16 child links to 28 links: four linked family headings and 24 specific child links.
- Keep the menu within a maximum width of approximately 1200px and a target height of approximately 520px.
- Preserve the existing navy, amber, white, Sora, and Inter visual system.

## Desktop Information Architecture

### Utility Bar

The top utility bar provides five high-level routes:

1. All Products
2. Blank Thermal Rolls
3. Custom Printing
4. OEM Services
5. Request Pricing

The routes are `/products`, `/products/thermal-paper-rolls/blank`, `/oem/custom-printing`, `/oem`, and `/contact`, respectively. Request Pricing is the visually strongest conversion action.

### Product Columns

The main directory uses four equal-width columns:

1. Thermal Paper Rolls
2. Thermal Labels
3. Packaging Labels
4. NCR & Business Forms

Each column contains:

- A linked product-family heading.
- Six specific high-priority product links.
- No repeated descriptions or promotional paragraphs.

The specific links come from the existing `productGroups` configuration. The implementation should not invent routes. NCR industry pages beyond the visible high-priority set remain accessible through the linked family heading. A column must not repeat the family-heading route in a second View All link.

### Popular Sizes

A compact strip below the four columns exposes eight existing high-demand size or format routes:

- 80 x 80 mm
- 57 x 50 mm
- 57 x 40 mm
- 4 x 6 in
- 2 x 1 in
- 211 x 400
- 2-Part NCR
- 3-Part NCR

Size links use compact rectangular treatments and do not become a fifth content column.

## Mobile Information Architecture

- Keep All Products as the first prominent link.
- Render the four product families as an accordion.
- All families are collapsed when Products is first opened.
- Only one family can be expanded at a time.
- An expanded family shows five high-priority child links plus a View All family link.
- Keep OEM Services and Get Price List actions at the bottom.
- Do not add the desktop popular-size strip to the mobile menu; size pages remain accessible through the family catalog pages.

## Interaction And Accessibility

- Preserve hover and click support for desktop opening.
- Preserve keyboard opening, closing, focus containment, Escape handling, and focus-visible styling.
- Keep `aria-expanded`, `aria-controls`, menu roles, and accessible link names accurate.
- Ensure every mobile row has at least a 40px interactive height, with primary accordion triggers targeting 44px.
- Keep the menu inside the viewport with vertical scrolling only when the available height is insufficient.
- Do not introduce horizontal overflow at desktop, tablet, or mobile widths.

## Component And Data Boundaries

- Keep route labels and destinations in `src/config/navigation.ts`.
- Keep rendering and interaction behavior in `src/components/layout/Header.tsx`.
- Reuse the existing `NavProductGroup`, `NavDropdown`, badge, icon, and focus-management patterns unless a narrowly scoped type extension is required.
- Do not modify product page content or the unrelated in-progress `ThermalLabelsCatalogPage.tsx` work.

## SEO And GEO Considerations

- Use literal product entity names in menu links so crawlers and AI systems receive clear category relationships.
- Avoid vague labels such as Solutions or Explore when a product name is available.
- Retain one canonical family link per column and avoid duplicate links to the same route within that column.
- This change improves internal discovery but does not replace sitemap, breadcrumb, or page-level structured data.

## Verification

### Static Checks

- TypeScript type-check passes.
- Production build passes under the bundled Node 24 runtime.

### Desktop Browser Checks

- Products opens from hover, click, and keyboard.
- Four product-family columns are visible simultaneously.
- Exactly four linked family headings and at least 24 specific child product links are visible.
- The utility bar and popular-size strip are present.
- The menu remains inside the viewport at 1280px, 1440px, and 1920px widths.
- No clipped text, overlapping controls, or horizontal page overflow occurs.

### Mobile Browser Checks

- Products opens from the mobile navigation.
- All four families start collapsed.
- Expanding one family collapses the previously open family.
- Each expanded family exposes five child links plus View All.
- All Products, OEM Services, and Get Price List remain reachable.
- The menu scrolls vertically within the viewport and does not cause horizontal overflow.

## Out Of Scope

- Changing the main navigation labels outside Products.
- Creating new product or size routes.
- Redesigning product category pages.
- Changing the header logo, top utility bar, footer, or global color system.
