import type {
  ProductDetailConfig,
  ResolvedProductDetailImages,
} from "@/components/products/templates/product-detail-types";
import { getSlotImages } from "@/lib/imageSlotUtils";

export async function resolveProductDetailImages(
  config: ProductDetailConfig,
): Promise<ResolvedProductDetailImages> {
  const relatedImageConfigs = config.relatedProducts.map((item) => item.image);
  const images = await getSlotImages([
    config.images.hero,
    config.images.application,
    config.images.quality,
    config.images.risk,
    config.images.specification,
    config.images.workflow,
    config.images.faq,
    ...relatedImageConfigs,
  ]);

  return {
    hero: images[config.images.hero.slot],
    application: images[config.images.application.slot],
    quality: images[config.images.quality.slot],
    risk: images[config.images.risk.slot],
    specification: images[config.images.specification.slot],
    workflow: images[config.images.workflow.slot],
    faq: images[config.images.faq.slot],
    related: Object.fromEntries(
      config.relatedProducts.map((item) => [item.id, images[item.image.slot]]),
    ),
  };
}
