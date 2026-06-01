import { faithTypes, getFaithType } from "@/lib/faithTypes";
import { faithTypeOgImage } from "@/lib/ogImage";

export const runtime = "edge";

/** 카카오 SDK·외부 스크래퍼용 OG 이미지 (opengraph-image와 동일 디자인) */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") ?? "worship";
  const t = getFaithType(type) ?? faithTypes.worship;
  return faithTypeOgImage(t);
}
