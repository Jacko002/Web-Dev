import { PricingCards } from './PricingCards';

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        Pricing
      </h1>
      <p className="mt-2 text-zinc-400">
        Choose the tier that fits how you want to learn and practice.
      </p>
      <PricingCards />
    </div>
  );
}
