import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
          Simplicity by Design
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
          JBSandbox builds simple browser-based productivity tools. Each app
          does one job well, with no bloat and no installs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="#"
            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Try MarkSpot
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors"
          >
            See pricing →
          </Link>
        </div>
      </section>

      {/* Product feature - MarkSpot */}
      <section className="mx-auto max-w-5xl px-6 py-16 border-t border-slate-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              First Product
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              MarkSpot
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              A web-based PDF editor that lets you upload, annotate, and save
              PDFs without installing desktop software. A lightweight
              alternative to Adobe Acrobat.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">✓</span>
                <span>Upload any PDF in seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">✓</span>
                <span>Add highlights, notes, and shapes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">✓</span>
                <span>Save and download the marked-up file</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">✓</span>
                <span>Works in any modern browser</span>
              </li>
            </ul>
            <Link
              href="/pricing"
              className="mt-8 inline-block rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              See pricing
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 aspect-[4/3] flex items-center justify-center text-slate-400 text-sm">
            [MarkSpot screenshot]
          </div>
        </div>
      </section>

      {/* About the studio */}
      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-slate-200">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          About the Studio
        </p>
        <p className="mt-4 text-lg text-slate-700 leading-relaxed">
          JBSandbox is a small studio focused on shipping practical productivity
          tools for the web. The idea behind the name is straightforward: treat
          each app like an experiment — start small, ship fast, keep what
          works. The first product out of the sandbox is MarkSpot. From here,
          the plan is to keep building lightweight, single-purpose productivity
          apps that solve common, everyday tasks.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-block text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors"
        >
          Read more about JBSandbox →
        </Link>
      </section>
    </div>
  );
}
