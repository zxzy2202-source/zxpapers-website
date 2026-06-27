/**
 * 询盘记录持久化
 * key: "inquiries" → 整个数组
 */
import { getStorage } from "@/lib/storage";

const KEY = "inquiries";

export interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  subject?: string;
  message: string;
  source?: string;
  createdAt: string;
  status: "new" | "handled" | "archived";
  notes?: string;
}

export async function readAll(): Promise<InquiryRecord[]> {
  const data = await getStorage().get<InquiryRecord[]>(KEY);
  return Array.isArray(data) ? data : [];
}

async function writeAll(rows: InquiryRecord[]): Promise<void> {
  await getStorage().set(KEY, rows);
}

export async function append(
  record: Omit<InquiryRecord, "id" | "createdAt" | "status">
): Promise<InquiryRecord> {
  const all = await readAll();
  const newRecord: InquiryRecord = {
    ...record,
    id: `inq-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  all.unshift(newRecord);
  await writeAll(all);
  return newRecord;
}

export async function updateStatus(
  id: string,
  status: InquiryRecord["status"],
  notes?: string
): Promise<void> {
  const all = await readAll();
  const idx = all.findIndex((r) => r.id === id);
  if (idx === -1) throw new Error("Inquiry not found");
  all[idx].status = status;
  if (notes !== undefined) all[idx].notes = notes;
  await writeAll(all);
}

export async function remove(id: string): Promise<void> {
  const all = await readAll();
  await writeAll(all.filter((r) => r.id !== id));
}
