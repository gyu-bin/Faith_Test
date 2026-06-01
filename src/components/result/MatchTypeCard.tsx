import { faithTypes } from "@/lib/faithTypes";
import { getMatchGrowthText } from "@/lib/matchCopy";
import type { FaithType } from "@/lib/types";
import { Card } from "@/components/Card";

type Props = { faithType: FaithType };

export function MatchTypeCard({ faithType }: Props) {
  const match = faithTypes[faithType.bestMatch];

  return (
    <Card>
      <h3 className="text-sm font-semibold text-gold">궁합 유형</h3>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex flex-col items-center rounded-inner border border-gold-light bg-cream px-4 py-3">
          <span className="text-3xl">{faithType.emoji}</span>
          <span className="mt-1 text-[11px] font-medium text-ink-mute">나</span>
        </div>
        <span className="text-2xl text-gold" aria-hidden>
          ✦
        </span>
        <div className="flex flex-col items-center rounded-inner border border-gold-light bg-gold-pale/50 px-4 py-3">
          <span className="text-3xl">{match.emoji}</span>
          <span className="mt-1 text-[11px] font-medium text-ink-mute">궁합</span>
        </div>
      </div>
      <p className="mt-4 text-center font-serif text-lg text-ink">
        {match.name}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        {getMatchGrowthText(faithType.key, faithType.bestMatch)}
      </p>
    </Card>
  );
}
