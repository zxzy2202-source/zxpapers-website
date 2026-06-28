# zxpapers 产品聚合页开发执行清单

## 一、目标

这份清单不是再讨论“要不要做这些页”，而是把上一版架构方案直接落成可执行开发顺序。

基于上一版结论，`zxpapers` 的产品聚合页总量建议为 **17 个**。这一版继续往下推进的重点是：

1. 先做哪些页
2. 每一页解决谁的问题
3. 每一页该长什么样
4. 页面之间怎么互相导流
5. 开发时按什么批次推进最省成本

---

## 二、17 个聚合页的优先级

## P1：必须先做好的核心成交页（8 个）

这些页面同时满足 3 个条件：

- 搜索需求最直接
- 商业意图最强
- 与现有详情页和国家页联动价值最高

### 1. `/products`
作用：全站产品总目录，承接最宽泛的 catalog / supplier / manufacturer 搜索。

### 2. `/products/thermal-paper-rolls`
作用：热敏纸主类页，是整站产品流量和商业转化的核心入口。

### 3. `/products/thermal-labels`
作用：标签大类总入口，后续承接 shipping / barcode / product labels 的上游页。

### 4. `/products/receipt-paper-rolls`
作用：承接“收银纸 / cash register paper / receipt rolls”这类直接采购词。

### 5. `/products/shipping-labels`
作用：承接电商、仓储、3PL 的高意图场景词。

### 6. `/products/bpa-free-thermal-paper`
作用：承接法规与合规敏感人群，商业价值高，且容易被 AI 摘要引用。

### 7. `/products/custom-printed-thermal-rolls`
作用：承接 OEM / 私牌客户，不应继续只藏在子页里。

### 8. `/products/custom-printed-thermal-labels`
作用：承接品牌标签、定制标签、私牌包装需求。

### 为什么 P1 是这 8 个

这 8 个页覆盖了最核心的 4 类客户：

- 分销商
- POS / 收银纸买家
- 电商与物流买家
- OEM / 私牌客户

同时，它们与现有路由中的核心入口最吻合：
- [src/config/navigation.ts:43](src/config/navigation.ts:43)
- [src/app/products/page.tsx:112](src/app/products/page.tsx:112)
- [src/app/products/receipt-paper-rolls/page.tsx:79](src/app/products/receipt-paper-rolls/page.tsx:79)
- [src/app/products/shipping-labels/page.tsx:125](src/app/products/shipping-labels/page.tsx:125)

---

## P2：应该尽快补齐的意图分流页（5 个）

这些页面的价值在于：把已经混在一起的搜索意图拆开，减少关键词互相打架。

### 9. `/products/till-rolls`
作用：承接 UK / EU 语境中的 `till rolls` 搜索，和 `receipt paper rolls` 不是完全同一批词。

### 10. `/products/phenol-free-thermal-paper`
作用：从 `bpa-free` 中继续拆出更严格的法规词和高信任词。

### 11. `/products/barcode-labels`
作用：承接仓储、零售、资产管理等场景，不再混入 shipping labels。

### 12. `/products/product-labels`
作用：承接商品标签、包装标签、price label 等更偏零售与包装的搜索。

### 13. `/products/linerless-labels`
作用：这是一个很具体、很专业的品类页，适合做成高质量专题页，而不是弱入口页。

### 为什么 P2 是这 5 个

因为它们解决的是“意图混杂”问题。不是没有流量价值，而是要排在 P1 后面，原因有两个：

1. 先把主类和成交页做强，才能给这些细分页输血。
2. 这些页面更依赖更细的内容差异化，如果主站核心产品框架还没稳定，先做它们会分散资源。

参考现有实现：
- [src/app/products/till-rolls/page.tsx:10](src/app/products/till-rolls/page.tsx:10)
- [src/app/products/linerless-labels/page.tsx:10](src/app/products/linerless-labels/page.tsx:10)

---

## P3：补充型和形象型页面（4 个）

这些页面不是不重要，而是更适合在前两批稳定后强化覆盖面和品牌差异。

### 14. `/products/can-labels`
作用：服务罐装包装客户，但与当前主站热敏纸主线相比，不是第一成交入口。

