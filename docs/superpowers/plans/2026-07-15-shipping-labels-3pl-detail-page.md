# Shipping Labels 3PL Detail Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic shipping-label category template with a dedicated 3PL and warehouse procurement page that prevents specification mistakes, earns qualified inquiries, and exposes matching SEO/GEO answers and structured data.

**Architecture:** Keep `src/app/products/shipping-labels/page.tsx` as the Server Component responsible for metadata, schemas, image resolution, and static content. Render a new server-only `ShippingLabelsDetailPage` component for the page-specific layout, while preserving shared `Layout`, `PageHero`, `InquiryForm`, header, footer, and inquiry behavior. Register eight replaceable image slots and derive FAQ and HowTo JSON-LD from the same arrays rendered on screen.

**Tech Stack:** Next.js 15 App Router, React 19 Server Components, TypeScript, Tailwind CSS 3, `next/image`, `next/link`, Lucide React, Node test runner, Playwright CLI.

---

## File Map

- Create `src/components/products/ShippingLabelsDetailPage.tsx`: semantic shipping-label page layout and typed presentation props.
- Rewrite `src/app/products/shipping-labels/page.tsx`: metadata, buyer content, image resolution, schemas, and component composition.
- Modify `src/config/imageSlots.ts`: register eight shipping-label-specific admin slots.
- Modify `src/lib/imageSlotDefaults.ts`: provide distinct fallbacks for all eight slots.
- Modify `public/llms.txt`: publish the operations-first product definition and sourcing facts.
- Create `tests/shipping-labels-page.contract.test.mjs`: source-level contract for route ownership, visible sections, and schema parity.

### Task 1: Add the Failing Page Contract

**Files:**
- Create: `tests/shipping-labels-page.contract.test.mjs`

- [ ] **Step 1: Create the source contract test**

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const route = readFileSync("src/app/products/shipping-labels/page.tsx", "utf8");
const componentPath = "src/components/products/ShippingLabelsDetailPage.tsx";

test("shipping labels route uses its dedicated detail component", () => {
  assert.match(route, /ShippingLabelsDetailPage/);
  assert.doesNotMatch(route, /ProductCategoryShowcaseTemplate/);
  assert.doesNotThrow(() => readFileSync(componentPath, "utf8"));
});

test("route publishes Product, Breadcrumb, FAQ, and HowTo schemas", () => {
  for (const schemaType of ["Product", "BreadcrumbList", "FAQPage", "HowTo"]) {
    assert.match(route, new RegExp(`\\"@type\\": \\"${schemaType}\\"`));
  }
});

test("visible workflow and HowTo use the same four step names", () => {
  for (const step of [
    "Send printer and label details",
    "Approve sample and packing specification",
    "Verify the first production batch",
    "Reorder by the approved SKU",
  ]) {
    assert.match(route, new RegExp(step));
  }
  assert.match(route, /workflowSteps\.map/);
});

test("page component contains the approved operations sections", () => {
  const component = readFileSync(componentPath, "utf8");
  for (const section of [
    "What Are Direct Thermal Shipping Labels?",
    "Stop the failures that slow a packing line",
    "Rolls or fanfold? Choose from the workflow",
    "Confirm printer fit before production",
    "Build a specification your team can reorder",
    "Quality controls behind every repeat batch",
  ]) {
    assert.match(component, new RegExp(section.replace(/[?]/g, "\\?")));
  }
});

test("route defines at least nine visible FAQs from one shared array", () => {
  const faqEntries = route.match(/question:/g) ?? [];
  assert.ok(faqEntries.length >= 9, `expected at least 9 FAQs, found ${faqEntries.length}`);
  assert.match(route, /faqs\.map/);
});
```

- [ ] **Step 2: Run the contract and confirm the expected failure**

Run:

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/shipping-labels-page.contract.test.mjs
```

Expected: FAIL because `ShippingLabelsDetailPage.tsx` does not exist and the route still imports `ProductCategoryShowcaseTemplate`.

- [ ] **Step 3: Commit the test only**

```powershell
git add -- tests/shipping-labels-page.contract.test.mjs
git commit -m "test: define shipping labels detail page contract"
```

### Task 2: Register Shipping-Label Image Slots

**Files:**
- Modify: `src/config/imageSlots.ts`
- Modify: `src/lib/imageSlotDefaults.ts`

- [ ] **Step 1: Add eight slots after the thermal-label product slots**

