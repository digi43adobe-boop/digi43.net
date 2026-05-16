type Partner = {
  name: string;
  src: string;
};

const VL = (slug: string) =>
  `https://www.vectorlogo.zone/logos/${slug}/${slug}-ar21.svg`;
const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const partners: Partner[] = [
  { name: "Microsoft", src: VL("microsoft") },
  { name: "Adobe", src: VL("adobe") },
  { name: "Autodesk", src: SI("autodesk/000000") },
  { name: "Amazon Web Services", src: VL("amazon_aws") },
  { name: "Google Cloud", src: VL("google_cloud") },
  { name: "Microsoft Azure", src: VL("microsoft_azure") },
  { name: "Oracle", src: VL("oracle") },
  { name: "VMware", src: SI("vmware/607078") },
  { name: "Kaspersky", src: SI("kaspersky/006D5C") },
  { name: "Atlassian Jira", src: VL("atlassian_jira") },
  { name: "Slack", src: VL("slack") },
  { name: "Zoom", src: SI("zoom/2D8CFF") },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="relative bg-white py-16 border-y border-ink-100"
    >
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
          Đối tác chính hãng được uỷ quyền
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-14 items-center justify-center"
              title={p.name}
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="max-h-9 w-auto max-w-[140px] object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
