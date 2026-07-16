# Linerless Product Detail Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first reusable, configuration-driven product detail template and publish a real SEO/GEO-focused `3 1/8 x 263' linerless labels` detail page from it.

**Architecture:** A typed server-rendered `ProductDetailTemplate` owns the approved NCR-derived visual structure while a product config supplies visible copy, links, specifications, FAQ, workflow, evidence boundaries, and RFQ qualification. Metadata and JSON-LD builders consume the same config so visible content and structured data cannot drift.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, Lucide icons, existing image-slot system, Node built-in contract tests, Playwright browser QA.

---

## File Map

**Create**

- `src/components/products/templates/product-detail-types.ts`: discriminated product-detail configuration contract.
- `src/components/products/templates/ProductDetailTemplate.tsx`: reusable NCR-derived product detail renderer.
- `src/lib/product-pages/product-detail-metadata.ts`: page metadata builder.
- `src/lib/product-pages/product-detail-schema.ts`: Product, BreadcrumbList, and FAQPage builders.
- `src/config/product-pages/linerless-3-1-8-x-263.ts`: complete product configuration and image fallbacks.
- `src/app/products/linerless-labels/3-1-8-x-263/page.tsx`: thin server route resolving images and rendering the template.
- `tests/linerless-product-detail-template.contract.test.mjs`: source and rendered-route contract tests.

**Modify**

- `src/config/imageSlots.ts`: register detail-page hero, application, and quality image slots.
- `src/lib/imageSlotDefaults.ts`: expose code fallbacks in the admin image manager.
- `src/app/sitemap.ts`: add the canonical detail route.
- `public/llms.txt`: add the page to the linerless label product hierarchy.
- `src/app/products/linerless-labels/page.tsx`: link the category page to the new canonical detail page.

## Task 1: Add The Failing Product Detail Contract

**Files:**

- Create: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Write the source contract test**