```ts
{ slot: "shipping-labels:hero", label: "运输标签-顶部主图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "16:9", description: "3PL与海外仓采购首屏，展示4x6卷装或折叠装运输标签" },
{ slot: "shipping-labels:overview", label: "运输标签-产品定义图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "直热式运输标签定义和报价资料模块" },
{ slot: "shipping-labels:failure-risks", label: "运输标签-运营风险图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "扫码、卡纸、脱胶和换卷风险模块" },
{ slot: "shipping-labels:rolls", label: "运输标签-卷装图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "卷装标签和桌面或工业打印机方案" },
{ slot: "shipping-labels:fanfold", label: "运输标签-折叠装图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "Z折叠连续供纸和高吞吐包装台方案" },
{ slot: "shipping-labels:applications", label: "运输标签-履约场景图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "3PL、海外仓、电商履约和快递分拨场景" },
{ slot: "shipping-labels:quality-control", label: "运输标签-质量控制图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "条码、模切、粘胶、卷绕和数量检查" },
{ slot: "shipping-labels:packing", label: "运输标签-出口包装图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "纸箱、托盘、批次标签和补货SKU控制" },
```

- [ ] **Step 2: Add distinct fallback constants and exact defaults**

Use the existing thermal-label product image for the hero and seven distinct repository-approved Unsplash or factory fallbacks:

```ts
const SHIPPING_LABELS_HERO_IMAGE = THERMAL_LABELS_IMAGE;
const SHIPPING_LABELS_OVERVIEW_IMAGE = "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1200&q=80";
const SHIPPING_LABELS_RISK_IMAGE = "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80";
const SHIPPING_LABELS_ROLL_IMAGE = "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80";
const SHIPPING_LABELS_FANFOLD_IMAGE = "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1200&q=80";
const SHIPPING_LABELS_APPLICATION_IMAGE = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80";
const SHIPPING_LABELS_QUALITY_IMAGE = FACTORY_LINE_IMAGE;
const SHIPPING_LABELS_PACKING_IMAGE = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80";
```

Add these exact mappings to `exactDefaults`:

```ts
"shipping-labels:hero": SHIPPING_LABELS_HERO_IMAGE,
"shipping-labels:overview": SHIPPING_LABELS_OVERVIEW_IMAGE,
"shipping-labels:failure-risks": SHIPPING_LABELS_RISK_IMAGE,
"shipping-labels:rolls": SHIPPING_LABELS_ROLL_IMAGE,
"shipping-labels:fanfold": SHIPPING_LABELS_FANFOLD_IMAGE,
"shipping-labels:applications": SHIPPING_LABELS_APPLICATION_IMAGE,
"shipping-labels:quality-control": SHIPPING_LABELS_QUALITY_IMAGE,
"shipping-labels:packing": SHIPPING_LABELS_PACKING_IMAGE,
```

- [ ] **Step 3: Run the type check**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' type-check
```

Expected: PASS with zero TypeScript errors.

- [ ] **Step 4: Commit the slot registry and defaults**

```powershell
git add -- src/config/imageSlots.ts src/lib/imageSlotDefaults.ts
git commit -m "feat: add shipping labels image slots"
```

### Task 3: Build the Dedicated Server Component

**Files:**
- Create: `src/components/products/ShippingLabelsDetailPage.tsx`

- [ ] **Step 1: Define presentation types and shared helpers**

The component stays server-only and exports these exact interfaces for route data:

```ts
export interface ShippingLabelFailureRisk {
  title: string;
  symptom: string;
  cause: string;
  control: string;
  icon: LucideIcon;
}

export interface ShippingLabelFormat {
  title: string;
  bestFor: string;
  description: string;
  checks: string[];
  image: string;
  imageAlt: string;
}

export interface ShippingLabelCompatibilityRow {
  printer: string;
  commonModels: string;
  confirm: string;
}

export interface ShippingLabelSpecificationGroup {
  title: string;
  items: Array<{ label: string; value: string }>;
}

export interface ShippingLabelApplication {
  title: string;
  description: string;
  decision: string;
  image: string;
  imageAlt: string;
}

export interface ShippingLabelWorkflowStep {
  name: string;
  description: string;
}

