"use client";

import { useCallback } from "react";
import type { FaithType } from "@/lib/types";

type Props = {
  faithType: FaithType;
};

function getBaseUrl(): string {
  const env = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (env) return env.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function ShareResultButton({ faithType }: Props) {
  const share = useCallback(async () => {
    const base = getBaseUrl();
    const pageUrl = `${base}/result/${faithType.key}`;
    const text = `나는 ${faithType.name}! — ${faithType.shortDesc}\n${pageUrl}`;

    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 복사되었어요");
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었어요");
    }
  }, [faithType]);

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex w-full items-center justify-center gap-2 rounded-inner border-2 border-gold bg-cream px-5 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-gold-pale active:scale-[0.98]"
    >
      결과 공유하기
    </button>
  );
}
