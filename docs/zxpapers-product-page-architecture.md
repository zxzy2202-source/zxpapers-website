# zxpapers 产品聚合页与详情页架构建议

## 一、结论先说

基于当前站点的产品结构、国家页分发逻辑、B2B 买家画像、采购痛点，以及 SEO / GEO 对“问题可回答、意图可覆盖、页面可引用”的要求，`zxpapers` 的产品体系建议控制在：

- **产品聚合页：17 个**
- **产品详情页：34 个**
- **产品相关总页数：51 个**

这个数量不是为了“做多”，而是为了同时覆盖 4 类核心搜索意图：

1. **品类词**：用户先找大类供应商，比如 `thermal paper rolls supplier`、`thermal labels manufacturer`
2. **用途词**：用户按业务场景找，比如 `receipt paper rolls`、`shipping labels`、`till rolls`
3. **规格词**：用户已经明确型号或尺寸，比如 `80x80 thermal paper rolls`、`4x6 thermal labels`
4. **风险/要求词**：用户按合规、OEM、材料属性找，比如 `bpa free thermal paper`、`custom printed thermal rolls`

对 B2B 站来说，**聚合页负责承接意图、解释选择逻辑、分发到详情页；详情页负责承接规格级搜索、采购确认与转化。**

---

## 二、我这次判断的依据

### 1. 当前站点已经有两套有效骨架

现有站点已经明确把页面体系分成：

- **产品体系**：`/products -> 品类页 -> 规格/blank/custom 页`
- **市场体系**：`/markets -> 区域页 -> 国家页`

可参考：
- [src/app/products/page.tsx:33](src/app/products/page.tsx:33)
- [src/config/navigation.ts:40](src/config/navigation.ts:40)
- [src/config/marketCountryPages.ts:42](src/config/marketCountryPages.ts:42)
- [src/components/shared/MarketCountryPageTemplate.tsx:66](src/components/shared/MarketCountryPageTemplate.tsx:66)

这说明网站不是缺页面，而是需要把页面数量和层级重新定义成更符合买家采购路径的结构。

### 2. 当前产品体系已经暴露出真实的买家入口

从现有导航和路由看，买家并不只按“产品名”搜索，而是明显存在这些入口：

- 品类入口：`thermal paper rolls`、`thermal labels`、`ncr forms`
- 应用入口：`receipt paper rolls`、`shipping labels`、`till rolls`
- 合规入口：`bpa-free thermal paper`
- 规格入口：`80x80mm`、`57x50mm`、`4x6in`
- 定制入口：`custom printed`

可参考：
- [src/config/navigation.ts:43](src/config/navigation.ts:43)
- [src/app/products/receipt-paper-rolls/page.tsx:10](src/app/products/receipt-paper-rolls/page.tsx:10)
- [src/app/products/shipping-labels/page.tsx:8](src/app/products/shipping-labels/page.tsx:8)
- [src/app/products/bpa-free-thermal-paper/page.tsx:10](src/app/products/bpa-free-thermal-paper/page.tsx:10)

### 3. 国家页已经证明“本地化采购痛点”是有效逻辑

国家页模板里已经不是简单写国家名，而是围绕：

- 当地常见规格
- 采购偏好
- 港口与贸易条款
- FAQ
- 推荐产品

这套方法同样应该被复制到产品页设计里：**不是只写产品是什么，而是要写买家为什么买、怎么选、怕什么、怎么下单。**

可参考：
- [src/config/marketCountryPages.ts:148](src/config/marketCountryPages.ts:148)
- [src/components/shared/MarketCountryPageTemplate.tsx:143](src/components/shared/MarketCountryPageTemplate.tsx:143)

---

## 三、客户画像与页面需求映射

建议把产品页体系服务以下 6 类核心买家。

### 画像 1：进口商 / 分销商
核心诉求：稳定供货、MOQ、柜量、交期、私牌能力、价格体系

最需要的页面：
- 品类聚合页
- blank / custom 分流页
- 规格详情页
- OEM 入口页

### 画像 2：POS 设备商 / 收银纸经销商
核心诉求：常用尺寸、打印兼容性、卷径纸芯、长期复购稳定性

