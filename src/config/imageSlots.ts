/**
 * 全站图片槽位注册表
 *
 * - 此文件是图片槽位的「唯一真相」(single source of truth)
 * - 后台「图片管理」从这里读取，显示所有可换图的位置
 * - 代码中所有 getSlotImage("xxx:yyy") 的 slot 参数都必须是 SlotKey 类型
 *   → 拼错会编译报错，永远不可能出现"后台改了前台不变"的情况
 *
 * 新增槽位流程：
 *   1. 在下面的 IMAGE_SLOTS 列表加一条
 *   2. 在页面代码里写 getSlotImage("新-slot-key", fallback)
 *   3. TypeScript 自动保护两边一致
 */

export interface ImageSlot {
  slot: string;          // 槽位 key（与 getSlotImage 的第一个参数一致）
  label: string;         // 中文显示名称
  page: string;          // 所在页面（中文）
  pageUrl: string;       // 预览链接（前台 URL）
  aspect?: string;       // 推荐宽高比（提示用）
  description?: string;  // 用途说明
}

// ⚠️ 严格保持此数组与代码中所有 getSlotImage / getSlotImages 的 slot 参数一致
export const IMAGE_SLOTS = [
  // ===== 首页（来自 src/app/page.tsx）=====
  { slot: "home:hero", label: "首页 主 Banner (轮播1)", page: "首页", pageUrl: "/", aspect: "16:9", description: "首屏第一张轮播图" },
  { slot: "home:hero-slide-2", label: "首页 Banner 轮播 2", page: "首页", pageUrl: "/", aspect: "16:9", description: "首屏第二张轮播图" },
  { slot: "home:hero-slide-3", label: "首页 Banner 轮播 3", page: "首页", pageUrl: "/", aspect: "16:9", description: "首屏第三张轮播图" },
  { slot: "home:product-labels", label: "首页 产品板块 - 标签图", page: "首页", pageUrl: "/", aspect: "4:3", description: "中段产品展示区 - 热敏标签" },
  { slot: "home:product-rolls", label: "首页 产品板块 - 纸卷图", page: "首页", pageUrl: "/", aspect: "4:3", description: "中段产品展示区 - 热敏纸卷" },

  // ===== 关于我们（来自 src/app/about/page.tsx）=====
  { slot: "about:factory-aerial", label: "关于我们 工厂航拍图", page: "关于我们", pageUrl: "/about", aspect: "16:9" },
  { slot: "about:factory-line", label: "关于我们 生产线", page: "关于我们", pageUrl: "/about", aspect: "16:9" },

  // ===== OEM 系列 =====
  { slot: "oem:hero", label: "OEM 首页 顶部图", page: "OEM 定制", pageUrl: "/oem", aspect: "16:9" },
  { slot: "oem:case-studies-hero", label: "OEM 案例 顶部图", page: "OEM 案例", pageUrl: "/oem/case-studies", aspect: "16:9" },
  { slot: "oem:custom-printing-hero", label: "OEM 定制印刷 顶部图", page: "OEM 定制印刷", pageUrl: "/oem/custom-printing", aspect: "16:9" },
  { slot: "oem:packaging-hero", label: "OEM 包装 顶部图", page: "OEM 包装", pageUrl: "/oem/packaging", aspect: "16:9" },
  { slot: "oem:factory", label: "OEM 工厂图（中东非洲页用）", page: "OEM 定制", pageUrl: "/markets/middle-east-africa", aspect: "16:9", description: "在中东非洲市场页用作工厂展示" },

  // ===== 生产制造 =====
  { slot: "manufacturing:hero", label: "生产制造 顶部图", page: "生产制造", pageUrl: "/manufacturing", aspect: "16:9" },
  { slot: "manufacturing:facility-aerial", label: "生产制造 工厂航拍", page: "生产制造", pageUrl: "/manufacturing", aspect: "16:9" },
  { slot: "manufacturing:facility-line", label: "生产制造 生产线", page: "生产制造", pageUrl: "/manufacturing", aspect: "16:9" },
  { slot: "manufacturing:certifications-hero", label: "认证 顶部图", page: "认证证书", pageUrl: "/manufacturing/certifications", aspect: "16:9" },
  { slot: "manufacturing:equipment-hero", label: "设备 顶部图", page: "生产设备", pageUrl: "/manufacturing/equipment", aspect: "16:9" },
  { slot: "manufacturing:quality-hero", label: "质量控制 顶部图", page: "质量控制", pageUrl: "/manufacturing/quality-control", aspect: "16:9" },

  // ===== 产品 =====
  { slot: "products:hero", label: "产品总览 顶部图", page: "产品中心", pageUrl: "/products", aspect: "16:9" },
  { slot: "products:thermal-rolls", label: "产品总览 - 热敏纸卷图", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "products:thermal-labels", label: "产品总览 - 热敏标签图", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "products:can-labels", label: "产品总览 - 罐头标签图", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "products:detergent-labels", label: "产品总览 - 洗涤剂标签图", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "thermal-rolls:hero", label: "热敏纸卷 详情页 顶部图", page: "热敏纸卷详情", pageUrl: "/products/blank-thermal-rolls", aspect: "16:9", description: "SizeDetailPage 用，所有热敏纸卷尺寸详情页共享" },
  { slot: "thermal-labels:hero", label: "热敏标签 详情页 顶部图", page: "热敏标签详情", pageUrl: "/products/blank-thermal-labels", aspect: "16:9", description: "SizeDetailPage 用，所有热敏标签尺寸详情页共享" },
  { slot: "can-labels:hero", label: "罐头标签 顶部图", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "16:9" },
  { slot: "detergent-labels:hero", label: "洗涤剂标签 顶部图", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "16:9" },
  { slot: "thermal-labels:blank-hero", label: "热敏标签 空白 顶部图", page: "热敏空白标签", pageUrl: "/products/thermal-labels/blank", aspect: "16:9" },
  { slot: "thermal-labels:custom-hero", label: "热敏标签 定制 顶部图", page: "热敏定制标签", pageUrl: "/products/thermal-labels/custom-printed", aspect: "16:9" },
  { slot: "thermal-paper-rolls:blank-hero", label: "热敏纸卷 空白 顶部图", page: "热敏空白纸卷", pageUrl: "/products/thermal-paper-rolls/blank", aspect: "16:9" },
  { slot: "thermal-paper-rolls:custom-hero", label: "热敏纸卷 定制 顶部图", page: "热敏定制纸卷", pageUrl: "/products/thermal-paper-rolls/custom-printed", aspect: "16:9" },

  // ===== 市场页面 =====
  { slot: "markets:africa-hero", label: "非洲市场 顶部图", page: "非洲市场", pageUrl: "/markets/africa", aspect: "16:9" },
  { slot: "markets:southeast-asia-hero", label: "东南亚市场 顶部图", page: "东南亚市场", pageUrl: "/markets/southeast-asia", aspect: "16:9" },
  { slot: "markets:middle-east-hero", label: "中东市场 顶部图", page: "中东市场", pageUrl: "/markets/middle-east", aspect: "16:9" },
  { slot: "markets:middle-east-africa-hero", label: "中东非洲 顶部图", page: "中东非洲市场", pageUrl: "/markets/middle-east-africa", aspect: "16:9" },
  // 各国子页面 hero
  { slot: "markets:ethiopia-hero", label: "埃塞俄比亚 顶部图", page: "埃塞俄比亚市场", pageUrl: "/markets/africa/ethiopia", aspect: "16:9" },
  { slot: "markets:south-africa-hero", label: "南非 顶部图", page: "南非市场", pageUrl: "/markets/africa/south-africa", aspect: "16:9" },
  { slot: "markets:tanzania-hero", label: "坦桑尼亚 顶部图", page: "坦桑尼亚市场", pageUrl: "/markets/africa/tanzania", aspect: "16:9" },
  { slot: "markets:egypt-hero", label: "埃及 顶部图", page: "埃及市场", pageUrl: "/markets/middle-east/egypt", aspect: "16:9" },
  { slot: "markets:saudi-arabia-hero", label: "沙特 顶部图", page: "沙特市场", pageUrl: "/markets/middle-east/saudi-arabia", aspect: "16:9" },
  { slot: "markets:turkey-hero", label: "土耳其 顶部图", page: "土耳其市场", pageUrl: "/markets/middle-east/turkey", aspect: "16:9" },
  { slot: "markets:uae-hero", label: "阿联酋 顶部图", page: "阿联酋市场", pageUrl: "/markets/middle-east/uae", aspect: "16:9" },
  { slot: "markets:indonesia-hero", label: "印尼 顶部图", page: "印尼市场", pageUrl: "/markets/southeast-asia/indonesia", aspect: "16:9" },
  { slot: "markets:malaysia-hero", label: "马来西亚 顶部图", page: "马来西亚市场", pageUrl: "/markets/southeast-asia/malaysia", aspect: "16:9" },
  { slot: "markets:philippines-hero", label: "菲律宾 顶部图", page: "菲律宾市场", pageUrl: "/markets/southeast-asia/philippines", aspect: "16:9" },
  { slot: "markets:singapore-hero", label: "新加坡 顶部图", page: "新加坡市场", pageUrl: "/markets/southeast-asia/singapore", aspect: "16:9" },
  { slot: "markets:thailand-hero", label: "泰国 顶部图", page: "泰国市场", pageUrl: "/markets/southeast-asia/thailand", aspect: "16:9" },
  { slot: "markets:vietnam-hero", label: "越南 顶部图", page: "越南市场", pageUrl: "/markets/southeast-asia/vietnam", aspect: "16:9" },

  // ===== 资源中心 =====
  { slot: "resources:application-cases-retail-pos", label: "应用案例 - 零售 POS", page: "应用案例", pageUrl: "/resources/application-cases", aspect: "16:9" },
  { slot: "resources:application-cases-food-service", label: "应用案例 - 餐饮服务", page: "应用案例", pageUrl: "/resources/application-cases", aspect: "16:9" },
  { slot: "resources:application-cases-logistics", label: "应用案例 - 物流仓储", page: "应用案例", pageUrl: "/resources/application-cases", aspect: "16:9" },
  { slot: "resources:application-cases-healthcare", label: "应用案例 - 医疗", page: "应用案例", pageUrl: "/resources/application-cases", aspect: "16:9" },
  { slot: "resources:application-cases-parking", label: "应用案例 - 停车场", page: "应用案例", pageUrl: "/resources/application-cases", aspect: "16:9" },
  { slot: "resources:application-cases-banking", label: "应用案例 - 银行金融", page: "应用案例", pageUrl: "/resources/application-cases", aspect: "16:9" },

  // ===== 联系我们 =====
  { slot: "contact:hero", label: "联系我们 顶部图", page: "联系我们", pageUrl: "/contact", aspect: "16:9" },
] as const satisfies readonly ImageSlot[];

/** 全部 slot key 的 union type — 编译期防止拼错 */
export type SlotKey = (typeof IMAGE_SLOTS)[number]["slot"];

/** 按页面分组（后台展示用） */
export function groupSlotsByPage(): Record<string, ImageSlot[]> {
  return IMAGE_SLOTS.reduce((acc, slot) => {
    if (!acc[slot.page]) acc[slot.page] = [];
    acc[slot.page].push(slot);
    return acc;
  }, {} as Record<string, ImageSlot[]>);
}

/** Set 形式，运行时检查 */
export const SLOT_KEYS = new Set<string>(IMAGE_SLOTS.map((s) => s.slot));
