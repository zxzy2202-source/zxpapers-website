import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// GET /api/admin/images - 获取图片列表
export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "30");
  const skip = (page - 1) * limit;

  const [images, total] = await Promise.all([
    prisma.imageAsset.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.imageAsset.count(),
  ]);

  return NextResponse.json({ images, total, page });
}

// 处理单个文件上传，返回 ImageAsset 记录
async function processSingleFile(
  file: File,
  alt: string = "",
  page: string = "",
  replaceId: string = ""
) {
  // 验证文件类型
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error(`不支持的文件格式：${file.type}`);
  }

  // 验证文件大小
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`文件超过 10MB 限制`);
  }

  // 生成唯一文件名（时间戳 + 清理后的原始名）
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const filename = `${timestamp}-${safeName}`;
  const uploadDir = path.join(process.cwd(), "public", "images", "uploads");
  const filePath = path.join(uploadDir, filename);
  const publicPath = `/images/uploads/${filename}`;

  // 确保目录存在
  await mkdir(uploadDir, { recursive: true });

  // 写入文件
  const bytes = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(bytes));

  // 替换操作：更新已有记录
  if (replaceId) {
    const updated = await prisma.imageAsset.update({
      where: { id: replaceId },
      data: {
        filename,
        path: publicPath,
        alt: alt || undefined,
        size: file.size,
        updatedAt: new Date(),
      },
    });
    return updated;
  }

  // 新建记录
  const image = await prisma.imageAsset.create({
    data: {
      filename,
      path: publicPath,
      alt,
      page,
      size: file.size,
    },
  });

  return image;
}

// POST /api/admin/images - 上传图片（支持单文件和批量）
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const alt = (formData.get("alt") as string) || "";
    const page = (formData.get("page") as string) || "";
    const replaceId = (formData.get("replaceId") as string) || "";

    // 收集所有上传的文件（支持单文件 "file" 和批量 "files[]"）
    const files: File[] = [];

    const singleFile = formData.get("file") as File | null;
    if (singleFile && singleFile instanceof File) {
      files.push(singleFile);
    }

    const multipleFiles = formData.getAll("files[]") as File[];
    for (const f of multipleFiles) {
      if (f instanceof File) files.push(f);
    }

    if (files.length === 0) {
      return NextResponse.json({ error: "未提供文件" }, { status: 400 });
    }

    // 单文件（含替换）：保持原有响应格式
    if (files.length === 1) {
      try {
        const image = await processSingleFile(files[0], alt, page, replaceId);
        const status = replaceId ? 200 : 201;
        return NextResponse.json({ success: true, image }, { status });
      } catch (err) {
        const msg = err instanceof Error ? err.message : "上传失败";
        return NextResponse.json({ error: msg }, { status: 400 });
      }
    }

    // 批量上传：并发处理，收集每个文件的结果
    const results = await Promise.allSettled(
      files.map((file) => processSingleFile(file, alt, page))
    );

    const succeeded = results
      .filter((r): r is PromiseFulfilledResult<Awaited<ReturnType<typeof processSingleFile>>> => r.status === "fulfilled")
      .map((r) => r.value);

    const failed = results
      .map((r, i) => ({
        filename: files[i].name,
        result: r,
      }))
      .filter((item) => item.result.status === "rejected")
      .map((item) => ({
        filename: item.filename,
        error: item.result.status === "rejected"
          ? (item.result as PromiseRejectedResult).reason?.message || "上传失败"
          : "",
      }));

    return NextResponse.json(
      {
        success: true,
        total: files.length,
        successCount: succeeded.length,
        failCount: failed.length,
        images: succeeded,
        errors: failed,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ error: "上传失败，请重试" }, { status: 500 });
  }
}
