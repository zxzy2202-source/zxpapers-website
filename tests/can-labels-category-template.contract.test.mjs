import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("can labels route uses the reusable category architecture", async () => {
  const route = await read("src/app/products/can-labels/page.tsx");

  assert.match(route, /ProductCategoryTemplate/);
  assert.match(route, /canLabelsCategoryConfig/);
  assert.match(route, /resolveProductCategoryImages/);
  assert.match(route, /buildProductCategoryMetadata/);
  assert.match(route, /buildProductCategorySchemas/);
  assert.match(route, /schemas\.collection/);
  assert.match(route, /schemas\.breadcrumb/);
  assert.match(route, /schemas\.faq/);
  assert.doesNotMatch(route, /ProductCategoryShowcaseTemplate/);
  assert.doesNotMatch(route, /schemas\.product/);
});

test("can labels config keeps approved product and size destinations", async () => {
  const [config, sizeRegistry] = await Promise.all([
    read("src/config/product-categories/can-labels.ts"),
    read("src/app/products/can-labels/can-labels-data.tsx"),
  ]);

  for (const destination of [
    "/products/can-labels/custom-printed",
    "/products/can-labels/blank",
  ]) {
    assert.match(config, new RegExp(destination.replaceAll("/", "\\/")));
  }
  assert.match(config, /canLabelSizes\.map/);
  for (const slug of ["211x400", "211x603", "300x407", "307x510", "401x700"]) {
    assert.match(sizeRegistry, new RegExp(`slug:\\s*"${slug}"`));
  }

  assert.match(config, /Machine-Ready Roll Labels/);
  assert.match(config, /Custom Printed Filling Line Labels/);
  assert.match(config, /Tender or technical-submission requirements/);
  assert.match(config, /Container and surface/);
  assert.match(config, /Filling, labeling and exposure/);
  assert.match(config, /Material, adhesive and finish/);
  assert.match(config, /Artwork, roll and commercial/);

  const families = config.slice(config.indexOf("families: ["), config.indexOf("sizes:"));
  assert.doesNotMatch(families, /href:\s*"#/);
});

test("filling line label copy respects product and evidence boundaries", async () => {
  const config = await read("src/config/product-categories/can-labels.ts");

  assert.match(config, /direct food contact.*separate|separate.*direct food contact/is);
  assert.match(config, /actual container|production container/i);
  assert.match(config, /surface|coating/i);
  assert.doesNotMatch(config, /Custom Printed Can Labels|Blank Can Labels|Can and surface/);
  assert.doesNotMatch(config, /FDA 21 CFR|BPA[- ]?free|ISO 9001/i);
  assert.doesNotMatch(config, /MOQ:\s*\d|10.?18 days|7 days|24h|24 hours/i);
  assert.doesNotMatch(config, /waterproof|oil-proof|chemical-proof/i);
});

test("application copy keeps compliance claims evidence-bounded", async () => {
  const data = await read("src/app/products/can-labels/can-labels-data.tsx");

  assert.match(data, /buyer-approved ingredient information/i);
  assert.match(data, /final market and project requirements are reviewed separately/i);
  assert.doesNotMatch(data, /with ingredient compliance/i);
});

test("category schema names sizes from the active category", async () => {
  const schema = await read("src/lib/product-pages/product-category-schema.ts");

  assert.match(schema, /`\$\{size\.label\} \$\{config\.categoryName\}`/);
  assert.doesNotMatch(schema, /`\$\{size\.label\} Thermal Labels`/);
});

test("B2B inquiry attribution recognizes machine-ready filling-line labels", async () => {
  const [form, printed, blank] = await Promise.all([
    read("src/components/shared/InquiryForm.tsx"),
    read("src/app/products/can-labels/custom-printed/page.tsx"),
    read("src/app/products/can-labels/blank/page.tsx"),
  ]);

  assert.match(form, /machine-ready roll label|filling line label/i);
  assert.match(printed, /Custom Printed Machine-Ready Roll Labels for Filling Lines/);
  assert.match(blank, /Blank Machine-Ready Roll Labels for Filling Lines/);
});

test("shared category template adapts a single compact product route", async () => {
  const template = await read("src/components/products/category/ProductCategoryTemplate.tsx");

  assert.match(template, /singleCompactFamily/);
  assert.match(template, /compactFamilies\.length === 1/);
  assert.match(template, /id="inquiry"/);
  assert.match(template, /href="\/contact"/);
  assert.match(template, /href=\{whatsappHref\}/);
});

test("all filling-line detail routes own distinct indexable metadata", async () => {
  const slugs = [
    "211x400",
    "211x603",
    "300x407",
    "307x510",
    "401x700",
    "blank",
    "custom-printed",
  ];

  for (const slug of slugs) {
    const route = await read(`src/app/products/can-labels/${slug}/page.tsx`);
    assert.match(route, /buildMetadata\s*\(/, `${slug} must use the shared metadata factory`);
    assert.match(
      route,
      new RegExp(`path:\\s*"/products/can-labels/${slug}"`),
      `${slug} must own its canonical path`,
    );
  }
});

test("filling line detail copy uses procurement-ready container language", async () => {
  const paths = [
    "src/app/products/can-labels/211x400/page.tsx",
    "src/app/products/can-labels/211x603/page.tsx",
    "src/app/products/can-labels/300x407/page.tsx",
    "src/app/products/can-labels/307x510/page.tsx",
    "src/app/products/can-labels/401x700/page.tsx",
  ];
  const routes = (await Promise.all(paths.map(read))).join("\\n");

  assert.match(routes, /machine-ready/i);
  assert.match(routes, /Container Reference/);
  assert.doesNotMatch(routes, /Can Size/);
});

test("filling-line detail copy avoids unsupported fixed commercial and compliance claims", async () => {
  const paths = [
    "src/app/products/can-labels/211x400/page.tsx",
    "src/app/products/can-labels/211x603/page.tsx",
    "src/app/products/can-labels/300x407/page.tsx",
    "src/app/products/can-labels/307x510/page.tsx",
    "src/app/products/can-labels/401x700/page.tsx",
    "src/app/products/can-labels/blank/page.tsx",
    "src/app/products/can-labels/custom-printed/page.tsx",
  ];
  const routes = (await Promise.all(paths.map(read))).join("\n");

  assert.doesNotMatch(routes, /MOQ\s*(?:from|:)?\s*\d|\d+\s*(?:business\s*)?days/i);
  assert.doesNotMatch(routes, /FDA\s*compliant|ISO\s*9001|BPA[- ]?free|food[- ]safe/i);
  assert.doesNotMatch(routes, /waterproof|chemical[- ]proof|solvent[- ]proof/i);
  assert.match(routes, /Direct food contact is a separate scope/i);
});

test("filling-line breadcrumbs and standalone schemas use canonical route data", async () => {
  const [template, blank, custom] = await Promise.all([
    read("src/components/products/SizeDetailPage.tsx"),
    read("src/app/products/can-labels/blank/page.tsx"),
    read("src/app/products/can-labels/custom-printed/page.tsx"),
  ]);

  assert.match(
    template,
    /"can-labels":\s*\{[\s\S]*?parentPath:\s*"\/products\/can-labels"[\s\S]*?detailPathPrefix:\s*"\/products\/can-labels"/,
  );
  assert.match(template, /item:\s*`\$\{SITE\.domain\}\$\{resolvedParentPath\}`/);
  for (const route of [blank, custom]) {
    assert.match(route, /const heroImage = await getSlotImage/);
    assert.match(route, /"image": heroImage/);
    assert.match(route, /src=\{heroImage\}/);
  }
});
