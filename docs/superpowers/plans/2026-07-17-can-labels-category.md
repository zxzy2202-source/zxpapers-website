# Can Labels Category Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/products/can-labels` as a configuration-driven B2B category page focused on custom printed can labels, evidence-bounded product selection and qualified OEM inquiries.

**Architecture:** Add one Can Labels configuration and migrate the route to the existing `ProductCategoryTemplate`, metadata, image and schema helpers. Make one necessary generic schema correction so size item names use the current category instead of always saying `Thermal Labels`; keep all child detail routes and the shared template unchanged.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, Node test runner, Playwright CLI

---

## File Map

- Create `tests/can-labels-category-template.contract.test.mjs`: protects route composition, product and size routes, claim boundaries and generic schema naming.
- Create `src/config/product-categories/can-labels.ts`: owns Can Labels metadata, content, linked routes, images, qualification steps, FAQ and inquiry prompts.
- Modify `src/lib/product-pages/product-category-schema.ts`: use `config.categoryName` when naming size entries.
- Modify `src/components/products/category/ProductCategoryTemplate.tsx`: let the compact product area adapt when a category has one item instead of assuming five items.
- Replace `src/app/products/can-labels/page.tsx`: become a thin server composition layer matching Thermal Labels.
- Keep `src/components/products/category/ProductCategoryTemplate.tsx` unchanged unless verification exposes a real contract defect.
- Keep all seven Can Labels detail pages unchanged.

### Task 1: Add A Failing Can Labels Contract Test

**Files:**
- Create: `tests/can-labels-category-template.contract.test.mjs`
- Test: `src/app/products/can-labels/page.tsx`
- Test: `src/config/product-categories/can-labels.ts`
- Test: `src/lib/product-pages/product-category-schema.ts`

- [ ] **Step 1: Write the route, config and schema contract**

Create this test file:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("can labels route uses the reusable category architecture", async () => {
  const route = await read("src/app/products/can-labels/page.tsx");

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /canLabelsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.doesNotMatch(route, /ProductCategoryShowcaseTemplate/);
  assert.doesNotMatch(route, /schemas\.product/);
});

