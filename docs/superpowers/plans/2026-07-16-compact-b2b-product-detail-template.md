# Compact B2B Product Detail Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Compress the reusable product detail page into a faster-scanning B2B procurement layout while preserving all approved content, SEO/GEO data, and inquiry qualification.

**Architecture:** Recompose `ProductDetailTemplate` without changing its public props or the product config. Merge direct-answer and supply-program rendering into one overview, replace repeated image-led sidebars with full-width compact grids, move RFQ before FAQ, and keep server rendering and existing structured-data builders unchanged.

**Tech Stack:** Next.js 15 App Router, React 19 server components, TypeScript, Tailwind CSS, Next Image, Lucide icons, Node built-in tests.

---

## File Map

- Modify `tests/linerless-product-detail-template.contract.test.mjs`: enforce compact module composition and source order.
- Modify `src/components/products/templates/ProductDetailTemplate.tsx`: implement the complete compact layout.

No config, route, image-slot, metadata, schema, form, or global-layout file changes are required.

### Task 1: Add The Failing Compact Layout Contract

**Files:**

- Modify: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Replace visible context-image assertions with compact-layout assertions**

Remove assertions for `data-context-image`, `marker="risk"`, `marker="specification"`, `marker="workflow"`, and `marker="faq"`. Keep the slot registration and route-resolution assertions because the data remains valid.

Add:

```js
assert.match(template, /data-product-detail-section="procurement-overview"/);
assert.doesNotMatch(template, /data-context-image/);
assert.match(template, /lg:grid-cols-3/);
assert.match(template, /data-compact-specifications/);
assert.match(template, /lg:grid-cols-4/);
assert.match(template, /data-faq-columns/);
assert.match(template, /aspect-\[16\/9\]/);

const inquiryIndex = template.indexOf('data-product-detail-section="inquiry"');
const faqIndex = template.indexOf('data-product-detail-section="faq"');
assert.ok(inquiryIndex > -1 && faqIndex > -1 && inquiryIndex < faqIndex);
```

- [ ] **Step 2: Run focused test and verify RED**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
```

Expected: FAIL because the template still renders visible context images, separate direct-answer/supply sections, and RFQ after FAQ.

### Task 2: Add Compact Shared Primitives

**Files:**

- Modify: `src/components/products/templates/ProductDetailTemplate.tsx`

- [ ] **Step 1: Reduce `SectionIntro` typography**

Use this heading and copy scale:

```tsx
<h2 className="mt-2 text-pretty font-sora text-2xl font-semibold leading-tight text-slate-950 lg:text-[2rem]">
  {title}
</h2>
<p className="mt-3 max-w-[70ch] text-pretty text-sm leading-relaxed text-slate-600 lg:text-base">
  {description}
</p>
```

- [ ] **Step 2: Remove `ContextImage`**

Delete the helper and every invocation. Do not remove image fields from config/types/route.

- [ ] **Step 3: Add a compact section shell convention**

Use `py-9 lg:py-12` for standard sections, `gap-7 lg:gap-10` for split sections, and `mt-6` for primary content following a section intro. Keep full-width white/slate bands and thin borders.

### Task 3: Recompose The Main Procurement Modules

**Files:**

- Modify: `src/components/products/templates/ProductDetailTemplate.tsx`

- [ ] **Step 1: Compress hero and facts**

Change hero `minHeight` to `min-h-[370px]`. Use `py-3` on the fact-strip container and `min-h-20 p-3 sm:p-4` on each fact.

- [ ] **Step 2: Merge direct answer and supply program**

Replace both existing sections with one `data-product-detail-section="procurement-overview"` slate band. Render the application image and direct answer in a compact desktop split. Below that render buyers in a four-column bordered strip and supply items in a two-column or four-column compact grid with no `min-h-56`. Preserve every config string and the supply note.

- [ ] **Step 3: Make risks full-width and compact**

Place `SectionIntro` above a `sm:grid-cols-2 lg:grid-cols-3` grid. Remove `min-h-64`, use `p-4 lg:p-5`, and keep question, consequence, and response.

- [ ] **Step 4: Convert specifications to horizontal rows**

Place `SectionIntro` above all groups. Add `data-compact-specifications` to the group container. For each row use:

```tsx
<div className="grid gap-1 border-b border-slate-200 px-4 py-3 odd:bg-white even:bg-slate-50 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-5">
```

Render label in the first column and value/note in the second.

- [ ] **Step 5: Compact applications and evidence**

Keep their images, but use `aspect-[16/10] lg:aspect-auto lg:min-h-72` rather than stretching to the entire content height. Use the standard compact section padding and smaller internal gaps.

- [ ] **Step 6: Convert workflow to a responsive ordered grid**

Place `SectionIntro` above one `ol` marked with `grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4`. Each `li` uses a white background and compact padding. Preserve source order and all seven steps.

### Task 4: Move Conversion Earlier And Compact Supporting Content

**Files:**

- Modify: `src/components/products/templates/ProductDetailTemplate.tsx`

- [ ] **Step 1: Move RFQ after evidence**

Move the complete inquiry section before FAQ. Reduce navy/white panel padding from `p-8 lg:p-10` and `p-7 lg:p-9` to `p-6 lg:p-8`. Reduce RFQ H2 to `text-2xl lg:text-3xl`. Keep form props and WhatsApp unchanged.

- [ ] **Step 2: Convert FAQ to two columns**

Place one full-width `SectionIntro` above questions. Remove the visible text-link nav and context image. Add `data-faq-columns` to a `grid gap-x-8 lg:grid-cols-2` wrapper. Render all native `details` closed in original source order, using a top border per column item and no sticky sidebar.

- [ ] **Step 3: Compress related products**

Use `aspect-[16/9]`, `p-4 lg:p-5`, smaller description gaps, and keep a three-column desktop grid. Preserve titles, buyer-fit copy, images, internal links, and focus styles.

- [ ] **Step 4: Run focused test and TypeScript**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' tsc --noEmit
```

Expected: both PASS.

### Task 5: Build And Update Direct Preview

**Files:**

- No repository files created.

- [ ] **Step 1: Run all contract tests**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\shipping-labels-page.contract.test.mjs tests\linerless-product-detail-template.contract.test.mjs
```

Expected: zero failures.

- [ ] **Step 2: Run production build**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' build
```

Expected: build passes and the representative linerless route is generated.

- [ ] **Step 3: Restart port 3002**

Stop only the current listener on port 3002 and start `next start --port 3002` from this isolated worktree using bundled Node.

- [ ] **Step 4: Verify HTML without screenshots**

Confirm HTTP 200, one H1, production canonical, procurement overview, risk/spec/workflow/FAQ compact markers, RFQ source order before FAQ, 16:9 related products, and Product/BreadcrumbList/FAQPage JSON-LD. Confirm no context-image markers are present.

- [ ] **Step 5: Final verification and commit**

Run tests, TypeScript, `git diff --check`, and `git status --short` again. Stage only the template, focused test, and plan, then commit:

```powershell
git commit -m "feat: compact B2B product detail template"
```
