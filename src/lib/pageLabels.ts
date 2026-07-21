/**
 * 把 window.location.pathname 翻译成对客户/老板都友好的页面标签
 * 用于:
 *   1. 询盘通知（Server酱/企微/飞书消息体中"来源页面"行）
 *   2. 后台 /admin/inquiries 列表显示
 *
 * 设计原则:
 *   - 优先精确匹配静态路径
 *   - 动态路径用 startsWith 兜底（如 /blog/xxx → "博客文章"）
 *   - 没匹配上就返回原始 path（向后兼容）
 */

const EXACT: Record<string, string> = {
  "/": "首页 Homepage",
  "/products": "产品总览 Products",
  "/products/thermal-labels": "热敏标签 Thermal Labels",
  "/products/thermal-labels/blank": "空白热敏标签",
  "/products/custom-printed-thermal-labels": "定制热敏标签",
  "/products/thermal-labels/custom-printed": "定制热敏标签（旧入口）",
  "/products/thermal-paper-rolls": "热敏纸卷 Thermal Rolls",
  "/products/thermal-paper-rolls/blank": "空白热敏纸卷",
  "/products/thermal-paper-rolls/custom-printed": "定制热敏纸卷",
  "/products/can-labels": "灌装线自动贴标用卷筒标签",
  "/products/can-labels/blank": "空白机贴卷筒标签（旧入口）",
  "/products/can-labels/custom-printed": "定制印刷机贴卷筒标签（旧入口）",
  "/products/detergent-labels": "洗涤剂标签 Detergent Labels",
  "/products/detergent-labels/blank": "空白洗涤剂标签",
  "/products/detergent-labels/custom-printed": "定制洗涤剂标签",

  "/manufacturing": "工厂实力 Manufacturing",
  "/manufacturing/equipment": "生产设备",
  "/manufacturing/certifications": "认证 Certifications",
  "/manufacturing/quality-control": "品质管控",

  "/oem": "OEM 总览",
  "/oem/case-studies": "OEM 案例",
  "/oem/packaging": "OEM 包装",
  "/oem/design-support": "OEM 设计支持",
  "/oem/ip-protection": "OEM 知识产权",
  "/oem/quality-assurance": "OEM 质量保证",

  "/markets": "全球市场 Markets",
  "/markets/africa": "🌍 非洲市场",
  "/markets/africa/ghana": "🇬🇭 加纳市场",
  "/markets/africa/kenya": "🇰🇪 肯尼亚市场",
  "/markets/africa/nigeria": "🇳🇬 尼日利亚市场",
  "/markets/africa/ethiopia": "🇪🇹 埃塞俄比亚市场",
  "/markets/africa/south-africa": "🇿🇦 南非市场",
  "/markets/africa/tanzania": "🇹🇿 坦桑尼亚市场",
  "/markets/southeast-asia": "🌏 东南亚市场",
  "/markets/southeast-asia/indonesia": "🇮🇩 印尼市场",
  "/markets/southeast-asia/malaysia": "🇲🇾 马来西亚市场",
  "/markets/southeast-asia/philippines": "🇵🇭 菲律宾市场",
  "/markets/southeast-asia/thailand": "🇹🇭 泰国市场",
  "/markets/southeast-asia/vietnam": "🇻🇳 越南市场",
  "/markets/middle-east": "🌍 中东市场",
  "/markets/middle-east/egypt": "🇪🇬 埃及市场",
  "/markets/middle-east/saudi-arabia": "🇸🇦 沙特市场",
  "/markets/middle-east/turkey": "🇹🇷 土耳其市场",
  "/markets/middle-east/uae": "🇦🇪 阿联酋市场",

  "/resources": "资源中心 Resources",
  "/resources/application-cases": "📚 应用案例",
  "/resources/oem-guide": "📚 OEM 指南",
  "/resources/product-knowledge": "📚 产品知识",
  "/resources/industry-insights": "📚 行业洞察",

  "/about": "关于我们 About",
  "/contact": "联系我们 Contact",
  "/contact/oem-partnership": "OEM 合作",
  "/faq": "常见问题 FAQ",
  "/blog": "博客 Blog",
};

const PREFIX: Array<[string, (path: string) => string]> = [
  ["/blog/",      (p) => `📝 博客文章: ${p.replace("/blog/", "")}`],
  ["/resources/", (p) => `📚 资源文章: ${p.replace("/resources/", "")}`],
];

/** 把 path 转成友好显示文本 */
export function pagePathToLabel(path?: string): string {
  if (!path) return "未知页面";
  const clean = path.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  if (EXACT[clean]) return EXACT[clean];
  for (const [prefix, fn] of PREFIX) {
    if (clean.startsWith(prefix)) return fn(clean);
  }
  return clean; // 兜底：返回原始 path
}
