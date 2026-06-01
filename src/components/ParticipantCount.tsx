"use client";

import { useEffect, useState } from "react";
import {
  TEMP_DISPLAY_WEEKLY_ONLY,
  getWeeklyFallbackCount,
} from "@/lib/displayParticipantCount";

function resolveDisplayCount(live: boolean, redisCount: number): number {
  const fallback = getWeeklyFallbackCount();
  if (TEMP_DISPLAY_WEEKLY_ONLY) return fallback;
  if (live && redisCount > 0) return redisCount;
  return fallback;
}

export function ParticipantCount({ className = "" }: { className?: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/participants", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: { count?: number; live?: boolean }) => {
        const redis = typeof data.count === "number" ? data.count : 0;
        setCount(resolveDisplayCount(Boolean(data.live), redis));
      })
      .catch(() => setCount(getWeeklyFallbackCount()));
  }, []);

  if (count === null) {
    return (
      <p className={`text-center text-sm text-ink-mute ${className}`}>
        참여자 수 불러오는 중…
      </p>
    );
  }

  return (
    <p className={`text-center text-sm text-ink-mute ${className}`}>
      지금까지{" "}
      <span className="font-semibold text-gold tabular-nums">
        {count.toLocaleString("ko-KR")}
      </span>
      명이 참여했어요
    </p>
  );
}
