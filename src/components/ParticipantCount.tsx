"use client";

import { useEffect, useState } from "react";
import { getParticipantCount } from "@/lib/storage";

export function ParticipantCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(getParticipantCount());
  }, []);

  if (count === null) {
    return (
      <p className="text-center text-sm text-ink-mute">참여자 수 불러오는 중…</p>
    );
  }

  return (
    <p className="text-center text-sm text-ink-mute">
      지금까지{" "}
      <span className="font-semibold text-gold">
        {count.toLocaleString("ko-KR")}
      </span>
      명이 참여했어요
    </p>
  );
}
