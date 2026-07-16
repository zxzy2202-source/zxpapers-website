import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const sizes = ["57x30mm", "57x40mm", "57x50mm", "80x70mm", "80x80mm", "110x80mm"];

test("thermal roll size routes use the approved product detail template", async () => {
  const routes = await Promise.all(
    sizes.map((size) => read(`src/app/products/thermal-rolls/${size}/page.tsx`)),
  );

  routes.forEach((route, index) => {
    const size = sizes[index];
    assert.match(route, /ProductDetailTemplate/);
    assert.match(route, new RegExp(`thermal-roll-${size}`));
    assert.match(route, /resolveProductDetailImages/);
    assert.match(route, /buildProductDetailMetadata/);
    assert.match(route, /buildProductDetailSchemas/);
    assert.match(route, /schemas\.product/);
    assert.match(route, /schemas\.breadcrumb/);
    assert.match(route, /schemas\.faq/);
  });
});

test("thermal roll configs are distinct and retain buyer-specific procurement data", async () => {
  const configs = await Promise.all(
    sizes.map((size) => read(`src/config/product-pages/thermal-roll-${size}.ts`)),
  );

  configs.forEach((config, index) => {
    const size = sizes[index];
    assert.match(config, new RegExp(`/products/thermal-rolls/${size}`));
    assert.match(config, /createThermalRollDetailConfig/);
    assert.match(config, /referencePacking/);
    assert.match(config, /applications/);
    assert.match(config, /keywords/);
  });

  assert.equal(new Set(configs).size, sizes.length);
});

test("thermal roll factory sets evidence-bounded B2B content and related products", async () => {
  const [factory, slots, resolver] = await Promise.all([
    read("src/config/product-pages/thermal-roll-detail-config.ts"),
    read("src/config/imageSlots.ts"),
    read("src/lib/product-pages/product-detail-images.ts"),
  ]);

  assert.match(factory, /printer model/i);
  assert.match(factory, /core/i);
  assert.match(factory, /outer diameter/i);
  assert.match(factory, /reference packing/i);
  assert.match(factory, /minimum order|MOQ/i);
  assert.match(factory, /production timing|delivery window/i);
  assert.match(factory, /confirmed after|confirm/i);
  assert.match(factory, /evidence/i);
  assert.match(factory, /relatedProducts/);
  assert.doesNotMatch(factory, /MOQ:\s*(500|1,000) rolls/i);
  assert.doesNotMatch(factory, /7.{0,3}15 days/i);

  for (const size of sizes) {
    assert.match(slots, new RegExp(`thermal-roll-${size}:hero`));
  }

  for (const suffix of ["application", "quality", "risk", "specification", "workflow", "faq"]) {
    assert.match(slots, new RegExp(`thermal-rolls:detail-${suffix}`));
  }

  assert.match(resolver, /getSlotImages/);
  assert.match(resolver, /relatedProducts/);
  assert.match(resolver, /ResolvedProductDetailImages/);
});
