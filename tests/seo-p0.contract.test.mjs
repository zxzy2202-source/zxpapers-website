import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";

const robots = readFileSync("public/robots.txt", "utf8");
const adminLayout = readFileSync("src/app/admin/layout.tsx", "utf8");
const imageSlots = readFileSync("src/config/imageSlots.ts", "utf8");
const redirects = await nextConfig.redirects();

function assertRedirect(source, destination) {
  const redirect = redirects.find((candidate) => candidate.source === source);
  assert.ok(redirect, `missing redirect for ${source}`);
  assert.equal(redirect.destination, destination);
  assert.equal(redirect.permanent, true);
}

function userAgentBlock(name) {
  const blocks = robots.split(/(?=^User-agent:\s*)/gim);
  return blocks.find((block) => new RegExp(`^User-agent:\\s*${name}\\s*$`, "im").test(block)) ?? "";
}

test("specific legacy product redirects run before the generic fallback", () => {
  const specificIndex = redirects.findIndex(
    (redirect) => redirect.source === "/product/:slug(.*linerless.*)",
  );
  const fallbackIndex = redirects.findIndex(
    (redirect) => redirect.source === "/product/:slug*",
  );

  assert.notEqual(specificIndex, -1, "missing linerless legacy redirect");
  assert.notEqual(fallbackIndex, -1, "missing generic legacy product fallback");
  assert.ok(
    specificIndex < fallbackIndex,
    "the generic fallback shadows the known linerless redirect",
  );
});

test("legacy WordPress redirects remain crawlable so search engines can confirm them", () => {
  const generalBlock = userAgentBlock("\\*");
  assert.doesNotMatch(generalBlock, /^Disallow:\s*\/wp-admin\/$/im);
  assert.doesNotMatch(generalBlock, /^Disallow:\s*\/wp-login\.php$/im);
  assert.ok(
    redirects.some((redirect) => redirect.source === "/wp-admin/:path*"),
    "wp-admin redirect must remain configured",
  );
  assert.ok(
    redirects.some((redirect) => redirect.source === "/wp-login.php"),
    "wp-login redirect must remain configured",
  );
});

test("search crawlers can read the admin noindex directive", () => {
  const generalBlock = userAgentBlock("\\*");
  assert.doesNotMatch(generalBlock, /^Disallow:\s*\/admin\/$/im);
  assert.match(
    adminLayout,
    /robots:\s*{\s*index:\s*false,\s*follow:\s*false\s*}/,
  );
});

test("image manager links point directly to canonical product pages", () => {
  assert.doesNotMatch(
    imageSlots,
    /pageUrl:\s*"\/products\/(?:blank-thermal-rolls|blank-thermal-labels)"/,
  );
  assert.match(
    imageSlots,
    /pageUrl:\s*"\/products\/thermal-paper-rolls\/blank"/,
  );
  assert.match(
    imageSlots,
    /pageUrl:\s*"\/products\/thermal-labels\/blank"/,
  );
});

test("legacy product archives redirect to the canonical products hub", () => {
  for (const source of [
    "/product-category/:slug*",
    "/product-tag/:slug*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/:slug*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-tag/:slug*",
  ]) {
    assertRedirect(source, "https://www.zxpapers.com/products");
  }
});

test("legacy blog archives redirect to the canonical blog", () => {
  for (const source of [
    "/posts",
    "/posts/:path*",
    "/about-us/blog",
    "/about-us/blog/:path*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/posts",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/posts/:path*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/about-us/blog",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/about-us/blog/:path*",
  ]) {
    assertRedirect(source, "https://www.zxpapers.com/blog");
  }
});

test("high-intent legacy URLs redirect to the closest current page", () => {
  const mappings = new Map([
    ["/inquiry", "https://www.zxpapers.com/contact"],
    ["/get-a-quote", "https://www.zxpapers.com/contact"],
    ["/amazon-fba-tags", "https://www.zxpapers.com/products/shipping-labels"],
    ["/products/page/:num", "https://www.zxpapers.com/products"],
    ["/hot-products", "https://www.zxpapers.com/products"],
    ["/about-us/certificates", "https://www.zxpapers.com/manufacturing/certifications"],
  ]);

  for (const [source, destination] of mappings) {
    assertRedirect(source, destination);
  }
});

test("evidence-backed legacy mappings run before host and language fallbacks", () => {
  const archiveSource = "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/:slug*";
  const archiveIndex = redirects.findIndex((redirect) => redirect.source === archiveSource);
  const hostIndex = redirects.findIndex(
    (redirect) => redirect.source === "/:path*" && redirect.has?.[0]?.type === "host",
  );
  const languageFallbackIndex = redirects.findIndex(
    (redirect) => redirect.source === "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/:path*",
  );

  assert.notEqual(archiveIndex, -1, "missing evidence-backed archive redirect");
  assert.notEqual(hostIndex, -1, "missing canonical host redirect");
  assert.notEqual(languageFallbackIndex, -1, "missing language fallback redirect");
  assert.ok(archiveIndex < hostIndex, "legacy mapping should consolidate path and host in one rule");
  assert.ok(archiveIndex < languageFallbackIndex, "legacy mapping should avoid a language-strip chain");
});

test("legacy language roots use explicit redirects with non-empty locations", () => {
  const fallbackIndex = redirects.findIndex(
    (redirect) => redirect.source === "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/:path*",
  );

  for (const language of [
    "ro", "de", "fr", "es", "it", "pt", "pl", "nl", "tr", "ar", "ja", "ko",
    "ru", "zh", "hi", "vi", "th", "id", "ms",
  ]) {
    assertRedirect(`/${language}`, "https://www.zxpapers.com/");
    const explicitIndex = redirects.findIndex((redirect) => redirect.source === `/${language}`);
    assert.ok(explicitIndex < fallbackIndex, `/${language} must run before the optional path fallback`);
  }
});
