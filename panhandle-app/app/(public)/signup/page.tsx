import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { SignupForm } from './SignupForm';
import Link from 'next/link';

export default async function SignupPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect('/app');

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="font-display text-2xl font-semibold text-white">Create an account</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Choose a plan on Pricing first if you haven’t. Your selection is saved and applied after signup.
      </p>
      <SignupForm />
      <p className="mt-6 text-center text-sm text-zinc-400">
        Already have an account?{' '}
        <Link href="/login" className="text-amber-500 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
