import type { SlotKey } from "@/config/imageSlots";

export interface ProductCategoryImageConfig {
  slot: SlotKey;
  fallback: string;
  alt: string;
}

export interface ProductCategoryFamily {
  id: string;
  label: string;
  title: string;
  description: string;
  buyerFit: string;
  href: string;
  linkLabel: string;
  featured?: boolean;
  image: ProductCategoryImageConfig;
}

export interface ProductCategorySize {
  slug: string;
  label: string;
  market: string;
  badge?: string;
  use: string;
}

export interface ProductCategoryApplication {
  id: string;
  title: string;
  description: string;
  confirm: string;
  href: string;
  linkLabel: string;
  image: ProductCategoryImageConfig;
}

export interface ProductCategorySelectionStep {
  step: string;
  title: string;
  description: string;
  inputs: string[];
}

export interface ProductCategoryFaq {
  q: string;
  a: string;
}

export interface ProductCategoryConfig {
  kind: "category";
  canonicalPath: string;
  categoryName: string;
  alternateNames: string[];
  audience: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    image: ProductCategoryImageConfig;
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter?: string;
    description: string;
    trustBadges: string[];
    facts: Array<{ value: string; label: string }>;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  jumpLinks: Array<{ label: string; href: string }>;
  families: ProductCategoryFamily[];
  sizes: ProductCategorySize[];
  applications: ProductCategoryApplication[];
  selectionSteps: ProductCategorySelectionStep[];
  evidence: {
    image: ProductCategoryImageConfig;
    label: string;
    title: string;
    description: string;
    checks: Array<{ title: string; description: string }>;
    note: string;
  };
  faq: ProductCategoryFaq[];
  inquiry: {
    label: string;
    title: string;
    description: string;
    checklist: string[];
    productName: string;
    initialMessage: string;
    responseNote?: string;
    successMessage?: string;
  };
  breadcrumbs: Array<{ name: string; path: string }>;
  relatedPrograms: Array<{ label: string; href: string }>;
}

export interface ResolvedProductCategoryImages {
  hero: string;
  quality: string;
  families: Record<string, string>;
  applications: Record<string, string>;
}
