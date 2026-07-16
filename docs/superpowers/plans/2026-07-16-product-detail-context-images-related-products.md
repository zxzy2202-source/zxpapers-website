# Product Detail Context Images And Related Products Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add four relevant left-column images and three visual related-product recommendations to the reusable product detail page.

**Architecture:** Extend the typed product configuration with four context-image definitions and a `relatedProducts` collection. Resolve every slot once in the server route, pass plain URLs into the reusable template, and render stable responsive image frames without new client JavaScript.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, Next Image, Node built-in tests.

---

## File Map

- Modify `tests/linerless-product-detail-template.contract.test.mjs`: assert context-image markers, slots, and related links.
- Modify `src/components/products/templates/product-detail-types.ts`: define context and related-product image data.
- Modify `src/config/product-pages/linerless-3-1-8-x-263.ts`: provide four context images and three recommendations.
- Modify `src/config/imageSlots.ts`: register seven page-owned image slots.
- Modify `src/lib/imageSlotDefaults.ts`: register safe image fallbacks for admin overrides.
- Modify `src/app/products/linerless-labels/3-1-8-x-263/page.tsx`: resolve all images in one request.
- Modify `src/components/products/templates/ProductDetailTemplate.tsx`: render four context images and the related-product band.

### Task 1: Add The Failing Image And Recommendation Contract

**Files:**

- Modify: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Add assertions after the existing slot assertion**

```js
for (const suffix of [
  "risk",
  "specification",
  "workflow",
  "faq",
  "related-custom",
  "related-thermal",
  "related-shipping",
]) {
  assert.match(slots, new RegExp(`linerless-3-1-8-x-263:${suffix}`));
}

assert.match(config, /relatedProducts/);
assert.match(config, /Custom Printed Thermal Labels/);
assert.match(config, /\/products\/thermal-labels\/custom-printed/);
assert.match(config, /\/products\/thermal-labels/);
assert.match(config, /\/products\/shipping-labels/);
assert.match(route, /config\.images\.risk/);
assert.match(route, /config\.relatedProducts\.map/);
assert.match(template, /data-context-image="risk"/);
assert.match(template, /data-context-image="specification"/);
assert.match(template, /data-context-image="workflow"/);
assert.match(template, /data-context-image="faq"/);
assert.match(template, /data-product-detail-section="related-products"/);
```

- [ ] **Step 2: Run the focused test and verify RED**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
```

Expected: FAIL because the new image slots and related-product module do not exist.

### Task 2: Extend The Typed Image Configuration

**Files:**

- Modify: `src/components/products/templates/product-detail-types.ts`
- Modify: `src/config/product-pages/linerless-3-1-8-x-263.ts`
- Modify: `src/config/imageSlots.ts`
- Modify: `src/lib/imageSlotDefaults.ts`

- [ ] **Step 1: Define the related-product type**

Add before `ProductDetailConfig`:

```ts
export interface ProductRelatedItem {
  id: string;
  label: string;
  title: string;
  description: string;
  buyerFit: string;
  href: string;
  linkLabel: string;
  image: ProductDetailImageConfig;
}
```

Extend `ProductDetailConfig.images`:

```ts
risk: ProductDetailImageConfig;
specification: ProductDetailImageConfig;
workflow: ProductDetailImageConfig;
faq: ProductDetailImageConfig;
```

Add after `relatedLinks`:

```ts
relatedProducts: ProductRelatedItem[];
```

Extend `ResolvedProductDetailImages`:

```ts
risk: string;
specification: string;
workflow: string;
faq: string;
related: Record<string, string>;
```

- [ ] **Step 2: Add four context image definitions to the product config**

Add these constants beside the existing fallbacks:

```ts
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80";
const SHIPPING_LABEL_IMAGE = "/images/shipping-labels/shipping-labels-hero.webp";
const PACKING_IMAGE =
  "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp";
