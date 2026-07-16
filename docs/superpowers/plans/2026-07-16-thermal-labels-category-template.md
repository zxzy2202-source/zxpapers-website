# Thermal Labels Category Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/products/thermal-labels` as a concise, reusable, configuration-driven category aggregation page with clear B2B product paths and evidence-bounded SEO/GEO content.

**Architecture:** Introduce a typed `ProductCategoryConfig`, a server-rendered `ProductCategoryTemplate`, shared category metadata/schema/image helpers, and one Thermal Labels configuration. The route becomes a thin composition layer; all navigation stays static and crawlable.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, Lucide icons, Node test runner, Playwright CLI

---

### Task 1: Add A Failing Category Contract Test

**Files:**
- Create: `tests/thermal-labels-category-template.contract.test.mjs`

- [ ] **Step 1: Write the route and template contract**

The test reads the route, config, template, schema helper and image helper. It asserts that the route imports `ProductCategoryTemplate`, `thermalLabelsCategoryConfig`, `buildProductCategorySchemas`, `buildProductCategoryMetadata` and `resolveProductCategoryImages`.

- [ ] **Step 2: Assert the approved information architecture**

Assert unique template markers for `product-families`, `popular-sizes`, `applications`, `selection-guide`, `evidence`, `faq`, `inquiry` and `related-programs`. Assert the product-family marker appears before popular sizes, and popular sizes appears before applications.

- [ ] **Step 3: Assert SEO and content boundaries**

Assert the schema helper contains `CollectionPage`, `ItemList`, `BreadcrumbList` and `FAQPage` but no category-level `Product`. Assert the configuration has six family paths, no `P0/P1/P2`, no fixed `24h` response promise and no unconditional compliance claim.

- [ ] **Step 4: Verify the test fails for the missing architecture**

Run:

```powershell
node --test tests/thermal-labels-category-template.contract.test.mjs
```

Expected: FAIL because the new template, config and helpers do not exist.

### Task 2: Define The Category Contract And Helpers

**Files:**
- Create: `src/components/products/category/product-category-types.ts`
- Create: `src/lib/product-pages/product-category-images.ts`
- Create: `src/lib/product-pages/product-category-metadata.ts`
- Create: `src/lib/product-pages/product-category-schema.ts`

- [ ] **Step 1: Define the configuration interface**

Define `ProductCategoryConfig` with typed fields for metadata, hero, jump links, product families, sizes, applications, four ordered selection steps, evidence, FAQ, inquiry, breadcrumbs and related programs. Each image uses an existing `SlotKey` plus fallback and alt text.

- [ ] **Step 2: Define resolved images**

Define `ResolvedProductCategoryImages` with `hero`, `quality`, `families` and `applications` maps keyed by stable config IDs.

- [ ] **Step 3: Implement shared image resolution**

`resolveProductCategoryImages(config)` calls `getSlotImages` once with hero, quality, family and application images and returns the typed resolved map.

- [ ] **Step 4: Implement metadata generation**

`buildProductCategoryMetadata(config, heroImage)` returns absolute title, description, keyword string, self-referencing canonical, Open Graph and Twitter metadata.

- [ ] **Step 5: Implement collection schemas**

`buildProductCategorySchemas(config, heroImage)` returns `collection`, `breadcrumb` and `faq`. `collection.mainEntity` is an `ItemList` built from distinct product-family URLs and size URLs.

- [ ] **Step 6: Run TypeScript**

```powershell
pnpm tsc --noEmit
```

Expected: PASS after the new helpers compile.

### Task 3: Create The Thermal Labels Category Configuration

**Files:**
- Create: `src/config/product-categories/thermal-labels.ts`

- [ ] **Step 1: Add category metadata and hero copy**

Keep `/products/thermal-labels` as canonical. Use one H1 concept focused on thermal labels for B2B supply, a direct category definition, buyer-fit statement and quote/sample actions.

- [ ] **Step 2: Add six primary family paths**

Configure Shipping Labels, Blank Thermal Labels, Custom Printed Thermal Labels, Barcode and FNSKU Labels, Linerless Labels, and Popular Sizes. Use distinct valid URLs for the first five and `#popular-sizes` for the internal catalog path.

- [ ] **Step 3: Add sizes and applications**

Map the existing six `labelSizes` into size routes. Add six concise application entries with real operating conditions and valid next-step links.

- [ ] **Step 4: Add ordered selection and evidence content**

