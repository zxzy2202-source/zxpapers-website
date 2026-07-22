import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("scheduled publishing is protected and registered as a daily Vercel cron", () => {
  const route = read("src/app/api/cron/publish-posts/route.ts");
  const config = JSON.parse(read("vercel.json"));

  assert.match(route, /process\.env\.CRON_SECRET/);
  assert.match(route, /authorization/);
  assert.match(route, /publishDuePosts/);
  assert.deepEqual(config.crons, [
    { path: "/api/cron/publish-posts", schedule: "0 1 * * *" },
  ]);
});

test("post storage requires approval, a due date and a publishable format", () => {
  const store = read("src/lib/postsStore.ts");
  const validation = read("src/lib/blogPostValidation.ts");

  assert.match(store, /scheduledAt\?: string/);
  assert.match(store, /publishApproved\?: boolean/);
  assert.match(store, /post\.publishApproved/);
  assert.match(store, /validateBlogPost\(post\)/);
  assert.match(validation, /duplicate-h1/);
  assert.match(validation, /heading-jump/);
  assert.match(validation, /content-depth/);
  assert.match(validation, /internal-link/);
  assert.match(validation, /ai-style-high-risk/);
  assert.match(validation, /evidence-gap/);
  assert.match(validation, /weak-buyer-actions/);
  assert.match(store, /validation\.errors/);
  assert.match(store, /assetQuery\?: BlogAssetQuery/);
  assert.match(store, /preparePost\?: \(post: PostRecord\)/);
});

test("Middle East P0 campaign contains six formatted, publishable guides", () => {
  const source = read("src/content/blogCampaigns/middleEastThermalPaperP0.ts");
  const articles = [...source.matchAll(/content: `([\s\S]*?)`,\n\s*},/g)].map((match) => match[1]);

  assert.equal(articles.length, 6);
  for (const article of articles) {
    const words = article.trim().split(/\s+/).filter(Boolean);
    assert.ok(words.length >= 600, `expected at least 600 words, received ${words.length}`);
    assert.doesNotMatch(article, /^#\s+/m);
    assert.ok((article.match(/^##\s+/gm) || []).length >= 3);
    assert.match(article, /^## Frequently Asked Questions$/m);
    assert.match(article, /\[[^\]]+\]\(\/(?:products|contact|markets|resources)/);
  }
});

test("Blog renderer exposes a table of contents and preserves internal-link equity", () => {
  const page = read("src/app/blog/[slug]/page.tsx");
  const markdown = read("src/lib/markdown.ts");

  assert.match(page, /extractMarkdownHeadings/);
  assert.match(page, /In this guide/);
  assert.match(page, /min read/);
  assert.ok(markdown.includes("const external = /^https?:\\/\\//i.test(safe)"));
  assert.ok(markdown.includes("const attrs = external ?"));
});
