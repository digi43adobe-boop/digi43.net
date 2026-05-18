"use client";

import { useRef, useState, useTransition } from "react";
import type { Block, Post } from "../../lib/types";
import { savePostAction } from "../actions";

type Props = {
  initial?: Post;
  mode: "create" | "edit";
};

function blocksToText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "p":
          return b.text;
        case "h2":
          return `## ${b.text}`;
        case "h3":
          return `### ${b.text}`;
        case "ul":
          return b.items.map((i) => `- ${i}`).join("\n");
        case "callout":
          return `> ${b.text}`;
        case "image":
          return `![${b.alt ?? ""}](${b.src})`;
      }
    })
    .join("\n\n");
}

export function PostForm({ initial, mode }: Props) {
  const [thumbnailUrl, setThumbnailUrl] = useState(initial?.thumbnailUrl ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [bodyUploadingLang, setBodyUploadingLang] = useState<"vi" | "en" | null>(null);
  const [tab, setTab] = useState<"vi" | "en">("vi");
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);

  const bodyViRef = useRef<HTMLTextAreaElement | null>(null);
  const bodyEnRef = useRef<HTMLTextAreaElement | null>(null);

  const dateValue = initial?.date
    ? new Date(initial.date).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  async function uploadFile(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error ?? "Upload failed");
    return json.url as string;
  }

  async function onUploadThumb(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    try {
      const url = await uploadFile(file);
      setThumbnailUrl(url);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function onInsertBodyImage(
    lang: "vi" | "en",
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBodyUploadingLang(lang);
    setUploadError(null);
    const textarea = lang === "vi" ? bodyViRef.current : bodyEnRef.current;
    try {
      const url = await uploadFile(file);
      if (!textarea) return;
      const markdown = `![](${url})`;
      const start = textarea.selectionStart ?? textarea.value.length;
      const end = textarea.selectionEnd ?? textarea.value.length;
      const before = textarea.value.slice(0, start);
      const after = textarea.value.slice(end);
      // Insert with surrounding blank lines so it parses as its own block.
      const needsLeadingBreak = before && !before.endsWith("\n\n");
      const lead = before.endsWith("\n") ? "\n" : needsLeadingBreak ? "\n\n" : "";
      const tail = after.startsWith("\n") ? "\n" : "\n\n";
      const insertion = `${lead}${markdown}${tail}`;
      textarea.value = before + insertion + after;
      const caretAfter = (before + insertion).length;
      textarea.focus();
      textarea.setSelectionRange(caretAfter, caretAfter);
      // Notify React-controlled rerender (uncontrolled textarea uses defaultValue,
      // so we just trigger a synthetic input event for any listeners).
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : String(err));
    } finally {
      setBodyUploadingLang(null);
      e.target.value = "";
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        await savePostAction(fd);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (msg.includes("NEXT_REDIRECT")) return;
        setFormError(msg);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {initial?.slug && (
        <input type="hidden" name="originalSlug" value={initial.slug} />
      )}

      {/* Thumbnail */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-faded-silver">
          Thumbnail
        </h2>
        <div className="mt-3 flex items-start gap-4">
          <div className="relative h-32 w-56 shrink-0 overflow-hidden rounded-lg border border-subtle-gray bg-code-canvas">
            {thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailUrl}
                alt="Thumbnail preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-xs text-muted-text">
                Chưa có ảnh
              </div>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <input
              type="hidden"
              name="thumbnailUrl"
              value={thumbnailUrl}
              required
            />
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-subtle-gray bg-code-canvas px-3 py-2 text-xs font-medium text-faded-silver hover:border-polar-blue hover:text-ghost-white transition">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="hidden"
                onChange={onUploadThumb}
                disabled={uploading}
              />
              {uploading ? "Đang upload..." : "Chọn ảnh (JPG/PNG/WebP, ≤5MB)"}
            </label>
            <p className="text-xs text-muted-text">Hoặc dán URL ảnh:</p>
            <input
              type="url"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-md border border-subtle-gray bg-code-canvas px-3 py-2 text-xs text-ghost-white focus:border-polar-blue focus:outline-none"
            />
            {uploadError && (
              <p className="text-xs text-red-400">{uploadError}</p>
            )}
          </div>
        </div>
      </section>

      {/* Meta row */}
      <section className="grid gap-4 md:grid-cols-4">
        <Field label="Slug (URL)" hint="để trống = tự sinh từ tiêu đề VI">
          <input
            name="slug"
            defaultValue={initial?.slug ?? ""}
            placeholder="ten-bai-viet"
            className="input-field"
          />
        </Field>
        <Field label="Ngày đăng">
          <input
            name="date"
            type="date"
            defaultValue={dateValue}
            className="input-field"
          />
        </Field>
        <Field label="Số phút đọc">
          <input
            name="readingMinutes"
            type="number"
            min={1}
            max={60}
            defaultValue={initial?.readingMinutes ?? 5}
            className="input-field"
          />
        </Field>
        <Field label="Tác giả">
          <input
            name="author"
            defaultValue={initial?.author ?? "Digi43 Editorial"}
            className="input-field"
          />
        </Field>
      </section>

      {/* Bilingual tabs */}
      <section>
        <div className="flex items-center gap-2 border-b border-subtle-gray">
          <TabButton active={tab === "vi"} onClick={() => setTab("vi")}>
            Tiếng Việt
          </TabButton>
          <TabButton active={tab === "en"} onClick={() => setTab("en")}>
            English
          </TabButton>
        </div>

        <div className={tab === "vi" ? "mt-6 space-y-4" : "hidden"}>
          <Field label="Tiêu đề (VI)" required>
            <input
              name="title_vi"
              defaultValue={initial?.content.vi.title ?? ""}
              required
              className="input-field"
            />
          </Field>
          <Field label="Mô tả ngắn (VI)">
            <textarea
              name="excerpt_vi"
              defaultValue={initial?.content.vi.excerpt ?? ""}
              rows={2}
              className="input-field"
            />
          </Field>
          <Field label="Chuyên mục (VI)">
            <input
              name="category_vi"
              defaultValue={initial?.content.vi.category ?? ""}
              placeholder="Adobe / Microsoft 365 / Compliance..."
              className="input-field"
            />
          </Field>
          <BodyEditor
            label="Nội dung (VI)"
            hint='Mỗi dòng = 1 đoạn. "## " = tiêu đề lớn · "### " = tiêu đề nhỏ · "- " = danh sách · "> " = highlight · "![](url)" = ảnh'
            name="body_vi"
            defaultValue={
              initial?.content.vi.blocks
                ? blocksToText(initial.content.vi.blocks)
                : ""
            }
            textareaRef={bodyViRef}
            uploading={bodyUploadingLang === "vi"}
            onUpload={(e) => onInsertBodyImage("vi", e)}
            insertLabel="Chèn ảnh"
          />
        </div>

        <div className={tab === "en" ? "mt-6 space-y-4" : "hidden"}>
          <Field label="Title (EN)" required>
            <input
              name="title_en"
              defaultValue={initial?.content.en.title ?? ""}
              required
              className="input-field"
            />
          </Field>
          <Field label="Excerpt (EN)">
            <textarea
              name="excerpt_en"
              defaultValue={initial?.content.en.excerpt ?? ""}
              rows={2}
              className="input-field"
            />
          </Field>
          <Field label="Category (EN)">
            <input
              name="category_en"
              defaultValue={initial?.content.en.category ?? ""}
              className="input-field"
            />
          </Field>
          <BodyEditor
            label="Body (EN)"
            hint='One line per paragraph. "## " = h2 · "### " = h3 · "- " = list · "> " = callout · "![](url)" = image'
            name="body_en"
            defaultValue={
              initial?.content.en.blocks
                ? blocksToText(initial.content.en.blocks)
                : ""
            }
            textareaRef={bodyEnRef}
            uploading={bodyUploadingLang === "en"}
            onUpload={(e) => onInsertBodyImage("en", e)}
            insertLabel="Insert image"
          />
        </div>
      </section>

      {/* Published + submit */}
      <section className="flex items-center justify-between gap-4 border-t border-subtle-gray pt-6">
        <label className="flex items-center gap-2 text-sm text-faded-silver">
          <input
            type="checkbox"
            name="published"
            defaultChecked={initial?.published ?? true}
            className="h-4 w-4 accent-polar-blue"
          />
          Hiển thị công khai
        </label>
        <div className="flex items-center gap-3">
          {formError && <p className="text-sm text-red-400">{formError}</p>}
          <button
            type="submit"
            disabled={isPending || uploading || bodyUploadingLang !== null}
            className="btn-primary disabled:opacity-50"
          >
            {isPending
              ? "Đang lưu..."
              : mode === "create"
              ? "Tạo bài viết"
              : "Lưu thay đổi"}
          </button>
        </div>
      </section>
    </form>
  );
}

function BodyEditor({
  label,
  hint,
  name,
  defaultValue,
  textareaRef,
  uploading,
  onUpload,
  insertLabel,
}: {
  label: string;
  hint: string;
  name: string;
  defaultValue: string;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  uploading: boolean;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  insertLabel: string;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-faded-silver">
          {label}
        </span>
        <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-subtle-gray bg-code-canvas px-2.5 py-1.5 text-xs font-medium text-faded-silver hover:border-polar-blue hover:text-ghost-white transition">
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={onUpload}
            disabled={uploading}
          />
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          {uploading ? "Đang tải..." : insertLabel}
        </label>
      </div>
      <div className="mt-2">
        <textarea
          ref={textareaRef}
          name={name}
          defaultValue={defaultValue}
          rows={20}
          className="input-field font-mono !text-sm leading-relaxed"
        />
      </div>
      <p className="mt-1.5 text-xs text-muted-text">{hint}</p>
    </label>
  );
}

function Field({
  label,
  children,
  hint,
  required,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-faded-silver">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </span>
      <div className="mt-2">{children}</div>
      {hint && <p className="mt-1.5 text-xs text-muted-text">{hint}</p>}
    </label>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative -mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "border-polar-blue text-ghost-white"
          : "border-transparent text-faded-silver hover:text-ghost-white"
      }`}
    >
      {children}
    </button>
  );
}
