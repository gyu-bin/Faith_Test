"use client";

import { useEffect, useState } from "react";
import { resolveParticipantDisplayCount } from "@/lib/participantDisplay";
import { getWeeklyFallbackCount } from "@/lib/displayParticipantCount";

type Props = {
  initialCount: number;
  className?: string;
};

export function ParticipantCount({ initialCount, className = "" }: Props) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    fetch("/api/participants", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: { count?: number; live?: boolean }) => {
        const redis = typeof data.count === "number" ? data.count : 0;
        setCount(resolveParticipantDisplayCount(Boolean(data.live), redis));
      })
      .catch(() => setCount(getWeeklyFallbackCount()));
  }, []);

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
