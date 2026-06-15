import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { egyptMarketPage } from "@/config/marketCountryPages";

export const metadata = egyptMarketPage.metadata;

export default function EgyptPage() {
  return <MarketCountryPageTemplate data={egyptMarketPage} />;
}
