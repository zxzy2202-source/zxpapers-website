import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { labelSizes } from "@/config/navigation";

const LABEL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const PACKAGING_IMAGE =
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=82";
const FOOD_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=82";
const BARCODE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=82";
const PERSONAL_CARE_IMAGE =
  "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=1200&q=82";
const HOUSEHOLD_IMAGE =
  "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200&q=82";
const OEM_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "4x6in": "Large product, carton and handling-information panels",
  "2x1in": "Price, SKU, shelf and compact variable-data labels",
  "3x2in": "Retail product, food and general packaging labels",
  "4x3in": "Larger product-information and square package panels",
  "2x4in": "Narrow packaging, address and routing-information panels",
  "1x1in": "Small-item, component, jewelry and compact identification",
};

export const productLabelsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/product-labels",
  categoryName: "Product & Packaging Labels",
  alternateNames: [
    "Custom Product Labels",
    "Retail Product Labels",
    "Packaging Labels",
    "Price and Shelf Labels",
    "Variable Data Product Labels",
  ],
  audience:
    "Brands, retailers, food processors, OEM and co-packing manufacturers, packaging procurement teams, label distributors and in-house printing operations",
  metadata: {
    title: "Custom Product & Packaging Labels | B2B Manufacturer",
    description:
      "Source product and packaging labels by label job, printer, package surface, environment, artwork, packing and blank or custom printed supply route.",
    keywords: [
      "custom product labels",
      "product label manufacturer",
      "packaging labels supplier",
      "retail price labels",
      "weigh scale labels",
      "variable data labels",
      "custom printed packaging labels",
      "OEM product labels",
      "private label packaging labels",
    ],
  },
  hero: {
    image: {
      slot: "product-labels:hero",
      fallback: LABEL_IMAGE,
      alt: "Custom product and packaging labels prepared for B2B supply",
    },
    badge: "B2B product-label catalog",
    titleBefore: "Custom Product & Packaging Labels for ",
    titleHighlight: "Retail and Manufacturing",
    description:
      "Choose the label by its job, printer or applicator, package surface, environment and required life. We help brands, retailers, OEMs and distributors define a testable specification before quotation and repeat supply.",
    trustBadges: [
      "Blank and custom printed routes",
      "Roll, fanfold and sheet review",
      "Surface and adhesive qualification",
      "OEM artwork and packing control",
    ],
    facts: [
      { value: "7 routes", label: "Distinct product-label programs" },
      { value: "6 formats", label: "Reference dimensions" },
      { value: "4 steps", label: "Specification sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Label Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Specification Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Series", href: "#product-families" },
    { label: "Formats", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection Guide", href: "#selection-guide" },
    { label: "Testing", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Product-label task matrix",
      title: "Choose by label job before choosing material",
      description:
        "A shelf-price label, food-scale label, branded pouch label and long-life component label solve different problems. Start with the job, then qualify the printer, surface, environment and supply format.",
    },
    sizes: {
      label: "Reference label formats",
      title: "Use size as a routing clue, not a complete specification",
      description:
        "These common inch formats help buyers reach the right detail page. Printer fit still depends on the core, roll diameter, gap, winding, face stock, adhesive and actual package.",
    },
    applications: {
      label: "Buyer and packaging routes",
      title: "Match the construction to the workflow and surface",
      description:
        "Retail shelves, food scales, cosmetic packs, household bottles and warehouse components each create different print, adhesion, handling and evidence requirements.",
    },
    selection: {
      label: "Four-step specification",
      title: "Define the label in the order a buyer can approve",
      description:
        "Start with the information job and equipment, then record the package and environment. Material and adhesive selection comes after those inputs are known.",
    },
  },
  families: [
    {
      id: "custom-printed",
      label: "Core brand program",
      title: "Custom Printed Product & Packaging Labels",
      description:
        "Full-color or spot-color labels for approved branding, product information, multilingual copy, barcodes and repeat SKU programs.",
      buyerFit:
        "Best for brands, OEMs and distributors that need artwork revision control, repeat color targets, version separation and private-label packing.",
      href: "/products/custom-printed-thermal-labels",
      linkLabel: "Review custom printed labels",
      featured: true,
      image: {
        slot: "product-labels:series:custom",
        fallback: PACKAGING_IMAGE,
        alt: "Custom printed product and packaging labels for brand programs",
      },
    },
    {
      id: "retail-price",
      label: "Retail operations",
      title: "Price, Shelf & Promotional Labels",
      description:
        "Blank or preprinted labels for price marking, shelf identification, markdowns and retail promotions.",
      buyerFit:
        "Confirm the printer or label gun, shelf or product surface, removal expectation, scan content and change frequency.",
      href: "#inquiry",
      linkLabel: "Review a retail label job",
      image: {
        slot: "product-labels:series:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail price shelf and promotional labels in a store workflow",
      },
    },
    {
      id: "packaging",
      label: "Primary packaging",
      title: "Boxes, Pouches, Jars & Package Labels",
      description:
        "Brand and information labels for cartons, flexible packs, jars, tubs and other product packaging.",
      buyerFit:
        "Confirm the actual package material, panel, curvature, flexing, fill process, storage and required finish before sample approval.",
      href: "#inquiry",
      linkLabel: "Review a package surface",
      image: {
        slot: "product-labels:series:packaging",
        fallback: PACKAGING_IMAGE,
        alt: "Product packaging labels for boxes pouches jars and tubs",
      },
    },
    {
      id: "food-scale",
      label: "Food and variable weight",
      title: "Weigh-Scale & Food Product Labels",
      description:
        "Direct-thermal or custom printed labels for variable weight, price, date, ingredients and traceability workflows.",
      buyerFit:
        "Confirm the exact scale or printer, package surface, food handling, temperature, condensation, grease and required label life.",
      href: "#inquiry",
      linkLabel: "Review a food-scale workflow",
      image: {
        slot: "product-labels:series:food-scale",
        fallback: FOOD_IMAGE,
        alt: "Weigh scale and food product labels for retail packaging",
      },
    },
    {
      id: "barcode-variable",
      label: "Identification and data",
      title: "Barcode & Variable-Data Product Labels",
      description:
        "SKU, UPC, EAN, QR, batch, date and serial labels selected for the real print and scan workflow.",
      buyerFit:
        "Confirm printer model and DPI, code size, quiet zone, print method, scan distance, surface and retention period.",
      href: "/products/barcode-labels",
      linkLabel: "Review barcode labels",
      image: {
        slot: "product-labels:series:barcode",
        fallback: BARCODE_IMAGE,
        alt: "Barcode and variable data product labels for inventory identification",
      },
    },
    {
      id: "blank-inhouse",
      label: "In-house printing",
      title: "Blank Product Labels",
      description:
        "Unprinted roll, fanfold or sheet labels for adding product, price, date, batch or routing data in-house.",
      buyerFit:
        "Confirm the printer, ribbon or direct-thermal route, dimensions, sensing, core, winding and downstream application together.",
      href: "/products/thermal-labels/blank",
      linkLabel: "Review blank label options",
      image: {
        slot: "product-labels:series:blank",
        fallback: LABEL_IMAGE,
        alt: "Blank product labels prepared for in-house variable data printing",
      },
    },
    {
      id: "durable-film",
      label: "Condition-specific route",
      title: "Durable Paper & Film Labels",
      description:
        "Paper or film constructions reviewed for moisture, abrasion, temperature, oil, chemical contact or longer retention.",
      buyerFit:
        "No one material covers every condition. Define the surface, exposure, contact method, duration and acceptance test before approval.",
      href: "#inquiry",
      linkLabel: "Define the exposure condition",
      image: {
        slot: "product-labels:series:durable",
        fallback: QUALITY_IMAGE,
        alt: "Durable paper and film product labels under qualification review",
      },
    },
  ],
  sizes: labelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General product and packaging identification",
    href: `/products/thermal-labels/${size.slug}`,
  })),
  applications: [
    {
      id: "retail",
      title: "Retail pricing and shelf operations",
      description:
        "Price, promotion, shelf-edge and compact product labels for stores, distributors and retail systems.",
      confirm:
        "printer or label gun, label size, shelf or product surface, permanent or removable behavior, barcode and change frequency",
      href: "#inquiry",
      linkLabel: "Review a retail workflow",
      image: {
        slot: "product-labels:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail shelf and price label workflow",
      },
    },
    {
      id: "food",
      title: "Food, deli and weigh-scale packaging",
      description:
        "Variable-data and branded labels for produce, deli, bakery, prepared food and other packaged food workflows.",
      confirm:
        "scale or printer, package material, application temperature, condensation, grease, date and traceability content",
      href: "#inquiry",
      linkLabel: "Review a food label",
      image: {
        slot: "product-labels:applications:food",
        fallback: FOOD_IMAGE,
        alt: "Food and deli packaging using product labels",
      },
    },
    {
      id: "personal-care",
      title: "Cosmetics and personal-care packaging",
      description:
        "Brand, ingredient and product-information labels for cartons, jars, pumps and squeeze containers.",
      confirm:
        "container material, curvature, squeeze, moisture, product contact, finish, artwork versions and service life",
      href: "#inquiry",
      linkLabel: "Review a personal-care pack",
      image: {
        slot: "product-labels:applications:personal-care",
        fallback: PERSONAL_CARE_IMAGE,
        alt: "Cosmetic and personal care packaging with custom product labels",
      },
    },
    {
      id: "household",
      title: "Household and cleaning-product containers",
      description:
        "Condition-specific labels for detergent, cleaner, disinfectant and other household product containers.",
      confirm:
        "HDPE or PET bottle, formula contact, squeeze, wet handling, application method and compatibility test plan",
      href: "/products/detergent-labels",
      linkLabel: "Open household label programs",
      image: {
        slot: "product-labels:applications:household",
        fallback: HOUSEHOLD_IMAGE,
        alt: "Household cleaning product containers with custom labels",
      },
    },
    {
      id: "industrial",
      title: "Components, bins and industrial products",
      description:
        "Product and identification labels for components, assets, bins and industrial packaging.",
      confirm:
        "print method, substrate, abrasion, oil or chemical exposure, temperature, scan requirement and retention period",
      href: "/products/barcode-labels",
      linkLabel: "Review industrial identification",
      image: {
        slot: "product-labels:applications:industrial",
        fallback: BARCODE_IMAGE,
        alt: "Industrial product and component identification labels",
      },
    },
    {
      id: "oem-multi-sku",
      title: "OEM, private-label and multi-SKU programs",
      description:
        "Controlled artwork, roll, carton and reorder identification for buyers managing multiple brands, products or markets.",
      confirm:
        "SKU list, artwork revision, quantity by version, shared construction, roll or sheet packing, carton separation and destination",
      href: "/oem",
      linkLabel: "Review an OEM program",
      image: {
        slot: "product-labels:applications:oem",
        fallback: OEM_IMAGE,
        alt: "OEM and multi SKU product label packing program",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Label job and information",
      description: "Define what the label must communicate and how often the data changes.",
      inputs: [
        "Brand, price, ingredient, warning or identification",
        "Static artwork or variable data",
        "Barcode, QR, date, batch or serial",
        "Required life and removal expectation",
      ],
    },
    {
      step: "02",
      title: "Printer or application",
      description: "Match the physical construction to the equipment and operating method.",
      inputs: [
        "Manual, label gun, printer or automatic applicator",
        "Printer model, DPI and print method",
        "Core, maximum OD, gap and winding",
        "Roll, fanfold or sheet supply",
      ],
    },
    {
      step: "03",
      title: "Package and environment",
      description: "Record the actual surface and conditions that determine adhesion and durability.",
      inputs: [
        "Paper, board, film, plastic, glass or metal",
        "Flat, curved, textured, flexible or squeeze surface",
        "Application and service temperature",
        "Moisture, grease, abrasion or chemical contact",
      ],
    },
    {
      step: "04",
      title: "Construction and supply",
      description: "Freeze the tested material, artwork and packing for production and reorders.",
      inputs: [
        "Face stock, adhesive, finish and die-cut",
        "Artwork revision and quantity by SKU",
        "Proof, sample and acceptance criteria",
        "Roll or sheet packing, destination and delivery window",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "product-labels:quality",
      fallback: QUALITY_IMAGE,
      alt: "Product label production and quality-control review",
    },
    label: "Qualification and repeat control",
    title: "Approve the print, die-cut, application and artwork together",
    description:
      "A product label is reliable when the approved construction is tied to the real equipment, package, environment, artwork and packing. Generic claims about compatibility or durability do not replace a recorded test.",
    checks: [
      {
        title: "Print and scan check",
        description:
          "Review print density, text, barcode or QR size, quiet zone and scan result using the intended printer and workflow.",
      },
      {
        title: "Die-cut and dispensing check",
        description:
          "Confirm dimensions, gap, liner release, matrix removal, winding and dispensing through the intended equipment.",
      },
      {
        title: "Surface and exposure check",
        description:
          "Test adhesion, edge lift, bubbles, removal and appearance on the actual package under representative conditions.",
      },
      {
        title: "Artwork and reorder control",
        description:
          "Record version, color reference, SKU quantity, roll or sheet packing, carton marks and approved replacement rules.",
      },
    ],
    note:
      "BPA-free, phenol-free, food-contact, chemical, forestry and market-compliance statements are separate evidence scopes. Confirm the exact order material, document subject and destination before publishing a claim.",
  },
  faq: [
    {
      q: "What information is needed for a product label quotation?",
      a: "Send the label job, finished size, package material and photos, printer or applicator, application environment, artwork status, quantity by SKU, roll or sheet format, packing and destination. Include barcode, date, batch or regulatory-copy requirements where relevant.",
    },
    {
      q: "What is the difference between product, shipping and barcode labels?",
      a: "Product labels identify or present the item and its packaging. Shipping labels route parcels, while barcode labels emphasize machine-readable identification. One label can perform more than one job, but the specification should follow the actual printer, surface, data and handling workflow.",
    },
    {
      q: "Can product labels be supplied blank or custom printed?",
      a: "Yes. Blank labels support in-house variable-data printing. Custom printed labels can reproduce customer-approved branding, fields and multilingual information. Confirm whether variable data is added before or after the supplied print so the face stock, finish and print method are compatible.",
    },
    {
      q: "How do I choose between roll, fanfold and sheet labels?",
      a: "Choose from the intended printer or applicator, change frequency, handling and packing workflow. Rolls require the correct core, outer diameter and winding; fanfold requires the correct stack and feed path; sheets require the correct printer and layout.",
    },
    {
      q: "Which adhesive should be used for product packaging?",
      a: "Adhesive selection depends on the actual surface, surface energy, curvature, texture, application temperature, service temperature, moisture, grease, dwell and removal requirement. Test the proposed construction on the production package when failure has operational or brand risk.",
    },
    {
      q: "Are product labels automatically food-safe, waterproof or chemical-resistant?",
      a: "No universal claim is appropriate. Food-contact scope, water exposure and chemical resistance depend on the exact material, adhesive, ink or coating, package, contact method and evidence. Define the condition and required document before approval.",
    },
    {
      q: "Can you manage multiple SKUs, languages and artwork versions?",
      a: "Yes. A multi-SKU order should list each product, language, revision and quantity. Shared constructions, roll IDs, carton separation and obsolete-artwork handling should be agreed before production and used again for reorders.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on material, dimensions, print coverage, die-cut, number of artwork versions, quantity, packing and destination. Send the requested delivery window and specification for an order-specific review rather than relying on a general catalog promise.",
    },
  ],
  inquiry: {
    label: "B2B product-label review",
    title: "Send the label job, package and production inputs",
    description:
      "A complete request helps identify printer fit, material, adhesive, artwork, test and packing questions before quotation.",
    checklist: [
      "Label job, product, package material, photos and usable panel dimensions",
      "Printer or applicator, print method, core, roll OD, gap, winding or sheet layout",
      "Environment, exposure, service life, removal and evidence requirements",
      "Artwork versions, quantity by SKU, packing, destination and delivery window",
    ],
    productName: "Product & Packaging Labels",
    initialMessage:
      "Company and buyer type:\nProduct and label job:\nPackage material and photos:\nFinished label size and shape:\nPrinter or applicator model:\nPrint method, core, roll OD, gap and winding:\nRoll, fanfold or sheet format:\nApplication and service environment:\nAdhesion, removal or exposure requirement:\nArtwork, barcode or variable data:\nQuantity by SKU or version:\nProof and sample requirement:\nPacking and private-label requirement:\nDestination country / port:\nRequested delivery window:\nCurrent supply problem:",
    responseNote:
      "We will review the specification, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Product & Packaging Labels", path: "/products/product-labels" },
  ],
  relatedPrograms: [
    { label: "Thermal Labels", href: "/products/thermal-labels" },
    { label: "Barcode Labels", href: "/products/barcode-labels" },
    { label: "Detergent & Household Labels", href: "/products/detergent-labels" },
    { label: "Custom Printed Labels", href: "/products/custom-printed-thermal-labels" },
  ],
} satisfies ProductCategoryConfig;