export interface ShippingLabelFaq {
  question: string;
  answer: string;
}
```

The page props must include all eight image URLs plus `failureRisks`, `formats`, `compatibilityRows`, `specificationGroups`, `applications`, `workflowSteps`, `qualityControls`, `faqs`, and `whatsappUrl`.

Add focused helpers inside the same file:

```tsx
function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs font-semibold uppercase text-amber-700">{eyebrow}</p> : null}
      <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.6rem]">{title}</h2>
      {description ? <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-slate-600">{description}</p> : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 2: Implement the hero, facts, and direct-answer sections**

Render `Layout` and `PageHero` with:

```tsx
<PageHero
  bgImage={heroImage}
  overlayDir="left"
  overlayOpacity={70}
  minHeight="min-h-[430px]"
  compact
  breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Shipping Labels" }]}
  badge={{ text: "3PL and Warehouse Supply", color: "amber" }}
  title={<>Shipping Labels Built for<br /><span className="text-amber-300">High-Volume Fulfillment</span></>}
  subtitle="Direct thermal 4x6 shipping labels in rolls and fanfold, matched to your printer, throughput, parcel surface and replenishment plan."
  trustBadges={["4x6 / 100x150 mm", "Roll and fanfold", "Printer matched", "Batch controlled"]}
  stats={[
    { value: "4x6", label: "Shipping standard" },
    { value: "Roll / Fold", label: "Supply format" },
    { value: "24h", label: "Quote response" },
  ]}
  ctas={[
    { label: "Build Your Label Specification", href: "#inquiry", variant: "primary" },
    { label: "Send Printer Model", href: whatsappUrl, variant: "outline" },
  ]}
/>
```

Immediately below, render a four-cell facts band and a two-column direct-answer section with `overviewImage`, the exact heading `What Are Direct Thermal Shipping Labels?`, the definition approved in the design, and the six-item quote checklist.

- [ ] **Step 3: Implement failure risks, format choice, and compatibility**

Render:

- `#failure-risks`: left image and four border-separated risk rows showing symptom, cause, and purchasing control.
- `#formats`: roll and fanfold as one large and one smaller asymmetric option, each with image, `bestFor`, description, and checks.
- `#printer-fit`: a responsive semantic table with `Printer`, `Common workflow`, and `Confirm before production` columns.

Use the exact H2 headings from the contract. Tables use an overflow wrapper on mobile; content sections do not set fixed heights.

- [ ] **Step 4: Implement specifications, applications, workflow, quality, FAQ, and inquiry**

Render these remaining sections in order:

1. `#specification`: grouped specification matrix from `specificationGroups`.
2. `#applications`: four image-backed operational application items.
3. `#repeat-sku`: visible four-step workflow from `workflowSteps`, plus packing image and packing controls.
4. `#quality-control`: quality image and six visible `qualityControls`.
5. `#faq`: native `<details>` elements created from `faqs`.
6. Related product links with descriptive labels.
7. `#inquiry`: navy information panel plus shared form.

Use this exact form call:

```tsx
<InquiryForm
  compact
  productName="bulk direct thermal shipping labels"
  initialMessage={"Printer brand / model:\nLabel size:\nRoll or fanfold:\nCore / roll diameter / label count:\nGap / perforation / unwind:\nParcel surface / temperature:\nDaily or monthly volume:\nCarton / pallet / private label:\nDestination / Incoterm:"}
/>
```

Decorative Lucide icons receive `aria-hidden="true"`. Use only `transition-colors` and `transition-transform`; do not use `transition-all`, emoji, nested cards, or fixed text-area heights.

- [ ] **Step 5: Run the contract to confirm only route-owned checks still fail**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/shipping-labels-page.contract.test.mjs
```

Expected: component section assertions pass; route import and schemas still fail until Task 4.

- [ ] **Step 6: Commit the dedicated component**

```powershell
git add -- src/components/products/ShippingLabelsDetailPage.tsx
git commit -m "feat: build shipping labels detail page"
```

### Task 4: Rewrite the Route and Add Matching Schemas

**Files:**
- Modify: `src/app/products/shipping-labels/page.tsx`

- [ ] **Step 1: Replace metadata and imports**

Remove `ProductCategoryShowcaseTemplate`, emoji product data, carousel data, and generic category schemas. Import `ShippingLabelsDetailPage`, its exported data types, `getSlotImages`, `SITE`, and the Lucide icons used in `failureRisks`.

Use:

```ts
export const metadata: Metadata = {
  title: "4x6 Shipping Labels for 3PL and Warehouses | Rolls and Fanfold",
  description: "Bulk direct thermal shipping labels for 3PL and warehouse operations, including 4x6 rolls and fanfold, printer matching, adhesive selection, pallet packing, samples, and repeat-order control.",
  keywords: "4x6 shipping labels bulk, direct thermal shipping labels, fanfold shipping labels, shipping label rolls, 3PL shipping labels, warehouse shipping labels, thermal printer compatible labels, wholesale shipping labels",
  alternates: { canonical: `${SITE.domain}/products/shipping-labels` },
  openGraph: {
    title: "4x6 Shipping Labels for 3PL and Warehouses | ZhixinPaper",
    description: "Printer-matched 4x6 rolls and fanfold labels for high-volume fulfillment, with adhesive, packing and repeat-SKU control.",
    url: `${SITE.domain}/products/shipping-labels`,
    type: "website",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "Bulk 4x6 shipping labels for 3PL and warehouse operations" }],
  },
};
```

- [ ] **Step 2: Define visible data arrays**

Import `ScanLine`, `Printer`, `ShieldAlert`, and `RefreshCcw` from Lucide, then define the complete static data:

```ts
const failureRisks: ShippingLabelFailureRisk[] = [
  {
    title: "Barcode will not scan",
    symptom: "Operators reprint labels or key tracking numbers by hand.",
    cause: "Low image contrast, incorrect print density, coating mismatch or poor barcode quiet zones.",
    control: "Approve a printer-matched sample and verify the live carrier barcode before the bulk run.",
    icon: ScanLine,
  },
  {
    title: "Labels jam or skip",
    symptom: "The printer misses labels, pauses the line or feeds two labels at once.",
    cause: "Wrong gap, sensor method, core, roll diameter, perforation or winding tension.",
    control: "Confirm printer model, sensing method, gap, core, outer diameter and unwind direction.",
    icon: Printer,
  },
  {
    title: "Labels lift from parcels",
    symptom: "Corners rise or the label detaches during sorting and final-mile handling.",
    cause: "The adhesive does not match recycled cartons, rough corrugated board, poly mailers or temperature.",
    control: "Test permanent, high-tack or all-temperature adhesive on the real parcel surface.",
    icon: ShieldAlert,
  },
  {
    title: "Teams change media too often",
    symptom: "Packing stations stop repeatedly to replace rolls or fanfold stacks.",
    cause: "Label count, core and supply format were chosen without daily throughput data.",
    control: "Size roll capacity or fanfold stack count from labels per shift and available printer space.",
    icon: RefreshCcw,
  },
];

