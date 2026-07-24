import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("WhatsApp links use one internal handoff instead of crawl-blocked external URLs", async () => {
  const [siteData, route] = await Promise.all([
    read("src/config/siteData.ts"),
    read("src/app/contact/whatsapp/route.ts"),
  ]);

  assert.match(siteData, /whatsappUrl:\s*["']\/contact\/whatsapp["']/);
  assert.match(route, /https:\/\/api\.whatsapp\.com\/send/);
  assert.match(route, /MAX_MESSAGE_LENGTH/);
  assert.match(route, /X-Robots-Tag/);
});

test("shared product templates lead with a concise quotation brief", async () => {
  const [brief, productsTemplate, categoryTemplate, detailTemplate] = await Promise.all([
    read("src/components/products/QuickQuoteBrief.tsx"),
    read("src/components/products/ProductsCatalogPage.tsx"),
    read("src/components/products/category/ProductCategoryTemplate.tsx"),
    read("src/components/products/templates/ProductDetailTemplate.tsx"),
  ]);

  assert.match(brief, /data-products-quick-brief/);
  assert.match(brief, /data-category-quick-brief/);
  assert.match(brief, /data-product-quick-brief/);
  assert.match(brief, /Send three facts to start/);
  assert.match(brief, /href="#inquiry"/);
  assert.match(productsTemplate, /kind="products"/);
  assert.match(categoryTemplate, /kind="category"/);
  assert.match(detailTemplate, /kind="detail"/);
});

test("pages with one incoming link receive relevant contextual links", async () => {
  const [detergentConfig, qualityControl] = await Promise.all([
    read("src/config/product-categories/detergent-labels.ts"),
    read("src/app/manufacturing/quality-control/page.tsx"),
  ]);

  assert.match(detergentConfig, /\/products\/detergent-labels\/custom-printed/);
  assert.match(qualityControl, /\/oem\/quality-assurance/);
});
