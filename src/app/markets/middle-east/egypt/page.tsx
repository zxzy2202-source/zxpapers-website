import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { egyptMarketPage } from "@/config/marketCountryPages";

export const metadata = egyptMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function EgyptPage() {
  return <MarketCountryPageTemplate data={egyptMarketPage} />;
}
