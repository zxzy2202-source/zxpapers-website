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
  defineSlot({ pageKey: "home", pageName: "首页", pagePath: "/", sectionKey: "hero", sectionName: "Hero", slotName: "slide-2", label: "首页 Hero 轮播图 2", description: "首页顶部轮播第二张图", aspectRatio: "16:9", sortOrder: 25, group: "首页" }),
  defineSlot({ pageKey: "home", pageName: "首页", pagePath: "/", sectionKey: "hero", sectionName: "Hero", slotName: "slide-3", label: "首页 Hero 轮播图 3", description: "首页顶部轮播第三张图", aspectRatio: "16:9", sortOrder: 26, group: "首页" }),
  defineSlot({ pageKey: "home", pageName: "首页", pagePath: "/", sectionKey: "featured-products", sectionName: "热销产品", slotName: "thermal-labels-card", label: "首页热销产品 - 热敏标签图", description: "首页热销产品卡片中的热敏标签图片", aspectRatio: "4:3", sortOrder: 27, group: "首页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "产品总览页 Hero 背景图", description: "产品总览页顶部背景大图", aspectRatio: "16:9", sortOrder: 30, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "thermal-rolls", label: "产品页 - 热敏卷纸封面图", description: "产品总览页热敏卷纸分类卡片图", aspectRatio: "4:3", sortOrder: 40, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "thermal-labels", label: "产品页 - 热敏标签封面图", description: "产品总览页热敏标签分类卡片图", aspectRatio: "4:3", sortOrder: 50, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "can-labels", label: "产品页 - 罐头标签封面图", description: "产品总览页罐头标签分类卡片图", aspectRatio: "4:3", sortOrder: 60, group: "产品页" }),
  defineSlot({ pageKey: "products", pageName: "产品总览", pagePath: "/products", sectionKey: "category-cards", sectionName: "产品分类卡片", slotName: "detergent-labels", label: "产品页 - 洗涤剂标签封面图", description: "产品总览页洗涤剂标签分类卡片图", aspectRatio: "4:3", sortOrder: 70, group: "产品页" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "hero", sectionName: "Hero", slotName: "default-hero", label: "热敏卷纸页 Hero 图", description: "热敏卷纸各规格页面顶部产品主图", aspectRatio: "16:9", sortOrder: 80, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "pos", label: "热敏卷纸应用图 - POS", description: "热敏卷纸应用场景图：POS 终端", aspectRatio: "4:3", sortOrder: 81, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "restaurant", label: "热敏卷纸应用图 - 餐饮", description: "热敏卷纸应用场景图：餐饮打印", aspectRatio: "4:3", sortOrder: 82, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "retail", label: "热敏卷纸应用图 - 零售", description: "热敏卷纸应用场景图：零售收银", aspectRatio: "4:3", sortOrder: 83, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "supermarket", label: "热敏卷纸应用图 - 超市", description: "热敏卷纸应用场景图：超市", aspectRatio: "4:3", sortOrder: 84, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "hotel", label: "热敏卷纸应用图 - 酒店", description: "热敏卷纸应用场景图：酒店", aspectRatio: "4:3", sortOrder: 85, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "taxi", label: "热敏卷纸应用图 - 出租车", description: "热敏卷纸应用场景图：出租车", aspectRatio: "4:3", sortOrder: 86, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "parking", label: "热敏卷纸应用图 - 停车", description: "热敏卷纸应用场景图：停车系统", aspectRatio: "4:3", sortOrder: 87, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "mobile", label: "热敏卷纸应用图 - 移动设备", description: "热敏卷纸应用场景图：移动打印", aspectRatio: "4:3", sortOrder: 88, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "lottery", label: "热敏卷纸应用图 - 彩票", description: "热敏卷纸应用场景图：彩票机", aspectRatio: "4:3", sortOrder: 89, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "credit-card", label: "热敏卷纸应用图 - 刷卡终端", description: "热敏卷纸应用场景图：刷卡终端", aspectRatio: "4:3", sortOrder: 89, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "handheld", label: "热敏卷纸应用图 - 手持设备", description: "热敏卷纸应用场景图：手持设备", aspectRatio: "4:3", sortOrder: 89, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "hospitality", label: "热敏卷纸应用图 - 酒旅", description: "热敏卷纸应用场景图：酒店餐旅", aspectRatio: "4:3", sortOrder: 89, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-rolls", pageName: "热敏卷纸页", pagePath: "/products/thermal-rolls/*", sectionKey: "applications", sectionName: "应用场景", slotName: "kiosk", label: "热敏卷纸应用图 - 自助机", description: "热敏卷纸应用场景图：自助机", aspectRatio: "4:3", sortOrder: 89, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-paper-rolls-blank", pageName: "空白热敏卷纸", pagePath: "/products/thermal-paper-rolls/blank", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "空白热敏卷纸页 Hero 图", description: "空白热敏卷纸页面顶部产品主图", aspectRatio: "16:9", sortOrder: 90, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-paper-rolls-custom", pageName: "定制热敏卷纸", pagePath: "/products/thermal-paper-rolls/custom-printed", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "定制热敏卷纸页 Hero 图", description: "定制印刷热敏卷纸页面顶部产品主图", aspectRatio: "16:9", sortOrder: 100, group: "热敏卷纸" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "hero", sectionName: "Hero", slotName: "default-hero", label: "热敏标签页 Hero 图", description: "热敏标签各规格页面顶部产品主图", aspectRatio: "16:9", sortOrder: 110, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "ecommerce", label: "热敏标签应用图 - 电商", description: "热敏标签应用场景图：电商", aspectRatio: "4:3", sortOrder: 111, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "amazon", label: "热敏标签应用图 - 亚马逊", description: "热敏标签应用场景图：亚马逊仓配", aspectRatio: "4:3", sortOrder: 112, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "shipping", label: "热敏标签应用图 - 物流", description: "热敏标签应用场景图：物流运输", aspectRatio: "4:3", sortOrder: 113, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "warehouse", label: "热敏标签应用图 - 仓储", description: "热敏标签应用场景图：仓储", aspectRatio: "4:3", sortOrder: 114, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "logistics", label: "热敏标签应用图 - 配送", description: "热敏标签应用场景图：配送", aspectRatio: "4:3", sortOrder: 115, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "barcode", label: "热敏标签应用图 - 条码", description: "热敏标签应用场景图：条码", aspectRatio: "4:3", sortOrder: 116, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "inventory", label: "热敏标签应用图 - 库存", description: "热敏标签应用场景图：库存管理", aspectRatio: "4:3", sortOrder: 117, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "retail", label: "热敏标签应用图 - 零售", description: "热敏标签应用场景图：零售", aspectRatio: "4:3", sortOrder: 118, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "food", label: "热敏标签应用图 - 食品", description: "热敏标签应用场景图：食品", aspectRatio: "4:3", sortOrder: 119, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "pharmacy", label: "热敏标签应用图 - 医药", description: "热敏标签应用场景图：医药", aspectRatio: "4:3", sortOrder: 119, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "product", label: "热敏标签应用图 - 产品", description: "热敏标签应用场景图：产品标识", aspectRatio: "4:3", sortOrder: 119, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "crossborder", label: "热敏标签应用图 - 跨境", description: "热敏标签应用场景图：跨境物流", aspectRatio: "4:3", sortOrder: 119, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "europe", label: "热敏标签应用图 - 欧洲", description: "热敏标签应用场景图：欧洲仓配", aspectRatio: "4:3", sortOrder: 119, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "asset", label: "热敏标签应用图 - 资产", description: "热敏标签应用场景图：资产追踪", aspectRatio: "4:3", sortOrder: 119, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels", pageName: "热敏标签页", pagePath: "/products/thermal-labels/*", sectionKey: "applications", sectionName: "应用场景", slotName: "packaging", label: "热敏标签应用图 - 包装", description: "热敏标签应用场景图：包装", aspectRatio: "4:3", sortOrder: 119, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels-blank", pageName: "空白热敏标签", pagePath: "/products/thermal-labels/blank", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "空白热敏标签页 Hero 图", description: "空白热敏标签页面顶部产品主图", aspectRatio: "16:9", sortOrder: 120, group: "热敏标签" }),
  defineSlot({ pageKey: "thermal-labels-custom", pageName: "定制热敏标签", pagePath: "/products/thermal-labels/custom-printed", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "定制印刷热敏标签页 Hero 图", description: "定制印刷热敏标签页面顶部产品主图", aspectRatio: "16:9", sortOrder: 130, group: "热敏标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "hero", sectionName: "Hero", slotName: "default-hero", label: "罐头标签页主图", description: "罐头标签总览和规格页的主图", aspectRatio: "16:9", sortOrder: 135, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "beverage", label: "罐头标签应用图 - 饮料", description: "罐头标签应用场景图：饮料", aspectRatio: "4:3", sortOrder: 136, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "food", label: "罐头标签应用图 - 食品", description: "罐头标签应用场景图：食品", aspectRatio: "4:3", sortOrder: 137, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "canning", label: "罐头标签应用图 - 罐装产线", description: "罐头标签应用场景图：罐装产线", aspectRatio: "4:3", sortOrder: 138, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "retail", label: "罐头标签应用图 - 零售", description: "罐头标签应用场景图：零售", aspectRatio: "4:3", sortOrder: 139, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "pet-food", label: "罐头标签应用图 - 宠物食品", description: "罐头标签应用场景图：宠物食品", aspectRatio: "4:3", sortOrder: 139, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "industrial", label: "罐头标签应用图 - 工业", description: "罐头标签应用场景图：工业", aspectRatio: "4:3", sortOrder: 139, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "chemical", label: "罐头标签应用图 - 化工", description: "罐头标签应用场景图：化工", aspectRatio: "4:3", sortOrder: 139, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "paint", label: "罐头标签应用图 - 油漆", description: "罐头标签应用场景图：油漆", aspectRatio: "4:3", sortOrder: 139, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "seafood", label: "罐头标签应用图 - 海鲜", description: "罐头标签应用场景图：海鲜", aspectRatio: "4:3", sortOrder: 139, group: "罐头标签" }),
  defineSlot({ pageKey: "can-labels", pageName: "罐头标签页", pagePath: "/products/can-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "vegetable", label: "罐头标签应用图 - 蔬菜", description: "罐头标签应用场景图：蔬菜", aspectRatio: "4:3", sortOrder: 139, group: "罐头标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "hero", sectionName: "Hero", slotName: "default-hero", label: "洗涤剂标签页主图", description: "洗涤剂标签总览和规格页的主图", aspectRatio: "16:9", sortOrder: 136, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "laundry", label: "洗涤剂标签应用图 - 洗衣", description: "洗涤剂标签应用场景图：洗衣产品", aspectRatio: "4:3", sortOrder: 137, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "dishwash", label: "洗涤剂标签应用图 - 洗洁精", description: "洗涤剂标签应用场景图：洗洁精", aspectRatio: "4:3", sortOrder: 138, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "cleaner", label: "洗涤剂标签应用图 - 清洁剂", description: "洗涤剂标签应用场景图：清洁剂", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "handsoap", label: "洗涤剂标签应用图 - 洗手液", description: "洗涤剂标签应用场景图：洗手液", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "industrial", label: "洗涤剂标签应用图 - 工业清洁", description: "洗涤剂标签应用场景图：工业清洁", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "retail", label: "洗涤剂标签应用图 - 零售", description: "洗涤剂标签应用场景图：零售陈列", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "fabric", label: "洗涤剂标签应用图 - 柔顺剂", description: "洗涤剂标签应用场景图：柔顺剂", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "bathroom", label: "洗涤剂标签应用图 - 卫浴清洁", description: "洗涤剂标签应用场景图：卫浴清洁", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "kitchen", label: "洗涤剂标签应用图 - 厨房清洁", description: "洗涤剂标签应用场景图：厨房清洁", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "detergent-labels", pageName: "洗涤剂标签页", pagePath: "/products/detergent-labels*", sectionKey: "applications", sectionName: "应用场景", slotName: "hotel", label: "洗涤剂标签应用图 - 酒店", description: "洗涤剂标签应用场景图：酒店场景", aspectRatio: "4:3", sortOrder: 139, group: "洗涤剂标签" }),
  defineSlot({ pageKey: "about", pageName: "关于我们", pagePath: "/about", sectionKey: "factory-showcase", sectionName: "工厂展示", slotName: "aerial-view", label: "关于我们 - 工厂鸟瞰图", description: "关于我们页面工厂鸟瞰全景图", aspectRatio: "16:9", sortOrder: 140, group: "关于我们" }),
  defineSlot({ pageKey: "about", pageName: "关于我们", pagePath: "/about", sectionKey: "factory-showcase", sectionName: "工厂展示", slotName: "production-line", label: "关于我们 - 生产线图", description: "关于我们页面生产线实拍图", aspectRatio: "4:3", sortOrder: 150, group: "关于我们" }),
  defineSlot({ pageKey: "oem", pageName: "OEM", pagePath: "/oem", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "OEM 页 Hero 背景图", description: "OEM 服务页顶部背景大图", aspectRatio: "16:9", sortOrder: 160, group: "OEM" }),
  defineSlot({ pageKey: "oem", pageName: "OEM", pagePath: "/oem", sectionKey: "factory-showcase", sectionName: "工厂展示", slotName: "main-image", label: "OEM 页 - 工厂展示图", description: "OEM 页面工厂实力展示图", aspectRatio: "4:3", sortOrder: 170, group: "OEM" }),
  defineSlot({ pageKey: "manufacturing", pageName: "生产制造", pagePath: "/manufacturing", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "生产制造页 Hero 背景图", description: "生产制造页顶部背景大图", aspectRatio: "16:9", sortOrder: 180, group: "生产制造" }),
  defineSlot({ pageKey: "manufacturing", pageName: "生产制造", pagePath: "/manufacturing", sectionKey: "facility", sectionName: "工厂展示", slotName: "aerial-view", label: "生产制造页 - 工厂鸟瞰图", description: "生产制造页的工厂鸟瞰图", aspectRatio: "4:3", sortOrder: 181, group: "生产制造" }),
  defineSlot({ pageKey: "manufacturing", pageName: "生产制造", pagePath: "/manufacturing", sectionKey: "facility", sectionName: "工厂展示", slotName: "coating-line", label: "生产制造页 - 涂布生产线图", description: "生产制造页的涂布生产线图片", aspectRatio: "4:3", sortOrder: 182, group: "生产制造" }),
  defineSlot({ pageKey: "manufacturing-equipment", pageName: "生产设备", pagePath: "/manufacturing/equipment", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "生产设备页 Hero 背景图", description: "生产设备页顶部背景图", aspectRatio: "16:9", sortOrder: 183, group: "生产制造" }),
  defineSlot({ pageKey: "manufacturing-quality-control", pageName: "质量控制", pagePath: "/manufacturing/quality-control", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "质量控制页 Hero 背景图", description: "质量控制页顶部背景图", aspectRatio: "16:9", sortOrder: 184, group: "生产制造" }),
  defineSlot({ pageKey: "manufacturing-certifications", pageName: "生产认证", pagePath: "/manufacturing/certifications", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "生产认证页 Hero 背景图", description: "生产认证页顶部背景图", aspectRatio: "16:9", sortOrder: 185, group: "生产制造" }),
  defineSlot({ pageKey: "contact", pageName: "联系我们", pagePath: "/contact", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "联系我们页 Hero 背景图", description: "联系我们页顶部背景大图", aspectRatio: "16:9", sortOrder: 190, group: "联系我们" }),
  defineSlot({ pageKey: "markets-africa", pageName: "非洲市场", pagePath: "/markets/africa", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "非洲市场页 Hero 背景图", description: "非洲市场页顶部背景大图", aspectRatio: "16:9", sortOrder: 200, group: "市场页" }),
  defineSlot({ pageKey: "markets-middle-east", pageName: "中东市场", pagePath: "/markets/middle-east", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "中东市场页 Hero 背景图", description: "中东市场页顶部背景大图", aspectRatio: "16:9", sortOrder: 210, group: "市场页" }),
  defineSlot({ pageKey: "markets-southeast-asia", pageName: "东南亚市场", pagePath: "/markets/southeast-asia", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "东南亚市场页 Hero 背景图", description: "东南亚市场页顶部背景大图", aspectRatio: "16:9", sortOrder: 220, group: "市场页" }),
  defineSlot({ pageKey: "markets-middle-east-africa", pageName: "中东与非洲市场", pagePath: "/markets/middle-east-africa", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "中东与非洲市场页 Hero 背景图", description: "中东与非洲市场页顶部背景图", aspectRatio: "16:9", sortOrder: 221, group: "市场页" }),
  defineSlot({ pageKey: "markets-thailand", pageName: "泰国市场", pagePath: "/markets/southeast-asia/thailand", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "泰国市场页 Hero 背景图", description: "泰国市场页顶部背景图", aspectRatio: "16:9", sortOrder: 225, group: "市场页" }),
  defineSlot({ pageKey: "markets-vietnam", pageName: "越南市场", pagePath: "/markets/southeast-asia/vietnam", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "越南市场页 Hero 背景图", description: "越南市场页顶部背景图", aspectRatio: "16:9", sortOrder: 226, group: "市场页" }),
  defineSlot({ pageKey: "markets-indonesia", pageName: "印尼市场", pagePath: "/markets/southeast-asia/indonesia", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "印尼市场页 Hero 背景图", description: "印尼市场页顶部背景图", aspectRatio: "16:9", sortOrder: 227, group: "市场页" }),
  defineSlot({ pageKey: "markets-philippines", pageName: "菲律宾市场", pagePath: "/markets/southeast-asia/philippines", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "菲律宾市场页 Hero 背景图", description: "菲律宾市场页顶部背景图", aspectRatio: "16:9", sortOrder: 228, group: "市场页" }),
  defineSlot({ pageKey: "markets-malaysia", pageName: "马来西亚市场", pagePath: "/markets/southeast-asia/malaysia", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "马来西亚市场页 Hero 背景图", description: "马来西亚市场页顶部背景图", aspectRatio: "16:9", sortOrder: 229, group: "市场页" }),
  defineSlot({ pageKey: "markets-singapore", pageName: "新加坡市场", pagePath: "/markets/southeast-asia/singapore", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "新加坡市场页 Hero 背景图", description: "新加坡市场页顶部背景图", aspectRatio: "16:9", sortOrder: 230, group: "市场页" }),
  defineSlot({ pageKey: "markets-ethiopia", pageName: "埃塞俄比亚市场", pagePath: "/markets/africa/ethiopia", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "埃塞俄比亚市场页 Hero 背景图", description: "埃塞俄比亚市场页顶部背景图", aspectRatio: "16:9", sortOrder: 231, group: "市场页" }),
  defineSlot({ pageKey: "markets-tanzania", pageName: "坦桑尼亚市场", pagePath: "/markets/africa/tanzania", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "坦桑尼亚市场页 Hero 背景图", description: "坦桑尼亚市场页顶部背景图", aspectRatio: "16:9", sortOrder: 232, group: "市场页" }),
  defineSlot({ pageKey: "markets-south-africa", pageName: "南非市场", pagePath: "/markets/africa/south-africa", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "南非市场页 Hero 背景图", description: "南非市场页顶部背景图", aspectRatio: "16:9", sortOrder: 233, group: "市场页" }),
  defineSlot({ pageKey: "markets-uae", pageName: "阿联酋市场", pagePath: "/markets/middle-east/uae", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "阿联酋市场页 Hero 背景图", description: "阿联酋市场页顶部背景图", aspectRatio: "16:9", sortOrder: 234, group: "市场页" }),
  defineSlot({ pageKey: "markets-saudi-arabia", pageName: "沙特市场", pagePath: "/markets/middle-east/saudi-arabia", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "沙特市场页 Hero 背景图", description: "沙特市场页顶部背景图", aspectRatio: "16:9", sortOrder: 235, group: "市场页" }),
  defineSlot({ pageKey: "markets-egypt", pageName: "埃及市场", pagePath: "/markets/middle-east/egypt", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "埃及市场页 Hero 背景图", description: "埃及市场页顶部背景图", aspectRatio: "16:9", sortOrder: 236, group: "市场页" }),
  defineSlot({ pageKey: "markets-turkey", pageName: "土耳其市场", pagePath: "/markets/middle-east/turkey", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "土耳其市场页 Hero 背景图", description: "土耳其市场页顶部背景图", aspectRatio: "16:9", sortOrder: 237, group: "市场页" }),
  defineSlot({ pageKey: "oem-case-studies", pageName: "OEM 案例", pagePath: "/oem/case-studies", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "OEM 案例页 Hero 背景图", description: "OEM 案例页顶部背景图", aspectRatio: "16:9", sortOrder: 222, group: "OEM" }),
  defineSlot({ pageKey: "oem-packaging", pageName: "OEM 包装", pagePath: "/oem/packaging", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "OEM 包装页 Hero 背景图", description: "OEM 包装页顶部背景图", aspectRatio: "16:9", sortOrder: 223, group: "OEM" }),
  defineSlot({ pageKey: "oem-custom-printing", pageName: "OEM 定制印刷", pagePath: "/oem/custom-printing", sectionKey: "hero", sectionName: "Hero", slotName: "background", label: "OEM 定制印刷页 Hero 背景图", description: "OEM 定制印刷页顶部背景图", aspectRatio: "16:9", sortOrder: 224, group: "OEM" }),
  defineSlot({ pageKey: "resources-application-cases", pageName: "应用案例", pagePath: "/resources/application-cases", sectionKey: "cases", sectionName: "行业案例", slotName: "retail-pos", label: "应用案例 - 零售 POS 图", description: "应用案例页零售与 POS 场景图", aspectRatio: "4:3", sortOrder: 240, group: "资源中心" }),
  defineSlot({ pageKey: "resources-application-cases", pageName: "应用案例", pagePath: "/resources/application-cases", sectionKey: "cases", sectionName: "行业案例", slotName: "food-service", label: "应用案例 - 餐饮图", description: "应用案例页餐饮与厨房打印场景图", aspectRatio: "4:3", sortOrder: 241, group: "资源中心" }),
  defineSlot({ pageKey: "resources-application-cases", pageName: "应用案例", pagePath: "/resources/application-cases", sectionKey: "cases", sectionName: "行业案例", slotName: "logistics", label: "应用案例 - 物流图", description: "应用案例页物流与电商标签场景图", aspectRatio: "4:3", sortOrder: 242, group: "资源中心" }),
  defineSlot({ pageKey: "resources-application-cases", pageName: "应用案例", pagePath: "/resources/application-cases", sectionKey: "cases", sectionName: "行业案例", slotName: "healthcare", label: "应用案例 - 医疗图", description: "应用案例页医疗与药房场景图", aspectRatio: "4:3", sortOrder: 243, group: "资源中心" }),
  defineSlot({ pageKey: "resources-application-cases", pageName: "应用案例", pagePath: "/resources/application-cases", sectionKey: "cases", sectionName: "行业案例", slotName: "parking", label: "应用案例 - 停车交通图", description: "应用案例页停车与交通场景图", aspectRatio: "4:3", sortOrder: 244, group: "资源中心" }),
  defineSlot({ pageKey: "resources-application-cases", pageName: "应用案例", pagePath: "/resources/application-cases", sectionKey: "cases", sectionName: "行业案例", slotName: "banking", label: "应用案例 - 金融图", description: "应用案例页金融与 ATM 场景图", aspectRatio: "4:3", sortOrder: 245, group: "资源中心" }),
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
    "home:hero-slide-2": "home:hero:slide-2",
    "home:hero-slide-3": "home:hero:slide-3",
    "home:product-labels": "home:featured-products:thermal-labels-card",
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
    "can-labels:hero": "can-labels:hero:default-hero",
    "detergent-labels:hero": "detergent-labels:hero:default-hero",
    "about:factory-aerial": "about:factory-showcase:aerial-view",
    "about:factory-line": "about:factory-showcase:production-line",
    "oem:hero": "oem:hero:background",
    "oem:factory": "oem:factory-showcase:main-image",
    "manufacturing:hero": "manufacturing:hero:background",
    "manufacturing:facility-aerial": "manufacturing:facility:aerial-view",
    "manufacturing:facility-line": "manufacturing:facility:coating-line",
    "manufacturing:equipment-hero": "manufacturing-equipment:hero:background",
    "manufacturing:quality-hero": "manufacturing-quality-control:hero:background",
    "manufacturing:certifications-hero": "manufacturing-certifications:hero:background",
    "contact:hero": "contact:hero:background",
    "markets:africa-hero": "markets-africa:hero:background",
    "markets:middle-east-hero": "markets-middle-east:hero:background",
    "markets:southeast-asia-hero": "markets-southeast-asia:hero:background",
    "markets:middle-east-africa-hero": "markets-middle-east-africa:hero:background",
    "markets:thailand-hero": "markets-thailand:hero:background",
    "markets:vietnam-hero": "markets-vietnam:hero:background",
    "markets:indonesia-hero": "markets-indonesia:hero:background",
    "markets:philippines-hero": "markets-philippines:hero:background",
    "markets:malaysia-hero": "markets-malaysia:hero:background",
    "markets:singapore-hero": "markets-singapore:hero:background",
    "markets:ethiopia-hero": "markets-ethiopia:hero:background",
    "markets:tanzania-hero": "markets-tanzania:hero:background",
    "markets:south-africa-hero": "markets-south-africa:hero:background",
    "markets:uae-hero": "markets-uae:hero:background",
    "markets:saudi-arabia-hero": "markets-saudi-arabia:hero:background",
    "markets:egypt-hero": "markets-egypt:hero:background",
    "markets:turkey-hero": "markets-turkey:hero:background",
    "oem:case-studies-hero": "oem-case-studies:hero:background",
    "oem:packaging-hero": "oem-packaging:hero:background",
    "oem:custom-printing-hero": "oem-custom-printing:hero:background",
    "resources:application-cases-retail-pos": "resources-application-cases:cases:retail-pos",
    "resources:application-cases-food-service": "resources-application-cases:cases:food-service",
    "resources:application-cases-logistics": "resources-application-cases:cases:logistics",
    "resources:application-cases-healthcare": "resources-application-cases:cases:healthcare",
    "resources:application-cases-parking": "resources-application-cases:cases:parking",
    "resources:application-cases-banking": "resources-application-cases:cases:banking",
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
