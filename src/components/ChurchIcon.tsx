export function ChurchIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M32 8L20 18v6h-6v22h36V24h-6v-6L32 8z"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="var(--gold-pale)"
      />
      <path
        d="M28 46h8v10h-8V46z"
        fill="var(--gold)"
        opacity="0.85"
      />
      <circle cx="32" cy="14" r="3" fill="var(--gold)" />
      <path
        d="M32 20v4M26 22h12"
        stroke="var(--brown-light)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