### 15. `/products/detergent-labels`
作用：服务 household chemical labels，偏场景型、材质型采购。

### 16. `/products/ncr-forms`
作用：业务合理，但与当前热敏纸主线相比，独立搜索意图相对分散。

### 17. `/products/colored-thermal-paper`
作用：偏差异化与补充需求，适合做专题页，但不是主力成交页。

### 为什么 P3 放这 4 个

它们的问题不是内容不成立，而是：

- 与当前主站“热敏纸 / 收银纸 / 标签”的主需求相比优先级略低
- 部分更像扩类页，而不是主关键词中枢页
- 更适合在前两批成型后，通过长尾与行业客户继续补深度

参考：
- [src/app/products/colored-thermal-paper/page.tsx:10](src/app/products/colored-thermal-paper/page.tsx:10)

---

## 三、17 个聚合页的开发顺序建议

建议按 4 个 Sprint 走，不建议一次性铺满。

### Sprint 1

- `/products`
- `/products/thermal-paper-rolls`
- `/products/thermal-labels`
- `/products/receipt-paper-rolls`

目标：先稳住全站产品主骨架。

### Sprint 2

- `/products/shipping-labels`
- `/products/bpa-free-thermal-paper`
- `/products/custom-printed-thermal-rolls`
- `/products/custom-printed-thermal-labels`

目标：把高转化和高利润意图补齐。

### Sprint 3

- `/products/till-rolls`
- `/products/phenol-free-thermal-paper`
- `/products/barcode-labels`
- `/products/product-labels`
- `/products/linerless-labels`

目标：解决标签与法规词的细分承接。

### Sprint 4

- `/products/can-labels`
- `/products/detergent-labels`
- `/products/ncr-forms`
- `/products/colored-thermal-paper`

目标：补充行业扩展页和专题页。

---

## 四、聚合页统一模板

为了减少开发成本，17 个聚合页不应该各写一套结构。建议统一成 9 模块模板。

## 模块 1：Hero

必须回答 4 个问题：

- 你卖什么
- 适合谁买
- 你的差异化是什么
- 下一步点哪里

### 必备内容

- H1：品类名 + 采购意图
- 一句明确副标题
- 4 个 trust badges
- 2 个 CTA
- 3 到 4 个 stats

### 示例方向

- `Thermal Paper Rolls Manufacturer`
- `Direct Thermal Shipping Labels Supplier`
- `Custom Printed Thermal Rolls for Private Label`

---

## 模块 2：Who Buys This / Buyer Types

这是当前很多产品页还可以再强化的模块。

### 目的

直接告诉用户：“这页就是给你这种买家看的。”

### 推荐写法

用 4 到 6 个 buyer cards：

- distributors
- POS suppliers
- retail wholesalers
- 3PL / warehouse buyers
- OEM brands
- food / chemical packaging buyers

### GEO 价值

AI 很喜欢引用这种“who is this for”式结构，因为它能帮助回答“哪种客户适合这个产品”。

---

## 模块 3：Popular Subtypes / Top Use Cases

### 目的

把聚合页内部的二级选择逻辑讲清楚。

### 不同页的写法

#### thermal paper rolls
- receipt rolls
- till rolls
- BPA-free
- custom printed

#### thermal labels
- shipping labels
- barcode labels
- product labels
- linerless labels

#### custom printed thermal rolls
- logo printed rolls
- back printed promo rolls
- private label carton packaging
- custom core printing

---

## 模块 4：How to Choose

这个模块非常关键，因为 B2B 买家常常不是不知道产品名，而是不知道该选哪个版本。

### 推荐结构

做成 3 到 5 条 decision guide：

- If you sell to supermarkets -> choose 80x80mm
- If you need mobile POS -> choose 57x50mm / 57x40mm
- If you ship parcels -> choose 4x6 shipping labels
- If your market is regulated -> choose BPA-free / phenol-free
- If you need your own brand -> choose custom printed

### 价值

- 提高转化
- 提高详情页点击率
- 提高 AI 摘要可引用性

---

## 模块 5：Specs / Compliance Snapshot

### 目的

让用户在聚合页就先完成一轮预筛选。

### 推荐字段

