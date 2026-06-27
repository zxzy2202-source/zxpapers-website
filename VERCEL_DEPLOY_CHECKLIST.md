# 🚀 ZhixinPaper 部署上线 Checklist

> 全程预计 **30-45 分钟**。按顺序做，每步打勾。

---

## 阶段 1 — 推到 GitHub（5 分钟）

- [ ] **1.1** 注册 GitHub 账号（已有可跳）：https://github.com/signup
- [ ] **1.2** 在 GitHub 网页右上角 `+` → `New repository`
  - Repository name: `zxpaper`
  - 选 **Private**（重要，别公开，里面有后台代码）
  - 其他默认，点 `Create repository`
- [ ] **1.3** 在项目目录执行（PowerShell）：
  ```powershell
  cd E:\website\zxpaper
  git init
  git add .
  git commit -m "initial: 上线版本"
  git branch -M main
  git remote add origin https://github.com/你的用户名/zxpaper.git
  git push -u origin main
  ```
  - 第一次 push 会让你登录 GitHub，跟着提示走

---

## 阶段 2 — 导入 Vercel（5 分钟）

- [ ] **2.1** 用 GitHub 账号登录 https://vercel.com
- [ ] **2.2** Dashboard → `Add New...` → `Project`
- [ ] **2.3** 找到 `zxpaper` 仓库 → 点 `Import`
- [ ] **2.4** 配置页面**先别动**，直接点 `Deploy`（先让它跑一次，会失败没关系，我们要的是先建项目）
- [ ] **2.5** 等待 2-3 分钟，会报错 "Missing env vars" 或者部署成功但功能缺失 — 都正常

---

## 阶段 3 — 创建 KV 数据库（5 分钟）

> KV 用来存后台数据：首页 Hero、文章、询盘、图片槽位、SEO 设置

- [ ] **3.1** 项目页面顶部 → `Storage` 标签
- [ ] **3.2** 点 `Create Database`
- [ ] **3.3** 选 **KV** → 给个名字比如 `zxpaper-kv`
- [ ] **3.4** Region 选 **Hong Kong (hkg1)** 或 **Singapore (sin1)**（离国内服务器近）
- [ ] **3.5** 创建后，点 `Connect Project` → 选 `zxpaper` → `Connect`
  - 这一步会**自动注入** `KV_REST_API_URL` 和 `KV_REST_API_TOKEN` 两个环境变量

---

## 阶段 4 — 配置环境变量（10 分钟）

项目页面 → `Settings` → `Environment Variables` → 逐个添加：

### 🔴 必填（缺一就跑不起来）

| Key | Value | 怎么获取 |
|-----|-------|---------|
| `NEXT_PUBLIC_R2_URL` | `https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev` | 你的 R2 公开访问 URL（本地 .env.local 已有） |
| `R2_ACCOUNT_ID` | 你的 Cloudflare 账号 ID | Cloudflare → R2 → 右侧 Account ID |
| `R2_ACCESS_KEY_ID` | R2 API 密钥 ID | Cloudflare → R2 → Manage R2 API Tokens → Create API Token |
| `R2_SECRET_ACCESS_KEY` | R2 API 密钥 Secret | 同上（创建时只显示一次，复制好） |
| `R2_BUCKET_NAME` | 你的 R2 bucket 名字 | 比如 `zxpaper` |
| `ADMIN_PASSWORD` | 后台登录密码 | **务必改成强密码！** 比如 `Zxp@2026Boss!XaSecure` |
| `ADMIN_SESSION_SECRET` | 32 字节随机字符串 | PowerShell 跑：`[Convert]::ToBase64String((1..32 \| %{Get-Random -Max 256}))` 复制结果 |

### 🟡 选填（询盘通知渠道，至少配 1 个）

| Key | 说明 |
|-----|------|
| `WECOM_WEBHOOK_URL` | 企业微信群机器人 URL（推荐，国内最稳） |
| `FEISHU_WEBHOOK_URL` | 飞书群机器人 URL |
| `SERVERCHAN_SENDKEY` | Server 酱（推送到微信） |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms（推送到邮箱） |
| `GOOGLE_SHEETS_WEBHOOK_URL` | 同步到 Google Sheets |

