import PostEditor from "@/components/admin/PostEditor";

export default function NewPostPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">✍️ 写新文章</h1>
      <PostEditor />
    </div>
  );
}
