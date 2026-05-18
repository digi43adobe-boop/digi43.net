import { ImageResponse } from "next/og";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";

export const alt = "Digi43 — Enterprise Software Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_URL =
  "https://res.cloudinary.com/dz2hugofx/image/upload/e_trim/v1772079170/Digi_43_-_Logo_Official-05_qvwxf5.png";

type CopySet = {
  badge: string;
  headlineLine1: string;
  headlineLine2: string;
  platforms: string;
  cta: string;
};

const copy: Record<Locale, CopySet> = {
  vi: {
    badge: "Enterprise Software Solutions",
    headlineLine1: "Giải pháp phần mềm",
    headlineLine2: "doanh nghiệp",
    platforms: "Adobe · Microsoft · Autodesk · Atlassian · AWS · Azure",
    cta: "Đăng ký tư vấn →",
  },
  en: {
    badge: "Enterprise Software Solutions",
    headlineLine1: "Enterprise software solutions",
    headlineLine2: "for modern teams",
    platforms: "Adobe · Microsoft · Autodesk · Atlassian · AWS · Azure",
    cta: "Request consultation →",
  },
};

export default async function OG(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const safeLocale: Locale = hasLocale(lang) ? lang : "vi";
  const dict = await getDictionary(safeLocale);
  const c = copy[safeLocale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0d1117",
          color: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: 64,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(230, 183, 254, 0.5) 0%, rgba(140, 147, 251, 0.3) 30%, rgba(0,0,0,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -180,
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(141, 214, 255, 0.35) 0%, rgba(31, 111, 235, 0.2) 40%, rgba(0,0,0,0) 75%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 220,
            left: -120,
            width: 380,
            height: 380,
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.28) 0%, rgba(0,0,0,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_URL} alt="Digi43" height={86} />
        </div>

        <div style={{ flex: 1, display: "flex" }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 18px",
            borderRadius: 999,
            border: "1px solid #21262d",
            backgroundColor: "rgba(255,255,255,0.04)",
            color: "#8dd6ff",
            fontSize: 18,
            fontWeight: 500,
            alignSelf: "flex-start",
            marginBottom: 28,
          }}
        >
          {c.badge}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          <span>{c.headlineLine1}</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ec4899 0%, #8c93fb 50%, #8dd6ff 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            {c.headlineLine2}
          </span>
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ color: "#f0f6fc", fontSize: 22, fontWeight: 500, display: "flex" }}>
              {c.platforms}
            </div>
            <div style={{ color: "#9198a1", fontSize: 18, display: "flex" }}>
              digi43.net · {dict.contact.info.hotline === "Enterprise hotline" ? "+84" : ""} {dict.contact.info.hotline === "Enterprise hotline" ? "905 711 739" : "0905 711 739"} · sales@digi43.net
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 24px",
              borderRadius: 8,
              backgroundColor: "#08872b",
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {c.cta}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
