import { THEME_STORAGE_KEY } from "@/lib/theme";

/** 첫 페인트 전 다크모드 적용 — 깜빡임 방지 */
export function ThemeScript() {
  const script = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
