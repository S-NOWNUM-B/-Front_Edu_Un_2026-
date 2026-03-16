# Lab 8.2 - SSR User Dashboard

## What is implemented

- `pages/dashboard.tsx`: SSR dashboard using `getServerSideProps`.
- `pages/about.tsx`: SSG page using `getStaticProps` + ISR (`revalidate: 60`).
- `pages/about-ssr.tsx`: SSR comparison page using `getServerSideProps`.
- `lib/api.ts`: mock services for user, notifications, and analytics.

## SSR vs SSG comparison

- First load speed: SSG is faster because HTML is pre-rendered at build time.
- Data freshness: SSR is always fresh because data is fetched on each request.
- Server load: SSR adds more server work because each request runs data fetching.
- Best fit in this lab:
  - SSR: `/dashboard`, `/about-ssr` (request-time data)
  - SSG + ISR: `/about` (mostly static content)

## How to run

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` and navigate to `/dashboard`, `/about`, and `/about-ssr`.
