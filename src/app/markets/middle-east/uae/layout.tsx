import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier UAE | CIF Jebel Ali | ZhixinPaper",
  description: "Factory-direct thermal paper rolls for UAE distributors. CIF Jebel Ali pricing, 80×80mm and 57×50mm in stock. Arabic OEM packaging, L/C accepted. AED/USD pricing. ISO 9001 certified.",
  keywords: "thermal paper UAE, thermal rolls Dubai, POS paper UAE, thermal paper Jebel Ali, thermal paper supplier Emirates, thermal paper AED price, thermal paper Abu Dhabi, thermal paper Sharjah, thermal paper Ajman, ورق حراري الإمارات, ورق POS دبي, bulk thermal paper UAE",
  alternates: {
    canonical: "https://www.zxpapers.com/markets/middle-east/uae",
  },
  openGraph: {
    title: "Thermal Paper Rolls Supplier UAE | CIF Jebel Ali | ZhixinPaper",
    description: "Factory-direct thermal paper rolls for UAE distributors. CIF Jebel Ali pricing, 80×80mm and 57×50mm in stock. Arabic OEM packaging, L/C accepted. AED/USD pricing. ISO 9001 certified.",
    url: "https://www.zxpapers.com/markets/middle-east/uae",
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
