import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { thailandMarketPage } from "@/config/marketCountryPages";

export const metadata = thailandMarketPage.metadata;

export default function ThailandPage() {
  return <MarketCountryPageTemplate data={thailandMarketPage} />;
}
