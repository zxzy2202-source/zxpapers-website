import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { tanzaniaMarketPage } from "@/config/marketCountryPages";

export const metadata = tanzaniaMarketPage.metadata;

export default function TanzaniaPage() {
  return <MarketCountryPageTemplate data={tanzaniaMarketPage} />;
}
