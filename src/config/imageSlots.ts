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
  // 注: 首页 3 张 Hero Banner 改在 /admin/hero 编辑（跟文案/CTA 绑定），不再单独占图片管理槽位
  { slot: "home:product-labels", label: "首页 产品板块 - 标签兜底图", page: "首页", pageUrl: "/", aspect: "4:3", description: "中段产品展示区 - 任何热敏标签产品未单独设置图时使用" },
  { slot: "home:product-rolls", label: "首页 产品板块 - 纸卷兜底图", page: "首页", pageUrl: "/", aspect: "4:3", description: "中段产品展示区 - 任何热敏纸卷产品未单独设置图时使用" },

  // 首页 ② POPULAR SIZES 区域 - 18 个产品独立可换图
  // === Thermal Paper Rolls 组（6 个）===
  { slot: "home:product-pos-receipt-rolls", label: "首页产品-POS Receipt Rolls", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏纸卷组卡片 1" },
  { slot: "home:product-portable-mobile-printer-rolls", label: "首页产品-Portable/Mobile Printer Rolls", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏纸卷组卡片 2" },
  { slot: "home:product-phenol-free-thermal-paper", label: "首页产品-Phenol Free Thermal Paper", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏纸卷组卡片 3" },
  { slot: "home:product-custom-printed-rolls", label: "首页产品-Custom Printed Rolls", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏纸卷组卡片 4" },
  { slot: "home:product-atm-banking-rolls", label: "首页产品-ATM & Banking Rolls", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏纸卷组卡片 5" },
  { slot: "home:product-blank-thermal-rolls", label: "首页产品-Blank Thermal Rolls", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏纸卷组卡片 6" },
  // === Thermal Labels 组（6 个）===
  { slot: "home:product-blank-thermal-labels", label: "首页产品-Blank Thermal Labels", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏标签组卡片 1" },
  { slot: "home:product-4x6-shipping-labels", label: "首页产品-4x6 Shipping Labels", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏标签组卡片 2" },
  { slot: "home:product-barcode-thermal-labels", label: "首页产品-Barcode Thermal Labels", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏标签组卡片 3" },
  { slot: "home:product-custom-printed-labels", label: "首页产品-Custom Printed Labels", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏标签组卡片 4" },
  { slot: "home:product-4x3-thermal-labels", label: "首页产品-4x3 Thermal Labels", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏标签组卡片 5" },
  { slot: "home:product-2x4-thermal-labels", label: "首页产品-2x4 Thermal Labels", page: "首页", pageUrl: "/", aspect: "4:3", description: "首页热敏标签组卡片 6" },
  // === Linerless Labels ===
  { slot: "linerless-labels:hero", label: "无底纸标签 详情页 Hero 图", page: "无底纸标签", pageUrl: "/products/linerless-labels", aspect: "4:3" },
  { slot: "linerless-3-1-8-x-263:hero", label: "3 1/8 x 263 无底纸标签 - Hero 图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "16:9", description: "产品详情页首屏，优先使用真实卷材与标签成品图" },
  { slot: "linerless-3-1-8-x-263:application", label: "3 1/8 x 263 无底纸标签 - 应用图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "直接答案和应用场景模块" },
  { slot: "linerless-3-1-8-x-263:quality", label: "3 1/8 x 263 无底纸标签 - 质检图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "样品、打印、粘合或工厂质检模块" },
  { slot: "linerless-3-1-8-x-263:risk", label: "3 1/8 x 263 无底纸标签 - 采购风险图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "打印、扫码、粘胶和仓储风险模块" },
  { slot: "linerless-3-1-8-x-263:specification", label: "3 1/8 x 263 无底纸标签 - 规格审核图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "卷径、纸芯、材料和胶黏规格模块" },
  { slot: "linerless-3-1-8-x-263:workflow", label: "3 1/8 x 263 无底纸标签 - 审批流程图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "打样、生产和批量订单审批模块" },
  { slot: "linerless-3-1-8-x-263:faq", label: "3 1/8 x 263 无底纸标签 - FAQ 包装图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "常见采购问题、包装和复购模块" },
  { slot: "linerless-3-1-8-x-263:related-custom", label: "3 1/8 x 263 无底纸标签 - 推荐定制标签图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "相关产品：定制印刷热敏标签" },
  { slot: "linerless-3-1-8-x-263:related-thermal", label: "3 1/8 x 263 无底纸标签 - 推荐热敏标签图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "相关产品：热敏标签产品线" },
  { slot: "linerless-3-1-8-x-263:related-shipping", label: "3 1/8 x 263 无底纸标签 - 推荐运输标签图", page: "3 1/8 x 263 无底纸标签", pageUrl: "/products/linerless-labels/3-1-8-x-263", aspect: "4:3", description: "相关产品：运输和仓储标签" },
  // === 其他可能用到的 6 个 ===
  { slot: "home:product-lottery-gaming-rolls", label: "首页产品-Lottery & Gaming Rolls", page: "首页", pageUrl: "/", aspect: "4:3", description: "（备用）首页彩票游戏纸卷" },
  { slot: "home:product-colored-thermal-paper", label: "首页产品-Colored Thermal Paper", page: "首页", pageUrl: "/", aspect: "4:3", description: "（备用）首页彩色热敏纸" },
  { slot: "home:product-coreless-paper-roll", label: "首页产品-Coreless Paper Roll", page: "首页", pageUrl: "/", aspect: "4:3", description: "（备用）首页无芯纸卷" },
  { slot: "home:product-multi-ply-carbonless-rolls", label: "首页产品-Multi-Ply Carbonless Rolls", page: "首页", pageUrl: "/", aspect: "4:3", description: "（备用）首页无碳复写纸卷" },
  { slot: "home:product-oem-printed-receipts", label: "首页产品-OEM Printed Receipts", page: "首页", pageUrl: "/", aspect: "4:3", description: "（备用）首页 OEM 印刷收据" },

  // 首页「完整产品线」6 类目模块（Hero 下方），admin 可单独换图
  { slot: "home:category-thermal-rolls", label: "首页类目-热敏纸卷", page: "首页", pageUrl: "/", aspect: "4:3", description: "完整产品线模块 - 热敏纸卷类目卡片" },
  { slot: "home:category-thermal-labels", label: "首页类目-热敏标签", page: "首页", pageUrl: "/", aspect: "4:3", description: "完整产品线模块 - 热敏标签类目卡片" },
  { slot: "home:category-can-labels", label: "首页类目-灌装/罐头标签", page: "首页", pageUrl: "/", aspect: "4:3", description: "完整产品线模块 - 灌装标签类目卡片" },
  { slot: "home:category-bottle-labels", label: "首页类目-瓶装标签", page: "首页", pageUrl: "/", aspect: "4:3", description: "完整产品线模块 - 瓶装标签类目卡片（原洗涤剂标签）" },
  { slot: "home:category-carbonless", label: "首页类目-无碳复写纸表格", page: "首页", pageUrl: "/", aspect: "4:3", description: "完整产品线模块 - 无碳复写纸表格类目卡片" },
  { slot: "home:category-jumbo-rolls", label: "首页类目-巨型卷代理", page: "首页", pageUrl: "/", aspect: "4:3", description: "完整产品线模块 - 巨型卷代理销售类目卡片" },
  { slot: "home:category-custom-rolls", label: "首页类目-定制纸卷/标签", page: "首页", pageUrl: "/", aspect: "4:3", description: "完整产品线模块 - 定制印刷纸卷/标签类目卡片" },

  // ===== 关于我们（来自 src/app/about/page.tsx）=====
  { slot: "about:factory-aerial", label: "关于我们 工厂航拍图", page: "关于我们", pageUrl: "/about", aspect: "16:9" },
  { slot: "about:factory-line", label: "关于我们 生产线", page: "关于我们", pageUrl: "/about", aspect: "16:9" },

  // ===== OEM 系列 =====
  { slot: "oem:hero", label: "OEM 首页 顶部图", page: "OEM 定制", pageUrl: "/oem", aspect: "16:9" },
  { slot: "oem:case-studies-hero", label: "OEM 案例 顶部图", page: "OEM 案例", pageUrl: "/oem/case-studies", aspect: "16:9" },
  { slot: "oem:custom-printing-hero", label: "OEM 定制印刷 顶部图", page: "OEM 定制印刷", pageUrl: "/oem/custom-printing", aspect: "16:9" },
  { slot: "oem:packaging-hero", label: "OEM 包装 顶部图", page: "OEM 包装", pageUrl: "/oem/packaging", aspect: "16:9" },
  { slot: "oem:design-support-hero", label: "OEM 设计支持 顶部图", page: "OEM 设计支持", pageUrl: "/oem/design-support", aspect: "16:9" },
  { slot: "oem:ip-protection-hero", label: "OEM 知识产权保护 顶部图", page: "OEM 知识产权", pageUrl: "/oem/ip-protection", aspect: "16:9" },
  { slot: "oem:quality-assurance-hero", label: "OEM 质量保证 顶部图", page: "OEM 质量保证", pageUrl: "/oem/quality-assurance", aspect: "16:9" },
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
  { slot: "products:can-labels", label: "产品总览 - 灌装包装标签图", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "products:detergent-labels", label: "产品总览 - 瓶装及日化包装标签图", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "products:ncr-forms", label: "产品总览 - NCR表格图", page: "产品中心", pageUrl: "/products", aspect: "4:3" },
  { slot: "thermal-rolls:hero", label: "热敏纸卷 详情页 顶部图", page: "热敏纸卷详情", pageUrl: "/products/blank-thermal-rolls", aspect: "16:9", description: "SizeDetailPage 用，所有热敏纸卷尺寸详情页共享" },
  { slot: "thermal-roll-57x30mm:hero", label: "57x30mm 热敏纸卷 - 主图", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/57x30mm", aspect: "16:9", description: "57x30mm 产品卷材与包装参考" },
  { slot: "thermal-roll-57x40mm:hero", label: "57x40mm 热敏纸卷 - 主图", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/57x40mm", aspect: "16:9", description: "57x40mm 产品卷材与包装参考" },
  { slot: "thermal-roll-57x50mm:hero", label: "57x50mm 热敏纸卷 - 主图", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/57x50mm", aspect: "16:9", description: "57x50mm 产品卷材与包装参考" },
  { slot: "thermal-roll-80x70mm:hero", label: "80x70mm 热敏纸卷 - 主图", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x70mm", aspect: "16:9", description: "80x70mm 产品卷材与包装参考" },
  { slot: "thermal-roll-80x80mm:hero", label: "80x80mm 热敏纸卷 - 主图", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x80mm", aspect: "16:9", description: "80x80mm 产品卷材与包装参考" },
  { slot: "thermal-roll-110x80mm:hero", label: "110x80mm 热敏纸卷 - 主图", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/110x80mm", aspect: "16:9", description: "110x80mm 产品卷材与包装参考" },
  { slot: "thermal-rolls:detail-application", label: "热敏纸卷详情 - 应用场景", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x80mm", aspect: "4:3", description: "用于确认纸卷规格的 POS、移动打印或收据场景" },
  { slot: "thermal-rolls:detail-quality", label: "热敏纸卷详情 - 质量控制", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x80mm", aspect: "4:3", description: "热敏纸卷生产和质量控制参考" },
  { slot: "thermal-rolls:detail-risk", label: "热敏纸卷详情 - 采购风险", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x80mm", aspect: "4:3", description: "用于说明打印机、长度和储存风险的收据场景" },
  { slot: "thermal-rolls:detail-specification", label: "热敏纸卷详情 - 规格审核", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x80mm", aspect: "4:3", description: "纸卷宽度、卷径、纸芯和包装规格审核" },
  { slot: "thermal-rolls:detail-workflow", label: "热敏纸卷详情 - 审批流程", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x80mm", aspect: "4:3", description: "样品、生产与复购审批流程" },
  { slot: "thermal-rolls:detail-faq", label: "热敏纸卷详情 - FAQ 包装", page: "热敏纸卷尺寸详情", pageUrl: "/products/thermal-rolls/80x80mm", aspect: "4:3", description: "采购 FAQ 旁的出口纸箱与托盘参考" },
  { slot: "thermal-labels:hero", label: "热敏标签 详情页 顶部图", page: "热敏标签详情", pageUrl: "/products/blank-thermal-labels", aspect: "16:9", description: "SizeDetailPage 用，所有热敏标签尺寸详情页共享" },
  { slot: "shipping-labels:hero", label: "运输标签-顶部主图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "16:9", description: "3PL与海外仓采购首屏，展示4x6卷装或折叠装运输标签" },
  { slot: "shipping-labels:overview", label: "运输标签-产品定义图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "直热式运输标签定义和报价资料模块" },
  { slot: "shipping-labels:failure-risks", label: "运输标签-运营风险图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "扫码、卡纸、脱胶和换卷风险模块" },
  { slot: "shipping-labels:rolls", label: "运输标签-卷装图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "卷装标签和桌面或工业打印机方案" },
  { slot: "shipping-labels:fanfold", label: "运输标签-折叠装图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "Z折叠连续供纸和高吞吐包装台方案" },
  { slot: "shipping-labels:applications", label: "运输标签-履约场景图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "3PL、海外仓、电商履约和快递分拨场景" },
  { slot: "shipping-labels:quality-control", label: "运输标签-质量控制图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "条码、模切、粘胶、卷绕和数量检查" },
  { slot: "shipping-labels:packing", label: "运输标签-出口包装图", page: "运输标签", pageUrl: "/products/shipping-labels", aspect: "4:3", description: "纸箱、托盘、批次标签和补货SKU控制" },
  { slot: "can-labels:hero", label: "罐头标签 顶部图", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "16:9" },
  { slot: "detergent-labels:hero", label: "洗涤剂标签 顶部图", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "16:9" },
  { slot: "ncr-forms:hero", label: "NCR无碳联单 顶部图", page: "NCR表格", pageUrl: "/products/ncr-forms", aspect: "16:9" },
  { slot: "ncr-forms:overview", label: "NCR无碳联单 产品概览图", page: "NCR表格", pageUrl: "/products/ncr-forms", aspect: "4:3", description: "NCR 是什么与报价资料模块" },
  { slot: "ncr-forms:books", label: "NCR收据本和发票本图", page: "NCR表格", pageUrl: "/products/ncr-forms", aspect: "4:3", description: "成品形式 - 收据本与发票本" },
  { slot: "ncr-forms:continuous", label: "NCR连续电脑表格图", page: "NCR表格", pageUrl: "/products/ncr-forms", aspect: "4:3", description: "成品形式 - 连续电脑表格" },
  { slot: "ncr-forms:delivery", label: "NCR送货单和运单场景图", page: "NCR表格", pageUrl: "/products/ncr-forms", aspect: "4:3", description: "成品形式 - 送货单、运单和物流表格" },
  { slot: "ncr-forms:production", label: "NCR生产与质检图", page: "NCR表格", pageUrl: "/products/ncr-forms", aspect: "4:3", description: "材料结构、生产和质检模块" },
  { slot: "ncr-receipt-books:hero", label: "NCR收据本-顶部主图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "16:9", description: "渠道采购首屏，展示成品收据本或真实开单场景" },
  { slot: "ncr-receipt-books:overview", label: "NCR收据本-产品定义图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "1:1", description: "What Are NCR Receipt Books 定义与报价清单模块" },
  { slot: "ncr-receipt-books:buyer-risk", label: "NCR收据本-采购风险图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "4:3", description: "复写清晰度、编号、装订和复购一致性风险模块" },
  { slot: "ncr-receipt-books:2-part", label: "NCR收据本-二联本图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "4:3", description: "Duplicate 2-part receipt book 产品方案" },
  { slot: "ncr-receipt-books:3-part", label: "NCR收据本-三联本图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "4:3", description: "Triplicate 3-part receipt book 产品方案" },
  { slot: "ncr-receipt-books:private-label", label: "NCR收据本-定制品牌图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "4:3", description: "定制封面、品牌字段和经销商 SKU 方案" },
  { slot: "ncr-receipt-books:production", label: "NCR收据本-生产质检图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "4:3", description: "材料层、编号连续性、打孔和本数质检模块" },
  { slot: "ncr-receipt-books:packing", label: "NCR收据本-私牌包装图", page: "NCR收据本", pageUrl: "/products/ncr-receipt-books", aspect: "4:3", description: "书本标签、收缩包装、内箱和出口外箱模块" },
  { slot: "ncr-invoice-books:hero", label: "NCR发票本-顶部主图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "16:9", description: "渠道采购首屏，展示成品发票本或真实开单场景" },
  { slot: "ncr-invoice-books:overview", label: "NCR发票本-产品定义图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "4:3", description: "What Is an NCR Invoice Book 定义与报价资料模块" },
  { slot: "ncr-invoice-books:buyer-risk", label: "NCR发票本-采购风险图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "4:3", description: "复写清晰度、编号、撕线、装订和复购一致性模块" },
  { slot: "ncr-invoice-books:2-part", label: "NCR发票本-二联本图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "4:3", description: "Duplicate 2-part invoice book 产品方案" },
  { slot: "ncr-invoice-books:3-part", label: "NCR发票本-三联本图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "4:3", description: "Triplicate 3-part invoice book 产品方案" },
  { slot: "ncr-invoice-books:private-label", label: "NCR发票本-定制品牌图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "4:3", description: "定制封面、品牌字段、书本标签和经销商 SKU 方案" },
  { slot: "ncr-invoice-books:production", label: "NCR发票本-生产质检图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "4:3", description: "复写测试、编号连续性、撕线、装订和本数质检模块" },
  { slot: "ncr-invoice-books:packing", label: "NCR发票本-私牌包装图", page: "NCR发票本", pageUrl: "/products/ncr-invoice-books", aspect: "4:3", description: "书本标签、收缩包装、内箱和出口外箱模块" },
  { slot: "ncr-applications:government-ncr-forms:hero", label: "NCR应用页-Government 顶部图", page: "NCR应用页", pageUrl: "/products/government-ncr-forms", aspect: "16:9", description: "Government NCR Forms 应用页 Hero 图" },
  { slot: "ncr-applications:port-customs-air-cargo-ncr-forms:hero", label: "NCR应用页-港口海关空运 顶部图", page: "NCR应用页", pageUrl: "/products/port-customs-air-cargo-ncr-forms", aspect: "16:9", description: "Port, Customs & Air Cargo NCR Forms 应用页 Hero 图" },
  { slot: "ncr-applications:field-service-ncr-forms:hero", label: "NCR应用页-现场服务 顶部图", page: "NCR应用页", pageUrl: "/products/field-service-ncr-forms", aspect: "16:9", description: "Field Service NCR Forms 应用页 Hero 图" },
  { slot: "ncr-applications:auto-repair-ncr-forms:hero", label: "NCR应用页-汽修车检 顶部图", page: "NCR应用页", pageUrl: "/products/auto-repair-ncr-forms", aspect: "16:9", description: "Auto Repair NCR Forms 应用页 Hero 图" },
  { slot: "auto-repair-ncr-forms:inspection", label: "汽修NCR-车辆检查场景图", page: "汽修NCR表格", pageUrl: "/products/auto-repair-ncr-forms", aspect: "4:3", description: "客户问题与车辆接车检查模块" },
  { slot: "auto-repair-ncr-forms:repair-order", label: "汽修NCR-维修工单图", page: "汽修NCR表格", pageUrl: "/products/auto-repair-ncr-forms", aspect: "4:3", description: "维修工单和估价表模块" },
  { slot: "auto-repair-ncr-forms:damage-report", label: "汽修NCR-车况与损伤记录图", page: "汽修NCR表格", pageUrl: "/products/auto-repair-ncr-forms", aspect: "4:3", description: "车辆检查和损伤报告模块" },
  { slot: "auto-repair-ncr-forms:authorization", label: "汽修NCR-维修授权表图", page: "汽修NCR表格", pageUrl: "/products/auto-repair-ncr-forms", aspect: "4:3", description: "估价和维修授权模块" },
  { slot: "auto-repair-ncr-forms:invoice", label: "汽修NCR-发票收据本图", page: "汽修NCR表格", pageUrl: "/products/auto-repair-ncr-forms", aspect: "4:3", description: "维修发票和收据本模块" },
  { slot: "auto-repair-ncr-forms:production", label: "汽修NCR-生产质检图", page: "汽修NCR表格", pageUrl: "/products/auto-repair-ncr-forms", aspect: "4:3", description: "生产、编号、复购规格和质检模块" },
  { slot: "ncr-applications:logistics-warehouse-ncr-forms:hero", label: "NCR应用页-物流仓储 顶部图", page: "NCR应用页", pageUrl: "/products/logistics-warehouse-ncr-forms", aspect: "16:9", description: "Logistics & Warehouse NCR Forms 应用页 Hero 图" },
  { slot: "ncr-applications:medical-pharmacy-ncr-forms:hero", label: "NCR应用页-医疗药房 顶部图", page: "NCR应用页", pageUrl: "/products/medical-pharmacy-ncr-forms", aspect: "16:9", description: "Medical & Pharmacy NCR Forms 应用页 Hero 图" },

  // 热敏标签 - 应用场景图（在 label-sizes-data.tsx 中用 slotKey 引用）
  { slot: "thermal-labels:applications:ecommerce", label: "热敏标签-电商物流", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "E-commerce / 4x6 主流电商发货标签场景" },
  { slot: "thermal-labels:applications:amazon", label: "热敏标签-亚马逊 FBA", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "Amazon FBA 仓储发货标签场景" },
  { slot: "thermal-labels:applications:shipping", label: "热敏标签-国际快递", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "UPS/FedEx/DHL/DPD 国际快递面单场景" },
  { slot: "thermal-labels:applications:logistics", label: "热敏标签-物流配送", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "USPS/Hermes/Evri 配送面单场景" },
  { slot: "thermal-labels:applications:warehouse", label: "热敏标签-仓库管理", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "仓库 WMS 系统打印标签场景" },
  { slot: "thermal-labels:applications:crossborder", label: "热敏标签-跨境贸易", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "跨境电商/海关合规标签场景" },
  { slot: "thermal-labels:applications:barcode", label: "热敏标签-条码打印", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "条码/2D 码扫描标签场景" },
  { slot: "thermal-labels:applications:inventory", label: "热敏标签-库存盘点", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "库存/资产盘点标签场景" },
  { slot: "thermal-labels:applications:retail", label: "热敏标签-零售货架", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "零售价签/货架标签场景" },
  { slot: "thermal-labels:applications:product", label: "热敏标签-产品标识", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "SKU/产品 ID 标签场景" },
  { slot: "thermal-labels:applications:asset", label: "热敏标签-资产追踪", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "IT 资产/设备追踪标签场景" },
  { slot: "thermal-labels:applications:packaging", label: "热敏标签-产品包装", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "零售包装大标签场景" },
  { slot: "thermal-labels:applications:food", label: "热敏标签-食品标签", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "食品安全/日期标签场景" },
  { slot: "thermal-labels:applications:pharmacy", label: "热敏标签-药品标签", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "处方药/非处方药标签场景" },
  { slot: "thermal-labels:applications:europe", label: "热敏标签-欧洲电商", page: "热敏标签", pageUrl: "/products/thermal-labels", aspect: "4:3", description: "A6 欧洲电商标签场景" },

  // 热敏纸卷 - 应用场景图（在 roll-sizes-data.tsx 中用 slotKey 引用）
  { slot: "thermal-rolls:applications:pos", label: "热敏纸卷-POS 收银", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "POS 收银机收据打印场景" },
  { slot: "thermal-rolls:applications:restaurant", label: "热敏纸卷-餐厅打印", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "餐厅厨房/前台小票场景" },
  { slot: "thermal-rolls:applications:retail", label: "热敏纸卷-零售结账", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "零售门店结账小票场景" },
  { slot: "thermal-rolls:applications:supermarket", label: "热敏纸卷-超市收银", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "超市大批量收银小票场景" },
  { slot: "thermal-rolls:applications:hotel", label: "热敏纸卷-酒店前台", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "酒店前台账单/收据场景" },
  { slot: "thermal-rolls:applications:taxi", label: "热敏纸卷-出租车计价器", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "出租车计价器小票场景" },
  { slot: "thermal-rolls:applications:parking", label: "热敏纸卷-停车收费", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "停车场自助收费机小票场景" },
  { slot: "thermal-rolls:applications:mobile", label: "热敏纸卷-移动支付终端", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "mPOS/Square/Clover 移动支付小票场景" },
  { slot: "thermal-rolls:applications:handheld", label: "热敏纸卷-手持打印机", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "现场服务/配送手持打印机场景" },
  { slot: "thermal-rolls:applications:lottery", label: "热敏纸卷-彩票/游戏", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "彩票/游戏终端票据场景" },
  { slot: "thermal-rolls:applications:hospitality", label: "热敏纸卷-酒店服务", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "酒店宾客服务结算场景" },
  { slot: "thermal-rolls:applications:kiosk", label: "热敏纸卷-自助终端", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "自助点单/购票终端场景" },
  { slot: "thermal-rolls:applications:credit-card", label: "热敏纸卷-信用卡终端", page: "热敏纸卷", pageUrl: "/products/thermal-rolls", aspect: "4:3", description: "信用卡支付终端小票场景" },

  // 罐头标签 - 应用场景图（在 can-labels-data.tsx 中用 slotKey 引用）
  { slot: "can-labels:applications:beverage", label: "罐头标签-饮料场景", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "啤酒/能量饮料/碳酸饮料等饮料罐应用图" },
  { slot: "can-labels:applications:food", label: "罐头标签-食品场景", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "汤/水果/肉类等食品罐应用图" },
  { slot: "can-labels:applications:canning", label: "罐头标签-餐饮服务", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "餐饮/批量大罐应用图" },
  { slot: "can-labels:applications:retail", label: "罐头标签-零售货架", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "超市货架陈列应用图" },
  { slot: "can-labels:applications:pet-food", label: "罐头标签-宠物食品", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "宠物湿粮罐应用图" },
  { slot: "can-labels:applications:industrial", label: "罐头标签-工业品", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "润滑油/工业流体罐应用图" },
  { slot: "can-labels:applications:chemical", label: "罐头标签-化工品", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "GHS 化工品罐应用图" },
  { slot: "can-labels:applications:paint", label: "罐头标签-油漆涂料", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "油漆/涂料罐应用图" },
  { slot: "can-labels:applications:seafood", label: "罐头标签-海产品", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "金枪鱼/沙丁鱼等海产罐应用图" },
  { slot: "can-labels:applications:vegetable", label: "罐头标签-蔬菜", page: "罐头标签", pageUrl: "/products/can-labels", aspect: "4:3", description: "蔬菜/番茄/豆类罐应用图" },

  // 洗涤剂标签 - 应用场景图（在 detergent-labels-data.tsx 中用 slotKey 引用）
  { slot: "detergent-labels:applications:laundry", label: "洗涤标签-洗衣液", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "洗衣液/洗衣粉应用图" },
  { slot: "detergent-labels:applications:dishwash", label: "洗涤标签-洗碗液", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "洗洁精/洗碗液应用图" },
  { slot: "detergent-labels:applications:cleaner", label: "洗涤标签-清洁剂", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "多功能清洁剂/漂白剂/地板清洁剂应用图" },
  { slot: "detergent-labels:applications:handsoap", label: "洗涤标签-洗手液", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "洗手液/泡沫洗手应用图" },
  { slot: "detergent-labels:applications:industrial", label: "洗涤标签-工业清洁", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "工业级清洁产品应用图" },
  { slot: "detergent-labels:applications:retail", label: "洗涤标签-零售陈列", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "超市货架/私品牌陈列应用图" },
  { slot: "detergent-labels:applications:fabric", label: "洗涤标签-织物护理", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "柔顺剂/去渍剂应用图" },
  { slot: "detergent-labels:applications:bathroom", label: "洗涤标签-浴室清洁", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "浴室/瓷砖清洁喷雾应用图" },
  { slot: "detergent-labels:applications:kitchen", label: "洗涤标签-厨房清洁", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "厨房去油/表面清洁应用图" },
  { slot: "detergent-labels:applications:hotel", label: "洗涤标签-酒店用品", page: "洗涤剂标签", pageUrl: "/products/detergent-labels", aspect: "4:3", description: "酒店/酒店配套清洁用品应用图" },
  { slot: "thermal-labels:blank-hero", label: "热敏标签 空白 顶部图", page: "热敏空白标签", pageUrl: "/products/thermal-labels/blank", aspect: "16:9" },
  { slot: "thermal-labels:custom-hero", label: "热敏标签 定制 顶部图", page: "热敏定制标签", pageUrl: "/products/thermal-labels/custom-printed", aspect: "16:9" },
  { slot: "thermal-paper-rolls:blank-hero", label: "热敏纸卷 空白 顶部图", page: "热敏空白纸卷", pageUrl: "/products/thermal-paper-rolls/blank", aspect: "16:9" },
  { slot: "thermal-paper-rolls:custom-hero", label: "热敏纸卷 定制 顶部图", page: "热敏定制纸卷", pageUrl: "/products/thermal-paper-rolls/custom-printed", aspect: "16:9" },
  { slot: "can-labels:blank-hero", label: "罐头标签 空白 顶部图", page: "罐头空白标签", pageUrl: "/products/can-labels/blank", aspect: "16:9" },
  { slot: "can-labels:custom-hero", label: "罐头标签 定制 顶部图", page: "罐头定制标签", pageUrl: "/products/can-labels/custom-printed", aspect: "16:9" },
  { slot: "detergent-labels:blank-hero", label: "洗涤剂标签 空白 顶部图", page: "洗涤空白标签", pageUrl: "/products/detergent-labels/blank", aspect: "16:9" },
  { slot: "detergent-labels:custom-hero", label: "洗涤剂标签 定制 顶部图", page: "洗涤定制标签", pageUrl: "/products/detergent-labels/custom-printed", aspect: "16:9" },

  // ===== 市场页面 =====
  { slot: "markets:africa-hero", label: "非洲市场 顶部图", page: "非洲市场", pageUrl: "/markets/africa", aspect: "16:9" },
  { slot: "markets:southeast-asia-hero", label: "东南亚市场 顶部图", page: "东南亚市场", pageUrl: "/markets/southeast-asia", aspect: "16:9" },
  { slot: "markets:middle-east-hero", label: "中东市场 顶部图", page: "中东市场", pageUrl: "/markets/middle-east", aspect: "16:9" },
  { slot: "markets:middle-east-africa-hero", label: "中东非洲 顶部图", page: "中东非洲市场", pageUrl: "/markets/middle-east-africa", aspect: "16:9" },
  { slot: "markets:europe-hero", label: "欧洲市场 顶部图", page: "欧洲市场", pageUrl: "/markets/europe", aspect: "16:9" },
  // 各国子页面 hero
  { slot: "markets:ghana-hero", label: "加纳 顶部图", page: "加纳市场", pageUrl: "/markets/africa/ghana", aspect: "16:9" },
  { slot: "markets:kenya-hero", label: "肯尼亚 顶部图", page: "肯尼亚市场", pageUrl: "/markets/africa/kenya", aspect: "16:9" },
  { slot: "markets:nigeria-hero", label: "尼日利亚 顶部图", page: "尼日利亚市场", pageUrl: "/markets/africa/nigeria", aspect: "16:9" },
  { slot: "markets:ethiopia-hero", label: "埃塞俄比亚 顶部图", page: "埃塞俄比亚市场", pageUrl: "/markets/africa/ethiopia", aspect: "16:9" },
  { slot: "markets:south-africa-hero", label: "南非 顶部图", page: "南非市场", pageUrl: "/markets/africa/south-africa", aspect: "16:9" },
  { slot: "markets:tanzania-hero", label: "坦桑尼亚 顶部图", page: "坦桑尼亚市场", pageUrl: "/markets/africa/tanzania", aspect: "16:9" },
  { slot: "markets:egypt-hero", label: "埃及 顶部图", page: "埃及市场", pageUrl: "/markets/middle-east/egypt", aspect: "16:9" },
  { slot: "markets:saudi-arabia-hero", label: "沙特 顶部图", page: "沙特市场", pageUrl: "/markets/middle-east/saudi-arabia", aspect: "16:9" },
  { slot: "markets:turkey-hero", label: "土耳其 顶部图", page: "土耳其市场", pageUrl: "/markets/middle-east/turkey", aspect: "16:9" },
  { slot: "markets:uae-hero", label: "阿联酋 顶部图", page: "阿联酋市场", pageUrl: "/markets/middle-east/uae", aspect: "16:9" },
  { slot: "markets:italy-hero", label: "意大利 顶部图", page: "意大利市场", pageUrl: "/markets/europe/italy", aspect: "16:9" },
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

  // ===== Till Rolls 聚合页 - 按尺寸卡片图（admin 可单独换图）=====
  { slot: "till-rolls:size:80x80mm", label: "Till Rolls 卡片图 - 80x80mm", page: "Till Rolls", pageUrl: "/products/till-rolls", aspect: "4:3" },
  { slot: "till-rolls:size:57x50mm", label: "Till Rolls 卡片图 - 57x50mm", page: "Till Rolls", pageUrl: "/products/till-rolls", aspect: "4:3" },
  { slot: "till-rolls:size:80x70mm", label: "Till Rolls 卡片图 - 80x70mm", page: "Till Rolls", pageUrl: "/products/till-rolls", aspect: "4:3" },
  { slot: "till-rolls:size:110x80mm", label: "Till Rolls 卡片图 - 110x80mm", page: "Till Rolls", pageUrl: "/products/till-rolls", aspect: "4:3" },
  { slot: "till-rolls:size:57x40mm", label: "Till Rolls 卡片图 - 57x40mm", page: "Till Rolls", pageUrl: "/products/till-rolls", aspect: "4:3" },
  { slot: "till-rolls:size:57x30mm", label: "Till Rolls 卡片图 - 57x30mm", page: "Till Rolls", pageUrl: "/products/till-rolls", aspect: "4:3" },
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
