import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("blank thermal paper rolls uses the shared category architecture", async () => {
  const route = await read("src/app/products/thermal-paper-rolls/blank/page.tsx");
  const config = await read(
    "src/config/product-categories/blank-thermal-paper-rolls.ts",
  );

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /blankThermalPaperRollsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.doesNotMatch(route, /ProductSchema|"@type"\s*:\s*"Product"/);

  assert.match(config, /kind: "category"/);
  assert.match(config, /canonicalPath: "\/products\/thermal-paper-rolls\/blank"/);
  assert.match(config, /paperRollSizes\.map/);
});

test("blank roll category keeps the B2B qualification chain explicit", async () => {
  const config = await read(
    "src/config/product-categories/blank-thermal-paper-rolls.ts",
  );

  for (const phrase of [
    "Application & printer",
    "Complete roll geometry",
    "Paper grade & evidence",
    "Sample, pack & repeat",
    "Quantity by SKU",
    "BPA-free, BPS-free and phenol-free are separate evidence scopes",
  ]) {
    assert.match(config, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const unsupportedClaim of [
    /MOQ 1,000/i,
    /3.{0,2}5 business days/i,
    /7.{0,2}15 business days/i,
    /T\/T 30%/i,
    /BPA-free standard/i,
    /-10.{0,2}C/i,
    /20%.{0,2}85%/i,
  ]) {
    assert.doesNotMatch(config, unsupportedClaim);
  }
});

test("legacy one-off blank roll catalog component is removed", async () => {
  const oldComponent = new URL(
    "../src/components/products/BlankThermalRollsCatalogPage.tsx",
    import.meta.url,
  );
  await assert.rejects(access(oldComponent));
});

test("llms index includes the blank roll category", async () => {
  const llms = await read("public/llms.txt");
  assert.match(llms, /products\/thermal-paper-rolls\/blank/);
});
