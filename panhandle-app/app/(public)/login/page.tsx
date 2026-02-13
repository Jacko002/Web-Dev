import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { LoginForm } from './LoginForm';
import Link from 'next/link';

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect('/app');

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="font-display text-2xl font-semibold text-white">Log in</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Use the email and password you signed up with.
      </p>
      <LoginForm />
      <p className="mt-6 text-center text-sm text-zinc-400">
        Don’t have an account?{' '}
        <Link href="/signup" className="text-amber-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
