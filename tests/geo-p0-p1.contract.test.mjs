import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFile(join(root, path), "utf8");

test("shared claims state their scope and conditions", async () => {
  const siteData = await read("src/config/siteData.ts");
  assert.match(siteData, /responseTimeCondition:/);
  assert.match(siteData, /capacityBasis:/);
  assert.match(siteData, /fclLoadingCondition:/);
  assert.doesNotMatch(siteData, /responseTime: "12 hours"/);
});

test("about page does not append a second plus sign", async () => {
  const about = await read("src/app/about/page.tsx");
  assert.doesNotMatch(about, /FACTORY\.(?:yearsExperience|countriesServed|oemClients)\}\+/);
  assert.doesNotMatch(about, /within 24 hours/);
});

test("compliance page distinguishes evidence types from issuers", async () => {
  const page = await read("src/app/manufacturing/certifications/page.tsx");
  const data = await read("src/config/complianceData.ts");
  assert.match(page, /Evidence type:/);
  assert.doesNotMatch(page, /Issued by:/);
  assert.doesNotMatch(page, /available for download/);
  assert.match(data, /Third-party test report/);
  assert.match(data, /Supplier declaration/);
  assert.match(data, /Regulatory reference/);
});

test("FAQ answers remain mounted for body-text extraction", async () => {
  const faq = await read("src/app/faq/page.tsx");
  const mountedAnswers = faq.match(/<AccordionContent forceMount/g) || [];
  assert.equal(mountedAnswers.length, 2);
});

