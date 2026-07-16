# Product Detail Context Images And Related Products Design

## Objective

Use relevant images to fill the unused lower-left space in long two-column modules on `/products/linerless-labels/3-1-8-x-263`, then add a compact related-products section before the RFQ. The additions must support B2B comprehension and internal discovery rather than act as decoration.

## Approved Direction

Use four content-anchor images and three related-product recommendations.

Content-anchor images appear in the left column of:

1. Buyer risk review.
2. Specification basis.
3. Approval workflow.
4. B2B sourcing FAQ.

The related-products section recommends:

1. Custom Printed Thermal Labels for OEM printing and private-label programs.
2. Thermal Labels for additional sizes, materials, and applications.
3. Shipping Labels for logistics, warehouse, and 3PL purchasing.

## Image Behavior

Each context image uses a dedicated page image slot with a real code fallback:

- `linerless-3-1-8-x-263:risk`
- `linerless-3-1-8-x-263:specification`
- `linerless-3-1-8-x-263:workflow`
- `linerless-3-1-8-x-263:faq`
- `linerless-3-1-8-x-263:related-custom`
- `linerless-3-1-8-x-263:related-thermal`
- `linerless-3-1-8-x-263:related-shipping`

The four left-column images use a stable 4:3 frame, thin slate border, square-to-small-radius geometry consistent with the page, `object-cover`, and descriptive product-specific alt text. They appear after the section introduction or related links, so the heading and decision copy remain the first content in the column.

On desktop, the introduction and image remain in the left column. The specification and FAQ left column may stay sticky only when the full introduction-plus-image block fits comfortably; otherwise sticky behavior is removed to avoid a tall element being clipped. On mobile, text appears first and the image follows before the right-column content.

Images are not added to sections that already contain a full-height image or a dense left-side buyer list. This avoids repeated imagery in direct answer, supply program, applications, evidence, and RFQ.

## Related Product Module

Add a `relatedProducts` array to `ProductDetailConfig`. Each item contains:

- label;
- title;
- description;
- buyer-fit statement;
- canonical internal link;
- image slot, fallback, and alt text;
- link label.

Render the module after FAQ and before RFQ as a full-width white or slate band with:

- one concise section heading;
- three equal product items on desktop;
- one column on mobile;
- stable 4:3 images;
- product title, buyer-fit copy, and a clear text-link command;
- the complete item acting as a semantic article, without nesting interactive elements.

The section uses real internal links and does not emit price, availability, ratings, or unsupported comparison claims. Product recommendations remain visible HTML; no additional ItemList or Offer schema is required for this iteration.

## Configuration And Data Flow

Extend `ProductDetailConfig.images` with four context images and extend `ProductDetailConfig` with `relatedProducts`.

Extend `ResolvedProductDetailImages` with:

- `risk`
- `specification`
- `workflow`
- `faq`
- `related`, keyed by the related-product identifier

The route resolves all existing, context, and related image slots in one `getSlotImages()` call. `ProductDetailTemplate` receives resolved image URLs and renders no admin or network lookup of its own.

Future product pages can reuse the same template fields with product-specific images and recommendations.

## Accessibility And Responsive Requirements

- Every informative image has concise, specific alt text.
- Images do not contain essential text that is absent from HTML.
- Card links have visible focus states and descriptive labels.
- Related-product titles use H3 under one H2 section heading.
- Image frames use stable aspect ratios so loading does not shift the layout.
- The four context images and three recommendation items fit a 390 px viewport without horizontal overflow.
- Existing FAQ disclosure and RFQ controls keep their keyboard behavior.

## Fallback And Error Handling

- Missing admin overrides use registered defaults from `imageSlotDefaults.ts`.
- Context-image fallbacks reuse existing product, warehouse, factory, and packing imagery whose subject matches the module.
- Related-product fallbacks use the target page's existing hero or category image.
- A missing resolved URL must still fall back through the existing slot utility; the template does not render broken placeholder text.

## Verification

The existing linerless page contract is extended to assert:

- all seven new slots are registered;
- the route resolves the new config images;
- the template renders four context-image markers;
- the template renders the related-products module;
- the three approved internal product links exist;
- image alt text is supplied by config.

TypeScript, all contract tests, and the Next.js production build must pass. The rebuilt production preview on port 3002 must return HTTP 200 and contain all four context-image markers, three related-product links, one H1, the production canonical, and the existing Product/Breadcrumb/FAQ schemas.

Per the user's instruction, review uses the direct browser preview rather than screenshots.

## Scope

This change affects the reusable product-detail types/template, this linerless product config/route, image-slot registration/defaults, and its focused contract test. It does not change global navigation, other product page layouts, the inquiry backend, or schema types.
