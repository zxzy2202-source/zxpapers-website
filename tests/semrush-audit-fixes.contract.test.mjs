import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("WhatsApp links collapse message variants into one noindex handoff URL", async () => {
  const [siteData, page, redirect, attribution, markets] = await Promise.all([
    read("src/config/siteData.ts"),
    read("src/app/contact/whatsapp/page.tsx"),
    read("src/app/contact/whatsapp/WhatsAppRedirect.tsx"),
    read("src/components/analytics/AttributionTracker.tsx"),
    read("src/app/markets/page.tsx"),
  ]);

  assert.match(siteData, /whatsappUrl:\s*["']\/contact\/whatsapp#["']/);
  assert.match(page, /robots:\s*{\s*index:\s*false,\s*follow:\s*false\s*}/);
  assert.match(redirect, /window\.location\.hash/);
  assert.match(redirect, /new URLSearchParams\(fragment\)/);
  assert.match(redirect, /https:\/\/api\.whatsapp\.com\/send/);
  assert.match(redirect, /SITE\.whatsapp\.replace\(\/\\D\/g,\s*["']["']\)/);
  assert.match(redirect, /window\.location\.replace\(target\)/);
  assert.match(attribution, /normalized\.startsWith\(["']\/contact\/whatsapp["']\)/);
  assert.doesNotMatch(markets, /https:\/\/wa\.me\/\$\{SITE\.whatsapp\}/);
  assert.match(markets, /\$\{SITE\.whatsappUrl\}\?text=\$\{whatsappMsg\}/);
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
  const [detergentConfig, qualityControl, shippingLabels] = await Promise.all([
    read("src/config/product-categories/detergent-labels.ts"),
    read("src/app/manufacturing/quality-control/page.tsx"),
    read("src/components/products/ShippingLabelsDetailPage.tsx"),
  ]);

  assert.match(detergentConfig, /\/products\/detergent-labels\/custom-printed/);
  assert.match(qualityControl, /\/oem\/quality-assurance/);
  assert.match(shippingLabels, /\/products\/linerless-labels\/3-1-8-x-263/);
});

test("comparison guides are linked from the blog and the long dynamic title is shortened", async () => {
  const [blog, posts] = await Promise.all([
    read("src/app/blog/page.tsx"),
    read("data/posts.json"),
  ]);

  assert.match(blog, /href="\/best-thermal-paper-suppliers"/);
  assert.match(blog, /href="\/zhixinpaper-vs-panda-paper-roll"/);
  assert.match(posts, /"metaTitle":\s*"China Thermal Paper Manufacturers 2026"/);
});
