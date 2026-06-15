# zxpapers.com 国家页面设计规划

## 一、先说结论

`zxpapers.com` 现在已经有完整的国家页面体系，不是从 0 开始设计，而是要把现有 `/markets -> 区域页 -> 国家页` 结构从“能覆盖关键词”升级成“更强本地化 + 更强转化 + 更统一模板”。

当前国家页的核心问题不是没有内容，而是：
- 页面模块不够统一，不同国家页结构差异较大
- 本地化深度不稳定，有的页很强，有的页偏模板化
- CTA、WhatsApp 文案、信任徽章、物流模块缺少统一配置层
- SEO 虽然覆盖了很多页，但部分页面容易出现“只是换国家名”的感受

所以国家页的目标应该是：
1. 承接国家/地区采购关键词
2. 让买家快速判断“你是否懂我的市场”
3. 让买家在 1 屏到 3 屏内完成询盘动作
4. 为后续批量扩国家页建立统一模板

---

## 二、现有结构判断

### 1. 当前路由结构是合理的

站内已经形成三级结构：
- `/markets`：市场总入口
- `/markets/{region}`：区域聚合页
- `/markets/{region}/{country}`：国家页

代表文件：
- [markets/page.tsx](src/app/markets/page.tsx)
- [markets/southeast-asia/page.tsx](src/app/markets/southeast-asia/page.tsx)
- [markets/southeast-asia/thailand/page.tsx](src/app/markets/southeast-asia/thailand/page.tsx)
- [markets/middle-east/uae/page.tsx](src/app/markets/middle-east/uae/page.tsx)
- [markets/africa/kenya/page.tsx](src/app/markets/africa/kenya/page.tsx)

这个信息架构本身没有问题，可以继续沿用。

### 2. 当前国家页已经有一部分正确方向

从抽样页面看，现有国家页已经开始做这些事：
- 独立 metadata / canonical / breadcrumb schema
- 独立 Hero 文案
- 独立热门产品推荐
- 独立物流/港口信息
- 独立 FAQ
- 独立 CTA 或询盘表单

这说明国家页不是“要不要做”，而是“怎么统一做得更强”。

### 3. 现在最需要优化的是模板标准化

目前不同国家页差异比较大：
- Thailand 页较轻，模块少，偏“基础国家页”
- UAE 页比较完整，已经接近可复制模板
- Kenya 页本地感最强，但模块数量和表现形式又跟 UAE 不同

这会导致：
- 用户体验不统一
- 后续新增国家页成本高
- 内容质量依赖单页手工发挥
- 不利于后期组件化和批量扩页

---

## 三、国家页应该承担什么角色

国家页不是简单的 SEO 页面，也不是纯介绍页。对 `zxpapers.com` 这种 B2B 外贸站来说，国家页应该同时承担 4 个任务：

### 1. 关键词承接
承接类似这些搜索意图：
- thermal paper supplier in Thailand
- thermal paper rolls Kenya
- receipt paper UAE distributor
- POS paper rolls for Philippines
- thermal rolls supplier South Africa

### 2. 市场理解证明
让客户快速感受到：
- 你知道当地常用规格
- 你知道当地港口和交货方式
- 你知道当地采购商关心的认证/包装/语言
- 你知道当地常见应用场景

### 3. 产品分发
国家页不是终点，而是流量分发枢纽，要把用户导向：
- 对应规格页
- 对应产品页
- OEM 页
- Contact 页
- WhatsApp 咨询

### 4. 询盘转化
国家页最终目标是产生询盘，所以页面设计必须围绕一个问题：
**用户是否能在最短时间内知道该发什么询盘给你。**

---

## 四、推荐的国家页标准模板

建议把所有国家页统一为 8 个核心模块，按这个顺序排布。

## 模块 1：Hero 首屏

### 目标
3 秒内讲清：
- 你卖什么
- 卖给哪个国家
- 你能提供什么交易支持
- 下一步应该点哪里

### 必须包含的内容
- 国家名 + 核心关键词的 H1
- 一句本地化价值主张
- 4–6 个 trust badges
- 2 个 CTA：主询盘 + WhatsApp
- 4 个简短 stats

