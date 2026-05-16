const FAQS = [
  {
    q: "What is MarkSpot?",
    a: "MarkSpot is a browser-based PDF editor. You upload a PDF, add annotations like highlights, notes, and shapes, then save the marked-up file back to your device. No software install required.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. MarkSpot runs entirely in your web browser. Works on Chrome, Safari, Firefox, and Edge on Mac, Windows, and Linux.",
  },
  {
    q: "How is MarkSpot different from Adobe Acrobat?",
    a: "MarkSpot focuses on the most common PDF tasks: annotating, marking up, and saving. It's faster to start, costs a fraction of Acrobat, and works without an install. If you need advanced features like OCR or form-building, Acrobat is still the right tool — MarkSpot is for everyone who just needs to annotate.",
  },
  {
    q: "What's the difference between Day Pass, Monthly, and Annual?",
    a: "Day Pass is a $1 one-time charge for 24-hour access — no subscription. Monthly is $5/month, auto-renewing until you cancel. Annual is $50/year (saves $10 vs. monthly), also auto-renewing. All plans include the same features.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly and Annual subscriptions can be canceled from your account settings at any time. Cancellations take effect at the end of your current billing period. Day Passes can't be canceled — they expire automatically after 24 hours.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 7-day refund window on new monthly subscriptions and 14 days on new annual subscriptions if MarkSpot doesn't work as described. Day Passes are non-refundable. See our Refund Policy for full details.",
  },
  {
    q: "Where is my data stored?",
    a: "Uploaded PDFs are stored securely on our servers and are only accessible to you. We never view your content or use it to train AI models. You can delete your uploads at any time, and deleted files are permanently removed within 30 days.",
  },
  {
    q: "Is there a free trial?",
    a: "Not currently. But the $1 Day Pass is a low-risk way to try the full product before committing to a subscription.",
  },
  {
    q: "Do you have an iOS or Android app?",
    a: "MarkSpot works in mobile browsers today. Native iOS and Android apps are on our roadmap but not yet released.",
  },
  {
    q: "Who is behind MarkSpot?",
    a: "JBSandbox — a small studio building simple productivity tools for the web. MarkSpot is our flagship product, with more apps in development.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
        FAQ
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Common questions about MarkSpot and JBSandbox.
      </p>
      <div className="mt-12 space-y-8">
        {FAQS.map((item) => (
          <div key={item.q} className="border-b border-slate-200 pb-8">
            <h2 className="text-lg font-semibold text-slate-900">{item.q}</h2>
            <p className="mt-2 text-slate-700 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
