import type { ReactNode } from "react";

export function PolicyPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>
      <p className="mt-2 text-sm italic text-slate-500">
        Last updated: {lastUpdated}
      </p>
      <div className="mt-10 space-y-5 text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function PolicyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-slate-900 mt-10">{children}</h2>
  );
}
