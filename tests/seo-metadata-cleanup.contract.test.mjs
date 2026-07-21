import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("core product titles opt out of duplicate brand templating", async () => {
  const [products, oneByOne, twoByFour, threeByTwo] = await Promise.all([
    read("src/app/products/page.tsx"),
    read("src/app/products/thermal-labels/1x1in/page.tsx"),
    read("src/app/products/thermal-labels/2x4in/page.tsx"),
    read("src/app/products/thermal-labels/3x2in/page.tsx"),
  ]);

  for (const source of [products, oneByOne, twoByFour, threeByTwo]) {
    assert.match(source, /title:\s*\{ absolute:/);

    const descriptionMatch = source.match(/description:\s*(?:"([^"]+)"|'([^']+)')/);
    const description = descriptionMatch?.[1] ?? descriptionMatch?.[2];
    assert.ok(description, "core product page needs a meta description");
    assert.ok(description.length <= 160, `product description is too long: ${description}`);
    assert.doesNotMatch(description, /24h|MOQ|ISO 9001|\d+M\+/i);
  }
});

test("market metadata uses concise absolute titles", async () => {
  const markets = await read("src/config/marketCountryPages.ts");
  const metadataBlocks = [...markets.matchAll(/metadata:\s*\{([\s\S]*?)\n\s*\},\n\};/g)];

  for (const [, block] of metadataBlocks) {
    const title = block.match(/title:\s*\{ absolute: "([^"]+)" \}/)?.[1];
    if (!title) continue;
    assert.ok(title.length <= 60, `market title is too long: ${title}`);

    const description = block.match(/description:\s*"([^"]+)"/)?.[1];
    assert.ok(description, `market page needs a meta description: ${title}`);
    assert.ok(description.length <= 160, `market description is too long: ${description}`);
    assert.doesNotMatch(description, /24h|MOQ|ISO 9001|\d+M\+/i);
  }
});

test("resource metadata is complete and date-neutral", async () => {
  const [resources, insights] = await Promise.all([
    read("src/app/resources/page.tsx"),
    read("src/app/resources/industry-insights/page.tsx"),
  ]);

  assert.doesNotMatch(resources, /and\."/);
  assert.doesNotMatch(insights, /Trends 2025/);
  assert.match(insights, /Insights & Market Updates/);
});
