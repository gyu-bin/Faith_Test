import { questions } from "./questions";
import { TYPE_KEYS, type TypeKey } from "./types";

export type ScoreMap = Record<TypeKey, number>;

export function emptyScores(): ScoreMap {
  return Object.fromEntries(TYPE_KEYS.map((k) => [k, 0])) as ScoreMap;
}

/** 답변 배열(각 질문의 보기 인덱스 0–3)으로 유형별 점수 계산 */
export function computeScores(answers: number[]): ScoreMap {
  const scores = emptyScores();
  answers.forEach((optIndex, qIndex) => {
    const q = questions[qIndex];
    if (!q || optIndex < 0 || optIndex > 3) return;
    const key = q.scores[optIndex];
    scores[key] += 1;
  });
  return scores;
}

const TIE_PRIORITY: TypeKey = "worship";

/** 최다 점수 유형 반환. 동점 시 worship 우선 */
export function getResultType(scores: ScoreMap): TypeKey {
  let max = -1;
  let result: TypeKey = TIE_PRIORITY;

  for (const key of TYPE_KEYS) {
    const s = scores[key];
    if (s > max) {
      max = s;
      result = key;
    } else if (s === max && key === TIE_PRIORITY) {
      result = TIE_PRIORITY;
    }
  }
  return result;
}

export function getResultFromAnswers(answers: number[]): {
  type: TypeKey;
  scores: ScoreMap;
} {
  const scores = computeScores(answers);
  return { type: getResultType(scores), scores };
}
