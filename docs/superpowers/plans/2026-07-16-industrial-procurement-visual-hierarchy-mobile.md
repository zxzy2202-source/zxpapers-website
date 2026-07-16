# Industrial Procurement Visual Hierarchy And Mobile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved industrial procurement visual hierarchy and mobile-first inquiry experience to the reusable product detail template.

**Architecture:** Add a server-rendered procurement stage system to `ProductDetailTemplate` and isolate viewport-aware fixed actions in a small `MobileInquiryBar` client component. Keep product configuration, SEO/GEO builders, schemas, shared hero, inquiry form, and image resolution unchanged.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Next Image, Lucide icons, IntersectionObserver, Node built-in tests.

---

## File Map

- Create `src/components/products/templates/MobileInquiryBar.tsx`: mobile fixed Request Quote and WhatsApp actions with RFQ intersection handling.
- Modify `src/components/products/templates/ProductDetailTemplate.tsx`: procurement stage hierarchy, industrial visual system, mobile workflow, FAQ state, and related-product scroller.
- Modify `tests/linerless-product-detail-template.contract.test.mjs`: lock stage markers, client isolation, mobile actions, and responsive visual markers.

### Task 1: Add The Failing Visual Hierarchy Contract

**Files:**

- Modify: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Read the future mobile component in the test**

Add `mobileBar` to the Promise result and read:

```js
read("src/components/products/templates/MobileInquiryBar.tsx")
```

- [ ] **Step 2: Add stage and mobile UI assertions**

```js
for (const [number, label] of [
  ["01", "Product fit"],
  ["02", "Risk control"],
  ["03", "Specification"],
  ["04", "Application"],
  ["05", "Approval route"],
  ["06", "Evidence"],
  ["07", "Request quote"],
  ["08", "Sourcing FAQ"],
  ["09", "Related programs"],
]) {
  assert.match(template, new RegExp(`number=\"${number}\"`));
  assert.match(template, new RegExp(`label=\"${label}\"`, "i"));
}

assert.match(template, /MobileInquiryBar/);
assert.match(template, /data-procurement-stage/);
assert.match(template, /data-risk-marker/);
assert.match(template, /data-workflow-rail/);
assert.match(template, /data-related-scroller/);
assert.match(template, /pb-\[calc\(5rem\+env\(safe-area-inset-bottom\)\)\]/);
assert.doesNotMatch(template, /"use client"/);

assert.match(mobileBar, /^"use client";/);
assert.match(mobileBar, /IntersectionObserver/);
assert.match(mobileBar, /env\(safe-area-inset-bottom\)/);
assert.match(mobileBar, /Request Quote/);
assert.match(mobileBar, /WhatsApp/);
assert.match(mobileBar, /aria-hidden/);
assert.match(mobileBar, /motion-reduce:transition-none/);
```

- [ ] **Step 3: Run focused test and verify RED**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
```

Expected: FAIL with `ENOENT` for `MobileInquiryBar.tsx`.

### Task 2: Implement The Mobile Inquiry Bar

**Files:**

- Create: `src/components/products/templates/MobileInquiryBar.tsx`
- Test: `tests/linerless-product-detail-template.contract.test.mjs`

- [ ] **Step 1: Create the isolated client component**

Implement props:

```ts
interface MobileInquiryBarProps {
  inquiryHref: string;
  whatsappHref: string;
}
```

Use `useEffect`, `useState`, `MessageSquareText`, and `Phone`. Observe `document.querySelector(inquiryHref)` with `IntersectionObserver({ threshold: 0.12 })`. Set hidden state from `entry.isIntersecting`; disconnect on cleanup.

Render a fixed `lg:hidden` bottom bar with:

- `style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}`;
- primary amber internal link to the RFQ;
- secondary navy external WhatsApp link;
- `aria-label="Mobile inquiry actions"`;
- `aria-hidden={hidden}`;
- hidden state `translate-y-full opacity-0 pointer-events-none`;
- visible state `translate-y-0 opacity-100`;
- `transition-[transform,opacity] motion-reduce:transition-none`;
- both controls at least 44 px high.

- [ ] **Step 2: Run focused test and confirm the next missing hierarchy failure**

Run the focused test. Expected: FAIL because the template does not yet import/render `MobileInquiryBar` or stage markers.

