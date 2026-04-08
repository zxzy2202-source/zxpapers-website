import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// POST /api/admin/seed - 初始化管理员账号（只能运行一次）
export async function POST(request: NextRequest) {
  // 安全检查：只在开发环境或首次设置时允许
  const existing = await prisma.admin.count();
  if (existing > 0) {
    return NextResponse.json(
      { error: "Admin already exists" },
      { status: 400 }
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

  const hashedPassword = await bcrypt.hash(password, 12);
  const admin = await prisma.admin.create({
    data: {
      username,
      password: hashedPassword,
      name: name || "Admin",
    },
  });

  return NextResponse.json({
    success: true,
    message: "Admin created successfully",
    id: admin.id,
  });
}
