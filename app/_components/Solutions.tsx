type SolutionsDict = {
  kicker: string;
  title: string;
  subtitle: string;
  groups: {
    category: string;
    title: string;
    description: string;
    features: string[];
  }[];
  cta: string;
};

const VL = (slug: string) =>
  `https://www.vectorlogo.zone/logos/${slug}/${slug}-icon.svg`;
const SI = (slug: string, color = "ffffff") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

// Logo bundles per group, kept here so dictionary stays language-only.
const GROUP_LOGOS: { src: string; alt: string; mono?: boolean }[][] = [
  // Creative
  [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/500px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
      alt: "Adobe Creative Cloud",
    },
  ],
  // Productivity
  [
    { src: VL("microsoft"), alt: "Microsoft" },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/500px-Windows_logo_-_2012.svg.png",
      alt: "Windows",
    },
    { src: VL("atlassian_jira"), alt: "Atlassian Jira" },
  ],
  // Cloud
  [
    { src: VL("amazon_aws"), alt: "AWS" },
    { src: VL("microsoft_azure"), alt: "Azure" },
    { src: VL("google_cloud"), alt: "Google Cloud" },
  ],
];

export function Solutions({ dict }: { dict: SolutionsDict }) {
  return (
    <section
      id="products"
      className="relative bg-code-canvas py-24 lg:py-32 border-t border-subtle-gray"
    >
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
            {dict.kicker}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-ghost-white text-balance leading-[1.2]">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-faded-silver text-balance">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {dict.groups.map((g, i) => {
            const logos = GROUP_LOGOS[i] ?? [];
            const isMulti = logos.length > 1;
            return (
              <article
                key={g.title}
                className="card-floating group relative flex flex-col p-7"
              >
                <div className="flex items-center gap-2">
                  {logos.map((logo) => (
                    <span
                      key={logo.alt}
                      title={logo.alt}
                      className={`inline-flex items-center justify-center rounded-xl border border-subtle-gray bg-white/[0.06] ${
                        isMulti ? "h-10 w-10" : "h-12 w-12"
                      }`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className={`${
                          isMulti ? "max-h-6 max-w-7" : "max-h-7 max-w-8"
                        } object-contain ${logo.mono ? "logo-mono" : ""}`}
                      />
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-text">
                  {g.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-ghost-white">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-faded-silver leading-relaxed">
                  {g.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {g.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-faded-silver"
                    >
                      <svg
                        className="mt-0.5 shrink-0 text-polar-blue"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium link-accent"
                >
                  {dict.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
