const R2_BASE = process.env.NEXT_PUBLIC_R2_URL ?? "";

export function r2Image(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${R2_BASE}/${path.replace(/^\//, "")}`;
}
