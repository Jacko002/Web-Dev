'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { updateCurrentUserPlan } from '@/app/actions/profile';
import type { PlanTier } from '@/lib/types';

const PLAN_KEY = 'plan';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(PLAN_KEY);
      if (stored === 'free' || stored === 'pro') {
        await updateCurrentUserPlan(stored);
        localStorage.removeItem(PLAN_KEY);
      }
    }

    router.refresh();
    router.push('/app');
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      {error && (
        <div className="rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-400">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 block w-full rounded-md border border-white/20 bg-surface-elevated px-3 py-2 text-white placeholder-zinc-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-1 block w-full rounded-md border border-white/20 bg-surface-elevated px-3 py-2 text-white placeholder-zinc-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-amber-500 px-4 py-2.5 text-sm font-medium text-surface transition hover:bg-amber-400 disabled:opacity-50"
      >
        {loading ? 'Signing in…' : 'Log in'}
      </button>
    </form>
  );
}
