import Link from "next/link";
import { AppShell } from "@/components/AppShell";

export default function NotFound() {
  return (
    <AppShell>
      <div className="flex min-h-[60dvh] flex-col items-center justify-center text-center">
        <p className="font-serif text-xl text-ink">페이지를 찾을 수 없어요</p>
        <Link
          href="/"
          className="mt-6 text-sm text-gold underline-offset-4 hover:underline"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </AppShell>
  );
}
