"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/Card";
import { PageTransition } from "@/components/PageTransition";
import { PrimaryButton } from "@/components/PrimaryButton";
import { questions } from "@/lib/questions";
import { getResultFromAnswers } from "@/lib/scoring";
import {
  STORAGE_KEYS,
  getStoredAnswers,
  incrementParticipantCount,
  saveAnswers,
} from "@/lib/storage";

const LETTERS = ["A", "B", "C", "D"];

export default function QuizPage() {
  const router = useRouter();
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(() =>
    Array(total).fill(-1),
  );
  const [hydrated, setHydrated] = useState(false);
  const [advancing, setAdvancing] = useState(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelPendingAdvance = useCallback(() => {
    if (advanceTimer.current) {
      clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }, []);

  const clearAdvanceTimer = useCallback(() => {
    cancelPendingAdvance();
    setAdvancing(false);
  }, [cancelPendingAdvance]);

  useEffect(() => () => clearAdvanceTimer(), [clearAdvanceTimer]);

  useEffect(() => {
    const stored = getStoredAnswers();
    if (stored && stored.length === total) {
      setAnswers(stored);
      const firstUnanswered = stored.findIndex((a) => a < 0);
      setIndex(firstUnanswered >= 0 ? firstUnanswered : total - 1);
    }
    if (!localStorage.getItem(STORAGE_KEYS.participantCounted)) {
      incrementParticipantCount();
      localStorage.setItem(STORAGE_KEYS.participantCounted, "true");
    }
    setHydrated(true);
  }, [total]);

  const selected = answers[index];
  const q = questions[index];
  const progress = ((index + 1) / total) * 100;

  const persist = useCallback(
    (next: number[]) => {
      setAnswers(next);
      saveAnswers(next);
    },
    [],
  );

  const goNext = useCallback(() => {
    if (selected < 0 || advancing) return;
    clearAdvanceTimer();
    if (index < total - 1) {
      setIndex(index + 1);
      return;
    }
    const { type } = getResultFromAnswers(answers);
    router.push(`/loading?type=${type}`);
  }, [selected, advancing, index, total, answers, router, clearAdvanceTimer]);

  const selectOption = (optIndex: number) => {
    if (advancing) return;

    const next = [...answers];
    next[index] = optIndex;
    persist(next);
    cancelPendingAdvance();
    setAdvancing(true);

    advanceTimer.current = setTimeout(() => {
      advanceTimer.current = null;
      if (index < total - 1) {
        setIndex(index + 1);
        setAdvancing(false);
        return;
      }
      const { type } = getResultFromAnswers(next);
      router.push(`/loading?type=${type}`);
    }, 320);
  };

  const goPrev = () => {
    clearAdvanceTimer();
    if (index > 0) setIndex(index - 1);
  };

  if (!hydrated) {
    return (
      <AppShell>
        <div className="flex min-h-[50dvh] items-center justify-center text-ink-mute">
          불러오는 중…
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <PageTransition key={index}>
        <div className="mb-4 text-center">
          <span className="text-sm font-medium text-gold">
            Q{index + 1} / {total}
          </span>
        </div>

        <div className="mb-2 flex justify-center gap-1.5">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i <= index ? "bg-gold" : "bg-gold-light"
              }`}
            />
          ))}
        </div>

        <div className="mb-6 h-1 overflow-hidden rounded-full bg-gold-light">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <Card>
          <h2 className="font-serif text-xl font-semibold leading-snug text-ink">
            {q.text}
          </h2>

          <ul className="mt-5 space-y-2.5">
            {q.opts.map((opt, i) => {
              const isSelected = selected === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => selectOption(i)}
                    disabled={advancing}
                    className={`flex w-full items-start gap-3 rounded-inner border px-3.5 py-3.5 text-left text-[15px] transition-all duration-200 disabled:pointer-events-none ${
                      isSelected
                        ? "border-ink bg-ink text-cream"
                        : "border-gold-light bg-cream hover:border-gold hover:bg-gold-pale text-ink-soft"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        isSelected
                          ? "bg-cream text-ink"
                          : "bg-gold-pale text-gold"
                      }`}
                    >
                      {LETTERS[i]}
                    </span>
                    <span className="pt-0.5 leading-snug">{opt}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Card>

        <div className="mt-6 flex gap-2.5">
          <PrimaryButton
            variant="outline"
            onClick={goPrev}
            disabled={index === 0 || advancing}
            className="flex-1 !w-auto"
          >
            뒤로
          </PrimaryButton>
          <PrimaryButton
            onClick={goNext}
            disabled={selected < 0 || advancing}
            className="flex-[1.15] !w-auto"
          >
            {index < total - 1 ? "다음" : "결과 보기"}
          </PrimaryButton>
        </div>
      </PageTransition>
    </AppShell>
  );
}
