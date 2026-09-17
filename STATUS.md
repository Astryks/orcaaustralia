# Orca Australia — Status

_Last updated: 2026-09-17 (AEST). Single source of truth for “where things stand.” Longer narrative history lives in `PROGRESS.md`._

## Repo

- **GitHub:** https://github.com/Siddharth09/orcaaustralia  
- **Default branch:** `master` (security H1/H2 + mediums merged via PR #1; STATUS.md on master)  
- **Live:** orcaaustralia.com / Vercel `orca-australia`

## Done on master (2026-09-17)

| ID | Item | State |
|----|------|--------|
| H1 | Order lookup over-disclosure | Fixed — single matching order + rate limit |
| H2 | Stock oversell | Fixed — soft-hold at checkout, restore on `checkout.session.expired`, atomic legacy path |
| M | Product.active, rate limits, admin hash, upload sniff, email URL safety, magic-link cooldown, CUSTOMER_SESSION_SECRET≥32 in code | Fixed |

## Ops (Sid confirmed 2026-09-17)

| Step | State |
|------|--------|
| Vercel deploy after merge | Done (Sid) |
| `CUSTOMER_SESSION_SECRET` on Vercel | Assumed set with deploy — re-check in Vercel env if customer sessions misbehave |
| Stripe webhook `https://orcaaustralia.com/api/webhooks/stripe` includes `checkout.session.completed` **and** `checkout.session.expired` | Done (Sid) |

## Known / deferred

- Soft-held stock on abandoned checkout stays reserved until Stripe session expiry (~24h).  
- In-memory rate limits reset per serverless instance.  
- Pre-existing `LayoutProps` tsc noise in `layout.tsx` (untouched).

## Related projects

| Project | Notes |
|---------|--------|
| Sloane | Residuals: Stripe ledger/email ordering, ad-studio video double-spend, billing `?token=` |
| Astryks / BeckyTheBat | Queued for Audit how-tos |