### 推荐文案结构
- H1：`Thermal Paper Rolls Supplier for {Country}`
- 副标题：`Factory-direct supply for {country} distributors. CIF {port}. {local compliance / packaging / OEM support}.`
- Trust badges 示例：
  - `CIF {Port}`
  - `BPA-Free`
  - `ISO 9001`
  - `{FTA / COO / FORM E / GCC Re-export}`
  - `OEM Supported`

### 设计建议
- 保留国家页头图，但不要只当背景图，要强化“采购决策信息”
- stats 不要只放空泛数字，要尽量和交易有关：
  - transit days
  - common sizes
  - MOQ
  - quote response time

---

## 模块 2：Why This Market Matters / 市场机会

### 目标
告诉用户：你理解这个市场，不是机械套模板。

### 应包含的信息
- 当地 POS/零售/物流/餐饮/银行等主要需求来源
- 为什么这个国家会采购热敏纸/标签
- 当地常见应用场景

### 适合展示的内容形式
- 3 个数据卡片
- 1 段市场说明
- 1 行典型行业关键词

### 示例维度
- Thailand：零售、餐饮、旅游业、ASEAN 分销
- Kenya：M-Pesa、银行 POS、East Africa 中转
- UAE：JAFZA、GCC 转口、高端零售与餐饮、阿拉伯语包装

### 注意
这里不要堆大量“行业大词”，要让内容带有国家特征。

---

## 模块 3：Popular Products for {Country}

### 目标
把国家页和产品页真正连起来。

### 推荐结构
每个国家页推荐 3–5 个产品卡片，卡片信息统一：
- 产品名 / 规格
- 为什么适合该国
- 应用场景
- MOQ / 常见参数
- 两个动作：`View Details` + `Get Quote`

### 推荐选品逻辑
不要每个国家都放同一组产品，应基于该国常见需求分发：
- 以热敏收银纸为主的市场：80×80mm / 57×50mm / 57×40mm
- 电商物流强的市场：4x6 shipping labels
- 私牌经销型市场：OEM / custom packaging
- 监管要求强的市场：BPA-free / phenol-free 相关产品

### 关键点
每张卡片都要回答一句话：
**“为什么这个产品适合这个国家？”**

---

## 模块 4：Local Buying Preferences / 本地采购偏好

### 目标
这是国家页和普通产品页拉开差距的关键模块，建议所有国家页都加。

### 可放的字段
- Most popular sizes
- Common core sizes
- Preferred carton packing
- Packaging language
- Common buyer types
- Price sensitivity / quality sensitivity
- BPA-free / phenol-free demand
- OEM brand demand

### 推荐形式
用 6–8 条简洁的表格或信息卡：
- `Popular size: 80×80mm`
- `Common port: Jebel Ali`
- `Packaging language: English / Arabic`
- `Buyer type: distributor / supermarket supplier / POS dealer`
- `Compliance concern: BPA-free / REACH / food-contact`

### 价值
这个模块最能避免模板化，也最利于 SEO 差异化。

---

## 模块 5：Shipping & Trade Terms

### 目标
让买家立刻知道你能不能发到他那里，以及他要问你什么。

### 必备字段
- Destination port
- Transit time
- Incoterms
- Container / LCL options
- Required trade docs
- Re-export capability（如适用）

### 推荐设计
做成统一的“物流与贸易条件”卡片模块，所有国家页格式一致。

### 可扩展点
按国家差异添加：
- `FORM E`（东盟）
- `COO / GCC re-export`（中东）
- `COMESA CO`（东非）
- `Arabic bilingual packaging`（阿联酋/沙特）
- `English/French bilingual carton marks`（部分非洲市场）

### 这个模块为什么重要
B2B 买家会非常关注：
- 发哪里
- 多久到
- 什么贸易术语
- 需要什么单证

这是国家页高转化的关键模块之一。

---

## 模块 6：Why Buyers in {Country} Choose Us

### 目标
输出国家级信任理由，而不是全站通用卖点复读。

### 推荐结构
6 个优势卡片即可，每个国家可共用框架、替换文案。

### 建议维度
- Factory direct pricing
- Export experience to this region
- OEM / private label support
- Compliance / certifications
- Flexible MOQ
- Fast quote / WhatsApp communication

### 优化建议
其中至少 2 条必须与该国强相关，例如：
- UAE：Arabic OEM packaging / GCC re-export
- Kenya：M-Pesa compatibility / East Africa gateway
- Thailand：FORM E / ASEAN distributor support

