import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("thermal labels route uses the reusable category architecture", async () => {
  const route = await read("src/app/products/thermal-labels/page.tsx");

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /thermalLabelsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.doesNotMatch(route, /schemas\.product/);
  assert.doesNotMatch(route, /ThermalLabelsCatalogPage/);
});

test("category template presents product families before sizes and applications", async () => {
  const template = await read("src/components/products/category/ProductCategoryTemplate.tsx");
  const orderedSections = [
    "product-families",
    "popular-sizes",
    "applications",
    "selection-guide",
    "evidence",
    "faq",
    "inquiry",
    "related-programs",
  ];

  let previous = -1;
  for (const section of orderedSections) {
    const marker = `data-category-section=\"${section}\"`;
    const index = template.indexOf(marker);
    assert.ok(index > previous, `${section} should follow the previous category section`);
    previous = index;
  }

  assert.match(template, /data-category-jump-nav/);
  assert.match(template, /overflow-x-auto/);
  assert.match(template, /grid-cols-2/);
  assert.match(template, /focus-visible:ring/);
  assert.match(template, /motion-reduce:/);
  assert.match(template, /InquiryForm/);
});

test("thermal labels config contains buyer-facing unique category paths", async () => {
  const config = await read("src/config/product-categories/thermal-labels.ts");

  for (const destination of [
    "/products/shipping-labels",
    "/products/thermal-labels/blank",
    "/products/custom-printed-thermal-labels",
    "/products/barcode-labels",
    "/products/linerless-labels",
    "#popular-sizes",
  ]) {
    assert.match(config, new RegExp(destination.replaceAll("/", "\\/")));
  }

  assert.doesNotMatch(config, /\/products\/thermal-labels\/custom-printed/);

  assert.match(config, /Printer/);
  assert.match(config, /Surface and environment/);
  assert.match(config, /Material and adhesive/);
  assert.match(config, /document scope|evidence scope/i);
  assert.doesNotMatch(config, /\bP[012]\b/);
  assert.doesNotMatch(config, /24h|24 hours/i);
  assert.doesNotMatch(config, /MOQ:\s*\d|lead time is|compatible with all/i);
});

test("category schema describes a collection rather than one product", async () => {
  const [schema, metadata, images, types] = await Promise.all([
    read("src/lib/product-pages/product-category-schema.ts"),
    read("src/lib/product-pages/product-category-metadata.ts"),
    read("src/lib/product-pages/product-category-images.ts"),
    read("src/components/products/category/product-category-types.ts"),
  ]);

  assert.match(schema, /CollectionPage/);
  assert.match(schema, /ItemList/);
  assert.match(schema, /BreadcrumbList/);
  assert.match(schema, /FAQPage/);
  assert.doesNotMatch(schema, /["']@type["']:\s*["']Product["']/);
  assert.match(metadata, /canonicalPath/);
  assert.match(images, /getSlotImages/);
  assert.match(images, /ResolvedProductCategoryImages/);
  assert.match(types, /ProductCategoryConfig/);
});

test("old one-off thermal labels catalog component is removed", async () => {
  const oldComponent = new URL(
    "../src/components/products/ThermalLabelsCatalogPage.tsx",
    import.meta.url,
  );

  await assert.rejects(access(oldComponent));
});