### Task 3: Add Procurement Stage Hierarchy

**Files:**

- Modify: `src/components/products/templates/ProductDetailTemplate.tsx`

- [ ] **Step 1: Add `StageIntro`**

Create a server-rendered primitive with `number`, `label`, `title`, `description`, and optional `inverse`. Add `data-procurement-stage={number}`. Desktop uses `sm:grid-cols-[72px_minmax(0,1fr)]`; mobile stacks. Use an amber rule and restrained navy stage label.

- [ ] **Step 2: Replace all nine `SectionIntro` uses**

Use stage numbers/labels defined in the spec. Preserve all titles and descriptions. `Request quote` may render with `inverse` inside the navy panel.

- [ ] **Step 3: Add page bottom reservation and mobile bar**

Set the inner `main` class to:

```tsx
className="pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0"
```

Render:

```tsx
<MobileInquiryBar inquiryHref={config.hero.primaryCta.href} whatsappHref={whatsappHref} />
```

after `main` but inside `Layout`.

### Task 4: Apply Industrial UI Styling

**Files:**

- Modify: `src/components/products/templates/ProductDetailTemplate.tsx`

- [ ] **Step 1: Restyle hero and facts**

Use `min-h-[420px] sm:min-h-[390px] lg:min-h-[370px]` for the hero. Restyle fact icons as a narrow amber indicator block and increase value contrast to graphite/navy without increasing overall height.

- [ ] **Step 2: Restyle procurement overview**

Use a white bordered dossier surface inside the mist band with a top amber/navy rule. Keep product image, checklist, buyer strip, and four capabilities. Improve icon hierarchy and evidence-note contrast; avoid nested cards.

- [ ] **Step 3: Add risk markers and control regions**

For each risk add `data-risk-marker={index + 1}` and visible `R1`-`R6`. Use a pale navy response region and one-column divided rows on mobile, two columns tablet, three desktop.

- [ ] **Step 4: Strengthen specifications and applications**

Add an amber edge to each specification group, darker value typography, and clear mobile stacking. In applications, add compact visible row labels and a stronger navy `Confirm` line.

- [ ] **Step 5: Build responsive workflow rail**

Add `data-workflow-rail`. Mobile uses relative `before` vertical amber rail and left padding; each node has an amber numbered point. Desktop uses existing four-column grid plus a subtle top connecting rail. Respect source order.

- [ ] **Step 6: Strengthen evidence and RFQ sequence**

Use compatible navy/amber accents. Keep evidence semantics separate. Use `StageIntro inverse` in RFQ, keep form layout and all props unchanged.

- [ ] **Step 7: Style FAQ open states and related mobile scroller**

FAQ summaries use minimum 48 px height, `group-open:text-brand-navy`, and amber open indicator. Related wrapper gets `data-related-scroller`, `overflow-x-auto snap-x snap-mandatory`, negative container edge compensation on mobile, and normal three-column grid at `md`. Items use `min-w-[86%] snap-start` on mobile and `md:min-w-0`.

- [ ] **Step 8: Run focused test and TypeScript**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests\linerless-product-detail-template.contract.test.mjs
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' tsc --noEmit
```

Expected: both PASS.

### Task 5: Production Verification And Preview

**Files:**

- No repository files created.

- [ ] **Step 1: Run all contract tests and TypeScript**

Run both contract test files and TypeScript. Expected: zero failures and zero type errors.

- [ ] **Step 2: Run production build**

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd' build
```

Expected: build succeeds and the representative route is generated.

- [ ] **Step 3: Restart port 3002**

Stop only the active listener on 3002 and start `next start --port 3002` from this worktree using bundled Node.

- [ ] **Step 4: Verify server HTML without screenshots**

Confirm HTTP 200, one H1, production canonical, all nine stage markers, mobile inquiry bar markup, risk/workflow/related markers, RFQ before FAQ, and Product/BreadcrumbList/FAQPage JSON-LD.

- [ ] **Step 5: Final tests, diff check, and commit**

Run tests, TypeScript, `git diff --check`, and `git status --short`. Stage only the template, mobile component, focused test, and plan; commit:

```powershell
git commit -m "feat: refine product detail hierarchy and mobile inquiry"
```
