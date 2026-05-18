import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAuthenticated } from "../../../lib/auth";
import { getPostBySlug } from "../../../lib/posts";
import { PostForm } from "../../_components/PostForm";

export const dynamic = "force-dynamic";

export default async function EditPostPage(
  props: PageProps<"/admin/edit/[slug]">
) {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        href="/admin"
        className="text-xs text-faded-silver hover:text-polar-blue transition"
      >
        ← Quay lại danh sách
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-ghost-white">Sửa bài viết</h1>
      <p className="mt-1 text-sm text-faded-silver font-mono">/{post.slug}</p>
      <div className="mt-8">
        <PostForm mode="edit" initial={post} />
      </div>
    </div>
  );
}
