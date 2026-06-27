# 🚀 部署方案对比 — Vercel vs 自有服务器

> 一句话结论：**预算够、想省心 → Vercel；想完全自主、未来要折腾 → 阿里云 VPS。**

---

## 📊 一图看懂

| 维度 | Vercel | 阿里云/腾讯云 VPS |
|------|--------|------|
| **海外速度** | ⭐⭐⭐⭐⭐ 全球 CDN | ⭐⭐⭐ 取决于带宽 |
| **国内速度** | ⭐⭐ 较慢（需付费走 CN） | ⭐⭐⭐⭐ 自带备案后很快 |
| **部署难度** | ⭐ 推代码就行 | ⭐⭐⭐ 要懂 Nginx/PM2/SSL |
| **维护成本** | ⭐ 几乎零 | ⭐⭐⭐ 自己运维 |
| **数据存储** | ❌ 只读，需切 KV/Blob | ✅ JSON 文件直接用 |
| **价格（小流量）** | 免费 → \$20/月 | ¥35/月起（2 核 2G） |
| **价格（中流量）** | \$20-100/月 | ¥100-300/月 |
| **备案** | 不需要 | **需要 ICP 备案**（如果用国内 IP） |
| **图片/CDN** | 内置 | 自己用 R2 / 阿里 OSS |
| **HTTPS** | 自动 | 需 Let's Encrypt 或购买 |

---

## 🎯 推荐选择

### 你的业务画像：**B 端外贸 + 海外客户为主**

**强烈推荐 → Vercel**

理由：
1. ✅ 海外客户访问速度 = 同行业 TOP 水平（全球边缘节点）
2. ✅ 你已经有 Cloudflare R2 做图片 CDN，数据迁移只剩 JSON 文件
3. ✅ 改一行代码 `git push` 就自动上线，老板自己也能操作
4. ✅ 免费层够小公司用一年（100GB 带宽/月）
5. ✅ SEO 也吃香：Vercel 节点的 TTFB 几十毫秒，Google 喜欢

⚠️ **唯一阻碍**：当前后台用本地 JSON 存储，Vercel **文件系统只读**，要做迁移（见下方）。

---

## 🟢 方案 A：部署到 Vercel

### A1. 一次性准备

1. 把代码 push 到 GitHub（如果还没）：
   ```bash
   cd E:\website\zxpaper
   git add .
   git commit -m "ready for vercel"
   git push
   ```

2. 注册 https://vercel.com/ （用 GitHub 账号登录最方便）

3. 点 **"Add New Project"** → 选 zxpaper 仓库 → Import

4. Framework Preset 自动识别为 **Next.js**，点 Deploy（先用默认）

5. 部署成功后会拿到一个临时域名 `zxpaper.vercel.app`

### A2. 配环境变量

进入 Vercel 项目 → **Settings** → **Environment Variables**，把 `.env.local` 里所有变量逐个粘进去：

- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_BUCKET` / `R2_ENDPOINT`
- `NEXT_PUBLIC_R2_URL`
- `WECOM_WEBHOOK_URL` / `FEISHU_WEBHOOK_URL` / `SERVERCHAN_SENDKEY`
- `WEB3FORMS_ACCESS_KEY`
- Sanity 那一套（如果还在用）

环境选 **Production + Preview + Development** 都勾上。

### A3. 解决"只读文件系统"问题（⚠️ 关键）

Vercel 不允许 `fs.writeFile`，所以当前 `data/*.json` 方案**无法在 Vercel 写入**。需要二选一：

#### 方案 A3-1：切到 **Vercel KV**（推荐）

- 进 Vercel 项目 → **Storage** → **Create Database** → 选 **KV (Redis)**
- 免费 30k 命令/月、256MB 存储，足够小公司用
- 让 AI 改 5 个 `store.ts` 文件即可（每个文件 30 行内）

#### 方案 A3-2：切到 **Vercel Blob**（适合大数据）

- 同上路径，选 **Blob Storage**
- 免费 1GB
- 文件式存储，改动最小

> 💡 **告诉 AI："请把所有 `data/*.json` store 切换到 Vercel KV"**，1 小时内完成。

### A4. 绑定自有域名

1. 在 Vercel 项目 → **Settings** → **Domains** → 输入 `www.zxpapers.com`
2. 按 Vercel 提示去你的域名注册商加 CNAME 记录指向 `cname.vercel-dns.com`
3. 5-30 分钟生效，HTTPS 自动配置 ✅

### A5. 后续更新

```bash
# 本地改完代码
git push
# Vercel 自动检测、自动部署，30 秒上线
```

---

## 🟡 方案 B：部署到 VPS（阿里云/腾讯云/Vultr）

### 适合你的场景：
- 海外客户为主 → 选 **Vultr / DigitalOcean / Linode** 海外节点
- 国内客户为主 → 选 **阿里云国内**（但要 ICP 备案）

### 推荐配置
| 流量 | 配置 | 月费 |
|------|------|------|
| <1万 UV/月 | 2 核 2G | ¥35-80 |
| 1-10万 UV/月 | 2 核 4G | ¥80-200 |
| 10万+ UV/月 | 4 核 8G + CDN | ¥300+ |

### 部署步骤（简化版）

```bash
# 1. SSH 登录服务器
ssh root@你的服务器IP

# 2. 装 Node.js 20 + pnpm + PM2 + Nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | bash
apt install -y nodejs nginx git
npm install -g pnpm pm2

# 3. 拉代码
cd /var/www && git clone https://github.com/your/zxpaper.git
cd zxpaper && pnpm install
pnpm build

# 4. 创建 .env.production，把环境变量粘进去
nano .env.production

# 5. 用 PM2 启动
pm2 start "pnpm start" --name zxpaper
pm2 save && pm2 startup

# 6. 配 Nginx 反向代理（80/443 → 3000）
nano /etc/nginx/sites-available/zxpaper
# 内容见下方
ln -s /etc/nginx/sites-available/zxpaper /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# 7. 配 HTTPS（Let's Encrypt 免费）
apt install -y certbot python3-certbot-nginx
certbot --nginx -d www.zxpapers.com -d zxpapers.com
```

**Nginx 配置示例**（`/etc/nginx/sites-available/zxpaper`）：

```nginx
server {
    listen 80;
    server_name www.zxpapers.com zxpapers.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    client_max_body_size 20M;
}
```

### VPS 的优势
- ✅ JSON 文件方案**不用改**直接用
- ✅ 数据完全在自己手里，不依赖第三方
- ✅ 流量大了也不涨价

### VPS 的成本
- ❌ 自己运维：宕机、被攻击、备份要你管
- ❌ 速度：海外用户 ping 国内服务器要 200ms+

### 数据备份（必做！）

```bash
# 加到 crontab 每天凌晨 3 点备份
crontab -e

# 添加这一行：
0 3 * * * cd /var/www/zxpaper && tar czf /backup/zxpaper-$(date +\%Y\%m\%d).tar.gz data/ && find /backup -name "zxpaper-*.tar.gz" -mtime +30 -delete
```

---

## 🟠 方案 C（折中）：Cloudflare Pages + Workers

- 类似 Vercel 但更便宜
- 海外速度也是顶级
- 中国大陆访问勉强可用（不需要走付费 CN 路线）
- 学习曲线略陡

如果你对 Vercel 价格敏感，可以试 Cloudflare Pages（免费层很慷慨）。

---

## 🤔 我（AI 助手）的最终建议

| 你的优先级 | 我推荐 |
|------|------|
| 海外客户为主 + 想省心 | **Vercel + Vercel KV**（先用免费层） |
| 国内客户为主 | **阿里云轻量服务器 + 备案** |
| 想极限省钱 | **Cloudflare Pages + KV** |
| 数据非常敏感（怕被海外平台审查） | **国内 VPS** |

**老板你的情况**：B 端外贸 + 海外客户 → **Vercel 完胜**。

下一步随时跟我说"帮我把项目改成 Vercel KV 存储 + 部署到 Vercel"，我半天搞定。

---

_文档版本：v1.0 · 最后更新：2026-05-21_
