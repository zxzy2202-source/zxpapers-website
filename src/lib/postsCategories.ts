/**
 * 资源中心分类常量 — 纯前端安全（不引用任何 Node API）
 * 拆出来避免 client component 从 postsStore.ts 拉到 fs/promises
 */

export const RESOURCE_CATEGORIES = [
  { value: "application-cases",   label: "Application Cases (应用案例)" },
  { value: "oem-guide",           label: "OEM Guide (代工指南)" },
  { value: "product-knowledge",   label: "Product Knowledge (产品知识)" },
  { value: "industry-insights",   label: "Industry Insights (行业洞察)" },
] as const;

export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number]["value"];
