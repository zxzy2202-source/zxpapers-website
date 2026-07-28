import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = path => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("contact hero CTA targets the rendered inquiry form", async () => {
  const [page, form] = await Promise.all([
    read("src/app/contact/page.tsx"),
    read("src/components/shared/InquiryForm.tsx"),
  ]);

  assert.match(page, /href: "#inquiry-form"/);
  assert.match(page, /formId="inquiry-form"/);
  assert.match(form, /id=\{formId\}/);
  assert.match(form, /scroll-mt-28/);
});

test("inquiry funnel events avoid personal form values", async () => {
  const [analytics, tracker, form] = await Promise.all([
    read("src/lib/analytics.ts"),
    read("src/components/analytics/AttributionTracker.tsx"),
    read("src/components/shared/InquiryForm.tsx"),
  ]);

  assert.match(analytics, /page_path: window\.location\.pathname/);
  assert.match(tracker, /contact_channel_clicked/);
  assert.match(tracker, /"whatsapp"/);
  assert.match(tracker, /"email"/);
  assert.match(tracker, /"phone"/);
  assert.match(form, /inquiry_form_started/);
  assert.match(form, /inquiry_validation_failed/);
  assert.match(form, /inquiry_submit_success/);
  assert.match(form, /inquiry_submit_failed/);
  assert.doesNotMatch(
    analytics,
    /\b(?:email|phone|message|customer_name|contact_name)\s*:/
  );
});

test("contact query preserves a sanitized product brief in the inquiry form", async () => {
  const page = await read("src/app/contact/page.tsx");

  assert.match(page, /searchParams: Promise<\{ product\?: string \| string\[\] \}>/);
  assert.match(page, /replace\(\/\[\\r\\n\\t<>\]\/g, " "\)/);
  assert.match(page, /trim\(\)\.slice\(0, 120\)/);
  assert.match(page, /Product: \$\{productContext\}\\nSize \/ specification:\\nQuantity:\\nDestination:/);
  assert.match(page, /productName=\{productContext\}/);
  assert.match(page, /initialMessage=\{initialMessage\}/);
});

test("asynchronous country detection never remounts or overwrites buyer input", async () => {
  const form = await read("src/components/shared/InquiryForm.tsx");

  assert.match(form, /const countryRef = useRef<HTMLInputElement>\(null\)/);
  assert.match(form, /countryRef\.current && !countryRef\.current\.value\.trim\(\)/);
  assert.match(form, /countryRef\.current\.value = countryName/);
  assert.match(form, /ref=\{countryRef\}/);
  assert.doesNotMatch(form, /key=\{defaultCountry\}/);
  assert.doesNotMatch(form, /setDefaultCountry/);
});

test("optional buyer details are collapsed and reply copy is consistent", async () => {
  const [page, form] = await Promise.all([
    read("src/app/contact/page.tsx"),
    read("src/components/shared/InquiryForm.tsx"),
  ]);

  assert.match(form, /<details/);
  assert.match(form, /Add company and WhatsApp details/);
  assert.match(form, /Request My Quote/);
  assert.match(page, /Reply within one business day/);
  assert.doesNotMatch(page, /Instant Reply|30 minutes|24\/7|< 12 hours/);
});
