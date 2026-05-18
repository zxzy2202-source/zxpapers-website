# zxpapers 图片资产管理后台实施方案

本方案针对 **zxpapers.com** 当前的 **Next.js App Router + Prisma + SQLite/Turso + NextAuth Admin Dashboard** 架构设计，不直接迁移其他项目代码，而是在现有项目基础上重新开发一套可持续扩展的图片资产管理后台。

| 维度 | 当前现状 | 新方案 |
| --- | --- | --- |
| 前台取图 | `getSlotImage()` / `getSlotImages()` 直接从 `ImageAsset.page` 读取槽位字符串 | 保留兼容层，同时引入独立槽位表，由工具函数优先读取新表绑定 |
| 数据模型 | `ImageAsset` 为扁平图片表，`page` 字段兼任槽位绑定 | 拆分为 `ImageAsset` + `ImageSlotRecord`，图片与槽位解耦 |
| 后台能力 | 仅支持上传、替换、简单绑定 | 新增筛选、统计、初始化、删除、实时刷新、预览、裁剪、AI Alt、重新裁剪 |
| 裁剪流程 | 无 | 前端弹出裁剪器，按槽位比例裁切后上传 |
| SEO Alt | 手工填写 | 支持调用 Claude API 自动生成并允许人工修改 |

## 一、数据结构设计

新的后台系统采用 **Page / Section / Slot** 三级结构，但为了避免一次性大面积改造前台页面，数据库层使用一张独立的槽位记录表来承载三级信息与当前绑定关系。

| 字段 | 说明 |
| --- | --- |
| `slotKey` | 全局唯一键，例如 `home:hero:background` |
| `pageKey` | 页面标识，例如 `home`、`products` |
| `pagePath` | 页面路径，例如 `/`、`/products` |
| `sectionKey` | 页面内区块，例如 `hero`、`featured-products` |
| `slotKeyName` | 区块中的槽位名，例如 `background`、`card-image` |
| `label` | 后台展示标签 |
| `description` | 图片用途说明 |
| `aspectRatio` | 预设裁剪比例：`16:9`、`4:3`、`1:1` |
| `sortOrder` | 排序 |
| `imageAssetId` | 当前绑定图片，可为空 |
| `isActive` | 是否启用 |

其中 `ImageAsset` 继续负责存储上传后的文件元数据，并补充可支撑后台操作的字段，例如 `mimeType`、`source`、`tags`、`storageType`。为了兼容既有前台，保留 `page` 字段作为旧兼容字段，并在新绑定保存时同步写入 `ImageAsset.page = slotKey`。

## 二、接口设计

| 接口 | 方法 | 作用 |
| --- | --- | --- |
| `/api/admin/image-slots` | `GET` | 获取槽位列表、筛选结果与统计信息 |
| `/api/admin/image-slots/init` | `POST` | 根据配置初始化全部默认槽位 |
| `/api/admin/image-slots/[slotKey]` | `PATCH` | 更新标签、Alt、绑定图片或清空槽位 |
| `/api/admin/image-slots/[slotKey]/upload` | `POST` | 上传裁剪后的图片并绑定到指定槽位 |
| `/api/admin/image-slots/[slotKey]/alt` | `POST` | 调用 Claude API 生成 Alt 文本 |
| `/api/admin/images/[id]` | `DELETE` | 删除图片记录并解除槽位绑定 |

接口层统一复用现有 `auth()` 做后台权限校验。

## 三、前台兼容策略

前台已有大量页面通过 `getSlotImage()` / `getSlotImages()` 获取图片。因此本次不要求同步改完所有页面，而是采用兼容读取：

1. 工具函数优先查新槽位表中的 `imageAsset.path`。
2. 若新槽位表无记录，则回退到旧 `ImageAsset.page = slotKey` 的查法。
3. 初始化槽位后，后台新上传/替换逻辑同时维护新表绑定与旧兼容字段。

这样可以在最少前台改动下完成后台重构，并为后续全面迁移预留空间。

## 四、前端交互设计

后台 `/admin/images` 页面改为“槽位为中心”的资产管理界面，而不是“文件为中心”的散图列表。

| 区块 | 说明 |
| --- | --- |
| 顶部工具栏 | 页面筛选、关键词搜索、Refresh、初始化槽位 |
| 统计面板 | 总槽位数、已上传数量、空槽位数量、覆盖页面数 |
| 槽位卡片列表 | 展示 Page / Section / Slot、比例、状态、预览图、Alt、标签 |
| 图片操作弹层 | 上传、重新裁剪、删除、AI Alt、编辑 Label/Alt |
| Lightbox | 点击缩略图放大预览 |
| 裁剪弹层 | 根据槽位比例进行可视化裁剪，输出裁剪后的 Blob |

刷新策略采用：手动 `Refresh` + 窗口重新聚焦自动刷新。

## 五、裁剪实现方案

由于当前项目尚未安装现成裁剪库，本次优先采用浏览器原生 Canvas 实现轻量裁剪器：

1. 选择图片后读取为本地预览。
2. 根据槽位比例计算固定裁剪框。
3. 允许用户拖动图片位置与缩放。
4. 提交时用 Canvas 生成裁剪后的 Blob，再上传到后端。

这样可减少依赖冲突，适配现有 Vercel 部署环境。

## 六、AI Alt 生成方案

Alt 生成接口读取槽位上下文（页面、区块、槽位标签）与当前图片信息，组装提示词后调用 Claude API。若服务端未配置可用密钥，则返回明确错误提示，避免后台静默失败。

生成原则如下：

| 原则 | 说明 |
| --- | --- |
| SEO 友好 | 描述具体产品、场景、材质或用途 |
| 可人工复核 | 生成后填入编辑框，不直接强制保存 |
| 结合上下文 | 参考页面与区块含义，避免生成泛化描述 |
| 长度适中 | 优先 70–140 字符范围内的英文 Alt |

## 七、实施顺序

先扩展 Prisma schema 与槽位配置，再实现新 API，然后重写后台 UI，最后补齐前台取图兼容与本地验证。该顺序可以减少中途数据结构变更导致的返工。
