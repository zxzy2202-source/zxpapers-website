import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { ethiopiaMarketPage } from "@/config/marketCountryPages";

export const metadata = ethiopiaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function EthiopiaPage() {
  return <MarketCountryPageTemplate data={ethiopiaMarketPage} />;
}
