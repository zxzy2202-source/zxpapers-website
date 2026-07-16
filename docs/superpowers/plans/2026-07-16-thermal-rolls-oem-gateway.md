# Thermal Paper Rolls OEM Gateway Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the thermal paper rolls product-line gateway around OEM, private-label, distributor, and print-partner buying tasks while consolidating duplicate custom-roll URLs and separating product intent from cross-product OEM service intent.

**Architecture:** Keep metadata, schemas, image loading, and route-level data in App Router page files. Keep route-specific presentation in focused server components. Drive the migration with a browser contract covering all surviving pages plus the permanent redirect, then update every internal reference to the one canonical custom-roll product URL.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Lucide React, JSON-LD, Playwright CLI, pnpm, bundled Node 24.

---

## File Map

- Create: `output/playwright/thermal-rolls-oem-gateway-acceptance.js` - temporary end-to-end contract for page roles, schema, redirect, content boundaries, RFQ qualification, and responsive layout.
- Modify: `src/app/products/thermal-paper-rolls/page.tsx` - gateway metadata, FAQ schema, and route-level data.
- Modify: `src/components/products/ThermalPaperRollsCatalogPage.tsx` - approved OEM-led gateway layout and content.
- Modify: `src/app/products/thermal-paper-rolls/custom-printed/page.tsx` - canonical custom product metadata, schema data, evidence-bounded copy, and RFQ data.
- Modify: `src/components/products/CustomPrintedThermalRollsCatalogPage.tsx` - canonical custom-roll product presentation.
- Create: `src/components/oem/CustomPrintingServicePage.tsx` - focused cross-product OEM printing service presentation.
- Modify: `src/app/oem/custom-printing/page.tsx` - service metadata, Service/FAQ/Breadcrumb schemas, image loading, and service data.
- Replace: `src/app/products/custom-printed-thermal-rolls/page.tsx` - permanent redirect only.
- Modify: `src/config/navigation.ts` - use the canonical nested custom-roll URL.
- Modify: `src/app/sitemap.ts` - remove the duplicate URL.
- Modify: `src/app/products/page.tsx` - update the remaining duplicate product link.
- Modify: `src/app/products/phenol-free-thermal-paper/page.tsx` - update the custom-roll cross-link and remove the unverified `compliant stock` wording.
- Modify: `src/app/products/custom-printed-thermal-labels/page.tsx` - update the custom-roll cross-link.
- Modify: `public/llms.txt` - describe surviving URLs by unique role.
- Do not modify: `src/components/products/ThermalLabelsCatalogPage.tsx` - preserve the user's unrelated working-tree change.

### Task 1: Define The Failing Multi-Route Browser Contract

**Files:**
- Create: `output/playwright/thermal-rolls-oem-gateway-acceptance.js`

- [ ] **Step 1: Create the acceptance contract**

Create the file with:

