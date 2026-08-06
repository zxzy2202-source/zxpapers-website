import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("Products navigation exposes the four canonical product families", async () => {
  const navigation = await read("src/config/navigation.ts");
  const productGroups = navigation.slice(
    navigation.indexOf("productGroups: ["),
    navigation.indexOf("sizeGroups: ["),
  );

  const familyLabels = [...productGroups.matchAll(/groupLabel: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(familyLabels, [
    "Thermal Paper Rolls",
    "Thermal Labels",
    "Printed & Packaging Labels",
    "NCR & Business Forms",
  ]);
  assert.match(productGroups, /groupLabel: "Thermal Paper Rolls"[\s\S]*href: "\/products\/thermal-paper-rolls"/);
  assert.match(productGroups, /groupLabel: "NCR & Business Forms"[\s\S]*href: "\/products\/ncr-forms"/);
});

test("Packaging labels have their own family and are not owned by Thermal Labels", async () => {
  const navigation = await read("src/config/navigation.ts");
  const thermalLabels = navigation.slice(
    navigation.indexOf('groupLabel: "Thermal Labels"'),
    navigation.indexOf('groupLabel: "Printed & Packaging Labels"'),
  );
  const packagingLabels = navigation.slice(
    navigation.indexOf('groupLabel: "Printed & Packaging Labels"'),
    navigation.indexOf('groupLabel: "NCR & Business Forms"'),
  );

  assert.doesNotMatch(thermalLabels, /\/products\/product-labels/);
  assert.match(packagingLabels, /href: "\/products\/product-labels"/);
  assert.match(packagingLabels, /href: "\/products\/can-labels"/);
  assert.match(packagingLabels, /href: "\/products\/detergent-labels"/);
});

test("Products catalog renders four families and keeps paper owners distinct", async () => {
  const [page, component] = await Promise.all([
    read("src/app/products/page.tsx"),
    read("src/components/products/ProductsCatalogPage.tsx"),
  ]);

  const familyIds = [...page.matchAll(/^[ ]{6}id: "([^"]+)",$/gm)].map((match) => match[1]);
  assert.deepEqual(familyIds, ["thermal-rolls", "thermal-labels", "packaging-labels", "ncr-forms"]);
  assert.match(page, /id: "thermal-rolls"[\s\S]*href: "\/products\/thermal-paper-rolls"/);
  assert.match(page, /id: "ncr-forms"[\s\S]*href: "\/products\/ncr-forms"/);
  assert.doesNotMatch(component, /"can-labels" \| "bottle-labels"/);
});

test("global navigation starts with Home and keeps Contact in the quote CTA", async () => {
  const [navigation, header] = await Promise.all([
    read("src/config/navigation.ts"),
    read("src/components/layout/Header.tsx"),
  ]);
  const mainNav = navigation.slice(
    navigation.indexOf("export const mainNav"),
    navigation.indexOf("/** A product size"),
  ).replaceAll("\r\n", "\n");
  assert.match(
    mainNav,
    /export const mainNav:[\s\S]*?\{ label: "Home", href: "\/" \},\n  \{\n    label: "Products",[\s\S]*?\n  \{\n    label: "OEM & Custom",[\s\S]*?\n  \{ label: "Manufacturing", href: "\/manufacturing" \},\n  \{ label: "Resources", href: "\/resources" \},\n  \{\n    label: "Markets",[\s\S]*?\n  \{ label: "About Us", href: "\/about" \},/,
  );
  assert.equal((mainNav.match(/label: "Home"/g) ?? []).length, 1);
  assert.doesNotMatch(mainNav, /label: "Contact"/);
  assert.match(header, /href="\/"/);
  assert.match(header, /href="\/contact"/);
});

test("Products menu exposes four expanded family groups and representative specifications", async () => {
  const [navigation, header] = await Promise.all([
    read("src/config/navigation.ts"),
    read("src/components/layout/Header.tsx"),
  ]);
  const productGroups = navigation.slice(
    navigation.indexOf("productGroups: ["),
    navigation.indexOf("sizeGroups: ["),
  );
  const groupStarts = [...productGroups.matchAll(/groupLabel: "[^"]+"/g)].map((match) => match.index ?? 0);
  const groups = groupStarts.map((start, index) =>
    productGroups.slice(start, groupStarts[index + 1] ?? productGroups.length),
  );

  assert.equal(groups.length, 4);
  for (const group of groups) {
    assert.equal((group.match(/href:/g) ?? []).length, 7, "each family has one owner plus six child links");
  }
  assert.doesNotMatch(productGroups, /3 1\/8 × 263|Government NCR Forms|Auto Repair NCR Forms/);
  assert.match(header, /data-component="product-family-grid"/);
  assert.match(header, /grid grid-cols-4 divide-x divide-slate-200/);
  assert.match(header, /View complete range/);
  assert.match(header, /group\.items\.map\(\(sub\) =>/);
  assert.doesNotMatch(header, /data-component="product-entry-grid"|data-component="product-family-view-all"|mobile-product-entry-grid|\{group\.description\}/);
  assert.match(header, /Popular Specifications/);
});

test("Manufacturing and Resources stay concise in global navigation", async () => {
  const [navigation, footer, manufacturing, resources] = await Promise.all([
    read("src/config/navigation.ts"),
    read("src/components/layout/Footer.tsx"),
    read("src/app/manufacturing/page.tsx"),
    read("src/app/resources/page.tsx"),
  ]);

  assert.match(navigation, /\{ label: "Manufacturing", href: "\/manufacturing" \}/);
  assert.match(navigation, /\{ label: "Resources", href: "\/resources" \}/);
  assert.doesNotMatch(navigation, /label: "Manufacturing",\s*items:/);
  assert.doesNotMatch(navigation, /label: "Resources",\s*items:/);

  assert.doesNotMatch(footer, /href: "\/manufacturing\/(quality-control|certifications|equipment)"/);
  assert.doesNotMatch(footer, /href: "\/resources\/oem-guide"/);
  assert.match(manufacturing, /href: "\/manufacturing\/quality-control"/);
  assert.match(manufacturing, /href: "\/manufacturing\/certifications"/);
  assert.match(manufacturing, /href: "\/manufacturing\/equipment"/);
  assert.match(resources, /href: "\/resources\/oem-guide"/);
});
