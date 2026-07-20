import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { paperRollSizes } from "@/config/navigation";

const ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const HOSPITALITY_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=82";
const MOBILE_IMAGE =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=82";
const BANKING_IMAGE =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=82";
const HEALTHCARE_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=82";
const DOCUMENT_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";
const OEM_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "80x80mm": "Retail, supermarket, hospitality and standard POS receipt printers",
  "57x50mm": "Mobile POS, card terminals and compact receipt printers",
  "80x70mm": "Standard-width POS printers with a smaller roll holder",
  "110x80mm": "Wide receipts, kiosks, statements and specialist terminals",
  "57x40mm": "Portable payment, delivery and handheld receipt devices",
  "57x30mm": "Ultra-compact card, taxi and portable receipt printers",
};

export const bpsFreeThermalPaperCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/bps-free-thermal-paper",
  categoryName: "BPS-Free Thermal Paper",
  alternateNames: [
    "BPS-Free Thermal Paper Rolls",
    "BPS-Free Receipt Paper",
    "BPS-Free POS Paper",
    "BPS-Free Till Rolls",
    "Bisphenol S Free Thermal Paper",
  ],
  audience:
    "Retail chains, hospitality groups, payment-service providers, banks, institutional procurement teams, terminal distributors, wholesalers and OEM buyers that name BPS in their material requirement and need grade-matched evidence",
  metadata: {
    title: "BPS-Free Thermal Paper Manufacturer | Receipt Rolls",
    description:
      "Source BPS-free thermal paper rolls by evidence scope, paper grade, printer, roll geometry, retention need, packing and batch control.",
    keywords: [
      "BPS free thermal paper manufacturer",
      "BPS free thermal paper rolls",
      "BPS free receipt paper",
      "BPS free POS paper",
      "BPS free till rolls",
      "bisphenol S free thermal paper",
      "BPS free thermal paper wholesale",
      "BPS free receipt rolls OEM",
      "BPS free vs phenol free thermal paper",
      "BPS free thermal paper test report",
    ],
  },
  hero: {
    image: {
      slot: "bps-free-thermal-paper:hero",
      fallback: ROLLS_IMAGE,
      alt: "BPS-free thermal paper rolls prepared for documented B2B receipt programs",
    },
    badge: "B2B named-substance program",
    titleBefore: "BPS-Free Thermal Paper for ",
    titleHighlight: "Defined Receipt and OEM Supply",
    description:
      "BPS-free is a named-substance claim. Confirm that the declaration or report addresses BPS for the supplied paper grade, then approve the printer, roll geometry, retention need, packing and batch reference separately.",
    trustBadges: [
      "BPS explicitly named in scope",
      "BPA-free kept as a separate claim",
      "Phenol-free kept as a broader route",
      "Sample, packing and batch control",
    ],
    facts: [
      { value: "7 routes", label: "Material and supply programs" },
      { value: "6 formats", label: "Reference roll sizes" },
      { value: "4 stages", label: "Qualification sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse BPS-Free Programs", href: "#product-families" },
    secondaryCta: { label: "Request an Evidence Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Programs", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Qualification Guide", href: "#selection-guide" },
    { label: "Evidence Checks", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Named-substance buying matrix",
      title: "Confirm the BPS scope before selecting the roll program",
      description:
        "BPS-free, BPA-free and phenol-free answer different questions. Start with the buyer's exact substance and evidence requirement, then match the paper grade, product format and operating conditions.",
    },
    sizes: {
      label: "Reference roll formats",
      title: "Confirm roll geometry independently from the BPS claim",
      description:
        "A BPS-free document does not confirm printer fit. Width, outer diameter or length, core, winding, caliper, sensitivity, paper grade and packing still require approval for the intended terminal.",
    },
    applications: {
      label: "Buyer and operating routes",
      title: "Match evidence to the real receipt and record workflow",
      description:
        "Retail, hospitality, payment, banking, institutional and distributor programs have different terminal, handling, retention, documentation, packing and acceptance requirements.",
    },
    selection: {
      label: "Four-stage BPS qualification",
      title: "Link the named substance, paper grade, evidence and delivered batch",
      description:
        "Define the BPS requirement first, freeze the roll specification next, review the document and printer sample, then preserve the approved grade and evidence reference for repeat orders.",
    },
  },
  families: [
    {
      id: "documented-bps-free",
      label: "Core material route",
      title: "Documented BPS-Free Thermal Rolls",
      description:
        "Receipt and POS rolls produced from a named thermal paper grade with a BPS-free statement or test scope matched to the buyer's acceptance rule.",
      buyerFit:
        "Best for buyers who can state the BPS requirement, accepted document type, issuer or date rules, exact roll specification and destination.",
      href: "#inquiry",
      linkLabel: "Define the evidence scope",
      featured: true,
      image: {
        slot: "bps-free-thermal-paper:series:documented",
        fallback: QUALITY_IMAGE,
        alt: "Documented BPS-free thermal paper grade and receipt rolls",
      },
    },
    {
      id: "broader-chemistry",
      label: "Broader chemistry route",
      title: "Phenol-Free & Named-Bisphenol Review",
      description:
        "A separate qualification route for buyers that exclude a broader developer group or list additional bisphenols beyond BPS.",
      buyerFit:
        "Provide every named substance, accepted method or buyer standard and destination. Do not treat a BPS-free statement as a complete phenol-free declaration.",
      href: "/products/phenol-free-thermal-paper",
      linkLabel: "Review phenol-free paper",
      image: {
        slot: "bps-free-thermal-paper:series:broader-chemistry",
        fallback: DOCUMENT_IMAGE,
        alt: "Phenol-free and named-bisphenol thermal paper evidence review",
      },
    },
    {
      id: "pos-receipt",
      label: "Core receipt route",
      title: "BPS-Free POS & Cash-Register Rolls",
      description:
        "Receipt rolls for retail, supermarket, restaurant and standard POS workflows using the approved paper grade and complete roll geometry.",
      buyerFit:
        "Confirm printer model, width, maximum roll diameter, core, grade, readable-period need, receipts per day and pack quantity by site.",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review receipt-roll programs",
      image: {
        slot: "bps-free-thermal-paper:series:pos",
        fallback: RETAIL_IMAGE,
        alt: "BPS-free POS and cash register receipt paper rolls",
      },
    },
    {
      id: "mobile-terminal",
      label: "Compact device route",
      title: "BPS-Free Mobile POS & Terminal Rolls",
      description:
        "Smaller-diameter receipt rolls for handheld payment, delivery, taxi and portable terminal workflows.",
      buyerFit:
        "Compact devices are sensitive to outer diameter and core as well as width. Send the exact model or an approved roll sample.",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review compact rolls",
      image: {
        slot: "bps-free-thermal-paper:series:mobile",
        fallback: MOBILE_IMAGE,
        alt: "BPS-free mobile POS and compact terminal receipt rolls",
      },
    },
    {
      id: "custom-printed",
      label: "Brand and information route",
      title: "Custom Printed BPS-Free Receipt Rolls",
      description:
        "Buyer-approved logos, terms, promotions, QR codes or back printing applied to a specified BPS-free paper grade.",
      buyerFit:
        "Approve the paper and evidence scope first, then print side, repeat, colors, artwork, live thermal area, quantity by version and packing.",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review custom printing",
      image: {
        slot: "bps-free-thermal-paper:series:custom",
        fallback: ROLLS_IMAGE,
        alt: "Custom printed BPS-free thermal receipt paper rolls",
      },
    },
    {
      id: "retention-specific",
      label: "Record-life route",
      title: "Retention-Specific BPS-Free Paper Grades",
      description:
        "Thermal grades reviewed for an intended readable period, printer sensitivity, storage and exposure conditions instead of a generic image-life promise.",
      buyerFit:
        "State the required readable period, storage temperature and humidity, light, heat, plasticizer, oil, sanitizer or handling exposure and acceptance method.",
      href: "#inquiry",
      linkLabel: "Define the record-life need",
      image: {
        slot: "bps-free-thermal-paper:series:retention",
        fallback: BANKING_IMAGE,
        alt: "BPS-free thermal paper grade reviewed for record retention",
      },
    },
    {
      id: "oem-private-label",
      label: "Distributor supply route",
      title: "OEM, Private-Label & Wholesale BPS-Free Rolls",
      description:
        "Multi-size roll, inner-pack, carton and pallet programs using a controlled paper grade, claim wording and reorder reference.",
      buyerFit:
        "Confirm size mix, quantity by SKU, paper grade and evidence scope, rolls per pack and carton, barcode, artwork, pallet and destination.",
      href: "/oem",
      linkLabel: "Review an OEM program",
      image: {
        slot: "bps-free-thermal-paper:series:oem",
        fallback: OEM_IMAGE,
        alt: "OEM and private label BPS-free thermal paper rolls for wholesale",
      },
    },
  ],
  sizes: paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General POS, receipt and terminal printing",
    href: `/products/thermal-rolls/${size.slug}`,
  })),
  applications: [
    {
      id: "retail",
      title: "Retail, supermarket and checkout fleets",
      description:
        "High-frequency receipt printing across stores and terminals with centralized paper-grade evidence and replenishment.",
      confirm:
        "BPS requirement, printer models, roll size by terminal, receipts per day, grade, accepted document, pack quantity, site allocation and reorder point",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review retail rolls",
      image: {
        slot: "bps-free-thermal-paper:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail checkout fleet using BPS-free thermal receipt rolls",
      },
    },
    {
      id: "hospitality",
      title: "Restaurants, hotels and food-service operations",
      description:
        "Customer receipts and order records handled around heat, grease, wet hands and frequent paper changes.",
      confirm:
        "BPS evidence scope, printer by station, roll geometry, heat and grease exposure, handling, record period, separate contact requirement and carton split",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review hospitality rolls",
      image: {
        slot: "bps-free-thermal-paper:applications:hospitality",
        fallback: HOSPITALITY_IMAGE,
        alt: "Hospitality and food-service BPS-free receipt paper application",
      },
    },
    {
      id: "payment-mobile",
      title: "Payment terminals, mobile POS and field fleets",
      description:
        "Compact rolls for distributed terminal fleets where device fit, field storage and operator pack allocation matter.",
      confirm:
        "terminal model, width, maximum OD, core, grade, BPS document, storage, daily usage, packs per operator and destination",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review terminal rolls",
      image: {
        slot: "bps-free-thermal-paper:applications:payment",
        fallback: MOBILE_IMAGE,
        alt: "Payment terminal and mobile POS BPS-free receipt paper rolls",
      },
    },
    {
      id: "banking",
      title: "Banking, ATM and financial records",
      description:
        "Terminal records reviewed for device fit, readable output, storage, retention and documented material scope.",
      confirm:
        "terminal model, paper dimensions, sensitivity, retention and storage, named substances, report subject and branch allocation",
      href: "#inquiry",
      linkLabel: "Review a financial record",
      image: {
        slot: "bps-free-thermal-paper:applications:banking",
        fallback: BANKING_IMAGE,
        alt: "Banking and ATM BPS-free thermal paper application",
      },
    },
    {
      id: "institutional",
      title: "Healthcare and institutional procurement",
      description:
        "Specification-sensitive receipt and record programs where procurement may name substances, document issuers or retention scopes.",
      confirm:
        "exact use, contact route, printer, grade, BPS and other excluded substances, document standard, retention, packaging and acceptance method",
      href: "/products/phenol-free-thermal-paper",
      linkLabel: "Review broader chemistry options",
      image: {
        slot: "bps-free-thermal-paper:applications:institutional",
        fallback: HEALTHCARE_IMAGE,
        alt: "Institutional procurement review for BPS-free thermal paper",
      },
    },
    {
      id: "distributor",
      title: "Wholesale, distributor and private-label supply",
      description:
        "Multi-size programs with controlled grade names, evidence files, inner packs, cartons, barcodes and pallet references.",
      confirm:
        "target markets, size mix, quantity by SKU, exact material claims, evidence scope, pack and carton counts, labels, artwork, pallet and destination",
      href: "/oem",
      linkLabel: "Review wholesale supply",
      image: {
        slot: "bps-free-thermal-paper:applications:distributor",
        fallback: OEM_IMAGE,
        alt: "Wholesale BPS-free thermal paper rolls packed for distributors",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Named substance and acceptance scope",
      description: "Define what the buyer, destination or contract asks the paper to exclude.",
      inputs: [
        "BPS-free requirement and any additional named substances",
        "Destination market, buyer standard, tender or internal policy",
        "Accepted declaration, report, issuer, date and language rules",
        "Required method, threshold, result format and grade identity",
      ],
    },
    {
      step: "02",
      title: "Evidence and exact product identity",
      description: "Match the BPS document to the grade and finished-roll program.",
      inputs: [
        "Grade name, basis weight, coating and product description",
        "Report subject, tested substance, sample identity, issuer and date",
        "Relationship between the documented paper and converted roll",
        "Separate BPA-free, phenol-free, contact or sourcing files if requested",
      ],
    },
    {
      step: "03",
      title: "Printer and performance sample",
      description: "Qualify the physical roll and record performance independently from the BPS claim.",
      inputs: [
        "Printer model, width, OD or length, core, winding and sensitivity",
        "Loading, feeding, print density, cutting and residue checks",
        "Required readable period and storage conditions",
        "Heat, light, humidity, oil, plasticizer, sanitizer and handling exposure",
      ],
    },
    {
      step: "04",
      title: "Packing, claim wording and reorder control",
      description: "Freeze the approved grade and evidence reference with the commercial SKU.",
      inputs: [
        "Roll count, inner wrap, carton, label, barcode and claim wording",
        "Quantity by size, site, artwork, language or grade",
        "Paper-grade, document, sample and artwork revision references",
        "Destination, pallet, delivery window and repeat-order ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "bps-free-thermal-paper:quality",
      fallback: QUALITY_IMAGE,
      alt: "BPS-free thermal paper grade report sample and batch quality review",
    },
    label: "Claim-to-batch approval",
    title: "Approve BPS as the named substance, not only the product label",
    description:
      "A BPS-free program is ready when the accepted document addresses BPS for the supplied grade, the roll performs in the intended printer, packing uses approved wording and the grade and evidence references remain traceable for repeat orders.",
    checks: [
      {
        title: "Named-substance check",
        description:
          "Confirm BPS is explicitly included in the declaration or test scope and record any additional bisphenols, method, threshold or buyer acceptance rule.",
      },
      {
        title: "Report and product-identity check",
        description:
          "Match grade name, basis weight, sample description, tested substance, issuer, date and result to the order and destination requirement.",
      },
      {
        title: "Printer and record check",
        description:
          "Test loading, feeding, print density, cutting, handling and the required readable period under representative storage and exposure conditions.",
      },
      {
        title: "Batch and packing check",
        description:
          "Match paper grade, evidence file, artwork, claim wording, roll count, labels, carton marks, pallet and approved reorder reference.",
      },
    ],
    note:
      "BPS-free does not by itself prove BPA-free, phenol-free, regulatory compliance, food-contact suitability, FSC status, recyclability, non-toxicity, image life or resistance to heat, moisture, oil, plasticizers or sanitizers. Confirm each claim separately for the exact grade and order.",
  },
  faq: [
    {
      q: "What information is needed for a BPS-free thermal paper quotation?",
      a: "Send the BPS and any additional substance requirement, destination or buyer standard, accepted document type, printer, roll dimensions, grade, retention need, quantity by SKU, packing and delivery window.",
    },
    {
      q: "What does BPS-free thermal paper mean?",
      a: "It means the defined paper, coating or tested sample is represented as not containing BPS within the stated declaration or test scope. Check the exact grade, sample identity, method, result and acceptance rule for the order.",
    },
    {
      q: "Is BPS-free thermal paper the same as phenol-free paper?",
      a: "No. BPS-free addresses BPS. A phenol-free requirement may cover a broader developer scope. Request the exact excluded substances and grade-matched evidence instead of treating the terms as interchangeable.",
    },
    {
      q: "Does BPS-free automatically mean BPA-free?",
      a: "No. BPS and BPA are different named substances. If both must be excluded, state both requirements and confirm each one within the accepted document or test scope.",
    },
    {
      q: "What documents can support a BPS-free claim?",
      a: "Depending on the buyer, support may include a supplier declaration, certificate or third-party test report. Confirm the accepted issuer, date, language, product identity, tested substance, method and result format.",
    },
    {
      q: "Does a BPS-free report confirm the finished receipt roll?",
      a: "Check what the document covers and how the paper grade or tested sample relates to the converted roll. The product identity, basis weight, grade and production relationship should satisfy the buyer's acceptance process.",
    },
    {
      q: "Can BPS-free thermal paper be custom printed and private labeled?",
      a: "Yes. Approve the paper grade and evidence scope first, then confirm artwork, print side, colors, repeat, thermal image area, quantity by version, labels, cartons and claim wording.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on roll dimensions, grade, evidence needs, custom printing, versions, quantity, packing, pallet and destination. Send the delivery window and quantity by SKU for order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B BPS-free evidence review",
    title: "Send the BPS scope, document rule, printer and roll specification",
    description:
      "A complete request lets us identify missing evidence, product, sample, packing and batch-control inputs before quotation.",
    checklist: [
      "BPS and any additional named substances, destination and buyer acceptance rule",
      "Accepted declaration or report, grade identity, method, issuer, date and language",
      "Printer model, width, roll diameter or length, core, paper and retention requirement",
      "Quantity by SKU, sample, custom print, packing, destination and delivery window",
    ],
    productName: "BPS-Free Thermal Paper",
    initialMessage:
      "Company and buyer type:\nTarget market or customer requirement:\nRequired claim: BPS-free and any additional named substances:\nAccepted declaration or test-report requirement:\nRequired issuer, date, method, threshold or language:\nPrinter or terminal model:\nPaper width:\nMaximum roll diameter or required length:\nCore ID, core OD or coreless request:\nPaper basis weight and grade:\nImage-retention and storage requirement:\nHeat, light, humidity, oil or handling exposure:\nSeparate BPA-free, phenol-free, contact or sourcing scope:\nBlank or custom printed roll:\nArtwork, colors, repeat or sensor mark:\nQuantity by size, SKU, grade or version:\nSample and printer-test requirement:\nRoll, inner pack, carton and pallet packing:\nPrivate-label and claim wording:\nDestination country / port:\nRequested delivery window:\nCurrent material or supply problem:",
    responseNote:
      "We will review the named-substance and product scope, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
    { name: "BPS-Free Thermal Paper", path: "/products/bps-free-thermal-paper" },
  ],
  relatedPrograms: [
    { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
    { label: "Phenol-Free Thermal Paper", href: "/products/phenol-free-thermal-paper" },
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
    { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
  ],
} satisfies ProductCategoryConfig;
