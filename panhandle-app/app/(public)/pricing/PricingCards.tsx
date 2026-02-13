'use client';

import { useRouter } from 'next/navigation';

const PLAN_KEY = 'plan';

export function PricingCards() {
  const router = useRouter();

  function choosePlan(tier: 'free' | 'pro') {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PLAN_KEY, tier);
    }
    router.push('/signup');
  }

  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:max-w-2xl">
      <div className="rounded-xl border border-white/10 bg-surface-elevated p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">
          PanHandle Basics
        </h2>
        <p className="mt-1 text-sm text-zinc-400">Free</p>
        <p className="mt-4 text-sm text-zinc-300">
          Core lessons, one watchlist, and essential tools to get started.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-zinc-400">
          <li>Structured learning path</li>
          <li>Basic watchlist</li>
          <li>Community access</li>
        </ul>
        <button
          type="button"
          onClick={() => choosePlan('free')}
          className="mt-8 w-full rounded-md border border-white/30 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Choose
        </button>
      </div>

      <div className="rounded-xl border border-amber-500/30 bg-surface-elevated p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">
          PanHandle Pro
        </h2>
        <p className="mt-1 text-sm text-amber-500/90">$4.99/mo</p>
        <p className="mt-4 text-sm text-zinc-300">
          Deeper analytics, more watchlists, and advanced tools. Payment is not implemented in this demo.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-zinc-400">
          <li>Everything in Basics</li>
          <li>Multiple watchlists</li>
          <li>Advanced analytics</li>
          <li>Priority support</li>
        </ul>
        <button
          type="button"
          onClick={() => choosePlan('pro')}
          className="mt-8 w-full rounded-md bg-amber-500 py-2.5 text-sm font-medium text-surface transition hover:bg-amber-400"
        >
          Choose
        </button>
      </div>
    </div>
  );
}
