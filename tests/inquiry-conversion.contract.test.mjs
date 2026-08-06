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

test("optional buyer details are collapsed and reply copy is qualified", async () => {
  const [page, form] = await Promise.all([
    read("src/app/contact/page.tsx"),
    read("src/components/shared/InquiryForm.tsx"),
  ]);

  assert.match(form, /<details/);
  assert.match(form, /Add company and WhatsApp details/);
  assert.match(form, /Request My Quote/);
  assert.match(page, /aim to begin review within one business day after sufficient details are received/);
  assert.doesNotMatch(page, /Instant Reply|30 minutes|24\/7|< 12 hours/);
});

test("paper inquiries preserve structured purchase and specification fields end to end", async () => {
  const [form, route, store, notify, admin] = await Promise.all([
    read("src/components/shared/InquiryForm.tsx"),
    read("src/app/api/inquiry/route.ts"),
    read("src/lib/inquiryStore.ts"),
    read("src/lib/notify.ts"),
    read("src/app/admin/inquiries/InquiriesClient.tsx"),
  ]);

  for (const field of [
    "productLine",
    "purchaseTask",
    "estimatedQuantity",
    "targetTimeline",
    "rollSize",
    "printerModel",
    "paperRequirement",
    "formSize",
    "formParts",
    "formFinishing",
    "referenceAvailable",
  ]) {
    assert.match(form, new RegExp(`name=\\"${field}\\"`));
    assert.match(route, new RegExp(`${field}: optionalTrim\\(${field},`));
    assert.match(store, new RegExp(`${field}\\?: string`));
  }

  assert.match(form, /Thermal Paper Rolls/);
  assert.match(form, /NCR &amp; Business Forms/);
  assert.match(form, /Not sure yet/);
  assert.match(notify, /specificationLines\(data\)/);
  assert.match(admin, /label="产品线"/);
});

test("contact page exposes verified page schema without fixed commercial promises", async () => {
  const page = await read("src/app/contact/page.tsx");

  assert.match(page, /"@type": "ContactPage"/);
  assert.match(page, /"@id": `\$\{SITE\.domain\}\/contact#contact-page`/);
  assert.match(page, /mainEntity: \{/);
  assert.match(page, /"@id": `\$\{SITE\.domain\}\/#organization`/);
  assert.match(page, /email: SITE\.email/);
  assert.match(page, /telephone: SITE\.phone/);
  assert.doesNotMatch(page, /MOQ is 1 carton|MOQ starts from 500 rolls|free samples|Western Union|PayPal for small orders/);
});

test("homepage and market entry pages qualify response, sample, and payment claims", async () => {
  const [home, markets, marketPages, form] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/app/markets/page.tsx"),
    read("src/config/marketCountryPages.ts"),
    read("src/components/shared/InquiryForm.tsx"),
  ]);

  assert.match(home, /<InquiryForm formId="home-rfq-form" \/>/);
  assert.match(form, /aim to reply within one business day after receiving sufficient inquiry details/i);
  assert.doesNotMatch(home, /Reply within one business day|We'll respond within one business day/);
  assert.doesNotMatch(markets, /Western Union|30-day terms/);
  assert.match(markets, /Payment methods and terms are confirmed in the quotation/);
  assert.doesNotMatch(marketPages, /free samples/i);
  assert.match(marketPages, /Sample availability, specification, cost, and shipping arrangements are confirmed/);
});
