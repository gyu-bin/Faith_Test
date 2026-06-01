<div align="center">

# ⛪ 나는 어떤 신앙인일까?

**12개의 일상 질문으로 알아보는 나의 신앙 성향**

교회 청년부 · 소그룹에서 카카오톡으로 가볍게 퍼지는 바이럴 테스트

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

**[🌐 라이브 데모](https://faith-test-mu.vercel.app)** · [GitHub](https://github.com/gyu-bin/Faith_Test) · [6가지 유형](#-6가지-신앙-유형)

</div>

---

## ✨ 소개

「나는 어떤 신앙인일까?」는 어려운 신학 용어 없이, **일상 속 12가지 장면**을 통해 신앙 성향을 알아보는 웹 테스트입니다.

- 📱 모바일 퍼스트 UI (최대 480px)
- 🎨 크림 · 골드 톤의 따뜻한 디자인
- 📤 카카오톡 공유 · OG 미리보기 이미지 지원
- 🔓 전체 결과(궁합 · 주의 패턴 · 훈련 팁) 무료 열람
- 📊 **실제 참여자 수** (Upstash Redis · 테스트 시작 시 +1)

---

## 🧭 6가지 신앙 유형

| | 유형 | 한 줄 설명 |
|:---:|:---|:---|
| 🔥 | **찬양 불꽃형** | 예배와 찬양 속에서 하나님을 가장 생생하게 만나는 타입 |
| 📖 | **말씀 탐구형** | 성경과 가르침 속에서 진리를 캐고 삶에 적용하는 타입 |
| 🙏 | **기도 중보형** | 조용한 기도로 사람과 공동체를 붙드는 타입 |
| 🤝 | **섬김 실천형** | 손과 발로 사랑을 보여 주는 믿음의 실천가 |
| 🌱 | **묵상 성장형** | 고요한 가운데 천천히 자라는 깊은 신앙의 정원사 |
| 📣 | **전도 사명형** | 복음을 삶과 관계 속으로 옮기는 사명의 사람 |

> 결과는 **12문항 전체 점수 합산**으로 결정됩니다. 한 문항만으로 유형이 정해지지 않아요.

---

## 🛠 기술 스택

| 영역 | 기술 |
|:---|:---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| Font | Noto Serif KR · Pretendard |
| OG Image | `next/og` (`/api/og`) |
| Deploy | [Vercel](https://vercel.com/) |

---

## 🚀 빠른 시작

### 요구 사항

- Node.js 18+
- npm

### 설치 및 실행

```bash
git clone https://github.com/gyu-bin/Faith_Test.git
cd Faith_Test
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 **http://localhost:3000** 을 엽니다.

### 환경 변수 (선택)

| 변수 | 설명 |
|:---|:---|
| `NEXT_PUBLIC_BASE_URL` | 배포 URL (카카오·OG 미리보기용) |
| `NEXT_PUBLIC_KAKAO_JS_KEY` | [카카오 JavaScript 키](https://developers.kakao.com/) — 공유 버튼 |
| `UPSTASH_REDIS_REST_URL` | 참여자 수 카운터 ([Upstash Redis](https://vercel.com/marketplace/upstash)) |
| `UPSTASH_REDIS_REST_TOKEN` | ↑ 연동 시 Vercel에 자동 주입 |

---

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx              # 인트로
│   ├── quiz/                 # 12문항 퀴즈
│   ├── loading/              # 결과 로딩
│   ├── result/[type]/        # 유형별 결과 (SSG)
│   └── api/og/               # OG · 공유 이미지
├── components/               # UI 컴포넌트
└── lib/
    ├── questions.ts          # 질문 데이터
    ├── faithTypes.ts         # 유형별 결과 문구
    └── scoring.ts            # 점수 계산
```

---

## 📄 페이지

| 경로 | 설명 |
|:---|:---|
| `/` | 인트로 · 유형 미리보기 · 참여자 수 |
| `/quiz` | 질문 (선택 시 자동 다음 + 하단 뒤로/다음) |
| `/loading` | 결과 분석 로딩 (2초) |
| `/result/[type]` | 결과 · 공유 카드 · 카카오 공유 |

**결과 URL 예시:** `/result/word` → 말씀 탐구형

---

## ☁️ 배포

### Vercel (권장)

1. 이 저장소를 Vercel에 Import
2. Environment Variables에 `NEXT_PUBLIC_BASE_URL` = `https://your-domain.vercel.app` 설정
3. (선택) `NEXT_PUBLIC_KAKAO_JS_KEY` 추가
4. **참여자 수:** Vercel 대시보드 → **Storage** → [Upstash Redis](https://vercel.com/marketplace/upstash) 연동 → 프로젝트에 연결 후 재배포

> Redis 미연동 시 참여자 수는 `0`으로 표시됩니다 (가짜 13,000명 없음).

### CLI

```bash
npx vercel --prod
```

---

## 🤝 공유 팁

- 결과 페이지에서 **카카오로 공유하기** 또는 링크 복사
- 카카오톡 미리보기는 **HTTPS 배포 URL**에서만 이미지가 보입니다 (`localhost` 제외)
- 캐시 갱신: [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing)

---

## 📜 라이선스

MIT — 자유롭게 사용·수정·배포할 수 있습니다.

---

<div align="center">

**Made with ☕ for church community**

[⬆ 맨 위로](#-나는-어떤-신앙인일까)

</div>
