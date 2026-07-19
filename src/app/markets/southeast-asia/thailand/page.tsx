import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { thailandMarketPage } from "@/config/marketCountryPages";

export const metadata = thailandMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function ThailandPage() {
  return <MarketCountryPageTemplate data={thailandMarketPage} />;
}
