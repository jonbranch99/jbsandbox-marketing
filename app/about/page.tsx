export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
        About JBSandbox
      </h1>
      <div className="mt-10 space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          JBSandbox is a small studio building simple, browser-based
          productivity tools. We treat each app like an experiment — start
          small, ship fast, keep what works.
        </p>
        <p>
          The first product out of the sandbox is{" "}
          <strong>MarkSpot</strong>, a web-based PDF editor that lets you
          upload, annotate, and save PDFs without installing desktop software —
          a lightweight alternative to Adobe Acrobat.
        </p>
        <p>
          From here, the plan is to keep building lightweight, single-purpose
          productivity apps that handle common everyday tasks well, without the
          bloat of all-in-one software suites.
        </p>
      </div>
    </div>
  );
}
