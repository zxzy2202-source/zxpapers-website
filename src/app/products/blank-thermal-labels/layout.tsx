import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blank Thermal Labels Wholesale | Custom Sizes | ZhixinPaper",
  description: "Bulk blank thermal labels for retail, logistics, and warehousing. Custom sizes, permanent/removable adhesive. MOQ 1 roll. ISO 9001 certified manufacturer.",
  keywords: "blank thermal labels, thermal labels wholesale, custom thermal labels manufacturer",
  alternates: {
    canonical: "https://www.zxpapers.com/products/blank-thermal-labels",
  },
  openGraph: {
    title: "Blank Thermal Labels Wholesale | Custom Sizes | ZhixinPaper",
    description: "Bulk blank thermal labels for retail, logistics, and warehousing. Custom sizes, permanent/removable adhesive. MOQ 1 roll. ISO 9001 certified manufacturer.",
    url: "https://www.zxpapers.com/products/blank-thermal-labels",
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
