import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("inquiry success requires durable persistence", async () => {
  const route = await read("src/app/api/inquiry/route.ts");

  assert.match(route, /const savedInquiry = await append\(inquiryData\)/);
  assert.doesNotMatch(route, /append\(inquiryData\)\.catch/);
  assert.match(route, /return NextResponse\.json\(\{ ok: true, id: savedInquiry\.id \}\)/);
});

test("supplementary delivery channels are awaited without hiding a saved inquiry", async () => {
  const route = await read("src/app/api/inquiry/route.ts");

  assert.match(route, /Promise\.allSettled\(deliveryTasks\)/);
  assert.match(route, /deliveryTasks\.push\(fetch\("https:\/\/api\.web3forms\.com\/submit"/);
  assert.match(route, /deliveryTasks\.push\(fetch\(process\.env\.GOOGLE_SHEETS_WEBHOOK_URL/);
});

test("webhook delivery rejects HTTP and provider-level failures", async () => {
  const notify = await read("src/lib/notify.ts");

  assert.match(notify, /if \(!response\.ok\)/);
  assert.match(notify, /payload\.code \?\? payload\.errcode \?\? payload\.StatusCode/);
  assert.match(notify, /String\(resultCode\) !== "0"/);
  assert.match(notify, /Inquiry notification failed for:/);
});

test("inquiry attribution stores only first-touch routing fields", async () => {
  const [tracker, attribution, form, store] = await Promise.all([
    read("src/components/analytics/AttributionTracker.tsx"),
    read("src/lib/inquiryAttribution.ts"),
    read("src/components/shared/InquiryForm.tsx"),
    read("src/lib/inquiryStore.ts"),
  ]);

  assert.match(tracker, /captureInquiryAttribution/);
  assert.match(attribution, /zx_inquiry_attribution:v1/);
  assert.match(attribution, /utm_source/);
  assert.match(attribution, /parsed\.origin.*parsed\.pathname/s);
  assert.doesNotMatch(attribution, /document\.cookie|localStorage/);
  assert.match(form, /trackConversionEvent\("inquiry_submit_success"/);
  assert.match(form, /readInquiryAttribution\(\)/);
  assert.match(store, /landingPage\?: string/);
  assert.match(store, /utmCampaign\?: string/);
});
