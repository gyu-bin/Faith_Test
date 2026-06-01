import type { FaithType } from "@/lib/types";
import { resultThemes } from "./resultTheme";

type Props = { faithType: FaithType };

export function ResultHero({ faithType }: Props) {
  const theme = resultThemes[faithType.key];

  return (
    <header
      className={`-mx-4 overflow-hidden rounded-b-card border-b border-gold-light bg-gradient-to-b sm:-mx-5 ${theme.gradient}`}
    >
      <div className="relative px-4 pb-7 pt-4 sm:px-5">
        <div
          className={`pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full ${theme.blob} blur-2xl`}
        />
        <div
          className={`pointer-events-none absolute -left-6 bottom-0 h-28 w-28 rounded-full ${theme.blob} blur-xl`}
        />

        <p className="relative text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          {theme.label}
        </p>

        <div className="relative mx-auto mt-4 flex justify-center">
          <div
            className={`relative flex h-[148px] w-[148px] items-center justify-center rounded-full border-[3px] bg-cream/90 shadow-md ${theme.ring}`}
          >
            <span className="text-[72px] leading-none" aria-hidden>
              {faithType.emoji}
            </span>
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-gold/25"
              viewBox="0 0 148 148"
              fill="none"
              aria-hidden
            >
              <circle
                cx="74"
                cy="74"
                r="68"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
            </svg>
          </div>
        </div>

        <h1 className="font-serif relative mt-5 text-center text-[26px] font-bold leading-snug text-ink">
          {faithType.name}
        </h1>
        <p className="relative mt-2 text-center text-[15px] leading-relaxed text-ink-soft">
          {faithType.shortDesc}
        </p>
      </div>
    </header>
  );
}
