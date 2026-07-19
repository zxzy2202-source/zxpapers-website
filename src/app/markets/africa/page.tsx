import MarketRegionPageTemplate from "@/components/shared/MarketRegionPageTemplate";
import { africaRegionPage } from "@/config/marketCountryPages";

export const metadata = africaRegionPage.metadata;
export const revalidate = 86400; // 24 hours: static content

export default function AfricaPage() {
  return <MarketRegionPageTemplate data={africaRegionPage} />;
}