最需要的页面：
- receipt paper rolls
- till rolls
- 80x80 / 57x50 / 57x40 / 57x30 详情页

### 画像 3：电商卖家 / 仓储 / 3PL
核心诉求：4x6、卷装/折叠、兼容 Zebra / Dymo / Rollo、走货稳定

最需要的页面：
- shipping labels
- thermal labels
- 4x6 / 2x4 / 2x1 等详情页

### 画像 4：OEM / 私牌客户
核心诉求：定制印刷、包装、打样、起订量、IP 保护

最需要的页面：
- custom printed thermal rolls
- custom printed thermal labels
- 品类详情页中的 OEM 模块

### 画像 5：法规敏感买家
核心诉求：BPA-free、phenol-free、REACH、FDA、Prop 65、RoHS

最需要的页面：
- bpa-free thermal paper
- phenol-free thermal paper
- 相关规格页中的合规模块

### 画像 6：快消 / 工业标签买家
核心诉求：材质适配、防水防化、尺寸适配、应用场景说明

最需要的页面：
- can labels
- detergent / household chemical labels
- 具体规格详情页

---

## 四、建议的产品聚合页数量：17 个

这里的“聚合页”指的是：

- 能承接某一类关键词主题
- 能汇总多个规格/子页面
- 能解释选型逻辑
- 能把用户继续分发到更具体页面

### A. 一级总入口：1 个

1. `/products`

作用：全站产品总目录页，覆盖最宽泛的 catalog / manufacturer / wholesale 意图。

### B. 核心品类聚合页：5 个

2. `/products/thermal-paper-rolls`
3. `/products/thermal-labels`
4. `/products/can-labels`
5. `/products/detergent-labels`
6. `/products/ncr-forms`

作用：按制造能力和产品大类承接搜索，是最核心的供应商级 landing pages。

### C. 应用/采购任务型聚合页：5 个

7. `/products/receipt-paper-rolls`
8. `/products/till-rolls`
9. `/products/shipping-labels`
10. `/products/linerless-labels`
11. `/products/bpa-free-thermal-paper`

作用：按买家任务切入，而不是按工厂内部分类切入。对 SEO 和 GEO 都更友好，因为用户和 AI 更常问“我要什么用途的纸/标签”。

### D. 建议新增的高意图聚合页：5 个

12. `/products/phenol-free-thermal-paper`
13. `/products/barcode-labels`
14. `/products/product-labels`
15. `/products/custom-printed-thermal-rolls`
16. `/products/custom-printed-thermal-labels`

### E. 建议保留的补充聚合页：1 个

17. `/products/colored-thermal-paper`

---

## 五、为什么聚合页是 17 个，不是更多也不是更少

### 少于 14 个会出现的问题

1. **客户画像覆盖不够**
   例如只有 `thermal-labels`，但没有 `shipping-labels` / `barcode-labels` / `product-labels`，不同买家意图会被混在一起。

2. **SEO 关键词层不够完整**
   同一个页面很难同时高质量承接：
   - thermal labels
   - shipping labels
   - barcode labels
   - product labels

3. **GEO 可引用性弱**
   AI 更偏好引用“一个页面回答一个明确问题”的页面，而不是一个超大而模糊的总类页面。

### 多于 20 个会出现的问题

1. 页面之间高度重叠，容易 cannibalization
2. 当前站点内容生产和维护成本会明显上升
3. 若没有稳定差异化数据支撑，页面会变成机械改词

所以对目前的产品宽度来说，**17 个聚合页是可管理、可写深、可做内链的合理上限。**

---

## 六、建议的产品详情页数量：34 个

这里的“详情页”指的是：

- 规格页
- blank / custom 分流页
- 能够直接承接 SKU / size / exact spec 搜索词的页面

### A. Thermal paper rolls：8 个详情页

