"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isAuthenticated, loginWithPassword, logout } from "../lib/auth";
import { deletePost, getPostBySlug, upsertPost } from "../lib/posts";
import type { Block, LocalisedPost, Post } from "../lib/types";

async function requireAuth(): Promise<void> {
  if (!(await isAuthenticated())) {
    throw new Error("Unauthorized");
  }
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function parseBlocks(raw: string): Block[] {
  const lines = raw.split(/\r?\n/);
  const blocks: Block[] = [];
  let listBuffer: string[] | null = null;

  const flushList = () => {
    if (listBuffer && listBuffer.length > 0) {
      blocks.push({ type: "ul", items: listBuffer });
    }
    listBuffer = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", text: line.slice(3).trim() });
    } else if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", text: line.slice(4).trim() });
    } else if (line.startsWith("> ")) {
      flushList();
      blocks.push({ type: "callout", text: line.slice(2).trim() });
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!listBuffer) listBuffer = [];
      listBuffer.push(line.slice(2).trim());
    } else {
      flushList();
      blocks.push({ type: "p", text: line });
    }
  }
  flushList();
  return blocks;
}

export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get("password") ?? "");
  const ok = await loginWithPassword(password);
  if (!ok) {
    redirect("/admin/login?error=1");
  }
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await logout();
  redirect("/admin/login");
}

export async function savePostAction(formData: FormData): Promise<void> {
  await requireAuth();

  const originalSlug = String(formData.get("originalSlug") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const titleVi = String(formData.get("title_vi") ?? "").trim();
  const titleEn = String(formData.get("title_en") ?? "").trim();
  const excerptVi = String(formData.get("excerpt_vi") ?? "").trim();
  const excerptEn = String(formData.get("excerpt_en") ?? "").trim();
  const categoryVi = String(formData.get("category_vi") ?? "").trim();
  const categoryEn = String(formData.get("category_en") ?? "").trim();
  const bodyVi = String(formData.get("body_vi") ?? "").trim();
  const bodyEn = String(formData.get("body_en") ?? "").trim();
  const thumbnailUrl = String(formData.get("thumbnailUrl") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const readingMinutes = Number(formData.get("readingMinutes") ?? 5);
  const author = String(formData.get("author") ?? "Digi43 Editorial").trim();
  const published = String(formData.get("published") ?? "") === "on";

  if (!titleVi) throw new Error("Thiếu tiêu đề tiếng Việt");
  if (!titleEn) throw new Error("Missing English title");
  if (!thumbnailUrl) throw new Error("Thiếu thumbnail");

  const slug = slugify(slugInput || titleVi);
  if (!slug) throw new Error("Slug không hợp lệ");

  if (slug !== originalSlug) {
    const collision = await getPostBySlug(slug);
    if (collision) throw new Error(`Slug đã tồn tại: ${slug}`);
  }

  const dateIso = date ? new Date(date).toISOString() : new Date().toISOString();

  const vi: LocalisedPost = {
    title: titleVi,
    excerpt: excerptVi,
    category: categoryVi || "Insights",
    blocks: parseBlocks(bodyVi),
  };
  const en: LocalisedPost = {
    title: titleEn,
    excerpt: excerptEn,
    category: categoryEn || vi.category,
    blocks: parseBlocks(bodyEn),
  };

  const post: Post = {
    slug,
    date: dateIso,
    readingMinutes: Number.isFinite(readingMinutes) ? readingMinutes : 5,
    author: author || "Digi43 Editorial",
    thumbnailUrl,
    published,
    content: { vi, en },
  };

  if (originalSlug && originalSlug !== slug) {
    await deletePost(originalSlug);
  }
  await upsertPost(post);

  revalidatePath("/vi/blog");
  revalidatePath("/en/blog");
  revalidatePath(`/vi/blog/${slug}`);
  revalidatePath(`/en/blog/${slug}`);
  if (originalSlug && originalSlug !== slug) {
    revalidatePath(`/vi/blog/${originalSlug}`);
    revalidatePath(`/en/blog/${originalSlug}`);
  }
  revalidatePath("/admin");
  revalidatePath("/sitemap.xml");

  redirect("/admin");
}

export async function deletePostAction(formData: FormData): Promise<void> {
  await requireAuth();
  const slug = String(formData.get("slug") ?? "").trim();
  if (!slug) throw new Error("Missing slug");
  await deletePost(slug);
  revalidatePath("/vi/blog");
  revalidatePath("/en/blog");
  revalidatePath(`/vi/blog/${slug}`);
  revalidatePath(`/en/blog/${slug}`);
  revalidatePath("/admin");
  revalidatePath("/sitemap.xml");
  redirect("/admin");
}
