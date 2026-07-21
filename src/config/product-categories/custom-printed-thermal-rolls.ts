import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { paperRollSizes } from "@/config/navigation";

const ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const sizeUses: Record<string, string> = {
  "80x80mm": "Branded POS receipts, tickets and retail counter rolls",
  "57x50mm": "Compact payment terminals and mobile receipt printers",
  "80x70mm": "Standard-width printers with a smaller roll holder",
  "110x80mm": "Wide receipts, kiosks and specialist terminal formats",
  "57x40mm": "Portable payment, delivery and handheld devices",
  "57x30mm": "Ultra-compact card and portable receipt printers",
};

export const customPrintedThermalRollsCategoryConfig: ProductCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/thermal-paper-rolls/custom-printed",
  categoryName: "Custom Printed Thermal Paper Rolls",
  alternateNames: [
    "Branded Receipt Rolls",
    "OEM Printed Thermal Rolls",
    "Private-Label Thermal Paper Rolls",
    "Logo Printed Receipt Paper",
    "Preprinted Thermal Paper Rolls",
  ],
  audience:
    "Retail chains, hospitality groups, payment-terminal suppliers, distributors, OEM buyers and private-label programs that need printed thermal rolls with controlled artwork and repeat supply",
  metadata: {
    title: "Custom Printed Thermal Paper Rolls | OEM & Private Label",
    description:
      "Specify custom printed thermal paper rolls by printer, roll geometry, print side, artwork, repeat, QR or barcode use, proof, packing and repeat-order controls.",
    keywords: [
      "custom printed thermal paper rolls",
      "branded receipt rolls",
      "OEM printed thermal rolls",
      "private label thermal paper rolls",
      "logo printed receipt paper",
      "preprinted thermal receipt rolls",
      "custom printed POS rolls",
      "printed till rolls wholesale",
      "custom QR receipt rolls",
    ],
  },
  hero: {
    image: {
      slot: "thermal-paper-rolls:custom-hero",
      fallback: ROLLS_IMAGE,
      alt: "Custom printed thermal paper rolls prepared for OEM and private-label review",
    },
    badge: "B2B printed-roll program",
    titleBefore: "Custom Printed Thermal Paper Rolls for ",
    titleHighlight: "OEM & Private Label Programs",
    description:
      "Align the roll, printer, print side, artwork, QR or barcode use, proof, packing and repeat reference before releasing a custom printed quote.",
    trustBadges: [
      "Specification and artwork reviewed together",
      "Front, reverse or feasible print-side review",
      "Proof and sample route by risk",
      "Version, packing and repeat control",
    ],
    facts: [
      { value: "6 routes", label: "Reference roll sizes" },
      { value: "4 stages", label: "Approval sequence" },
      { value: "QR / barcode", label: "Testable code use" },
      { value: "Multi-SKU", label: "Version and packing control" },
    ],
    primaryCta: { label: "Review Printing Programs", href: "#product-families" },
    secondaryCta: { label: "Send Artwork Requirements", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Printing programs", href: "#product-families" },
    { label: "Roll sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Approval guide", href: "#selection-guide" },
    { label: "Proof & testing", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "RFQ", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Printed-roll program matrix",
      title: "Choose the print architecture before the artwork",
      description:
        "A branded receipt, reverse-printed roll and QR-enabled ticket can share a width but require different print areas, image controls, testing and packing. Start with the job the roll must perform.",
    },
    sizes: {
      label: "Reference roll formats",
      title: "Use a known size, then confirm the complete printed roll",
      description:
        "Width alone does not define the print-safe area or feeding behavior. Confirm outer diameter or length, core, winding, paper grade, print side and quantity by SKU.",
    },
    applications: {
      label: "Print and usage routes",
      title: "Match static print to the next step in the workflow",
      description:
        "Retail receipts, payment terminals, kiosks and distributor programs differ in print position, code use, storage, packing and repeat-order risk.",
    },
    selection: {
      label: "Four-stage approval guide",
      title: "Approve the roll and the artwork as one production reference",
      description:
        "Move from the buyer brief to feasibility, proof and testing, then freeze the artwork, packing and change-control reference for production and reorders.",
    },
  },
  families: [
    {
      id: "branded-receipts",
      label: "Core print route",
      title: "Branded Receipt & POS Rolls",
      description:
        "Logo, promotional message, service copy or campaign artwork printed on receipt and till rolls for retail, hospitality and payment workflows.",
      buyerFit:
        "Confirm printer model, width, OD or length, core, print side, repeat, artwork live area, paper grade, storage and carton pack.",
      href: "#inquiry",
      linkLabel: "Plan a branded receipt roll",
      featured: true,
      image: {
        slot: "products:thermal-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Branded thermal receipt rolls for POS and retail programs",
      },
    },
    {
      id: "reverse-print",
      label: "Print-side review",
      title: "Reverse-Side & Feasible Print Rolls",
      description:
        "Printed roll programs where the artwork position, thermal image area and downstream printer behavior need a feasibility check.",
      buyerFit:
        "Send the current roll, printer model, artwork dimensions and required print side. Confirm contrast, live area, winding, cut and storage before proof.",
      href: "#inquiry",
      linkLabel: "Review print-side feasibility",
      image: {
        slot: "products:thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Printed thermal roll artwork and print-side feasibility review",
      },
    },
    {
      id: "code-enabled",
      label: "Data and engagement",
      title: "QR, Barcode & Ticket Rolls",
      description:
        "Printed receipts, tickets or vouchers that reserve a controlled area for QR, barcode, serial, date or later variable information.",
      buyerFit:
        "Confirm code owner, size, quiet zone, contrast, destination, scanner or app, print density and the physical scan-test route.",
      href: "#inquiry",
      linkLabel: "Define a code test plan",
      image: {
        slot: "thermal-rolls:detail-specification",
        fallback: ROLLS_IMAGE,
        alt: "Thermal roll specification and QR or barcode print planning",
      },
    },
    {
      id: "oem-packing",
      label: "Distribution route",
      title: "OEM, Distributor & Private-Label Packing",
      description:
        "Multi-SKU printed rolls separated by artwork version, inner pack, carton copy, pallet marks and repeat-order reference.",
      buyerFit:
        "Approve artwork matrix, SKU labels, obsolete-version handling, carton language, destination marks and the master reference used for reorders.",
      href: "#inquiry",
      linkLabel: "Plan packing and version control",
      image: {
        slot: "home:category-custom-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Custom printed thermal roll packing for distributor and private-label supply",
      },
    },
  ],
  sizes: paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "POS, receipt, kiosk and thermal-printer applications",
    href: `/products/thermal-rolls/${size.slug}`,
  })),
  applications: [
    {
      id: "retail-hospitality",
      title: "Retail, restaurant & hospitality receipts",
      description:
        "Printed receipts where the message must remain readable without reducing the thermal print area or disrupting high-volume feeding.",
      confirm:
        "printer model, width, OD or length, print side, artwork repeat, paper grade, storage and carton pack",
      href: "#inquiry",
      linkLabel: "Review a POS print route",
      image: {
        slot: "products:thermal-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Custom printed thermal receipt roll for retail and hospitality",
      },
    },
    {
      id: "payment-kiosk",
      title: "Payment terminals, kiosks & tickets",
      description:
        "Compact or unattended devices where roll capacity, cut behavior, print placement and code scanning must be qualified together.",
      confirm:
        "terminal or kiosk model, maximum OD, core, winding, cut, print-safe area, code use and storage exposure",
      href: "#inquiry",
      linkLabel: "Review a terminal print route",
      image: {
        slot: "products:thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Custom printed thermal roll for payment terminal and kiosk use",
      },
    },
    {
      id: "campaign-voucher",
      title: "Coupons, vouchers & campaign receipts",
      description:
        "Promotional or campaign artwork that needs a controlled repeat, language version, date or QR destination and a clear approval owner.",
      confirm:
        "campaign code, copy owner, language, repeat, color reference, QR destination, artwork version and obsolete-stock plan",
      href: "#inquiry",
      linkLabel: "Plan a campaign roll",
      image: {
        slot: "products:thermal-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Printed thermal receipt roll for coupon voucher and campaign use",
      },
    },
    {
      id: "distribution",
      title: "Distributor and multi-SKU programs",
      description:
        "Printed stock organized for regional resale, private labels and repeat replenishment across several sizes or artwork versions.",
      confirm:
        "quantity by SKU, artwork matrix, inner pack, carton copy, pallet marks, destination and repeat reference",
      href: "#inquiry",
      linkLabel: "Plan a multi-SKU order",
      image: {
        slot: "home:category-custom-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Multi-SKU custom printed thermal roll distribution program",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Brief the roll and job",
      description: "Record the printer, roll geometry, print side, artwork purpose and downstream workflow.",
      inputs: [
        "Printer or terminal model and application",
        "Width, OD or length, core, winding and paper grade",
        "Print side, live area, repeat and artwork version",
      ],
    },
    {
      step: "02",
      title: "Review print feasibility",
      description: "Resolve the construction and artwork questions that change what can be printed and fed.",
      inputs: [
        "Artwork file, language, colors and print coverage",
        "Thermal image area, contrast, cut and sensor behavior",
        "QR or barcode size, quiet zone and destination",
      ],
    },
    {
      step: "03",
      title: "Approve proof and test",
      description: "Use the appropriate proof or physical sample to confirm the real equipment and use case.",
      inputs: [
        "Proof owner, color reference and revision authority",
        "Printer feeding, cutting, image and storage check",
        "QR or barcode scan test when codes are included",
      ],
    },
    {
      step: "04",
      title: "Freeze repeat controls",
      description: "Turn the approved result into a production and reorder reference instead of relying on memory.",
      inputs: [
        "Approved artwork, roll specification and master sample",
        "Quantity by SKU, inner pack, carton and destination marks",
        "Change notice, obsolete-artwork and lot reference",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "products:thermal-rolls",
      fallback: ROLLS_IMAGE,
      alt: "Custom printed thermal roll proof and production reference review",
    },
    label: "Proof before repeat production",
    title: "Keep artwork, print behavior and packing in one evidence chain",
    description:
      "A supplied artwork file is not proof that the finished roll will feed, print, scan or ship as expected. The useful reference connects the final artwork revision to the roll construction, proof or sample result, packing and destination.",
    checks: [
      {
        title: "Artwork and print area",
        description:
          "Confirm file version, language, print side, repeat, live area, color reference and any variable-data space.",
      },
      {
        title: "Printer and code behavior",
        description:
          "Match width, OD or length, core, winding, feeding, cut, thermal image and QR or barcode scan requirements to the actual device.",
      },
      {
        title: "Paper and document scope",
        description:
          "Keep paper grade, material claims, report scope, issue date and product relationship tied to the exact printed roll.",
      },
      {
        title: "Version and packing control",
        description:
          "Record SKU, artwork revision, inner pack, carton copy, pallet marks, destination and repeat-order reference.",
      },
    ],
    note:
      "MOQ, proof route, sample need, production timing, payment and destination documents are confirmed after the specification, artwork, quantity, packing and evidence scope are reviewed.",
  },
  faq: [
    {
      q: "What information is needed for a custom printed thermal roll quote?",
      a: "Send the printer or terminal model, width, outer diameter or length, core, winding, paper grade, print side, artwork, repeat, quantity by SKU, packing, destination and any QR or barcode requirement. A current roll or drawing helps resolve missing geometry details.",
    },
    {
      q: "Can you print on the reverse side of a thermal paper roll?",
      a: "The feasible print side depends on the paper construction, print method, artwork coverage, thermal image area and downstream printer behavior. Share the artwork and current roll so the printable area and proof route can be reviewed before quotation.",
    },
    {
      q: "Can a branded receipt roll include a QR code or barcode?",
      a: "Yes, when the code size, contrast, quiet zone, destination and scanner or app are defined. The proof or physical sample should include the real code and a documented scan test when the code is important to the workflow.",
    },
    {
      q: "Is a physical sample always required?",
      a: "Not always. A sample is recommended when printer feeding, cutting, print density, color, code scanning, storage or destination-specific risk cannot be confirmed from the artwork and specification alone.",
    },
    {
      q: "How are multiple artwork versions controlled?",
      a: "Use an artwork matrix that links each SKU, language, revision, quantity and packing configuration. Approve one reference for production and define how obsolete artwork, changes and repeat orders are identified.",
    },
    {
      q: "How are MOQ and production timing confirmed?",
      a: "They depend on roll size, paper grade, print coverage, colors, artwork versions, quantity, proof route, packing and destination. Send the quantity by SKU and requested delivery window for an order-specific review.",
    },
  ],
  inquiry: {
    label: "Quote-ready printed-roll brief",
    title: "Send the inputs that change the printed-roll quote",
    description:
      "A structured brief helps identify artwork, roll, testing, packing and repeat-order questions before discussing price or sample timing.",
    checklist: [
      "Printer or terminal model, application and current roll or drawing",
      "Width, OD or length, core, winding, paper grade and print side",
      "Artwork file, languages, colors, repeat, live area and QR or barcode use",
      "Quantity by SKU, proof or sample requirement, packing and destination",
      "Current problem, required delivery window and material-document scope",
    ],
    productName: "Custom Printed Thermal Paper Roll Program",
    initialMessage:
      "Hello, I need a custom printed thermal paper roll quotation. Buyer type / program: Application: Printer or terminal model: Width: Outer diameter or required length: Core: Winding: Paper grade: Print side: Artwork format and revision: Languages and colors: Repeat and live area: QR / barcode use: Quantity by SKU: Proof or sample requirement: Packing: Destination: Document requirement: Current problem or requested delivery window:",
    responseNote:
      "We will identify missing inputs and confirm the appropriate feasibility, proof, sample or quotation route.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
    {
      name: "Custom Printed Thermal Rolls",
      path: "/products/thermal-paper-rolls/custom-printed",
    },
  ],
  relatedPrograms: [
    { label: "All Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
    { label: "Blank Thermal Paper Rolls", href: "/products/thermal-paper-rolls/blank" },
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
    { label: "Custom Printed Thermal Labels", href: "/products/custom-printed-thermal-labels" },
  ],
};
