'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Logo } from './Logo';

export function AppNav() {
  const router = useRouter();

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
    router.push('/');
  }

  return (
    <header className="border-b border-white/10 bg-surface">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <Link href="/app" className="text-sm text-zinc-400 transition hover:text-white">
            Dashboard
          </Link>
          <button
            type="button"
            onClick={signOut}
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Sign out
          </button>
        </div>
      </nav>
    </header>
  );
}
