import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const route = readFileSync("src/app/products/shipping-labels/page.tsx", "utf8");
const componentPath = "src/components/products/ShippingLabelsDetailPage.tsx";

test("shipping labels route uses its dedicated detail component", () => {
  assert.match(route, /ShippingLabelsDetailPage/);
  assert.doesNotMatch(route, /ProductCategoryShowcaseTemplate/);
  assert.doesNotThrow(() => readFileSync(componentPath, "utf8"));
});

test("route publishes Product, Breadcrumb, FAQ, and HowTo schemas", () => {
  for (const schemaType of ["Product", "BreadcrumbList", "FAQPage", "HowTo"]) {
    assert.match(route, new RegExp(`"@type": "${schemaType}"`));
  }
});

test("visible workflow and HowTo use the same four step names", () => {
  for (const step of [
    "Send printer and label details",
    "Approve sample and packing specification",
    "Verify the first production batch",
    "Reorder by the approved SKU",
  ]) {
    assert.match(route, new RegExp(step));
  }
  assert.match(route, /workflowSteps\.map/);
});

test("page component contains the approved operations sections", () => {
  const component = readFileSync(componentPath, "utf8");
  for (const section of [
    "What Are Direct Thermal Shipping Labels?",
    "Stop the failures that slow a packing line",
    "Rolls or fanfold? Choose from the workflow",
    "Confirm printer fit before production",
    "Build a specification your team can reorder",
    "Quality controls behind every repeat batch",
  ]) {
    assert.match(component, new RegExp(section.replace(/[?]/g, "\\?")));
  }
});

test("route defines at least nine visible FAQs from one shared array", () => {
  const faqEntries = route.match(/question:/g) ?? [];
  assert.ok(faqEntries.length >= 9, `expected at least 9 FAQs, found ${faqEntries.length}`);
  assert.match(route, /faqs\.map/);
});