- common widths / sizes
- paper weight / material
- coating or adhesive
- MOQ
- lead time
- printer compatibility
- export terms
- compliance / certifications

### 注意

这个模块不需要像详情页那么细，但必须足够让用户判断“值不值得点进去”。

---

## 模块 6：Child Pages Grid

这是聚合页最核心的 SEO 和转化模块。

### 规则

每个聚合页至少给出 4 到 8 个子页面卡片。

### 卡片字段统一

- 页面名
- 为什么适合这个场景
- 1 句应用描述
- 1 个 badge
- CTA：`View Details`

### 例如

#### `/products/thermal-paper-rolls`
应该分发到：
- blank
- custom-printed
- 80x80mm
- 57x50mm
- 57x40mm
- 57x30mm
- 80x70mm
- 110x80mm

#### `/products/thermal-labels`
应该分发到：
- blank
- custom-printed
- 4x6in
- 2x1in
- 3x2in
- 2x4in
- 1x1in

---

## 模块 7：Why Buy From Us

### 目的

不要只说工厂多大，而是说采购为什么更稳。

### 推荐维度

- factory direct pricing
- OEM readiness
- global export
- stable batch quality
- certifications
- fast quote turnaround

### 注意

每个聚合页至少有 2 条理由要贴近本页主题，而不是全站复读。

例如：

- `shipping-labels` 强调 printer compatibility / roll & fanfold
- `bpa-free` 强调 compliance docs / regulated markets
- `custom-printed-thermal-labels` 强调 artwork / packaging / NDA

---

## 模块 8：FAQ

### 每个聚合页建议 5 到 8 条 FAQ

FAQ 方向不要泛泛写，要围绕本页意图。

#### thermal paper rolls
- what sizes are most common
- what is MOQ
- BPA-free available?
- can you do custom printing?
- do you export worldwide?

#### shipping labels
- rolls or fanfold?
- Zebra / Dymo compatible?
- 4x6 standard?
- direct thermal or transfer?
- MOQ and lead time?

#### custom printed thermal rolls
- what is custom MOQ?
- can you print logo / coupons?
- private label carton available?
- artwork support?
- sample lead time?

### GEO 价值

FAQ 是最容易被摘要系统提取的内容块之一，必须和正文一致。

---

## 模块 9：Final CTA

### 必须只有一个主动作

建议统一为：

- `Get Price List`
- `Request Samples`
- `WhatsApp for Quote`

### 每个聚合页 CTA 文案要带场景

不要都写成 `Contact Us`。

例如：

- `Get Receipt Roll Pricing`
- `Request 4x6 Label Samples`
- `Get BPA-Free Compliance Quote`
- `Discuss Custom Roll Printing`

---

## 五、不同类型聚合页的关键词承接方式

## 1. 品类型聚合页

代表页：
- `/products/thermal-paper-rolls`
- `/products/thermal-labels`
- `/products/can-labels`
- `/products/detergent-labels`
- `/products/ncr-forms`

### 核心关键词方向

- supplier
- manufacturer
- wholesale
- factory
- bulk

### 页面目标

证明你是这个大类的供应能力方。

---

## 2. 应用型聚合页

代表页：
- `/products/receipt-paper-rolls`
- `/products/shipping-labels`
- `/products/till-rolls`
- `/products/barcode-labels`
- `/products/product-labels`

### 核心关键词方向

- use case
- printer scenario
- business workflow
- buyer job to be done

### 页面目标

把“我需要解决什么业务问题”翻译成“我该买什么产品”。

---

## 3. 风险 / 合规型聚合页

代表页：
- `/products/bpa-free-thermal-paper`
- `/products/phenol-free-thermal-paper`

### 核心关键词方向

- compliance
- regulation
- safe material
- food contact
- REACH / FDA / Prop 65

### 页面目标

降低买家对材料风险和进口风险的顾虑。

---

## 4. OEM / 定制型聚合页

代表页：
- `/products/custom-printed-thermal-rolls`
- `/products/custom-printed-thermal-labels`

### 核心关键词方向

- custom printed
- private label
- OEM
- branded packaging
- artwork support

### 页面目标

把高客单、高利润的定制客户从通用品类页中分离出来。

---

## 六、页面之间的内链规则

