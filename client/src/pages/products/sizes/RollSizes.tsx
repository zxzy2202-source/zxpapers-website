// All Thermal Paper Roll Size Pages
// Exports individual page components for each size
// Applications now include image URLs (Unsplash) for the image-card + lightbox UI

import SizeDetailPage, { type ApplicationItem } from "@/components/products/SizeDetailPage";

const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

// ── Shared application image library (Unsplash) ──────────────────────────
const APP_IMAGES = {
  pos:          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  restaurant:   "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  retail:       "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
  supermarket:  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  hotel:        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  taxi:         "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&q=80",
  parking:      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80",
  mobile:       "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&q=80",
  lottery:      "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=600&q=80",
  atm:          "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
  creditcard:   "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",
  handheld:     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  hospitality:  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  ecommerce:    "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&q=80",
  warehouse:    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
};

// ── 80mm x 80mm ──────────────────────────────────────────────────────────
const apps80x80: ApplicationItem[] = [
  { name: "POS Systems",       image: APP_IMAGES.pos,        description: "Widely used in all major POS receipt printers worldwide." },
  { name: "Restaurant Printers", image: APP_IMAGES.restaurant, description: "Kitchen and front-of-house receipt printing in restaurants." },
  { name: "Retail Checkout",   image: APP_IMAGES.retail,     description: "Standard checkout receipt paper for retail stores." },
  { name: "Supermarkets",      image: APP_IMAGES.supermarket, description: "High-volume receipt printing for supermarket checkouts." },
  { name: "Hotels",            image: APP_IMAGES.hotel,      description: "Front desk and billing receipt printing in hospitality." },
  { name: "Taxis",             image: APP_IMAGES.taxi,       description: "In-vehicle meter and receipt printing for taxi services." },
  { name: "Parking Systems",   image: APP_IMAGES.parking,    description: "Parking ticket and receipt printing at automated kiosks." },
];

export function Size80x80() {
  return (
    <SizeDetailPage
      type="rolls"
      sizeLabel="80mm x 80mm"
      slug="80mm-x-80mm"
      fullTitle="80mm x 80mm Thermal Paper Rolls"
      badge="Most Popular"
      description="The 80mm x 80mm thermal paper roll is the world's most popular POS receipt size. Used in restaurants, retail stores, supermarkets, and hospitality worldwide. Our BPA-free 80x80 rolls deliver sharp, long-lasting prints compatible with all major POS printer brands."
      specs={[
        { label: "Width", value: "80mm (±0.5mm)" },
        { label: "Roll Diameter", value: "80mm" },
        { label: "Paper Length", value: "80m / 60m / 50m" },
        { label: "Core Size", value: "12mm / 25mm" },
        { label: "Paper Weight", value: "55g/m² / 65g/m²" },
        { label: "Image Life", value: "5–7 years" },
        { label: "Coating", value: "BPA-Free / Standard" },
        { label: "MOQ", value: "1,000 rolls" },
        { label: "Lead Time", value: "7–15 days" },
      ]}
      applications={apps80x80}
      markets={["Global", "Asia", "Europe", "Americas"]}
      productImage={ROLLS_IMG}
    />
  );
}

// ── 57mm x 50mm ──────────────────────────────────────────────────────────
const apps57x50: ApplicationItem[] = [
  { name: "Mobile Printers",     image: APP_IMAGES.mobile,    description: "Compact rolls for portable Bluetooth receipt printers." },
  { name: "Taxi Meters",         image: APP_IMAGES.taxi,      description: "Taxi meter receipt printing for in-vehicle terminals." },
  { name: "Small POS Terminals", image: APP_IMAGES.pos,       description: "Compact POS terminals in small retail and food stalls." },
  { name: "Portable Printers",   image: APP_IMAGES.handheld,  description: "Field service and delivery handheld printer rolls." },
  { name: "Lottery Machines",    image: APP_IMAGES.lottery,   description: "Lottery and gaming terminal ticket printing." },
];

