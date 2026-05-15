import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Labels | OEM Private Label",
  description: "Custom printed thermal labels with your logo and design. Full-color printing, permanent/removable adhesive. MOQ 1,000 labels. ISO 9001 certified.",
  keywords: "custom printed thermal labels, OEM thermal labels, private label thermal labels",
  alternates: {
    canonical: "https://www.zxpapers.com/products/custom-printed-labels",
  },
  openGraph: {
    title: "Custom Printed Thermal Labels | OEM Private Label",
    description: "Custom printed thermal labels with your logo and design. Full-color printing, permanent/removable adhesive. MOQ 1,000 labels. ISO 9001 certified.",
    url: "https://www.zxpapers.com/products/custom-printed-labels",
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