const compatibilityRows: ShippingLabelCompatibilityRow[] = [
  { printer: "Zebra desktop", commonModels: "ZD220, ZD230, ZD420, GK420d", confirm: "4-inch media width, 1-inch core, outer diameter, gap sensing and DPI" },
  { printer: "Zebra industrial", commonModels: "ZT230, ZT411, ZT510", confirm: "3-inch core, large roll diameter, winding direction, speed and sensor setup" },
  { printer: "Rollo and Munbyn", commonModels: "Desktop 4x6 direct thermal", confirm: "Fanfold or roll feed, label width, gap, perforation and driver size" },
  { printer: "Dymo", commonModels: "4XL and 5XL workflows", confirm: "Model-specific media path, label dimensions and compatible supply format" },
  { printer: "Generic industrial", commonModels: "203, 300 or 600 DPI direct thermal", confirm: "Maximum width, core, roll diameter, sensing method, speed and image density" },
];

const specificationGroups: ShippingLabelSpecificationGroup[] = [
  {
    title: "Label geometry",
    items: [
      { label: "Standard size", value: "4 x 6 inch / 100 x 150 mm" },
      { label: "Die cut", value: "Width, height, corner radius and tolerance confirmed" },
      { label: "Feed control", value: "Gap, perforation and black-mark option" },
    ],
  },
  {
    title: "Printer fit",
    items: [
      { label: "Printer", value: "Brand, model and 203 / 300 / 600 DPI" },
      { label: "Roll hardware", value: "Core, maximum outer diameter and unwind direction" },
      { label: "Sensing", value: "Gap, transmissive or black-mark sensor" },
    ],
  },
  {
    title: "Face stock",
    items: [
      { label: "Print method", value: "Direct thermal, no ribbon required" },
      { label: "Coating", value: "Standard or top-coated by friction and moisture exposure" },
      { label: "Compliance", value: "BPA-free standard; phenol-free option on request" },
    ],
  },
  {
    title: "Adhesive",
    items: [
      { label: "Standard", value: "Permanent acrylic for common cartons and mailers" },
      { label: "Difficult surfaces", value: "High-tack for recycled or uneven corrugated board" },
      { label: "Temperature", value: "All-temperature or freezer adhesive for cold workflows" },
    ],
  },
  {
    title: "Supply format",
    items: [
      { label: "Rolls", value: "Labels per roll, rolls per carton and cartons per pallet" },
      { label: "Fanfold", value: "Labels per stack, stacks per carton and stack direction" },
      { label: "Packing", value: "Neutral or private-label carton and pallet marks" },
    ],
  },
  {
    title: "Commercial brief",
    items: [
      { label: "Order", value: "Sample quantity, initial volume and repeat forecast" },
      { label: "Delivery", value: "Destination and EXW, FOB, CIF or DDP term" },
      { label: "Control", value: "Approved SKU, batch reference and peak-season plan" },
    ],
  },
];

