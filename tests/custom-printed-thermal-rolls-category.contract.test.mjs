import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("custom printed thermal rolls uses the shared category architecture", async () => {
  const route = await read(
    "src/app/products/thermal-paper-rolls/custom-printed/page.tsx",
  );
  const config = await read(
    "src/config/product-categories/custom-printed-thermal-rolls.ts",
  );

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /customPrintedThermalRollsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.doesNotMatch(route, /"@type"\s*:\s*"Product"|ProductSchema/);

  assert.match(config, /kind: "category"/);
  assert.match(
    config,
    /canonicalPath: "\/products\/thermal-paper-rolls\/custom-printed"/,
  );
  assert.match(config, /paperRollSizes\.map/);
});

test("printed roll page keeps the approval and repeat-order chain explicit", async () => {
  const config = await read(
    "src/config/product-categories/custom-printed-thermal-rolls.ts",
  );

  for (const phrase of [
    "Brief the roll and job",
    "Review print feasibility",
    "Approve proof and test",
    "Freeze repeat controls",
    "Quantity by SKU",
    "QR or barcode scan test",
    "obsolete-artwork",
  ]) {
    assert.match(config, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const unsupportedClaim of [
    /fixed MOQ/i,
    /guaranteed scan/i,
    /BPA-free standard/i,
    /production timing: [0-9]/i,
    /response within [0-9]/i,
  ]) {
    assert.doesNotMatch(config, unsupportedClaim);
  }
});

test("legacy one-off printed roll component is removed", async () => {
  const oldComponent = new URL(
    "../src/components/products/CustomPrintedThermalRollsCatalogPage.tsx",
    import.meta.url,
  );
  await assert.rejects(access(oldComponent));
});

test("llms index includes the custom printed roll category", async () => {
  const llms = await read("public/llms.txt");
  assert.match(llms, /products\/thermal-paper-rolls\/custom-printed/);
});
