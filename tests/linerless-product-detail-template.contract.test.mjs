import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("linerless detail template owns SEO, GEO, schema and RFQ inputs", async () => {
  const [config, template, route, sitemap, slots, llms] = await Promise.all([
    read("src/config/product-pages/linerless-3-1-8-x-263.ts"),
    read("src/components/products/templates/ProductDetailTemplate.tsx"),
    read("src/app/products/linerless-labels/3-1-8-x-263/page.tsx"),
    read("src/app/sitemap.ts"),
    read("src/config/imageSlots.ts"),
    read("public/llms.txt"),
  ]);

  assert.match(config, /3 1\/8 x 263/);
  assert.match(config, /printer model/i);
  assert.match(config, /removable|semi-permanent|permanent/i);
  assert.match(config, /packing/i);
  assert.match(config, /destination/i);
  assert.match(config, /Linerless Labels Manufacturer \| OEM/);
  assert.match(config, /OEM & Bulk Supply/);
  assert.match(config, /supplyProgram/);
  assert.match(config, /distributors|importers|private-label/i);
  assert.match(config, /Request a B2B Quote/);
  assert.match(config, /minimum order|MOQ/i);
  assert.match(config, /requested delivery window/i);
  assert.match(template, /ProductDetailTemplate/);
  assert.match(template, /data-product-detail-section="supply-program"/);
  assert.match(template, /config\.supplyProgram/);
  assert.match(template, /InquiryForm/);
  assert.match(route, /buildProductDetailSchemas/);
  assert.match(sitemap, /linerless-labels\/3-1-8-x-263/);
  assert.match(slots, /linerless-3-1-8-x-263:hero/);
  for (const suffix of [
    "risk",
    "specification",
    "workflow",
    "faq",
    "related-custom",
    "related-thermal",
    "related-shipping",
  ]) {
    assert.match(slots, new RegExp(`linerless-3-1-8-x-263:${suffix}`));
  }
  assert.match(config, /relatedProducts/);
  assert.match(config, /Custom Printed Thermal Labels/);
  assert.match(config, /\/products\/thermal-labels\/custom-printed/);
  assert.match(config, /\/products\/thermal-labels/);
  assert.match(config, /\/products\/shipping-labels/);
  assert.match(route, /linerlessDetailConfig\.images\.risk/);
  assert.match(route, /linerlessDetailConfig\.relatedProducts\.map/);
  assert.match(template, /data-context-image=\{marker\}/);
  assert.match(template, /marker="risk"/);
  assert.match(template, /marker="specification"/);
  assert.match(template, /marker="workflow"/);
  assert.match(template, /marker="faq"/);
  assert.match(template, /data-product-detail-section="related-products"/);
  assert.match(llms, /3 1\/8 x 263.*Linerless/i);
  assert.match(llms, /OEM|private-label|bulk supply/i);
});