test("can labels config keeps approved product and size destinations", async () => {
  const config = await read("src/config/product-categories/can-labels.ts");

  for (const destination of [
    "/products/can-labels/custom-printed",
    "/products/can-labels/blank",
    "211x400",
    "211x603",
    "300x407",
    "307x510",
    "401x700",
  ]) {
    assert.match(config, new RegExp(destination.replaceAll("/", "\\/")));
  }

  assert.match(config, /Custom Printed Can Labels/);
  assert.match(config, /Can and surface/);
  assert.match(config, /Filling, labeling and exposure/);
  assert.match(config, /Material, adhesive and finish/);
  assert.match(config, /Artwork, roll and commercial/);
  assert.doesNotMatch(config, /href:\s*"#/);
});

test("can labels copy respects product and evidence boundaries", async () => {
  const config = await read("src/config/product-categories/can-labels.ts");

  assert.match(config, /direct food contact.*separate|separate.*direct food contact/is);
  assert.match(config, /actual can|production can/i);
  assert.match(config, /surface|coating/i);
  assert.doesNotMatch(config, /FDA 21 CFR|BPA[- ]?free|ISO 9001/i);
  assert.doesNotMatch(config, /MOQ:\s*\d|10.?18 days|7 days|24h|24 hours/i);
  assert.doesNotMatch(config, /waterproof|oil-proof|chemical-proof/i);
});

test("category schema names sizes from the active category", async () => {
  const schema = await read("src/lib/product-pages/product-category-schema.ts");

  assert.match(schema, /`\$\{size\.label\} \$\{config\.categoryName\}`/);
  assert.doesNotMatch(schema, /`\$\{size\.label\} Thermal Labels`/);
});

test("shared category template adapts a single compact product route", async () => {
  const template = await read("src/components/products/category/ProductCategoryTemplate.tsx");

  assert.match(template, /singleCompactFamily/);
  assert.match(template, /compactFamilies\.length === 1/);
});
```

- [ ] **Step 2: Run the new test and confirm the red state**

Run:

```powershell
node --test tests/can-labels-category-template.contract.test.mjs
```

Expected: FAIL because `src/config/product-categories/can-labels.ts` does not exist and the current route still imports `ProductCategoryShowcaseTemplate`.

- [ ] **Step 3: Commit the failing test**

```powershell
git add tests/can-labels-category-template.contract.test.mjs
git commit -m "test: define can labels category contract"
```

### Task 2: Add The Can Labels Configuration And Generic Schema Fix

**Files:**
- Create: `src/config/product-categories/can-labels.ts`
- Modify: `src/lib/product-pages/product-category-schema.ts`
- Reference: `src/app/products/can-labels/can-labels-data.tsx`
- Reference: `src/config/imageSlots.ts`

- [ ] **Step 1: Define metadata, hero and routes**

Export `canLabelsCategoryConfig satisfies ProductCategoryConfig` with these exact category-level values:

```ts
kind: "category",
canonicalPath: "/products/can-labels",
categoryName: "Can Labels",
alternateNames: [
  "Custom Can Labels",
  "Metal Can Labels",
  "Food Can Labels",
  "Beverage Can Labels",
],
metadata: {
  title: "Custom Can Labels Manufacturer | Food, Beverage & OEM",
  description:
    "Source custom printed and blank can labels by container, size and application. Review metal surface, moisture, oil, material, finish, machine and OEM packing requirements.",
  keywords: [
    "custom can labels",
    "metal can labels",
    "food can labels",
    "beverage can labels",
    "printed can labels",
    "blank can labels",
    "can label manufacturer",
    "OEM can label supplier",
  ],
},
```

Use a hero answer that identifies the actual can, coating, cleaning, filling or labeling sequence, condensation, oil, material, finish, quantity and packing as qualification inputs. Use `Browse Can Label Options` and `Request an OEM Review` as the two actions. Do not publish fixed turnaround, compliance or resistance facts.

- [ ] **Step 2: Configure product and size navigation**

Create exactly two genuine product routes. `Custom Printed Can Labels` is `featured: true` and links to `/products/can-labels/custom-printed`; `Blank Can Labels` links to `/products/can-labels/blank`. Do not add internal jump links as fake product families.

Use these category jump links:

```ts
[
  { label: "Products", href: "#product-families" },
  { label: "Sizes", href: "#popular-sizes" },
  { label: "Applications", href: "#applications" },
  { label: "Selection", href: "#selection-guide" },
  { label: "FAQ", href: "#faq" },
  { label: "Quote", href: "#inquiry" },
]
```

Use Home, Products and Can Labels breadcrumbs. Use these existing related destinations: Product Labels at `/products/product-labels`, Detergent and Chemical Container Labels at `/products/detergent-labels`, Thermal Labels at `/products/thermal-labels`, and OEM or Private Label at `/oem`.

Map existing size data without copying route strings:

```ts
sizes: canLabelSizes.map((size) => ({
  slug: size.slug,
  label: size.label,
  market: size.markets ?? "Global",
  badge: size.badge,
  use: sizeUses[size.slug],
})),
```

Define `sizeUses` as:

```ts
const sizeUses: Record<string, string> = {
  "211x400": "Standard food and beverage cans",
  "211x603": "Tall beverage and specialty cans",
  "300x407": "Common food and pet-food cans",
  "307x510": "Wide food and industrial cans",
  "401x700": "Large food-service and industrial cans",
};
```

- [ ] **Step 3: Configure application and selection content**

Add six applications using existing image slots:

| ID | Title | Slot | Qualification focus |
|---|---|---|---|
| `food-cans` | Food cans | `can-labels:applications:food` | can coating, filling/labeling sequence, oil, moisture and storage |
| `beverage-cans` | Beverage and craft cans | `can-labels:applications:beverage` | chilled condensation, can shape, white ink and finish |
| `pet-food-cans` | Pet-food cans | `can-labels:applications:pet-food` | oil or gravy exposure, multi-SKU artwork and retail handling |
| `oil-paint-cans` | Oil, lubricant and paint cans | `can-labels:applications:paint` | surface oil, leakage, wiping, abrasion and coating |
| `industrial-cans` | Industrial and chemical containers | `can-labels:applications:industrial` | actual liquid, concentration, contact method, temperature and life |
| `copacker-programs` | Co-packer and multi-SKU programs | `can-labels:applications:canning` | applicator, line speed, roll construction, versions and carton separation |

Use these ordered step titles:

```ts
["Can and surface", "Filling, labeling and exposure", "Material, adhesive and finish", "Artwork, roll and commercial"]
```

Each step contains four concrete inputs from the approved design. The material step comes after the real surface and exposure conditions.

- [ ] **Step 4: Configure evidence, FAQ and inquiry**

Evidence contains four checks: actual-can adhesion, moisture/oil/temperature exposure, artwork/color/barcode approval, and machine-ready roll trial. Its note distinguishes outside-of-food-packaging use from direct food contact and requires material- or project-specific evidence.

Add eight visible FAQ answers covering paper versus film, actual metal surface, condensation, oil exposure, clear BOPP and white ink, automatic application, multiple SKUs and quotation inputs. Answers must be conditional and must not promise universal performance.

The inquiry message requests the exact fields from the design document. Set `productName: "Custom Can Labels"` and begin the message with these lines:

```text
Company and buyer type:
Can application and product:
Can material, coating and dimensions:
Label area, seam and curvature:
Filling and labeling sequence:
Surface cleaning and container temperature:
```

- [ ] **Step 5: Make category schema naming generic**

Change only the size entry name in `product-category-schema.ts`:

```ts
name: `${size.label} ${config.categoryName}`,
```

This preserves `4 x 6 Thermal Labels` on the existing category and produces `211 x 400 Can Labels` on the new category.

- [ ] **Step 6: Run the focused test and TypeScript**

```powershell
node --test tests/can-labels-category-template.contract.test.mjs
pnpm tsc --noEmit
```

Expected: the config and schema assertions pass; the route assertion still fails until Task 3. TypeScript exits 0.

- [ ] **Step 7: Commit configuration and schema behavior**

```powershell
git add src/config/product-categories/can-labels.ts src/lib/product-pages/product-category-schema.ts
git commit -m "feat: define can labels category content"
```

### Task 3: Adapt The Shared Product Grid And Migrate The Route

**Files:**
- Modify: `src/components/products/category/ProductCategoryTemplate.tsx`
- Replace: `src/app/products/can-labels/page.tsx`

- [ ] **Step 1: Make one compact family render as a useful row**

Add this derived state next to `featuredFamily` and `compactFamilies`:

```ts
const singleCompactFamily = compactFamilies.length === 1;
```

When `singleCompactFamily` is true, keep the container one column and render the compact link as a desktop image-and-copy row. When false, preserve the existing `md:grid-cols-2 xl:grid-cols-5` grid and card presentation used by Thermal Labels. Keep the existing mobile thumbnail row, focus ring and motion-reduction behavior in both branches.

- [ ] **Step 2: Replace the legacy showcase route**

Use this server composition:

```tsx
import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { canLabelsCategoryConfig } from "@/config/product-categories/can-labels";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() => resolveProductCategoryImages(canLabelsCategoryConfig));

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(canLabelsCategoryConfig, images.hero);
}

