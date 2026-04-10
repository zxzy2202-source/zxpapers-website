/**
 * 临时迁移 API：将 ImageAsset.path 从 /images/uploads/ 统一迁移到 /uploads/images/
 * 此文件在迁移完成后应删除。
 */
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 查找所有使用旧版路径的记录
    const oldRecords = await prisma.imageAsset.findMany({
      where: {
        path: { startsWith: "/images/uploads/" },
      },
      select: { id: true, filename: true, path: true },
    });

    if (oldRecords.length === 0) {
      return NextResponse.json({
        success: true,
        message: "未发现旧版路径记录，无需迁移。",
        migrated: 0,
        failed: 0,
        details: [],
      });
    }

    const results: { filename: string; oldPath: string; newPath: string; status: "ok" | "error"; error?: string }[] = [];

    for (const record of oldRecords) {
      const newPath = record.path.replace(/^\/images\/uploads\//, "/uploads/images/");
      try {
        await prisma.imageAsset.update({
          where: { id: record.id },
          data: { path: newPath, updatedAt: new Date() },
        });
        results.push({ filename: record.filename, oldPath: record.path, newPath, status: "ok" });
      } catch (err) {
        results.push({
          filename: record.filename,
          oldPath: record.path,
          newPath,
          status: "error",
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }

    const migrated = results.filter((r) => r.status === "ok").length;
    const failed = results.filter((r) => r.status === "error").length;

    return NextResponse.json({
      success: true,
      message: `迁移完成：成功 ${migrated} 条，失败 ${failed} 条。`,
      migrated,
      failed,
      details: results,
    });
  } catch (error) {
    console.error("Migration failed:", error);
    return NextResponse.json(
      { error: "迁移失败", detail: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
