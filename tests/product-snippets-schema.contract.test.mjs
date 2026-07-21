import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await sourceFiles(entryPath)));
    else if (/\.(?:ts|tsx|js|jsx)$/.test(entry.name)) files.push(entryPath);
  }
  return files;
}

test("quote-led pages do not emit incomplete Product rich-result entities", async () => {
  const src = fileURLToPath(new URL("../src/", import.meta.url));
  const files = await sourceFiles(src);
  const offenders = [];

  for (const file of files) {
    const source = await readFile(file, "utf8");
    if (/["']@type["']\s*:\s*["']Product["']/.test(source)) {
    offenders.push(path.relative(root, file));
    }
  }

  assert.deepEqual(
    offenders,
    [],
    "Product schema must include a real offer, review, or aggregateRating before it is emitted",
  );
});

test("the organization catalog lists quote offers without nesting Product entities", async () => {
  const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /"@type": "OfferCatalog"/);
  assert.match(layout, /"@type": "Offer",\s*name: c\.name,\s*url:/s);
  assert.doesNotMatch(layout, /itemOffered:\s*\{\s*"@type": "Product"/s);
});
