export const TYPE_KEYS = [
  "worship",
  "word",
  "prayer",
  "serve",
  "meditation",
  "mission",
] as const;

export type TypeKey = (typeof TYPE_KEYS)[number];

export type FaithType = {
  key: TypeKey;
  emoji: string;
  name: string;
  shortDesc: string;
  /** 한 줄 캐치프레이즈 */
  tagline: string;
  desc: string;
  /** 일상 속 모습 (2~4개) */
  dailyTraits: string[];
  /** 교회·공동체에서의 역할 */
  churchScene: string;
  /** 재미있는 특징 (2~3개) */
  funFacts: string[];
  strength: string;
  caution: string;
  bestMatch: TypeKey;
  training: string[];
};

export type Question = {
  text: string;
  opts: string[];
  scores: TypeKey[];
};
