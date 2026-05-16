const partners = [
  "Microsoft",
  "Adobe",
  "Autodesk",
  "Kaspersky",
  "Veeam",
  "AWS",
  "Google Cloud",
  "VMware",
  "Bitdefender",
  "Acronis",
  "Trend Micro",
  "Zoom",
];

export function Partners() {
  return (
    <section id="partners" className="relative bg-white py-16 border-y border-ink-100">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
          Đối tác chính hãng được uỷ quyền
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-14 items-center justify-center rounded-lg border border-ink-100 bg-ink-50/60 px-3"
            >
              <span className="text-sm md:text-base font-semibold text-ink-600 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