const workflowSteps: ShippingLabelWorkflowStep[] = [
  { name: "Send printer and label details", description: "Share the model, size, format, core, diameter, sensing method, surface and expected volume." },
  { name: "Approve sample and packing specification", description: "Confirm print response, feeding, adhesion, label count, carton data and pallet plan." },
  { name: "Verify the first production batch", description: "Check barcode contrast, die-cut position, winding, quantity and batch reference before release." },
  { name: "Reorder by the approved SKU", description: "Reuse the controlled specification and batch reference for stable peak-season replenishment." },
];

const qualityControls = [
  "Barcode contrast and print-density check on the confirmed printer class",
  "Die-cut position, label gap, perforation and sensing-mark verification",
  "Adhesive coat and peel test on the buyer's target parcel surface",
  "Roll tension, winding direction, edge alignment and fanfold stacking check",
  "Core, label count, carton count and pallet-mark verification",
  "Batch reference retained for repeat-order comparison",
];

const faqs: ShippingLabelFaq[] = [
  { question: "What is the standard size for a shipping label?", answer: "The most common parcel format is 4 x 6 inch, approximately 100 x 150 mm. Confirm the exact driver size and printer media width before ordering because some workflows use a true 100 x 150 mm metric die." },
  { question: "Should a 3PL use shipping-label rolls or fanfold labels?", answer: "Use rolls when the printer has the correct spindle and roll capacity. Use fanfold when the station needs a larger continuous supply, has no roll holder or benefits from fewer media changes. The printer path and labels per shift decide the better format." },
  { question: "How do I confirm compatibility with Zebra, Rollo, Munbyn or Dymo?", answer: "Send the exact printer model, DPI, maximum media width, core, outer diameter, sensing method and preferred roll or fanfold format. Compatibility should be approved from those specifications and a print sample, not from brand name alone." },
  { question: "Do direct thermal shipping labels need a ribbon?", answer: "No. Direct thermal face stock darkens under the printer's heat and requires no ink, toner or ribbon. Thermal transfer is better only when the label needs longer image life or resistance to demanding outdoor, chemical or abrasion exposure." },
  { question: "Which adhesive works on cartons and poly mailers?", answer: "Permanent acrylic works for many clean standard surfaces. Recycled corrugated board, rough cartons and low-energy plastics may need high-tack adhesive. Temperature changes or cold storage may require all-temperature or freezer adhesive. Test the real parcel surface before a bulk order." },
  { question: "Why do shipping-label barcodes sometimes fail to scan?", answer: "Common causes include weak thermal coating response, incorrect print density, dirty printheads, barcode scaling, insufficient quiet zones, wrinkling or abrasion. Approve the sample on the production printer and scan the live carrier barcode before release." },
  { question: "How many labels can be supplied per roll or fanfold stack?", answer: "Counts depend on label size, core, maximum roll diameter, printer space and required stack height. Common programs use 250, 500 or 1,000 labels, but high-volume industrial formats should be specified from the installed equipment and labels per shift." },
  { question: "Can I test shipping labels before a pallet order?", answer: "Yes. Provide the printer and application details so the sample uses the intended size, coating, adhesive, core and format. Test feeding, barcode output and adhesion on the real parcel before approving bulk production." },
  { question: "What are the MOQ and lead time for bulk shipping labels?", answer: "Stock specifications can start at lower volumes. Custom construction, packing or private-label programs depend on the approved specification and production quantity. Send the initial order and repeat forecast for an accurate MOQ and lead-time quotation." },
  { question: "How do repeat orders stay consistent?", answer: "The approved specification records face stock, coating, adhesive, die, gap, core, winding, label count, carton data and pallet mark. Reorders reference the same SKU and batch-control record, with the first production batch checked against the approval." },
];
```

After `getSlotImages` resolves inside the page function, build the image-dependent arrays exactly once:

```ts
const formats: ShippingLabelFormat[] = [
  {
    title: "Shipping label rolls",
    bestFor: "Desktop and industrial printers with spindle support",
    description: "Compact, controlled media supply with a core and outer diameter matched to the installed printer.",
    checks: ["1-inch or 3-inch core", "Maximum roll diameter", "Labels per roll", "Unwind direction"],
    image: images["shipping-labels:rolls"],
    imageAlt: "Direct thermal shipping-label rolls for warehouse printers",
  },
  {
    title: "Fanfold shipping labels",
    bestFor: "High-throughput stations and printers without a roll holder",
    description: "Z-fold stacks provide a larger continuous supply and can reduce media changes at busy packing stations.",
    checks: ["Labels per stack", "Fold direction", "Gap and perforation", "Feed path and stack space"],
    image: images["shipping-labels:fanfold"],
    imageAlt: "Fanfold 4x6 shipping labels for high-volume fulfillment",
  },
];

