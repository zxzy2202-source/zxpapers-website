/**
 * 优化日志存储层
 *
 * 数据结构：
 *   KV key: "optimization-log"
 *   Value: OptimizationEntry[]（按 date 倒序）
 */

import { getStorage } from "./storage";

export type LogCategory =
  | "性能优化"
  | "SEO 优化"
  | "安全修复"
  | "功能新增"
  | "Bug 修复"
  | "内容更新"
  | "其他";

export interface OptimizationEntry {
  id: string;           // UUID
  date: string;         // YYYY-MM-DD
  category: LogCategory;
  title: string;        // 简短标题，如"修复 storage.ts KV fetch 缓存策略"
  description: string;  // 详细说明（支持 Markdown）
  commit?: string;      // Git commit hash（可选）
  files?: string;       // 涉及文件（可选，逗号分隔）
  result?: string;      // 验证结果（可选）
}

const KV_KEY = "optimization-log";

export async function readAllEntries(): Promise<OptimizationEntry[]> {
  const storage = getStorage();
  const data = await storage.get<OptimizationEntry[]>(KV_KEY);
  return data ?? [];
}

export async function addEntry(
  entry: Omit<OptimizationEntry, "id">
): Promise<OptimizationEntry> {
  const storage = getStorage();
  const entries = await readAllEntries();
  const newEntry: OptimizationEntry = {
    ...entry,
    id: crypto.randomUUID(),
  };
  // 按日期倒序插入
  entries.unshift(newEntry);
  await storage.set(KV_KEY, entries);
  return newEntry;
}

export async function deleteEntry(id: string): Promise<void> {
  const storage = getStorage();
  const entries = await readAllEntries();
  const updated = entries.filter((e) => e.id !== id);
  await storage.set(KV_KEY, updated);
}
