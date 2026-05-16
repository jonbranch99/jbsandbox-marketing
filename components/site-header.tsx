import Link from "next/link";
import { Logo } from "./logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-slate-900" aria-label="JBSandbox home">
          <Logo className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#"
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          Try MarkSpot
        </Link>
      </div>
    </header>
  );
}
