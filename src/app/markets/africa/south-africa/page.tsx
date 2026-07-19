import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { southAfricaMarketPage } from "@/config/marketCountryPages";

export const metadata = southAfricaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function SouthAfricaPage() {
  return <MarketCountryPageTemplate data={southAfricaMarketPage} />;
}
