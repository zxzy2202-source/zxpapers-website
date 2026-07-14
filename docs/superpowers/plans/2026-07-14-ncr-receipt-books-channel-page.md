# NCR Receipt Books Channel Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic NCR receipt-books showcase with a dedicated distributor and wholesale procurement page that produces qualified repeat-order inquiries and exposes complete SEO/GEO structure.

**Architecture:** Keep the route as a Server Component that owns metadata, JSON-LD, static product data, and image-slot resolution. Create one dedicated Server Component for the page layout, reuse the existing site layout, hero, inquiry form, icons, and image-slot infrastructure, and leave the shared generic product template unchanged.

**Tech Stack:** Next.js 15 App Router, React 19 Server Components, TypeScript, Tailwind CSS, `next/image`, Lucide React, Playwright CLI, Lighthouse.

---

## File Map

- Create `src/components/products/NcrReceiptBooksCatalogPage.tsx`: dedicated semantic page layout and typed content props.
- Replace `src/app/products/ncr-receipt-books/page.tsx`: metadata, schemas, image slots, visible data, and component composition.
- Modify `src/config/imageSlots.ts`: register eight receipt-book image slots in the admin media catalog.
- Modify `src/lib/imageSlotDefaults.ts`: expose code-defined defaults for the eight slots.
- Modify `public/llms.txt`: update the route description for distributor, private-label, and repeat-order intent.
- Create `output/playwright/ncr-receipt-books-final-audit.js`: read-only DOM acceptance audit for the target route.

### Task 1: Establish the dedicated page component

**Files:**
- Create: `src/components/products/NcrReceiptBooksCatalogPage.tsx`

- [ ] **Step 1: Define the component contract and static page constants**

Create explicit types for book programs, resale applications, FAQ items, and props. Export the visible specification array so the route can reuse it for Product schema properties.

```tsx
interface BookProgram {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  useCase: string;
}

interface ResaleApplication {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface NcrReceiptBooksCatalogPageProps {
  heroImage: string;
  overviewImage: string;
  buyerRiskImage: string;
  productionImage: string;
  packingImage: string;
  whatsappHref: string;
  bookPrograms: BookProgram[];
  applications: ResaleApplication[];
  faqs: Array<{ q: string; a: string }>;
}

export const receiptBookSpecifications = [
  { label: "Copies", value: "2-part duplicate or 3-part triplicate carbonless sets" },
  { label: "Sets per book", value: "50, 100, or a custom count" },
  { label: "Sizes", value: "A5, A6, 1/3 A4, DL, letter, or custom dimensions" },
  { label: "Paper", value: "CB / CFB / CF carbonless paper, commonly 50-60 gsm per ply" },
  { label: "Numbering", value: "Sequential ranges, branch allocation, barcode, or QR references" },
  { label: "Finishing", value: "Glue, staple, stitch, wire binding, perforation, and wraparound covers" },
  { label: "Printing", value: "1-4 colors, logo, fields, terms, languages, and copy labels" },
  { label: "Packing", value: "Book labels, shrink wrapping, inner cartons, and private-label export cartons" },
];
```

- [ ] **Step 2: Implement the approved module order**

Render these sections in order:

1. `PageHero`
2. Four order facts
3. Direct-answer image split and quote checklist
4. Channel buyer programs
5. 2-part versus 3-part copy planning
6. Asymmetric book-program directory
7. Resale applications
8. Repeatable-SKU workflow and specification matrix
9. Material, numbering, and quality control
10. FAQ, related products, and receipt-book inquiry panel

Use the same semantic and visual patterns proven in `NcrFormsCatalogPage.tsx`, with receipt-book-specific arrays and no dependency on `ProductCategoryShowcaseTemplate`.

- [ ] **Step 3: Implement responsive and accessibility behavior**

Use `grid-cols-1` below `md`, keep every image wrapper dimensionally stable, apply `scroll-mt-24` to linked sections, use native `details` for FAQ, and apply this focus class to text links:

