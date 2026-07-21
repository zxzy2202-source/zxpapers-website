import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("blank thermal labels uses the shared category architecture", async () => {
  const route = await read("src/app/products/thermal-labels/blank/page.tsx");
  const config = await read(
    "src/config/product-categories/blank-thermal-labels.ts",
  );

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /blankThermalLabelsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.doesNotMatch(route, /"@type"\s*:\s*"Product"|ProductSchema/);

  assert.match(config, /kind: "category"/);
  assert.match(config, /canonicalPath: "\/products\/thermal-labels\/blank"/);
  assert.match(config, /labelSizes\.map/);
});

test("blank label page keeps the qualification chain explicit", async () => {
  const config = await read(
    "src/config/product-categories/blank-thermal-labels.ts",
  );

  for (const phrase of [
    "Printer, data & sensing",
    "Surface & environment",
    "Material & adhesive",
    "Roll build, sample & repeat",
    "Application and service temperature",
    "representative substrate",
    "quantity by SKU",
  ]) {
    assert.match(config, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }

  for (const unsupportedClaim of [
    /MOQ 1,000/i,
    /12h quote/i,
    /compatible with all/i,
    /-196.{0,2}C/i,
    /180.{0,2}C/i,
    /free samples/i,
    /guaranteed scan/i,
  ]) {
    assert.doesNotMatch(config, unsupportedClaim);
  }
});

test("legacy duplicate printed-label page is removed", async () => {
  const oldPage = new URL(
    "../src/app/products/thermal-labels/custom-printed/page.tsx",
    import.meta.url,
  );
  await assert.rejects(access(oldPage));
});

test("AI index includes the blank label category", async () => {
  const llms = await read("public/llms.txt");
  assert.match(llms, /products\/thermal-labels\/blank/);
});
