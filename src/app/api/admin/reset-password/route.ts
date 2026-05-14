import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma, ensureDbSchema } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    await ensureDbSchema();

    const body = await request.json();
    const { username, password, name, seedToken } = body;

    if (process.env.NODE_ENV === "production") {
      const expectedToken = process.env.SEED_ADMIN_TOKEN?.trim();
      const providedToken =
        request.headers.get("x-seed-token")?.trim() ||
        (typeof seedToken === "string" ? seedToken.trim() : "");

      if (!expectedToken) {
        return NextResponse.json(
          { error: "SEED_ADMIN_TOKEN is not configured" },
          { status: 500 }
        );
      }

      if (providedToken !== expectedToken) {
        return NextResponse.json({ error: "Invalid seed token" }, { status: 401 });
      }
    }

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password required" },
        { status: 400 }
      );
    }

    if (typeof username !== "string" || username.trim().length < 3 || username.trim().length > 50) {
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

    const normalizedUsername = username.trim();
    const hashedPassword = await bcrypt.hash(password, 12);
    const existingAdmin = await prisma.admin.findUnique({
      where: { username: normalizedUsername },
    });

    if (existingAdmin) {
      const admin = await prisma.admin.update({
        where: { username: normalizedUsername },
        data: {
          password: hashedPassword,
          name: typeof name === "string" && name.trim() ? name.trim() : existingAdmin.name,
        },
      });

      return NextResponse.json({
        success: true,
        action: "updated",
        message: "Admin password reset successfully",
        id: admin.id,
      });
    }

    const admin = await prisma.admin.create({
      data: {
        username: normalizedUsername,
        password: hashedPassword,
        name: typeof name === "string" && name.trim() ? name.trim() : "Admin",
      },
    });

    return NextResponse.json({
      success: true,
      action: "created",
      message: "Admin created successfully",
      id: admin.id,
    });
  } catch (error) {
    console.error("Error in reset password API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
