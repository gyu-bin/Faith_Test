import { faithTypes, getFaithType } from "@/lib/faithTypes";
import { faithTypeOgImage, OG_SIZE } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "신앙 유형 테스트 결과";
export const size = OG_SIZE;
export const contentType = "image/png";

type Props = { params: { type: string } };

export default async function Image({ params }: Props) {
  const t = getFaithType(params.type) ?? faithTypes.worship;
  return faithTypeOgImage(t);
}
