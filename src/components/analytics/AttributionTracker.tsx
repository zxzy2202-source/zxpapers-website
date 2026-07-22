"use client";

import { useEffect } from "react";
import { captureInquiryAttribution } from "@/lib/inquiryAttribution";
import { trackConversionEvent } from "@/lib/analytics";

function contactChannel(href: string) {
  const normalized = href.toLowerCase();
  if (normalized.startsWith("https://wa.me/") || normalized.startsWith("https://api.whatsapp.com/")) {
    return "whatsapp";
  }
  if (normalized.startsWith("mailto:")) return "email";
  if (normalized.startsWith("tel:")) return "phone";
  if (
    normalized === "/contact" ||
    normalized.startsWith("/contact?") ||
    normalized.startsWith("#inquiry")
  ) {
    return "form";
  }
  return null;
}

export default function AttributionTracker() {
  useEffect(() => {
    captureInquiryAttribution();

    const handleContactClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const channel = contactChannel(link.getAttribute("href") || "");
      if (!channel) return;

      trackConversionEvent("contact_channel_clicked", {
        channel,
        link_location: link.dataset.analyticsLocation || "site",
      });
    };

    document.addEventListener("click", handleContactClick);
    return () => document.removeEventListener("click", handleContactClick);
  }, []);

  return null;
}