The selection steps are Printer, Size, Surface and environment, Material and adhesive. Evidence copy distinguishes printer tests, barcode tests, adhesion tests, material declarations and order-specific document scope.

- [ ] **Step 5: Add FAQ and inquiry inputs**

FAQ and RFQ copy request printer model, width/height/gap, core/OD, surface, temperature, material route, quantity, packing, destination and evidence requirements. Do not publish fixed MOQ or timing.

- [ ] **Step 6: Run the contract test**

```powershell
node --test tests/thermal-labels-category-template.contract.test.mjs
```

Expected: Still FAIL because the route and template are not migrated yet, while config assertions pass.

### Task 4: Build The Reusable Product Category Template

**Files:**
- Create: `src/components/products/category/ProductCategoryTemplate.tsx`

- [ ] **Step 1: Build the compact hero and jump navigation**

Use the existing `Layout` and `PageHero`. Render a horizontal, keyboard-accessible navigation rail for Products, Sizes, Applications, Selection, FAQ and Quote.

- [ ] **Step 2: Build the family-first catalog module**

Render the featured Shipping family with a stable media area. On desktop, render the other families in a compact grid. On mobile, render compact thumbnail rows. Use buyer-facing labels and unique link text.

- [ ] **Step 3: Build the popular-size grid**

Render a stable two-column mobile grid and three-column desktop grid. Each entry links to its static size route and exposes market/badge metadata without large images.

- [ ] **Step 4: Build the application scroller**

Render a horizontal mobile scroller with stable card width and a desktop three-column grid. Each application states what condition the buyer must confirm.

- [ ] **Step 5: Build the four-step selection rail**

Render numbered steps because order is meaningful. Keep specification inputs readable without a dense comparison table on mobile.

- [ ] **Step 6: Build evidence, FAQ, inquiry and related sections**

Use the existing `InquiryForm`. FAQ uses semantic `details/summary`, visible focus, and one initially open answer. Evidence uses the quality image and a restrained teal signal. Related programs are plain links rather than nested cards.

- [ ] **Step 7: Add stable test markers**

Add `data-category-section` attributes to the seven core sections and a `data-category-jump-nav` marker to the navigation rail.

### Task 5: Migrate The Thermal Labels Route

**Files:**
- Modify: `src/app/products/thermal-labels/page.tsx`
- Delete: `src/components/products/ThermalLabelsCatalogPage.tsx`

- [ ] **Step 1: Replace inline content and schema definitions**

Import the config, shared image resolver, metadata helper and schema helper. Remove inline family, application, FAQ and JSON-LD definitions.

- [ ] **Step 2: Generate metadata from configuration**

Use cached image resolution, then return `buildProductCategoryMetadata(config, images.hero)` from `generateMetadata`.

- [ ] **Step 3: Render collection schemas and the generic template**

Render only CollectionPage/ItemList, BreadcrumbList and FAQPage scripts, then `ProductCategoryTemplate` with resolved images and the existing WhatsApp destination.

- [ ] **Step 4: Delete the old one-off component**

Confirm no remaining import references, then remove `ThermalLabelsCatalogPage.tsx`.

- [ ] **Step 5: Verify green tests and types**

```powershell
node --test tests/*.test.mjs
pnpm tsc --noEmit
```

Expected: all tests pass and TypeScript exits 0.

### Task 6: Build And Browser-Verify The Page

**Files:**
- Modify only if verification exposes a scoped defect.

- [ ] **Step 1: Run the production build**

```powershell
pnpm build
```

Expected: route `/products/thermal-labels` is generated successfully.

- [ ] **Step 2: Restart the production preview on port 3002**

Stop only the process listening on port 3002, then run `next start --port 3002` hidden from the isolated worktree.

- [ ] **Step 3: Verify HTTP and document semantics**

Check HTTP 200, one H1, the canonical URL, CollectionPage, ItemList, BreadcrumbList and FAQPage. Confirm no category-level Product JSON-LD.

- [ ] **Step 4: Verify desktop and mobile layout with Playwright**

At 1440 x 1000 and 390 x 844, verify section order, unique family destinations, no horizontal overflow and zero console errors. Measure product-family top, popular-size top and total document height against the specification targets.

- [ ] **Step 5: Run final verification and commit**

```powershell
node --test tests/*.test.mjs
pnpm tsc --noEmit
git diff --check
```

Expected: all commands exit 0. Commit the implementation as `feat: rebuild thermal labels category page`.

