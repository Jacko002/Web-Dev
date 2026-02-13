import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-1.5 font-display text-xl font-semibold text-white ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded border border-amber-500/60 text-amber-500/90">
        P
      </span>
      PanHandle
    </Link>
  );
}
