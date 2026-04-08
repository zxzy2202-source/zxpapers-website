import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

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

// POST /api/admin/images - 上传图片
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const alt = formData.get("alt") as string || "";
    const page = formData.get("page") as string || "";
    const replaceId = formData.get("replaceId") as string || "";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // 验证文件类型
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    // 生成唯一文件名
    const ext = file.name.split(".").pop() || "jpg";
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const uploadDir = path.join(process.cwd(), "public", "images", "uploads");
    const filePath = path.join(uploadDir, filename);
    const publicPath = `/images/uploads/${filename}`;

    // 确保目录存在
    await mkdir(uploadDir, { recursive: true });

    // 写入文件
    const bytes = await file.arrayBuffer();
    await writeFile(filePath, Buffer.from(bytes));

    // 如果是替换操作，更新旧记录
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
      return NextResponse.json({ success: true, image: updated });
    }

    // 创建新记录
    const image = await prisma.imageAsset.create({
      data: {
        filename,
        path: publicPath,
        alt,
        page,
        size: file.size,
      },
    });

    return NextResponse.json({ success: true, image }, { status: 201 });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