---

## 模块 7：FAQ for {Country} Buyers

### 目标
覆盖长尾问题、补足 SEO、消除询盘前犹豫。

### 推荐 FAQ 方向
每个国家页至少 5–6 条 FAQ，优先覆盖：
- MOQ 是多少
- 能否做 CIF 到某港口
- 是否有本地化包装
- 是否支持相关贸易证书
- 常见规格是什么
- 如何索取 price list / sample

### 注意
FAQ 不要全站复制，至少做到：
- 港口名不同
- 单证不同
- 买家类型不同
- 语言/包装不同
- 常见产品不同

---

## 模块 8：Bottom CTA + Inquiry Form

### 目标
把流量真正收口。

### 推荐形式
国家页底部建议固定二选一：
- 强销售型国家页：`CTA + InquiryForm`
- 较轻量国家页：`CTA + WhatsApp + Contact link`

### 最佳实践
询盘文案不要泛泛写 `Contact Us`，而要用国家语境：
- `Get CIF Jebel Ali Quote`
- `Request Kenya Price List`
- `Ask for Thailand FORM E Pricing`

### 表单建议
如果后续愿意继续优化，建议国家页表单默认预填一个隐藏来源字段：
- source page
- target market
- target country

这样后台能按国家追踪询盘质量。

---

## 五、推荐的信息架构顺序

国家页推荐顺序如下：

1. Hero
2. Market Opportunity / Why This Market Matters
3. Popular Products
4. Local Buying Preferences
5. Shipping & Trade Terms
6. Why Choose Us
7. FAQ
8. CTA / Inquiry Form

这个顺序的逻辑是：
- 先建立相关性
- 再给产品
- 再补交易信息
- 再建立信任
- 最后转化

比“Hero -> 产品 -> FAQ -> CTA”更完整，也更适合 B2B 采购决策。

---

## 六、不同国家页面应该重点强调什么

## 1. 东南亚国家页

### 重点关键词
- 常用规格
- ASEAN / FORM E
- 零售、餐饮、物流
- 快速补货

### 应重点突出
- 80×80mm / 57×50mm
- 港口与 CIF
- 东盟关税文件
- 中小批量补货
- 分销/OEM

### 页面气质
偏“高频采购 + 补货效率 + 性价比”。

## 2. 中东国家页

### 重点关键词
- Premium market
- GCC re-export
- Arabic packaging
- high quality / BPA-free

### 应重点突出
- 阿拉伯语包装
- Jebel Ali / GCC 转口
- L/C 支持
- 高端零售、餐饮、商超
- 更高品质与认证能力

### 页面气质
偏“高客单价 + 质量可信 + 转口能力”。

## 3. 非洲国家页

### 重点关键词
- POS terminal growth
- mobile money
- bank / agent network
- East/West Africa gateway

### 应重点突出
- 57×50mm / 57×40mm 等移动 POS 常用规格
- 银行、代理点、移动支付适配
- Mombasa / Lagos / Durban 等港口
- 区域再分销能力
- 首单灵活 MOQ / LCL

### 页面气质
偏“实用、稳定供货、分销能力强”。

---

## 七、SEO 设计建议

## 1. 每个国家页必须有自己的核心差异字段

不要只是替换：
- 国家名
- 港口名
- 1–2 个数字

至少保证每页在下面 5 类内容里有 3 类明显不同：
- 推荐规格不同
- 市场场景不同
- 物流/单证不同
- 包装语言不同
- FAQ 不同

## 2. metadata 策略

建议继续保留：
- 独立 title
- 独立 description
- canonical
- openGraph
- breadcrumb schema

另外建议加强：
- 标题里加入国家名 + 主产品词
- 描述里加入港口 / 交易术语 / OEM / 认证关键词
- 控制描述更具体，不要过度复用固定句式

## 3. 结构化数据建议

国家页建议保留：
- `BreadcrumbList`
- `FAQPage`（如果 FAQ 足够稳定）
- `Organization`（全站统一）

如果没有真实价格，不建议硬上价格型 `Offer`。

## 4. 内链策略

国家页必须形成 3 类内链：
- 向上：区域页 / markets 总页
- 横向：相邻国家页
- 向下：具体产品页 / OEM 页 / 联系页

