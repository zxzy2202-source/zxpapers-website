import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { kenyaMarketPage } from "@/config/marketCountryPages";

export const metadata = kenyaMarketPage.metadata;

export default function KenyaPage() {
  return <MarketCountryPageTemplate data={kenyaMarketPage} />;
}
