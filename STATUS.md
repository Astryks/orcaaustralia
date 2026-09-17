# Orca Australia — Status

_Last updated: 2026-09-17 (AEST). Single source of truth for “where things stand.” Longer narrative history lives in `PROGRESS.md`._

## Repo

- **GitHub:** https://github.com/Siddharth09/orcaaustralia  
- **Default branch:** `master` @ `68f4081` (PR #1 merged — security H1/H2 + mediums)  
- **Live:** orcaaustralia.com / Vercel project `orca-australia`

## Done on master (2026-09-17)

| ID | Item | State |
|----|------|--------|
| H1 | Order lookup over-disclosure | Fixed — returns only matching order + rate limit |
| H2 | Stock oversell | Fixed — soft-hold at checkout, restore on session expired, atomic legacy path |
| M | Product.active filters | Fixed |
| M | Rate limits (lookup/contact/magic-link/admin/checkout) | Fixed (in-memory) |
| M | Admin password hashing + uniform errors | Fixed |
| M | Upload magic-byte MIME sniff | Fixed |
| M | Order email URL safety | Fixed |
| M | Magic-link cooldown atomic claim | Fixed |
| M | CUSTOMER_SESSION_SECRET ≥32 required | Fixed in code — **must set on Vercel** |

## Sid — do these two ops (only you)

1. **Vercel** → Project env → add `CUSTOMER_SESSION_SECRET` = a random string ≥32 characters (and redeploy if needed).  
2. **Stripe** → Webhook for this site → enable event `checkout.session.expired` (keep `checkout.session.completed`).

Nothing else required for this security pass. No open PR for Orca.

## Known / deferred

- Soft-held stock on abandoned checkout stays reserved until Stripe session expiry (~24h).  
- Pre-existing `LayoutProps` tsc noise in `layout.tsx` (untouched).  
- In-memory rate limits reset per serverless instance (good enough; Upstash later if needed).

## Related projects (elsewhere)

| Project | Repo | Notes |
|---------|------|--------|
| Sloane | Siddharth09/Sloane | Money-path fixes on `main`; residuals: Stripe ledger/email ordering, ad-studio video double-spend, billing `?token=` |
| Astryks | Siddharth09/Astryks | Audit how-to pending land |
| BeckyTheBat | TBD (not public under Siddharth09) | Waiting on Audit how-to / repo URL |
