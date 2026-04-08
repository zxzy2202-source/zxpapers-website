import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/inquiries - 获取询盘列表
export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const skip = (page - 1) * limit;

  const where = status ? { status } : {};

  const [inquiries, total] = await Promise.all([
    prisma.inquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.inquiry.count({ where }),
  ]);

  return NextResponse.json({
    inquiries,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

// POST /api/admin/inquiries - 创建询盘（来自前台表单）
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, country, phone, product, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: { name, email, company, country, phone, product, message },
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
