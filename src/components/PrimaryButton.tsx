import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
};

const variants = {
  primary:
    "bg-ink text-cream hover:bg-brown dark:hover:bg-gold dark:hover:text-ink active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none",
  outline:
    "border-2 border-gold text-ink bg-transparent hover:bg-gold-pale active:scale-[0.98]",
  ghost: "text-brown-light hover:text-ink underline-offset-4 hover:underline",
};

export function PrimaryButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base = `inline-flex w-full items-center justify-center rounded-inner px-5 py-3.5 text-[15px] font-semibold transition-all duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={base} {...props}>
      {children}
    </button>
  );
}
