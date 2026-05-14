// Shared data for all thermal roll size pages
import type { ApplicationItem } from "@/components/products/SizeDetailPage";

export const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

export const APP_IMAGES = {
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
  kiosk:        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
};

export const apps80x80: ApplicationItem[] = [
  { name: "POS Systems",       image: APP_IMAGES.pos,        slotKey: "thermal-rolls:applications:pos", description: "Widely used in all major POS receipt printers worldwide." },
  { name: "Restaurant Printers", image: APP_IMAGES.restaurant, slotKey: "thermal-rolls:applications:restaurant", description: "Kitchen and front-of-house receipt printing in restaurants." },
  { name: "Retail Checkout",   image: APP_IMAGES.retail,     slotKey: "thermal-rolls:applications:retail", description: "Standard checkout receipt paper for retail stores." },
  { name: "Supermarkets",      image: APP_IMAGES.supermarket, slotKey: "thermal-rolls:applications:supermarket", description: "High-volume receipt printing for supermarket checkouts." },
  { name: "Hotels",            image: APP_IMAGES.hotel,      slotKey: "thermal-rolls:applications:hotel", description: "Front desk and billing receipt printing in hospitality." },
  { name: "Taxis",             image: APP_IMAGES.taxi,       slotKey: "thermal-rolls:applications:taxi", description: "In-vehicle meter and receipt printing for taxi services." },
  { name: "Parking Systems",   image: APP_IMAGES.parking,    slotKey: "thermal-rolls:applications:parking", description: "Parking ticket and receipt printing at automated kiosks." },
];

export const apps57x50: ApplicationItem[] = [
  { name: "Mobile Printers",     image: APP_IMAGES.mobile,    slotKey: "thermal-rolls:applications:mobile", description: "Compact rolls for portable Bluetooth receipt printers." },
  { name: "Taxi Meters",         image: APP_IMAGES.taxi,      slotKey: "thermal-rolls:applications:taxi", description: "Taxi meter receipt printing for in-vehicle terminals." },
  { name: "Small POS Terminals", image: APP_IMAGES.pos,       slotKey: "thermal-rolls:applications:pos", description: "Compact POS terminals in small retail and food stalls." },
  { name: "Portable Printers",   image: APP_IMAGES.handheld,  slotKey: "thermal-rolls:applications:handheld", description: "Field service and delivery handheld printer rolls." },
  { name: "Lottery Machines",    image: APP_IMAGES.lottery,   slotKey: "thermal-rolls:applications:lottery", description: "Lottery and gaming terminal ticket printing." },
];

export const apps80x70: ApplicationItem[] = [
  { name: "European POS Systems", image: APP_IMAGES.pos,         slotKey: "thermal-rolls:applications:pos", description: "Standard POS receipt size across European retail." },
  { name: "Restaurant Printers",  image: APP_IMAGES.restaurant,  slotKey: "thermal-rolls:applications:restaurant", description: "Table-side and kitchen receipt printing in Europe." },
  { name: "Retail Checkout",      image: APP_IMAGES.retail,      slotKey: "thermal-rolls:applications:retail", description: "Checkout receipt printing for European retail chains." },
  { name: "Hospitality",          image: APP_IMAGES.hospitality, slotKey: "thermal-rolls:applications:hospitality", description: "Hotel and hospitality billing and receipt printing." },
];

export const apps110x80: ApplicationItem[] = [
  { name: "Wide-Format POS",    image: APP_IMAGES.pos,        slotKey: "thermal-rolls:applications:pos", description: "Wide receipt printing for itemized bills and reports." },
  { name: "Restaurant Systems", image: APP_IMAGES.restaurant, slotKey: "thermal-rolls:applications:restaurant", description: "Full-width kitchen and front-of-house receipt printing." },
  { name: "Kiosk Printers",     image: APP_IMAGES.kiosk,      slotKey: "thermal-rolls:applications:kiosk", description: "Self-service kiosk and ticketing machine receipts." },
  { name: "Hospitality",        image: APP_IMAGES.hospitality, slotKey: "thermal-rolls:applications:hospitality", description: "Hotel billing and wide-format receipt printing." },
];

export const apps57x40: ApplicationItem[] = [
  { name: "Handheld Printers",        image: APP_IMAGES.handheld,   slotKey: "thermal-rolls:applications:handheld", description: "Ultra-compact rolls for handheld field printers." },
  { name: "Mobile Payment Terminals", image: APP_IMAGES.mobile,     slotKey: "thermal-rolls:applications:mobile", description: "mPOS and mobile payment device receipt printing." },
  { name: "Portable POS",             image: APP_IMAGES.pos,        slotKey: "thermal-rolls:applications:pos", description: "Compact POS systems for markets and pop-up retail." },
  { name: "Small Receipt Printers",   image: APP_IMAGES.retail,     slotKey: "thermal-rolls:applications:retail", description: "Compact receipt printers in small businesses." },
];

export const apps57x30: ApplicationItem[] = [
  { name: "Credit Card Terminals", image: APP_IMAGES.creditcard, slotKey: "thermal-rolls:applications:credit-card", description: "Small terminal receipt rolls for payment devices." },
  { name: "Mobile Payment Devices", image: APP_IMAGES.mobile,   slotKey: "thermal-rolls:applications:mobile", description: "Square, Clover, and other mobile payment readers." },
  { name: "Small Receipt Printers", image: APP_IMAGES.handheld, slotKey: "thermal-rolls:applications:handheld", description: "Compact receipt printers for small businesses." },
];
