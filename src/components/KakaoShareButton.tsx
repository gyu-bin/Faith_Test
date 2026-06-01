"use client";

import { useCallback } from "react";
import type { FaithType } from "@/lib/types";

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (opts: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: { mobileWebUrl: string; webUrl: string };
          };
          buttons: {
            title: string;
            link: { mobileWebUrl: string; webUrl: string };
          }[];
        }) => void;
      };
    };
  }
}

type Props = {
  faithType: FaithType;
};

function getBaseUrl(): string {
  const env = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (env) return env.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function KakaoShareButton({ faithType }: Props) {
  const share = useCallback(() => {
    const key = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
    const base = getBaseUrl();
    const pageUrl = `${base}/result/${faithType.key}`;
    const imageUrl = `${base}/api/og?type=${faithType.key}`;

    if (!key || !window.Kakao) {
      if (navigator.share) {
        navigator
          .share({
            title: `나는 ${faithType.name}!`,
            text: faithType.shortDesc,
            url: pageUrl,
          })
          .catch(() => {});
        return;
      }
      navigator.clipboard?.writeText(pageUrl);
      alert("링크가 복사되었어요. 카카오톡에 붙여넣어 공유해 보세요!");
      return;
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(key);
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `나는 ${faithType.name}!`,
        description: faithType.shortDesc,
        imageUrl,
        link: { mobileWebUrl: pageUrl, webUrl: pageUrl },
      },
      buttons: [
        {
          title: "나도 테스트하기",
          link: { mobileWebUrl: base, webUrl: base },
        },
      ],
    });
  }, [faithType]);

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex w-full items-center justify-center gap-2 rounded-inner bg-[#FEE500] px-5 py-3.5 text-[15px] font-semibold text-[#3C1E1E] transition active:scale-[0.98]"
    >
      카카오로 공유하기
    </button>
  );
}
