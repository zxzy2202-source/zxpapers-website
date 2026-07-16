import type { SlotKey } from "@/config/imageSlots";

export type ProductFactIcon = "printer" | "roll" | "adhesive" | "approval";

export interface ProductDetailImageConfig {
  slot: SlotKey;
  fallback: string;
  alt: string;
}

export interface ProductDecisionFact {
  icon: ProductFactIcon;
  label: string;
  value: string;
}

export interface ProductProblemResponse {
  question: string;
  consequence: string;
  response: string;
}

export interface ProductSpecificationRow {
  label: string;
  value: string;
  note?: string;
}

export interface ProductSpecificationGroup {
  title: string;
  description: string;
  rows: ProductSpecificationRow[];
}

export interface ProductApplication {
  title: string;
  description: string;
  confirm: string;
}

export interface ProductWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductEvidenceSection {
  label: string;
  title: string;
  description: string;
  checks: string[];
  note: string;
}

export interface ProductSupplyProgramItem {
  title: string;
  description: string;
  buyerValue: string;
}

export interface ProductSupplyProgram {
  label: string;
  title: string;
  description: string;
  buyers: string[];
  items: ProductSupplyProgramItem[];
  note: string;
}

export interface ProductDetailConfig {
  kind: "detail";
  slug: string;
  canonicalPath: string;
  productName: string;
  categoryName: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  images: {
    hero: ProductDetailImageConfig;
    application: ProductDetailImageConfig;
    quality: ProductDetailImageConfig;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  facts: ProductDecisionFact[];
  directAnswer: {
    label: string;
    question: string;
    answer: string;
    checklist: string[];
  };
  supplyProgram: ProductSupplyProgram;
  problems: ProductProblemResponse[];
  specifications: ProductSpecificationGroup[];
  applications: ProductApplication[];
  workflow: ProductWorkflowStep[];
  evidence: ProductEvidenceSection;
  faq: ProductFaq[];
  inquiry: {
    label: string;
    title: string;
    description: string;
    checklist: string[];
    initialMessage: string;
    productName: string;
  };
  breadcrumbs: Array<{ name: string; path: string }>;
  relatedLinks: Array<{ label: string; href: string }>;
}

export interface ResolvedProductDetailImages {
  hero: string;
  application: string;
  quality: string;
}
