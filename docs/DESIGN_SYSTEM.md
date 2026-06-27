# 设计系统 · zxpaper

> 品牌：Global Trade Authority — 深蓝(Navy) + 琥珀(Amber) + Slate 中性灰
> 字体：Display = Sora / Body = Inter

本文档记录站点的设计令牌（token）与核心组件。**新增 UI 一律使用 token 与 `<Button>` 组件，不要再写硬编码 hex 或手拼按钮 class。**

---

## 1. 颜色 Token

颜色统一定义在 [`tailwind.config.ts`](../tailwind.config.ts) 的 `brand.*` 命名空间，用法形如 `bg-brand-navy` / `text-brand-amber` / `from-brand-navy-light`，支持透明度修饰符 `bg-brand-navy/60`。

### Navy 色阶（深 → 浅，所有深蓝表面与渐变的唯一来源）

| Token 类名 | 色值 | 用途 |
|-----------|------|------|
| `brand-ink` | `#07172f` | 最深，footer / hero 基底 |
| `brand-abyss` | `#0a1e3d` | 深色渐变端 |
| `brand-navy-deep` | `#091629` | PageHero 背景基底 |
| `brand-navy-alt` | `#0A1F44` | markets / africa 页面主 navy |
| `brand-navy-shade` | `#0d2347` | 渐变收尾端 |
| **`brand-navy`** | **`#0F2B5B`** | **品牌主蓝**（= shadcn `--primary`） |
| `brand-navy-hover` | `#12346d` | navy 按钮 hover 态 |
| `brand-navy-light` | `#1a3a6e` | 渐变中段 via-stop |

### 其它品牌色

| Token 类名 | 色值 | 用途 |
|-----------|------|------|
| `brand-blue` | `#1E6FD9` | 链接 / 强调蓝 |
| `brand-amber` | `#F59E0B` | 主 CTA（= Tailwind `amber-500`） |
| `brand-amber-dark` | `#D97706` | amber hover / 深调 |

> **shadcn 语义色**（`bg-primary` / `bg-secondary` / `bg-muted` …）由 [`globals.css`](../src/app/globals.css) 的 CSS 变量驱动，主要用于后台 admin 与表单组件。`--primary` 即 `brand-navy`。

### 规则
- ❌ 不要写 `bg-[#0F2B5B]`、`style={{ color: '#0F2B5B' }}` 之类的硬编码值。
- ✅ 用 `bg-brand-navy`。需要新色阶时先在 `tailwind.config.ts` 加 token，再使用。

---

## 2. Button 组件

源文件：[`src/components/ui/button.tsx`](../src/components/ui/button.tsx)。基于 shadcn + cva。

### 变体 `variant`

| 变体 | 用途 | 样式 |
|------|------|------|
| `amber` | 主 CTA（首选） | 琥珀底 + 深字 |
| `navy` | 次级实心 CTA | navy 底 + 白字，hover→navy-hover |
| `whatsapp` | WhatsApp 按钮 | 深绿底 + 白字 |
| `outlineLight` | 深色背景上的描边按钮 | 白色半透明描边 |
| `outlineBrand` | 浅色背景上的描边按钮 | slate 描边 |
| `default` / `secondary` / `ghost` / `outline` / `link` / `destructive` | shadcn 原生（多用于 admin） | — |

### 尺寸 `size`

| 尺寸 | padding | 场景 |
|------|---------|------|
| `default` | `h-10 px-4 py-2` | 表单 / 常规 |
| `sm` | `h-9 px-3` | 紧凑 |
| `lg` | `h-11 px-8` | — |
| `cta` | `px-6 py-3 text-sm` | 区块内 CTA |
| `cta-lg` | `px-8 py-4 text-base` | 页尾大号 CTA |
| `icon` | `h-10 w-10` | 纯图标 |

### 用法

```tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

// 渲染成链接（asChild 把样式套到子元素上）
<Button asChild variant="amber" size="cta-lg">
  <Link href="/contact">Send Inquiry Now <ArrowRight className="w-5 h-5" /></Link>
</Button>

// 外链
<Button asChild variant="outlineLight" size="cta-lg">
  <a href={waUrl} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
</Button>
```

> **注意**：`<Button>` 会把内部 `svg` 统一为 16px（`[&_svg]:size-4`）、字重 `font-semibold`。若某处需保留 20px 图标，传 `className="[&_svg]:size-5"`。

---

## 3. 待办 / 已知不一致

- **存量 CTA 未迁移**：约 16 个页面（尤其 `markets/*`）的 CTA 仍是手写 class，且彼此样式不一（圆角 `rounded-xl` vs `rounded-md`、`hover:-translate-y-0.5`、`font-sora`、padding 各异、WhatsApp 用 `green-500` / `#225d47` / 描边三种）。迁移到 `<Button>` 会统一这些差异（= 视觉规范化），需产品确认后再推进。
- **两套 navy 并存**：`brand-navy`(#0F2B5B) 与 `brand-navy-alt`(#0A1F44) 是历史遗留的两套主蓝，已各自 token 化但未合并。若决定统一为单一主蓝，全局替换 `brand-navy-alt` → `brand-navy` 即可（markets/africa 页面深蓝会略变亮）。
- **Badge 三套并存**：shadcn `<Badge>` / globals.css `.badge-amber`+`.badge-navy` / PageHero `badgeColors` 对象。建议后续统一进 `<Badge>` 变体。

---

_最后更新：2026-06-06 · 颜色 token 已完成全站收敛（426 处硬编码 → 命名 token）；Button 品牌变体已建立。_
