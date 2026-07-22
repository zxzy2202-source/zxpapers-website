import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";

const root = process.cwd();

async function loadValidator() {
  const source = fs.readFileSync(path.join(root, "src/lib/blogPostValidation.ts"), "utf8");
  const javascript = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(javascript).toString("base64")}`);
}

test("high-density AI-style language blocks publication", async () => {
  const { validateBlogPost } = await loadValidator();
  const content = `
In today's fast-paced world, it is important to note that buyers must navigate the complexities of paper sourcing. This game-changer can unlock the potential of every procurement team.

## First section

When it comes to quality, this robust and innovative solution stands out from the crowd. Moreover, it can elevate your process with a seamless workflow.

## Second section

Furthermore, the ever-evolving landscape calls for a cutting-edge and revolutionary approach. Additionally, teams can delve into a comprehensive solution.

## Frequently Asked Questions

Whether you are a distributor or converter, this best-in-class choice can streamline your operation. [Contact us](/contact).
`;
  const result = validateBlogPost({ title: "Generic guide", content });

  assert.equal(result.qualityAudit.aiStyleRisk, "high");
  assert.ok(result.errors.some((issue) => issue.code === "ai-style-high-risk"));
  assert.ok(result.errors.some((issue) => issue.code === "ai-cliche-language"));
});

test("evidence and buyer-value checks remain review warnings", async () => {
  const { validateBlogPost } = await loadValidator();
  const content = `${"Buyers should review the required VAT invoice compliance and mandatory certification details with the supplier. ".repeat(75)}

## Requirements

Review the regulation before ordering.

## Supplier review

Compare the offer carefully.

## Frequently Asked Questions

[Contact the team](/contact).
`;
  const result = validateBlogPost({ title: "Compliance guide", content });

  assert.ok(result.warnings.some((issue) => issue.code === "evidence-gap"));
  assert.ok(result.warnings.some((issue) => issue.code === "low-specificity"));
  assert.ok(!result.errors.some((issue) => issue.category === "evidence"));
});

test("the six Middle East campaign articles avoid high AI-style risk", async () => {
  const { validateBlogPost } = await loadValidator();
  const source = fs.readFileSync(
    path.join(root, "src/content/blogCampaigns/middleEastThermalPaperP0.ts"),
    "utf8",
  );
  const articles = [...source.matchAll(/content: `([\s\S]*?)`,\n\s*},/g)].map((match) => match[1]);

  assert.equal(articles.length, 6);
  for (const content of articles) {
    const result = validateBlogPost({ title: "Middle East thermal paper guide", content });
    assert.notEqual(result.qualityAudit.aiStyleRisk, "high");
    assert.ok(!result.errors.some((issue) => issue.code === "ai-style-high-risk"));
  }
});
