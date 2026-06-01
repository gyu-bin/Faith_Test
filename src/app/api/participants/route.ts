import { NextResponse } from "next/server";
import {
  getParticipantCount,
  incrementParticipantCount,
} from "@/lib/participants";

export const dynamic = "force-dynamic";

export async function GET() {
  const count = await getParticipantCount();
  return NextResponse.json(
    { count },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function POST() {
  const count = await incrementParticipantCount();
  return NextResponse.json(
    { count },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
