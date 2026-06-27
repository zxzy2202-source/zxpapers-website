import { notFound } from "next/navigation";
import { getPost } from "@/lib/postsStore";
import PostEditor from "@/components/admin/PostEditor";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">✍️ 编辑文章</h1>
      <PostEditor initial={post} />
    </div>
  );
}
