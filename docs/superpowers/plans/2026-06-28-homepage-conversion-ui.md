# Homepage Conversion UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize the ZhixinPaper homepage UI so overseas B2B buyers can identify the right supply path and request a quote faster.

**Architecture:** Keep the existing Next.js homepage and data arrays, then reshape the hero, product finder, trust proof, logistics, and final CTA markup inside `src/app/page.tsx`. Preserve SEO/GEO sections, internal links, and existing product image slot usage while reducing repeated trust presentation and dark-section density.

**Tech Stack:** Next.js 15 App Router, React 19 server component, Tailwind CSS, lucide-react icons, existing shared `PageHero` and `PopularSizesCarousel`.

---

### Task 1: Add Conversion Data Structures

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add homepage quote-readiness and proof data near existing homepage arrays**

Add these constants after `complianceMarkets` and before `jumboBenefits`:

```tsx
const quoteReadinessItems = [
  {
    label: "Product type",
    value: "Rolls, labels, NCR, can labels",
    hint: "Tell us blank stock or custom printed.",
  },
  {
    label: "Size & material",
    value: "Width, length, core, GSM",
    hint: "For labels, include adhesive and liner.",
  },
  {
    label: "Custom needs",
    value: "Logo, Pantone, QR, cartons",
    hint: "Artwork proof can be confirmed before bulk order.",
  },
  {
    label: "Destination",
    value: "Port, country, trade term",
    hint: "FOB, CIF, DDP, or container quote.",
  },
];

const factoryProofMetrics = [
  { icon: FactoryIcon, value: FACTORY.area, label: "Factory Area", sub: "Modern converting facility in Xi'an" },
  { icon: Zap, value: FACTORY.dailyOutput, label: "Daily Output", sub: "Stable capacity for repeat orders" },
  { icon: Globe, value: `${FACTORY.countriesServed}+`, label: "Export Markets", sub: "Bulk supply and mixed SKU pallets" },
  { icon: Users, value: FACTORY.oemClients, label: "OEM Clients", sub: "Private label and distributor accounts" },
];

const factoryProofPoints = [
  "ISO 9001:2015, FSC, BPA-free, RoHS, REACH, and CE support",
  "Private-label cartons, core printing, barcode marks, and pallet plans",
  "Export documents for wholesale buyers: invoice, packing list, CO, and B/L",
];

const finalQuoteChecklist = [
  "Product and size/spec",
  "Quantity or container plan",
  "Blank stock or custom print",
  "Destination port or country",
];
```

- [ ] **Step 2: Verify TypeScript parses the new constants**

Run: `pnpm tsc --noEmit`

Expected: No syntax errors from the new constants. Existing unrelated project errors, if any, should be recorded before continuing.

### Task 2: Rework Hero Quote Readiness Panel

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace `PageHero` `rightSlot` with the procurement checklist panel**

Replace the existing `rightSlot` card with markup that maps `quoteReadinessItems`, uses amber numbering, and links to `/contact` with "Send RFQ Details".

- [ ] **Step 2: Replace `mobileRightSlot` with a compact version of the same checklist**

Use the same `quoteReadinessItems` data source and show the label/value pairs in two columns on mobile.

- [ ] **Step 3: Run type check**

Run: `pnpm tsc --noEmit`

Expected: The page compiles with no new type errors.

### Task 3: Convert Product Finder Into Buying Path Cards

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Change the product section loop from `productCategoryCards` to `productFinderCards`**

Use `productFinderCards` so each card has `eyebrow`, `spec`, `summary`, and a product-specific CTA.

- [ ] **Step 2: Update layout to three columns on desktop**

Use `grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3` so cards have enough text room and do not feel like cramped catalog tiles.

- [ ] **Step 3: Keep image slots and inquiry URLs**

Use `imgs[slot] ?? fallback` for images and `href` for the CTA. The card image/title can link to the product page; CTA label should use the existing `cta` field.

- [ ] **Step 4: Run type check**

Run: `pnpm tsc --noEmit`

Expected: The product card loop compiles and existing image slot behavior remains intact.

### Task 4: Consolidate Factory Proof

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace the thin trust strip with a lighter procurement trust bar**

Keep the section immediately after the hero, but make it a compact `Quote-ready factory` strip with four buyer-facing trust statements rather than repeating all factory numbers.

- [ ] **Step 2: Replace the dark Factory Proof stats section and following Why Us section with one light Factory Proof section**

Use `factoryProofMetrics`, `factoryProofPoints`, and the existing `whyUs` array in a single `bg-white` section. This reduces one dark band and consolidates trust proof.

- [ ] **Step 3: Run type check**

Run: `pnpm tsc --noEmit`

Expected: The removed sections do not leave broken JSX or unused local variables.

### Task 5: Lighten Logistics and Strengthen Final CTA

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Change the Container Loading section from dark navy to light slate/white styling**

Use `bg-white` or `bg-slate-50`, dark text, navy icon boxes, and amber primary CTA. Keep all logistics facts and the image.

- [ ] **Step 2: Update the final CTA to include `finalQuoteChecklist`**

Add a compact checklist before the buttons so buyers know what details to send. Keep both `/contact` and WhatsApp actions.

- [ ] **Step 3: Run type check**

Run: `pnpm tsc --noEmit`

Expected: The final homepage compiles.

### Task 6: Verify Build and Render

**Files:**
- Inspect: `src/app/page.tsx`

- [ ] **Step 1: Run production build**

Run: `pnpm build`

Expected: Next.js build completes. If it fails from pre-existing unrelated modified files, capture the exact error and run the narrower `pnpm tsc --noEmit` result.

- [ ] **Step 2: Start dev server**

Run: `pnpm dev`

Expected: Local Next.js app runs on port 3001 or reports the active URL.

- [ ] **Step 3: Inspect homepage desktop and mobile**

Use a browser check to verify:

- Hero text and quote panel do not overlap.
- Product finder cards have readable CTA labels.
- Only Jumbo remains a heavy dark conversion band in the homepage middle.
- Final CTA checklist fits on mobile.
- Key Facts section remains visible for SEO/GEO.

- [ ] **Step 4: Review git diff**

Run: `git diff -- src/app/page.tsx docs/superpowers/plans/2026-06-28-homepage-conversion-ui.md`

Expected: Diff only contains homepage conversion UI changes and the implementation plan.
