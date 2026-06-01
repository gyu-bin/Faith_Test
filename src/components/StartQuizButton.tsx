"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/PrimaryButton";
import { clearQuizProgress } from "@/lib/storage";

type Props = {
  className?: string;
  children: ReactNode;
};

/** 홈에서 새 테스트 시작 — 이전 localStorage 답안 제거 */
export function StartQuizButton({ className, children }: Props) {
  const router = useRouter();

  const handleStart = () => {
    clearQuizProgress();
    router.push("/quiz");
  };

  return (
    <PrimaryButton type="button" onClick={handleStart} className={className}>
      {children}
    </PrimaryButton>
  );
}
