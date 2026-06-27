/**
 * 旧路由：/resources/industry-insights/[slug]
 * 已统一迁移到 /blog/[slug]。本页只做 308 永久重定向，保留 SEO 权重和外链有效性。
 */
import { permanentRedirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function LegacyInsightRedirect({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/blog/${slug}`);
}
