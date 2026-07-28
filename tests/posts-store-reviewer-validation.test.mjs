import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import ts from "typescript";

const root = process.cwd();

function transpile(sourcePath, replacements = []) {
  let source = fs.readFileSync(path.join(root, sourcePath), "utf8");
  for (const [from, to] of replacements) source = source.replaceAll(from, to);
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
}

async function loadStore() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "zxpapers-posts-store-"));
  const modules = [
    ["storage.mjs", "src/lib/storage.ts", []],
    ["blogPostValidation.mjs", "src/lib/blogPostValidation.ts", []],
    ["blogAssetQueries.mjs", "src/content/blogCampaigns/blogAssetQueries.ts", []],
    ["postsCategories.mjs", "src/lib/postsCategories.ts", []],
    [
      "postsStore.mjs",
      "src/lib/postsStore.ts",
      [
        ['"@/lib/storage"', '"./storage.mjs"'],
        ['"@/lib/blogPostValidation"', '"./blogPostValidation.mjs"'],
        ['"@/content/blogCampaigns/blogAssetQueries"', '"./blogAssetQueries.mjs"'],
        ['"@/lib/postsCategories"', '"./postsCategories.mjs"'],
      ],
    ],
  ];

  for (const [output, input, replacements] of modules) {
    fs.writeFileSync(path.join(tempDir, output), transpile(input, replacements), "utf8");
  }

  const storage = await import(new URL(`file:///${path.join(tempDir, "storage.mjs").replaceAll("\\", "/")}`).href);
  const postsStore = await import(new URL(`file:///${path.join(tempDir, "postsStore.mjs").replaceAll("\\", "/")}`).href);
  return { ...postsStore, setStorage: storage._setStorage };
}

function publishableContent() {
  return [
    "This guide helps buyers document specifications and acceptance criteria before ordering.",
    "## Confirm the specification",
    "Confirm width 80 mm, roll diameter 80 mm, core size 13 mm, quantity 1000 rolls, and packing details. " + "specification sample testing acceptance criteria buyer document confirm ".repeat(70),
    "## Approve the sample",
    "Test the sample in the intended printer and record the approved configuration. " + "sample printer material testing buyer verify record approval ".repeat(70),
    "## Record acceptance criteria",
    "Document inspection methods, sampling plans, and corrective actions in the order quality plan. " + "inspection sampling order quality plan buyer compare document ".repeat(70),
    "Review the [thermal paper products](/products/thermal-paper-rolls/blank) before requesting a quotation.",
  ].join("\n\n");
}

function post(overrides = {}) {
  return {
    id: "post-review-test",
    slug: "review-test",
    title: "Thermal Paper Specification Review Guide",
    excerpt: "A practical guide for documenting thermal paper specifications, sample approval, inspection criteria, and order requirements before production.",
    content: publishableContent(),
    metaTitle: "Thermal Paper Specification Review Guide",
    metaDescription: "Document thermal paper specifications, sample approval, inspection criteria, and order requirements before production and shipment review.",
    published: false,
    scheduledAt: "2026-07-27T00:00:00.000Z",
    publishApproved: true,
    createdAt: "2026-07-26T00:00:00.000Z",
    updatedAt: "2026-07-26T00:00:00.000Z",
    ...overrides,
  };
}

function memoryStorage(initialPosts) {
  let value = structuredClone(initialPosts);
  let setCalls = 0;
  return {
    storage: {
      async get(key) {
        assert.equal(key, "posts");
        return structuredClone(value);
      },
      async set(key, nextValue) {
        assert.equal(key, "posts");
        setCalls += 1;
        value = structuredClone(nextValue);
      },
      async delete() {},
    },
    snapshot: () => structuredClone(value),
    setCalls: () => setCalls,
  };
}

const storeModule = await loadStore();

test("publishDuePosts rejects callback review dates without a reviewer and does not persist", async () => {
  const original = [post()];
  const memory = memoryStorage(original);
  storeModule.setStorage(memory.storage);

  const result = await storeModule.publishDuePosts(
    new Date("2026-07-28T00:00:00.000Z"),
    async (candidate) => ({ ...candidate, reviewedAt: "2026-07-28T00:00:00.000Z" }),
  );

  assert.deepEqual(result.published, []);
  assert.equal(result.rejected.length, 1);
  assert.match(result.rejected[0].errors.join(" "), /设置审核日期前必须填写审核人/);
  assert.equal(memory.setCalls(), 0);
  assert.deepEqual(memory.snapshot(), original);
});

test("backfillPublishedPostCovers rejects callback review dates without a reviewer and does not persist", async () => {
  const original = [post({ published: true, publishedAt: "2026-07-27T00:00:00.000Z", scheduledAt: undefined, publishApproved: false, assetQuery: { productLine: "Thermal Paper Rolls" } })];
  const memory = memoryStorage(original);
  storeModule.setStorage(memory.storage);

  const result = await storeModule.backfillPublishedPostCovers(
    async (candidate) => ({ ...candidate, cover: "/images/review-test.webp", reviewedAt: "2026-07-28T00:00:00.000Z" }),
  );

  assert.deepEqual(result.updated, []);
  assert.equal(result.rejected.length, 1);
  assert.match(result.rejected[0].errors.join(" "), /设置审核日期前必须填写审核人/);
  assert.equal(memory.setCalls(), 0);
  assert.deepEqual(memory.snapshot(), original);
});
