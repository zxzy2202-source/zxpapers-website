import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier Egypt | CIF Alexandria | ZhixinPaper",
  description: "Factory-direct thermal paper rolls for Egypt distributors. CIF Alexandria/Port Said pricing, 80×80mm and 57×50mm in stock. Arabic OEM packaging, L/C accepted. EGP/USD pricing.",
  keywords: "thermal paper Egypt, thermal rolls Cairo, POS paper Alexandria, thermal paper supplier Egypt, thermal paper EGP price, thermal paper Giza, thermal paper Port Said, ورق حراري مصر, ورق POS القاهرة, bulk thermal paper Egypt, thermal paper distributor Egypt",
  alternates: {
    canonical: "https://www.zxpapers.com/markets/middle-east/egypt",
  },
  openGraph: {
    title: "Thermal Paper Rolls Supplier Egypt | CIF Alexandria | ZhixinPaper",
    description: "Factory-direct thermal paper rolls for Egypt distributors. CIF Alexandria/Port Said pricing, 80×80mm and 57×50mm in stock. Arabic OEM packaging, L/C accepted. EGP/USD pricing.",
    url: "https://www.zxpapers.com/markets/middle-east/egypt",
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
