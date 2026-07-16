# Products Mega Menu Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the Products navigation into a four-column desktop directory and a single-open-family mobile accordion so buyers can reach more specific product pages directly.

**Architecture:** Keep product labels and routes in `src/config/navigation.ts`, and keep presentation and interaction state in `src/components/layout/Header.tsx`. Add a temporary browser acceptance contract under `output/playwright/` to drive the change, then verify the final menu at desktop and mobile viewports without touching the unrelated in-progress thermal-label catalog page.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React, Playwright CLI, pnpm, Node 24.

---

## File Map

- Create: `output/playwright/products-menu-expansion-acceptance.js` - temporary browser contract for desktop density, mobile accordion behavior, accessibility attributes, and overflow.
- Modify: `src/config/navigation.ts` - add typed Products utility links while retaining existing product and size groups as the source of truth.
- Modify: `src/components/layout/Header.tsx` - render the approved desktop directory and mobile accordion.
- Do not modify: `src/components/products/ThermalLabelsCatalogPage.tsx` - preserve the user's existing uncommitted work.

### Task 1: Define The Failing Browser Contract

**Files:**
- Create: `output/playwright/products-menu-expansion-acceptance.js`

- [ ] **Step 1: Create the acceptance contract**

Create `output/playwright/products-menu-expansion-acceptance.js` with:

```js
async (page) => {
  const viewport = page.viewportSize();
  if (!viewport) throw new Error("Viewport is not configured");

  await page.goto("http://127.0.0.1:3001/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(300);

  const failures = [];

  if (viewport.width >= 1280) {
    const productsButton = page.getByRole("button", { name: "Products", exact: true });
    await productsButton.click();

    const menu = page.locator('[data-products-menu="true"]:visible');
    if ((await menu.count()) !== 1) failures.push("Desktop Products menu is missing");

    if ((await menu.locator("[data-products-utility]").count()) !== 1) {
      failures.push("Desktop utility bar is missing");
    }
    if ((await menu.locator("[data-product-family]").count()) !== 4) {
      failures.push("Desktop must show four product families");
    }
    if ((await menu.locator("[data-product-child]").count()) < 24) {
      failures.push("Desktop must show at least 24 specific product links");
    }
    if ((await menu.locator("[data-popular-size]").count()) < 8) {
      failures.push("Desktop must show at least eight popular-size links");
    }

    const menuBox = await menu.boundingBox();
    const maximumWidth = Math.min(viewport.width - 32, 1200) + 1;
    if (!menuBox || menuBox.width > maximumWidth) {
      failures.push(`Desktop menu width ${menuBox?.width || 0} exceeds ${maximumWidth}`);
    }
    if (!menuBox || menuBox.height > Math.min(620, viewport.height - 110)) {
      failures.push(`Desktop menu height ${menuBox?.height || 0} exceeds available space`);
    }
  } else {
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
    await page.getByRole("button", { name: "Products", exact: true }).click();

    const menu = page.locator('[data-products-menu="true"]:visible');
    const triggers = menu.locator("[data-mobile-product-trigger]");
    if ((await triggers.count()) !== 4) failures.push("Mobile must show four family triggers");

    const initiallyExpanded = await triggers.evaluateAll((nodes) =>
      nodes.filter((node) => node.getAttribute("aria-expanded") === "true").length,
    );
    if (initiallyExpanded !== 0) failures.push("Mobile families must start collapsed");

    await triggers.nth(0).click();
    if ((await triggers.nth(0).getAttribute("aria-expanded")) !== "true") {
      failures.push("First mobile family did not expand");
    }
    const firstPanelId = await triggers.nth(0).getAttribute("aria-controls");
    if (!firstPanelId) {
      failures.push("Mobile family trigger is missing aria-controls");
    } else {
      const firstPanel = page.locator(`#${firstPanelId}`);
      if ((await firstPanel.locator("[data-mobile-product-link]").count()) !== 5) {
        failures.push("Expanded mobile family must show five product links");
      }
      if ((await firstPanel.locator("[data-mobile-product-view-all]").count()) !== 1) {
        failures.push("Expanded mobile family must show one View All link");
      }
    }

    await triggers.nth(1).click();
    if ((await triggers.nth(0).getAttribute("aria-expanded")) !== "false") {
      failures.push("Opening a second family must collapse the first");
    }
    if ((await triggers.nth(1).getAttribute("aria-expanded")) !== "true") {
      failures.push("Second mobile family did not expand");
    }

    for (const label of ["All Products", "OEM Services", "Get Price List"]) {
      if ((await menu.getByRole("link", { name: label, exact: true }).count()) !== 1) {
        failures.push(`Mobile link is missing: ${label}`);
      }
    }
  }

  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  if (dimensions.scrollWidth > dimensions.clientWidth + 1) {
    failures.push(`Horizontal overflow: ${dimensions.scrollWidth} > ${dimensions.clientWidth}`);
  }

  const result = { viewport, dimensions, failures };
  if (failures.length) throw new Error(`${JSON.stringify(result)}\n${failures.join("\n")}`);
  return result;
}
```

- [ ] **Step 2: Run the desktop contract and verify it fails**

Run:

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion open http://127.0.0.1:3001
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 1440 900
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
```

