import { faithTypes } from "@/lib/faithTypes";
import { TYPE_KEYS } from "@/lib/types";

export function TypePreviewGrid() {
  return (
    <div className="grid grid-cols-3 gap-2.5 md:gap-3.5 lg:gap-4">
      {TYPE_KEYS.map((key) => {
        const t = faithTypes[key];
        return (
          <div
            key={key}
            className="flex flex-col items-center justify-center rounded-inner border border-gold-light bg-cream px-2 py-3 text-center md:px-3 md:py-4 lg:py-5"
          >
            <span
              className="text-2xl md:text-3xl lg:text-4xl"
              aria-hidden
              suppressHydrationWarning
            >
              {t.emoji}
            </span>
            <span className="mt-1.5 text-[11px] font-medium leading-tight text-ink md:mt-2 md:text-xs lg:text-sm">
              {t.name.replace("형", "")}
              <span className="text-ink-mute">형</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
