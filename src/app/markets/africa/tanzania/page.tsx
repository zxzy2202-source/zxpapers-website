import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { tanzaniaMarketPage } from "@/config/marketCountryPages";

export const metadata = tanzaniaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function TanzaniaPage() {
  return <MarketCountryPageTemplate data={tanzaniaMarketPage} />;
}
