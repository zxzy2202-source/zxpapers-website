/**
 * 前台页面图片槽位配置
 *
 * slot: 唯一标识符，存入 ImageAsset.page 字段
 * label: 后台显示名称
 * page: 前台页面路径（用于显示）
 * description: 图片用途说明
 * group: 分组，用于后台下拉菜单分组展示
 */
export interface ImageSlot {
  slot: string;
  label: string;
  page: string;
  description: string;
  group: string;
}

export const IMAGE_SLOTS: ImageSlot[] = [
  // ── 首页 ──────────────────────────────────────────────
  {
    slot: "home:hero",
    label: "首页 Hero 背景图",
    page: "/",
    description: "首页顶部大图背景（工厂/产品展示）",
    group: "首页",
  },
  {
    slot: "home:product-rolls",
    label: "首页热销产品 - 热敏卷纸图",
    page: "/",
    description: "首页热销产品卡片中的热敏卷纸图片",
    group: "首页",
  },

  // ── 产品页 ────────────────────────────────────────────
  {
    slot: "products:hero",
    label: "产品总览页 Hero 背景图",
    page: "/products",
    description: "产品总览页顶部背景大图",
    group: "产品页",
  },
  {
    slot: "products:thermal-rolls",
    label: "产品页 - 热敏卷纸封面图",
    page: "/products",
    description: "产品总览页热敏卷纸分类卡片图",
    group: "产品页",
  },
  {
    slot: "products:thermal-labels",
    label: "产品页 - 热敏标签封面图",
    page: "/products",
    description: "产品总览页热敏标签分类卡片图",
    group: "产品页",
  },
  {
    slot: "products:can-labels",
    label: "产品页 - 罐头标签封面图",
    page: "/products",
    description: "产品总览页罐头标签分类卡片图",
    group: "产品页",
  },
  {
    slot: "products:detergent-labels",
    label: "产品页 - 洗涤剂标签封面图",
    page: "/products",
    description: "产品总览页洗涤剂标签分类卡片图",
    group: "产品页",
  },

  // ── 热敏卷纸子页 ──────────────────────────────────────
  {
    slot: "thermal-rolls:hero",
    label: "热敏卷纸页 Hero 图",
    page: "/products/thermal-rolls/*",
    description: "热敏卷纸各规格页面顶部产品主图",
    group: "热敏卷纸",
  },
  {
    slot: "thermal-paper-rolls:blank-hero",
    label: "空白热敏卷纸页 Hero 图",
    page: "/products/thermal-paper-rolls/blank",
    description: "空白热敏卷纸页面顶部产品主图",
    group: "热敏卷纸",
  },
  {
    slot: "thermal-paper-rolls:custom-hero",
    label: "定制热敏卷纸页 Hero 图",
    page: "/products/thermal-paper-rolls/custom-printed",
    description: "定制印刷热敏卷纸页面顶部产品主图",
    group: "热敏卷纸",
  },

  // ── 热敏标签子页 ──────────────────────────────────────
  {
    slot: "thermal-labels:hero",
    label: "热敏标签页 Hero 图",
    page: "/products/thermal-labels/*",
    description: "热敏标签各规格页面顶部产品主图",
    group: "热敏标签",
  },
  {
    slot: "thermal-labels:blank-hero",
    label: "空白热敏标签页 Hero 图",
    page: "/products/thermal-labels/blank",
    description: "空白热敏标签页面顶部产品主图",
    group: "热敏标签",
  },
  {
    slot: "thermal-labels:custom-hero",
    label: "定制热敏标签页 Hero 图",
    page: "/products/thermal-labels/custom-printed",
    description: "定制印刷热敏标签页面顶部产品主图",
    group: "热敏标签",
  },

  // ── 关于我们 ──────────────────────────────────────────
  {
    slot: "about:factory-aerial",
    label: "关于我们 - 工厂鸟瞰图",
    page: "/about",
    description: "关于我们页面工厂鸟瞰全景图",
    group: "关于我们",
  },
  {
    slot: "about:factory-line",
    label: "关于我们 - 生产线图",
    page: "/about",
    description: "关于我们页面生产线实拍图",
    group: "关于我们",
  },

  // ── OEM 页 ────────────────────────────────────────────
  {
    slot: "oem:hero",
    label: "OEM 页 Hero 背景图",
    page: "/oem",
    description: "OEM 服务页顶部背景大图",
    group: "OEM",
  },
  {
    slot: "oem:factory",
    label: "OEM 页 - 工厂展示图",
    page: "/oem",
    description: "OEM 页面工厂实力展示图",
    group: "OEM",
  },

  // ── 生产制造 ──────────────────────────────────────────
  {
    slot: "manufacturing:hero",
    label: "生产制造页 Hero 背景图",
    page: "/manufacturing",
    description: "生产制造页顶部背景大图",
    group: "生产制造",
  },

  // ── 联系我们 ──────────────────────────────────────────
  {
    slot: "contact:hero",
    label: "联系我们页 Hero 背景图",
    page: "/contact",
    description: "联系我们页顶部背景大图",
    group: "联系我们",
  },

  // ── 市场页 ────────────────────────────────────────────
  {
    slot: "markets:africa-hero",
    label: "非洲市场页 Hero 背景图",
    page: "/markets/africa",
    description: "非洲市场页顶部背景大图",
    group: "市场页",
  },
  {
    slot: "markets:middle-east-hero",
    label: "中东市场页 Hero 背景图",
    page: "/markets/middle-east",
    description: "中东市场页顶部背景大图",
    group: "市场页",
  },
  {
    slot: "markets:southeast-asia-hero",
    label: "东南亚市场页 Hero 背景图",
    page: "/markets/southeast-asia",
    description: "东南亚市场页顶部背景大图",
    group: "市场页",
  },
];

/** 按 group 分组，用于后台下拉菜单 */
export const IMAGE_SLOT_GROUPS = IMAGE_SLOTS.reduce<
  Record<string, ImageSlot[]>
>((acc, slot) => {
  if (!acc[slot.group]) acc[slot.group] = [];
  acc[slot.group].push(slot);
  return acc;
}, {});

/** 通过 slot 值查找配置 */
export function getSlotInfo(slot: string): ImageSlot | undefined {
  return IMAGE_SLOTS.find((s) => s.slot === slot);
}
