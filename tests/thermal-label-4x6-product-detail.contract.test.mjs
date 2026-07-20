import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("4x6 thermal shipping label route uses the approved product detail template", async () => {
  const [route, config, template, sitemap, slots, llms] = await Promise.all([
    read("src/app/products/thermal-labels/4x6in/page.tsx"),
    read("src/config/product-pages/thermal-label-4x6in.ts"),
    read("src/components/products/templates/ProductDetailTemplate.tsx"),
    read("src/app/sitemap.ts"),
    read("src/config/imageSlots.ts"),
    read("public/llms.txt"),
  ]);

  assert.match(route, /ProductDetailTemplate/);
  assert.match(route, /thermalLabel4x6Config/);
  assert.match(route, /resolveProductDetailImages/);
  assert.match(route, /buildProductDetailMetadata/);
  assert.match(route, /buildProductDetailSchemas/);
  assert.match(route, /schemas\.product/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);

  assert.match(config, /4 x 6 in \/ 101\.6 x 152\.4 mm/);
  assert.match(config, /printer model/i);
  assert.match(config, /roll or fanfold/i);
  assert.match(config, /parcel surface/i);
  assert.match(config, /barcode|QR/i);
  assert.match(config, /sample/i);
  assert.match(config, /repeat-order/i);
  assert.match(config, /minimum order/i);
  assert.match(config, /delivery window/i);
  assert.doesNotMatch(config, /compatible with all/i);
  assert.doesNotMatch(config, /MOQ:\s*5,?000/i);
  assert.doesNotMatch(config, /7.{0,3}15 days/i);
  assert.doesNotMatch(config, /3.{0,3}5 years/i);

  assert.match(template, /data-product-detail-template/);
  assert.match(template, /data-product-detail-section="procurement-overview"/);
  assert.match(template, /data-product-detail-section="related-products"/);
  assert.match(sitemap, /const thermalLabelPages/);
  assert.match(sitemap, /"4x6in"/);
  assert.match(sitemap, /\/products\/thermal-labels\/\$\{size\}/);
  assert.match(llms, /4 x 6 thermal shipping labels/i);

  for (const suffix of [
    "hero",
    "application",
    "quality",
    "risk",
    "specification",
    "workflow",
    "faq",
    "related-shipping",
    "related-barcode",
    "related-custom",
  ]) {
    assert.match(slots, new RegExp(`thermal-label-4x6in:${suffix}`));
  }
});
