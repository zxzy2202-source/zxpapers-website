import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage states the buyer, leads with products, and keeps the RFQ on-page", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /Thermal Paper & Labels Built for Reliable Reorders/);
  assert.match(page, /For Importers, Distributors & OEM Buyers/);
  assert.match(page, /Get a Factory Quote/);
  assert.match(page, /hero\.ctaPrimary\?\.href\?\.trim\(\) \|\| "#home-rfq-form"/);
  assert.match(page, /href: primaryCta\.href/);
  assert.match(page, /id="home-rfq"/);
  assert.match(page, /formId="home-rfq-form"/);
  assert.ok((page.match(/#home-rfq-form/g) ?? []).length >= 2, "homepage quote CTAs should share the on-page RFQ target");
  assert.match(page, /Spec \/ Sample \/ Batch/);
  assert.ok(
    page.indexOf('id="core-products"') < page.indexOf('aria-labelledby="procurement-heading"'),
    "core products should appear before buyer-route education",
  );
  assert.match(page, /bgImages=\{heroImages\}/);
  assert.match(page, /bgCarouselInterval=\{heroCarouselInterval\}/);
  assert.match(page, /eyebrow=\{hero\.eyebrow\?\.trim\(\) \|\| undefined\}/);
  assert.match(page, /hero\.ctaPrimary\?\.label/);
  assert.match(page, /hero\.ctaSecondary\?\.label/);
});

test("homepage image admin exposes only product-line slots consumed by the current page", async () => {
  const [page, slots] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/config/imageSlots.ts"),
  ]);

  const activeHomeSlots = [
    "home:category-thermal-rolls",
    "home:category-thermal-labels",
    "home:category-can-labels",
    "home:category-carbonless",
  ];

  for (const slot of activeHomeSlots) {
    assert.match(page, new RegExp(slot));
    assert.match(slots, new RegExp(slot));
  }

  assert.match(
    slots,
    /slot: "home:product-phenol-free-thermal-paper"[\s\S]*?adminVisible: false/,
    "valid compatibility slots should remain type-safe but stay hidden from admin",
  );
  assert.match(slots, /slot: "home:category-custom-rolls"[\s\S]*?adminVisible: false/);
  assert.match(slots, /slot: "home:category-jumbo-rolls"[\s\S]*?首页制造能力证据图/);
  assert.match(slots, /IMAGE_SLOTS\.filter\([\s\S]*?"adminVisible" in slot[\s\S]*?slot\.adminVisible !== false/);
  assert.doesNotMatch(slots, /home:category-bottle-labels/);
});

test("homepage sends broad product intent to the four canonical family owners", async () => {
  const page = await read("src/app/page.tsx");
  const productLines = page.match(/const productLines: ProductLine\[\] = \[([\s\S]*?)\n\];/)?.[1] ?? "";

  for (const destination of [
    "/products/thermal-paper-rolls",
    "/products/thermal-labels",
    "/products/product-labels",
    "/products/ncr-forms",
  ]) {
    assert.match(productLines, new RegExp(`href: "${destination.replaceAll("/", "\\/")}"`));
  }

  assert.equal((productLines.match(/href:/g) ?? []).length, 4);
  assert.doesNotMatch(productLines, /Jumbo Roll|Custom Printed Rolls & Labels|Filling Line Roll Labels/);
  assert.doesNotMatch(page, /href: "\/products\/thermal-paper-rolls\/blank"/);
  assert.doesNotMatch(page, /href: "\/products\/thermal-labels\/blank"/);
});

test("homepage routes buyers to inspectable evidence instead of unverifiable testimonials", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /const evidenceRoutes/);
  assert.match(page, /\/manufacturing\/certifications/);
  assert.match(page, /\/manufacturing\/quality-control/);
  assert.match(page, /\/manufacturing\/equipment/);
  assert.match(page, /<figcaption/);
  assert.match(page, /Confirm the equipment and inspection\s+records/);
  assert.doesNotMatch(page, /buyerOutcomes|CountryFlag|anonymized outcomes|testimonial/i);
});

test("homepage keeps SEO metadata concise and evidence claims scoped", async () => {
  const page = await read("src/app/page.tsx");
  const description =
    "Source thermal paper rolls, shipping and product labels, and NCR forms by specification, sample, OEM packing, destination and repeat-order control.";

  assert.ok(description.length <= 160);
  assert.match(page, new RegExp(description.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(page, /Availability and scope depend on the selected product grade/);
  assert.doesNotMatch(page, /FCL lead time|fast container loading|TRA and FIRS|ZATCA/);
  assert.match(page, /focus-visible:ring/);
  assert.match(page, /BreadcrumbList/);
});
