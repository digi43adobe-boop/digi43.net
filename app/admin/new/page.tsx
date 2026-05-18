import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "../../lib/auth";
import { PostForm } from "../_components/PostForm";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        href="/admin"
        className="text-xs text-faded-silver hover:text-polar-blue transition"
      >
        ← Quay lại danh sách
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-ghost-white">
        Bài viết mới
      </h1>
      <p className="mt-1 text-sm text-faded-silver">
        Soạn bài song ngữ VI/EN, thêm thumbnail rồi nhấn “Tạo bài viết”.
      </p>
      <div className="mt-8">
        <PostForm mode="create" />
      </div>
    </div>
  );
}
