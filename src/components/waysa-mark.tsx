export function WaysaMark({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <a
      href="https://www.wayusa.cz/"
      className={`inline-flex items-center gap-2.5 ${className ?? "text-gold hover:text-ivory"}`}
      rel="noopener noreferrer"
      aria-label="WAYSA"
      title="WAYSA"
    >
      <svg viewBox="0 0 96 56" className={compact ? "h-7 w-12" : "h-9 w-[4.2rem]"} fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M4 28 L28 4 L48 24 L28 52 L4 28Zm16.5 0c0-6 4.2-10 9.5-10 3.6 0 6.4 1.8 8 4.4L34 26c-.7-1.2-2-2-3.6-2-2.6 0-4.4 2-4.4 4s1.8 4 4.4 4c1.6 0 2.9-.8 3.6-2l4 3.6c-1.6 2.6-4.4 4.4-8 4.4-5.3 0-9.5-4-9.5-10Z"
        />
        <path
          fillRule="evenodd"
          d="M92 28 L68 4 L48 24 L68 52 L92 28Zm-16.5 0c0-6-4.2-10-9.5-10-3.6 0-6.4 1.8-8 4.4L62 26c.7-1.2 2-2 3.6-2 2.6 0 4.4 2 4.4 4s-1.8 4-4.4 4c-1.6 0-2.9-.8-3.6-2l-4 3.6c1.6 2.6 4.4 4.4 8 4.4 5.3 0 9.5-4 9.5-10Z"
        />
      </svg>
      <span className="font-serif tracking-[0.22em] uppercase">Waysa</span>
    </a>
  );
}