export function Size57x50() {
  return (
    <SizeDetailPage
      type="rolls"
      sizeLabel="57mm x 50mm"
      slug="57mm-x-50mm"
      fullTitle="57mm x 50mm Thermal Paper Rolls"
      description="The 57mm x 50mm thermal paper roll is widely used in portable and mobile receipt printers, small POS terminals, and taxi meters. Popular across Asia and emerging markets for its compact size and cost efficiency."
      specs={[
        { label: "Width", value: "57mm (±0.5mm)" },
        { label: "Roll Diameter", value: "50mm" },
        { label: "Paper Length", value: "30m / 25m" },
        { label: "Core Size", value: "12mm" },
        { label: "Paper Weight", value: "48g/m² / 55g/m²" },
        { label: "Image Life", value: "3–5 years" },
        { label: "Coating", value: "BPA-Free / Standard" },
        { label: "MOQ", value: "1,000 rolls" },
        { label: "Lead Time", value: "7–15 days" },
      ]}
      applications={apps57x50}
      markets={["Asia", "Global"]}
      productImage={ROLLS_IMG}
    />
  );
}

// ── 80mm x 70mm ──────────────────────────────────────────────────────────
const apps80x70: ApplicationItem[] = [
  { name: "European POS Systems", image: APP_IMAGES.pos,         description: "Standard POS receipt size across European retail." },
  { name: "Restaurant Printers",  image: APP_IMAGES.restaurant,  description: "Table-side and kitchen receipt printing in Europe." },
  { name: "Retail Checkout",      image: APP_IMAGES.retail,      description: "Checkout receipt printing for European retail chains." },
  { name: "Hospitality",          image: APP_IMAGES.hospitality, description: "Hotel and hospitality billing and receipt printing." },
];

export function Size80x70() {
  return (
    <SizeDetailPage
      type="rolls"
      sizeLabel="80mm x 70mm"
      slug="80mm-x-70mm"
      fullTitle="80mm x 70mm Thermal Paper Rolls"
      description="The 80mm x 70mm thermal paper roll is the European standard size, widely used in retail POS systems and restaurant printers across Europe. Compatible with Epson, Star, and Bixolon printer models."
      specs={[
        { label: "Width", value: "80mm (±0.5mm)" },
        { label: "Roll Diameter", value: "70mm" },
        { label: "Paper Length", value: "60m / 50m" },
        { label: "Core Size", value: "12mm / 25mm" },
        { label: "Paper Weight", value: "55g/m² / 65g/m²" },
        { label: "Image Life", value: "5–7 years" },
        { label: "Coating", value: "BPA-Free / Standard" },
        { label: "MOQ", value: "1,000 rolls" },
        { label: "Lead Time", value: "7–15 days" },
      ]}
      applications={apps80x70}
      markets={["Europe", "Global"]}
      productImage={ROLLS_IMG}
    />
  );
}

// ── 3 1/8" x 230' ────────────────────────────────────────────────────────
const apps3x230: ApplicationItem[] = [
  { name: "Credit Card Terminals", image: APP_IMAGES.creditcard, description: "Verifone and Ingenico payment terminal receipts." },
  { name: "ATM Machines",          image: APP_IMAGES.atm,        description: "ATM transaction receipt printing across US banks." },
  { name: "US POS Systems",        image: APP_IMAGES.pos,        description: "Standard US POS receipt printing in retail." },
  { name: "Verifone Terminals",    image: APP_IMAGES.creditcard, description: "Exact fit for Verifone VX520, VX680, and V400 series." },
  { name: "Ingenico Terminals",    image: APP_IMAGES.retail,     description: "Compatible with Ingenico iCT220, iWL250 and more." },
];

