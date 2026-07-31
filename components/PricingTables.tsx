"use client";

import FadeIn from "./Fadein";
import Section from "./Section";

type Plan = {
  badge: string;
  name: string;
  sub: string;
  price: string;
  discount: string;
  discountedPrice: string;
  thenPrice: string;
  credits: string;
  features: string[];
  cta: string;
  theme: {
    badge: string;
    price: string;
    discountBadge: string;
    btn: string;
    checkStroke: string;
  };
};

const plans: Plan[] = [
  {
    badge: "Get Started",
    name: "Starter",
    sub: "For the first 5 clients",
    price: "$79",
    discount: "75% OFF",
    discountedPrice: "$19.75 FIRST 2 MONTHS",
    thenPrice: "THEN $79/MO",
    credits: "3,000 credits",
    features: ["5 Sub Accounts", "Advanced Demos", "Marketplace"],
    cta: "Get 75% Off First 2 Months",
    theme: {
      badge: "bg-indigo-500/15 text-indigo-300",
      price: "text-indigo-300",
      discountBadge: "bg-indigo-500/12 text-indigo-300",
      btn: "bg-indigo-500",
      checkStroke: "text-indigo-400",
    },
  },
  {
    badge: "Popular",
    name: "Growth",
    sub: "For up to 20 clients",
    price: "$159",
    discount: "60% OFF",
    discountedPrice: "$63.60 FIRST 2 MONTHS",
    thenPrice: "THEN $159/MO",
    credits: "10,000 credits",
    features: [
      "20 Sub Accounts",
      "Advanced Demos",
      "Marketplace +",
      "Priority Support",
    ],
    cta: "Get 60% Off First 2 Months",
    theme: {
      badge: "bg-emerald-500/15 text-emerald-300",
      price: "text-emerald-300",
      discountBadge: "bg-emerald-500/12 text-emerald-300",
      btn: "bg-emerald-500",
      checkStroke: "text-emerald-400",
    },
  },
  {
    badge: "Best Value",
    name: "Pro",
    sub: "For up to 50 clients",
    price: "$299",
    discount: "50% OFF",
    discountedPrice: "$149.50 FIRST 2 MONTHS",
    thenPrice: "THEN $299/MO",
    credits: "30,000 credits",
    features: [
      "50 Sub Accounts",
      "Advanced Demos Pro",
      "Marketplace Pro",
      "Dedicated Manager",
    ],
    cta: "Get 50% Off First 2 Months",
    theme: {
      badge: "bg-amber-500/15 text-amber-300",
      price: "text-amber-300",
      discountBadge: "bg-amber-500/12 text-amber-300",
      btn: "bg-amber-500",
      checkStroke: "text-amber-400",
    },
  },
  {
    badge: "Enterprise",
    name: "Enterprise",
    sub: "Unlimited clients",
    price: "$499",
    discount: "40% OFF",
    discountedPrice: "$299.40 FIRST 2 MONTHS",
    thenPrice: "THEN $499/MO",
    credits: "100,000 credits",
    features: [
      "Unlimited Sub Accounts",
      "Enterprise Demos",
      "Custom Marketplace",
      "24/7 VIP Support",
    ],
    cta: "Get 40% Off First 2 Months",
    theme: {
      badge: "bg-rose-500/15 text-rose-300",
      price: "text-rose-300",
      discountBadge: "bg-rose-500/12 text-rose-300",
      btn: "bg-rose-500",
      checkStroke: "text-rose-400",
    },
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingTables() {
  return (
    <Section id="pricing">
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Pricing
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Simple, Transparent Pricing
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            Choose the plan that fits your needs. All plans include a free trial
            period with no hidden fees.
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {plans.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.1}>
            <div className="group flex-1 min-w-[240px] max-w-[320px] bg-zinc-900/30 rounded-[28px] p-8 pb-7 shadow-xl border border-zinc-800 flex flex-col transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:border-zinc-600">
              {/* Badge */}
              <span
                className={`inline-block text-[11px] font-semibold tracking-[0.4px] uppercase px-3.5 py-1 rounded-full self-start mb-4 ${plan.theme.badge}`}
              >
                {plan.badge}
              </span>

              {/* Plan name & sub */}
              <h3 className="text-2xl font-bold tracking-tight text-zinc-100 mb-0.5">
                {plan.name}
              </h3>
              <p className="text-sm text-zinc-500 mb-5">{plan.sub}</p>

              {/* Price row */}
              <div className="flex items-baseline gap-2.5 flex-wrap mb-0.5">
                <span
                  className={`text-4xl font-bold tracking-tight ${plan.theme.price}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xs font-semibold px-3.5 py-0.5 rounded-full ${plan.theme.discountBadge}`}
                >
                  {plan.discount}
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-300 mb-0.5">
                {plan.discountedPrice}
              </p>
              <p className="text-xs font-normal text-zinc-500 mt-0.5">
                {plan.thenPrice}
              </p>

              {/* Credits */}
              <p className="text-sm font-semibold text-zinc-200 mt-5 mb-5 pb-4 border-b border-zinc-800">
                {plan.credits}
              </p>

              {/* Features */}
              <ul className="flex-1 mb-6 space-y-1">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2.5 text-sm text-zinc-300 py-1.5"
                  >
                    <CheckIcon
                      className={`w-[18px] h-[18px] shrink-0 ${plan.theme.checkStroke}`}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 px-5 text-sm font-semibold text-white rounded-full border-none cursor-pointer transition-all duration-200 hover:opacity-85 active:scale-[0.98] ${plan.theme.btn}`}
              >
                {plan.cta}
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}