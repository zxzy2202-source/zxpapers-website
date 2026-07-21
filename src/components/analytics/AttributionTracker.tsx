"use client";

import { useEffect } from "react";
import { captureInquiryAttribution } from "@/lib/inquiryAttribution";

export default function AttributionTracker() {
  useEffect(() => {
    captureInquiryAttribution();
  }, []);

  return null;
}