export function Size3x230() {
  return (
    <SizeDetailPage
      type="rolls"
      sizeLabel={`3 1/8" x 230'`}
      slug="3-1-8-x-230"
      fullTitle={`3 1/8" x 230' Thermal Paper Rolls`}
      badge="US Standard"
      description={`The 3 1/8" x 230' thermal paper roll is the standard size for US credit card terminals, POS systems, and ATM machines. Compatible with Verifone, Ingenico, and all major US payment terminal brands.`}
      specs={[
        { label: "Width", value: '3 1/8" (79.4mm)' },
        { label: "Length", value: "230 feet (70m)" },
        { label: "Roll Diameter", value: "~3.5 inches" },
        { label: "Core Size", value: `0.5" (12.7mm)` },
        { label: "Paper Weight", value: "55g/m²" },
        { label: "Image Life", value: "5–7 years" },
        { label: "Coating", value: "BPA-Free / Standard" },
        { label: "MOQ", value: "1,000 rolls" },
        { label: "Lead Time", value: "7–15 days" },
      ]}
      applications={apps3x230}
      markets={["Americas", "Global"]}
      productImage={ROLLS_IMG}
    />
  );
}

// ── 57mm x 40mm ──────────────────────────────────────────────────────────
const apps57x40: ApplicationItem[] = [
  { name: "Handheld Printers",        image: APP_IMAGES.handheld,   description: "Ultra-compact rolls for handheld field printers." },
  { name: "Mobile Payment Terminals", image: APP_IMAGES.mobile,     description: "mPOS and mobile payment device receipt printing." },
  { name: "Portable POS",             image: APP_IMAGES.pos,        description: "Compact POS systems for markets and pop-up retail." },
  { name: "Small Receipt Printers",   image: APP_IMAGES.retail,     description: "Compact receipt printers in small businesses." },
];

export function Size57x40() {
  return (
    <SizeDetailPage
      type="rolls"
      sizeLabel="57mm x 40mm"
      slug="57mm-x-40mm"
      fullTitle="57mm x 40mm Thermal Paper Rolls"
      description="The 57mm x 40mm thermal paper roll is a compact size for small portable printers and handheld devices. Ideal for mobile payment terminals and small receipt printers."
      specs={[
        { label: "Width", value: "57mm (±0.5mm)" },
        { label: "Roll Diameter", value: "40mm" },
        { label: "Paper Length", value: "20m / 15m" },
        { label: "Core Size", value: "12mm" },
        { label: "Paper Weight", value: "48g/m²" },
        { label: "Image Life", value: "3–5 years" },
        { label: "Coating", value: "BPA-Free / Standard" },
        { label: "MOQ", value: "1,000 rolls" },
        { label: "Lead Time", value: "7–15 days" },
      ]}
      applications={apps57x40}
      markets={["Asia", "Global"]}
      productImage={ROLLS_IMG}
    />
  );
}

// ── 2 1/4" x 50' ─────────────────────────────────────────────────────────
const apps2x50: ApplicationItem[] = [
  { name: "Credit Card Terminals", image: APP_IMAGES.creditcard, description: "Small terminal receipt rolls for US payment devices." },
  { name: "Mobile Payment Devices", image: APP_IMAGES.mobile,   description: "Square, Clover, and other mobile payment readers." },
  { name: "Small Receipt Printers", image: APP_IMAGES.handheld, description: "Compact receipt printers for small US businesses." },
];

export function Size2x50() {
  return (
    <SizeDetailPage
      type="rolls"
      sizeLabel={`2 1/4" x 50'`}
      slug="2-1-4-x-50"
      fullTitle={`2 1/4" x 50' Thermal Paper Rolls`}
      description={`The 2 1/4" x 50' thermal paper roll is used in credit card terminals, mobile payment devices, and small receipt printers in the US market. Compatible with most US payment terminal models.`}
      specs={[
        { label: "Width", value: '2 1/4" (57.15mm)' },
        { label: "Length", value: "50 feet (15.2m)" },
        { label: "Roll Diameter", value: "~1.75 inches" },
        { label: "Core Size", value: `0.5" (12.7mm)` },
        { label: "Paper Weight", value: "48g/m²" },
        { label: "Image Life", value: "3–5 years" },
        { label: "Coating", value: "BPA-Free / Standard" },
        { label: "MOQ", value: "1,000 rolls" },
        { label: "Lead Time", value: "7–15 days" },
      ]}
      applications={apps2x50}
      markets={["Americas", "Global"]}
      productImage={ROLLS_IMG}
    />
  );
}
