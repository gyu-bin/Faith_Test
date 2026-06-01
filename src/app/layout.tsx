import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "나는 어떤 신앙인일까?",
  description:
    "12개의 질문으로 알아보는 나의 신앙 성향 — 교회 청년부·소그룹을 위한 바이럴 테스트",
  openGraph: {
    title: "나는 어떤 신앙인일까?",
    description: "12개의 질문으로 알아보는 나의 신앙 성향",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "나는 어떤 신앙인일까?",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "나는 어떤 신앙인일까?",
    description: "12개의 질문으로 알아보는 나의 신앙 성향",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body
        className={`${notoSerif.variable} antialiased`}
        style={
          {
            "--font-pretendard": "Pretendard, system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