Use Node's built-in test runner. The test reads the future config, template, route, sitemap, image registry, and `llms.txt`, then asserts the required page contract:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("linerless detail template owns SEO, GEO, schema and RFQ inputs", async () => {
  const [config, template, route, sitemap, slots, llms] = await Promise.all([
    read("src/config/product-pages/linerless-3-1-8-x-263.ts"),
    read("src/components/products/templates/ProductDetailTemplate.tsx"),
    read("src/app/products/linerless-labels/3-1-8-x-263/page.tsx"),
    read("src/app/sitemap.ts"),
    read("src/config/imageSlots.ts"),
    read("public/llms.txt"),
  ]);

  assert.match(config, /3 1\/8 x 263/);
  assert.match(config, /printer model/i);
  assert.match(config, /removable|semi-permanent|permanent/i);
  assert.match(config, /packing/i);
  assert.match(config, /destination/i);
  assert.match(template, /ProductDetailTemplate/);
  assert.match(template, /QualifiedInquiry|InquiryForm/);
  assert.match(route, /buildProductDetailSchemas/);
  assert.match(sitemap, /linerless-labels\/3-1-8-x-263/);
  assert.match(slots, /linerless-3-1-8-x-263:hero/);
  assert.match(llms, /3 1\/8 x 263.*Linerless/i);
});
```

- [ ] **Step 2: Run the test and verify the expected failure**

Run:

```powershell
node --test tests/linerless-product-detail-template.contract.test.mjs
```

Expected: FAIL with `ENOENT` because the config and template files do not exist.

## Task 2: Define The Typed Config And Single-Source Builders

**Files:**

- Create: `src/components/products/templates/product-detail-types.ts`
- Create: `src/lib/product-pages/product-detail-metadata.ts`
- Create: `src/lib/product-pages/product-detail-schema.ts`

- [ ] **Step 1: Define focused product-detail types**

The type module must export `ProductDetailConfig` and focused item interfaces for facts, problems, specifications, applications, workflow, FAQ, and evidence. Required base fields are:

```ts
export interface ProductDetailConfig {
  kind: "detail";
  slug: string;
  canonicalPath: string;
  productName: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  facts: ProductDecisionFact[];
  directAnswer: { question: string; answer: string };
  problems: ProductProblemResponse[];
  specifications: ProductSpecificationGroup[];
  applications: ProductApplication[];
  workflow: ProductWorkflowStep[];
  evidence: ProductEvidenceSection;
  faq: ProductFaq[];
  inquiry: {
    title: string;
    description: string;
    checklist: string[];
    initialMessage: string;
    productName: string;
  };
  breadcrumbs: Array<{ name: string; path: string }>;
}
```

No property accepts `ReactNode`; config remains serializable content data.

- [ ] **Step 2: Build page metadata from the config**

Implement:

```ts
export function buildProductDetailMetadata(
  config: ProductDetailConfig,
  image: string,
): Metadata
```

The function returns an absolute title, description, keywords, canonical URL, page-specific Open Graph URL/image, and matching Twitter metadata using `SITE.domain`.

- [ ] **Step 3: Build visible-content-aligned schemas**

Implement:

```ts
export function buildProductDetailSchemas(
  config: ProductDetailConfig,
  image: string,
): {
  product: Record<string, unknown>;
  breadcrumb: Record<string, unknown>;
  faq: Record<string, unknown>;
}
```

The Product schema uses product name, visible description, image, manufacturer organization ID, canonical URL, and visible category/specification context. Do not emit price, Offer, availability, rating, review, GTIN, certification, or universal compatibility.

- [ ] **Step 4: Run TypeScript and confirm the new modules compile**

Run:

```powershell
pnpm.cmd tsc --noEmit
```

Expected: PASS.

## Task 3: Implement The NCR-Derived Product Detail Template

**Files:**

- Create: `src/components/products/templates/ProductDetailTemplate.tsx`

- [ ] **Step 1: Implement the server-rendered template**

The template receives:

```ts
interface ProductDetailTemplateProps {
  config: ProductDetailConfig;
  images: {
    hero: string;
    application: string;
    quality: string;
  };
  whatsappHref: string;
}
```

Render this fixed information hierarchy:

1. `PageHero` using the existing navy image-led hero.
2. Four-column bordered decision-fact strip.
3. Image/direct-answer split band.
4. Problem-to-business-consequence-to-response grid.
5. Grouped specification and compatibility table.
6. Application grid using real product/application imagery.
7. Numbered approval workflow.
8. Quality and evidence boundary split band.
9. Numbered native `details` FAQ.
10. Navy/white split qualified RFQ with `InquiryForm`.

Use full-width white/slate bands, thin slate borders, amber labels/icons, Sora headings, restrained 0-8px radii, visible focus states, and no nested cards.

- [ ] **Step 2: Keep client JavaScript limited to existing controls**

Do not add page-level `"use client"`. FAQ uses native disclosure, and the existing form owns its client behavior.

- [ ] **Step 3: Run TypeScript**

Run:

```powershell
pnpm.cmd tsc --noEmit
```

Expected: PASS.

## Task 4: Create The Real 3 1/8 x 263 Linerless Product Page

**Files:**

- Create: `src/config/product-pages/linerless-3-1-8-x-263.ts`
- Create: `src/app/products/linerless-labels/3-1-8-x-263/page.tsx`
- Modify: `src/config/imageSlots.ts`
- Modify: `src/lib/imageSlotDefaults.ts`

- [ ] **Step 1: Write evidence-bounded product configuration**

The page owns the primary topic `3 1/8 x 263 linerless labels` and related removable, semi-permanent, and permanent adhesive selection intent.

Use this positioning:

```text
H1: 3 1/8 x 263' Linerless Labels for POS & Food-Service Programs

