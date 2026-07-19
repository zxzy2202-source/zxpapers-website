import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { saudiArabiaMarketPage } from "@/config/marketCountryPages";

export const metadata = saudiArabiaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function SaudiArabiaPage() {
  return <MarketCountryPageTemplate data={saudiArabiaMarketPage} />;
}