```js
async (page) => {
  const viewport = page.viewportSize();
  if (!viewport) throw new Error("Viewport is not configured");

  const origin = "http://127.0.0.1:3001";
  const failures = [];

  const inspectPage = async ({ path, title, h1, required, forbidden, schemaTypes }) => {
    await page.goto(`${origin}${path}`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(250);

    if ((await page.title()) !== title) failures.push(`${path}: unexpected title`);
    const headings = page.locator("main h1");
    if ((await headings.count()) !== 1) failures.push(`${path}: expected one H1`);
    if ((await headings.first().innerText()).trim() !== h1) failures.push(`${path}: unexpected H1`);

    for (const selector of required) {
      if ((await page.locator(selector).count()) === 0) failures.push(`${path}: missing ${selector}`);
    }

    const mainText = await page.locator("main").innerText();
    for (const phrase of forbidden) {
      if (mainText.toLowerCase().includes(phrase.toLowerCase())) {
        failures.push(`${path}: forbidden claim remains: ${phrase}`);
      }
    }

    const schemas = await page.locator('script[type="application/ld+json"]').evaluateAll((nodes) =>
      nodes.flatMap((node) => {
        try {
          const value = JSON.parse(node.textContent || "{}");
          return Array.isArray(value) ? value : [value];
        } catch {
          return [];
        }
      }),
    );
    const types = schemas.map((schema) => schema["@type"]);
    for (const schemaType of schemaTypes) {
      if (!types.includes(schemaType)) failures.push(`${path}: missing ${schemaType} schema`);
    }

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    if (dimensions.scrollWidth > dimensions.clientWidth + 1) {
      failures.push(`${path}: horizontal overflow ${dimensions.scrollWidth} > ${dimensions.clientWidth}`);
    }

    return { path, types, dimensions };
  };

  const gateway = await inspectPage({
    path: "/products/thermal-paper-rolls",
    title: "Thermal Paper Rolls Manufacturer | OEM & Wholesale Supply | ZhixinPaper",
    h1: "Thermal Paper Rolls for OEM, Private Label & Wholesale Supply",
    required: [
      '[data-oem-program="distributor"]',
      '[data-oem-program="private-label"]',
      '[data-oem-program="custom-printed"]',
      '[data-oem-program="print-partner"]',
      "[data-oem-quote-answer]",
      "[data-buyer-problem]",
      "[data-oem-workflow]",
      "[data-evidence-boundary]",
      '#inquiry textarea[name="message"]',
    ],
    forbidden: ["5,000 rolls", "3 to 7 day", "10 to 18 day", "+/- 0.5mm", "5 to 7 years"],
    schemaTypes: ["CollectionPage", "FAQPage", "BreadcrumbList"],
  });

  if ((await page.locator("[data-oem-program]").count()) !== 4) failures.push("gateway: expected four OEM programs");
  if ((await page.locator("[data-buyer-problem]").count()) < 5) failures.push("gateway: expected five buyer problems");
  const gatewayMessage = await page.locator('#inquiry textarea[name="message"]').inputValue();
  for (const field of ["Buyer type / program", "Printer model", "Quantity by SKU", "Document requirement"]) {
    if (!gatewayMessage.includes(field)) failures.push(`gateway RFQ missing ${field}`);
  }

  const custom = await inspectPage({
    path: "/products/thermal-paper-rolls/custom-printed",
    title: "Custom Printed Thermal Paper Rolls | OEM & Private Label | ZhixinPaper",
    h1: "Custom Printed Thermal Paper Rolls for OEM & Private Label Programs",
    required: ["[data-custom-requirements]", "[data-approval-workflow]", "[data-custom-evidence-boundary]", '#inquiry textarea[name="message"]'],
    forbidden: ["from 1,000 rolls", "10–18 business days", "up to 4-color", "bpa-free standard", "free digital proof"],
    schemaTypes: ["Product", "FAQPage", "BreadcrumbList"],
  });

  const service = await inspectPage({
    path: "/oem/custom-printing",
    title: "OEM Printing Services for Thermal Rolls & Labels | ZhixinPaper",
    h1: "OEM Printing Services for Thermal Rolls & Labels",
    required: ['[data-service-product-path="rolls"]', '[data-service-product-path="labels"]', "[data-service-workflow]", "[data-service-evidence-boundary]"],
    forbidden: ["moq 1,000", "free design proof", "10–20 day", "tra / zatca / firs compliant", "±δe 2.0", "no setup fee"],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
  });

  const redirectResponse = await page.request.get(`${origin}/products/custom-printed-thermal-rolls`, { maxRedirects: 0 });
  if (![301, 308].includes(redirectResponse.status())) failures.push(`redirect: unexpected status ${redirectResponse.status()}`);
  const location = redirectResponse.headers().location || "";
  if (!location.endsWith("/products/thermal-paper-rolls/custom-printed")) failures.push(`redirect: unexpected location ${location}`);

  const result = { viewport, gateway, custom, service, redirectStatus: redirectResponse.status(), failures };
  if (failures.length) throw new Error(`${JSON.stringify(result)}\n${failures.join("\n")}`);
  return result;
}
```

- [ ] **Step 2: Run the contract at desktop and verify it fails**

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway open http://127.0.0.1:3001/products/thermal-paper-rolls
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway resize 1440 900
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway run-code --filename output/playwright/thermal-rolls-oem-gateway-acceptance.js
```

Expected: FAIL on the old titles/H1s, missing markers, unsupported claims, and missing permanent redirect.

- [ ] **Step 3: Run the contract at mobile and verify it fails**

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway resize 390 844
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway run-code --filename output/playwright/thermal-rolls-oem-gateway-acceptance.js
```

Expected: FAIL for the same content contract; record whether any existing route also overflows.

### Task 2: Rebuild The OEM-Led Thermal Paper Rolls Gateway

**Files:**
- Modify: `src/app/products/thermal-paper-rolls/page.tsx`
- Modify: `src/components/products/ThermalPaperRollsCatalogPage.tsx`

- [ ] **Step 1: Replace gateway metadata and FAQ data**

Use:

```ts
export const metadata: Metadata = {
  title: "Thermal Paper Rolls Manufacturer | OEM & Wholesale Supply",
  description:
    "Distributors, private-label brands and print partners can review thermal paper rolls by specification, printing, packing and document needs before requesting an OEM quote.",
  keywords:
    "thermal paper rolls manufacturer, thermal paper rolls supplier, OEM thermal paper rolls, private label thermal paper, wholesale receipt rolls, custom printed thermal rolls, thermal paper distributor supply",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls` },
};
```

Replace the FAQ array with these evidence-bounded answers:

```ts
const faqs = [
  {
    q: "How do you choose the right thermal paper roll size?",
    a: "Choose by the printer model and complete media specification, not width alone. Confirm the width, outer diameter or required length, core, paper grade, winding direction and any sensor-mark requirement before ordering.",
  },
  {
    q: "What information is needed for custom printed thermal paper rolls?",
    a: "A custom-print review needs the roll specification, printer model, print side, artwork, colors, repeat, live-print area, language, quantity, packing, destination and any QR, barcode or sensor-mark requirement. MOQ and timing are confirmed after review.",
  },
  {
    q: "Why is sample testing important for terminal paper?",
    a: "Two rolls with the same width can differ in outer diameter, core, winding, paper thickness and feeding behavior. A sample test can confirm loading, feeding, printing, cutting and scanning on the buyer's actual terminal.",
  },
  {
    q: "Can thermal paper rolls use private-label or neutral packing?",
    a: "Private-label, distributor and neutral packing can be reviewed against the roll size, pack quantity, sales channel, labels, destination and shipment configuration. The final packing specification is confirmed before production.",
  },
  {
    q: "Is BPA-free thermal paper the same as phenol-free paper?",
    a: "No. BPA-free addresses BPA, while BPS-free and phenol-free are separate claims. Confirm the exact paper, tested substances, report date, product scope and verification method required for the target market.",
  },
  {
    q: "What documents should an OEM buyer request?",
    a: "Ask for the document name, issuer, report or certificate number, tested product or material, tested substances, issue and expiry dates, batch relationship and verification method. A generic logo or unrelated report is not sufficient.",
  },
];
```

- [ ] **Step 2: Replace unsupported gateway specifications with approved content data**

In `ThermalPaperRollsCatalogPage.tsx`, define these arrays:

```ts
const oemPrograms = [
  { id: "distributor", title: "Distributor Stock Program", text: "Build a multi-size blank-roll range around the required paper, carton configuration, SKU labels, destination and replenishment plan.", href: "/products/thermal-paper-rolls/blank" },
  { id: "private-label", title: "Private-Label Supply", text: "Review branded or neutral cartons, retail or distributor labels, pack quantities and repeat-order references before the packaging specification is approved.", href: "#inquiry" },
  { id: "custom-printed", title: "Custom Printed Rolls", text: "Submit the print side, artwork, colors, repeat, live-print area, language and QR or barcode use for feasibility, proof and sample planning.", href: "/products/thermal-paper-rolls/custom-printed" },
  { id: "print-partner", title: "Converter / Print Partner", text: "Discuss overflow capacity, confidentiality, neutral production, artwork versions, packing references and repeat-order controls for partner programs.", href: "#inquiry" },
];