Opening answer: 3 1/8 x 263' linerless labels are 80 mm wide continuous direct-thermal rolls supplied without a release liner. Before ordering, confirm the linerless-ready printer model, core, maximum roll diameter, adhesive grade, cutting method, application surface, temperature, packing, quantity and destination.
```

The page must solve:

- printer and cutter compatibility;
- clean removal versus stronger adhesion;
- condensation, refrigeration, grease, curved surfaces, and dwell time;
- width/length/core/OD quotation ambiguity;
- print, QR/barcode, and sample-test approval;
- roll blocking, edge damage, packing, and repeat-order consistency.

Do not publish a fixed MOQ, fixed lead time, FDA claim, FSC claim, universal printer list, image-life promise, or guaranteed waste reduction.

- [ ] **Step 2: Register three typed image slots**

Add:

```ts
"linerless-3-1-8-x-263:hero"
"linerless-3-1-8-x-263:application"
"linerless-3-1-8-x-263:quality"
```

Use the existing linerless/category image as a replaceable fallback until dedicated product images are uploaded.

- [ ] **Step 3: Build the thin route**

The route must:

- resolve all three image slots in one `getSlotImages()` call;
- export `generateMetadata()` using the metadata builder and resolved hero image;
- build Product, BreadcrumbList, and FAQPage from the config;
- create a product-specific WhatsApp qualification message;
- render JSON-LD scripts followed by `ProductDetailTemplate`.

- [ ] **Step 4: Run the contract test**

Run:

```powershell
node --test tests/linerless-product-detail-template.contract.test.mjs
```

Expected: PASS.

## Task 5: Integrate The Page Into Search And Navigation Ownership

**Files:**

- Modify: `src/app/products/linerless-labels/page.tsx`
- Modify: `src/app/sitemap.ts`
- Modify: `public/llms.txt`

- [ ] **Step 1: Link the parent category to the detail page**

Add a literal internal link labeled `3 1/8 x 263' Linerless Labels` in the category's relevant product/size route area. Do not replace the category page canonical or primary H1.

- [ ] **Step 2: Add the canonical route to sitemap**

Add:

```ts
"linerless-labels/3-1-8-x-263"
```

to the relevant product-page slug collection with the current static last-modified date used by the sitemap implementation.

- [ ] **Step 3: Add the route to `llms.txt`**

Place it below the linerless labels parent page with a concise entity description and canonical URL.

- [ ] **Step 4: Re-run contract and TypeScript checks**

Run:

```powershell
node --test tests/linerless-product-detail-template.contract.test.mjs
pnpm.cmd tsc --noEmit
```

Expected: both PASS.

## Task 6: Production And Browser Verification

**Files:**

- Temporary QA scripts and screenshots must be stored outside the repository.

- [ ] **Step 1: Run the production build**

Run under bundled Node 24:

```powershell
pnpm.cmd build
```

Expected: the new route appears in the route list and the build passes.

- [ ] **Step 2: Start the built app on port 3001**

Stop the existing 3001 process before building/restarting so `.next` does not serve stale output. Start with `pnpm.cmd start` and verify HTTP 200.

- [ ] **Step 3: Verify rendered SEO and schema**

Check:

- one H1;
- canonical `https://www.zxpapers.com/products/linerless-labels/3-1-8-x-263`;
- page-specific title, description, Open Graph URL, and image;
- Product, BreadcrumbList, and FAQPage schemas;
- FAQ visible/schema count equality;
- no Offer, price, rating, or unsupported certification fields.

- [ ] **Step 4: Run desktop and mobile Playwright QA**

At 1440x900 and 390x844 verify:

- first viewport contains the product H1, actual product image, and primary CTA;
- the next section is visible below the hero;
- specification table is readable;
- FAQ opens;
- empty form submission triggers validation;
- no horizontal overflow;
- no framework overlay;
- no relevant console errors or warnings;
- all referenced images load.

- [ ] **Step 5: Compare the implementation with the NCR visual baseline**

Use screenshots and `view_image` to inspect at least: hero anatomy, fact strip, white/slate band rhythm, bordered grids, typography, FAQ rows, RFQ split, and mobile collapse. Fix material mismatches before completion.

- [ ] **Step 6: Final workspace review**

Run:

```powershell
git diff --check
git status --short
```

Expected: only intended source, test, sitemap, `llms.txt`, image-registry, spec, plan, and previously approved SEO files are modified; no `.superpowers`, screenshots, traces, or temp scripts are staged.
