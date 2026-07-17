"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

interface ProductCategoryActionLinkProps {
  href: string;
  className: string;
  children: ReactNode;
  inquiryFormId?: string;
  inquiryMessage?: string;
}

export default function ProductCategoryActionLink({
  href,
  className,
  children,
  inquiryFormId,
  inquiryMessage,
}: ProductCategoryActionLinkProps) {
  const usesInquiryPrefill = href === "#inquiry" && inquiryFormId && inquiryMessage;

  const handleInquiryClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!usesInquiryPrefill) return;

    event.preventDefault();
    window.history.replaceState(null, "", href);
    window.dispatchEvent(
      new CustomEvent("inquiryScroll", {
        detail: { formId: inquiryFormId, message: inquiryMessage },
      }),
    );
  };

  return (
    <Link href={href} className={className} onClick={handleInquiryClick}>
      {children}
    </Link>
  );
}