const buyerProblems = [
  { question: "Will it fit the terminal?", consequence: "Loading, feeding, printing, cutting or sensor failure", response: "Confirm application, printer, full dimensions, core, winding, marks and sample-test scope." },
  { question: "How do I compare quotations?", consequence: "Short-roll disputes and false unit-price comparisons", response: "Quote against width, OD or length, core, paper, pack, quantity and the agreed inspection basis." },
  { question: "Will the artwork and QR work?", consequence: "Wrong copy, overlap, scan failure or print rejection", response: "Review print side, live-print area, repeat, proof, physical sample and scan/printer test where required." },
  { question: "Will repeat orders match?", consequence: "Batch drift, complaints and repeated qualification", response: "Reference the approved specification, packing, master sample, lot and change confirmation." },
  { question: "Will packing survive the route?", consequence: "Moisture, deformation, damaged edges and channel rejection", response: "Review inner protection, carton, pallet, labels, destination and arrival checks." },
];

const productRoutes = [
  { title: "Blank Thermal Paper Rolls", href: "/products/thermal-paper-rolls/blank", text: "Standard and custom-size blank-roll supply." },
  { title: "Custom Printed Thermal Paper Rolls", href: "/products/thermal-paper-rolls/custom-printed", text: "Logo, reverse print, QR, multilingual and private-label programs." },
  { title: "POS Receipt Paper Rolls", href: "/products/receipt-paper-rolls", text: "Receipt and till-roll selection for standard POS workflows." },
  { title: "57mm x 40mm Payment Terminal Rolls", href: "/products/thermal-rolls/57x40mm", text: "Compact-roll route for payment-terminal requirements." },
  { title: "BPA-Free and Phenol-Free Options", href: "/products/phenol-free-thermal-paper", text: "Material and document requirements confirmed by exact paper scope." },
  { title: "Standard Thermal Paper Roll Sizes", href: "#popular-sizes", text: "Compare existing size routes before preparing artwork or packing." },
];

const approvalSteps = [
  "Requirements",
  "Feasibility review",
  "PDF proof",
  "Physical sample when required",
  "Printer or scan test",
  "Approved master specification",
  "Production, inspection and packing",
];

const supplyControls = [
  { title: "Packaging Configuration", text: "Neutral, distributor or private-label options reviewed by route and channel." },
  { title: "Version & IP Control", text: "Artwork version, language, SKU, proof approval and NDA request." },
  { title: "Repeat Supply", text: "Approved specification, packing reference, forecast and change-confirmation process." },
];
```

- [ ] **Step 3: Render the approved gateway sections**

Keep `Layout`, `PageHero`, `InquiryForm`, existing size data, and FAQ disclosures. Replace the old selector, stock/custom split, technical-specification table, and unsupported factory-claim band with this order:

```tsx
<PageHero
  bgImage={heroImage}
  overlayDir="left"
  overlayOpacity={64}
  minHeight="min-h-[360px]"
  compact
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Thermal Paper Rolls" },
  ]}
  title={<>Thermal Paper Rolls for <span className="text-amber-400">OEM, Private Label &amp; Wholesale Supply</span></>}
  subtitle="ZhixinPaper supports blank and custom thermal paper roll programs for distributors, private-label brands, converters and print partners. Each program is reviewed against the application, complete roll specification, artwork, quantity, packing, destination and document requirement before pricing."
  ctas={[
    { label: "Plan an OEM Roll Program", href: "#oem-programs", variant: "primary", icon: <MessageSquare className="h-4 w-4" /> },
    { label: "Send Your Specification", href: "#inquiry", variant: "outline", icon: <ArrowRight className="h-4 w-4" /> },
  ]}
/>