export default async function CanLabelsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(canLabelsCategoryConfig, images.hero);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need a custom can label review. I can send the can material, coating, dimensions, filling and labeling sequence, surface condition, exposure, artwork, roll specification, quantity, packing and destination.",
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <ProductCategoryTemplate config={canLabelsCategoryConfig} images={images} whatsappHref={whatsappHref} />
    </>
  );
}
```

- [ ] **Step 3: Run focused and full contract tests**

```powershell
node --test tests/can-labels-category-template.contract.test.mjs
node --test tests/*.test.mjs
```

Expected: all focused assertions pass and the existing Thermal Labels contract remains green.

- [ ] **Step 4: Run TypeScript and diff checks**

```powershell
pnpm tsc --noEmit
git diff --check
```

Expected: both commands exit 0.

- [ ] **Step 5: Commit the template adaptation and route migration**

```powershell
git add src/components/products/category/ProductCategoryTemplate.tsx src/app/products/can-labels/page.tsx
git commit -m "feat: rebuild can labels category page"
```

### Task 4: Build And Browser-Verify The Category Page

**Files:**
- Modify only if verification exposes a scoped defect.

- [ ] **Step 1: Run the production build**

```powershell
pnpm build
```

Expected: the build exits 0 and generates `/products/can-labels` plus the existing child routes.

- [ ] **Step 2: Restart preview port 3002 from this worktree**

Identify only the process listening on port 3002, stop that process, then launch the built Next.js server hidden from this worktree:

```powershell
pnpm start -- --port 3002
```

Expected: `http://localhost:3002/products/can-labels` returns HTTP 200.

- [ ] **Step 3: Verify document semantics**

Check one H1, the canonical URL, visible FAQ and three JSON-LD scripts. Confirm CollectionPage, ItemList, BreadcrumbList and FAQPage are present, category-level Product is absent, and size names say `Can Labels` rather than `Thermal Labels`.

- [ ] **Step 4: Verify desktop and mobile behavior**

At 1440 x 1000 and 390 x 844, verify section order, all two product routes, all five size routes, horizontal application scrolling, no document-level horizontal overflow, inquiry access and zero console errors. Do not save or send screenshots.

- [ ] **Step 5: Re-scan prohibited claims**

Search the rendered page and config for unconditional `FDA 21 CFR`, `BPA-free`, `ISO 9001`, fixed MOQ, fixed lead time, `waterproof`, `oil-proof` and `chemical-proof`. Expected: no prohibited unconditional claim is present.

- [ ] **Step 6: Run final verification**

```powershell
node --test tests/*.test.mjs
pnpm tsc --noEmit
git diff --check
git status --short --branch
```

Expected: tests, TypeScript and diff checks exit 0; the worktree is clean on `codex/can-labels-category`.
