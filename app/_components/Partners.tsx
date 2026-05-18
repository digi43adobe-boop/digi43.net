type Partner = { name: string; src: string };
type PartnersDict = { label: string };

const VL = (slug: string) =>
  `https://www.vectorlogo.zone/logos/${slug}/${slug}-ar21.svg`;
const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}/ffffff`;

const partners: Partner[] = [
  { name: "Microsoft", src: VL("microsoft") },
  { name: "Adobe", src: VL("adobe") },
  { name: "Autodesk", src: SI("autodesk") },
  { name: "Amazon Web Services", src: VL("amazon_aws") },
  { name: "Google Cloud", src: VL("google_cloud") },
  { name: "Microsoft Azure", src: VL("microsoft_azure") },
  { name: "Oracle", src: VL("oracle") },
  { name: "VMware", src: SI("vmware") },
  { name: "Kaspersky", src: SI("kaspersky") },
  { name: "Atlassian Jira", src: VL("atlassian_jira") },
  { name: "Slack", src: VL("slack") },
  { name: "Zoom", src: SI("zoom") },
];

export function Partners({ dict }: { dict: PartnersDict }) {
  return (
    <section
      id="partners"
      className="relative bg-deep-space py-20 border-y border-subtle-gray"
    >
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-text">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-subtle-gray" />
            {dict.label}
            <span className="h-px w-8 bg-subtle-gray" />
          </span>
        </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-12 items-center justify-center"
              title={p.name}
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="max-h-9 w-auto max-w-[150px] object-contain logo-mono"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
