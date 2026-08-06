import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";

const robots = readFileSync("public/robots.txt", "utf8");
const adminLayout = readFileSync("src/app/admin/layout.tsx", "utf8");
const imageSlots = readFileSync("src/config/imageSlots.ts", "utf8");
const sitemapSource = readFileSync("src/app/sitemap.ts", "utf8");
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

test("evidence-backed legacy products redirect directly to the closest current page", () => {
  const mappings = new Map([
    [
      "/product/:slug(.*4-x-6-.*direct-thermal.*label.*)",
      "https://www.zxpapers.com/products/thermal-labels/4x6in",
    ],
    [
      "/product/:slug(.*phenol-free.*)",
      "https://www.zxpapers.com/products/phenol-free-thermal-paper",
    ],
    [
      "/product/:slug(.*bpa-free.*)",
      "https://www.zxpapers.com/products/bpa-free-thermal-paper",
    ],
    [
      "/product/:slug(.*direct-thermal.*label.*)",
      "https://www.zxpapers.com/products/thermal-labels",
    ],
    [
      "/product/:slug(.*thermal-transfer.*label.*)",
      "https://www.zxpapers.com/products/barcode-labels",
    ],
    [
      "/product/:slug(.*inkjet.*label.*)",
      "https://www.zxpapers.com/products/product-labels",
    ],
    [
      "/product/:slug(.*z-perform.*)",
      "https://www.zxpapers.com/products/barcode-labels",
    ],
    [
      "/product/:slug(.*baggage.*tag.*)",
      "https://www.zxpapers.com/products/shipping-labels",
    ],
    [
      "/product/:slug(.*waterproof.*label.*)",
      "https://www.zxpapers.com/products/product-labels",
    ],
    [
      "/product/:slug(.*duratherm.*)",
      "https://www.zxpapers.com/products/thermal-paper-rolls",
    ],
    [
      "/product/:slug(.*carbonless.*)",
      "https://www.zxpapers.com/products/ncr-forms",
    ],
    [
      "/product/:slug(.*thermal.*paper.*)",
      "https://www.zxpapers.com/products/thermal-paper-rolls",
    ],
    [
      "/product/:slug(.*linerless.*)",
      "https://www.zxpapers.com/products/linerless-labels",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product/:slug(.*linerless.*)",
      "https://www.zxpapers.com/products/linerless-labels",
    ],
    [
      "/product/:slug(.*gilbarco.*)",
      "https://www.zxpapers.com/products/thermal-paper-rolls",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product/:slug(.*gilbarco.*)",
      "https://www.zxpapers.com/products/thermal-paper-rolls",
    ],
  ]);

  for (const [source, destination] of mappings) {
    assertRedirect(source, destination);
  }

  assert.equal(
    redirects.findIndex((redirect) => redirect.source === "/product/:slug*"),
    -1,
    "unknown legacy products must return 404 instead of soft-redirecting to /products",
  );
});

test("specific legacy product intent runs before broader product-family rules", () => {
  const orderedPairs = [
    [
      "/product/:slug(.*4-x-6-.*direct-thermal.*label.*)",
      "/product/:slug(.*direct-thermal.*label.*)",
    ],
    [
      "/product/:slug(.*phenol-free.*)",
      "/product/:slug(.*bpa-free.*)",
    ],
    [
      "/product/:slug(.*bpa-free.*)",
      "/product/:slug(.*thermal.*paper.*)",
    ],
  ];

  for (const [specific, broad] of orderedPairs) {
    const specificIndex = redirects.findIndex((redirect) => redirect.source === specific);
    const broadIndex = redirects.findIndex((redirect) => redirect.source === broad);
    assert.notEqual(specificIndex, -1, `missing specific legacy mapping ${specific}`);
    assert.notEqual(broadIndex, -1, `missing broad legacy mapping ${broad}`);
    assert.ok(specificIndex < broadIndex, `${specific} must run before ${broad}`);
  }
});

