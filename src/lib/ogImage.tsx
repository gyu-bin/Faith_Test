import { ImageResponse } from "next/og";
import type { FaithType } from "./types";

export const OG_SIZE = { width: 1200, height: 630 };

const flexCol = {
  display: "flex",
  flexDirection: "column" as const,
};

export function faithTypeOgImage(faithType: FaithType) {
  return new ImageResponse(
    (
      <div
        style={{
          ...flexCol,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F3",
          border: "16px solid #B8935A",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, marginBottom: 24 }}>
          {faithType.emoji}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "#2A2118",
            marginBottom: 16,
          }}
        >
          {`나는 ${faithType.name}!`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#5C4A34",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.45,
            padding: "0 24px",
          }}
        >
          {faithType.shortDesc}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 22,
            color: "#9C8E80",
          }}
        >
          {"나는 어떤 신앙인일까? · 12문항 테스트"}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

export function homeOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          ...flexCol,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F3",
          border: "16px solid #B8935A",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, marginBottom: 20 }}>
          {"⛪"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#2A2118",
            marginBottom: 16,
          }}
        >
          {"나는 어떤 신앙인일까?"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#5C4A34",
            textAlign: "center",
            lineHeight: 1.45,
          }}
        >
          {"12개의 질문으로 알아보는 나의 신앙 성향"}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 24,
            color: "#B8935A",
          }}
        >
          {"6가지 신앙 유형 · 12문항 테스트"}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

export function ogImageUrlForType(type: string): string {
  return `/api/og?type=${encodeURIComponent(type)}`;
}
