import Image from 'next/image';
import Link from 'next/link';
import { FeatureCard } from '@/components/FeatureCard';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-surface/80" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            PanHandle
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-300">
            Investment education and analytics built for college students and early investors. Learn, track, and
            analyze with clarity and discipline.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-md bg-amber-500 px-5 py-2.5 text-sm font-medium text-surface transition hover:bg-amber-400"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          What you get
        </h2>
        <p className="mt-2 text-zinc-400">
          A focused toolkit for building investing literacy and habits.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <FeatureCard
            title="Learn"
            description="Structured lessons and concepts so you understand why, not just what."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            }
          />
          <FeatureCard
            title="Track"
            description="Keep an eye on what matters with simple, organized watchlists and notes."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-7.5m7.5 0v11.25" />
              </svg>
            }
          />
          <FeatureCard
            title="Analyze"
            description="Use clear frameworks to evaluate ideas and build a research-backed approach."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            }
          />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-surface/85" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Built for students
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            College is when many people first encounter investing. PanHandle is designed for that moment: clear
            explanations, no jargon overload, and a path from basics to a disciplined practice. Whether you’re
            in finance or just curious, the tools adapt to where you are.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          Founder
        </h2>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl bg-surface-elevated sm:h-56 sm:w-56">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-zinc-300 leading-relaxed">
              Finance and International Business student at Loyola University Maryland with experience spanning
              consulting, clean energy, and impact investing. As a lead consultant and a solar industry analyst
              reporting to executive leadership, I’ve worked on partner strategy, platform design, and
              operational improvements that inform real decisions. PanHandle is built to bring that same
              discipline to how students learn and practice investing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
