import type { Metadata } from "next";
import WhatsAppRedirect from "./WhatsAppRedirect";

export const metadata: Metadata = {
  title: { absolute: "Open WhatsApp | ZhixinPaper" },
  robots: { index: false, follow: false },
};

export default function WhatsAppHandoffPage() {
  return <WhatsAppRedirect />;
}
