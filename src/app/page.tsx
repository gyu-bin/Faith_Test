import { AppShell } from "@/components/AppShell";
import { ChurchIcon } from "@/components/ChurchIcon";
import { PageTransition } from "@/components/PageTransition";
import { ParticipantCount } from "@/components/ParticipantCount";
import { PrimaryButton } from "@/components/PrimaryButton";
import { TypePreviewGrid } from "@/components/TypePreviewGrid";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <AppShell>
      <PageTransition>
        <div className="flex flex-col items-center text-center">
          <ChurchIcon className="h-16 w-16" />
          <h1 className="font-serif mt-5 text-[26px] font-bold leading-snug text-ink">
            나는 어떤
            <br />
            신앙인일까?
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            12개의 일상 질문으로
            <br />
            나의 신앙 성향을 알아보세요
          </p>
        </div>

        <Card className="mt-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-ink-mute">
            6가지 신앙 유형
          </p>
          <TypePreviewGrid />
        </Card>

        <div className="mt-6">
          <ParticipantCount />
        </div>

        <div className="mt-8">
          <PrimaryButton href="/quiz">테스트 시작하기</PrimaryButton>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-ink-mute">
          약 2분 · 결과 공유 가능
          <br />
          교회 청년부·소그룹과 함께 해보세요
        </p>
      </PageTransition>
    </AppShell>
  );
}
