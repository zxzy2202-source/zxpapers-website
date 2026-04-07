import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier Middle East | UAE Saudi Egypt Turkey | ZhixinPaper",
  description: "Factory-direct thermal paper rolls for Middle East distributors. CIF pricing to Jebel Ali, Jeddah, Alexandria, Istanbul. Arabic OEM, L/C accepted. ISO 9001 certified.",
  keywords: "thermal paper Middle East, thermal rolls UAE Saudi Arabia, POS paper supplier Middle East",
  alternates: {
    canonical: "https://www.zxpapers.com/markets/middle-east",
  },
  openGraph: {
    title: "Thermal Paper Rolls Supplier Middle East | UAE Saudi Egypt Turkey | ZhixinPaper",
    description: "Factory-direct thermal paper rolls for Middle East distributors. CIF pricing to Jebel Ali, Jeddah, Alexandria, Istanbul. Arabic OEM, L/C accepted. ISO 9001 certified.",
    url: "https://www.zxpapers.com/markets/middle-east",
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
