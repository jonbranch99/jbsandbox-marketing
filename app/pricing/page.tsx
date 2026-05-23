import Link from "next/link";

const MARKSPOT_URL = "https://markspot-app.vercel.app/";

const tiers = [
  {
    name: "Day Pass",
    price: "$1",
    period: "one-time, 24-hour access",
    description:
      "Edit and annotate PDFs for the next 24 hours. No subscription, no auto-renewal.",
    features: [
      "All annotation tools",
      "Unlimited PDFs for 24 hours",
      "One-time charge",
    ],
    cta: "Get a Day Pass",
    href: `${MARKSPOT_URL}?plan=day`,
    featured: false,
    badge: null,
  },
  {
    name: "Monthly",
    price: "$5",
    period: "per month, cancel anytime",
    description: "Unlimited PDF editing every month. Best for regular users.",
    features: [
      "Unlimited PDFs, anytime",
      "All annotation tools",
      "Auto-renews monthly",
      "Cancel anytime",
    ],
    cta: "Start Monthly Plan",
    href: `${MARKSPOT_URL}?plan=monthly`,
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Annual",
    price: "$50",
    period: "per year (~$4.17/month)",
    description: "Save 17% vs. monthly. Best value for everyday use.",
    features: [
      "Everything in Monthly",
      "Auto-renews annually",
      "Cancel anytime",
    ],
    cta: "Start Annual Plan",
    href: `${MARKSPOT_URL}?plan=annual`,
    featured: false,
    badge: "Save $10",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Start with a $1 day pass or save with a subscription. Cancel anytime.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-8 flex flex-col ${
              tier.featured
                ? "border-slate-900 ring-2 ring-slate-900"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                {tier.name}
              </h2>
              {tier.badge && (
                <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {tier.badge}
                </span>
              )}
            </div>
            <p className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              {tier.price}
            </p>
            <p className="text-sm text-slate-500 mt-1">{tier.period}</p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {tier.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              className={`mt-8 inline-block text-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${
                tier.featured
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "border border-slate-300 text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed">
        All subscriptions automatically renew at the end of each billing period
        unless canceled. You can cancel at any time from your account settings.
        See our{" "}
        <Link
          href="/cancellation-policy"
          className="underline hover:text-slate-700"
        >
          Cancellation Policy
        </Link>{" "}
        and{" "}
        <Link href="/refund-policy" className="underline hover:text-slate-700">
          Refund Policy
        </Link>{" "}
        for full details. Day Passes are one-time charges and do not auto-renew.
      </p>
    </div>
  );
}
