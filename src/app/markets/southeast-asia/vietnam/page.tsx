import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { vietnamMarketPage } from "@/config/marketCountryPages";

export const metadata = vietnamMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function VietnamPage() {
  return <MarketCountryPageTemplate data={vietnamMarketPage} />;
}
