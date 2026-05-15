import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier Saudi Arabia | CIF Jeddah | ZhixinPaper",
  description: "Factory-direct thermal paper rolls for Saudi Arabia distributors. CIF Jeddah/Dammam pricing, 80×80mm and 57×50mm in stock. Arabic OEM packaging, L/C accepted. SAR/USD pricing.",
  keywords: "thermal paper Saudi Arabia, thermal rolls Riyadh, POS paper Jeddah, thermal paper supplier KSA, thermal paper SAR price, thermal paper Dammam, thermal paper Mecca, thermal paper Medina, ورق حراري السعودية, ورق POS الرياض, bulk thermal paper KSA",
  alternates: {
    canonical: "https://www.zxpapers.com/markets/middle-east/saudi-arabia",
  },
  openGraph: {
    title: "Thermal Paper Rolls Supplier Saudi Arabia | CIF Jeddah | ZhixinPaper",
    description: "Factory-direct thermal paper rolls for Saudi Arabia distributors. CIF Jeddah/Dammam pricing, 80×80mm and 57×50mm in stock. Arabic OEM packaging, L/C accepted. SAR/USD pricing.",
    url: "https://www.zxpapers.com/markets/middle-east/saudi-arabia",
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
