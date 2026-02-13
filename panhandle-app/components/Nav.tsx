import Link from 'next/link';
import { Logo } from './Logo';

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="text-sm text-zinc-400 transition hover:text-white">
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-zinc-400 transition hover:text-white">
            About
          </Link>
          <Link
            href="/login"
            className="rounded-md bg-amber-500/90 px-4 py-2 text-sm font-medium text-surface transition hover:bg-amber-500"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
