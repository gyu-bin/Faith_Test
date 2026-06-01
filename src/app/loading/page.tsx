"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { isValidTypeKey } from "@/lib/faithTypes";
import type { TypeKey } from "@/lib/types";

function resolveTypeFromSearch(search: string): TypeKey {
  const raw = new URLSearchParams(search).get("type") ?? "worship";
  return isValidTypeKey(raw) ? raw : "worship";
}

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const valid = resolveTypeFromSearch(window.location.search);
    const timer = setTimeout(() => {
      router.replace(`/result/${valid}`);
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AppShell>
      <div className="flex min-h-[70dvh] flex-col items-center justify-center text-center page-enter">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <span
            className="absolute inset-0 rounded-full border-2 border-gold-light animate-pulse-soft"
            aria-hidden
          />
          <span
            className="absolute inset-2 rounded-full border border-gold/40 animate-pulse-soft"
            style={{ animationDelay: "0.15s" }}
            aria-hidden
          />
          <span className="text-4xl text-gold" aria-hidden>
            ✦
          </span>
        </div>
        <p className="font-serif mt-8 text-xl font-semibold text-ink">
          당신의 신앙 유형을
          <br />
          분석하고 있어요…
        </p>
        <p className="mt-3 text-sm text-ink-mute">잠시만 기다려 주세요</p>
        <div className="mt-8 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-gold animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
