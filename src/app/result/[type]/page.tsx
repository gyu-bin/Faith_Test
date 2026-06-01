import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { faithTypes, getFaithType, isValidTypeKey } from "@/lib/faithTypes";
import { ResultClient } from "./ResultClient";
import { KakaoScript } from "@/components/KakaoScript";

type Props = { params: { type: string } };

export async function generateStaticParams() {
  return Object.keys(faithTypes).map((type) => ({ type }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getFaithType(params.type);
  if (!t) {
    return { title: "결과를 찾을 수 없어요" };
  }

  const title = `나는 ${t.name}!`;
  const description = t.shortDesc;
  const path = `/result/${params.type}`;
  const ogImagePath = `${path}/opengraph-image`;

  return {
    title: `${title} — 나는 어떤 신앙인일까?`,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "나는 어떤 신앙인일까?",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${title} — ${description}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
    other: {
      "og:image:width": "1200",
      "og:image:height": "630",
    },
  };
}

export default function ResultPage({ params }: Props) {
  if (!isValidTypeKey(params.type)) {
    notFound();
  }

  const faithType = faithTypes[params.type];

  return (
    <>
      <KakaoScript />
      <Suspense
        fallback={
          <div className="mx-auto flex min-h-dvh max-w-app items-center justify-center text-ink-mute">
            결과 불러오는 중…
          </div>
        }
      >
        <ResultClient faithType={faithType} />
      </Suspense>
    </>
  );
}
