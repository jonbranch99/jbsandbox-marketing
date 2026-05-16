const CONTACT_BLOCKS = [
  {
    label: "Customer Support",
    description:
      "For product help, technical issues, and general questions:",
    email: "support@jbsandbox.co",
  },
  {
    label: "Billing & Subscriptions",
    description:
      "For refund requests, billing questions, and cancellation help:",
    email: "billing@jbsandbox.co",
  },
  {
    label: "General Inquiries",
    description: "Press, partnerships, or anything else:",
    email: "hello@jbsandbox.co",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
        Get in Touch
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Need help with MarkSpot, your account, or something else? We're here.
      </p>

      <div className="mt-12 space-y-10">
        {CONTACT_BLOCKS.map((block) => (
          <div key={block.label}>
            <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              {block.label}
            </h2>
            <p className="mt-2 text-slate-600">{block.description}</p>
            <a
              href={`mailto:${block.email}`}
              className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:underline"
            >
              {block.email}
            </a>
          </div>
        ))}

        <div className="pt-8 border-t border-slate-200">
          <h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Response Time
          </h2>
          <p className="mt-2 text-slate-600">
            We respond to all emails within{" "}
            <strong className="text-slate-900">1 business day</strong>. Most
            messages get a reply within a few hours during US business hours.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          JBSandbox is based in New York, NY.
        </div>
      </div>
    </div>
  );
}