```

Add inside `images`:

```ts
risk: {
  slot: "linerless-3-1-8-x-263:risk",
  fallback: WAREHOUSE_IMAGE,
  alt: "Warehouse label workflow reviewed for linerless roll supply risks",
},
specification: {
  slot: "linerless-3-1-8-x-263:specification",
  fallback: LINERLESS_PRODUCT_IMAGE,
  alt: "Linerless label roll dimensions, core and material specification review",
},
workflow: {
  slot: "linerless-3-1-8-x-263:workflow",
  fallback: QUALITY_IMAGE,
  alt: "Label production line used for sample and bulk-order approval",
},
faq: {
  slot: "linerless-3-1-8-x-263:faq",
  fallback: PACKING_IMAGE,
  alt: "Export cartons and packing references for repeat linerless label orders",
},
```

- [ ] **Step 3: Add the three related-product configs**

Add after `relatedLinks`:

```ts
relatedProducts: [
  {
    id: "custom-printed",
    label: "OEM & private label",
    title: "Custom Printed Thermal Labels",
    description: "Develop printed labels, roll identification and private-label packing from approved artwork and application requirements.",
    buyerFit: "Best for brands, distributors and multilingual packaging programs.",
    href: "/products/thermal-labels/custom-printed",
    linkLabel: "Explore custom printed labels",
    image: {
      slot: "linerless-3-1-8-x-263:related-custom",
      fallback: LINERLESS_PRODUCT_IMAGE,
      alt: "Custom printed thermal labels for OEM and private-label supply",
    },
  },
  {
    id: "thermal-labels",
    label: "Broader label range",
    title: "Thermal Labels",
    description: "Review direct-thermal and thermal-transfer labels by printer, size, adhesive, material and application.",
    buyerFit: "Best for buyers consolidating multiple label formats with one supplier.",
    href: "/products/thermal-labels",
    linkLabel: "View thermal label options",
    image: {
      slot: "linerless-3-1-8-x-263:related-thermal",
      fallback: LINERLESS_PRODUCT_IMAGE,
      alt: "Thermal label rolls for barcode, food and product identification",
    },
  },
  {
    id: "shipping-labels",
    label: "Logistics & fulfillment",
    title: "Shipping Labels",
    description: "Source printer-matched roll and fanfold labels for parcel, warehouse, 3PL and cross-border fulfillment.",
    buyerFit: "Best for logistics programs where scanning, adhesion and replenishment matter.",
    href: "/products/shipping-labels",
    linkLabel: "View shipping labels",
    image: {
      slot: "linerless-3-1-8-x-263:related-shipping",
      fallback: SHIPPING_LABEL_IMAGE,
      alt: "Shipping label rolls for warehouse and 3PL fulfillment",
    },
  },
],
```

- [ ] **Step 4: Register the seven slots and defaults**

Add all seven slot names to `IMAGE_SLOTS` with page URL `/products/linerless-labels/3-1-8-x-263`, aspect `4:3`, and Chinese admin labels matching their purpose.

Add these exact defaults to `exactDefaults`:

```ts
"linerless-3-1-8-x-263:risk": SHIPPING_LABELS_RISK_IMAGE,
"linerless-3-1-8-x-263:specification": THERMAL_LABELS_IMAGE,
"linerless-3-1-8-x-263:workflow": FACTORY_LINE_IMAGE,
"linerless-3-1-8-x-263:faq": SHIPPING_LABELS_PACKING_IMAGE,
"linerless-3-1-8-x-263:related-custom": THERMAL_LABELS_IMAGE,
"linerless-3-1-8-x-263:related-thermal": THERMAL_LABELS_IMAGE,
"linerless-3-1-8-x-263:related-shipping": SHIPPING_LABELS_HERO_IMAGE,
```

- [ ] **Step 5: Run TypeScript and verify the route/template contract is incomplete**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' tsc --noEmit
```

Expected: FAIL because `resolveImages()` does not yet return the required context and related image URLs.

### Task 3: Resolve And Render The New Images

**Files:**

- Modify: `src/app/products/linerless-labels/3-1-8-x-263/page.tsx`
- Modify: `src/components/products/templates/ProductDetailTemplate.tsx`
- Test: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Resolve every image in one server call**

Build `relatedImageConfigs` from `linerlessDetailConfig.relatedProducts.map((item) => item.image)`, include it with all eight fixed image configs in `getSlotImages()`, and return:

```ts
return {
  hero: images[linerlessDetailConfig.images.hero.slot],
  application: images[linerlessDetailConfig.images.application.slot],
  quality: images[linerlessDetailConfig.images.quality.slot],
  risk: images[linerlessDetailConfig.images.risk.slot],
  specification: images[linerlessDetailConfig.images.specification.slot],
  workflow: images[linerlessDetailConfig.images.workflow.slot],
  faq: images[linerlessDetailConfig.images.faq.slot],
  related: Object.fromEntries(
    linerlessDetailConfig.relatedProducts.map((item) => [item.id, images[item.image.slot]]),
  ),
};
```

- [ ] **Step 2: Add a reusable context-image helper**

Define outside the template component:

```tsx
function ContextImage({ src, alt, marker }: { src: string; alt: string; marker: string }) {
  return (
    <div
      className="relative mt-8 aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-100"
      data-context-image={marker}
    >
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
    </div>
  );
}
```

- [ ] **Step 3: Place the four context images**

Wrap the risk intro in a left-column `div`, then add `ContextImage` with marker `risk`. Add the specification image after its intro, the workflow image after its intro, and the FAQ image after the related links. Remove sticky positioning from specification and FAQ left columns so the complete image block cannot be clipped.

- [ ] **Step 4: Render the related-products band before RFQ**

Use one H2 section introduction and a three-column grid. Each item is an `article` with a 4:3 `Image`, H3 title, description, buyer-fit copy, and a `Link` with `ArrowRight`. Add `data-product-detail-section="related-products"`, visible focus rings, and no nested interactive wrapper.

- [ ] **Step 5: Run focused test and TypeScript**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' tsc --noEmit
```

Expected: both PASS.

### Task 4: Verify And Update The Direct Preview

**Files:**

- No repository files created.

- [ ] **Step 1: Run all contract tests**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\shipping-labels-page.contract.test.mjs tests\linerless-product-detail-template.contract.test.mjs
```

Expected: zero failures.

- [ ] **Step 2: Run the production build**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' build
```

Expected: build passes and the linerless detail route appears in the generated route list.

- [ ] **Step 3: Restart only port 3002**

Stop the current listener on port 3002, then start the built app from this worktree using bundled Node and `node_modules/next/dist/bin/next start --port 3002`.

- [ ] **Step 4: Verify rendered HTML without screenshots**

Confirm HTTP 200, one H1, production canonical, all four `data-context-image` markers, `related-products`, and links to custom printed thermal labels, thermal labels, and shipping labels. Confirm existing Product, BreadcrumbList, and FAQPage JSON-LD remain present.

- [ ] **Step 5: Review and commit**

Run `git diff --check`, verify no screenshots or temporary scripts exist, stage only the intended source/test/plan files, and commit:

```powershell
git commit -m "feat: add product context images and recommendations"
```
