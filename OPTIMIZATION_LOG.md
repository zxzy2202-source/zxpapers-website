# ZhixinPaper 网站优化日志

> 网站：[www.zxpapers.com](https://www.zxpapers.com)
> 仓库：`github.com/zxzy2202-source/zxpapers-website`（分支：`main`）
> 技术栈：Next.js 15 + Tailwind CSS，部署于 Vercel

---

## 2026-07-19（今日）

### 一、安全审查

**发现问题：**
- `src/lib/auth.ts` 中存在硬编码的默认密码 `admin123`，若生产环境未通过环境变量覆盖，后台将处于裸露状态。

**建议操作：**
- 在 Vercel 环境变量中设置 `ADMIN_PASSWORD`，确保不使用默认值。
- 状态：**待处理**（需用户在 Vercel 控制台手动配置）

---

### 二、Vercel 缓存修复（核心优化）

**问题根因（两处叠加）：**

| 根因 | 影响 |
|---|---|
| `middleware.ts` 在每次页面请求时写入 `Set-Cookie`（GEO 检测） | Vercel CDN 将所有页面标记为 `private, no-cache`，完全绕过边缘缓存 |
| `src/lib/storage.ts` 中 KV fetch 使用 `cache: "no-store"` | Next.js 将整个调用链上的页面强制标记为动态渲染，`revalidate` 声明完全失效 |

**修复操作：**

**2.1 重构 GEO 中间件**
- 修改文件：`src/middleware.ts`
- 改动：移除全部 GEO Cookie 写入逻辑，`matcher` 缩减为仅匹配 `/admin/:path*`
- 新建文件：`src/app/api/geo/route.ts`（轻量 GEO 接口，读取 Vercel 请求头，不写 Cookie，响应 `Cache-Control: public, max-age=3600`）
- 修改文件：`src/components/shared/InquiryForm.tsx`（改为调用 `/api/geo` 接口，结果存入 `sessionStorage`）
- 提交：`da456d9`

**2.2 修复 KV fetch 缓存策略**
- 修改文件：`src/lib/storage.ts`
- 改动：读操作改为 `next: { revalidate: 3600 }`，写操作传入 `revalidate: 0`
- 提交：`365c782`

**验证结果：**
```
x-vercel-cache: HIT（首页、产品页、about、blog 均已命中）
```

---

### 三、全站 ISR 缓存配置

**问题：** 全站 110 个服务端页面均未声明 `revalidate`，Next.js 15 默认将其视为动态路由，每次请求都执行服务端代码。

**修复操作：**
- 为调用 KV 数据的 38 个核心页面添加 `export const revalidate = 3600`（1小时）
- 为 72 个纯静态服务端页面添加 `export const revalidate = 86400`（24小时）
- 涉及目录：`/`、`/about`、`/products/*`、`/blog`、`/oem/*`、`/manufacturing/*`、`/markets/*`、`/resources/*`、`/specifications`、`/contact` 等
- 提交：`da456d9`（含图片优化）

---

### 四、启用 Next.js 图片优化

**问题：** `next.config.ts` 默认禁用图片优化（`NEXT_IMAGE_UNOPTIMIZED` 逻辑反转），所有图片以原始尺寸传输。

**修复操作：**
- 修改文件：`next.config.ts`
- 改动：将判断逻辑从默认禁用改为默认启用，无需设置环境变量即可生效
- 效果：Next.js 自动将图片转为 WebP 并按显示尺寸裁剪，预计减少 40–70% 图片流量
- 提交：`da456d9`

---

### 五、修复 `sitemap.ts` 冲突声明

**问题：** `src/app/sitemap.ts` 中同时存在 `export const dynamic = "force-dynamic"` 和 `export const revalidate = 3600`，前者覆盖后者，导致每次请求 `/sitemap.xml` 都重新执行服务端代码。

**修复操作：**
- 修改文件：`src/app/sitemap.ts`
- 改动：删除 `force-dynamic` 声明，仅保留 `revalidate = 3600`
- 提交：`6ebf06a`

---

### 六、修复博客页 `revalidate` 重复声明

**问题：** `src/app/blog/page.tsx` 中同时存在旧的 `revalidate = 60` 和新插入的 `revalidate = 3600`，导致 Vercel 构建失败（`Identifier 'revalidate' has already been declared`）。

**修复操作：**
- 修改文件：`src/app/blog/page.tsx`
- 改动：删除旧的 `= 60` 声明，保留 `= 3600`
- 提交：`8882851`

---

### 七、完善 `revalidatePath` 触发链路

**问题：** `src/app/api/admin/posts/route.ts` 中 `revalidatePath` 调用不完整：
- `POST`（保存/发布）缺少 `/resources/:category` 和 `/sitemap.xml` 的失效调用
- `DELETE`（删除）缺少 `/blog/:slug`、`/resources/:category`、`/sitemap.xml` 的失效调用

**修复操作：**
- 修改文件：`src/app/api/admin/posts/route.ts`（补全所有 `revalidatePath` 调用）
- 修改文件：`src/components/admin/PostEditor.tsx`（DELETE 请求体补充 `slug` 和 `category` 字段）
- 效果：发布/删除文章后，前台页面**立即**反映最新内容，无需等待 ISR 周期
- 提交：`2a0b8ed`

---

### 八、SEO 优化：批量重写页面 Title 和 Meta Description（第一批）

**问题：** 多个高曝光页面 CTR 偏低（GSC 数据：总曝光 6,180 次，点击 93 次，CTR 1.5%）。

**优化原则：** 具体利益点（CIF 港口 / 认证 / 尺寸）+ 差异化特征 + 行动号召（Free sample / 24h quote）

**涉及页面（9个）：**

| 页面 | 原 CTR | 核心改动 |
|---|---|---|
| `/`（首页） | 2.6% | 突出"制造商"身份，加入 OEM 关键词 |
| `/products` | 0.5% | 加入"Factory-Direct Pricing" |
| `/markets/middle-east/uae` | 3.3% | 加入 `CIF Jebel Ali \| Arabic OEM` |
| `/markets/middle-east/saudi-arabia` | 3.4% | 加入 `CIF Jeddah \| SABER` |
| `/markets/africa/nigeria` | 5.6% | 加入 `CIF Lagos \| ISO 9001` |
| `/markets/africa/kenya` | 6.9% | 加入 `CIF Mombasa \| M-Pesa POS` |
| `/markets/africa/south-africa` | 3.0% | 加入 `CIF Durban \| SADC` |
| `/markets/africa/ethiopia` | 1.5% | 加入 `CIF Djibouti \| Telebirr POS` |
| `/markets/southeast-asia/indonesia` | 1.4% | 加入 `CIF Jakarta \| FORM E` |

- 提交：`7fa4c21`

---

### 九、SEO 优化：批量重写页面 Title 和 Meta Description（第二批）

**涉及页面（13个）：**

| 页面 | 核心改动 |
|---|---|
| `/markets/africa/tanzania` | 加入 `CIF Dar es Salaam \| M-Pesa POS` |
| `/markets/middle-east/egypt` | 加入 `CIF Alexandria \| Meeza POS` |
| `/markets/middle-east/turkey` | 加入 `CIF Istanbul \| EU Sizes` |
| `/markets/southeast-asia/malaysia` | 加入 `CIF Port Klang \| FORM E` |
| `/markets/southeast-asia/philippines` | 加入 `CIF Manila \| FORM E \| GCash POS` |
| `/markets/southeast-asia/singapore` | 加入 `CIF PSA \| ASEAN Hub \| PayNow` |
| `/markets/southeast-asia/vietnam` | 加入 `CIF Ho Chi Minh \| FORM E \| VietQR` |
| `/markets/europe` | 加入 `FSC & Private Label \| BPA-free` |
| `/markets/africa` | 加入 `ISO 9001 \| CIF to 6 Countries` |
| `/markets/middle-east` | 加入 `Arabic OEM \| CIF GCC \| SABER` |
| `/markets/southeast-asia` | 加入 `FORM E \| CIF 5 Countries` |
| `/products/linerless-labels/3-1-8-x-263` | 加入 `Bulk OEM & Private Label` |
| `/products/receipt-paper-rolls` | 加入 `POS, ATM & OEM \| Factory-Direct` |
| `/products/thermal-labels` | 加入 `4x6 Shipping, Barcode & OEM` |

- 提交：`fd7ee48`

---

### 十、Google Search Console：重新提交 Sitemap

**操作：** 在 GSC 站点地图页面重新提交 `https://www.zxpapers.com/sitemap.xml`
- 提交时间：2026-07-19
- 状态：**成功** ✅
- 已发现网页：104 个
- 预期效果：Google 在数小时内重新抓取，新 metadata 在 1–3 天内开始在搜索结果中生效

---

### 十一、处理重复路径 `/markets/middle-east-africa`

**问题：** `/markets/middle-east-africa` 是一个旧的合并区域页，与 `/markets/middle-east` 和 `/markets/africa` 内容重叠，产生重复内容信号，影响 SEO 权重集中。

**修复操作：**
- 修改文件：`src/app/markets/middle-east-africa/page.tsx`（改为 `permanentRedirect("/markets/middle-east")`）
- 修改文件：`src/app/sitemap.ts`（移除该 URL 条目）
- 修改文件：`next.config.ts`（添加 CDN 层 301 重定向规则）
- 提交：`8dd7f6e`

**验证结果：**
```
HTTP/2 308  location: /markets/middle-east
HTTP/2 200  x-vercel-cache: PRERENDER
sitemap.xml 中无残留 ✅
```

---

## 待处理事项

| 优先级 | 事项 | 说明 |
|---|---|---|
| 🔴 高 | 在 Vercel 设置 `ADMIN_PASSWORD` 环境变量 | 避免使用默认密码 `admin123` |
| 🟡 中 | 在 `sitemap.ts` 中动态生成博客文章 URL | 当前 sitemap 只有 `/blog` 列表页，单篇文章未被收录 |
| 🟡 中 | 4 周后在 GSC 效果报告中复查 CTR 变化 | 验证本次 metadata 优化效果 |
| 🟢 低 | 考虑为 `/markets/europe/italy` 等单国页面补充更多国家 | 目前欧洲只有 Italy 一个国家页 |

---

## 今日提交汇总

| 提交 Hash | 说明 |
|---|---|
| `da456d9` | 重构 GEO 中间件、全站 revalidate、启用图片优化（147 文件） |
| `8882851` | 修复 blog/page.tsx revalidate 重复声明 |
| `2a0b8ed` | 完善 revalidatePath 触发链路 |
| `365c782` | 修复 storage.ts KV fetch cache 策略 |
| `6ebf06a` | 修复 sitemap.ts force-dynamic 冲突声明 |
| `7fa4c21` | SEO metadata 优化第一批（9 页） |
| `fd7ee48` | SEO metadata 优化第二批（13 页） |
| `8dd7f6e` | 处理 /markets/middle-east-africa 重复路径 |
