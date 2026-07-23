import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const layout = readFileSync("src/app/layout.tsx", "utf8");
const seoClient = readFileSync("src/app/admin/seo/SeoClient.tsx", "utf8");

test("the supplied Google tag is enabled by default", () => {
  assert.match(layout, /DEFAULT_GOOGLE_TAG_ID = "GT-TB7DWD3S"/);
  assert.match(layout, /googletagmanager\.com\/gtag\/js\?id=\$\{gaId\}/);
  assert.match(layout, /gtag\('config','\$\{gaId\}'\)/);
});

test("the supplied Tag Manager container includes head and noscript snippets", () => {
  assert.match(layout, /DEFAULT_GOOGLE_TAG_MANAGER_ID = "GTM-MLFJ4XB3"/);
  assert.match(layout, /googletagmanager\.com\/gtm\.js\?id=/);
  assert.match(layout, /googletagmanager\.com\/ns\.html\?id=\$\{gtmId\}/);
  assert.match(layout, /process\.env\.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID\?\.trim\(\)/);
});

test("admin and environment settings can override a valid Google tag", () => {
  assert.match(layout, /configured\?\.trim\(\)/);
  assert.match(layout, /process\.env\.NEXT_PUBLIC_GOOGLE_TAG_ID\?\.trim\(\)/);
  assert.match(layout, /GOOGLE_TAG_ID_PATTERN\.test\(candidate\)/);
  assert.match(seoClient, /G-XXXXXXXXXX or GT-XXXXXXXXXX/);
});

test("Google tag loads after hydration so early page views are captured", () => {
  assert.match(
    layout,
    /googletagmanager\.com\/gtag\/js\?id=\$\{gaId\}`\}\s*strategy="afterInteractive"/,
  );
  assert.match(layout, /<Script id="ga-init" strategy="afterInteractive">/);
});
