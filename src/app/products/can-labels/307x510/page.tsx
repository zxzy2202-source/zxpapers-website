import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps307x510 } from "../can-labels-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "307×510 Filling Line Labels | Wide-Body Format",
  description:
    "Specify 307×510 machine-ready full-wrap labels for wide-body food or industrial containers by surface, exposure, artwork, material, adhesive, and roll setup.",
  path: "/products/can-labels/307x510",
});


export const revalidate = 86400; // 24 hours: static product/market content

export default function Page() {
  return (
    <>
      <SizeDetailPage
        type="labels"
        sizeLabel="307 × 510"
        slug="307x510"
        fullTitle="307×510 Filling Line Labels (Wide Body)"
        badge="Wide Body"
        description="The 307×510 route supports machine-ready wide-body label planning for food and industrial containers. The format provides room for product information and buyer-approved artwork. Material, adhesive and finish require review against the named product, container coating and exposure."
        specs={[
          { label: "Container Reference", value: "307×510 reference; verify the production container" },
          { label: "Label Dimensions", value: "Approx. 86mm × 130mm; confirm the available label panel" },
          { label: "Face Stock", value: "White gloss, matte, kraft, or film options by application" },
          { label: "Adhesive", value: "Selected after container surface and exposure review" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone options" },
          { label: "Finish", value: "Selected and tested for the specified exposure" },
          { label: "Order Quantity", value: "Confirmed by construction, artwork and SKU mix" },
          { label: "Production Timing", value: "Confirmed after proof, trial and order review" },
          { label: "Evidence Scope", value: "Material, product and market documents confirmed by project" },
        ]}
        applications={apps307x510}
        markets={["Global"]}
        productImage={CAN_LABELS_IMG}
        productImageSlot="can-labels"
      />
    </>
  );
}
