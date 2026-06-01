import type { FaithType } from "@/lib/types";

type Props = {
  faithType: FaithType;
};

/** OG 이미지와 동일한 디자인 — img URL 없이 항상 표시 */
export function ShareResultCard({ faithType }: Props) {
  return (
    <div className="overflow-hidden rounded-card border-2 border-gold bg-cream shadow-sm">
      <div className="border-b border-gold-light bg-gold-pale/60 px-4 py-2 text-center text-xs font-semibold text-brown-light">
        공유용 결과 카드
      </div>
      <div
        className="flex aspect-[1200/630] flex-col items-center justify-center border-[6px] border-gold bg-cream px-5 py-8 text-center"
        role="img"
        aria-label={`${faithType.name} 결과 카드`}
      >
        <span className="text-[64px] leading-none sm:text-[72px]" aria-hidden>
          {faithType.emoji}
        </span>
        <p className="font-serif mt-4 text-[22px] font-bold leading-snug text-ink sm:text-[26px]">
          나는 {faithType.name}!
        </p>
        <p className="mt-3 max-w-[90%] text-[13px] leading-relaxed text-ink-soft sm:text-[15px]">
          {faithType.shortDesc}
        </p>
        <p className="mt-5 text-[11px] text-ink-mute sm:text-xs">
          나는 어떤 신앙인일까? · 12문항 테스트
        </p>
      </div>
    </div>
  );
}
