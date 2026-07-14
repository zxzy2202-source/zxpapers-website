# NCR Invoice Books Channel Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dedicated, channel-buyer-focused NCR invoice books page that matches the NCR catalog design system and produces specification-complete wholesale inquiries while improving SEO and GEO clarity.

**Architecture:** Keep procurement content, metadata, image resolution, and JSON-LD in the route. Add one server-rendered presentation component for the page layout and reuse the existing layout, hero, image, link, icon, and inquiry primitives. Add a small HTTP acceptance script so visible answers and machine-readable metadata are verified together.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Lucide React, JSON-LD, Node.js acceptance script, Playwright CLI.

---

### Task 1: Add A Failing Page Contract

**Files:**
- Create: `scripts/check-ncr-invoice-books.mjs`

- [ ] **Step 1: Write the route contract**

```js
const baseUrl = process.argv[2] ?? "http://localhost:3001";
const url = new URL("/products/ncr-invoice-books", baseUrl);
const response = await fetch(url);
const html = await response.text();

const checks = [
  ["HTTP status", response.status === 200],
  ["channel H1", html.includes("Wholesale NCR Invoice Books")],
  ["repeat supply promise", html.includes("Controlled, Repeatable Supply")],
  ["direct answer", html.includes("What is an NCR invoice book?")],
  ["quote brief", html.includes("Invoice Book Quote Brief")],
  ["number control", html.includes("Number Control")],
  ["Product JSON-LD", html.includes('"@type":"Product"')],
  ["FAQ JSON-LD", html.includes('"@type":"FAQPage"')],
  ["HowTo JSON-LD", html.includes('"@type":"HowTo"')],
  ["canonical", html.includes('/products/ncr-invoice-books')],
];

const failed = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) console.log(`${passed ? "PASS" : "FAIL"} ${name}`);
if (failed.length) process.exit(1);
```

- [ ] **Step 2: Run the contract and verify it fails**

Run: `node scripts/check-ncr-invoice-books.mjs`

Expected: non-zero exit with failures for the new channel H1, repeat-supply promise, quote brief, and HowTo JSON-LD.

- [ ] **Step 3: Commit the contract**

```bash
git add scripts/check-ncr-invoice-books.mjs
git commit -m "test: define NCR invoice books page contract"
```

### Task 2: Build The Dedicated Server-Rendered Page Component

**Files:**
- Create: `src/components/products/NcrInvoiceBooksCatalogPage.tsx`

- [ ] **Step 1: Define focused presentation types**

```tsx
interface InvoiceBookProgram {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  useCase: string;
}

interface InvoiceUseCase {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface NcrInvoiceBooksCatalogPageProps {
  heroImage: string;
  overviewImage: string;
  buyerRiskImage: string;
  productionImage: string;
  packingImage: string;
  whatsappHref: string;
  programs: InvoiceBookProgram[];
  useCases: InvoiceUseCase[];
  faqs: Array<{ q: string; a: string }>;
}
```

- [ ] **Step 2: Implement the compact hero and procurement facts**

Use `PageHero` with the exact visible H1 `Wholesale NCR Invoice Books for Controlled, Repeatable Supply`, a `Build an Invoice Book Quote` link to `#quote-guide`, and a WhatsApp CTA. Add a four-cell facts strip for `Copy Sets`, `Number Control`, `Supply Program`, and `Standard Lead Time`.

- [ ] **Step 3: Implement visible buyer-answer sections**

Render these sections as semantic HTML in this order:

```tsx
<section aria-labelledby="invoice-book-answer">...</section>
<section aria-labelledby="buyer-risks">...</section>
<section aria-labelledby="programs">...</section>
<section aria-labelledby="copy-count">...</section>
<section aria-labelledby="specifications">...</section>
<section aria-labelledby="production-control">...</section>
<section aria-labelledby="repeat-orders">...</section>
<section aria-labelledby="use-cases">...</section>
<section id="invoice-book-faq" aria-labelledby="faq-heading">...</section>
<section id="inquiry" aria-labelledby="inquiry-heading">...</section>
```

The direct-answer section must define NCR invoice books in one self-contained paragraph. The buyer-risk section must explain copy clarity, number integrity, tear-off and binding, and repeat-order consistency. The comparison and specification data must be visible tables.

- [ ] **Step 4: Implement accessible interactions and responsive behavior**

Use native `details` and `summary` for FAQ rows, semantic tables with `scope="col"` or `scope="row"`, responsive `next/image` sizes, visible focus classes, and horizontal table wrappers. Do not add `use client`, state hooks, or an animation dependency.

- [ ] **Step 5: Run the type checker**

Run: `pnpm type-check`

Expected: PASS.

### Task 3: Replace The Route Content And Structured Data

**Files:**
- Modify: `src/app/products/ncr-invoice-books/page.tsx`

- [ ] **Step 1: Replace the generic template import**

```tsx
import NcrInvoiceBooksCatalogPage, {
  invoiceBookOrderSteps,
  invoiceBookSpecifications,
} from "@/components/products/NcrInvoiceBooksCatalogPage";
import { getSlotImages } from "@/lib/imageSlotUtils";
```

Remove `ProductCategoryShowcaseTemplate`, the old icon imports, `getSlotImage`, `r2Image`, and the shared single-image implementation.

