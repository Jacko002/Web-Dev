'use server';

import { createClient } from '@/lib/supabase/server';
import type { PlanTier } from '@/lib/types';

export async function upsertProfile(userId: string, data: { full_name?: string | null; plan_tier?: PlanTier }) {
  const supabase = await createClient();

  const { error } = await supabase.from('profiles').upsert(
    {
      id: userId,
      full_name: data.full_name ?? null,
      plan_tier: data.plan_tier ?? 'free',
    },
    { onConflict: 'id' }
  );

  if (error) throw error;
}

export async function getProfile(userId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) return null;
  return data;
}

export async function updateCurrentUserPlan(planTier: PlanTier) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await upsertProfile(user.id, { plan_tier: planTier });
}
