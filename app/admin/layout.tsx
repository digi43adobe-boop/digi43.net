import type { Metadata } from "next";
import Link from "next/link";
import { logoutAction } from "./actions";
import { isAuthenticated } from "../lib/auth";

export const metadata: Metadata = {
  title: "Digi43 Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated();

  return (
    <div className="min-h-screen bg-deep-space text-ghost-white">
      {authed && (
        <header className="border-b border-subtle-gray bg-code-canvas/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link
                href="/admin"
                className="text-sm font-semibold text-ghost-white hover:text-polar-blue transition"
              >
                Digi43 Admin
              </Link>
              <nav className="flex items-center gap-1">
                <Link href="/admin" className="btn-ghost text-sm">
                  Bài viết
                </Link>
                <Link href="/admin/new" className="btn-ghost text-sm">
                  Tạo bài mới
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/vi/blog"
                target="_blank"
                className="text-xs text-faded-silver hover:text-polar-blue transition"
              >
                Xem trang Tin tức ↗
              </Link>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="text-xs text-faded-silver hover:text-polar-blue transition"
                >
                  Đăng xuất
                </button>
              </form>
            </div>
          </div>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
}
