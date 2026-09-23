# Orca Australia — Status

_Last updated: 2026-09-17 (AEST). Single source of truth for “where things stand.” Longer narrative history lives in `PROGRESS.md`._

## Organic discovery

- FAQPage JSON-LD is already shipped in the root layout; public `indexnow-key.txt` is available for optional Bing IndexNow submission later.

## Repo

- **GitHub:** https://github.com/Astryks/orcaaustralia  
- **Default branch:** `master`  
- **Live:** orcaaustralia.com / Vercel `orca-australia`

## Done on master (2026-09-17)

| ID | Item | State |
|----|------|--------|
| H1 | Order lookup over-disclosure | Fixed — single matching order + rate limit |
| H2 | Stock oversell | Fixed — soft-hold at checkout, restore on `checkout.session.expired`, atomic legacy path |
| M | Product.active, rate limits, admin hash, upload sniff, email URL safety, magic-link cooldown, CUSTOMER_SESSION_SECRET≥32 in code | Fixed |
| M | Refund double-request TOCTOU | Fixed — partial unique on `orderItemId` for REQUESTED/APPROVED; create catches P2002; approve closes sibling duplicates |
| L | Checkout line / heldItems caps | Fixed — max 20 lines; Stripe `heldItems` metadata ≤500 chars |
| L | ADMIN_SESSION_SECRET ≥32 | Fixed — required like CUSTOMER; no `?? ""`; `.env.example` updated |

## Ops (Sid confirmed 2026-09-17)

| Step | State |
|------|--------|
| Vercel deploy after merge | Done (Sid) — re-deploy after this refund/session PR |
| `CUSTOMER_SESSION_SECRET` on Vercel | Assumed set with deploy — re-check in Vercel env if customer sessions misbehave |
| `ADMIN_SESSION_SECRET` on Vercel | **Must be ≥32 chars** (same as customer). Empty/short now fails hard at admin session read |
| Stripe webhook `https://orcaaustralia.com/api/webhooks/stripe` includes `checkout.session.completed` **and** `checkout.session.expired` | Done (Sid) |
| Prisma migrate | Run `prisma migrate deploy` so `RefundRequest_orderItemId_open_key` lands before relying on atomic refund create |

## Known / deferred

- Soft-held stock on abandoned checkout stays reserved until Stripe session expiry (~24h).  
- **Redis / shared rate limits:** Deferred. Current in-memory `rateLimit` resets per serverless instance; fine for low traffic. Revisit if abuse or multi-region scaling needs a shared store (Upstash Redis, etc.). Do not implement unless that becomes a real ops need.  
- Pre-existing `LayoutProps` tsc noise in `layout.tsx` (untouched).

## Related projects

| Project | Notes |
|---------|--------|
| Sloane | Residuals: Stripe ledger/email ordering, ad-studio video double-spend, billing `?token=` |
| Astryks / BeckyTheBat | Queued for Audit how-tos |
