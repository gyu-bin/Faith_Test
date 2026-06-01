import type { TypeKey } from "@/lib/types";

export type ResultTheme = {
  gradient: string;
  ring: string;
  blob: string;
  label: string;
};

export const resultThemes: Record<TypeKey, ResultTheme> = {
  worship: {
    gradient:
      "from-amber-50 via-gold-pale to-cream2 dark:from-amber-950/50 dark:via-gold-pale dark:to-cream2",
    ring: "border-amber-200/80 dark:border-amber-700/50",
    blob: "bg-amber-200/40 dark:bg-amber-600/20",
    label: "예배 · 찬양",
  },
  word: {
    gradient:
      "from-stone-100 via-gold-pale to-cream2 dark:from-stone-900/50 dark:via-gold-pale dark:to-cream2",
    ring: "border-stone-300/80 dark:border-stone-600/50",
    blob: "bg-stone-200/50 dark:bg-stone-600/20",
    label: "말씀 · 배움",
  },
  prayer: {
    gradient:
      "from-violet-50 via-gold-pale to-cream2 dark:from-violet-950/50 dark:via-gold-pale dark:to-cream2",
    ring: "border-violet-200/80 dark:border-violet-700/50",
    blob: "bg-violet-200/35 dark:bg-violet-600/20",
    label: "기도 · 중보",
  },
  serve: {
    gradient:
      "from-emerald-50 via-gold-pale to-cream2 dark:from-emerald-950/50 dark:via-gold-pale dark:to-cream2",
    ring: "border-emerald-200/80 dark:border-emerald-700/50",
    blob: "bg-emerald-200/40 dark:bg-emerald-600/20",
    label: "섬김 · 돌봄",
  },
  meditation: {
    gradient:
      "from-lime-50 via-gold-pale to-cream2 dark:from-lime-950/40 dark:via-gold-pale dark:to-cream2",
    ring: "border-lime-200/80 dark:border-lime-700/40",
    blob: "bg-lime-200/40 dark:bg-lime-600/15",
    label: "묵상 · 성장",
  },
  mission: {
    gradient:
      "from-rose-50 via-gold-pale to-cream2 dark:from-rose-950/50 dark:via-gold-pale dark:to-cream2",
    ring: "border-rose-200/80 dark:border-rose-700/50",
    blob: "bg-rose-200/35 dark:bg-rose-600/20",
    label: "전도 · 사명",
  },
};
