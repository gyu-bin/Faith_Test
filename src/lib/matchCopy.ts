import type { TypeKey } from "./types";

/** 유형 × 궁합 유형별 함께 성장하는 법 */
export const matchGrowth: Record<TypeKey, Partial<Record<TypeKey, string>>> = {
  worship: {
    word: "찬양의 감동을 말씀으로 정리해 보면, 열정이 오래 지속됩니다. 함께 '오늘의 찬양 + 관련 구절'을 나눠 보세요.",
  },
  word: {
    prayer: "배운 말씀을 기도 제목으로 바꿔 보세요. 지식이 중보의 사랑으로 이어질 때 공동체가 단단해집니다.",
  },
  prayer: {
    serve: "기도한 사랑을 손으로 옮겨 보세요. 중보 뒤 작은 섬김 한 가지를 함께 실천하면 은혜가 살아납니다.",
  },
  serve: {
    meditation: "바쁜 섬김 사이 '멈춤'의 리듬을 함께 지켜 보세요. 고요한 묵상이 섬김의 지침을 막아 줍니다.",
  },
  meditation: {
    mission: "깊이 쌓인 묵상이 복음의 용기로 이어질 때, 전도가 조급하지 않고 단단해집니다.",
  },
  mission: {
    worship: "전도의 열정이 예배의 감사로 돌아올 때 번아웃을 피할 수 있습니다. 함께 찬양하며 쉬어 가세요.",
  },
};

export function getMatchGrowthText(
  self: TypeKey,
  match: TypeKey,
): string {
  return (
    matchGrowth[self]?.[match] ??
    `${match} 유형과 함께할 때 서로의 강점을 나누고, 약한 부분을 채워 줄 수 있어요.`
  );
}
