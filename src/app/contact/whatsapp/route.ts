import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { SITE } from "@/config/siteData";

const MAX_MESSAGE_LENGTH = 2000;

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const message = request.nextUrl.searchParams
    .get("text")
    ?.trim()
    .slice(0, MAX_MESSAGE_LENGTH);
  const target = new URL("https://api.whatsapp.com/send");

  target.searchParams.set("phone", SITE.whatsapp.replace(/\D/g, ""));
  if (message) target.searchParams.set("text", message);
  target.searchParams.set("type", "phone_number");
  target.searchParams.set("app_absent", "0");

  const response = NextResponse.redirect(target, 307);
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
