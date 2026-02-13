import type { ReactNode } from 'react';

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface-elevated p-6 transition hover:border-amber-500/20">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
        {icon}
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}
