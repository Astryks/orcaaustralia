-- Deduplicate any concurrent REQUESTED/APPROVED rows for the same orderItemId
-- (keep the oldest). Extra REQUESTED rows are denied so admins aren't surprised.
WITH ranked AS (
  SELECT
    id,
    ROW_NUMBER() OVER (
      PARTITION BY "orderItemId"
      ORDER BY "createdAt" ASC, id ASC
    ) AS rn
  FROM "RefundRequest"
  WHERE "orderItemId" IS NOT NULL
    AND status IN ('REQUESTED', 'APPROVED')
)
UPDATE "RefundRequest" AS r
SET
  status = 'DENIED',
  "adminNote" = COALESCE(
    r."adminNote",
    'Auto-denied: duplicate request closed by unique-pending migration'
  ),
  "updatedAt" = CURRENT_TIMESTAMP
FROM ranked
WHERE r.id = ranked.id
  AND ranked.rn > 1
  AND r.status = 'REQUESTED';

-- Partial unique: at most one open/approved refund per order line item.
-- DENIED rows are excluded so a customer can re-request after denial.
CREATE UNIQUE INDEX "RefundRequest_orderItemId_open_key"
ON "RefundRequest" ("orderItemId")
WHERE "orderItemId" IS NOT NULL
  AND status IN ('REQUESTED', 'APPROVED');
