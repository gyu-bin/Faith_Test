import {
  TEMP_DISPLAY_WEEKLY_ONLY,
  getWeeklyFallbackCount,
} from "@/lib/displayParticipantCount";
import { getParticipantCount, isRedisConfigured } from "@/lib/participants";

export function resolveParticipantDisplayCount(
  live: boolean,
  redisCount: number,
  now = Date.now(),
): number {
  const fallback = getWeeklyFallbackCount(now);
  if (TEMP_DISPLAY_WEEKLY_ONLY) return fallback;
  if (live && redisCount > 0) return redisCount;
  return fallback;
}

export async function getHomeParticipantDisplayCount(): Promise<number> {
  if (TEMP_DISPLAY_WEEKLY_ONLY) {
    return getWeeklyFallbackCount();
  }
  if (isRedisConfigured()) {
    const redisCount = await getParticipantCount();
    if (redisCount > 0) return redisCount;
  }
  return getWeeklyFallbackCount();
}
