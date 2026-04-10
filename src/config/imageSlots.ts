export type ImageAspectRatio = "16:9" | "4:3" | "1:1";

export interface ImageSlotDefinition {
  slot: string;
  pageKey: string;
  pageName: string;
  pagePath: string;
  sectionKey: string;
  sectionName: string;
  slotName: string;
  label: string;
  description: string;
  aspectRatio: ImageAspectRatio;
  sortOrder: number;
  group: string;
}

function defineSlot(input: Omit<ImageSlotDefinition, "slot">): ImageSlotDefinition {
  return {
    ...input,
    slot: `${input.pageKey}:${input.sectionKey}:${input.slotName}`,
  };
}

export const IMAGE_SLOTS: ImageSlotDefinition[] = [
  defineSlot({ pageKey: "home", pageName: "首页", pagePath: "/", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "首页 Hero 背景图", description: "首页顶部大图背景（工厂或产品展示）", aspectRatio: "16:9", sortOrder: 10, group: "首页" }),
  defineSlot({ pageKey: "home", pageName: "首页", pagePath: "/", sectionKey: "featured-products", sectionName: "热销产品", slotName: "thermal-rolls-card", label: "首页热销产品 - 热敏卷纸图", description: "首页热销产品卡片中的热敏卷纸图片", aspectRatio: "4:3", sortOrder: 20, group: "首页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "产品总览页 Hero 背景图", description: "产品总览页顶部背景大图", aspectRatio: "16:9", sortOrder: 30, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "thermal-rolls", label: "产品页 - 热敏卷纸封面图", description: "产品总览页热敏卷纸分类卡片图", aspectRatio: "4:3", sortOrder: 40, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "thermal-labels", label: "产品页 - 热敏标签封面图", description: "产品总览页热敏标签分类卡片图", aspectRatio: "4:3", sortOrder: 50, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "can-labels", label: "产品页 - 罐头标签封面图", description: "产品总览页罐头标签分类卡片图", aspectRatio: "4:3", sortOrder: 60, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "detergent-labels", label: "产品页 - 洗涤剂标签封面图", description: "产品总览页洗涤剂标签分类卡片图", aspectRatio: "4:3", sortOrder: 70, group: "产品页" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "hero", sectionName: "Hero", slotName: "default-hero", label: "热敏卷纸页 Hero 图", description: "热敏卷纸各规格页面顶部产品主图", aspectRatio: "16:9", sortOrder: 80, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-paper-rolls-blank", pageName: "空白热敏卷纸", pagePath: "/products/thermal-paper-rolls/blank", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "空白热敏卷纸页 Hero 图", description: "空白热敏卷纸页面顶部产品主图", aspectRatio: "16:9", sortOrder: 90, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-paper-rolls-custom", pageName: "定制热敏卷纸", pagePath: "/products/thermal-paper-rolls/custom-printed", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "定制热敏卷纸页 Hero 图", description: "定制印刷热敏卷纸页面顶部产品主图", aspectRatio: "16:9", sortOrder: 100, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "hero", sectionName: "Hero", slotName: "default-hero", label: "热敏标签页 Hero 图", description: "热敏标签各规格页面顶部产品主图", aspectRatio: "16:9", sortOrder: 110, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels-blank", pageName: "空白热敏标签", pagePath: "/products/thermal-labels/blank", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "空白热敏标签页 Hero 图", description: "空白热敏标签页面顶部产品主图", aspectRatio: "16:9", sortOrder: 120, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels-custom", pageName: "定制热敏标签", pagePath: "/products/thermal-labels/custom-printed", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "定制印刷热敏标签页 Hero 图", description: "定制印刷热敏标签页面顶部产品主图", aspectRatio: "16:9", sortOrder: 130, group: "热敏标签" }),
  defineSlot({ pageKey: "about", pageName: "关于我们", pagePath: "/about", sectionKey: "factory-showcase", sectionName: "工厂展示", slotName: "aerial-view", label: "关于我们 - 工厂鸟瞰图", description: "关于我们页面工厂鸟瞰全景图", aspectRatio: "16:9", sortOrder: 140, group: "关于我们" }),
  defineSlot({ pageKey: "about", pageName: "关于我们", pagePath: "/about", sectionKey: "factory-showcase", sectionName: "工厂展示", slotName: "production-line", label: "关于我们 - 生产线图", description: "关于我们页面生产线实拍图", aspectRatio: "4:3", sortOrder: 150, group: "关于我们" }),
  defineSlot({ pageKey: "oem", pageName: "OEM", pagePath: "/oem", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "OEM 页 Hero 背景图", description: "OEM 服务页顶部背景大图", aspectRatio: "16:9", sortOrder: 160, group: "OEM" }),
  defineSlot({ pageKey: "oem", pageName: "OEM", pagePath: "/oem", sectionKey: "factory-showcase", sectionName: "工厂展示", slotName: "main-image", label: "OEM 页 - 工厂展示图", description: "OEM 页面工厂实力展示图", aspectRatio: "4:3", sortOrder: 170, group: "OEM" }),
  defineSlot({ pageKey: "manufacturing", pageName: "生产制造", pagePath: "/manufacturing", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "生产制造页 Hero 背景图", description: "生产制造页顶部背景大图", aspectRatio: "16:9", sortOrder: 180, group: "生产制造" }),
  defineSlot({ pageKey: "contact", pageName: "联系我们", pagePath: "/contact", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "联系我们页 Hero 背景图", description: "联系我们页顶部背景大图", aspectRatio: "16:9", sortOrder: 190, group: "联系我们" }),
  defineSlot({ pageKey: "markets-africa", pageName: "非洲市场", pagePath: "/markets/africa", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "非洲市场页 Hero 背景图", description: "非洲市场页顶部背景大图", aspectRatio: "16:9", sortOrder: 200, group: "市场页" }),
  defineSlot({ pageKey: "markets-middle-east", pageName: "中东市场", pagePath: "/markets/middle-east", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "中东市场页 Hero 背景图", description: "中东市场页顶部背景大图", aspectRatio: "16:9", sortOrder: 210, group: "市场页" }),
  defineSlot({ pageKey: "markets-southeast-asia", pageName: "东南亚市场", pagePath: "/markets/southeast-asia", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "东南亚市场页 Hero 背景图", description: "东南亚市场页顶部背景大图", aspectRatio: "16:9", sortOrder: 220, group: "市场页" }),
];

export const IMAGE_SLOT_GROUPS = IMAGE_SLOTS.reduce<Record<string, ImageSlotDefinition[]>>((acc, slot) => {
  if (!acc[slot.group]) acc[slot.group] = [];
  acc[slot.group].push(slot);
  return acc;
}, {});

export const IMAGE_SLOT_PAGES = Array.from(
  new Map(
    IMAGE_SLOTS.map((slot) => [slot.pageKey, { pageKey: slot.pageKey, pageName: slot.pageName, pagePath: slot.pagePath, group: slot.group }])
  ).values()
);

export function getSlotInfo(slot: string): ImageSlotDefinition | undefined {
  return IMAGE_SLOTS.find((item) => item.slot === slot);
}

export function getSlotsByPageKey(pageKey?: string | null): ImageSlotDefinition[] {
  if (!pageKey || pageKey === "all") return IMAGE_SLOTS;
  return IMAGE_SLOTS.filter((slot) => slot.pageKey === pageKey);
}

export function getLegacySlotAliases(): Record<string, string> {
  return {
    "home:hero": "home:hero:background",
    "home:product-rolls": "home:featured-products:thermal-rolls-card",
    "products:hero": "products:hero:background",
    "products:thermal-rolls": "products:category-cards:thermal-rolls",
    "products:thermal-labels": "products:category-cards:thermal-labels",
    "products:can-labels": "products:category-cards:can-labels",
    "products:detergent-labels": "products:category-cards:detergent-labels",
    "thermal-rolls:hero": "thermal-rolls:hero:default-hero",
    "thermal-paper-rolls:blank-hero": "thermal-paper-rolls-blank:hero:background",
    "thermal-paper-rolls:custom-hero": "thermal-paper-rolls-custom:hero:background",
    "thermal-labels:hero": "thermal-labels:hero:default-hero",
    "thermal-labels:blank-hero": "thermal-labels-blank:hero:background",
    "thermal-labels:custom-hero": "thermal-labels-custom:hero:background",
    "about:factory-aerial": "about:factory-showcase:aerial-view",
    "about:factory-line": "about:factory-showcase:production-line",
    "oem:hero": "oem:hero:background",
    "oem:factory": "oem:factory-showcase:main-image",
    "manufacturing:hero": "manufacturing:hero:background",
    "contact:hero": "contact:hero:background",
    "markets:africa-hero": "markets-africa:hero:background",
    "markets:middle-east-hero": "markets-middle-east:hero:background",
    "markets:southeast-asia-hero": "markets-southeast-asia:hero:background",
  };
}

export function normalizeSlotKey(slot: string): string {
  return getLegacySlotAliases()[slot] || slot;
}

export type ImageSlot = ImageSlotDefinition;

export function getLegacySlotKey(slot: string): string {
  const aliases = getLegacySlotAliases();
  const found = Object.entries(aliases).find(([, value]) => value === slot);
  return found?.[0] || slot;
}

export function getSlotDisplayPage(slot: ImageSlotDefinition): string {
  return slot.pagePath;
}

export function getAspectRatioValue(ratio: ImageAspectRatio): number {
  if (ratio === "1:1") return 1;
  if (ratio === "4:3") return 4 / 3;
  return 16 / 9;
}

export function formatAspectRatioLabel(ratio: ImageAspectRatio): string {
  return ratio;
}

export function buildImageSlotSeedData() {
  return IMAGE_SLOTS.map((slot) => ({
    slotKey: slot.slot,
    pageKey: slot.pageKey,
    pageName: slot.pageName,
    pagePath: slot.pagePath,
    sectionKey: slot.sectionKey,
    sectionName: slot.sectionName,
    slotName: slot.slotName,
    label: slot.label,
    description: slot.description,
    aspectRatio: slot.aspectRatio,
    sortOrder: slot.sortOrder,
    isActive: true,
  }));
}
