import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("linerless parent route uses the category template and collection schema", async () => {
  const route = await read("src/app/products/linerless-labels/page.tsx");

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /linerlessLabelsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.doesNotMatch(route, /ProductCategoryShowcaseTemplate/);
  assert.doesNotMatch(route, /schemas\.product/);
});

test("linerless category separates the parent intent from the featured detail route", async () => {
  const config = await read("src/config/product-categories/linerless-labels.ts");

  assert.match(config, /canonicalPath: "\/products\/linerless-labels"/);
  assert.match(config, /\/products\/linerless-labels\/3-1-8-x-263/);
  assert.match(config, /Printer and cutter/);
  assert.match(config, /Surface and environment/);
  assert.match(config, /Sample and order approval/);
  assert.match(config, /document subject|separate scopes/i);
  assert.doesNotMatch(config, /MOQ:\s*\d|10.?18|compatible with all|all FDA/i);
});

test("Products navigation exposes both the category and the featured linerless detail", async () => {
  const navigation = await read("src/config/navigation.ts");

  assert.match(navigation, /Linerless Labels/);
  assert.match(navigation, /3 1\/8.*263.*Linerless/);
  assert.match(navigation, /\/products\/linerless-labels\/3-1-8-x-263/);

  const thermalGroup = navigation.slice(
    navigation.indexOf('groupLabel: "Thermal Labels"'),
    navigation.indexOf('groupLabel: "Packaging Labels"'),
  );
  assert.ok(
    thermalGroup.indexOf('label: "Linerless Labels"') < thermalGroup.indexOf('label: "Barcode Labels"'),
    "the category entry should remain visible before the desktop and mobile menu limits",
  );
  assert.ok(
    thermalGroup.indexOf('3 1/8 × 263') < thermalGroup.indexOf('label: "Barcode Labels"'),
    "the featured detail entry should remain visible before the desktop and mobile menu limits",
  );
});
