import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("thermal paper rolls route uses the shared category architecture", async () => {
  const route = await read("src/app/products/thermal-paper-rolls/page.tsx");
  const config = await read("src/config/product-categories/thermal-paper-rolls.ts");

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /thermalPaperRollsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.match(route, /terminologySchema/);
  assert.match(config, /GLOBAL_THERMAL_ROLL_TERMS/);
  assert.match(config, /GLOBAL_METRIC_SPEC_FORMATS/);
  assert.match(config, /Thermal Paper Rolls for /);
  assert.match(config, /OEM & Repeat Supply/);
  assert.match(config, /Paper grade & print/);
  assert.match(config, /Sample, pack & repeat/);
});

test("thermal paper roll category keeps the buyer qualification chain explicit", async () => {
  const config = await read("src/config/product-categories/thermal-paper-rolls.ts");

  for (const phrase of [
    "outer diameter or required length",
    "BPA-free, BPS-free and phenol-free",
    "Packing and traceability",
    "Printer or application sample test",
    "Quantity by SKU",
  ]) {
    assert.match(config, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.doesNotMatch(config, /compatible with all|guaranteed scanning|fixed MOQ|fixed lead time/i);
  assert.doesNotMatch(config, /Response within 12 hours|No spam/);
});

test("the legacy one-off thermal paper catalog is no longer referenced", async () => {
  const oldComponent = new URL(
    "../src/components/products/ThermalPaperRollsCatalogPage.tsx",
    import.meta.url,
  );
  await assert.rejects(access(oldComponent));
});
