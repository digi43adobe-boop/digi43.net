import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "../lib/auth";
import { getAllPosts } from "../lib/posts";
import { DeleteButton } from "./_components/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminIndex() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const posts = await getAllPosts({ includeDrafts: true });

  const dateFmt = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ghost-white">Bài viết</h1>
          <p className="mt-1 text-sm text-faded-silver">
            {posts.length} bài · sắp xếp theo ngày đăng mới nhất
          </p>
        </div>
        <Link href="/admin/new" className="btn-primary">
          + Bài viết mới
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-subtle-gray p-12 text-center">
          <p className="text-faded-silver">Chưa có bài viết nào.</p>
          <Link href="/admin/new" className="btn-primary mt-6 inline-flex">
            Tạo bài đầu tiên
          </Link>
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="flex items-center gap-4 rounded-xl border border-subtle-gray bg-code-canvas/40 p-4"
            >
              <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-deep-space">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnailUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="pill !text-polar-blue text-[10px]">
                    {post.content.vi.category}
                  </span>
                  {!post.published && (
                    <span className="rounded-full bg-yellow-500/15 px-2 py-0.5 text-[10px] font-medium text-yellow-300">
                      Bản nháp
                    </span>
                  )}
                  <span className="text-xs text-muted-text">
                    {dateFmt.format(new Date(post.date))}
                  </span>
                </div>
                <h2 className="mt-1 truncate text-base font-semibold text-ghost-white">
                  {post.content.vi.title}
                </h2>
                <p className="mt-0.5 truncate text-xs text-muted-text font-mono">
                  /{post.slug}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/vi/blog/${post.slug}`}
                  target="_blank"
                  className="btn-ghost text-xs"
                >
                  Xem
                </Link>
                <Link
                  href={`/admin/edit/${post.slug}`}
                  className="btn-ghost text-xs"
                >
                  Sửa
                </Link>
                <DeleteButton slug={post.slug} title={post.content.vi.title} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