const applications: ShippingLabelApplication[] = [
  { title: "3PL packing stations", description: "Standardize labels across multiple customers and carrier workflows.", decision: "Confirm printer fleet, labels per shift and carton or poly-mailer surfaces.", image: images["shipping-labels:applications"], imageAlt: "3PL packing station using direct thermal shipping labels" },
  { title: "Overseas warehouse replenishment", description: "Hold a repeatable SKU for daily outbound parcels and peak-season demand.", decision: "Confirm pallet quantity, local buffer stock and reorder trigger.", image: images["shipping-labels:packing"], imageAlt: "Overseas warehouse shipping-label replenishment" },
  { title: "Marketplace fulfillment", description: "Print carrier and marketplace labels with stable barcode contrast.", decision: "Confirm driver size, barcode scaling, DPI and live scan result.", image: images["shipping-labels:overview"], imageAlt: "Marketplace fulfillment parcel with 4x6 shipping label" },
  { title: "Courier sorting and consolidation", description: "Keep labels attached and readable through handling and route transfers.", decision: "Confirm parcel surface, friction, moisture and storage temperature.", image: images["shipping-labels:failure-risks"], imageAlt: "Courier parcel sorting with readable shipping labels" },
];
```

- [ ] **Step 3: Build Product, Breadcrumb, FAQ, and HowTo schemas**

Create:

```ts
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Direct Thermal Shipping Labels",
  description: metadata.description,
  url: `${SITE.domain}/products/shipping-labels`,
  brand: { "@type": "Brand", name: "ZhixinPaper" },
  manufacturer: { "@type": "Organization", name: "Xi'an Zhi Xin Paper Co., Ltd." },
  category: "Direct thermal shipping labels",
  additionalProperty: specificationGroups.flatMap((group) =>
    group.items.map((item) => ({ "@type": "PropertyValue", name: `${group.title}: ${item.label}`, value: item.value })),
  ),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up a repeat shipping-label supply program",
  step: workflowSteps.map(({ name, description }, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name,
    text: description,
  })),
};
```

Add the three-item BreadcrumbList with Home, Products, and Shipping Labels.

- [ ] **Step 4: Resolve all images and render the dedicated component**

Call `getSlotImages` with all eight registered slots and their exact defaults from Task 2. Build a printer-model WhatsApp URL that asks for model, size, format, volume, surface, and destination. Render four JSON-LD scripts followed by `ShippingLabelsDetailPage` with every typed prop.

- [ ] **Step 5: Run contract and type checks**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/shipping-labels-page.contract.test.mjs
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' type-check
```

Expected: all contract tests PASS and TypeScript reports zero errors.

- [ ] **Step 6: Commit the route**

```powershell
git add -- src/app/products/shipping-labels/page.tsx
git commit -m "feat: optimize shipping labels for 3PL buyers"
```

### Task 5: Update GEO Reference Content

**Files:**
- Modify: `public/llms.txt`

