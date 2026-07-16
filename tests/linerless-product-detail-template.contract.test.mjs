import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("linerless detail template owns SEO, GEO, schema and RFQ inputs", async () => {
  const [config, template, mobileBar, route, sitemap, slots, llms] = await Promise.all([
    read("src/config/product-pages/linerless-3-1-8-x-263.ts"),
    read("src/components/products/templates/ProductDetailTemplate.tsx"),
    read("src/components/products/templates/MobileInquiryBar.tsx"),
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
  assert.match(template, /data-product-detail-section="procurement-overview"/);
  assert.doesNotMatch(template, /data-context-image/);
  assert.match(template, /sm:grid-cols-2 lg:grid-cols-3/);
  assert.match(template, /data-compact-specifications/);
  assert.match(template, /sm:grid-cols-2 lg:grid-cols-4/);
  assert.match(template, /data-faq-columns/);
  assert.match(template, /aspect-\[16\/9\]/);
  assert.match(template, /data-product-detail-section="related-products"/);
  for (const [number, label] of [
    ["01", "Product fit"],
    ["02", "Risk control"],
    ["03", "Specification"],
    ["04", "Application"],
    ["05", "Approval route"],
    ["06", "Evidence"],
    ["07", "Request quote"],
    ["08", "Sourcing FAQ"],
    ["09", "Related programs"],
  ]) {
    assert.match(template, new RegExp(`number=\"${number}\"`));
    assert.match(template, new RegExp(`label=\"${label}\"`, "i"));
  }
  assert.match(template, /MobileInquiryBar/);
  assert.match(template, /data-procurement-stage/);
  assert.match(template, /data-risk-marker/);
  assert.match(template, /data-workflow-rail/);
  assert.match(template, /data-related-scroller/);
  assert.match(template, /pb-\[calc\(5rem\+env\(safe-area-inset-bottom\)\)\]/);
  assert.doesNotMatch(template, /"use client"/);
  assert.match(mobileBar, /^"use client";/);
  assert.match(mobileBar, /IntersectionObserver/);
  assert.match(mobileBar, /env\(safe-area-inset-bottom\)/);
  assert.match(mobileBar, /Request Quote/);
  assert.match(mobileBar, /WhatsApp/);
  assert.match(mobileBar, /aria-hidden/);
  assert.match(mobileBar, /motion-reduce:transition-none/);
  const inquiryIndex = template.indexOf('data-product-detail-section="inquiry"');
  const faqIndex = template.indexOf('data-product-detail-section="faq"');
  assert.ok(inquiryIndex > -1 && faqIndex > -1 && inquiryIndex < faqIndex);
  assert.match(llms, /3 1\/8 x 263.*Linerless/i);
  assert.match(llms, /OEM|private-label|bulk supply/i);
});
