import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

async function loadRouteModule() {
  const source = await read("src/app/api/inquiry/route.ts");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  const requireStub = (id) => {
    if (id === "next/server") {
      return { NextResponse: { json: (body, init) => ({ body, init }) } };
    }
    return new Proxy({}, { get: () => () => undefined });
  };

  new Function("require", "module", "exports", compiled)(requireStub, module, module.exports);
  return module.exports;
}

test("inquiry success requires durable persistence", async () => {
  const [route, storage, store] = await Promise.all([
    read("src/app/api/inquiry/route.ts"),
    read("src/lib/storage.ts"),
    read("src/lib/inquiryStore.ts"),
  ]);

  assert.match(route, /process\.env\.NODE_ENV === "production" && !hasDurableStorageConfig\(\)/);
  assert.match(route, /\{ status: 503 \}/);
  assert.match(route, /const savedInquiry = await append\(inquiryData\)/);
  assert.doesNotMatch(route, /append\(inquiryData\)\.catch/);
  assert.match(route, /const notificationStatus = summarizeDeliveryHealth\(deliveryHealth\)/);
  assert.match(route, /notificationStatus,/);
  assert.match(storage, /prepend<T = unknown>\(key: string, value: T\): Promise<void>/);
  assert.match(storage, /\["EVAL", script, "1", `zxp:\$\{key\}`, JSON\.stringify\(value\)\]/);
  assert.match(storage, /table\.insert\(rows, 1, cjson\.decode\(ARGV\[1\]\)\)/);
  assert.match(store, /await getStorage\(\)\.prepend\(KEY, newRecord\)/);
  assert.doesNotMatch(store, /all\.unshift\(newRecord\)/);
});

test("supplementary delivery channels are named and awaited without hiding a saved inquiry", async () => {
  const route = await read("src/app/api/inquiry/route.ts");

  assert.match(route, /name: "webhooks", deliver: notifyAll\(inquiryData\)/);
  assert.match(route, /name: "web3forms"/);
  assert.match(route, /name: "googleSheets"/);
  assert.match(route, /Promise\.allSettled\(\s*deliveryTasks\.map\(\(task\) => task\.deliver\)\s*\)/);
  assert.match(route, /deliveryHealth\[task\.name\] = "failed"/);
  assert.match(route, /channels: deliveryHealth/);
  assert.match(route, /ok: true,[\s\S]*notificationStatus,/);
});

test("notification status is complete only after at least one successful delivery", async () => {
  const route = await read("src/app/api/inquiry/route.ts");
  const { summarizeDeliveryHealth } = await loadRouteModule();

  assert.match(route, /const statuses = Object\.values\(deliveryHealth\)\.flatMap/);
  assert.doesNotMatch(route, /JSON\.stringify\(deliveryHealth\)\.includes\('\"failed\"'\)/);
  assert.equal(
    summarizeDeliveryHealth({
      webhooks: { wecom: "skipped", feishu: "skipped", serverchan: "skipped" },
      web3forms: "skipped",
      googleSheets: "skipped",
    }),
    "partial",
  );
  assert.equal(
    summarizeDeliveryHealth({
      webhooks: { wecom: "delivered", feishu: "skipped", serverchan: "skipped" },
      web3forms: "skipped",
      googleSheets: "skipped",
    }),
    "complete",
  );
  assert.equal(
    summarizeDeliveryHealth({
      webhooks: { wecom: "delivered", feishu: "failed", serverchan: "skipped" },
      web3forms: "skipped",
      googleSheets: "skipped",
    }),
    "partial",
  );
});

test("webhook delivery rejects provider failures and returns per-channel health", async () => {
  const notify = await read("src/lib/notify.ts");

  assert.match(notify, /if \(!response\.ok\)/);
  assert.match(notify, /payload\.code \?\? payload\.errcode \?\? payload\.StatusCode/);
  assert.match(notify, /String\(resultCode\) !== "0"/);
  assert.match(notify, /export interface NotificationHealth/);
  assert.match(notify, /health\[channel\] = result\.value/);
  assert.match(notify, /health\[channel\] = "failed"/);
  assert.match(notify, /return health/);
  assert.doesNotMatch(notify, /Inquiry notification failed for:/);
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
