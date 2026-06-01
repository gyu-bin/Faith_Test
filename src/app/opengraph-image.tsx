import { homeOgImage, OG_SIZE } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "나는 어떤 신앙인일까?";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return homeOgImage();
}
