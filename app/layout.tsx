import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digi43.net"),
  title: {
    default: "Digi43 — Giải pháp phần mềm bản quyền cho doanh nghiệp",
    template: "%s | Digi43",
  },
  description:
    "Đối tác cung cấp phần mềm bản quyền chính hãng Microsoft, Adobe, Autodesk, Kaspersky, Veeam, AWS... cho doanh nghiệp tại Việt Nam. Tư vấn license, triển khai và hỗ trợ 24/7.",
  keywords: [
    "phần mềm bản quyền",
    "Microsoft 365",
    "Adobe Creative Cloud",
    "Autodesk",
    "Kaspersky",
    "Veeam",
    "license doanh nghiệp",
    "Digi43",
  ],
  openGraph: {
    title: "Digi43 — Giải pháp phần mềm bản quyền cho doanh nghiệp",
    description:
      "Đối tác cung cấp phần mềm bản quyền chính hãng cho doanh nghiệp tại Việt Nam.",
    url: "https://digi43.net",
    siteName: "Digi43",
    locale: "vi_VN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
