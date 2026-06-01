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
  desc: string;
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