- [ ] **Step 2: Add channel-focused metadata**

Use this metadata direction:

```tsx
export const metadata: Metadata = {
  title: "Wholesale NCR Invoice Books | Duplicate & Triplicate",
  description:
    "Wholesale NCR invoice books for distributors and commercial printers, with duplicate or triplicate sets, controlled numbering, custom binding, private-label packing, and repeat-order specifications.",
  alternates: { canonical: `${SITE.domain}/products/ncr-invoice-books` },
  openGraph: {
    title: "Wholesale NCR Invoice Books for Repeat Supply Programs",
    description:
      "Source custom carbonless invoice books with controlled numbering, approved binding, private-label packing, and repeat-order specifications.",
    url: `${SITE.domain}/products/ncr-invoice-books`,
    type: "website",
    images: [{ url: INVOICE_HERO_IMAGE, alt: "Wholesale NCR invoice books prepared for repeat distributor orders" }],
  },
};
```

- [ ] **Step 3: Add procurement data and answer-first FAQs**

Add program data for duplicate books, triplicate books, loose or padded sets, and private-label books. Add use cases for wholesale stationery ranges, commercial print outsourcing, field sales and service, and multi-branch invoicing. Add 8-10 FAQs covering definition, copy count, quotation inputs, numbering allocation, binding and covers, proofs, MOQ and lead time, repeat-order control, and shipping terms.

- [ ] **Step 4: Add accurate JSON-LD**

Add visible-data-backed `BreadcrumbList`, `Product`, `FAQPage`, and `HowTo` objects. The Product must include a stable `@id`, `alternateName`, `category`, `BusinessAudience`, resolved images, and `additionalProperty` based on `invoiceBookSpecifications`. Do not add `Offer` or claim public pricing.

- [ ] **Step 5: Resolve dedicated image slots and render the component**

Resolve hero, overview, buyer risk, 2-part, 3-part, private label, production, and packing images with `getSlotImages`, build the WhatsApp message from the quote inputs, and pass all props to `NcrInvoiceBooksCatalogPage`.

- [ ] **Step 6: Run the route contract**

Run: `node scripts/check-ncr-invoice-books.mjs`

Expected: every line starts with `PASS` and the process exits zero.

### Task 4: Register Admin-Editable Image Slots

**Files:**
- Modify: `src/config/imageSlots.ts`
- Modify: `src/lib/imageSlotDefaults.ts`

- [ ] **Step 1: Register route-specific slots**

Add:

```ts
"ncr-invoice-books:hero"
"ncr-invoice-books:overview"
"ncr-invoice-books:buyer-risk"
"ncr-invoice-books:2-part"
"ncr-invoice-books:3-part"
"ncr-invoice-books:private-label"
"ncr-invoice-books:production"
"ncr-invoice-books:packing"
```

Each admin entry must use `/products/ncr-invoice-books`, a descriptive Chinese label, and the aspect ratio used by the component.

- [ ] **Step 2: Add defaults matching the route fallbacks**

Use the route fallback constants for invoice, bookkeeping, printing, factory, and packing imagery so an admin reset produces the same visual result as an unset slot.

- [ ] **Step 3: Run type checking**

Run: `pnpm type-check`

Expected: PASS.

### Task 5: Verify SEO, GEO, Accessibility, And Responsive Rendering

**Files:**
- Review: `src/app/products/ncr-invoice-books/page.tsx`
- Review: `src/components/products/NcrInvoiceBooksCatalogPage.tsx`
- Review: `src/config/imageSlots.ts`
- Review: `src/lib/imageSlotDefaults.ts`

- [ ] **Step 1: Run static checks and production build**

```bash
pnpm type-check
pnpm build
git diff --check
```

Expected: all commands exit zero.

- [ ] **Step 2: Run the Web Interface Guidelines review**

Fetch the current Vercel interface guidelines and review both modified TSX files for focus visibility, semantic buttons and links, heading order, image sizing, table accessibility, reduced-motion concerns, and mobile overflow. Fix every issue that applies to the page.

- [ ] **Step 3: Verify Google-facing page output**

Inspect the rendered HTML and confirm one H1, the canonical URL, a descriptive title and meta description, visible FAQ answers, visible comparison and specification tables, and JSON-LD types `BreadcrumbList`, `Product`, `FAQPage`, and `HowTo`.

- [ ] **Step 4: Run Playwright desktop and mobile checks**

Open the route at 1440 x 1000 and 390 x 844. Capture screenshots in `output/playwright/`, check browser console messages, follow the primary CTA to `#quote-guide`, expand an FAQ, and verify `document.documentElement.scrollWidth === document.documentElement.clientWidth` at mobile width.

- [ ] **Step 5: Run the final route contract**

Run: `node scripts/check-ncr-invoice-books.mjs`

Expected: all checks pass.

- [ ] **Step 6: Commit the implementation**

```bash
git add scripts/check-ncr-invoice-books.mjs src/app/products/ncr-invoice-books/page.tsx src/components/products/NcrInvoiceBooksCatalogPage.tsx src/config/imageSlots.ts src/lib/imageSlotDefaults.ts docs/superpowers/plans/2026-07-14-ncr-invoice-books-channel-page.md
git commit -m "feat: optimize NCR invoice books channel page"
```

