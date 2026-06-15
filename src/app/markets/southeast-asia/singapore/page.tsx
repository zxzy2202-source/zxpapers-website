import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { singaporeMarketPage } from "@/config/marketCountryPages";

export const metadata = singaporeMarketPage.metadata;

export default function SingaporePage() {
  return <MarketCountryPageTemplate data={singaporeMarketPage} />;
}
