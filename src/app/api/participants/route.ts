import { NextResponse } from "next/server";
import {
  getParticipantCount,
  incrementParticipantCount,
  isRedisConfigured,
} from "@/lib/participants";

export const dynamic = "force-dynamic";

export async function GET() {
  const live = isRedisConfigured();
  const count = live ? await getParticipantCount() : 0;
  return NextResponse.json(
    { count, live },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST() {
  const live = isRedisConfigured();
  if (!live) {
    return NextResponse.json(
      { count: 0, live: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
  const count = await incrementParticipantCount();
  return NextResponse.json(
    { count, live: true },
    { headers: { "Cache-Control": "no-store" } },
  );
}
