export const STORAGE_KEYS = {
  answers: "faith-test-answers",
  participantCounted: "faith-test-participant-counted",
  participantCount: "faith-test-participant-count",
  paid: (type: string) => `paid_${type}`,
} as const;

export const INITIAL_PARTICIPANT_COUNT = 13_000;

export function getParticipantCount(): number {
  if (typeof window === "undefined") return INITIAL_PARTICIPANT_COUNT;
  const stored = localStorage.getItem(STORAGE_KEYS.participantCount);
  if (stored) return parseInt(stored, 10) || INITIAL_PARTICIPANT_COUNT;
  return INITIAL_PARTICIPANT_COUNT;
}

export function incrementParticipantCount(): number {
  const next = getParticipantCount() + 1;
  localStorage.setItem(STORAGE_KEYS.participantCount, String(next));
  return next;
}

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
