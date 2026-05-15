import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier Turkey | CIF Istanbul | ZhixinPaper",
  description: "Factory-direct thermal paper rolls for Turkey distributors. CIF Istanbul/Mersin pricing, 80×80mm and 57×50mm in stock. Turkish OEM packaging, L/C accepted. TRY/USD pricing.",
  keywords: "thermal paper Turkey, thermal rolls Istanbul, POS paper Turkey, thermal paper supplier Türkiye, thermal paper TRY price, termal kağıt Türkiye, termal rulo İstanbul, termal kağıt Ankara, termal kağıt İzmir, POS kağıdı Türkiye, bulk thermal paper Turkey",
  alternates: {
    canonical: "https://www.zxpapers.com/markets/middle-east/turkey",
  },
  openGraph: {
    title: "Thermal Paper Rolls Supplier Turkey | CIF Istanbul | ZhixinPaper",
    description: "Factory-direct thermal paper rolls for Turkey distributors. CIF Istanbul/Mersin pricing, 80×80mm and 57×50mm in stock. Turkish OEM packaging, L/C accepted. TRY/USD pricing.",
    url: "https://www.zxpapers.com/markets/middle-east/turkey",
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
