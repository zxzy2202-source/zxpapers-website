import ArticleEditor from "@/components/admin/ArticleEditor";

export default function NewArticlePage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">New Article</h1>
        <p className="text-gray-500 text-sm mt-1">Create a new article for the Resources section</p>
      </div>
      <ArticleEditor />
    </div>
  );
}
