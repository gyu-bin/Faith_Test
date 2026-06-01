import type { TypeKey } from "@/lib/types";

export type ResultTheme = {
  gradient: string;
  ring: string;
  blob: string;
  label: string;
};

export const resultThemes: Record<TypeKey, ResultTheme> = {
  worship: {
    gradient: "from-amber-50 via-gold-pale to-cream2",
    ring: "border-amber-200/80",
    blob: "bg-amber-200/40",
    label: "예배 · 찬양",
  },
  word: {
    gradient: "from-stone-100 via-gold-pale to-cream2",
    ring: "border-stone-300/80",
    blob: "bg-stone-200/50",
    label: "말씀 · 배움",
  },
  prayer: {
    gradient: "from-violet-50 via-gold-pale to-cream2",
    ring: "border-violet-200/80",
    blob: "bg-violet-200/35",
    label: "기도 · 중보",
  },
  serve: {
    gradient: "from-emerald-50 via-gold-pale to-cream2",
    ring: "border-emerald-200/80",
    blob: "bg-emerald-200/40",
    label: "섬김 · 돌봄",
  },
  meditation: {
    gradient: "from-lime-50 via-gold-pale to-cream2",
    ring: "border-lime-200/80",
    blob: "bg-lime-200/40",
    label: "묵상 · 성장",
  },
  mission: {
    gradient: "from-rose-50 via-gold-pale to-cream2",
    ring: "border-rose-200/80",
    blob: "bg-rose-200/35",
    label: "전도 · 사명",
  },
};
