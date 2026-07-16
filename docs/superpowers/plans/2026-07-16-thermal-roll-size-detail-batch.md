# Thermal Roll Size Detail Batch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate six thermal-paper-roll size pages to the approved B2B product-detail template with product-specific SEO, procurement content and mobile behavior.

**Architecture:** Add a reusable product-detail image resolver and a thermal-roll config factory. Export one complete `ProductDetailConfig` per size and keep each static Next.js route explicit for independent metadata, canonical URLs and schema.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, Node test runner

---

### Task 1: Add The Batch Contract Test

**Files:**
- Create: `tests/thermal-roll-product-detail-template.contract.test.mjs`

- [ ] Write a test that reads all six routes, the shared factory and image-slot registry.
- [ ] Assert each route imports `ProductDetailTemplate`, its size config, metadata builder and schema builder.
- [ ] Assert the shared factory contains printer qualification, packing confirmation, MOQ/timing confirmation, evidence boundaries and related products.
- [ ] Assert the six canonical paths and product names are unique.
- [ ] Run `node --test tests/thermal-roll-product-detail-template.contract.test.mjs` and verify it fails before implementation.

### Task 2: Add Shared Image Resolution

**Files:**
- Create: `src/lib/product-pages/product-detail-images.ts`
- Modify: `src/app/products/linerless-labels/3-1-8-x-263/page.tsx`

- [ ] Implement `resolveProductDetailImages(config)` using `getSlotImages` and the existing `ResolvedProductDetailImages` return type.
- [ ] Replace the linerless route's inline image mapping with the shared resolver without changing rendered behavior.
- [ ] Run the existing linerless contract test and TypeScript check.

### Task 3: Register Thermal-Roll Template Images

**Files:**
- Modify: `src/config/imageSlots.ts`

- [ ] Add shared thermal-roll slots for application, quality, risk, specification, workflow and FAQ modules.
- [ ] Add a distinct hero slot for each of the six size URLs.
- [ ] Keep existing family and application slots unchanged for backward compatibility.
- [ ] Run `pnpm tsc --noEmit` to verify all slot keys are valid.

### Task 4: Build The Thermal-Roll Config Factory

**Files:**
- Create: `src/config/product-pages/thermal-roll-detail-config.ts`

- [ ] Define the size input type for identity, metadata, dimensions, paper options, applications and reference packing.
- [ ] Implement shared procurement risks, approval workflow, evidence boundary, RFQ checklist, FAQs and related-product definitions.
- [ ] Convert each size input into a complete `ProductDetailConfig` with self-referencing breadcrumbs and canonical path.
- [ ] Avoid unsupported fixed commercial, compliance and performance promises.
- [ ] Run TypeScript and the batch contract test.

### Task 5: Add Six Product-Specific Configs

**Files:**
- Create: `src/config/product-pages/thermal-roll-57x30mm.ts`
- Create: `src/config/product-pages/thermal-roll-57x40mm.ts`
- Create: `src/config/product-pages/thermal-roll-57x50mm.ts`
- Create: `src/config/product-pages/thermal-roll-80x70mm.ts`
- Create: `src/config/product-pages/thermal-roll-80x80mm.ts`
- Create: `src/config/product-pages/thermal-roll-110x80mm.ts`

- [ ] Preserve each page's measured dimensions and reference pallet/container data.
- [ ] Give each size distinct audience fit, application language, metadata and keywords.
- [ ] Add adjacent-size related links and a product-specific quotation message.
- [ ] Run the batch contract test and TypeScript check.

### Task 6: Migrate The Six Routes

**Files:**
- Modify: `src/app/products/thermal-rolls/57x30mm/page.tsx`
- Modify: `src/app/products/thermal-rolls/57x40mm/page.tsx`
- Modify: `src/app/products/thermal-rolls/57x50mm/page.tsx`
- Modify: `src/app/products/thermal-rolls/80x70mm/page.tsx`
- Modify: `src/app/products/thermal-rolls/80x80mm/page.tsx`
- Modify: `src/app/products/thermal-rolls/110x80mm/page.tsx`

- [ ] Use `cache` with the shared image resolver in each route.
- [ ] Generate metadata from the size config and resolved hero image.
- [ ] Generate Product, Breadcrumb and FAQ JSON-LD from the shared schema builder.
- [ ] Render `ProductDetailTemplate` with a product-specific WhatsApp qualification message.
- [ ] Run both product-detail contract tests and TypeScript.

### Task 7: Verify Production And Preview

**Files:**
- Modify only if verification reveals a scoped defect.

- [ ] Run `node --test tests/linerless-product-detail-template.contract.test.mjs tests/thermal-roll-product-detail-template.contract.test.mjs`.
- [ ] Run `pnpm tsc --noEmit`.
- [ ] Run `pnpm build`.
- [ ] Start or reuse the preview server on port 3002.
- [ ] Check all six URLs return HTTP 200.
- [ ] Inspect representative 57x30mm and 80x80mm pages for one H1, correct canonical, Product/Breadcrumb/FAQ schema, inquiry placement and mobile action markup.
- [ ] Review the final diff for accidental edits and commit the batch.

