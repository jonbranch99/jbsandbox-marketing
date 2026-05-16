# JBSandbox Marketing Site

The marketing site for JBSandbox and its flagship product, MarkSpot.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deploys cleanly to Vercel.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  page.tsx                  Home
  pricing/page.tsx
  about/page.tsx
  contact/page.tsx
  faq/page.tsx
  terms/page.tsx
  privacy/page.tsx
  refund-policy/page.tsx
  cancellation-policy/page.tsx
  layout.tsx                Root layout (header + footer wrapping every page)
  globals.css               Tailwind base + a tiny bit of CSS
components/
  logo.tsx                  Inline-SVG JBSandbox logo (Option D — brackets + tiles + wordmark)
  site-header.tsx
  site-footer.tsx
  policy-page.tsx           Shared layout for Terms / Privacy / Refund / Cancellation
```

## Before launch — placeholders to replace

Several spots have `[INSERT ...]` placeholders that need real values:

- **`[INSERT DATE]`** — appears in all four policy pages. Replace with the current date (e.g., `May 14, 2026`).
- **`[INSERT YOUR STATE]`** — once in `app/terms/page.tsx`, governing-law clause.
- **`[INSERT CITY, STATE]`** — once in `app/contact/page.tsx`.
- **`[MarkSpot screenshot]`** — placeholder box on the homepage hero. Drop a real product screenshot into `public/` and replace the div in `app/page.tsx`.
- **CTA buttons** — every "Try MarkSpot" / "Get a Day Pass" / "Start Monthly Plan" / "Start Annual Plan" button currently links to `#`. Once the MarkSpot app is deployed (e.g., at `app.jbsandbox.co`), update those `href`s.

## Deploy

1. Push the repo to GitHub.
2. Go to https://vercel.com → New Project → Import the repo → click Deploy. No configuration needed.
3. Once deployed, add the custom domain `jbsandbox.co` in Vercel → Project Settings → Domains.
4. At your domain registrar, update DNS:
   - **A record** for `jbsandbox.co` → `76.76.21.21` (Vercel's IP)
   - **CNAME** for `www.jbsandbox.co` → `cname.vercel-dns.com`
   - **Important:** do NOT touch your MX records — those are what route email to your Google Workspace inboxes (`jon@jbsandbox.co`, `support@jbsandbox.co`, etc.). Only change A and CNAME records.
5. DNS takes 1–24 hours to propagate. Then submit the URL to Stripe.

## Editing content

All copy lives inline in the page files. To edit:

- **Homepage hero** — `app/page.tsx`
- **Pricing tiers** — top of `app/pricing/page.tsx` (the `tiers` array)
- **FAQ questions** — top of `app/faq/page.tsx` (the `FAQS` array)
- **Policy pages** — the `app/{policy}/page.tsx` files use the `PolicyPage` and `PolicyH2` components from `components/policy-page.tsx`.

## Stack notes

- **Next.js 14 App Router** — file-system routing, server components by default.
- **Tailwind CSS** — utility-first styling. No CSS modules, no styled-components.
- **No external UI library** — uses Tailwind directly. Easy to swap in shadcn/ui later if you want pre-built components.
- **Inter font** — loaded via `next/font/google` for zero CLS and self-hosted serving.
- **Inline-SVG logo** — `components/logo.tsx`. Uses `currentColor` so it inherits text color.
