import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { ghanaMarketPage } from "@/config/marketCountryPages";

export const metadata = ghanaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function GhanaPage() {
  return <MarketCountryPageTemplate data={ghanaMarketPage} />;
}
