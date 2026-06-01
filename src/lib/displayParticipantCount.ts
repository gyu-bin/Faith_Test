/**
 * 임시: true → 화면에는 주간 기준 인원만 표시 (Redis는 퀴즈 시 백그라운드 집계)
 * 실제 Redis 숫자를 쓰려면 false 로 변경
 */
export const TEMP_DISPLAY_WEEKLY_ONLY = true;

/** Redis 없을 때: 서비스 오픈 주차 × 100명 + 기준 인원 */
export const FALLBACK_BASE = 24;
export const FALLBACK_WEEKLY_INCREMENT = 100;

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

/** 서비스 오픈일 (KST 0시) — 주차 계산 기준 */
const FALLBACK_LAUNCH_MS = new Date("2026-06-01T00:00:00+09:00").getTime();

export function isRedisConfigured(): boolean {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  return Boolean(url && token);
}

/** 오픈 후 경과 주차 (0 = 첫 주) */
export function getWeeksSinceLaunch(now = Date.now()): number {
  if (now < FALLBACK_LAUNCH_MS) return 0;
  return Math.floor((now - FALLBACK_LAUNCH_MS) / WEEK_MS);
}

/** Redis 미연동 시 표시 인원: 기준 24명 + 매주 100명 */
export function getWeeklyFallbackCount(now = Date.now()): number {
  const weeks = getWeeksSinceLaunch(now);
  return FALLBACK_BASE + weeks * FALLBACK_WEEKLY_INCREMENT;
}