- [ ] **Step 1: Replace the shipping-label line with the operations-first definition**

```md
- [Shipping labels](https://www.zxpapers.com/products/shipping-labels): bulk 4x6 direct thermal shipping labels for 3PL, overseas warehouse and logistics operations, supplied as rolls or fanfold and specified by printer model, DPI, core, roll diameter, gap, unwind direction, parcel surface and throughput; includes permanent, high-tack and all-temperature adhesive options, carton and pallet packing, batch control, samples and repeat-order SKU management
```

- [ ] **Step 2: Run contract, type check, and diff checks**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/shipping-labels-page.contract.test.mjs
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' type-check
git diff --check
```

Expected: tests and type check PASS; `git diff --check` has no whitespace errors.

- [ ] **Step 3: Commit the GEO reference update**

```powershell
git add -- public/llms.txt
git commit -m "docs: clarify shipping label sourcing facts"
```

### Task 6: Production Build and Static Acceptance

**Files:**
- Verify only; no source change expected.

- [ ] **Step 1: Audit source against the design rules**

Run:

```powershell
$files=@('src/app/products/shipping-labels/page.tsx','src/components/products/ShippingLabelsDetailPage.tsx')
$patterns=@('transition-all','[—–]','rounded-\[2[4-9]px\]','emoji')
foreach($pattern in $patterns){ Select-String -Path $files -Pattern $pattern }
```

Expected: no `transition-all`, visible em/en dashes, oversized card radii, or emoji. Any match is reviewed and corrected before continuing.

- [ ] **Step 2: Run the production build**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' build
```

Expected: Next.js build succeeds and lists `/products/shipping-labels` as a generated route.

- [ ] **Step 3: Confirm only intended files changed**

```powershell
git status --short
git diff --check
```

Expected: no unrelated screenshots, `.playwright-cli`, `output/playwright`, `.superpowers`, or user files are staged.

### Task 7: Restart Preview and Verify in a Real Browser

**Files:**
- Verify only; screenshots remain untracked and must not be staged.

- [ ] **Step 1: Restart the production preview on port 3001**

Use PowerShell to find the listener, confirm it is the repo-owned Next process, stop it, and start the bundled Node runtime:

```powershell
$conn=Get-NetTCPConnection -LocalPort 3001 -State Listen -ErrorAction SilentlyContinue
if($conn){ $conn.OwningProcess | Sort-Object -Unique | ForEach-Object { Stop-Process -Id $_ -Force } }
$node='C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
Start-Process -FilePath $node -ArgumentList @('node_modules/next/dist/bin/next','start','-p','3001') -WorkingDirectory 'E:\website\zxpapers-website-main' -WindowStyle Hidden
```

Expected: `http://localhost:3001/products/shipping-labels` returns 200.

- [ ] **Step 2: Verify desktop at 1440 x 1000**

With Playwright CLI:

1. Open a fresh session and navigate with a cache-busting query.
2. Set viewport to 1440 x 1000.
3. Snapshot before using element references.
4. Confirm one H1, canonical URL, Product/Breadcrumb/FAQ/HowTo JSON-LD, all images complete, no duplicate IDs, and `scrollWidth === clientWidth`.
5. Confirm hero CTAs are visible and do not wrap.
6. Capture `output/playwright/shipping-labels-final-desktop.png`.

Expected: console errors 0, no overlap, no clipped text, and all primary modules visible when scrolled.

- [ ] **Step 3: Verify mobile at 390 x 844**

Repeat in a fresh session at 390 x 844. Confirm all grids collapse to one column, tables scroll only inside their wrappers, the page has no horizontal overflow, CTAs fit, and text does not overlap images. Capture `output/playwright/shipping-labels-final-mobile.png`.

- [ ] **Step 4: Verify inquiry validation**

At mobile size, submit the empty inquiry form. Confirm the first invalid input receives focus and its inline error is announced. Do not submit live customer data.

- [ ] **Step 5: Run Lighthouse and record final metrics**

Run Lighthouse against the local route and save `output/playwright/shipping-labels-lighthouse-final.json`. Record Accessibility, SEO, observed LCP, CLS, and TBT. Accessibility and SEO must not regress below 90; CLS target is below 0.1 and TBT target is below 200 ms.

- [ ] **Step 6: Final repository check**

```powershell
git status --short
git log -6 --oneline
```

Expected: implementation commits are local only, generated screenshots and logs are untracked, and no push has occurred.