```tsx
const focusLink =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";
```

Every Lucide icon used as decoration receives `aria-hidden="true"`.

- [ ] **Step 4: Run TypeScript against the new component**

Run:

```powershell
pnpm type-check
```

Expected: the component may remain unused, but TypeScript reports no errors.

### Task 2: Replace the route and add matching structured data

**Files:**
- Replace: `src/app/products/ncr-receipt-books/page.tsx`

- [ ] **Step 1: Add route metadata and fallback images**

Use the approved metadata:

```tsx
export const metadata: Metadata = {
  title: "NCR Receipt Books for Distributors | Duplicate & Triplicate",
  description:
    "Wholesale NCR receipt books for distributors and printers, including duplicate and triplicate books, controlled numbering, custom covers, binding, private-label packing, and repeat-order specifications.",
  keywords:
    "NCR receipt books, carbonless receipt books, duplicate receipt books, triplicate receipt books, wholesale receipt books, numbered receipt books, custom receipt book printing, private label receipt books",
  alternates: { canonical: `${SITE.domain}/products/ncr-receipt-books` },
};
```

Define distinct hero, overview, buyer-risk, 2-part, 3-part, private-label, production, and packing fallbacks. Use only URLs already accepted by the repository's Next image configuration.

- [ ] **Step 2: Resolve all image slots in one call**

```tsx
const images = await getSlotImages([
  { slot: "ncr-receipt-books:hero", fallback: RECEIPT_HERO_IMAGE },
  { slot: "ncr-receipt-books:overview", fallback: RECEIPT_OVERVIEW_IMAGE },
  { slot: "ncr-receipt-books:buyer-risk", fallback: RECEIPT_RISK_IMAGE },
  { slot: "ncr-receipt-books:2-part", fallback: RECEIPT_2_PART_IMAGE },
  { slot: "ncr-receipt-books:3-part", fallback: RECEIPT_3_PART_IMAGE },
  { slot: "ncr-receipt-books:private-label", fallback: RECEIPT_PRIVATE_LABEL_IMAGE },
  { slot: "ncr-receipt-books:production", fallback: RECEIPT_PRODUCTION_IMAGE },
  { slot: "ncr-receipt-books:packing", fallback: RECEIPT_PACKING_IMAGE },
]);
```

- [ ] **Step 3: Build visible data and matching schemas**

Create 9 to 10 FAQ entries. Build Product, BreadcrumbList, FAQPage, and HowTo schemas from the same visible FAQ and order-step arrays.

The HowTo step names must be exactly:

```tsx
const orderSteps = [
  "Send the Current Sample or Artwork",
  "Approve Layout, Copy Roles, and Number Rules",
  "Verify the First Production Run",
  "Reorder the Approved SKU",
];
```

Use `receiptBookSpecifications` for Product `additionalProperty`.

- [ ] **Step 4: Compose the dedicated component**

Pass the eight resolved images, quote-ready WhatsApp URL, book programs, resale applications, and FAQs to `NcrReceiptBooksCatalogPage`.

- [ ] **Step 5: Run TypeScript**

Run:

```powershell
pnpm type-check
```

Expected: exit code 0.

### Task 3: Register admin-replaceable image slots

**Files:**
- Modify: `src/config/imageSlots.ts`
- Modify: `src/lib/imageSlotDefaults.ts`

- [ ] **Step 1: Add the slot catalog entries**

Add all eight `ncr-receipt-books:*` slots to the NCR product group with buyer-facing labels and recommended aspect ratios. Example:

```ts
{
  slot: "ncr-receipt-books:overview",
  label: "Receipt Books - Direct Answer",
  description: "Handwriting or receipt-use image beside the product definition and quote checklist.",
  recommendedSize: "1000 x 1000 px",
},
```

- [ ] **Step 2: Add matching defaults**

