import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blank Thermal Paper Rolls Wholesale | All Sizes | ZhixinPaper",
  description: "Bulk blank thermal paper rolls for POS, ATM, and receipt printers. All standard sizes in stock. MOQ 1 pallet. ISO 9001 certified manufacturer.",
  keywords: "blank thermal paper rolls, thermal rolls wholesale, POS paper rolls manufacturer",
  alternates: {
    canonical: "https://www.zxpapers.com/products/blank-thermal-rolls",
  },
  openGraph: {
    title: "Blank Thermal Paper Rolls Wholesale | All Sizes | ZhixinPaper",
    description: "Bulk blank thermal paper rolls for POS, ATM, and receipt printers. All standard sizes in stock. MOQ 1 pallet. ISO 9001 certified manufacturer.",
    url: "https://www.zxpapers.com/products/blank-thermal-rolls",
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