1. `/products/thermal-paper-rolls/blank`
2. `/products/thermal-paper-rolls/custom-printed`
3. `/products/thermal-rolls/80x80mm`
4. `/products/thermal-rolls/57x50mm`
5. `/products/thermal-rolls/57x40mm`
6. `/products/thermal-rolls/57x30mm`
7. `/products/thermal-rolls/80x70mm`
8. `/products/thermal-rolls/110x80mm`

### B. Thermal labels：8 个详情页

9. `/products/thermal-labels/blank`
10. `/products/thermal-labels/custom-printed`
11. `/products/thermal-labels/4x6in`
12. `/products/thermal-labels/2x1in`
13. `/products/thermal-labels/3x2in`
14. `/products/thermal-labels/4x3in`
15. `/products/thermal-labels/2x4in`
16. `/products/thermal-labels/1x1in`

### C. Can labels：7 个详情页

17. `/products/can-labels/blank`
18. `/products/can-labels/custom-printed`
19. `/products/can-labels/211x400`
20. `/products/can-labels/211x603`
21. `/products/can-labels/300x407`
22. `/products/can-labels/307x510`
23. `/products/can-labels/401x700`

### D. Detergent / household chemical labels：7 个详情页

24. `/products/detergent-labels/blank`
25. `/products/detergent-labels/custom-printed`
26. `/products/detergent-labels/90x120mm`
27. `/products/detergent-labels/80x150mm`
28. `/products/detergent-labels/100x100mm`
29. `/products/detergent-labels/70x200mm`
30. `/products/detergent-labels/120x80mm`

### E. NCR forms：4 个详情页

31. `/products/ncr-forms/2-part`
32. `/products/ncr-forms/3-part`
33. `/products/ncr-forms/4-part`
34. `/products/ncr-forms/multi-part`

---

## 七、为什么详情页是 34 个

### 1. 这是当前产品宽度下最自然的“规格承接层”

你现在的详情页体系，本质上已经接近正确：

- thermal rolls：按高频尺寸拆分
- thermal labels：按高频尺寸拆分
- can / detergent labels：按标准包装尺寸拆分
- NCR：按联数拆分

参考：
- [src/config/navigation.ts:209](src/config/navigation.ts:209)
- [src/config/navigation.ts:218](src/config/navigation.ts:218)
- [src/config/navigation.ts:227](src/config/navigation.ts:227)
- [src/config/navigation.ts:235](src/config/navigation.ts:235)

### 2. 规格页是最接近成交的页面

聚合页解决“我应该看哪类产品”，详情页解决“这个规格能不能直接买”。

详情页必须回答：

- exact size 是什么
- 常见应用场景是什么
- 对应什么打印机或包装物
- MOQ / packing / lead time 是什么
- 是否 BPA-free / OEM / export ready
- 应该点哪里询价

### 3. 34 个足够承接高商业意图，又不会过度碎片化

如果继续拆更多低搜索量规格页，容易造成：

- 内容雷同
- 维护成本高
- 内链分散
- 页面质量稀释

所以在当前阶段，**34 个详情页是合理的第一阶段上限。**

---

## 八、当前站点与目标站点的差距

### 当前已经基本具备

- 产品总入口：有
- 核心品类页：有
- 应用型聚合页：部分有
- 规格详情页：基本有
- 国家页的本地化模板方法：有

### 当前还建议补齐的聚合页

建议新增 5 个：

1. `phenol-free-thermal-paper`
2. `barcode-labels`
3. `product-labels`
4. `custom-printed-thermal-rolls`
5. `custom-printed-thermal-labels`

### 为什么这 5 个值得优先补

#### `phenol-free-thermal-paper`
当前 `bpa-free` 页面覆盖了合规需求，但把 `BPA-free` 和 `phenol-free` 混成一页，容易丢失更强监管意图词。

#### `barcode-labels`
仓储、零售、资产管理买家和 `shipping labels` 并不是同一种人群，需求不同。

#### `product-labels`
做商品标签、价格标签、包装标签的人，也不一定想看运输标签。

#### `custom-printed-thermal-rolls` / `custom-printed-thermal-labels`
OEM 和私牌客户是高价值人群，应该有独立聚合页承接，不要只藏在二级子页里。

---

## 九、每种页面应该怎么写，才符合 SEO / GEO

