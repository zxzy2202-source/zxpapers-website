# 📲 询盘通知 — Webhook 申请傻瓜教程

> 客户填表后，**5 秒内**手机响一声 — 这一节告诉你怎么配。

3 个推荐渠道，**任选 1-3 个**都能同时开。最推荐：**企业微信 + Server酱（双保险）**。

---

## ✅ 方案一：企业微信群机器人（推荐 — 团队用）

**适合**：你和销售/客服在同一个企微群里，所有人都能看到询盘。

### 步骤

1. **手机版企业微信**打开任意群（没群就建一个"询盘通知群"）
2. 点群名称右上角 **「⋯」** → 进入群设置
3. 下拉找到 **「群机器人」** → 点 **「添加」** → 选 **「新创建一个机器人」**
4. 起个名字（例：`zxpaper询盘`），上传头像（可选）→ **添加**
5. 复制弹出的 **Webhook 地址**，长这样：
   ```
   https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=abc123-def4-5678-90ab-cdef12345678
   ```
6. 把这串 URL 填进项目的 `.env.local` 文件：
   ```env
   WECOM_WEBHOOK_URL=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=abc...
   ```
7. 重启项目（`pnpm dev` 或重新部署）

### 测试

在网站随便填一个询盘提交，**1-3 秒**群里就会响：
```
🔔 新询盘
姓名：张三
邮箱：zhang@example.com
国家：United States
消息：我想要一柜 80mm 收银纸
```

---

## ✅ 方案二：飞书（Lark）自定义机器人

**适合**：你团队用飞书办公。

### 步骤

1. **飞书桌面版/手机版**打开/新建一个群（例："zxpaper 客户询盘"）
2. 点群名称 → **「设置」** → 左侧 **「群机器人」** → **「添加机器人」**
3. 在列表里选 **「Custom Bot（自定义机器人）」**
4. 填写：
   - **机器人名称**：`询盘通知`
   - **描述**：客户网站询盘自动推送
   - **安全设置**：建议**不勾选**任何（IP 白名单/签名/关键词），方便测试
5. 点 **「完成」**，复制弹出的 **Webhook 地址**：
   ```
   https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
6. 填进 `.env.local`：
   ```env
   FEISHU_WEBHOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/xxx...
   ```
7. 重启项目

### 测试

提交询盘后飞书群会收到一张**卡片消息**：
```
┌────────────────────────────┐
│ 🔔 ZhixinPaper 新询盘      │
├────────────────────────────┤
│ 客户：张三                  │
│ 邮箱：zhang@example.com    │
│ 国家：🇺🇸 United States    │
│ 消息：我想要一柜 80mm 收银纸 │
│                            │
│ [回复邮件] [查看后台]       │
└────────────────────────────┘
```

---

## ✅ 方案三：Server酱（推送到个人微信）

**适合**：你想用**个人微信**收消息，不依赖团队应用。

### 步骤

1. 浏览器打开 **https://sct.ftqq.com/**
2. 点右上角 **「登录」** → **微信扫码登录**（要关注 Server酱 公众号）
3. 进入控制台 → **「SendKey」** 页面
4. 复制你的 SendKey，长这样：
   ```
   SCT123456TabcDEF7890gHIJklmNOpqRStuV
   ```
5. 填进 `.env.local`：
   ```env
   SERVERCHAN_SENDKEY=SCT123456TabcDEF7890gHIJklmNOpqRStuV
   ```
6. 重启项目

### 测试

提交询盘后，**「Server酱」**公众号会推送：
```
🔔 ZhixinPaper 新询盘 - 张三
（点开看详情）
```

> 💡 Server酱免费版每天最多 5 条。**询盘量大请用企微/飞书。**

---

## 📧 方案四：邮件（已默认开启）

`src/app/api/inquiry/route.ts` 里已经接入 **Web3Forms**，会自动发邮件到注册的邮箱。

如果你想换成**自己的邮箱**：
1. 注册 https://web3forms.com/（免费 250 封/月）
2. 创建一个 Access Key
3. 填进 `.env.local`：
   ```env
   WEB3FORMS_ACCESS_KEY=你自己的access key
   ```

---

## 🎯 我应该选哪个？

| 场景 | 推荐 |
|------|------|
| 我一个人接询盘 | **Server酱**（个人微信收）+ 邮件 |
| 有销售团队，用企微办公 | **企业微信群机器人** + 邮件 |
| 团队用飞书 | **飞书机器人** + 邮件 |
| 我什么都要 | 4 个全配，不冲突 |

---

## ⚙️ 完整 `.env.local` 示例

```env
# ===== 必填 =====
ADMIN_PASSWORD=你的后台登录密码
ADMIN_SESSION_SECRET=用 openssl rand -hex 32 生成

# ===== R2 图片存储（已配） =====
NEXT_PUBLIC_R2_URL=https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET=zxpaper
R2_ENDPOINT=https://xxx.r2.cloudflarestorage.com

# ===== 询盘通知（任选一个或多个）=====
WECOM_WEBHOOK_URL=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx
FEISHU_WEBHOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/xxx
SERVERCHAN_SENDKEY=SCTxxxxxxx
WEB3FORMS_ACCESS_KEY=xxxxxxxx

# ===== Sanity（旧版，可选保留）=====
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 🔍 如何验证 webhook 配好了？

登录后台 → **SEO 设置** → 滑到最底 **「通知渠道状态」** 区块，应该看到绿色 ✅：

```
✅ 企业微信         已配置
✅ 飞书机器人        已配置
⚪ Server酱        未配置
✅ Web3Forms 邮件   已配置
```

红色 ❌ 表示环境变量没读到，**检查 `.env.local` 是否拼写正确 + 重启项目**。

---

## ❓ 常见问题

### Q: 我填了 webhook 但没收到消息？
1. **检查环境变量名拼写**：`WECOM_WEBHOOK_URL` 不是 `WECHAT_WEBHOOK_URL`
2. **重启 dev server**：环境变量改了必须重启 `pnpm dev`
3. **直接 curl 测试**（替换你的 URL）：
   ```bash
   curl -X POST -H "Content-Type: application/json" \
     -d '{"msgtype":"text","text":{"content":"测试消息"}}' \
     https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx
   ```
   返回 `{"errcode":0}` 就是 webhook 本身没问题。

### Q: 飞书 webhook 安全设置选不选？
为了简单，先**全部不勾**。等稳定运行后，可以加 **「签名校验」**——但需要改代码（飞书需要计算 HMAC）。

### Q: 一个询盘想通知多个群怎么办？
方法 1：同一个群可以同时配 webhook 和 Server酱
方法 2：在多个群里都创建 webhook，用逗号分隔配置（需要改 `src/lib/notify.ts` 支持数组）

---

**祝你订单不断！** 🚀
