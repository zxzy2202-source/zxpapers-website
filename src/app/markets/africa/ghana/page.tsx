import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { ghanaMarketPage } from "@/config/marketCountryPages";

export const metadata = ghanaMarketPage.metadata;

export default function GhanaPage() {
  return <MarketCountryPageTemplate data={ghanaMarketPage} />;
}
