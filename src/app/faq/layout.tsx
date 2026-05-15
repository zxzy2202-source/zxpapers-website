import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Thermal Paper Rolls & Labels",
  description: "Frequently asked questions about ZhixinPaper thermal paper rolls and labels. MOQ, shipping, OEM, certifications, and more.",
  keywords: "thermal paper FAQ, thermal rolls questions, ZhixinPaper FAQ",
  alternates: {
    canonical: "https://www.zxpapers.com/faq",
  },
  openGraph: {
    title: "FAQ | Thermal Paper Rolls & Labels",
    description: "Frequently asked questions about ZhixinPaper thermal paper rolls and labels. MOQ, shipping, OEM, certifications, and more.",
    url: "https://www.zxpapers.com/faq",
    type: "website",
      images: [
      {
        url: "https://www.zxpapers.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "ZhixinPaper | Thermal Paper Rolls Manufacturer",
        type: "image/png",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