产品页体系一定要强制做双向分发，不然 GEO 价值会明显下降。

## 规则 1：总目录页 -> 所有 P1 聚合页

`/products` 必须把主流量优先导向：

- thermal-paper-rolls
- thermal-labels
- receipt-paper-rolls
- shipping-labels
- bpa-free-thermal-paper

## 规则 2：品类页 -> 应用页 + 规格页

例如：

### `/products/thermal-paper-rolls`
链接到：
- receipt-paper-rolls
- till-rolls
- bpa-free-thermal-paper
- custom-printed-thermal-rolls
- 80x80mm
- 57x50mm
- 57x40mm

### `/products/thermal-labels`
链接到：
- shipping-labels
- barcode-labels
- product-labels
- linerless-labels
- 4x6in
- 2x1in
- 3x2in

## 规则 3：应用页 -> 对应详情页 + 对应大类页

例如：

### `/products/shipping-labels`
回链到：
- thermal-labels

下发到：
- 4x6in
- 2x4in
- blank thermal labels
- custom printed thermal labels

## 规则 4：详情页 -> 上游 2 个入口页

每个详情页不要只回链一个聚合页，建议至少回 2 个：

- 一个是大类页
- 一个是应用页 / 风险页

例如：

### `80x80mm`
回链到：
- thermal-paper-rolls
- receipt-paper-rolls

### `4x6in`
回链到：
- thermal-labels
- shipping-labels

### `custom printed thermal rolls`
回链到：
- thermal-paper-rolls
- OEM overview

## 规则 5：国家页 -> 对应产品聚合页 + 详情页

这一条特别重要。

因为你现在国家页已经有“Popular Products for {Country}”模块，应该更系统化：

- 国家页先链接到最相关的聚合页
- 再链接到 3 到 4 个最相关详情页

例如：

### Thailand
- receipt-paper-rolls
- thermal-paper-rolls
- 80x80mm
- 57x50mm
- 4x6in

### UAE
- thermal-paper-rolls
- bpa-free-thermal-paper
- custom-printed-thermal-rolls
- 80x80mm
- 4x6in

这部分你当前模板已经有基础：
- [src/components/shared/MarketCountryPageTemplate.tsx:143](src/components/shared/MarketCountryPageTemplate.tsx:143)

---

## 七、每批页面最小交付标准

为了避免页面越做越散，建议每个聚合页上线前都满足下面标准。

### 内容标准

- 1 个明确 H1
- 1 个 Buyer Types 模块
- 1 个 How to Choose 模块
- 1 个 Specs Snapshot 模块
- 1 个 Child Pages Grid
- 5 条以上 FAQ
- 2 个 CTA

### SEO 标准

- 独立 metadata title / description
- canonical
- breadcrumb schema
- FAQ schema
- 若适合则加 CollectionPage / Product schema

### GEO 标准

- 有明确 buyer intent 文字
- 有表格或 comparison
- 有规格 / FAQ / trade info
- 不只说自己好，要回答采购问题

### 转化标准

- quote CTA 明确到场景
- WhatsApp 文案明确到产品
- 至少链接 4 个下游页
- 至少链接 2 个上游 / 平级页

---

## 八、我建议你下一步先开发的 5 个页面

如果现在只挑一小批最值得马上动手的，我建议是：

1. `/products/thermal-paper-rolls`
2. `/products/thermal-labels`
3. `/products/receipt-paper-rolls`
4. `/products/custom-printed-thermal-rolls`
5. `/products/custom-printed-thermal-labels`

原因很直接：

- 这是主站最核心的成交链路
- 能最快带动现有 34 个详情页的内链价值
- 能最快承接国家页导流
- 也是最容易先做成统一模板的一批

---

## 九、最终执行建议

如果按效率来做，不建议先去扩更多规格页，而是：

1. 先把 17 个聚合页的层级和职责定死
2. 先把 P1 的 8 个聚合页做成统一模板
3. 再把国家页到产品页的链接系统化
4. 最后再补 P2 / P3

一句话说，当前最重要的不是“页面数量继续增加”，而是**把已经确定的 17 个聚合页做成清晰、可分流、可回答问题、可被 AI 引用的结构化页面体系。**
