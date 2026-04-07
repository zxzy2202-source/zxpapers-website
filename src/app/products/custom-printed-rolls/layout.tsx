import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Paper Rolls | OEM Branding",
  description: "Custom printed thermal paper rolls with your logo and branding. Full-color printing on all standard sizes. MOQ 1,000 rolls. ISO 9001 certified manufacturer.",
  keywords: "custom printed thermal rolls, OEM thermal paper, private label thermal rolls",
  alternates: {
    canonical: "https://www.zxpapers.com/products/custom-printed-rolls",
  },
  openGraph: {
    title: "Custom Printed Thermal Paper Rolls | OEM Branding",
    description: "Custom printed thermal paper rolls with your logo and branding. Full-color printing on all standard sizes. MOQ 1,000 rolls. ISO 9001 certified manufacturer.",
    url: "https://www.zxpapers.com/products/custom-printed-rolls",
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
