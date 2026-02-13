# PanHandle

Investment education and analytics for college students and early investors. Next.js 14 (App Router), TypeScript, Tailwind CSS, Supabase auth + database.

## Setup

### 1. Environment variables

Copy the example env and add your Supabase keys:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Get these from [Supabase](https://supabase.com/dashboard) → your project → Settings → API.

### 2. Supabase: `profiles` table

Run this in the Supabase SQL Editor (Dashboard → SQL Editor):

```sql
-- profiles: one row per user, stores plan_tier and optional full_name
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  plan_tier text not null default 'free' check (plan_tier in ('free', 'pro')),
  created_at timestamptz not null default now()
);

-- Allow users to read and update their own profile
alter table public.profiles enable row level security;

create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);
```

### 3. Auth settings (optional for local demo)

In Supabase → Authentication → Providers → Email:

- To test signup without email confirmation, you can turn off **“Confirm email”** for faster local development.

### 4. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

1. Push the repo to GitHub and import the project in Vercel.
2. Add the same env vars in Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Deploy. The app is Vercel-ready (no extra config).

## Flow

- **Landing** (`/`): Hero, features, “Built for students,” founder section, footer with disclaimers.
- **Pricing** (`/pricing`): Free “Basics” and Pro “$4.99/mo” cards. “Choose” stores the tier in `localStorage` and sends the user to `/signup` (or they can go to `/login` if they already have an account).
- **Signup** (`/signup`): Email + password via Supabase. After signup, the selected plan from `localStorage` is written to `profiles.plan_tier`, then redirect to `/app`.
- **Login** (`/login`): Email + password. If a plan was stored from Pricing, it is applied to the profile. Redirect to `/app`.
- **App** (`/app`): Protected dashboard with greeting, current tier from `profiles.plan_tier`, and placeholder widgets. Sign out in the app nav.

No payments, no stock data, no algorithm or signal pages—tier selection and auth only.
