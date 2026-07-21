import { BadgeCheck, Boxes, Factory, FileText, Layers, MessageSquare, Phone, ShieldCheck, Truck } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { NCR_FORMS_IMG, ncrFormParts } from "@/app/products/ncr-forms/ncr-forms-data";
import { ncrApplicationPages, type NcrApplicationPageData } from "@/app/products/ncr-applications-data";

const iconMap = {
  file: <FileText />,
  layers: <Layers />,
  shield: <ShieldCheck />,
  truck: <Truck />,
  boxes: <Boxes />,
  factory: <Factory />,
};

export default async function NcrApplicationShowcasePage({ application }: { application: NcrApplicationPageData }) {
  const ncrImg = r2Image(await getSlotImage(application.heroSlot, NCR_FORMS_IMG));
  const url = `${SITE.domain}/products/${application.slug}`;
  const faqs = [application.geoAnswer, ...application.faqs];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
      { "@type": "ListItem", position: 3, name: "NCR Forms & Business Forms", item: `${SITE.domain}/products/ncr-forms` },
      { "@type": "ListItem", position: 4, name: application.name, item: url },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: application.name,
    description: application.metaDescription,
    image: NCR_FORMS_IMG,
    url,
    about: { "@type": "Thing", name: application.name },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const relatedApplications = ncrApplicationPages
    .filter((page) => page.slug !== application.slug)
    .slice(0, 5)
    .map((page) => ({
      image: ncrImg,
      title: page.name,
      desc: page.metaDescription,
      href: `/products/${page.slug}`,
      badge: "Application",
      ctaLabel: "View Application",
      ctaHref: `/products/${page.slug}`,
    }));

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Related NCR Product Formats",
      description: "Match the application page with the right NCR product format, part count or finished form.",
      cards: application.relatedForms.map((card) => ({
        image: ncrImg,
        title: card.title,
        desc: card.desc,
        href: card.href ?? "/products/custom-ncr-forms",
        badge: card.badge,
        ctaLabel: "View Format",
        ctaHref: card.href ?? "/products/custom-ncr-forms",
      })),
    },
    {
      title: "More NCR Industry Applications",
      description: "Explore other high-intent carbonless form applications for SEO, GEO and inquiry qualification.",
      cards: relatedApplications,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "NCR Forms", href: "/products/ncr-forms" },
          { label: application.name },
        ]}
        heroImage={ncrImg}
        heroBadge={{ text: application.heroBadge, color: "amber" }}
        title={<>{application.title}<br /><span className="text-amber-400">{application.highlight}</span></>}
        subtitle={application.subtitle}
        trustBadges={application.trustBadges}
        stats={application.stats}
        ctas={[
          { label: "Request a Quote", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          {
            label: "WhatsApp for Quote",
            href: `${SITE.whatsappUrl}?text=${encodeURIComponent(application.inquiry.whatsappText)}`,
            variant: "whatsapp",
            icon: <Phone className="w-4 h-4" />,
            external: true,
          },
        ]}
        introSplit={{
          ...application.intro,
          image: ncrImg,
          imageAlt: application.name,
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={application.overview}
        featureSplit={{
          ...application.feature,
          image: ncrImg,
          imageAlt: `${application.name} carbonless form examples`,
          cta: { label: "Discuss Your Layout", href: "#inquiry" },
        }}
        productsTitle={application.productsTitle}
        productsDescription={application.productsDescription}
        products={application.products.map((card) => ({
          ...card,
          image: ncrImg,
          href: card.href,
        }))}
        browseSections={browseSections}
        comparison={{
          title: application.comparison.title,
          headers: {
            left: application.comparison.leftHeader,
            right: application.comparison.rightHeader,
          },
          rows: application.comparison.rows,
        }}
        specs={{
          title: "Recommended Specifications",
          rows: application.specs,
          note: "* Phenol-free / BPA-free and FSC options are quoted on request for compliance-sensitive orders.",
        }}
        whyUs={{
          title: `Why Source ${application.name} From ZhixinPaper`,
          subtitle: "Factory-direct printing, numbering, collating and export packaging for custom carbonless form programs.",
          items: [
            ...application.whyUs.map((item) => ({
              icon: iconMap[item.icon],
              title: item.title,
              text: item.text,
            })),
            { icon: <BadgeCheck />, title: "NCR Range Support", text: "2-part, 3-part, 4-part and multi-part formats are available from the same factory." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "NCR Forms & Business Forms", href: "/products/ncr-forms" },
          { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
          { label: "Delivery Note Forms", href: "/products/delivery-note-forms" },
          { label: "Continuous Computer Forms", href: "/products/continuous-computer-forms" },
          { label: ncrFormParts[2].label, href: `/products/ncr-forms/${ncrFormParts[2].slug}` },
        ]}
        inquiry={application.inquiry}
      />
    </>
  );
}
