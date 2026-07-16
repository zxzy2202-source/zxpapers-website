"use client";

import Link from "next/link";
import { MessageSquareText, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface MobileInquiryBarProps {
  inquiryHref: string;
  whatsappHref: string;
}

export default function MobileInquiryBar({ inquiryHref, whatsappHref }: MobileInquiryBarProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const inquiry = document.querySelector(inquiryHref);
    if (!inquiry || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.12 },
    );

    observer.observe(inquiry);
    return () => observer.disconnect();
  }, [inquiryHref]);

  return (
    <aside
      aria-label="Mobile inquiry actions"
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 pt-2 shadow-[0_-8px_24px_rgba(7,23,47,0.12)] backdrop-blur transition-[transform,opacity] duration-200 motion-reduce:transition-none lg:hidden ${
        hidden ? "pointer-events-none translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-[1.15fr_0.85fr] gap-2">
        <Link
          href={inquiryHref}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
        >
          <MessageSquareText className="h-4 w-4" aria-hidden="true" />
          Request Quote
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-navy px-3 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </aside>
  );
}
