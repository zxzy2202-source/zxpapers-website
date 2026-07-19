import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { uaeMarketPage } from "@/config/marketCountryPages";

export const metadata = uaeMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function UAEPage() {
  return <MarketCountryPageTemplate data={uaeMarketPage} />;
}
