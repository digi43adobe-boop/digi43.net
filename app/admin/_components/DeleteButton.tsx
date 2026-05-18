"use client";

import { deletePostAction } from "../actions";

export function DeleteButton({ slug, title }: { slug: string; title: string }) {
  return (
    <form
      action={deletePostAction}
      onSubmit={(e) => {
        if (!confirm(`Xoá bài "${title}"? Hành động này không thể hoàn tác.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        className="rounded-md px-3 py-1.5 text-xs font-medium text-red-300 hover:bg-red-500/10 hover:text-red-200 transition"
      >
        Xoá
      </button>
    </form>
  );
}