<section id="oem-programs" className="scroll-mt-24 border-b border-slate-200 bg-white">
  <div className="container py-12 lg:py-16">
    <SectionIntro label="OEM programs" title="Choose the program behind the order" description="Start with the commercial program, then confirm the product, artwork, packing and repeat-order specification." />
    <div className="mt-8 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-4">
      {oemPrograms.map((program) => (
        <article key={program.id} data-oem-program={program.id} className="border-b border-r border-slate-300 p-5">
          <h3 className="font-sora text-lg font-semibold text-slate-950">{program.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.text}</p>
          <Link href={program.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">Review this program <ArrowRight className="h-4 w-4" /></Link>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="bg-slate-50" data-oem-quote-answer>
  <div className="container py-12 lg:py-14">
    <SectionIntro label="Specification-based quote" title="What information is needed before an OEM thermal paper roll quote?" description="A quotation should define the application, printer model, width, outer diameter or length, core, paper grade, winding, print side, artwork, colors, repeat, quantity, packing, destination and document requirement. Custom MOQ, proof route and lead time are confirmed after specification and artwork review." />
  </div>
</section>
```

Continue with these exact semantic markers and map structures:

```tsx
<section className="border-y border-slate-200 bg-white">
  <div className="container py-12 lg:py-16">
    <SectionIntro label="Buyer risks" title="Resolve the problems behind an OEM roll order" description="Define the failure risk first, then agree on the specification, approval and inspection response." />
    <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
      {buyerProblems.map((problem) => (
        <article key={problem.question} data-buyer-problem className="grid gap-3 py-5 md:grid-cols-[1fr_1fr_1.4fr] md:gap-6">
          <h3 className="font-sora text-base font-semibold text-slate-950">{problem.question}</h3>
          <p className="text-sm leading-relaxed text-rose-700">{problem.consequence}</p>
          <p className="text-sm leading-relaxed text-slate-600">{problem.response}</p>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="bg-slate-50">
  <div className="container py-12 lg:py-16">
    <SectionIntro label="Product routes" title="Continue with the right roll category" description="Use the product route that matches the application or customization task." />
    <div className="mt-8 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-3">
      {productRoutes.map((route) => (
        <Link key={route.title} href={route.href} className="border-b border-r border-slate-300 bg-white p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
          <h3 className="font-sora text-base font-semibold text-slate-950">{route.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{route.text}</p>
        </Link>
      ))}
    </div>
  </div>
</section>
```

Retain the existing six-size directory immediately after product routes, keep its `id="popular-sizes"`, and render the workflow and control boundary after it:

```tsx
<section className="bg-brand-navy text-white" data-oem-workflow>
  <div className="container py-12 lg:py-16">
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase text-amber-300">Approval route</p>
      <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-white lg:text-[2.5rem]">Move from brief to an approved production reference</h2>
      <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-slate-200 lg:text-lg">The exact proof, sample and test route depends on the specification and project risk.</p>
    </div>
    <ol className="mt-8 grid gap-px overflow-hidden border border-white/20 bg-white/20 sm:grid-cols-2 xl:grid-cols-4">
      {approvalSteps.map((step, index) => (
        <li key={step} className="min-h-28 bg-brand-navy p-5">
          <span className="text-xs font-semibold text-amber-300">{String(index + 1).padStart(2, "0")}</span>
          <p className="mt-3 text-sm font-semibold leading-relaxed">{step}</p>
        </li>
      ))}
    </ol>
  </div>
</section>

<section className="border-b border-slate-200 bg-white" data-evidence-boundary>
  <div className="container py-12 lg:py-16">
    <SectionIntro label="Supply controls" title="Confirm what the program will be controlled against" description="MOQ, timing, paper claims and documents are confirmed only after the exact product, quantity, packing, destination and evidence scope are reviewed." />
    <div className="mt-8 grid border-l border-t border-slate-300 md:grid-cols-3">
      {supplyControls.map((control) => (
        <article key={control.title} className="border-b border-r border-slate-300 p-5">
          <h3 className="font-sora text-base font-semibold text-slate-950">{control.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{control.text}</p>
        </article>
      ))}
    </div>
  </div>
</section>
```

Keep FAQ and RFQ as the final two content sections.

- [ ] **Step 4: Use the exact qualified RFQ message**

```tsx
<InquiryForm
  compact
  productName="OEM Thermal Paper Roll Program"
  initialMessage={`Buyer type / program:
Application and printer model:
Width:
Outer diameter or required length:
Core:
Paper option:
Winding or sensor mark:
Blank or custom printed:
Print side, colors and repeat:
Quantity by SKU:
Packing requirement:
Destination:
Document requirement:
Current problem or sample reference:`}
/>
```

Add visible text beside the form: `Send artwork or current-roll files by email or WhatsApp after submitting this specification.` Do not add upload controls.

- [ ] **Step 5: Run type-check and the gateway portion of the browser contract**

```powershell
$node = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
& $node 'node_modules\typescript\bin\tsc' --noEmit
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway resize 1440 900
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway run-code --filename output/playwright/thermal-rolls-oem-gateway-acceptance.js
```

Expected: TypeScript PASS. Gateway assertions PASS; custom, service, and redirect assertions still fail.

- [ ] **Step 6: Commit the gateway**

```powershell
git add -- src/app/products/thermal-paper-rolls/page.tsx src/components/products/ThermalPaperRollsCatalogPage.tsx
git commit -m "feat: rebuild thermal rolls OEM gateway"
```

### Task 3: Clean And Focus The Canonical Custom-Roll Product Page

**Files:**
- Modify: `src/app/products/thermal-paper-rolls/custom-printed/page.tsx`
- Modify: `src/components/products/CustomPrintedThermalRollsCatalogPage.tsx`

- [ ] **Step 1: Update metadata and schemas**

Use:

```ts
export const metadata: Metadata = {
  title: "Custom Printed Thermal Paper Rolls | OEM & Private Label",
  description:
    "Review custom printed thermal paper rolls by specification, artwork, print side, repeat, QR or barcode use, packing and sample-approval requirements.",
  keywords:
    "custom printed thermal paper rolls, branded receipt rolls, private label thermal rolls, logo printed receipt paper, back printed receipt rolls, OEM thermal paper printing",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
};
```

Keep Product, FAQPage, and BreadcrumbList schemas, but build every Product `additionalProperty` from the new evidence-bounded visible specification rows. Schema text must not contain a value removed from visible content.

- [ ] **Step 2: Replace page data with process-based requirements**

Use these core arrays:

```ts
const printingRequirements = [
  { label: "Roll specification", value: "Width, outer diameter or length, core, paper grade, winding and any sensor mark" },
  { label: "Print side", value: "Thermal side, reverse side or both, subject to feasibility review" },
  { label: "Artwork", value: "Vector artwork preferred; fonts, language, live-print area and repeat must be confirmed" },
  { label: "Colors", value: "Color references and approval method are confirmed during artwork review" },
  { label: "QR / barcode", value: "Code size, position, destination and scanner or app must be included in the test plan" },
  { label: "Proof and sample", value: "Proof route and physical sample requirement are confirmed after feasibility review" },
];

const orderRequirements = [
  { label: "Quantity", value: "Provide quantity by size, artwork version and packing SKU" },
  { label: "Packing", value: "Neutral, distributor or private-label configuration reviewed by channel and destination" },
  { label: "Documents", value: "Material and document requirements confirmed by exact product and scope" },
  { label: "Commercial terms", value: "MOQ, proof, sample, production timing and payment are confirmed after review" },
];

const approvalSteps = [
  { step: "01", title: "Submit the brief", desc: "Send the roll specification, printer, print side, artwork, colors, repeat, live-print area, quantity, packing and destination." },
  { step: "02", title: "Review feasibility", desc: "Confirm printable area, paper, winding, code use, packing and any sample or test requirement." },
  { step: "03", title: "Approve the proof", desc: "Approve copy, language, artwork version, color reference, repeat and orientation." },
  { step: "04", title: "Test when required", desc: "Use a physical sample for printer feeding, cutting, QR or barcode scanning, and environment-specific review." },
  { step: "05", title: "Freeze the master specification", desc: "Record the approved product, artwork, packing and change-confirmation reference before production." },
  { step: "06", title: "Produce, inspect and pack", desc: "Inspect against the approved reference and confirmed shipment configuration." },
];

const projectReviewAreas = [
  { title: "Multilingual Layout", badge: "Copy and version review", items: ["Confirm languages, text ownership and approved copy", "Keep every language version tied to the artwork revision"] },
  { title: "Tax or Fiscal Fields", badge: "Target-market review", items: ["Collect the required text, code, issuer and destination", "Do not claim approval until the exact requirement and evidence are verified"] },
  { title: "QR and Barcode Use", badge: "Position and scan plan", items: ["Confirm code destination, size, contrast, live-print area and scanner or app", "Agree on proof, physical sample and scan-test scope"] },
  { title: "Destination Documents", badge: "Product-scope evidence", items: ["List the required material, report or certificate fields", "Confirm issuer, product scope, date, batch relationship and verification method"] },
];
```

Replace region-specific compliance claims with `projectReviewAreas`. Rename `RegionItem` to `ReviewAreaItem`, rename the `regionalApplications` prop to `projectReviewAreas`, and render the four cards. Each card states that requirements and evidence are confirmed for the target market; none claims regulatory approval.

- [ ] **Step 3: Update the custom product component**

Change the hero to:

```tsx
<PageHero
  bgImage={heroImage}
  overlayDir="left"
  overlayOpacity={66}
  minHeight="min-h-[380px]"
  compact
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
    { label: "Custom Printed" },
  ]}
  title={<>Custom Printed Thermal Paper Rolls for <span className="text-amber-400">OEM &amp; Private Label Programs</span></>}
  subtitle="Review the roll specification, artwork, print side, repeat, QR or barcode use, packing and approval route before custom production is quoted."
  ctas={[
    { label: "Send Printing Requirements", href: "#inquiry", variant: "primary" },
    { label: "Review Approval Steps", href: "#approval-workflow", variant: "outline" },
  ]}
/>
```

Replace numeric `orderFacts` with:

```ts
const orderFacts = [
  { icon: <Package />, label: "Specification", value: "Confirmed before pricing" },
  { icon: <FileCheck2 />, label: "Artwork", value: "Proof and version review" },
  { icon: <Printer />, label: "Testing", value: "Sample when required" },
  { icon: <ShieldCheck />, label: "Repeat orders", value: "Approved master reference" },
];
```

Add `data-custom-requirements` to the combined printing/order requirement section. Add `id="approval-workflow" data-approval-workflow` to the process section. Add this visible claims note immediately before FAQ:

```tsx
<aside data-custom-evidence-boundary className="border-y border-amber-300 bg-amber-50">
  <div className="container py-5 text-sm leading-relaxed text-slate-700">
    MOQ, proof route, physical sample, production timing, material claims and destination documents are confirmed after the roll specification, artwork, quantity, packing and evidence scope are reviewed.
  </div>
</aside>
```

Keep sizes and related products as routing modules, not keyword-heavy specification duplicates.

- [ ] **Step 4: Replace the custom RFQ message**

```tsx
<InquiryForm
  compact
  productName="Custom Printed Thermal Paper Rolls"
  initialMessage={`Roll specification / current sample:
Printer model:
Print side:
Artwork and language:
Colors and repeat:
Live-print area:
QR / barcode use:
Quantity by SKU:
Packing:
Destination:
Document requirement:`}
/>
```

- [ ] **Step 5: Verify and commit the canonical custom page**

```powershell
$node = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
& $node 'node_modules\typescript\bin\tsc' --noEmit
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway run-code --filename output/playwright/thermal-rolls-oem-gateway-acceptance.js
git add -- src/app/products/thermal-paper-rolls/custom-printed/page.tsx src/components/products/CustomPrintedThermalRollsCatalogPage.tsx
git commit -m "feat: focus custom printed thermal rolls page"
```

Expected: type-check PASS. Gateway and custom-page assertions PASS; service and redirect remain failing.

### Task 4: Separate The Cross-Product OEM Printing Service

**Files:**
- Create: `src/components/oem/CustomPrintingServicePage.tsx`
- Modify: `src/app/oem/custom-printing/page.tsx`

- [ ] **Step 1: Rebuild the server page metadata and schemas**

Use:

```ts
export const metadata: Metadata = {
  title: "OEM Printing Services for Thermal Rolls & Labels",
  description:
    "Review OEM printing for thermal rolls and labels through product selection, artwork intake, proof and sample planning, version control, packing and document requirements.",
  alternates: { canonical: `${SITE.domain}/oem/custom-printing` },
};
```

The Service schema uses:

```ts
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OEM Printing Services for Thermal Rolls and Labels",
  provider: { "@id": `${SITE.domain}/#organization` },
  url: `${SITE.domain}/oem/custom-printing`,
  serviceType: "OEM printing and private-label production coordination",
  description:
    "Artwork intake, feasibility review, proof and sample planning, version control, packing coordination and product routing for custom thermal rolls and labels.",
};
```

Use evidence-bounded FAQ answers for required inputs, proof/sample sequence, NDA requests, packing review, and the difference between the service page and product pages.

- [ ] **Step 2: Create the service component interface and data**

```ts
interface ServicePath {
  id: "rolls" | "labels";
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

interface CustomPrintingServicePageProps {
  heroImage: string;
  whatsappHref: string;
  productPaths: ServicePath[];
  steps: ServiceStep[];
  faqs: Array<{ q: string; a: string }>;
}
```

Route data:

```ts
const productPaths = [
  { id: "rolls", title: "Custom Printed Thermal Paper Rolls", description: "Logo, reverse print, QR, multilingual and private-label roll programs reviewed against the complete roll specification.", href: "/products/thermal-paper-rolls/custom-printed", cta: "Review custom roll requirements" },
  { id: "labels", title: "Custom Printed Thermal Labels", description: "Custom thermal label printing reviewed against facestock, adhesive, liner, dimensions, printer and application requirements.", href: "/products/thermal-labels/custom-printed", cta: "Review custom label requirements" },
];

const serviceSteps = [
  { step: "01", title: "Choose the product", description: "Confirm whether the project is a thermal roll, thermal label or a coordinated private-label range." },
  { step: "02", title: "Submit specifications and artwork", description: "Send product dimensions, application, printer, print side, artwork, versions, quantity, packing and destination." },
  { step: "03", title: "Review feasibility", description: "Confirm printable area, material, language, codes, proof route, sample needs and document scope." },
  { step: "04", title: "Approve proof and sample plan", description: "Approve copy, version, orientation and the physical test route required before production." },
  { step: "05", title: "Freeze the production reference", description: "Record the approved artwork, product, packing, NDA request and change-confirmation reference." },
  { step: "06", title: "Coordinate production and repeat supply", description: "Produce and inspect against the approved reference, then use it for packing and repeat-order control." },
];
```

- [ ] **Step 3: Render a quiet service-focused page**

`CustomPrintingServicePage` uses `Layout`, `PageHero`, `InquiryForm`, and full-width bands. Required structure:

```tsx
<PageHero
  bgImage={heroImage}
  overlayDir="left"
  overlayOpacity={66}
  minHeight="min-h-[360px]"
  compact
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "OEM Services", href: "/oem" },
    { label: "Custom Printing" },
  ]}
  title={<>OEM Printing Services for <span className="text-amber-400">Thermal Rolls &amp; Labels</span></>}
  subtitle="Choose the product first, then align artwork, versions, proof and sample requirements, packing and repeat-order controls through one OEM service workflow."
  ctas={[
    { label: "Choose a Product Path", href: "#product-paths", variant: "primary" },
    { label: "Send an OEM Brief", href: "#inquiry", variant: "outline" },
  ]}
/>
```

Follow the hero with this section skeleton. It specifies the stable anchors and acceptance markers while leaving the existing typography primitives in control:

```tsx
<section id="product-paths" className="scroll-mt-24 border-b border-slate-200 bg-white">
  <div className="container py-12 lg:py-16">
    <SectionIntro label="Product first" title="Choose the product path before artwork review" description="Rolls and labels require different specifications, materials and printer checks." />
    <div className="mt-8 grid border-l border-t border-slate-300 md:grid-cols-2">
      {productPaths.map((path) => (
        <article key={path.id} data-service-product-path={path.id} className="border-b border-r border-slate-300 p-6">
          <h2 className="font-sora text-xl font-semibold text-slate-950">{path.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{path.description}</p>
          <Link href={path.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">{path.cta}<ArrowRight className="h-4 w-4" /></Link>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="bg-slate-50" data-service-workflow>
  <div className="container py-12 lg:py-16">
    <SectionIntro label="Service workflow" title="Align product, artwork and approval through one route" description="Each gate produces an agreed input for the next step." />
    <ol className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
      {steps.map((step) => (
        <li key={step.step} className="grid gap-3 py-5 md:grid-cols-[4rem_0.8fr_1.6fr] md:gap-6">
          <span className="text-sm font-semibold text-brand-blue">{step.step}</span>
          <h3 className="font-sora text-base font-semibold text-slate-950">{step.title}</h3>
          <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  </div>
</section>

<section className="border-y border-slate-200 bg-white">
  <div className="container grid gap-px bg-slate-300 py-12 md:grid-cols-3 lg:py-16">
    {[
      ["Version control", "Tie product, language, artwork and packing versions to the approved reference."],
      ["NDA requests", "Confirm confidentiality and neutral-production requirements before files are exchanged."],
      ["Packing control", "Confirm labels, pack quantity, carton reference, destination and repeat-order rules."],
    ].map(([title, text]) => <article key={title} className="bg-white p-5"><h3 className="font-sora font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}
  </div>
</section>

<aside data-service-evidence-boundary className="border-b border-amber-300 bg-amber-50">
  <div className="container py-5 text-sm leading-relaxed text-slate-700">
    Product feasibility, MOQ, proof route, sample requirement, production timing and documents are confirmed for the selected roll or label specification. This service page does not replace product-specific approval.
  </div>
</aside>
```

Then render FAQ and the structured inquiry section. Do not render country compliance cards, certifications, numeric MOQ/lead-time cards, color-tolerance claims, or generic product specification tables.

- [ ] **Step 4: Use the service RFQ message**

```tsx
<InquiryForm
  compact
  productName="OEM Printing Service"
  initialMessage={`Product: thermal rolls / thermal labels
Application and printer:
Product specification:
Artwork and versions:
Print side / colors / repeat:
Quantity by SKU:
Packing and labeling:
Destination:
Document requirement:
NDA requested: yes / no`}
/>
```

- [ ] **Step 5: Verify and commit the service page**

```powershell
$node = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
& $node 'node_modules\typescript\bin\tsc' --noEmit
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway run-code --filename output/playwright/thermal-rolls-oem-gateway-acceptance.js
git add -- src/app/oem/custom-printing/page.tsx src/components/oem/CustomPrintingServicePage.tsx
git commit -m "feat: separate OEM custom printing service"
```

Expected: gateway, custom-product, and service assertions PASS; redirect remains failing.

### Task 5: Migrate The Duplicate URL And Internal References

**Files:**
- Replace: `src/app/products/custom-printed-thermal-rolls/page.tsx`
- Modify: `src/config/navigation.ts`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/products/page.tsx`
- Modify: `src/app/products/phenol-free-thermal-paper/page.tsx`
- Modify: `src/app/products/custom-printed-thermal-labels/page.tsx`
- Modify: `public/llms.txt`

- [ ] **Step 1: Replace the duplicate page with a permanent redirect**

```tsx
import { permanentRedirect } from "next/navigation";

export default function CustomPrintedThermalRollsRedirectPage() {
  permanentRedirect("/products/thermal-paper-rolls/custom-printed");
}
```

Remove metadata, schemas, data arrays, image loading, and the showcase template from this route.

- [ ] **Step 2: Update all known internal references**

Make these exact substitutions:

```text
src/config/navigation.ts
  /products/custom-printed-thermal-rolls
  -> /products/thermal-paper-rolls/custom-printed

src/app/products/page.tsx
  Custom Printed Range href -> /products/thermal-paper-rolls/custom-printed

src/app/products/phenol-free-thermal-paper/page.tsx
  Custom Printed Phenol-Free href -> /products/thermal-paper-rolls/custom-printed
  description -> "Review custom printing against the exact paper, artwork, packing and document requirement."

src/app/products/custom-printed-thermal-labels/page.tsx
  Custom Printed Thermal Rolls href -> /products/thermal-paper-rolls/custom-printed

public/llms.txt
  old absolute URL -> https://www.zxpapers.com/products/thermal-paper-rolls/custom-printed
  description -> "custom roll specification, artwork, proof/sample planning, QR or barcode review, private-label packing and product-specific RFQ"
```

- [ ] **Step 3: Remove the duplicate sitemap slug**

Delete only `"custom-printed-thermal-rolls",` from `productCategoryPages`. Keep `"thermal-paper-rolls/custom-printed",`.

- [ ] **Step 4: Add a static zero-reference check**

Run:

```powershell
$matches = @(Get-ChildItem -Path src,public -Recurse -File -Include '*.ts','*.tsx','*.txt' | Select-String -SimpleMatch '/products/custom-printed-thermal-rolls')
if ($matches.Count -gt 0) {
  $matches | Select-Object Path,LineNumber,Line | Format-Table -Wrap
  throw "Duplicate custom-roll URL still has internal references"
}
```

Expected: zero matches.

- [ ] **Step 5: Run the full contract and commit migration files**

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway resize 1440 900
npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway run-code --filename output/playwright/thermal-rolls-oem-gateway-acceptance.js
git add -- src/app/products/custom-printed-thermal-rolls/page.tsx src/config/navigation.ts src/app/sitemap.ts src/app/products/page.tsx src/app/products/phenol-free-thermal-paper/page.tsx src/app/products/custom-printed-thermal-labels/page.tsx public/llms.txt
git commit -m "fix: consolidate custom thermal roll URLs"
```

Expected: all browser-contract assertions PASS at desktop, including permanent redirect status and location.

### Task 6: Complete Production And Responsive Verification

**Files:**
- Verify all runtime files from Tasks 2-5.
- Keep temporary test and screenshots under `output/playwright/` outside runtime commits.

- [ ] **Step 1: Stop only the project process on port 3001**

```powershell
$allowedRoots = @(
  (Resolve-Path '.').Path,
  'C:\Users\Administrator\.config\superpowers\worktrees\zxpapers-website\products-mega-menu-expansion'
)
$listeners = @(Get-NetTCPConnection -LocalPort 3001 -State Listen -ErrorAction SilentlyContinue)
foreach ($listener in $listeners) {
  $process = Get-CimInstance Win32_Process -Filter "ProcessId = $($listener.OwningProcess)"
  $isAllowed = $false
  foreach ($root in $allowedRoots) {
    if ($process.CommandLine -like "*$root*") { $isAllowed = $true; break }
  }
  if (-not $isAllowed) {
    throw "Port 3001 belongs to an unrelated process: $($process.CommandLine)"
  }
  Stop-Process -Id $listener.OwningProcess -Force
}
```

The allowlist covers only the current feature worktree and the known earlier Products-menu preview worktree. Any other command line stops execution without killing the process.

- [ ] **Step 2: Run type-check and production build with bundled Node 24**

```powershell
$node = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
& $node 'node_modules\typescript\bin\tsc' --noEmit
& $node 'node_modules\next\dist\bin\next' build
```

Expected: both commands PASS with exit code 0.

- [ ] **Step 3: Remove only the verified worktree `.next` and restart dev**

```powershell
$repoPath = (Resolve-Path '.').Path.TrimEnd('\')
$nextPath = (Resolve-Path '.next').Path
if (-not $nextPath.StartsWith("$repoPath\", [StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing to remove path outside the worktree: $nextPath"
}
Remove-Item -LiteralPath $nextPath -Recurse -Force

$node = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$out = Join-Path $env:TEMP 'zxpapers-thermal-oem.out.log'
$err = Join-Path $env:TEMP 'zxpapers-thermal-oem.err.log'
Start-Process -FilePath $node -ArgumentList @('node_modules/next/dist/bin/next','dev','--port','3001') -WorkingDirectory (Get-Location) -RedirectStandardOutput $out -RedirectStandardError $err -WindowStyle Hidden
```

Expected: all three surviving pages return 200, the old route returns a permanent redirect, and the loaded CSS chunk returns 200.

- [ ] **Step 4: Run the full contract at five viewports**

```powershell
$viewports = @(
  @(390,844),
  @(768,1024),
  @(1280,800),
  @(1440,900),
  @(1920,1080)
)
foreach ($viewport in $viewports) {
  npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway resize $viewport[0] $viewport[1]
  npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway run-code --filename output/playwright/thermal-rolls-oem-gateway-acceptance.js
}
```

Expected: every viewport returns zero failures and no horizontal overflow.

- [ ] **Step 5: Capture final screenshots**

For each page, open the page, resize, and save one desktop plus one mobile screenshot:

```powershell
$pages = @(
  @{ slug='gateway'; url='http://127.0.0.1:3001/products/thermal-paper-rolls' },
  @{ slug='custom'; url='http://127.0.0.1:3001/products/thermal-paper-rolls/custom-printed' },
  @{ slug='service'; url='http://127.0.0.1:3001/oem/custom-printing' }
)
foreach ($pageInfo in $pages) {
  npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway goto $pageInfo.url
  npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway resize 1440 900
  npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway screenshot --filename "output/playwright/thermal-oem-$($pageInfo.slug)-desktop.png" --full-page
  npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway resize 390 844
  npx.cmd --yes --package @playwright/cli playwright-cli -s=thermal-oem-gateway screenshot --filename "output/playwright/thermal-oem-$($pageInfo.slug)-mobile.png" --full-page
}
```

Inspect all six screenshots for clipped H1 text, nested-card clutter, broken images, incoherent spacing, form usability, and overlap. Inspect the latest Playwright console log; error-level entries fail verification.

- [ ] **Step 6: Verify the final commit boundaries**

```powershell
git diff --check
git status --short
git log -5 --oneline
```

Expected: runtime files are clean because Tasks 2-5 committed them incrementally. The acceptance script, screenshots, `.playwright-cli` state, and unrelated user files remain outside runtime commits.
