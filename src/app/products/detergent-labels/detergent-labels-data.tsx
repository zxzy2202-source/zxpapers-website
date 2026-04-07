// Detergent Labels product data — sizes, application images, and application arrays
// Design: Global Trade Authority — consistent with can-labels data structure

import type { ApplicationItem } from "@/components/products/SizeDetailPage";

export const DETERGENT_LABELS_IMG =
  "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80";

// ── Application image pool ────────────────────────────────────────────────
const APP_IMAGES = {
  laundry:      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
  dishwash:     "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80",
  cleaner:      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
  handsoap:     "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=600&q=80",
  industrial:   "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  retail:       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  fabric:       "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80",
  bathroom:     "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  kitchen:      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  hotel:        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
};

// ── Size registry ─────────────────────────────────────────────────────────
export const detergentLabelSizes = [
  { slug: "90x120mm",  label: "90 × 120mm",  badge: "Bottle Front",   markets: "Global" },
  { slug: "80x150mm",  label: "80 × 150mm",  badge: "Tall Bottle",    markets: "Global" },
  { slug: "100x100mm", label: "100 × 100mm", badge: "Square",         markets: "Global" },
  { slug: "70x200mm",  label: "70 × 200mm",  badge: "Wrap-Around",    markets: "Global" },
  { slug: "120x80mm",  label: "120 × 80mm",  badge: "Back Label",     markets: "Global" },
];

// ── Application arrays per size ───────────────────────────────────────────
export const apps90x120: ApplicationItem[] = [
  { name: "Laundry Detergent Bottles",  image: APP_IMAGES.laundry,   description: "Front panel label for standard 500ml–1L laundry detergent bottles." },
  { name: "Dish Soap Bottles",          image: APP_IMAGES.dishwash,  description: "Primary branding label for dish soap and dishwashing liquid." },
  { name: "Hand Soap Dispensers",       image: APP_IMAGES.handsoap,  description: "Front-facing label for pump-style hand soap dispensers." },
  { name: "Fabric Softener",            image: APP_IMAGES.fabric,    description: "Brand label for fabric softener and conditioner bottles." },
  { name: "Retail Shelf Display",       image: APP_IMAGES.retail,    description: "High-impact front label for retail shelf visibility." },
];

export const apps80x150: ApplicationItem[] = [
  { name: "Tall Detergent Bottles",     image: APP_IMAGES.laundry,   description: "Full-height label for 750ml–1.5L tall-format detergent bottles." },
  { name: "Bathroom Cleaners",          image: APP_IMAGES.bathroom,  description: "Tall label for spray-style bathroom and tile cleaners." },
  { name: "Kitchen Cleaners",           image: APP_IMAGES.kitchen,   description: "Vertical label for kitchen degreaser and surface cleaner bottles." },
  { name: "Industrial Cleaners",        image: APP_IMAGES.industrial, description: "Professional-grade cleaning product labeling." },
  { name: "Hotel Amenity Bottles",      image: APP_IMAGES.hotel,     description: "Premium tall labels for hotel and hospitality cleaning supplies." },
];

export const apps100x100: ApplicationItem[] = [
  { name: "Laundry Pods Containers",    image: APP_IMAGES.laundry,   description: "Square label for laundry pod tubs and containers." },
  { name: "Powder Detergent Boxes",     image: APP_IMAGES.laundry,   description: "Front panel label for powder detergent cartons and boxes." },
  { name: "Multi-Surface Cleaners",     image: APP_IMAGES.cleaner,   description: "Square label for all-purpose and multi-surface cleaners." },
  { name: "Dishwasher Tablets",         image: APP_IMAGES.dishwash,  description: "Container label for dishwasher tablet packaging." },
  { name: "Private Label Brands",       image: APP_IMAGES.retail,    description: "Square format for private label and store-brand cleaning products." },
];

export const apps70x200: ApplicationItem[] = [
  { name: "Wrap-Around Bottles",        image: APP_IMAGES.laundry,   description: "Full wrap-around label for cylindrical detergent bottles." },
  { name: "Bleach Bottles",             image: APP_IMAGES.cleaner,   description: "Chemical-resistant wrap label for bleach and disinfectant bottles." },
  { name: "Floor Cleaners",             image: APP_IMAGES.cleaner,   description: "Wrap-around label for floor cleaner and mopping solution bottles." },
  { name: "Fabric Care Products",       image: APP_IMAGES.fabric,    description: "Full-wrap label for stain remover and fabric care bottles." },
  { name: "Industrial Containers",      image: APP_IMAGES.industrial, description: "Wrap label for large-format industrial cleaning containers." },
];

export const apps120x80: ApplicationItem[] = [
  { name: "Back Panel Labels",          image: APP_IMAGES.laundry,   description: "Ingredient list and regulatory information back label." },
  { name: "Safety & Compliance",        image: APP_IMAGES.cleaner,   description: "GHS hazard communication and safety instruction labels." },
  { name: "Bilingual Labels",           image: APP_IMAGES.retail,    description: "Dual-language back labels for export and cross-border markets." },
  { name: "Dosage Instructions",        image: APP_IMAGES.dishwash,  description: "Detailed dosage and usage instruction labels." },
  { name: "QR Code & Traceability",     image: APP_IMAGES.industrial, description: "Back label with QR code for product traceability and authentication." },
];
