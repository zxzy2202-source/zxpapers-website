# 🏗️ B2B 外贸独立站架构方案 v1.0

> 适用：B 端外贸展示站 / 工厂询盘站 / 产品 catalog 站
> 不适用：B2C 电商（要订单+支付+库存的）、UGC 社区、需要登录注册的会员系统
>
> 验证项目：[ZhixinPaper](https://www.zxpapers.com) — 西安智芯热敏纸工厂

---

## 一、核心理念

### 🎯 三个原则
1. **零供应商绑死** — 任何一块都能换，不被任何 SaaS 锁住
2. **零月费起步** — 流量小的时候月成本 $0，做大了再升级
3. **代码 100% 在自己手上** — GitHub 私有 repo，跑路成本为零

### 💡 反模式（不要做的事）
- ❌ 用 Sanity / Strapi / Contentful 等头部 CMS：贵、慢、绑死、学习成本高
- ❌ 用 WordPress：插件膨胀、性能差、SEO 玄学、被攻击概率高
- ❌ 用 Shopify / Wix：每月固定费、改个布局都难、SEO 受限
- ❌ 用纯静态站（Hugo/Hexo）：改个文字要 commit + push，老板不会用

---

## 二、技术栈（已验证可生产）

| 层 | 选型 | 替代方案 | 月成本 |
|----|------|---------|--------|
| **前端框架** | Next.js 15 (App Router) + TypeScript | Astro / SvelteKit | $0 |
| **样式** | Tailwind CSS + Radix UI | Chakra / Mantine | $0 |
| **托管 + CDN** | Vercel Hobby | Cloudflare Pages / Netlify | $0 |
| **图片存储** | Cloudflare R2 | AWS S3 / Vercel Blob | $0（10GB 免费） |
| **数据存储** | Upstash Redis (KV) | Vercel KV / Neon Postgres | $0（按量付费） |
| **域名** | 任意注册商 + DNS CNAME | - | ~$10/年 |
| **询盘通知** | 企业微信群机器人 | 飞书机器人 / Server酱 / Email | $0 |
| **代码托管** | GitHub 私有 repo | GitLab / Gitee | $0 |

**总月费：约 $0-1**（除非每月被刷几百万次访问）

---

## 三、项目结构

```
项目根/
├── src/
│   ├── app/                    # Next.js 路由
│   │   ├── page.tsx            # 首页
│   │   ├── layout.tsx          # 全站 layout（带 SEO metadata）
│   │   ├── admin/              # 后台管理
│   │   │   ├── login/          # 登录
│   │   │   ├── hero/           # 首页编辑
│   │   │   ├── images/         # 图片管理
│   │   │   ├── posts/          # 文章管理
│   │   │   ├── inquiries/      # 询盘管理
│   │   │   └── seo/            # SEO 设置
│   │   ├── api/                # API 路由
│   │   │   ├── inquiry/        # 接收询盘
│   │   │   └── admin/*         # 后台 API
│   │   ├── products/           # 产品页（业务定制）
│   │   └── resources/          # 资源/博客（业务定制）
│   │
│   ├── lib/
│   │   ├── storage.ts          # ⭐ KV 抽象层（核心）
│   │   ├── heroStore.ts        # Hero 数据
│   │   ├── postsStore.ts       # 文章数据
│   │   ├── inquiryStore.ts     # 询盘数据
│   │   ├── imageSlotStore.ts   # 图片槽位
│   │   ├── seoStore.ts         # SEO 配置
│   │   ├── notify.ts           # 询盘通知（企微/飞书/Server酱）
│   │   ├── auth.ts             # Node 鉴权（API 用）
│   │   ├── authEdge.ts         # Edge 鉴权（middleware 用，Web Crypto）
│   │   ├── r2.ts               # Cloudflare R2 客户端
│   │   └── markdown.ts         # Markdown 渲染
│   │
│   ├── components/
│   │   ├── admin/              # 后台组件（AdminShell, PostEditor, HeroEditor）
│   │   ├── layout/             # Header / Footer
│   │   └── shared/             # InquiryForm 等公用
│   │
│   ├── config/
│   │   ├── siteData.ts         # 站点常量
│   │   └── imageSlots.ts       # ⭐ 图片槽位注册表（核心）
│   │
│   └── middleware.ts           # Edge 鉴权拦截器
│
├── .env.local                  # 本地环境变量
├── VERCEL_DEPLOY_CHECKLIST.md  # 部署指南
└── package.json
```

---

## 四、核心设计：KV 抽象层 ⭐

整套方案最关键的一行代码：**`src/lib/storage.ts`**

```typescript
// 接口统一
interface KVStorage {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
}

// 本地开发用文件
class FileStorage implements KVStorage { ... }

// 生产用 Upstash REST API（不引入 @vercel/kv 包，零依赖）
class VercelKVStorage implements KVStorage {
  // 用 fetch 直接打 KV_REST_API_URL
}

// 自动选择
export function getStorage(): KVStorage {
  return process.env.KV_REST_API_URL ? new VercelKVStorage() : new FileStorage();
}
```

**好处：**
- 想换 Postgres / MongoDB / DynamoDB → **只改这一个文件**，业务代码不动
- 本地开发不依赖网络
- 不绑定 Vercel KV，能用任何兼容 Upstash REST 的服务

---

## 五、核心设计：图片槽位注册表 ⭐

老板对图片的需求一般是「我要换那张工厂照」，但代码里图片散落各处。

**解决方案：`src/config/imageSlots.ts` 集中注册**

```typescript
export const IMAGE_SLOTS = [
  { slot: "home:hero",          label: "首页 Hero 主图",         fallback: "/img/factory.jpg" },
  { slot: "home:hero-slide-2",  label: "首页 Hero 副图",         fallback: "/img/line.jpg" },
  { slot: "about:team-photo",   label: "关于页 团队照",          fallback: "/img/team.jpg" },
  { slot: "product:thermal-1",  label: "产品页 热敏纸主图",      fallback: "/img/p1.jpg" },
  // ... 几十个槽位
];
```

**代码里用：**
```tsx
const { images } = await getSlotImages([
  { slot: "home:hero", fallback: FACTORY_IMG_FALLBACK }
]);
<Image src={images["home:hero"]} ... />
```

**后台「图片管理」自动列出所有槽位**，老板上传新图 → 立刻替换。

**好处：**
- 老板看到的是「首页 Hero 主图」业务名，不是 `factory_v2_compressed.jpg` 文件名
- 任何 AI 写的占位图都能 1 分钟换成真照片
- 新增图片只需 register 一个 slot

---

## 六、核心设计：后台鉴权

**完全不用第三方 Auth（NextAuth/Clerk/Supabase Auth），自建 50 行代码搞定：**

| 文件 | 作用 |
|------|------|
| `src/lib/auth.ts` | Node 运行时 HMAC 签名（API 路由用） |
| `src/lib/authEdge.ts` | Edge 运行时（middleware 用，Web Crypto API） |
| `src/middleware.ts` | 拦截 `/admin/*` 路径，验证 cookie |
| `src/app/api/admin/login/route.ts` | 接收密码，签 cookie |

**两个环境变量搞定：**
- `ADMIN_PASSWORD` — 老板登录密码
- `ADMIN_SESSION_SECRET` — 签 cookie 的随机字符串

**好处：**
- 零依赖，零成本，零学习曲线
- httpOnly cookie + HMAC，安全够 B 端展示站用
- Edge runtime 兼容 Vercel/Cloudflare

---

## 七、核心设计：询盘多通道通知

**`src/lib/notify.ts` 一个函数搞定 4 个通道：**

```typescript
export async function notifyInquiry(inquiry) {
  await Promise.allSettled([
    notifyWecom(inquiry),       // 企业微信群机器人
    notifyFeishu(inquiry),      // 飞书群机器人
    notifyServerchan(inquiry),  // Server 酱推微信
    notifyGoogleSheets(inquiry),// Google Sheets webhook
  ]);
}
```

**老板配哪个走哪个**（环境变量为空就跳过），不会出错。

**推荐组合**：企业微信群机器人（国内）+ Web3Forms 推邮箱（国外备份）。

---

## 八、上线流程（30 分钟）

### Stage 1 — GitHub（5 分钟）
1. github.com 建 Private repo
2. 本地 `git init && git push`

### Stage 2 — Vercel 导入（5 分钟）
1. vercel.com 用 GitHub 登录
2. Import → 选 repo → Deploy（首次会失败，正常）

### Stage 3 — KV 数据库（5 分钟）
1. Vercel Storage → Create Database → Marketplace
2. 选 **Upstash for Redis** → **Pay As You Go** 套餐（按量，月免费 10K commands）
3. Region 选 Singapore/Tokyo/Hong Kong
4. **Auto Upgrade 关闭**（防爆账单）
5. Connect Project → Custom Prefix **留空白** ⚠️（关键！）

### Stage 4 — 环境变量（10 分钟）
必填：
- `NEXT_PUBLIC_R2_URL` / `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_BUCKET_NAME`
- `ADMIN_PASSWORD`（强密码）
- `ADMIN_SESSION_SECRET`（48 位随机字符串）

选填：
- `WECOM_WEBHOOK_URL` / `FEISHU_WEBHOOK_URL` 等通知渠道

自动注入（KV 连接后）：
- `KV_REST_API_URL` / `KV_REST_API_TOKEN`

### Stage 5 — Redeploy（3 分钟）
Deployments → 最新部署 → ⋯ → Redeploy（不勾 Build Cache）

### Stage 6 — 绑域名（10 分钟）
Settings → Domains → 加 `www.xxx.com`
DNS 加一条 CNAME → `cname.vercel-dns.com`
等 SSL 自动签发

### Stage 7 — 验证 ✅
打开网站 + 后台登录 + 改一处内容看是否生效

---

## 九、坑位备忘（踩过的）

| 坑 | 解决 |
|----|------|
| Vercel KV 已下架 | 改用 Upstash for Redis |
| Connect 时填了 Custom Prefix | 变量名变成 `STORAGE_KV_REST_API_URL`，代码读不到，必须留空 |
| 本地 `pnpm` 被 PowerShell 拦 | 改用 `pnpm.cmd` 或 `Set-ExecutionPolicy RemoteSigned` |
| `.next` 缓存撞车 | 删 `.next/` 重新 build |
| middleware 用了 Node API | Edge runtime 不支持，用 Web Crypto 自己实现（authEdge.ts） |
| Sanity 残留代码 grep 不干净 | 类型 `sanity\|PortableText\|getAllPosts\|getPostBySlug\|getSiteSettings` 全删 |
| `.env.local` 文件乱码 | PowerShell 写时必须 UTF-8 无 BOM |
| 图片用 next/image 优化 | 在 `next.config.ts` 的 `remotePatterns` 加 R2 域名 |

---

## 十、给下一个项目的复用 checklist

### 🟢 100% 复用（直接复制）
- [ ] `src/lib/storage.ts` — KV 抽象层
- [ ] `src/lib/auth.ts` + `src/lib/authEdge.ts` — 鉴权
- [ ] `src/lib/notify.ts` — 询盘通知
- [ ] `src/lib/r2.ts` + `src/lib/markdown.ts` — 工具
- [ ] `src/middleware.ts` — 路由拦截
- [ ] `src/components/admin/AdminShell.tsx` — 后台框架
- [ ] `src/app/admin/login/` — 登录页
- [ ] `src/app/api/admin/login/` + `logout/` + `upload-r2/` — 通用 API
- [ ] `VERCEL_DEPLOY_CHECKLIST.md` — 部署指南

### 🟡 改下文案/字段就能用
- [ ] `src/lib/heroStore.ts` — Hero 数据模型（改字段）
- [ ] `src/lib/postsStore.ts` — 文章模型（基本不动）
- [ ] `src/lib/inquiryStore.ts` — 询盘模型（基本不动）
- [ ] `src/lib/seoStore.ts` — SEO 配置（基本不动）
- [ ] `src/components/admin/PostEditor.tsx` — Markdown 编辑器
- [ ] `src/components/admin/HeroEditor.tsx` — Hero 编辑器

### 🔴 完全重写（每个项目业务不同）
- [ ] `src/app/page.tsx` — 首页设计
- [ ] `src/app/layout.tsx` — 品牌色 / 字体
- [ ] `src/app/products/` 或 `src/app/services/` — 业务核心页
- [ ] `src/config/siteData.ts` — 公司信息
- [ ] `src/config/imageSlots.ts` — 图片槽位
- [ ] `src/components/layout/Header.tsx` + `Footer.tsx` — 导航

---

## 十一、新项目启动模板（推荐流程）

```bash
# 1. 用现有项目当模板
cp -r E:\website\zxpaper E:\website\新项目名
cd E:\website\新项目名

# 2. 删掉业务相关
rm -rf .next .git data
rm -rf src/app/products src/app/resources src/app/about

# 3. 替换品牌信息
# 编辑：src/config/siteData.ts (公司名/电话/地址)
# 编辑：src/app/layout.tsx (SEO/品牌色)
# 替换：public/logo.* public/favicon.ico

# 4. 重新 init
git init
pnpm install
pnpm dev

# 5. 按 VERCEL_DEPLOY_CHECKLIST.md 走一遍部署
```

**整个新站从 0 到上线：1-2 天**（业务页面设计占 80% 时间，技术 20%）

---

## 十二、扩展方向（什么时候需要升级）

| 需求 | 升级方向 |
|------|---------|
| 月 PV > 100万 | Vercel Pro $20/月，或迁 Cloudflare Pages（永久免费） |
| 数据量 > 100MB | 换 Upstash 固定套餐 $10/月，或迁 Neon Postgres |
| 多语言 | next-intl + 在 imageSlots / posts 加 locale 字段 |
| 产品库 > 100 个 | 把 productsStore 加进来，模式跟 postsStore 一样 |
| 在线下单 | 接 Stripe / PayPal，加 ordersStore，不影响现有架构 |
| 多账号后台 | 把 ADMIN_PASSWORD 换成 usersStore，做简单 ACL |
| 全文搜索 | 加 Algolia 或 Meilisearch Cloud |

---

## 十三、为什么这套是「正确答案」

| 对比维度 | 这套方案 | 主流 CMS (Sanity/Strapi) | WordPress | Shopify |
|---------|---------|------------------------|-----------|---------|
| 月成本 | $0 | $30-100 | 服务器+插件 $20+ | $30+ |
| 老板上手 | 10 分钟 | 1 天 | 半天 | 2 小时 |
| 跑路成本 | 0（全自有代码） | 数据迁移地狱 | 数据库迁移 | 几乎不可能 |
| 改 UI | 直接改代码 | 改 Schema + 重新拉数据 | 主题地狱 | Liquid 限制 |
| SEO | 满分（SSR+ISR） | 看实现 | 玄学 | 受限 |
| 加新功能 | 一个 store 文件 + 一个 admin 页 | 改 Schema + GROQ 学习曲线 | 找插件赌运气 | 不能 |
| 性能 | Edge + ISR 起飞 | 需配 CDN | 必须装缓存插件 | 平台决定 |

---

## 📌 总结

**这套架构 = "刚刚好" 的工程哲学**

- 不是最酷的（没用 Server Components 流式渲染、没接 AI）
- 不是最强的（不能做百万 SKU 电商）
- 但是 **B2B 外贸展示站的最优解**：
  - 老板能管 ✅
  - 月费 $0 ✅
  - SEO 满分 ✅
  - 想跑就跑 ✅
  - 想加功能加 ✅

下一个项目，**复制 → 改文案 → 上线**，1-2 天搞定。

---

_v1.0 — 2026-05-21 — 验证项目：zxpapers.com_
