# Linerless B2B Procurement Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the 3 1/8 x 263' linerless-label detail page into a procurement-led B2B page for OEM, private-label, bulk, and repeat-order programs.

**Architecture:** Extend the existing typed `ProductDetailConfig` with one reusable `supplyProgram` module. Render it in the server-side `ProductDetailTemplate`, and keep metadata, visible content, FAQ schema, and RFQ prompts sourced from the same product config.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, Lucide icons, Node built-in tests.

---

## File Map

- Modify `tests/linerless-product-detail-template.contract.test.mjs`: enforce the B2B positioning and reusable supply-program contract.
- Modify `src/components/products/templates/product-detail-types.ts`: define the serializable B2B supply-program shape.
- Modify `src/components/products/templates/ProductDetailTemplate.tsx`: render the reusable B2B supply band.
- Modify `src/config/product-pages/linerless-3-1-8-x-263.ts`: provide product-specific B2B metadata, buyer profiles, OEM review options, FAQ, workflow, and RFQ inputs.
- Modify `public/llms.txt`: align the AI-readable page description with OEM and bulk-supply intent.

### Task 1: Add The Failing B2B Page Contract

**Files:**

- Modify: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Add precise B2B assertions**

Append these assertions inside the existing test after the destination assertion:

```js
assert.match(config, /Linerless Labels Manufacturer \| OEM/);
assert.match(config, /OEM & Bulk Supply/);
assert.match(config, /supplyProgram/);
assert.match(config, /distributors|importers|private-label/i);
assert.match(config, /Request a B2B Quote/);
assert.match(config, /minimum order|MOQ/i);
assert.match(config, /requested delivery window/i);
assert.match(template, /data-product-detail-section="supply-program"/);
assert.match(template, /config\.supplyProgram/);
assert.match(llms, /OEM|private-label|bulk supply/i);
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
```

Expected: FAIL because the config and template do not yet contain `supplyProgram` or the approved B2B copy.

### Task 2: Add The Typed Reusable Supply Program

**Files:**

- Modify: `src/components/products/templates/product-detail-types.ts`
- Modify: `src/components/products/templates/ProductDetailTemplate.tsx`
- Test: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Define the serializable supply-program types**

Add before `ProductDetailConfig`:

```ts
export interface ProductSupplyProgramItem {
  title: string;
  description: string;
  buyerValue: string;
}

export interface ProductSupplyProgram {
  label: string;
  title: string;
  description: string;
  buyers: string[];
  items: ProductSupplyProgramItem[];
  note: string;
}
```

Add this required field after `directAnswer` in `ProductDetailConfig`:

```ts
supplyProgram: ProductSupplyProgram;
```

- [ ] **Step 2: Render the B2B band after the direct answer**

Import `BriefcaseBusiness` and `Building2` directly from `lucide-react`. Add this section between the direct-answer and risks sections:

```tsx
<section
  className="border-y border-slate-200 bg-white"
  data-product-detail-section="supply-program"
>
  <div className="container py-12 lg:py-16">
    <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.58fr)_minmax(0,1.42fr)] lg:gap-16">
      <div>
        <SectionIntro
          label={config.supplyProgram.label}
          title={config.supplyProgram.title}
          description={config.supplyProgram.description}
        />
        <div className="mt-7 border-t border-slate-300">
          {config.supplyProgram.buyers.map((buyer) => (
            <p key={buyer} className="flex gap-3 border-b border-slate-200 py-3 text-sm text-slate-700">
              <Building2 className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
              {buyer}
            </p>
          ))}
        </div>
      </div>
      <div className="border-l border-t border-slate-300 sm:grid sm:grid-cols-2">
        {config.supplyProgram.items.map((item) => (
          <article key={item.title} className="flex min-h-56 flex-col border-b border-r border-slate-300 p-5 sm:p-6">
            <BriefcaseBusiness className="h-5 w-5 text-amber-700" aria-hidden="true" />
            <h3 className="mt-4 font-sora text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            <p className="mt-auto border-t border-slate-200 pt-4 text-xs font-semibold leading-relaxed text-brand-navy">
              Buyer value: {item.buyerValue}
            </p>
          </article>
        ))}
        <p className="border-b border-r border-slate-300 p-5 text-xs leading-relaxed text-slate-500 sm:col-span-2 sm:p-6">
          {config.supplyProgram.note}
        </p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Run TypeScript and confirm the expected config error**

Run:

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' tsc --noEmit
```

Expected: FAIL because the linerless config is now missing the required `supplyProgram` property. This confirms the type contract is active.

### Task 3: Rewrite The Product Config For B2B Procurement

**Files:**

- Modify: `src/config/product-pages/linerless-3-1-8-x-263.ts`
- Modify: `public/llms.txt`
- Test: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Replace metadata and hero positioning**

Use these values:

```ts
metadata: {
  title: "3 1/8 x 263' Linerless Labels Manufacturer | OEM",
  description:
    "Source 3 1/8 x 263' linerless labels for OEM and bulk supply. Review printer fit, adhesive, samples, private-label packing and repeat-order specifications.",
  keywords: [
    "3 1/8 x 263 linerless labels",
    "linerless labels manufacturer",
    "OEM linerless labels",
    "private label linerless rolls",
    "80mm linerless label bulk supply",
    "linerless labels for distributors",
  ],
},
hero: {
  badge: "OEM & Bulk Supply | 80 mm x 80 m",
  title: "3 1/8 x 263' Linerless Labels for OEM & Bulk Supply",
  highlight: "OEM & Bulk Supply",
  description:
    "For distributors, importers, private-label brands and multi-site procurement teams. We review the linerless-ready printer, adhesive application, roll construction, samples, branding, packing, quantity and destination before quotation.",
  primaryCta: { label: "Request a B2B Quote", href: "#inquiry" },
  secondaryCta: { label: "Request Samples", href: "#inquiry" },
},
```

- [ ] **Step 2: Replace the four decision facts**

```ts
facts: [
  { icon: "approval", label: "Best-fit buyers", value: "Distributors, importers, private labels and multi-site procurement" },
  { icon: "roll", label: "OEM review", value: "Adhesive, core, print, roll labels, cartons and pallet marks" },
  { icon: "printer", label: "Qualification", value: "Printer, feed, cut, print, scan and application sample review" },
  { icon: "adhesive", label: "Order control", value: "Approved master specification for bulk and repeat orders" },
],
```

- [ ] **Step 3: Add the product-specific supply program**

Place this after `directAnswer`:

```ts
supplyProgram: {
  label: "B2B supply program",
  title: "Build an approved roll specification before the bulk order",
  description:
    "The supply program connects the printer and application requirements with branding, packing, logistics and repeat-order controls. Each option is confirmed against the final specification.",
  buyers: [
    "Distributors and importers building a local linerless-label range",
    "Private-label brands requiring roll, carton or pallet identification",
    "Restaurant and retail groups standardizing media across locations",
    "Procurement teams replacing a roll or qualifying a second source",
  ],
  items: [
    {
      title: "Roll and adhesive review",
      description: "Confirm width, length basis, core, outer diameter, winding, cutter and removable, semi-permanent or permanent behavior.",
      buyerValue: "Reduces printer-fit and application failures before scale-up.",
    },
    {
      title: "OEM and private-label packing",
      description: "Review roll labels, inner packs, cartons, carton quantities, artwork versions, pallet marks and destination labels.",
      buyerValue: "Creates a channel-ready packing specification for each SKU.",
    },
    {
      title: "Sample and approval route",
      description: "Define feed, cut, print, scan, adhesion and removal checks using the intended printer and application surface.",
      buyerValue: "Gives procurement and operations a shared approval record.",
    },
    {
      title: "Bulk and repeat-order control",
      description: "Freeze the approved material, adhesive, dimensions, artwork, packing and change-confirmation reference.",
      buyerValue: "Makes repeat orders easier to compare and investigate.",
    },
  ],
  note: "Minimum order, sample scope, production timing, packing options and documentation are confirmed after the final roll specification, quantity, artwork and destination are reviewed.",
},
```

- [ ] **Step 4: Extend workflow, FAQ, and RFQ commercial inputs**

Use a seven-step workflow: receive RFQ, review application, freeze roll specification, review OEM packing, test samples, approve bulk order, record repeat-order reference. Add FAQ entries that answer how minimum order is confirmed and how sample/production timing is confirmed without publishing fixed promises.

Add these lines to `inquiry.initialMessage`:

```text
Company and buyer type (distributor / importer / brand / end user):
OEM roll label, carton or pallet artwork:
Estimated order quantity by version:
Requested delivery window:
```

- [ ] **Step 5: Align the AI-readable product description**

Replace the detail-page line in `public/llms.txt` with:

```text
- [3 1/8 x 263' Linerless Labels](https://www.zxpapers.com/products/linerless-labels/3-1-8-x-263): OEM and bulk-supply page for distributors, importers, private-label brands and procurement teams, covering printer fit, adhesive selection, samples, custom packing and repeat-order specifications
```

- [ ] **Step 6: Run focused test and TypeScript**

Run:

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' tsc --noEmit
```

Expected: both PASS.

### Task 4: Production Verification And Direct Preview

**Files:**

- No repository files created.

- [ ] **Step 1: Run all contract tests**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\shipping-labels-page.contract.test.mjs tests\linerless-product-detail-template.contract.test.mjs
```

Expected: six or more tests pass with zero failures.

- [ ] **Step 2: Run the production build**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' build
```

Expected: build passes and `/products/linerless-labels/3-1-8-x-263` appears in the route list.

- [ ] **Step 3: Restart the production preview on port 3002**

Stop only the process listening on port 3002. Start the built app with bundled Node and `node_modules/next/dist/bin/next start --port 3002` in the isolated worktree.

- [ ] **Step 4: Verify the rendered route without screenshots**

Request `http://localhost:3002/products/linerless-labels/3-1-8-x-263` and assert:

- HTTP 200;
- title contains `Linerless Labels Manufacturer | OEM`;
- one H1 contains `OEM & Bulk Supply`;
- canonical is the production URL;
- visible page contains `B2B supply program`, `Request a B2B Quote`, and `Requested delivery window`;
- Product, BreadcrumbList, and FAQPage JSON-LD are present;
- no Product Offer, price, rating, or review fields are present.

- [ ] **Step 5: Review the workspace**

```powershell
git diff --check
git status --short
```

Expected: only the intended product-template, config, test, sitemap, image-slot, `llms.txt`, spec, and plan files are changed; no screenshots or temporary browser scripts exist in the worktree.
