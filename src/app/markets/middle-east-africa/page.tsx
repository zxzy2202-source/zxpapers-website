import { permanentRedirect } from "next/navigation";

/**
 * /markets/middle-east-africa is a legacy combined page that has been
 * split into separate /markets/middle-east and /markets/africa sections.
 * This 308 permanent redirect passes full SEO equity to the canonical URL.
 */
export default function MiddleEastAfricaRedirect() {
  permanentRedirect("/markets/middle-east");
}
