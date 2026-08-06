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

test("Products navigation keeps linerless at category level and leaves its detail to the category page", async () => {
  const navigation = await read("src/config/navigation.ts");

  const thermalGroup = navigation.slice(
    navigation.indexOf('groupLabel: "Thermal Labels"'),
    navigation.indexOf('groupLabel: "Printed & Packaging Labels"'),
  );
  assert.match(thermalGroup, /label: "Linerless Labels"/);
  assert.match(thermalGroup, /href: "\/products\/linerless-labels"/);
  assert.doesNotMatch(thermalGroup, /3 1\/8 × 263|\/products\/linerless-labels\/3-1-8-x-263/);
});

test("category layout adapts to the active item count and preserves mobile context", async () => {
  const [template, hero, inquiry, actionLink] = await Promise.all([
    read("src/components/products/category/ProductCategoryTemplate.tsx"),
    read("src/components/shared/PageHero.tsx"),
    read("src/components/shared/InquiryForm.tsx"),
    read("src/components/products/category/ProductCategoryActionLink.tsx"),
  ]);

  assert.match(template, /compactFamilies\.length === 4/);
  assert.match(template, /config\.sizes\.length === 1/);
  assert.match(template, /config\.applications\.length === 4/);
  assert.match(template, /lg:grid-cols-2 xl:grid-cols-4/);
  assert.match(template, /mobileTrustBadgeLimit=\{2\}/);
  assert.match(template, /mobileStatLimit=\{2\}/);
  assert.match(template, /line-clamp-2/);
  assert.match(template, /application routes/);
  assert.match(template, /formId=\{inquiryFormId\}/);
  assert.match(hero, /mobileTrustBadgeLimit/);
  assert.match(hero, /mobileStatLimit/);
  assert.match(inquiry, /min-h-40 resize-y/);
  assert.match(inquiry, /className={`h-11/);
  assert.match(actionLink, /CustomEvent\("inquiryScroll"/);
  assert.match(actionLink, /history\.replaceState/);
});
