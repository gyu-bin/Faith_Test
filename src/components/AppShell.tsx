import { ReactNode } from "react";

export function AppShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto min-h-dvh w-full max-w-app px-4 pb-10 pt-6 sm:px-5 ${className}`}
    >
      {children}
    </div>
  );
}
