import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const route = readFileSync("src/app/products/thermal-paper-rolls/page.tsx", "utf8");
const component = readFileSync("src/components/products/ThermalPaperRollsCatalogPage.tsx", "utf8");
const llms = readFileSync("public/llms.txt", "utf8");
const nextConfig = readFileSync("next.config.ts", "utf8");
const navigation = readFileSync("src/config/navigation.ts", "utf8");
const marketsPage = readFileSync("src/app/markets/page.tsx", "utf8");
const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
const sizeDetail = readFileSync("src/components/products/SizeDetailPage.tsx", "utf8");

test("thermal paper roll category keeps its global OEM search owner", () => {
  assert.match(route, /OEM Thermal Paper Rolls Manufacturer/);
  assert.match(component, /OEM, Private Label &amp; Wholesale Supply/);
  assert.doesNotMatch(component, /Thermal Paper Rolls for Europe, USA and Canada/);
});

test("visible content defines global buyer terms and metric size notation", () => {
  for (const term of ["Billing rolls", "EDC rolls", "EFTPOS rolls", "80 x 80 x 12 mm", "80 mm x 80 m"]) {
    assert.match(component, new RegExp(term));
  }
  assert.match(component, /data-global-roll-terminology/);
  assert.match(component, /GLOBAL_THERMAL_ROLL_TERMS\.map/);
  assert.match(component, /GLOBAL_METRIC_SPEC_FORMATS\.map/);
});

test("route publishes breadcrumb collection terminology and FAQ schemas", () => {
  for (const schemaType of ["BreadcrumbList", "CollectionPage", "DefinedTermSet", "FAQPage"]) {
    assert.match(route, new RegExp(`"@type": "${schemaType}"`));
  }
  assert.match(route, /serializeJsonLd/);
});

test("llms file records the two-domain market boundary", () => {
  assert.match(llms, /complete global product-catalog website/);
  assert.match(llms, /regional marketing ownership in Europe, the United States, Canada and Mexico belongs to/);
  assert.match(llms, /NCR forms, can and bottle labels, detergent labels/);
  assert.match(llms, /https:\/\/www\.zhixinpaper\.com\/eu/);
  assert.doesNotMatch(llms, /\[Europe\]\(https:\/\/www\.zxpapers\.com\/markets\/europe\)/);
});

test("Europe and Italy market URLs redirect directly to the regional thermal-paper owner", () => {
  assert.match(nextConfig, /source: "\/markets\/europe"[\s\S]*destination: "https:\/\/www\.zhixinpaper\.com\/eu"[\s\S]*statusCode: 301/);
  assert.match(nextConfig, /source: "\/markets\/europe\/:path\*"[\s\S]*destination: "https:\/\/www\.zhixinpaper\.com\/eu"[\s\S]*statusCode: 301/);
  assert.ok(nextConfig.indexOf('source: "/markets/europe"') < nextConfig.indexOf('value: "zxpapers.com"'));
});

test("zxpapers no longer links or submits Europe regional landing pages", () => {
  for (const source of [navigation, marketsPage, sitemap]) {
    assert.doesNotMatch(source, /\/markets\/europe/);
  }
  assert.match(sizeDetail, /href="https:\/\/www\.zhixinpaper\.com\/eu"/);
  assert.equal(existsSync("src/app/markets/europe/page.tsx"), false);
  assert.equal(existsSync("src/app/markets/europe/italy/page.tsx"), false);
});

test("the market hub links directly to canonical Middle East pages", () => {
  assert.doesNotMatch(marketsPage, /\/markets\/middle-east-africa/);
  for (const path of ["/markets/middle-east", "/markets/middle-east/uae", "/markets/middle-east/saudi-arabia", "/markets/middle-east/egypt", "/markets/middle-east/turkey"]) {
    assert.match(marketsPage, new RegExp(path));
  }
});