test("obsolete WordPress internals remain crawlable but are not soft-redirected", () => {
  const generalBlock = userAgentBlock("\\*");
  assert.doesNotMatch(generalBlock, /^Disallow:\s*\/wp-admin\/$/im);
  assert.doesNotMatch(generalBlock, /^Disallow:\s*\/wp-login\.php$/im);
  for (const source of [
    "/wp-content/:path*",
    "/wp-admin/:path*",
    "/wp-login.php",
  ]) {
    assert.equal(
      redirects.findIndex((redirect) => redirect.source === source),
      -1,
      `${source} must return 404 instead of redirecting to the homepage`,
    );
  }
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

test("legacy blog archives redirect to the canonical blog", () => {
  for (const source of [
    "/posts",
    "/about-us/blog",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/posts",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/about-us/blog",
  ]) {
    assertRedirect(source, "https://www.zxpapers.com/blog");
  }

  for (const source of [
    "/posts/:path*",
    "/about-us/blog/:path*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/posts/:path*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/about-us/blog/:path*",
  ]) {
    assert.equal(
      redirects.findIndex((redirect) => redirect.source === source),
      -1,
      `${source} must not soft-redirect individual articles to the blog archive`,
    );
  }
});

test("GSC-indexed legacy product categories redirect to the closest current category", () => {
  const mappings = new Map([
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/direct-thermal-labels/:path*",
      "https://www.zxpapers.com/products/thermal-labels",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/thermal-paper-rolls/:path*",
      "https://www.zxpapers.com/products/thermal-paper-rolls",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/adhesive-label-material/:path*",
      "https://www.zxpapers.com/products/product-labels",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/labelsstick/:path*",
      "https://www.zxpapers.com/products/product-labels",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/thermal-receipt-paper-rolls/:path*",
      "https://www.zxpapers.com/products/receipt-paper-rolls",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/carbonless-paper/:path*",
      "https://www.zxpapers.com/products/ncr-forms",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/bpabps-free-thermal-paper/:path*",
      "https://www.zxpapers.com/products/phenol-free-thermal-paper",
    ],
  ]);

  for (const [source, destination] of mappings) {
    assertRedirect(source, destination);
  }
});

test("high-intent legacy URLs redirect to the closest current page", () => {
  const mappings = new Map([
    ["/inquiry", "https://www.zxpapers.com/contact"],
    ["/get-a-quote", "https://www.zxpapers.com/contact"],
    ["/amazon-fba-tags", "https://www.zxpapers.com/products/shipping-labels"],
    ["/products/page/:num", "https://www.zxpapers.com/products"],
    ["/hot-products", "https://www.zxpapers.com/products"],
    ["/hot-products/page/:num", "https://www.zxpapers.com/products"],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/hot-products/page/:num",
      "https://www.zxpapers.com/products",
    ],
    [
      "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/inquiry",
      "https://www.zxpapers.com/contact",
    ],
    ["/about-us/certificates", "https://www.zxpapers.com/manufacturing/certifications"],
    ["/about-us", "https://www.zxpapers.com/about"],
    ["/contact-us", "https://www.zxpapers.com/contact"],
  ]);

  for (const [source, destination] of mappings) {
    assertRedirect(source, destination);
  }
});

test("evidence-backed legacy mappings run before host and language fallbacks", () => {
  const archiveSource = "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/thermal-receipt-paper-rolls/:path*";
  const archiveIndex = redirects.findIndex((redirect) => redirect.source === archiveSource);
  const hostIndex = redirects.findIndex(
    (redirect) => redirect.source === "/:path*" && redirect.has?.[0]?.type === "host",
  );
  const currentRouteIndex = redirects.findIndex(
    (redirect) => redirect.source === "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/about",
  );

  assert.notEqual(archiveIndex, -1, "missing evidence-backed archive redirect");
  assert.notEqual(hostIndex, -1, "missing canonical host redirect");
  assert.notEqual(currentRouteIndex, -1, "missing language redirect for a current route");
  assert.ok(archiveIndex < hostIndex, "legacy mapping should consolidate path and host in one rule");
  assert.ok(currentRouteIndex < hostIndex, "current routes should canonicalize language and host in one hop");
  assert.equal(redirects[currentRouteIndex].destination, "https://www.zxpapers.com/about");

  for (const source of [
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product/:slug(.*linerless.*)",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product/:slug(.*gilbarco.*)",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/about-us",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/contact-us",
  ]) {
    const mappingIndex = redirects.findIndex((redirect) => redirect.source === source);
    assert.notEqual(mappingIndex, -1, `missing direct migration mapping for ${source}`);
    assert.ok(mappingIndex < hostIndex, `${source} must run before host consolidation`);
  }
});