Expected: FAIL because `[data-products-utility]`, `[data-product-child]`, and `[data-popular-size]` do not yet satisfy the contract.

- [ ] **Step 3: Run the mobile contract and verify it fails**

Run:

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 390 844
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
```

Expected: FAIL because mobile family accordion triggers and single-open behavior are not implemented.

### Task 2: Add Typed Product Utility Links

**Files:**
- Modify: `src/config/navigation.ts:38-49`
- Modify: `src/config/navigation.ts:53-81`

- [ ] **Step 1: Extend the dropdown type**

Add one optional property to `NavDropdown`:

```ts
export interface NavDropdown {
  label: string;
  items: NavItem[];
  featured?: NavItem[];
  productUtilities?: NavItem[];
  productGroups?: NavProductGroup[];
  sizeGroups?: NavSizeGroup[];
  regionGroups?: NavRegionGroup[];
}
```

- [ ] **Step 2: Add only existing routes to the Products configuration**

Insert immediately before `productGroups`:

```ts
productUtilities: [
  { label: "All Products", href: "/products" },
  { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
  { label: "Custom Printing", href: "/oem/custom-printing" },
  { label: "OEM Services", href: "/oem" },
  { label: "Request Pricing", href: "/contact" },
],
```

- [ ] **Step 3: Run TypeScript validation**

Run:

```powershell
& 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'node_modules\typescript\bin\tsc' --noEmit
```

Expected: PASS with exit code 0.

- [ ] **Step 4: Commit the navigation data change**

```powershell
git add -- src/config/navigation.ts
git commit -m "feat: add product menu utility links"
```

### Task 3: Replace The Desktop Products Layout

**Files:**
- Modify: `src/components/layout/Header.tsx:256-520`

- [ ] **Step 1: Increase the Products menu width**

Remove `MessageSquare` from the Lucide import because the approved desktop layout no longer uses the marketing-sidebar icon:

```ts
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Package, Ruler, BadgeCheck } from "lucide-react";
```

Change the Products width branch to:

```ts
hasProductGroups
  ? { width: "min(calc(100vw - 2rem), 1200px)" }