建议在页面中显式加入：
- `Related Countries in {Region}`
- `Best-selling Products for {Country}`
- `Need custom packaging? Visit OEM page`

---

## 八、组件化落地建议

如果后面要真正优化代码，我建议把国家页抽成“数据驱动模板”，而不是继续每个页面独立手写。

## 推荐拆分的组件

### 1. `MarketCountryHero`
输入：
- country
- region
- port
- title
- subtitle
- trustBadges
- stats
- ctas
- heroImage

### 2. `CountryPopularProducts`
输入：
- sectionTitle
- products[]

### 3. `CountryBuyingPreferences`
输入：
- preferences[]

### 4. `CountryShippingTerms`
输入：
- destinationPort
- transitDays
- incoterms
- docs
- containerOptions

### 5. `CountryWhyChooseUs`
输入：
- features[]

### 6. `CountryFaq`
输入：
- faqs[]

### 7. `CountryBottomCta`
输入：
- headline
- description
- ctas
- showInquiryForm

---

## 九、建议建立统一配置层

这是目前国家页优化里最值得做的工程动作。

建议新增一份国家页配置数据，例如：
- `src/config/marketCountries.ts`

### 每个国家配置建议包含
- `countryName`
- `region`
- `countryCode`
- `slug`
- `heroSlot`
- `title`
- `description`
- `port`
- `transitDays`
- `trustBadges[]`
- `stats[]`
- `popularProducts[]`
- `buyingPreferences[]`
- `shippingRows[]`
- `whyUs[]`
- `faqs[]`
- `whatsappTemplate`

### 这样做的好处
- 新增国家页时只补数据，不重写整页
- CTA 文案统一
- WhatsApp 预填消息统一
- SEO 文案风格统一
- 容易排查链接失效和内容遗漏

这也和现有报告里提到的“建立路由/CTA/文案统一配置层”方向一致。

---

## 十、国家页内容生产规则

为了避免后续批量生产国家页变成薄内容，建议定 5 条内容规则：

### 规则 1：每页至少回答 4 个本地问题
例如：
- 发哪个港口
- 常买哪些规格
- 需要哪些文件
- 是否支持本地包装/语言

### 规则 2：每页至少推荐 3 个不同产品入口
不能只有一个大而泛的联系按钮。

### 规则 3：每页至少 5 条国家化 FAQ
FAQ 是差异化和长尾承接的重要来源。

### 规则 4：至少一个“本地采购偏好”模块
这是防模板化的核心模块。

### 规则 5：CTA 必须带国家语境
不要全站都写同一句 `Get Quote`。

---

## 十一、优先级建议

## 第一优先级：先统一模板
先不要急着继续加国家页，优先把现有代表页打磨成标准模板。

建议优先以这 3 个页面做模板基准：
- [markets/middle-east/uae/page.tsx](src/app/markets/middle-east/uae/page.tsx)
- [markets/africa/kenya/page.tsx](src/app/markets/africa/kenya/page.tsx)
- [markets/southeast-asia/thailand/page.tsx](src/app/markets/southeast-asia/thailand/page.tsx)

原因：
- UAE：结构最完整
- Kenya：本地化 strongest
- Thailand：可作为“轻页补强”的典型

## 第二优先级：补一个缺失模块
所有国家页优先补上 `Local Buying Preferences` 模块。

因为这个模块最能：
- 提升差异化
- 增加真实感
- 强化采购导向
- 降低 SEO 模板感

## 第三优先级：统一 CTA 与 WhatsApp 模板
把国家页 CTA 统一到配置层，避免文案和跳转分裂。

## 第四优先级：再批量扩页
等模板标准化后，再新增更多国家页或扩展更多区域。

---

## 十二、最终建议

如果只用一句话总结：

**国家页不是“国家名 + 产品名”的 SEO 占位页，而应该是“这个国家买家为什么会向你询盘”的成交页。**

对 `zxpapers.com` 来说，最优路线不是重做结构，而是：
- 保留现有 `/markets -> 区域 -> 国家` 路由
- 统一国家页模板为 8 个核心模块
- 增加本地采购偏好模块
- 建立国家页统一配置层
- 先把 UAE / Kenya / Thailand 打磨成标准样板，再批量复制

这样做之后，国家页会同时提升：
- SEO 质量
- 页面差异化
- 买家信任感
- 产品分发效率
- 询盘转化率
