import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full rounded-card border border-gold-light bg-cream2 p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
