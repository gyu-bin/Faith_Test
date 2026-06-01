export const STORAGE_KEYS = {
  answers: "faith-test-answers",
  participantCounted: "faith-test-participant-counted",
  paid: (type: string) => `paid_${type}`,
} as const;

export function isPaid(type: string): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEYS.paid(type)) === "true";
}

export function setPaid(type: string): void {
  localStorage.setItem(STORAGE_KEYS.paid(type), "true");
}

export function getStoredAnswers(): number[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.answers);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as number[];
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveAnswers(answers: number[]): void {
  localStorage.setItem(STORAGE_KEYS.answers, JSON.stringify(answers));
}

/** 퀴즈 진행·답안 초기화 (다시 테스트하기) */
export function clearQuizProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEYS.answers);
}