test("unmapped legacy URLs remain genuine not-found responses", () => {
  for (const source of [
    "/product/:slug*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product/:slug*",
    "/download",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/download",
    "/site-map/:path*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/site-map/:path*",
    "/product-category/:slug*",
    "/product-tag/:slug*",
    "/category/:slug*",
    "/tag/:slug*",
    "/feed/:path*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-category/:slug*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/product-tag/:slug*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/category/:slug*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/tag/:slug*",
    "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/feed/:path*",
    "/:path+/",
  ]) {
    assert.equal(
      redirects.findIndex((redirect) => redirect.source === source),
      -1,
      `${source} must not soft-redirect without an equivalent current page`,
    );
  }
});

test("trailing slashes normalize only for confirmed current route families", () => {
  assert.equal(nextConfig.skipTrailingSlashRedirect, true);
  assertRedirect("/about/", "https://www.zxpapers.com/about");
  assertRedirect("/products/:path+/", "https://www.zxpapers.com/products/:path+");
  assertRedirect("/blog/:path+/", "https://www.zxpapers.com/blog/:path+");
});

test("legacy language roots use explicit redirects with non-empty locations", () => {
  const hostIndex = redirects.findIndex(
    (redirect) => redirect.source === "/:path*" && redirect.has?.[0]?.type === "host",
  );

  for (const language of [
    "ro", "de", "fr", "es", "it", "pt", "pl", "nl", "tr", "ar", "ja", "ko",
    "ru", "zh", "hi", "vi", "th", "id", "ms",
  ]) {
    assertRedirect(`/${language}`, "https://www.zxpapers.com/");
    const explicitIndex = redirects.findIndex((redirect) => redirect.source === `/${language}`);
    assert.ok(explicitIndex < hostIndex, `/${language} must canonicalize before host consolidation`);
  }
});

test("historical trust-content URLs redirect to the closest current pages", () => {
  assertRedirect("/factory/virtual-tour", "/about");
  assertRedirect("/case-studies", "/oem/case-studies");
});

test("can-label detail routes retain independent canonical ownership", () => {
  const canLabelRedirect = redirects.find(
    (redirect) =>
      redirect.source ===
      "/products/can-labels/:legacy(211x400|211x603|300x407|307x510|401x700|blank|custom-printed)",
  );
  assert.equal(canLabelRedirect, undefined, "can-label detail pages must not redirect to the category");
  assert.match(sitemapSource, /const canLabelPages/);
  for (const slug of [
    "211x400",
    "211x603",
    "300x407",
    "307x510",
    "401x700",
    "blank",
    "custom-printed",
  ]) {
    assert.match(sitemapSource, new RegExp(`\\"${slug}\\"`));
  }
  assert.match(sitemapSource, /\.\.\.canLabelPages/);
  assert.doesNotMatch(sitemapSource, /"custom-printed-thermal-rolls"/);
});

test("custom printed thermal label aliases resolve to one canonical page", () => {
  for (const source of [
    "/products/thermal-labels/custom-printed",
    "/products/custom-printed-labels",
  ]) {
    assertRedirect(source, "/products/custom-printed-thermal-labels");
  }

  assert.match(sitemapSource, /"custom-printed-thermal-labels"/);
  assert.doesNotMatch(sitemapSource, /"thermal-labels\/custom-printed"/);
  assert.match(
    imageSlots,
    /pageUrl:\s*"\/products\/custom-printed-thermal-labels"/,
  );
});
