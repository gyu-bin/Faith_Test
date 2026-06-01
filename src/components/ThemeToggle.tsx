"use client";

import { useEffect, useState } from "react";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  getPreferredTheme,
  type Theme,
} from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getPreferredTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  if (!mounted) {
    return (
      <span
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gold-light bg-cream2 opacity-0 sm:right-6"
        aria-hidden
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gold-light bg-cream2 text-lg shadow-sm transition hover:border-gold hover:bg-gold-pale sm:right-6"
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      title={isDark ? "라이트 모드" : "다크 모드"}
    >
      <span aria-hidden>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
