/**
 * 全站图片槽位注册表
 * - 后台「图片管理」从这里读取，显示所有可换图的位置
 * - slot 命名规范：`page:purpose`
 *
 * 当您在代码中新增 getSlotImage("xxx:yyy", url) 时，
 * 顺手在此处登记一笔，后台就会自动列出。
 */

export interface ImageSlot {
  slot: string;          // 槽位 key（与 getSlotImage 的第一个参数一致）
  label: string;         // 中文显示名称
  page: string;          // 所在页面（中文）
  pageUrl: string;       // 预览链接（前台 URL）
  aspect?: string;       // 推荐宽高比（提示用）
  description?: string;  // 用途说明
}

export const IMAGE_SLOTS: ImageSlot[] = [
  // ===== 首页 =====
  { slot: "home:hero", label: "首页 主 Banner", page: "首页", pageUrl: "/", aspect: "16:9", description: "首屏背景图" },
  { slot: "home:hero-2", label: "首页 副 Banner", page: "首页", pageUrl: "/", aspect: "16:9" },
  { slot: "home:factory", label: "首页 工厂展示图", page: "首页", pageUrl: "/", aspect: "4:3" },

  // ===== 关于我们 =====
  { slot: "about:hero", label: "关于我们 顶部图", page: "关于我们", pageUrl: "/about", aspect: "16:9" },
  { slot: "about:factory", label: "关于我们 工厂照片", page: "关于我们", pageUrl: "/about", aspect: "4:3" },
  { slot: "about:factory-line", label: "关于我们 生产线", page: "关于我们", pageUrl: "/about", aspect: "16:9" },

  // ===== OEM 系列 =====
  { slot: "oem:hero", label: "OEM 首页 顶部图", page: "OEM 定制", pageUrl: "/oem", aspect: "16:9" },
  { slot: "oem:case-studies-hero", label: "OEM 案例 顶部图", page: "OEM 案例", pageUrl: "/oem/case-studies", aspect: "16:9" },
  { slot: "oem:custom-printing-hero", label: "OEM 定制印刷 顶部图", page: "OEM 定制印刷", pageUrl: "/oem/custom-printing", aspect: "16:9" },
  { slot: "oem:packaging-hero", label: "OEM 包装 顶部图", page: "OEM 包装", pageUrl: "/oem/packaging", aspect: "16:9" },

  // ===== 生产制造 =====
  { slot: "manufacturing:certifications-hero", label: "认证 顶部图", page: "认证证书", pageUrl: "/manufacturing/certifications", aspect: "16:9" },
  { slot: "manufacturing:equipment-hero", label: "设备 顶部图", page: "生产设备", pageUrl: "/manufacturing/equipment", aspect: "16:9" },
  { slot: "manufacturing:quality-hero", label: "质量控制 顶部图", page: "质量控制", pageUrl: "/manufacturing/quality-control", aspect: "16:9" },

  // ===== 产品 =====
  { slot: "products:hero", label: "产品总览 顶部图", page: "产品中心", pageUrl: "/products", aspect: "16:9" },
  { slot: "products:can-labels-card", label: "产品卡片 罐头标签", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "products:detergent-labels-card", label: "产品卡片 洗涤剂标签", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
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
  // 各国子页面
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

  // ===== 联系我们 =====
  { slot: "contact:hero", label: "联系我们 顶部图", page: "联系我们", pageUrl: "/contact", aspect: "16:9" },
];

/** 按页面分组 */
export function groupSlotsByPage(): Record<string, ImageSlot[]> {
  return IMAGE_SLOTS.reduce((acc, slot) => {
    if (!acc[slot.page]) acc[slot.page] = [];
    acc[slot.page].push(slot);
    return acc;
  }, {} as Record<string, ImageSlot[]>);
}