## 1. 聚合页必须包含的 8 个模块

1. 明确 H1：品类名 + 采购意图
2. 谁在买：buyer types
3. 常见应用场景
4. 如何选规格 / 版本
5. 关键参数或合规信息
6. 子页面入口卡片
7. FAQ
8. 强 CTA：quote / sample / WhatsApp

### 聚合页的核心任务

不是“把产品堆上去”，而是要回答：

- 这类产品适合谁
- 你和别家有什么区别
- 我下一步该点哪个规格页

## 2. 详情页必须包含的 9 个模块

1. exact spec 标题
2. 适配打印机 / 应用场景
3. 规格参数表
4. MOQ / lead time / packaging
5. 适用市场或行业
6. FAQ
7. related sizes
8. OEM / compliance 模块
9. quote CTA

### 详情页的核心任务

不是“介绍产品”，而是要回答：

- 这个规格是不是我现在要采购的那个
- 如果是，我要怎么下单

## 3. GEO 额外要求

为了让 AI 搜索和摘要系统更容易引用，聚合页和详情页都要做到：

- 每页只回答一个核心主题
- 使用清晰的 H2 / FAQ / comparison 结构
- 参数尽量表格化
- 给出买家场景，而不是只写工厂话术
- 内链要明确上下游关系
- schema 与页面正文一致

这方面你现在的产品页和国家页方向已经是对的，尤其是：
- FAQ schema
- breadcrumb schema
- collection/product schema
- 页面内有明确段落结构

参考：
- [src/app/products/page.tsx:50](src/app/products/page.tsx:50)
- [src/app/products/receipt-paper-rolls/page.tsx:53](src/app/products/receipt-paper-rolls/page.tsx:53)
- [src/app/products/shipping-labels/page.tsx:86](src/app/products/shipping-labels/page.tsx:86)
- [src/components/shared/MarketCountryPageTemplate.tsx:51](src/components/shared/MarketCountryPageTemplate.tsx:51)

---

## 十、最终推荐页面矩阵

### 推荐保留并强化的聚合页（12 个现有页）

- `/products`
- `/products/thermal-paper-rolls`
- `/products/thermal-labels`
- `/products/can-labels`
- `/products/detergent-labels`
- `/products/ncr-forms`
- `/products/receipt-paper-rolls`
- `/products/till-rolls`
- `/products/shipping-labels`
- `/products/linerless-labels`
- `/products/bpa-free-thermal-paper`
- `/products/colored-thermal-paper`

### 推荐新增的聚合页（5 个）

- `/products/phenol-free-thermal-paper`
- `/products/barcode-labels`
- `/products/product-labels`
- `/products/custom-printed-thermal-rolls`
- `/products/custom-printed-thermal-labels`

### 推荐保留的详情页（34 个）

按当前规格体系继续维护，不建议继续大规模碎片化扩页。

---

## 十一、执行优先级

### P1：马上补齐

1. `phenol-free-thermal-paper`
2. `custom-printed-thermal-rolls`
3. `custom-printed-thermal-labels`

原因：这 3 类页面商业价值最高，且和现有内容最接近，最快能上线。

### P2：第二批补齐

4. `barcode-labels`
5. `product-labels`

原因：解决 label 类关键词混杂问题，降低 `thermal-labels` 单页承压。

### P3：持续优化

- 强化每个详情页的 buyer scenario、FAQ、shipping、compliance 模块
- 让国家页更系统地链接到对应产品详情页
- 让聚合页和市场页形成双向分发

---

## 十二、最终一句话结论

如果按 `zxpapers` 目前的产品宽度、客户画像和 SEO / GEO 要求来设计，**最合适的产品页结构是 17 个聚合页 + 34 个详情页**。

其中：

- **17 个聚合页**负责覆盖品类词、用途词、风险词、OEM 词
- **34 个详情页**负责覆盖规格词、采购确认词和直接转化词

这套结构已经足够支撑：

- Google 自然搜索承接
- AI 搜索摘要引用
- 国家页到产品页的内链分发
- B2B 买家从“了解”到“询价”的完整路径
