"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/Card";
import { ShareResultButton } from "@/components/ShareResultButton";
import { PageTransition } from "@/components/PageTransition";
import { PrimaryButton } from "@/components/PrimaryButton";
import { MatchTypeCard } from "@/components/result/MatchTypeCard";
import { ResultHero } from "@/components/result/ResultHero";
import { ShareResultCard } from "@/components/result/ShareResultCard";
import { isPaid, setPaid } from "@/lib/storage";
import type { FaithType } from "@/lib/types";

type Props = {
  faithType: FaithType;
};

function LockedOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-inner">
      <div className="select-none blur-[6px]">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center bg-cream/70">
        <span className="rounded-full border border-gold bg-cream px-3 py-1.5 text-xs font-semibold text-gold">
          🔒 전체 결과에서 열람
        </span>
      </div>
    </div>
  );
}

export function ResultClient({ faithType }: Props) {
  const insightsRef = useRef<HTMLElement>(null);
  const [unlocked, setUnlocked] = useState(false);

  const descParagraphs = faithType.desc.split(/\n\n+/);

  useEffect(() => {
    const paidFromQuery =
      new URLSearchParams(window.location.search).get("paid") === "true";
    if (paidFromQuery || isPaid(faithType.key)) {
      setUnlocked(true);
    }
  }, [faithType.key]);

  const handleUnlock = () => {
    setPaid(faithType.key);
    setUnlocked(true);
    requestAnimationFrame(() => {
      insightsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <AppShell>
      <PageTransition>
        <ResultHero faithType={faithType} />

        <section className="mt-6">
          <h2 className="font-serif text-lg font-semibold text-ink">
            성향 분석
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
            {descParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <Card className="mt-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-pale text-lg">
              ✨
            </span>
            <h2 className="font-serif text-lg font-semibold text-ink">
              나의 신앙 강점
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            {faithType.strength}
          </p>
        </Card>

        <section ref={insightsRef} className="mt-8 scroll-mt-6 space-y-4">
          <h2 className="font-serif text-lg font-semibold text-ink">
            더 깊은 인사이트
          </h2>

          {unlocked ? (
            <>
              <MatchTypeCard faithType={faithType} />

              <Card>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl" aria-hidden>
                    ⚠️
                  </span>
                  <h3 className="text-sm font-semibold text-gold">
                    주의할 신앙 패턴
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {faithType.caution}
                </p>
              </Card>

              <Card>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl" aria-hidden>
                    🌿
                  </span>
                  <h3 className="text-sm font-semibold text-gold">
                    추천 신앙 훈련 3가지
                  </h3>
                </div>
                <ol className="list-decimal space-y-2.5 pl-5 text-[15px] leading-relaxed text-ink-soft">
                  {faithType.training.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              </Card>

              <ShareResultCard faithType={faithType} />
            </>
          ) : (
            <>
              <Card>
                <h3 className="text-sm font-semibold text-gold">궁합 유형</h3>
                <LockedOverlay>
                  <p className="font-serif text-lg text-ink">궁합 유형 공개</p>
                  <p className="mt-2 text-sm text-ink-mute">
                    함께 성장하는 법이 여기에 표시됩니다.
                  </p>
                </LockedOverlay>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold text-gold">
                  주의할 신앙 패턴
                </h3>
                <LockedOverlay>
                  <p className="text-sm text-ink-mute">
                    나에게 맞는 주의 포인트를 확인해 보세요.
                  </p>
                </LockedOverlay>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold text-gold">
                  추천 신앙 훈련 3가지
                </h3>
                <LockedOverlay>
                  <ol className="list-decimal pl-5 text-sm text-ink-mute">
                    <li>훈련 1</li>
                    <li>훈련 2</li>
                    <li>훈련 3</li>
                  </ol>
                </LockedOverlay>
              </Card>

              <div className="overflow-hidden rounded-card border border-dashed border-gold-light bg-cream2/80 py-10 text-center">
                <p className="text-4xl opacity-40" aria-hidden>
                  {faithType.emoji}
                </p>
                <p className="mt-2 text-sm text-ink-mute">
                  결과 카드 이미지 · 궁합 · 훈련 팁
                </p>
              </div>
            </>
          )}
        </section>

        <div className="mt-8 space-y-3">
          {!unlocked && (
            <PrimaryButton onClick={handleUnlock}>전체 결과 보기</PrimaryButton>
          )}
          <ShareResultButton faithType={faithType} />
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-brown-light underline-offset-4 hover:underline"
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.removeItem("faith-test-answers");
              }
            }}
          >
            다시 테스트하기
          </Link>
        </p>
      </PageTransition>
    </AppShell>
  );
}
