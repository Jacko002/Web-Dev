import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="text-base" />
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/pricing" className="transition hover:text-zinc-300">
              Pricing
            </Link>
            <Link href="/about" className="transition hover:text-zinc-300">
              About
            </Link>
          </div>
        </div>
        <p className="mt-8 max-w-xl text-xs leading-relaxed text-zinc-500">
          Educational purposes only. Not investment advice. PanHandle does not provide financial, legal, or tax
          advice. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
