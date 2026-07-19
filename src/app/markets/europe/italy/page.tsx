import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { italyMarketPage } from "@/config/marketCountryPages";

export const metadata = italyMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function ItalyPage() {
  return <MarketCountryPageTemplate data={italyMarketPage} />;
}
