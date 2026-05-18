import { redirect } from "next/navigation";
import { loginAction } from "../actions";
import { isAuthenticated } from "../../lib/auth";

export const dynamic = "force-dynamic";

export default async function LoginPage(props: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAuthenticated()) redirect("/admin");
  const { error } = await props.searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-ghost-white text-center">
          Digi43 Admin
        </h1>
        <p className="mt-2 text-sm text-faded-silver text-center">
          Đăng nhập để quản lý bài viết
        </p>
        <form action={loginAction} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="text-xs font-semibold uppercase tracking-wider text-faded-silver"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              autoComplete="current-password"
              className="mt-2 w-full rounded-lg border border-subtle-gray bg-code-canvas px-4 py-3 text-sm text-ghost-white focus:border-polar-blue focus:outline-none"
            />
          </div>
          {error && (
            <p className="text-sm text-red-400">Mật khẩu không đúng.</p>
          )}
          <button type="submit" className="btn-primary w-full justify-center">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