```

- [ ] **Step 2: Replace the Products branch with the approved structure**

Replace the current left marketing panel, two-by-two product grid, and right size rail with this structure:

```tsx
<div className="max-h-[min(620px,calc(100vh-110px))] overflow-y-auto overscroll-contain">
  <div
    data-products-utility
    className="flex items-center justify-between gap-6 bg-brand-navy-alt px-5 py-3 text-white"
  >
    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
      Product Directory
    </span>
    <div className="flex min-w-0 items-center justify-end gap-5">
      {(item as NavDropdown).productUtilities!.map((utility, utilityIndex, utilities) => (
        <Link
          key={utility.href + utility.label}
          href={utility.href}
          role="menuitem"
          className={
            utilityIndex === utilities.length - 1
              ? "inline-flex items-center gap-1 rounded-md bg-amber-500 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              : "text-xs font-semibold text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          }
        >
          {utility.label}
          {utilityIndex === utilities.length - 1 && <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />}
        </Link>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-4 divide-x divide-slate-200">
    {(item as NavDropdown).productGroups!.map((group: NavProductGroup) => (
      <div key={group.groupLabel} data-product-family={group.groupLabel} className="min-w-0 px-4 py-4">
        <Link
          href={group.href}
          role="menuitem"
          className="group flex min-h-11 items-start gap-2.5 border-b-2 border-brand-navy pb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40"
        >
          <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-brand-navy text-white" aria-hidden="true">
            <ProductGroupIcon label={group.groupLabel} />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-navy">
              {group.groupLabel}
            </span>
            <span className="mt-0.5 block text-[10px] text-slate-500">View complete range</span>
          </span>
        </Link>
        <div className="mt-2">
          {group.items.slice(0, 6).map((sub) => (
            <Link
              key={sub.href + sub.label}
              href={sub.href}
              role="menuitem"
              data-product-child
              className="flex min-h-8 items-center gap-1.5 rounded-md px-1 text-[11px] leading-snug text-slate-600 hover:bg-slate-50 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40"
            >
              <span className="text-amber-500" aria-hidden="true">›</span>
              <span className="break-words">{sub.label}</span>
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>

  {hasSizeGroups && (
    <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3">
      <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        Popular Sizes
      </span>
      {(item as NavDropdown).sizeGroups!.flatMap((group) => group.items.slice(0, 2)).map((size) => (
        <Link
          key={size.href + size.label}
          href={size.href}
          role="menuitem"
          data-popular-size
          className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700 hover:border-brand-navy/30 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40"
        >
          {size.label}
        </Link>
      ))}
    </div>
  )}
</div>
```

- [ ] **Step 3: Run the desktop browser contract**

Run:

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 1440 900
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
```

Expected: desktop checks PASS; mobile checks remain unimplemented.

- [ ] **Step 4: Commit the desktop menu change**

```powershell
git add -- src/components/layout/Header.tsx
git commit -m "feat: expand desktop products menu"
```

### Task 4: Implement The Mobile Product Accordion

**Files:**
- Modify: `src/components/layout/Header.tsx:75-157`
- Modify: `src/components/layout/Header.tsx:665-755`

- [ ] **Step 1: Add single-open-family state and reset behavior**

Add state beside `activeDropdown`:

```ts
const [activeMobileProductGroup, setActiveMobileProductGroup] = useState<string | null>(null);
```

Reset it in the pathname effect:

```ts
useEffect(() => {
  setMobileOpen(false);
  setActiveDropdown(null);
  setActiveMobileProductGroup(null);
  cancelDropdownClose();
}, [pathname]);
```

Update the mobile top-level dropdown click handler:

```tsx
onClick={() => {
  const nextDropdown = activeDropdown === item.label ? null : item.label;
  setActiveDropdown(nextDropdown);
  setActiveMobileProductGroup(null);
}}
```

- [ ] **Step 2: Replace mobile product-family cards with accordion triggers**

Replace the current mobile `productGroups` map with:

```tsx
{(item as NavDropdown).productGroups!.map((group: NavProductGroup, groupIndex) => {
  const isExpanded = activeMobileProductGroup === group.groupLabel;
  const panelId = `mobile-product-family-${groupIndex}`;

  return (
    <div key={group.groupLabel} data-product-family={group.groupLabel} className="border-t border-slate-200">
      <button
        type="button"
        data-mobile-product-trigger
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={() => setActiveMobileProductGroup(isExpanded ? null : group.groupLabel)}
        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-3 text-left text-sm font-semibold text-slate-900 [touch-action:manipulation] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40"
      >
        <span>{group.groupLabel}</span>
        <span className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
          {group.items.length} products
          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </span>
      </button>

      {isExpanded && (
        <div id={panelId} className="bg-slate-50 px-3 pb-2">
          {group.items.slice(0, 5).map((sub) => (
            <Link
              key={sub.href + sub.label}
              href={sub.href}
              data-mobile-product-link
              className="flex min-h-10 items-center gap-2 border-t border-slate-200 text-sm text-slate-600 hover:text-brand-navy [touch-action:manipulation] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40"
            >
              <span className="text-amber-500" aria-hidden="true">›</span>
              {sub.label}
            </Link>
          ))}
          <Link
            href={group.href}
            data-mobile-product-view-all
            className="flex min-h-10 items-center gap-1 border-t border-slate-200 text-xs font-semibold text-brand-navy [touch-action:manipulation] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40"
          >
            View all {group.groupLabel}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
})}
```

- [ ] **Step 3: Run the mobile browser contract**

Run:

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 390 844
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
```

Expected: PASS with zero failures, five product links in the expanded group, and only one expanded family.

- [ ] **Step 4: Commit the mobile interaction change**

```powershell
git add -- src/components/layout/Header.tsx
git commit -m "feat: add mobile product family accordion"
```

### Task 5: Verify The Complete Menu

**Files:**
- Verify: `src/config/navigation.ts`
- Verify: `src/components/layout/Header.tsx`
- Verify: `output/playwright/products-menu-expansion-acceptance.js`

- [ ] **Step 1: Stop the live port-3001 dev process before build**

Run:

```powershell
$listeners = @(Get-NetTCPConnection -LocalPort 3001 -State Listen -ErrorAction SilentlyContinue)
foreach ($listener in $listeners) {
  $process = Get-CimInstance Win32_Process -Filter "ProcessId = $($listener.OwningProcess)"
  if ($process.CommandLine -notlike '*zxpapers-website-main*') {
    throw "Port 3001 belongs to an unrelated process: $($process.CommandLine)"
  }
  Stop-Process -Id $listener.OwningProcess -Force
}
```

Expected: no listener remains on port 3001.

- [ ] **Step 2: Run type-check and production build with bundled Node 24**

Run:

```powershell
$node = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
& $node 'node_modules\typescript\bin\tsc' --noEmit
& $node 'node_modules\next\dist\bin\next' build
```

Expected: both commands PASS with exit code 0. If an error points only to the user's existing `ThermalLabelsCatalogPage.tsx` work, report it without altering that file.

- [ ] **Step 3: Restart dev cleanly with Node 24**

Run:

```powershell
$repoPath = (Resolve-Path '.').Path.TrimEnd('\')
$nextPath = (Resolve-Path '.next').Path
if (-not $nextPath.StartsWith("$repoPath\", [StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing to remove path outside the repository: $nextPath"
}
Remove-Item -LiteralPath $nextPath -Recurse -Force
$node = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$out = Join-Path $env:TEMP 'zxpapers-products-menu.out.log'
$err = Join-Path $env:TEMP 'zxpapers-products-menu.err.log'
Start-Process -FilePath $node -ArgumentList @('node_modules/next/dist/bin/next','dev','--port','3001') -WorkingDirectory (Get-Location) -RedirectStandardOutput $out -RedirectStandardError $err -WindowStyle Hidden
```

Expected: `http://127.0.0.1:3001/` returns 200 and the loaded CSS chunk returns 200.

- [ ] **Step 4: Run the acceptance contract at four viewports**

Run the contract after each resize:

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 1280 800
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 1440 900
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 1920 1080
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 390 844
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion run-code --filename output/playwright/products-menu-expansion-acceptance.js
```

Expected: all four runs PASS with no overflow or missing navigation controls.

- [ ] **Step 5: Capture final screenshots and inspect the browser console**

Run:

```powershell
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 1440 900
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion screenshot --filename output/playwright/products-menu-expansion-desktop.png
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion resize 390 844
npx.cmd --yes --package @playwright/cli playwright-cli -s=products-menu-expansion screenshot --filename output/playwright/products-menu-expansion-mobile.png
```

Expected: the desktop screenshot shows all four columns and the size strip; the mobile screenshot shows one expanded family with no overlapping text. The latest console log contains no error-level entries.

- [ ] **Step 6: Review the final source state and commit boundaries**

Run:

```powershell
git diff --check -- src/config/navigation.ts src/components/layout/Header.tsx
git diff -- src/config/navigation.ts src/components/layout/Header.tsx
git status --short
git log -3 --oneline -- src/config/navigation.ts src/components/layout/Header.tsx
```

Expected: the runtime source files are clean because Tasks 2-4 committed them incrementally. Screenshots, `.playwright-cli` state, the temporary acceptance script, and unrelated working-tree files remain outside those commits.
