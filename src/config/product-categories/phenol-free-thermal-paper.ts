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

export const phenolFreeThermalPaperCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/phenol-free-thermal-paper",
  categoryName: "Phenol-Free Thermal Paper",
  alternateNames: [
    "Phenol-Free Thermal Paper Rolls",
    "Phenol-Free Receipt Paper",
    "Phenol-Free POS Paper",
    "Phenol-Free Till Rolls",
    "Non-Phenolic Developer Thermal Paper",
  ],
  audience:
    "Retail chains, hospitality groups, payment-service providers, banks, healthcare and institutional procurement teams, terminal distributors, wholesalers and OEM buyers that require a defined phenol-free claim with grade-matched evidence",
  metadata: {
    title: "Phenol-Free Thermal Paper Manufacturer | Receipt Rolls",
    description:
      "Source phenol-free thermal paper rolls by excluded substances, paper grade, test report, printer, roll geometry, retention need, packing and batch control.",
    keywords: [
      "phenol free thermal paper manufacturer",
      "phenol free thermal paper rolls",
      "phenol free receipt paper",
      "phenol free POS paper",
      "phenol free till rolls",
      "non phenolic developer thermal paper",
      "phenol free thermal paper wholesale",
      "phenol free receipt rolls OEM",
      "BPS free vs phenol free thermal paper",
      "phenol free thermal paper test report",
    ],
  },
  hero: {
    image: {
      slot: "phenol-free-thermal-paper:hero",
      fallback: ROLLS_IMAGE,
      alt: "Phenol-free thermal paper rolls prepared for documented B2B receipt programs",
    },
    badge: "B2B documented-chemistry program",
    titleBefore: "Phenol-Free Thermal Paper for ",
    titleHighlight: "Defined Receipt and OEM Programs",
    description:
      "Phenol-free is a paper-grade claim, not a substitute for an exact restricted-substance list. Confirm the non-phenolic developer scope, excluded substances, report subject, printer, roll geometry, retention need and delivered batch.",
    trustBadges: [
      "Exact excluded-substance review",
      "BPS-free kept as a separate scope",
      "Paper-grade and report identity",
      "Sample, packing and batch control",
    ],
    facts: [
      { value: "7 routes", label: "Material and supply programs" },
      { value: "6 formats", label: "Reference roll sizes" },
      { value: "4 stages", label: "Qualification sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Phenol-Free Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Scope Review", href: "#inquiry" },
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
      label: "Chemistry-scope buying matrix",
      title: "Define the excluded substances before selecting the roll program",
      description:
        "Phenol-free, BPS-free and BPA-free are not interchangeable buying terms. Start with the buyer's exact substance list and evidence rule, then match the paper grade, product format and use conditions.",
    },
    sizes: {
      label: "Reference roll formats",
      title: "Confirm roll geometry independently from the chemistry claim",
      description:
        "A phenol-free declaration does not confirm printer fit. Width, outer diameter or length, core, winding, caliper, sensitivity, grade and packing still require approval for the intended terminal.",
    },
    applications: {
      label: "Buyer and operating routes",
      title: "Match evidence to the real receipt and record workflow",
      description:
        "Retail, hospitality, payment, banking, healthcare and distributor programs have different terminal, handling, retention, documentation, packing and acceptance requirements.",
    },
    selection: {
      label: "Four-stage chemistry qualification",
      title: "Link the claim, paper grade, test evidence and delivered batch",
      description:
        "Define the exact excluded substances and destination first, freeze the roll specification next, review evidence and printer samples, then preserve the approved grade and document references for reorders.",
    },
  },
  families: [
    {
      id: "documented-phenol-free",
      label: "Core material route",
      title: "Documented Phenol-Free Thermal Rolls",
      description:
        "Receipt and POS rolls produced from a named thermal paper grade with a defined non-phenolic developer claim and order-matched evidence where required.",
      buyerFit:
        "Best for buyers who can state the excluded substances, accepted document type, report age or issuer rules, exact roll specification and destination requirement.",
      href: "#inquiry",
      linkLabel: "Define the chemistry scope",
      featured: true,
      image: {
        slot: "phenol-free-thermal-paper:series:documented",
        fallback: QUALITY_IMAGE,
        alt: "Documented phenol-free thermal paper grade and receipt rolls",
      },
    },
    {
      id: "named-bisphenol",
      label: "Named-substance route",
      title: "BPS-Free & Named-Bisphenol Review",
      description:
        "A separate qualification route for buyers that name BPS, BPA or additional bisphenols instead of relying on a broad marketing label.",
      buyerFit:
        "Provide the exact restricted substances, test method or buyer standard and destination. A BPS-free statement alone does not define a full phenol-free scope.",
      href: "#inquiry",
      linkLabel: "Define the substance list",
      image: {
        slot: "phenol-free-thermal-paper:series:named-substance",
        fallback: DOCUMENT_IMAGE,
        alt: "BPS-free and named bisphenol thermal paper evidence review",
      },
    },
    {
      id: "pos-receipt",
      label: "Core receipt route",
      title: "Phenol-Free POS & Cash-Register Rolls",
      description:
        "Receipt rolls for retail, supermarket, restaurant and standard POS workflows using the approved paper grade and complete roll geometry.",
      buyerFit:
        "Confirm printer model, width, maximum roll diameter, core, paper grade, image-retention need, receipts per day and pack quantity by site.",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review receipt-roll programs",
      image: {
        slot: "phenol-free-thermal-paper:series:pos",
        fallback: RETAIL_IMAGE,
        alt: "Phenol-free POS and cash register receipt paper rolls",
      },
    },
    {
      id: "mobile-terminal",
      label: "Compact device route",
      title: "Phenol-Free Mobile POS & Terminal Rolls",
      description:
        "Smaller-diameter receipt rolls for handheld payment, delivery, taxi and portable terminal workflows.",
      buyerFit:
        "Compact devices are sensitive to outer diameter and core as well as width. Send the exact model or an approved roll sample.",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review compact rolls",
      image: {
        slot: "phenol-free-thermal-paper:series:mobile",
        fallback: MOBILE_IMAGE,
        alt: "Phenol-free mobile POS and compact terminal receipt rolls",
      },
    },
    {
      id: "custom-printed",
      label: "Brand and information route",
      title: "Custom Printed Phenol-Free Receipt Rolls",
      description:
        "Buyer-approved logos, terms, promotions, QR codes or back printing applied to a specified paper grade after the chemistry scope is approved.",
      buyerFit:
        "Confirm the grade and evidence first, then print side, repeat, colors, artwork, live thermal area, printer, quantity by version and packing.",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review custom printing",
      image: {
        slot: "phenol-free-thermal-paper:series:custom",
        fallback: ROLLS_IMAGE,
        alt: "Custom printed phenol-free thermal receipt paper rolls",
      },
    },
    {
      id: "retention-specific",
      label: "Record-life route",
      title: "Retention-Specific Phenol-Free Grades",
      description:
        "Thermal grades reviewed for an intended record period, printer sensitivity, storage and exposure conditions instead of a generic image-life promise.",
      buyerFit:
        "State the required readable period, storage temperature and humidity, light, heat, plasticizer, oil, sanitizer or handling exposure and acceptance method.",
      href: "#inquiry",
      linkLabel: "Define the record-life need",
      image: {
        slot: "phenol-free-thermal-paper:series:retention",
        fallback: BANKING_IMAGE,
        alt: "Phenol-free thermal paper grade reviewed for record retention",
      },
    },
    {
      id: "oem-private-label",
      label: "Distributor supply route",
      title: "OEM, Private-Label & Wholesale Phenol-Free Rolls",
      description:
        "Multi-size roll, inner-pack, carton and pallet programs using a controlled paper grade, claim wording and reorder reference.",
      buyerFit:
        "Confirm size mix, quantity by SKU, grade and evidence scope, rolls per pack and carton, barcode, artwork, pallet and destination.",
      href: "/oem",
      linkLabel: "Review an OEM program",
      image: {
        slot: "phenol-free-thermal-paper:series:oem",
        fallback: OEM_IMAGE,
        alt: "OEM and private label phenol-free thermal paper rolls for wholesale",
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
        "High-frequency receipt printing across stores and terminals with centralized grade declarations and replenishment.",
      confirm:
        "excluded-substance scope, printer models, roll size by terminal, receipts per day, paper grade, accepted report, pack quantity and site allocation",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review retail rolls",
      image: {
        slot: "phenol-free-thermal-paper:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail checkout fleet using phenol-free thermal receipt rolls",
      },
    },
    {
      id: "hospitality",
      title: "Restaurants, hotels and food-service operations",
      description:
        "Customer receipts and order records handled around heat, grease, wet hands and frequent paper changes.",
      confirm:
        "buyer chemistry scope, printer by station, roll geometry, heat and grease exposure, handling, record period, food-contact scope if any and carton split",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review hospitality rolls",
      image: {
        slot: "phenol-free-thermal-paper:applications:hospitality",
        fallback: HOSPITALITY_IMAGE,
        alt: "Hospitality and food-service phenol-free receipt paper application",
      },
    },
    {
      id: "payment-mobile",
      title: "Payment terminals, mobile POS and field fleets",
      description:
        "Compact rolls for distributed terminal fleets where device fit, field storage and operator pack allocation matter.",
      confirm:
        "terminal model, width, maximum OD, core, paper grade, chemistry document, storage, daily usage, packs per operator and destination",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review terminal rolls",
      image: {
        slot: "phenol-free-thermal-paper:applications:payment",
        fallback: MOBILE_IMAGE,
        alt: "Payment terminal and mobile POS phenol-free receipt paper rolls",
      },
    },
    {
      id: "banking",
      title: "Banking, ATM and financial records",
      description:
        "Terminal records reviewed for device fit, readable output, storage, retention and documented material scope.",
      confirm:
        "terminal model, paper dimensions, sensitivity, retention and storage conditions, excluded substances, report subject and branch allocation",
      href: "#inquiry",
      linkLabel: "Review a financial record",
      image: {
        slot: "phenol-free-thermal-paper:applications:banking",
        fallback: BANKING_IMAGE,
        alt: "Banking and ATM phenol-free thermal paper application",
      },
    },
    {
      id: "healthcare-institutional",
      title: "Healthcare and institutional procurement",
      description:
        "Specification-sensitive receipt and record programs where procurement may require named substances, document issuers or retention scopes.",
      confirm:
        "exact use, contact route, printer, paper grade, excluded substances, document standard, retention, storage, packaging and acceptance method",
      href: "#inquiry",
      linkLabel: "Define an institutional scope",
      image: {
        slot: "phenol-free-thermal-paper:applications:healthcare",
        fallback: HEALTHCARE_IMAGE,
        alt: "Healthcare procurement review for phenol-free thermal paper",
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
        slot: "phenol-free-thermal-paper:applications:distributor",
        fallback: OEM_IMAGE,
        alt: "Wholesale phenol-free thermal paper rolls packed for distributors",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Excluded substances and acceptance scope",
      description: "Define what the buyer, destination or contract actually requires the paper to exclude.",
      inputs: [
        "Phenol-free, BPS-free, BPA-free or a named-substance list",
        "Destination market, buyer standard, tender or internal policy",
        "Accepted declaration, test report, issuer, date and language rules",
        "Required method, threshold, result format and paper-grade identity",
      ],
    },
    {
      step: "02",
      title: "Evidence and exact product identity",
      description: "Match the chemistry document to the grade and finished-roll program.",
      inputs: [
        "Grade name, basis weight, coating and developer-system description",
        "Report subject, tested substances, sample identity, issuer and date",
        "Relationship between the tested paper and converted finished roll",
        "Separate food-contact, sourcing or environmental documents if requested",
      ],
    },
    {
      step: "03",
      title: "Printer and performance sample",
      description: "Qualify the physical roll and record performance independently from the chemistry claim.",
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
        "Paper-grade, report, sample and artwork revision references",
        "Destination, pallet, delivery window and repeat-order ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "phenol-free-thermal-paper:quality",
      fallback: QUALITY_IMAGE,
      alt: "Phenol-free thermal paper grade report sample and batch quality review",
    },
    label: "Claim-to-batch approval",
    title: "Approve the exact excluded substances, not only the product label",
    description:
      "A phenol-free program is ready when the buyer's substance scope is explicit, evidence identifies the supplied grade, the roll performs in the intended printer, claim wording matches the approved scope and the grade and report references remain traceable for repeat orders.",
    checks: [
      {
        title: "Claim vocabulary check",
        description:
          "Separate phenol-free, BPS-free, BPA-free and named-bisphenol requirements. Record the exact excluded substances, method, threshold and acceptance rule.",
      },
      {
        title: "Report and product-identity check",
        description:
          "Match grade name, basis weight, sample description, tested substances, issuer, date and result to the order and requested destination scope.",
      },
      {
        title: "Printer and record check",
        description:
          "Test loading, feeding, print density, cutting, handling and the required record period under representative storage and exposure conditions.",
      },
      {
        title: "Batch and packing check",
        description:
          "Match paper grade, evidence file, artwork, claim wording, roll count, labels, carton marks, pallet and approved reorder reference.",
      },
    ],
    note:
      "Phenol-free does not by itself prove a specific developer chemistry such as vitamin C, every bisphenol excluded, regulatory compliance, food-contact suitability, FSC status, recyclability, non-toxicity, image life or resistance to heat, moisture, oil, plasticizers or sanitizers. Confirm each claim separately for the exact grade and order.",
  },
  faq: [
    {
      q: "What information is needed for a phenol-free thermal paper quotation?",
      a: "Send the exact excluded substances, destination or buyer standard, accepted document type, printer, roll dimensions, paper grade, retention need, quantity by SKU, packing and delivery window.",
    },
    {
      q: "What does phenol-free thermal paper mean?",
      a: "It is a paper-grade claim describing a thermal coating that uses a non-phenolic developer system within the supplier's stated scope. Confirm the grade, excluded substances, document, method and result rather than relying on the label alone.",
    },
    {
      q: "Is BPS-free thermal paper the same as phenol-free paper?",
      a: "No. BPS-free addresses one named substance. A phenol-free claim can describe a broader developer-system scope, but the exact substances and evidence still need to be stated for the order.",
    },
    {
      q: "Does phenol-free automatically mean BPA-free and BPS-free?",
      a: "Do not infer the tested substances or acceptance threshold from shorthand alone. Ask for the exact excluded-substance list and match it to the paper-grade declaration or report.",
    },
    {
      q: "What documents can support a phenol-free claim?",
      a: "Depending on the buyer, support may include a supplier declaration, certificate or third-party test report. Confirm issuer, date, language, product identity, tested substances, method and result format before ordering.",
    },
    {
      q: "Is phenol-free thermal paper automatically suitable for food contact?",
      a: "No. Food-contact suitability is a separate use and evidence scope. State the contact route, destination, buyer standard, exact paper grade and accepted document before making or approving that claim.",
    },
    {
      q: "Can phenol-free thermal paper be custom printed and private labeled?",
      a: "Yes. Confirm the grade and evidence scope first, then approve artwork, print side, colors, repeat, live thermal area, quantity by version, labels, cartons and claim wording.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on roll dimensions, paper grade, evidence needs, custom printing, versions, quantity, packing, pallet and destination. Send the required delivery window and quantity by SKU for order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B chemistry-scope review",
    title: "Send the excluded substances, evidence rules, printer and roll specification",
    description:
      "A complete request lets us identify missing chemistry, document, sample, packing and batch-control inputs before quotation.",
    checklist: [
      "Phenol-free, BPS-free, BPA-free or named-substance scope and buyer requirement",
      "Accepted declaration or report rules, grade identity, method and document language",
      "Printer model, width, roll diameter or length, core, paper and retention requirement",
      "Quantity by SKU, sample, custom print, packing, destination and delivery window",
    ],
    productName: "Phenol-Free Thermal Paper",
    initialMessage:
      "Company and buyer type:\nTarget market or customer requirement:\nRequired claim: phenol-free, BPS-free, BPA-free or named substances:\nExact excluded-substance list and acceptance threshold:\nAccepted declaration or test-report requirement:\nRequired issuer, date, method or language:\nPrinter or terminal model:\nPaper width:\nMaximum roll diameter or required length:\nCore ID, core OD or coreless request:\nPaper basis weight, grade and developer-system requirement:\nImage-retention and storage requirement:\nHeat, light, humidity, oil or handling exposure:\nSeparate food-contact, sourcing or environmental scope:\nBlank or custom printed roll:\nArtwork, colors, repeat or sensor mark:\nQuantity by size, SKU, grade or version:\nSample and printer-test requirement:\nRoll, inner pack, carton and pallet packing:\nPrivate-label and claim wording:\nDestination country / port:\nRequested delivery window:\nCurrent material or supply problem:",
    responseNote:
      "We will review the requested chemistry and product scope, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
    { name: "Phenol-Free Thermal Paper", path: "/products/phenol-free-thermal-paper" },
  ],
  relatedPrograms: [
    { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
    { label: "BPS-Free Thermal Paper", href: "/products/bps-free-thermal-paper" },
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
    { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
  ],
} satisfies ProductCategoryConfig;
