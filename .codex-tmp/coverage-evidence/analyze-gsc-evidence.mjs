import fs from "node:fs/promises";

const inputPath = "E:/website/zxpapers-website-main/.codex-tmp/coverage-evidence/extracted-workbooks.json";
const outputPath = "E:/website/zxpapers-website-main/.codex-tmp/coverage-evidence/evidence-analysis.json";
const localBase = "http://127.0.0.1:3101";
const languages = new Set([
  "ro", "de", "fr", "es", "it", "pt", "pl", "nl", "tr", "ar", "ja", "ko",
  "ru", "zh", "hi", "vi", "th", "id", "ms",
]);

const extracted = JSON.parse(await fs.readFile(inputPath, "utf8"));
const validationRows = extracted.validation.sheets["表格"].values.slice(1);
const duplicateRows = extracted.drilldown.sheets["表格"].values.slice(1);

function increment(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}

function sortedCounts(map) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([key, count]) => ({ key, count }));
}

function classify(urlText) {
  const url = new URL(urlText);
  const segments = url.pathname.split("/").filter(Boolean);
  const language = languages.has(segments[0]) ? segments.shift() : null;
  const path = `/${segments.join("/")}`;

  let pattern = "other";
  if (segments.includes("product-category")) pattern = "product-category";
  else if (segments.includes("product-tag")) pattern = "product-tag";
  else if (segments.includes("page")) pattern = "pagination";
  else if (segments[0] === "posts") pattern = "posts-archive";
  else if (segments[0] === "about-us" && segments[1] === "blog") pattern = "legacy-blog";
  else if (segments[0] === "product") pattern = "legacy-product";
  else if (segments[0]?.startsWith("wp-")) pattern = "wordpress-system";
  else if (segments.length === 1) pattern = "legacy-content-slug";

  return {
    url: urlText,
    host: url.host,
    language,
    path: url.pathname + url.search,
    strippedPath: path || "/",
    firstSegment: segments[0] ?? "/",
    pattern,
  };
}

async function probePath(sourcePath) {
  let currentPath = sourcePath;
  const chain = [];

  for (let hop = 0; hop < 6; hop += 1) {
    try {
      const response = await fetch(`${localBase}${currentPath}`, {
        method: "HEAD",
        redirect: "manual",
      });
      const location = response.headers.get("location");
      chain.push({ path: currentPath, status: response.status, location });

      if (response.status >= 300 && response.status < 400 && location) {
        const target = new URL(location, `https://www.zxpapers.com${currentPath}`);
        currentPath = target.pathname + target.search;
        continue;
      }

      return { finalStatus: response.status, finalPath: currentPath, hops: chain.length - 1, chain };
    } catch (error) {
      return {
        finalStatus: -1,
        finalPath: currentPath,
        hops: chain.length,
        chain,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  return { finalStatus: -2, finalPath: currentPath, hops: chain.length, chain, error: "redirect limit" };
}

const validation = validationRows.map(([url, lastCrawl, status]) => ({
  ...classify(url),
  lastCrawl,
  validationStatus: status,
}));
const duplicates = duplicateRows.map(([url, lastCrawl]) => ({
  ...classify(url),
  lastCrawl,
}));

const hostCounts = new Map();
const languageCounts = new Map();
const patternCounts = new Map();
const firstSegmentCounts = new Map();
for (const row of validation) {
  increment(hostCounts, row.host);
  increment(languageCounts, row.language ?? "none");
  increment(patternCounts, row.pattern);
  increment(firstSegmentCounts, row.firstSegment);
}

const probeInputs = [...new Map(
  [...validation, ...duplicates].map((row) => [row.path, row]),
).values()];
const probeResults = new Array(probeInputs.length);
const concurrency = 20;
let cursor = 0;

async function worker() {
  while (true) {
    const index = cursor;
    cursor += 1;
    if (index >= probeInputs.length) return;
    const row = probeInputs[index];
    probeResults[index] = { source: row.url, sourcePath: row.path, ...(await probePath(row.path)) };
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

const finalStatusCounts = new Map();
const hopCounts = new Map();
const finalPathCounts = new Map();
for (const result of probeResults) {
  increment(finalStatusCounts, String(result.finalStatus));
  increment(hopCounts, String(result.hops));
  increment(finalPathCounts, result.finalPath);
}

const analysis = {
  validationCount: validation.length,
  duplicateCount: duplicates.length,
  validationSummary: {
    hosts: sortedCounts(hostCounts),
    languages: sortedCounts(languageCounts),
    patterns: sortedCounts(patternCounts),
    firstSegments: sortedCounts(firstSegmentCounts).slice(0, 30),
  },
  localProbeSummary: {
    uniquePaths: probeResults.length,
    finalStatuses: sortedCounts(finalStatusCounts),
    redirectHops: sortedCounts(hopCounts),
    topFinalPaths: sortedCounts(finalPathCounts).slice(0, 30),
    errors: probeResults.filter((result) => result.finalStatus < 0),
    final404: probeResults.filter((result) => result.finalStatus === 404),
    final5xx: probeResults.filter((result) => result.finalStatus >= 500),
    otherNon200: probeResults.filter((result) =>
      result.finalStatus !== 200 &&
      result.finalStatus !== 404 &&
      result.finalStatus >= 0 &&
      result.finalStatus < 500
    ),
  },
  duplicates,
  duplicateProbeResults: probeResults.filter((result) =>
    duplicates.some((row) => row.path === result.sourcePath),
  ),
  validation,
};

await fs.writeFile(outputPath, JSON.stringify(analysis, null, 2), "utf8");

console.log(JSON.stringify({
  validationCount: analysis.validationCount,
  duplicateCount: analysis.duplicateCount,
  validationSummary: analysis.validationSummary,
  localProbeSummary: {
    uniquePaths: analysis.localProbeSummary.uniquePaths,
    finalStatuses: analysis.localProbeSummary.finalStatuses,
    redirectHops: analysis.localProbeSummary.redirectHops,
    topFinalPaths: analysis.localProbeSummary.topFinalPaths.slice(0, 15),
    final404Count: analysis.localProbeSummary.final404.length,
    final5xxCount: analysis.localProbeSummary.final5xx.length,
    errorCount: analysis.localProbeSummary.errors.length,
    otherNon200: analysis.localProbeSummary.otherNon200,
  },
  duplicateProbeResults: analysis.duplicateProbeResults,
}, null, 2));
