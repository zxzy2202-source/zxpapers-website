import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage leads B2B buyers from risk to a quote-ready specification", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /Thermal Paper, Labels & NCR Forms Built to Your Specification/);
  assert.match(page, /Fix the Specification Before You Compare Price/);
  assert.match(page, /Build a Quote-Ready RFQ/);
  assert.match(page, /Spec \/ Sample \/ Batch/);
  assert.match(page, /Send the Inputs That Change the Price/);
});

test("homepage sends broad product intent to category aggregation pages", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /href: "\/products\/thermal-paper-rolls"/);
  assert.match(page, /href: "\/products\/thermal-labels"/);
  assert.doesNotMatch(page, /href: "\/products\/thermal-paper-rolls\/blank"/);
  assert.doesNotMatch(page, /href: "\/products\/thermal-labels\/blank"/);
});

test("homepage uses approval scenarios instead of unverifiable testimonials", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /const approvalScenarios/);
  assert.match(page, /Risk to avoid/);
  assert.match(page, /Approval record/);
  assert.doesNotMatch(page, /buyerOutcomes|CountryFlag|anonymized outcomes/);
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
