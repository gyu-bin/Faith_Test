import { AppShell } from "@/components/AppShell";
import { ChurchIcon } from "@/components/ChurchIcon";
import { PageTransition } from "@/components/PageTransition";
import { ParticipantCount } from "@/components/ParticipantCount";
import { PrimaryButton } from "@/components/PrimaryButton";
import { TypePreviewGrid } from "@/components/TypePreviewGrid";
import { Card } from "@/components/Card";
import { getHomeParticipantDisplayCount } from "@/lib/participantDisplay";

export default async function HomePage() {
  const participantCount = await getHomeParticipantDisplayCount();
  return (
    <AppShell className="md:flex md:min-h-dvh md:flex-col md:justify-center md:max-w-xl md:px-8 md:pb-16 md:pt-10 lg:max-w-2xl lg:px-10 lg:pt-12">
      <PageTransition>
        <div className="flex flex-col items-center text-center md:mt-2">
          <ChurchIcon className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" />
          <h1 className="font-serif mt-5 text-[26px] font-bold leading-snug text-ink md:mt-6 md:text-[32px] lg:text-[36px]">
            나는 어떤
            <br />
            신앙인일까?
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:mt-4 md:text-[17px] lg:text-lg">
            12개의 일상 질문으로
            <br />
            나의 신앙 성향을 알아보세요
          </p>
        </div>

        <Card className="mt-8 md:mt-10 md:p-6 lg:mt-12 lg:p-7">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-ink-mute md:mb-4 md:text-sm">
            6가지 신앙 유형
          </p>
          <TypePreviewGrid />
        </Card>

        <div className="mt-6 md:mt-8">
          <ParticipantCount
            initialCount={participantCount}
            className="md:text-base"
          />
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12">
          <PrimaryButton
            href="/quiz"
            className="md:py-4 md:text-base lg:py-[18px] lg:text-[17px]"
          >
            테스트 시작하기
          </PrimaryButton>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-ink-mute md:mt-8 md:text-sm">
          약 2분 · 결과 공유 가능
          <br />
          교회 청년부·소그룹과 함께 해보세요
        </p>
      </PageTransition>
    </AppShell>
  );
}
