import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("can labels route uses the reusable category architecture", async () => {
  const route = await read("src/app/products/can-labels/page.tsx");

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /canLabelsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.doesNotMatch(route, /ProductCategoryShowcaseTemplate/);
  assert.doesNotMatch(route, /schemas\.product/);
});

test("can labels config keeps approved product and size destinations", async () => {
  const config = await read("src/config/product-categories/can-labels.ts");

  for (const destination of [
    "/products/can-labels/custom-printed",
    "/products/can-labels/blank",
    "211x400",
    "211x603",
    "300x407",
    "307x510",
    "401x700",
  ]) {
    assert.match(config, new RegExp(destination.replaceAll("/", "\\/")));
  }

  assert.match(config, /Custom Printed Can Labels/);
  assert.match(config, /Can and surface/);
  assert.match(config, /Filling, labeling and exposure/);
  assert.match(config, /Material, adhesive and finish/);
  assert.match(config, /Artwork, roll and commercial/);

  const families = config.slice(config.indexOf("families: ["), config.indexOf("sizes:"));
  assert.doesNotMatch(families, /href:\s*"#/);
});

test("can labels copy respects product and evidence boundaries", async () => {
  const config = await read("src/config/product-categories/can-labels.ts");

  assert.match(config, /direct food contact.*separate|separate.*direct food contact/is);
  assert.match(config, /actual can|production can/i);
  assert.match(config, /surface|coating/i);
  assert.doesNotMatch(config, /FDA 21 CFR|BPA[- ]?free|ISO 9001/i);
  assert.doesNotMatch(config, /MOQ:\s*\d|10.?18 days|7 days|24h|24 hours/i);
  assert.doesNotMatch(config, /waterproof|oil-proof|chemical-proof/i);
});

test("category schema names sizes from the active category", async () => {
  const schema = await read("src/lib/product-pages/product-category-schema.ts");

  assert.match(schema, /`\$\{size\.label\} \$\{config\.categoryName\}`/);
  assert.doesNotMatch(schema, /`\$\{size\.label\} Thermal Labels`/);
});

test("shared category template adapts a single compact product route", async () => {
  const [template, form] = await Promise.all([
    read("src/components/products/category/ProductCategoryTemplate.tsx"),
    read("src/components/shared/InquiryForm.tsx"),
  ]);

  assert.match(template, /singleCompactFamily/);
  assert.match(template, /compactFamilies\.length === 1/);
  assert.match(template, /responseNote=\{config\.inquiry\.responseNote\}/);
  assert.match(template, /successMessage=\{config\.inquiry\.successMessage\}/);
  assert.match(form, /responseNote\?: string/);
  assert.match(form, /successMessage\?: string/);
});
