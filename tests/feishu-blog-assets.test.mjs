import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";

const root = process.cwd();

async function loadMatcher() {
  const source = fs.readFileSync(path.join(root, "src/lib/blogAssetMatching.ts"), "utf8");
  const javascript = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(javascript).toString("base64")}`);
}

function candidate(overrides = {}) {
  return {
    recordId: "rec-approved",
    assetId: "AST-THERMAL-001",
    title: "GCC POS receipt QR scan test",
    attachments: [{ fileToken: "file-image", name: "receipt-test.webp" }],
    mediaFormats: ["Photo"],
    contentTypes: ["Test & Evidence"],
    productLines: ["Thermal Paper Rolls"],
    specifications: "80x80 POS roll",
    applications: ["Retail"],
    channels: ["Website"],
    status: ["已批准"],
    copyrightStatus: ["公司原创"],
    sourceTypes: ["公司自有"],
    usageRestrictions: "",
    markets: ["Middle East", "EN"],
    altText: "QR code scan test on GCC POS receipt paper",
    caption: "Receipt paper QR readability validation",
    confidentialityRisks: ["无"],
    ...overrides,
  };
}

const assetQuery = {
  productLine: "Thermal Paper Rolls",
  markets: ["Middle East", "Global", "EN"],
  contentTypes: ["Test & Evidence", "Application"],
  applications: ["Retail"],
  keywords: ["QR code", "receipt", "POS"],
};

test("approved Website images with clear rights pass the Feishu asset gate", async () => {
  const { isPublishableWebsiteAsset } = await loadMatcher();
  assert.equal(isPublishableWebsiteAsset(candidate()), true);
});

test("unapproved, confidential, reference-only, or attachment-free assets are rejected", async () => {
  const { isPublishableWebsiteAsset } = await loadMatcher();
  assert.equal(isPublishableWebsiteAsset(candidate({ status: ["待审核"] })), false);
  assert.equal(isPublishableWebsiteAsset(candidate({ confidentialityRisks: ["客户信息"] })), false);
  assert.equal(isPublishableWebsiteAsset(candidate({ sourceTypes: ["公开参考"] })), false);
  assert.equal(isPublishableWebsiteAsset(candidate({ attachments: [] })), false);
  assert.equal(isPublishableWebsiteAsset(candidate({ copyrightStatus: ["待确认"] })), false);
});

test("semantic ranking prefers a relevant Middle East thermal-paper image", async () => {
  const { rankFeishuAssets } = await loadMatcher();
  const unrelated = candidate({
    recordId: "rec-unrelated",
    assetId: "AST-LABEL-001",
    title: "Cosmetic bottle label",
    productLines: ["Custom Printed Labels"],
    contentTypes: ["Product Detail"],
    applications: ["Brand Packaging"],
    markets: ["Global"],
    altText: "Cosmetic bottle label detail",
    caption: "Foil label finish",
    specifications: "Small vial",
  });
  const ranked = rankFeishuAssets([unrelated, candidate()], assetQuery);

  assert.equal(ranked.length, 1);
  assert.equal(ranked[0].assetId, "AST-THERMAL-001");
  assert.ok(ranked[0].score >= 55);
  assert.ok(ranked[0].matchReasons.some((reason) => reason.startsWith("产品主线")));
});

test("the scheduled publisher invokes Feishu preparation without hardcoding resource credentials", () => {
  const cron = fs.readFileSync(path.join(root, "src/app/api/cron/publish-posts/route.ts"), "utf8");
  const service = fs.readFileSync(path.join(root, "src/lib/feishuAssetLibrary.ts"), "utf8");
  const campaign = fs.readFileSync(
    path.join(root, "src/content/blogCampaigns/middleEastThermalPaperP0.ts"),
    "utf8",
  );

  assert.match(cron, /prepareBlogPostCover/);
  assert.match(cron, /publishDuePosts\(new Date\(\), prepareBlogPostCover\)/);
  assert.match(service, /process\.env\.FEISHU_APP_SECRET/);
  assert.match(service, /records\/search/);
  assert.match(service, /drive\/v1\/medias/);
  assert.match(service, /PutObjectCommand/);
  assert.doesNotMatch(service, /WK1KbqBGda9dWbsUOk8c9Pgbn8M/);
  assert.equal((campaign.match(/assetQuery: BLOG_ASSET_QUERIES/g) || []).length, 6);
});
