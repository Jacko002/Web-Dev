export type PlanTier = 'free' | 'pro';

export interface Profile {
  id: string;
  full_name: string | null;
  plan_tier: PlanTier;
  created_at: string;
}
