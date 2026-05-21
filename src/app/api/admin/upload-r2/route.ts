import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2Client, R2_BUCKET_NAME, r2Configured } from "@/lib/r2";
import { isAuthenticated } from "@/lib/auth";

export async function POST(request: NextRequest) {
  // 鉴权：必须登录后台
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  if (!r2Configured || !R2_BUCKET_NAME) {
    return NextResponse.json({ error: "R2 not configured" }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string || "uploads";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileExtension = file.name.split(".").pop();
    const filename = `${folder}/${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: filename,
      Body: buffer,
      ContentType: file.type,
    });

    await r2Client.send(command);

    return NextResponse.json({ 
      success: true, 
      path: filename,
      url: `${process.env.NEXT_PUBLIC_R2_URL}/${filename}`
    });
  } catch (error) {
    console.error("R2 Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
