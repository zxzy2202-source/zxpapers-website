import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const applicationSlugs = [
  "government-ncr-forms",
  "port-customs-air-cargo-ncr-forms",
  "field-service-ncr-forms",
  "auto-repair-ncr-forms",
  "logistics-warehouse-ncr-forms",
  "medical-pharmacy-ncr-forms",
];

const applicationHeroSlots = applicationSlugs.map((slug) => `ncr-applications:${slug}:hero`);

const requiredFiles = [
  "src/app/products/ncr-applications-data.ts",
  ...applicationSlugs.map((slug) => `src/app/products/${slug}/page.tsx`),
];

const requiredTextByFile = {
  "src/app/products/ncr-applications-data.ts": applicationSlugs,
  "src/app/products/page.tsx": ["ncrApplicationPages"],
  "src/app/products/ncr-forms/page.tsx": ["ncrApplicationPages"],
  "src/app/products/custom-ncr-forms/page.tsx": ["ncrApplicationPages"],
  "src/config/navigation.ts": applicationSlugs,
  "src/config/imageSlots.ts": applicationHeroSlots,
  "src/components/products/NcrApplicationShowcasePage.tsx": ["application.heroSlot"],
  "src/app/sitemap.ts": applicationSlugs,
  "public/llms.txt": applicationSlugs,
  "src/components/layout/WhatsAppFAB.tsx": ["hidden sm:flex"],
};

const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing file: ${file}`);
  }
}

for (const [file, texts] of Object.entries(requiredTextByFile)) {
  const abs = join(root, file);
  if (!existsSync(abs)) {
    errors.push(`Missing file for text check: ${file}`);
    continue;
  }
  const content = readFileSync(abs, "utf8");
  for (const text of texts) {
    if (!content.includes(text)) {
      errors.push(`Missing "${text}" in ${file}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`NCR application coverage OK: ${applicationSlugs.length} routes wired.`);
