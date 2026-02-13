import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        About PanHandle
      </h1>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">Mission</h2>
        <p className="mt-3 text-zinc-300 leading-relaxed">
          PanHandle exists to give college students and early investors a clear, disciplined way to learn
          about investing. We focus on education and structure—not hype or get-rich-quick messaging—so users can
          build habits and judgment that last.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-white">Values</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li className="flex gap-3">
            <span className="text-amber-500/80">·</span>
            <span><strong className="text-zinc-200">Clarity</strong> — Explain concepts in plain language and avoid unnecessary complexity.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500/80">·</span>
            <span><strong className="text-zinc-200">Discipline</strong> — Emphasize process, research, and risk awareness over speculation.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500/80">·</span>
            <span><strong className="text-zinc-200">Integrity</strong> — No investment advice; we provide education and tools only.</span>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-white">Founder</h2>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl bg-surface-elevated">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-zinc-300 leading-relaxed">
              Finance and International Business student at Loyola University Maryland with experience
              spanning consulting, clean energy, and impact investing. As a lead consultant and a solar
              industry analyst reporting to executive leadership, I’ve worked on partner strategy, platform
              design, and operational improvements that inform real decisions. PanHandle is built to bring
              that same discipline to how students learn and practice investing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
