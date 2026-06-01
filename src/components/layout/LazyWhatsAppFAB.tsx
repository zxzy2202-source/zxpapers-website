"use client";

import dynamic from "next/dynamic";

const WhatsAppFAB = dynamic(() => import("./WhatsAppFAB"), {
  ssr: false,
});

export default function LazyWhatsAppFAB() {
  return <WhatsAppFAB />;
}
