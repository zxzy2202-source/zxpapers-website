import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { philippinesMarketPage } from "@/config/marketCountryPages";

export const metadata = philippinesMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function PhilippinesPage() {
  return <MarketCountryPageTemplate data={philippinesMarketPage} />;
}