Map every new slot to the same fallback constant used by the route. Confirm no duplicate keys exist in `defaultImages`.

- [ ] **Step 3: Verify slot consistency**

Run:

```powershell
Select-String -Path src/config/imageSlots.ts,src/lib/imageSlotDefaults.ts,src/app/products/ncr-receipt-books/page.tsx -Pattern 'ncr-receipt-books:'
```

Expected: each of the eight slot names appears in the route, slot catalog, and defaults.

### Task 4: Update GEO discovery text and create browser acceptance checks

**Files:**
- Modify: `public/llms.txt`
- Create: `output/playwright/ncr-receipt-books-final-audit.js`

- [ ] **Step 1: Update `llms.txt`**

Describe the route as a wholesale and private-label receipt-book sourcing page that covers duplicate and triplicate copy roles, sets per book, controlled numbering, binding, packing, and repeat-order specifications.

- [ ] **Step 2: Create the read-only Playwright audit**

The script must return:

```js
{
  url,
  title,
  canonical,
  h1Count,
  h1Text,
  h1Lines,
  heroCtaLabels,
  heroCtasVisible,
  viewport,
  scrollWidth,
  horizontalOverflow,
  faqCount,
  faqSchemaCount,
  howToSchemaSteps,
  visibleOrderSteps,
  imageTotals,
  duplicateIds,
}
```

The script scrolls through the full page, waits for every image to complete, returns to the top, and then collects metrics without mutating site data.

### Task 5: Production verification

**Files:**
- Verify: all files above
- Generate: `output/playwright/ncr-receipt-books-final-desktop.png`
- Generate: `output/playwright/ncr-receipt-books-final-mobile.png`
- Generate: `output/playwright/ncr-receipt-books-lighthouse-final.json`

- [ ] **Step 1: Run source checks**

```powershell
pnpm type-check
git diff --check
```

Expected: both commands exit 0 for the touched source files.

- [ ] **Step 2: Stop the existing production preview and build**

Confirm the process on port 3001 belongs to this repository before stopping it, then run:

```powershell
pnpm build
```

Expected: Next.js generates `/products/ncr-receipt-books` without errors.

- [ ] **Step 3: Restart production preview**

Start `pnpm start` on port 3001 in a hidden background process and poll the target URL until it returns HTTP 200.

- [ ] **Step 4: Verify routes and discovery files**

Check HTTP 200 for:

```text
/products/ncr-receipt-books
/products/ncr-forms
/products/ncr-forms/2-part
/products/ncr-forms/3-part
/products/custom-ncr-forms
/products/ncr-invoice-books
/products/delivery-note-forms
/sitemap.xml
/llms.txt
```

Confirm sitemap and `llms.txt` include `/products/ncr-receipt-books`.

- [ ] **Step 5: Run Playwright desktop verification**

Open the target route at 1440 x 1000, snapshot before interaction, run the audit, capture the full-page screenshot after lazy images load, and confirm console errors equal zero.

- [ ] **Step 6: Run Playwright mobile verification**

Open the target route with mobile emulation at 390 x 844, snapshot, run the audit, capture the full-page screenshot, and confirm no horizontal overflow or failed images.

- [ ] **Step 7: Verify inquiry validation**

Snapshot the form, click `Send Inquiry` with required identity fields empty, and confirm the first invalid input receives focus and displays an inline error. Do not submit valid data to the backend.

- [ ] **Step 8: Run Lighthouse**

Run Lighthouse for performance, accessibility, best practices, and SEO. If Windows returns an `EPERM` error while deleting its temporary Chrome directory, accept the report only when the JSON file exists, parses successfully, and contains complete category and metric data.

- [ ] **Step 9: Review final visual output**

Inspect both screenshots for duplicate imagery, accidental sticky-header artifacts, text clipping, empty image regions, repeated card walls, and incoherent overlaps. Fix source issues and rerun the relevant checks before completion.
