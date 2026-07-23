import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("public settings use tagged cross-request caches", async () => {
  const [seo, hero, images] = await Promise.all([
    read("src/lib/seoStore.ts"),
    read("src/lib/heroStore.ts"),
    read("src/lib/imageSlotStore.ts"),
  ]);

  for (const source of [seo, hero, images]) {
    assert.match(source, /unstable_cache/);
    assert.match(source, /revalidate:\s*PUBLIC_[A-Z_]+_CACHE_SECONDS/);
    assert.match(source, /tags:\s*\[PUBLIC_[A-Z_]+_CACHE_TAG\]/);
    assert.match(source, /revalidateTag\(PUBLIC_[A-Z_]+_CACHE_TAG\)/);
  }
});

test("public rendering avoids direct uncached settings readers", async () => {
  const [layout, home, imageUtils] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/app/page.tsx"),
    read("src/lib/imageSlotUtils.ts"),
  ]);

  assert.match(layout, /readPublicSeo\(\)/);
  assert.doesNotMatch(layout, /\breadSeo\(\)/);
  assert.match(home, /readPublicHero\(\)/);
  assert.doesNotMatch(home, /\breadHero\(\)/);
  assert.match(imageUtils, /readPublicOverrides\(\)/);
  assert.doesNotMatch(imageUtils, /\breadOverrides\(\)/);
});
