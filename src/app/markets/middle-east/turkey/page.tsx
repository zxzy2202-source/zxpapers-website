import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { turkeyMarketPage } from "@/config/marketCountryPages";

export const metadata = turkeyMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function TurkeyPage() {
  return <MarketCountryPageTemplate data={turkeyMarketPage} />;
}
