import { Redis } from "@upstash/redis";

const COUNT_KEY = "faith-test:participants";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function getParticipantCount(): Promise<number> {
  const redis = getRedis();
  if (!redis) return 0;
  try {
    const value = await redis.get<number>(COUNT_KEY);
    return typeof value === "number" ? value : 0;
  } catch (e) {
    console.error("[participants] get failed", e);
    return 0;
  }
}

export async function incrementParticipantCount(): Promise<number> {
  const redis = getRedis();
  if (!redis) return 0;
  try {
    return await redis.incr(COUNT_KEY);
  } catch (e) {
    console.error("[participants] incr failed", e);
    return 0;
  }
}
