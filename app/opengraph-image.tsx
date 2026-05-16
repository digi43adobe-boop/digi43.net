import { ImageResponse } from "next/og";

export const alt =
  "Digi43 — Giải pháp phần mềm bản quyền cho doanh nghiệp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_URL =
  "https://res.cloudinary.com/dz2hugofx/image/upload/e_trim/v1772079170/Digi_43_-_Logo_Official-05_qvwxf5.png";

export default async function OG() {
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
        {/* Violet glow top-left */}
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
        {/* Blue-violet orb bottom-right */}
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
        {/* Pink accent middle-left */}
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

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_URL} alt="Digi43" height={86} />
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Badge */}
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
          Microsoft Solutions Partner · Authorized Reseller
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          <span>Giải pháp phần mềm</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ec4899 0%, #8c93fb 50%, #8dd6ff 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            bản quyền cho doanh nghiệp
          </span>
        </div>

        {/* Bottom row */}
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
            <div
              style={{
                color: "#f0f6fc",
                fontSize: 22,
                fontWeight: 500,
                display: "flex",
              }}
            >
              Microsoft · Adobe · Autodesk · AWS · Kaspersky · Veeam
            </div>
            <div
              style={{
                color: "#9198a1",
                fontSize: 18,
                display: "flex",
              }}
            >
              digi43.net · 0905 711 739 · sales@digi43.net
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
            Nhận tư vấn miễn phí →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
