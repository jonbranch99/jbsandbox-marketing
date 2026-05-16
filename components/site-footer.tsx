import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="font-semibold text-slate-900">JBSandbox</p>
            <p className="mt-1 text-slate-500">
              Simple browser-based productivity tools.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-6 border-t border-slate-200">
          <p>
            <a
              href="mailto:support@jbsandbox.co"
              className="hover:text-slate-700"
            >
              support@jbsandbox.co
            </a>
          </p>
          <p>© {new Date().getFullYear()} JBSandbox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
