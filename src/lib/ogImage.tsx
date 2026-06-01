import { ImageResponse } from "next/og";
import type { FaithType } from "./types";

export const OG_SIZE = { width: 1200, height: 630 };

export function faithTypeOgImage(faithType: FaithType) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F3",
          border: "16px solid #B8935A",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, marginBottom: 24 }}>{faithType.emoji}</div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#2A2118",
            marginBottom: 16,
          }}
        >
          나는 {faithType.name}!
        </div>
        <div
          style={{
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
        <div style={{ marginTop: 40, fontSize: 22, color: "#9C8E80" }}>
          나는 어떤 신앙인일까? · 12문항 테스트
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F3",
          border: "16px solid #B8935A",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 20 }}>⛪</div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#2A2118",
            marginBottom: 16,
          }}
        >
          나는 어떤 신앙인일까?
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#5C4A34",
            textAlign: "center",
            lineHeight: 1.45,
          }}
        >
          12개의 질문으로 알아보는 나의 신앙 성향
        </div>
        <div style={{ marginTop: 36, fontSize: 24, color: "#B8935A" }}>
          🔥 📖 🙏 🤝 🌱 📣 6가지 유형
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