test("blog supports verified contributors and citations without requiring a person", async () => {
  const store = await read("src/lib/postsStore.ts");
  const page = await read("src/app/blog/[slug]/page.tsx");
  assert.match(store, /author\?: PostContributor/);
  assert.match(store, /reviewer\?: PostContributor/);
  assert.match(store, /sources\?: PostSource\[\]/);
  assert.match(page, /post\.author\s*\?/);
  assert.match(page, /#organization/);
  assert.match(page, /citation: post\.sources/);
});

test("about page uses shared facts and avoids unsupported history", async () => {
  const about = await read("src/app/about/page.tsx");
  assert.match(about, /FACTORY\.area/);
  assert.match(about, /FACTORY\.productionLines/);
  assert.match(about, /FACTORY\.annualOutputLabel/);
  assert.match(about, /COMPLIANCE_EVIDENCE\.map/);
  assert.doesNotMatch(about, /Achieved ISO 9001:2015 certification/);
  assert.doesNotMatch(about, /Achieved FSC certification/);
  assert.doesNotMatch(about, /first in region/);
  assert.doesNotMatch(about, /30 processing machines|8,000 metric tons|more than 50 countries/);
  assert.doesNotMatch(about, /ISO 9001 & FSC certified/);
});

test("legacy mixed certification data has no production consumers", async () => {
  const files = [
    "src/app/page.tsx",
    "src/app/about/page.tsx",
    "src/app/manufacturing/page.tsx",
    "src/app/oem/quality-assurance/page.tsx",
  ];
  for (const file of files) {
    const source = await read(file);
    assert.doesNotMatch(source, /\bCERTIFICATIONS\b/);
    assert.match(source, /COMPLIANCE_EVIDENCE/);
  }
});

test("manufacturing and OEM claims are scoped to the order quality plan", async () => {
  const manufacturing = await read("src/app/manufacturing/page.tsx");
  const oem = await read("src/app/oem/quality-assurance/page.tsx");
  assert.match(manufacturing, /approved product specification and order quality plan/);
  assert.match(manufacturing, /FACTORY\.fclLoadingCondition/);
  assert.doesNotMatch(manufacturing, /100% Inspection Before Shipment|Every roll is inspected|ISO 9001 Certified Factory/);
  assert.match(oem, /acceptance criteria/);
  assert.match(oem, /contract terms, and corrective-action process/);
  assert.doesNotMatch(oem, /Every OEM order|Every batch|every shipment|Retained samples kept for 12 months|Full refund or replacement/);
});

test("post editor preserves extended evidence metadata and couples reviewer date", async () => {
  const editor = await read("src/components/admin/PostEditor.tsx");
  assert.match(editor, /\.\.\.initial\?\.author/);
  assert.match(editor, /\.\.\.initial\?\.reviewer/);
  assert.match(editor, /initial\?\.sources\?\.find/);
  assert.match(editor, /reviewedAt: reviewerName\.trim\(\) && reviewedAt/);
  assert.match(editor, /if \(reviewedAt && !reviewerName\.trim\(\)\)/);
});

test("FAQ commercial and OEM claims require product or order confirmation", async () => {
  const faq = await read("src/app/faq/page.tsx");
  assert.match(faq, /MOQ is confirmed by product grade/);
  assert.match(faq, /Share the exact printer model/);
  assert.match(faq, /signed document before disclosure/);
  assert.match(faq, /approved product specification and order quality plan/);
  assert.doesNotMatch(faq, /all major POS printer brands|all standard thermal label printers/);
  assert.doesNotMatch(faq, /manufacture any width, length, and core size|handle everything from design to delivery/);
  assert.doesNotMatch(faq, /all OEM clients|strictly confidential|Every OEM order/);
  assert.doesNotMatch(faq, /Sample production takes|Rush orders can be accommodated/);
});

test("post persistence rejects a review date without a reviewer on every callback write path", async () => {
  const store = await read("src/lib/postsStore.ts");
  const invariantIndex = store.indexOf("if (data.reviewedAt && !data.reviewer?.name.trim())");
  const draftReturnIndex = store.indexOf("if (!data.published && !data.publishApproved) return;");
  assert.ok(invariantIndex >= 0);
  assert.ok(draftReturnIndex >= 0);
  assert.ok(invariantIndex < draftReturnIndex);
  assert.match(store, /validatePublishableState\(\{ \.\.\.template, published: false, publishApproved: false \}\)/);

  const publishPath = store.slice(
    store.indexOf("export async function publishDuePosts"),
    store.indexOf("export async function backfillPublishedPostCovers"),
  );
  const backfillPath = store.slice(
    store.indexOf("export async function backfillPublishedPostCovers"),
    store.indexOf("export async function deletePost"),
  );
  assert.match(publishPath, /candidate = await preparePost[\s\S]*validatePublishableState\(candidate\)[\s\S]*all\[index\] = next/);
  assert.match(backfillPath, /candidate = await preparePost[\s\S]*validatePublishableState\(candidate\)[\s\S]*all\[index\] = next/);
  assert.match(publishPath, /rejected\.push/);
  assert.match(backfillPath, /rejected\.push/);
});

test("about and manufacturing avoid unconditional operating and quality claims", async () => {
  const about = await read("src/app/about/page.tsx");
  const manufacturing = await read("src/app/manufacturing/page.tsx");
  assert.doesNotMatch(about, /running 24\/7|everything done in-house/i);
  assert.doesNotMatch(manufacturing, /All incoming|ensure uniform|24\/7 production|Real-time batch|the best equipment/i);
  assert.doesNotMatch(manufacturing, /Tolerance: ±0\.3mm|controlled to ±0\.5 g\/m²|\(±1% tolerance\)/);
  assert.match(manufacturing, /approved product specification and order quality plan/);
});

test("manufacturing qualifies traceability, FCL timing, and quote response", async () => {
  const manufacturing = await read("src/app/manufacturing/page.tsx");
  assert.match(manufacturing, /FACTORY\.capacityBasis/);
  assert.match(manufacturing, /FACTORY\.responseTimeCondition|SITE\.responseTimeCondition/);
  assert.match(manufacturing, /By Order/);
  assert.match(manufacturing, /scope and retained records are confirmed/);
  assert.doesNotMatch(manufacturing, /full accountability|Get a quote within 24 hours/);
  assert.doesNotMatch(manufacturing, /`\$\{FACTORY\.fclLoadingDays\} Days`/);
});
