import { NextRequest, NextResponse } from "next/server";
import { prisma, ensureDbSchema } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// POST /api/admin/seed - 初始化管理员账号（只能运行一次）
export async function POST(request: NextRequest) {
  try {
    // 确保数据库表结构存在
    await ensureDbSchema();

    // 安全检查：如果已有管理员账号，拒绝执行
    const existing = await prisma.admin.count();
    if (existing > 0) {
      return NextResponse.json(
        { error: "Admin already exists. Seed is disabled." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { username, password, name } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password required" },
        { status: 400 }
      );
    }

    // 校验输入长度
    if (typeof username !== "string" || username.length < 3 || username.length > 50) {
      return NextResponse.json(
        { error: "Username must be 3-50 characters" },
        { status: 400 }
      );
    }

    if (typeof password !== "string" || password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = await prisma.admin.create({
      data: {
        username: username.trim(),
        password: hashedPassword,
        name: typeof name === "string" && name.trim() ? name.trim() : "Admin",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin created successfully",
      id: admin.id,
    });
  } catch (error) {
    console.error("Error in seed API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
