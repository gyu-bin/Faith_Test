/** 배포 도메인 (OG·카카오 미리보기용 절대 URL) */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
