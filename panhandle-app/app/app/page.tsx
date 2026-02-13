import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getProfile } from '@/app/actions/profile';

export default async function AppDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const profile = await getProfile(user.id);
  const planTier = profile?.plan_tier ?? 'free';
  const displayName = profile?.full_name || user.email?.split('@')[0] || 'there';

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-2xl font-semibold text-white">
        Welcome, {displayName}
      </h1>
      <p className="mt-1 text-zinc-400">
        Current tier: <span className="font-medium capitalize text-zinc-300">{planTier}</span>
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-surface-elevated p-6">
          <h2 className="font-display text-lg font-semibold text-white">Course Modules</h2>
          <p className="mt-2 text-sm text-zinc-500">Coming soon</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-surface-elevated p-6">
          <h2 className="font-display text-lg font-semibold text-white">Watchlist</h2>
          <p className="mt-2 text-sm text-zinc-500">Coming soon</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-surface-elevated p-6">
          <h2 className="font-display text-lg font-semibold text-white">Market Dashboard</h2>
          <p className="mt-2 text-sm text-zinc-500">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