> 每个变量记得勾选 **Production / Preview / Development 三个环境都生效**

### 🟢 自动注入（不用手填）

KV 连接后这俩会自动出现：
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

---

## 阶段 5 — 重新部署触发生效（3 分钟）

- [ ] **5.1** 项目页面 → `Deployments` → 找到最新一次部署
- [ ] **5.2** 右侧 `⋯` → `Redeploy` → 确认
- [ ] **5.3** 等 2-3 分钟，看到 ✅ Ready 即可

---

## 阶段 6 — 绑定域名 www.zxpapers.com（10 分钟）

- [ ] **6.1** 项目页面 → `Settings` → `Domains`
- [ ] **6.2** 输入 `www.zxpapers.com` → `Add`
- [ ] **6.3** Vercel 会给你一条 DNS 记录，格式类似：
  ```
  Type: CNAME
  Name: www
  Value: cname.vercel-dns.com
  ```
- [ ] **6.4** 去你的域名 DNS 管理后台（阿里云/Cloudflare/Namesilo 等）添加这条 CNAME
- [ ] **6.5** 也建议加一条把根域名转到 www：
  - 类型 A，Name `@`，Value `76.76.21.21`（Vercel IP）
  - 或者在域名注册商那里做 301 跳转
- [ ] **6.6** DNS 生效一般 **10 分钟 - 2 小时**，Vercel 会自动签 SSL 证书

---

## 阶段 7 — 验证上线（5 分钟）

- [ ] **7.1** 打开 `https://www.zxpapers.com` —— 首页正常显示
- [ ] **7.2** 打开 `https://www.zxpapers.com/admin/login` —— 用阶段 4 设置的密码登录
- [ ] **7.3** 测试一下功能：
  - 后台 → 首页 Hero → 改一下标题保存 → 回首页刷新看是否生效
  - 后台 → 文章管理 → 新建一篇 → 发布 → 看 `/resources/industry-insights` 列表
  - 主页底部询盘表单 → 填一个测试询盘 → 看后台「询盘管理」是否有记录、配置的通知渠道（企微/飞书等）是否收到推送
- [ ] **7.4** 测试图片上传：后台 → 图片管理 → 上传一张图 → 看是否能正常显示
- [ ] **7.5** SEO 检查：F12 看 `<head>` 里有没有 Title / Description / Open Graph 等

---

## 🆘 遇到问题怎么办

| 症状 | 解决 |
|------|------|
| 部署失败 "Module not found" | 检查 `package.json` 是否完整，本地跑 `pnpm.cmd install && pnpm.cmd build` 再 commit/push |
| 网站打开 500 | Vercel → Deployments → 点失败那次 → View Function Logs 看具体报错 |
| 后台登录后跳回登录页 | 检查 `ADMIN_SESSION_SECRET` 有没有设置，且**不能为空** |
| 图片显示不出来 | 检查 `NEXT_PUBLIC_R2_URL` 是否正确、R2 bucket 是否设为公开访问 |
| 询盘没收到通知 | 后台 → SEO 设置 页面会显示哪些渠道已配置；本地终端能看到推送日志 |
| KV 写入失败 | 确认阶段 3.5 的 "Connect Project" 做了，env vars 里有 `KV_REST_API_URL` |

---

## ✅ 上线后建议立刻做

1. **改后台密码** — 默认 `zxpaper2026` 必须改
2. **R2 绑自定义域名** — 比如 `cdn.zxpapers.com`（Cloudflare 后台 5 分钟）
3. **提交 sitemap 到 Google Search Console** — `https://www.zxpapers.com/sitemap.xml`
4. **配 Google Analytics** — 后台 → SEO 设置 → 填 GA ID

---

完成所有打勾后，老板你的网站就**正式上线 + 老板自己能管内容**了 🎉
