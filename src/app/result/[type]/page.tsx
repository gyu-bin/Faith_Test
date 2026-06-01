import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { faithTypes, getFaithType, isValidTypeKey } from "@/lib/faithTypes";
import { ogImageUrlForType } from "@/lib/ogImage";
import { absoluteUrl } from "@/lib/siteUrl";
import { ResultClient } from "./ResultClient";

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
  const ogImage = absoluteUrl(ogImageUrlForType(params.type));

  return {
    title: `${title} — 나는 어떤 신앙인일까?`,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "나는 어떤 신앙인일까?",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: ogImage,
          secureUrl: ogImage,
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
      images: [ogImage],
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

  return <ResultClient faithType={faithType} />;
}
