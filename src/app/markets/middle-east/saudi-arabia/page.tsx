import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { saudiArabiaMarketPage } from "@/config/marketCountryPages";

export const metadata = saudiArabiaMarketPage.metadata;

export default function SaudiArabiaPage() {
  return <MarketCountryPageTemplate data={saudiArabiaMarketPage} />;
}
