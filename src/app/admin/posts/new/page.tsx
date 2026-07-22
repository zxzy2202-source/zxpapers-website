import PostEditor from "@/components/admin/PostEditor";
import { FilePlus2 } from "lucide-react";

export default function NewPostPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
        <FilePlus2 className="h-6 w-6 text-blue-700" aria-hidden="true" /> 写新文章
      </h1>
      <PostEditor />
    </div>
  );
}
