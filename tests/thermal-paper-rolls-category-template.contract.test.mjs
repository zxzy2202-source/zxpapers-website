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
  assert.match(config, /Compare Thermal Paper Roll /);
  assert.match(config, /Types, Sizes & Supply Routes/);
  assert.match(config, /Paper grade & print/);
  assert.match(config, /Sample, pack & repeat/);
  assert.match(config, /Thermal Paper Roll Types & Sizes/);
  assert.match(config, /category guide/);

  for (const destination of [
    "/products/receipt-paper-rolls",
    "/products/till-rolls",
    "/products/bpa-free-thermal-paper",
    "/products/bps-free-thermal-paper",
    "/products/phenol-free-thermal-paper",
    "/products/colored-thermal-paper",
  ]) {
    assert.match(config, new RegExp(destination.replaceAll("/", "\\/")));
  }

  // child-specific keywords must not appear in parent metadata or alternateNames
  // (GLOBAL_THERMAL_ROLL_TERMS is a buyer-facing glossary that may list these as regional aliases)
  const pageConfig = config.split("export const thermalPaperRollsCategoryConfig")[1];
  assert.doesNotMatch(pageConfig, /"thermal receipt paper rolls"|"thermal till rolls supplier"/i);
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
