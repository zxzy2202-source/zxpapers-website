/**
 * 浏览器端图片压缩 / 限制尺寸 + 读取宽高比
 *
 * 设计目标：
 * - 老板上传 5MB 的工厂大图，浏览器先压到合理尺寸再传 R2
 * - 节省 R2 流量、加快上传速度
 * - 同时拿到原图宽高比，便于校验是否符合槽位推荐比例
 */

export interface CompressOptions {
  /** 最大宽度或高度（px），超过则等比缩放。默认 2000 */
  maxEdge?: number;
  /** JPEG / WebP 压缩质量 0-1。默认 0.85 */
  quality?: number;
  /** 输出 mime。默认沿用原图（PNG 透明保留，其他统一 jpeg） */
  outputType?: "image/jpeg" | "image/webp" | "image/png" | "auto";
}

export interface CompressResult {
  file: File;
  width: number;
  height: number;
  /** 原始文件大小（字节） */
  originalSize: number;
  /** 压缩后大小（字节） */
  compressedSize: number;
}

/** 把 File 渲染到 canvas 并重新导出 */
export async function compressImage(
  input: File,
  opts: CompressOptions = {},
): Promise<CompressResult> {
  const { maxEdge = 2000, quality = 0.85, outputType = "auto" } = opts;

  // SVG / GIF 不压缩（直接原样传）
  if (input.type === "image/svg+xml" || input.type === "image/gif") {
    const meta = await getDimensions(input);
    return {
      file: input,
      width: meta.width,
      height: meta.height,
      originalSize: input.size,
      compressedSize: input.size,
    };
  }

  const img = await loadImage(input);

  // 计算目标尺寸
  let { width, height } = img;
  if (Math.max(width, height) > maxEdge) {
    if (width > height) {
      height = Math.round((height * maxEdge) / width);
      width = maxEdge;
    } else {
      width = Math.round((width * maxEdge) / height);
      height = maxEdge;
    }
  }

  // 绘制到 canvas
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context unavailable");
  // 白底（防止 JPEG 透明区域变黑）
  if (outputType !== "image/png" && input.type !== "image/png") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }
  ctx.drawImage(img, 0, 0, width, height);

  // 决定输出类型
  let mime: string;
  if (outputType === "auto") {
    mime = input.type === "image/png" ? "image/png" : "image/jpeg";
  } else {
    mime = outputType;
  }

  // 转 Blob
  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, mime, quality);
  });
  if (!blob) throw new Error("Compression failed");

  // 重新包成 File（沿用原文件名，扩展名按 mime 调整）
  const newExt = mime === "image/png" ? "png" : mime === "image/webp" ? "webp" : "jpg";
  const baseName = input.name.replace(/\.[^.]+$/, "");
  const newFile = new File([blob], `${baseName}.${newExt}`, { type: mime });

  return {
    file: newFile,
    width,
    height,
    originalSize: input.size,
    compressedSize: newFile.size,
  };
}

/** 单纯读取图片宽高 */
export async function getDimensions(
  input: File,
): Promise<{ width: number; height: number }> {
  const img = await loadImage(input);
  return { width: img.width, height: img.height };
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}

/** 把 "16:9" 解析成 ratio number */
export function parseAspect(aspect?: string): number | null {
  if (!aspect) return null;
  const m = aspect.match(/^(\d+)\s*:\s*(\d+)$/);
  if (!m) return null;
  const w = Number(m[1]);
  const h = Number(m[2]);
  if (!w || !h) return null;
  return w / h;
}

/** 检查实际比例与目标比例的偏差（百分比） */
export function aspectDiff(
  actualW: number,
  actualH: number,
  targetRatio: number,
): number {
  const actualRatio = actualW / actualH;
  return Math.abs(actualRatio - targetRatio) / targetRatio;
}

/** 字节数格式化 */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
