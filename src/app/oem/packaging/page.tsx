import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import PageHero from "@/components/shared/PageHero";
import { CheckCircle, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: "Private Label Packaging | Custom Branding",
  description: "Custom private label packaging for thermal paper rolls and labels. Box design, shrink wrap, retail display packaging. MOQ 1,000 units.",
  alternates: { canonical: `${SITE.domain}/oem/packaging` },
};

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-packaging-hhtzW7wquosmF8ub6HjVJV.webp";


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zxpapers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "OEM Services",
      "item": "https://www.zxpapers.com/oem"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Packaging",
      "item": "https://www.zxpapers.com/oem/packaging"
    }
  ]
};

export const revalidate = 3600; // 1 hour: slot image changes infrequently

export default async function PackagingPage() {
  const heroImage = await getSlotImage("oem:packaging-hero", IMG);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        bgImage={heroImage}
        bgImageAlt="ZhixinPaper OEM packaging and private label service for thermal paper rolls and labels"
        overlayDir="left"
        overlayOpacity={62}
        minHeight="min-h-[380px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Services", href: "/oem" }, { label: "Packaging" }]}
        badge={{ text: "OEM Service", color: "amber" }}
        eyebrow="Private label packaging and packing control"
        title={<>Packaging &amp; <span className="text-amber-400">Private Label</span></>}
        subtitle="Coordinate box design, shrink wrap, carton structure, retail presentation and repeat-order packing rules through one OEM packaging workflow."
        trustBadges={["Custom Box Design", "Retail & Bulk Packs", "Packing References", "Repeat-Order Control"]}
        mobileTrustBadgeLimit={2}
        ctas={[
          { label: "Request Packaging Quote", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Packaging Team", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a private label packaging review for thermal rolls or labels.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
      />
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-slate-600 leading-relaxed">Build your own brand with our private label packaging service. We design and produce custom boxes, sleeves, and labels with your brand identity. Perfect for distributors who want to sell under their own brand.</p>
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Packaging Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Individual roll shrink wrap with custom label", "Box packaging (10/50/100 rolls per box)", "Display box for retail shelf placement", "Custom sleeve packaging", "Bulk poly bag packaging", "Eco-friendly kraft paper packaging"].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>
            <Link href="/contact" className="font-sora inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm">
              Request Packaging Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-1">Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Packaging & Private Label" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
