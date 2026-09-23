import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "Men's Swim Shorts Australia";
const DESCRIPTION =
  "Men's swim shorts for Australian summers from Orca Australia. Quick-dry styles for beach and pool — ships across Australia. Shop High Seas and Polar Bear prints.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/mens-swim-shorts" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/mens-swim-shorts",
  },
};

const FAQS = [
  {
    question: "Does Orca sell men's swim shorts in Australia?",
    answer:
      "Yes. Orca Australia sells men's swim shorts designed for Australian summers and ships across Australia. Browse the swim shorts category for current styles and sizes.",
  },
  {
    question: "What swim short styles are available?",
    answer:
      "Current styles include High Seas and Polar Bear print swim shorts. Stock and sizes are listed on each product page.",
  },
  {
    question: "Can I buy swim shorts as a gift?",
    answer:
      "Yes — swim shorts are a practical Aussie summer gift. See our gift ideas for men guide for underwear and gym shorts options too.",
  },
];

export default function MensSwimShortsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Swim"
        title="Men's swim shorts for Australian summers"
        intro="Summer shorts Australia shoppers usually want something for the beach, the pool, and the walk back to the car. Orca Australia makes men's swim shorts for that brief — quick-dry fabric, print styles, sizes S–XXL. We ship across Australia."
        ctas={[
          { href: "/products?category=SHORTS", label: "Shop swim shorts" },
          { href: "/products/high-seas-swim-shorts", label: "High Seas" },
          { href: "/products/polar-bear-swim-shorts", label: "Polar Bear" },
        ]}
        sections={[
          {
            heading: "Built for Aussie heat and water",
            body: (
              <>
                <p>
                  Our swim shorts sit alongside gym shorts and Tencel modal boxers in a small, focused range — not a department-store catalogue. Shop the full{" "}
                  <Link href="/products?category=SHORTS" className="underline hover:text-navy">
                    swim shorts category
                  </Link>{" "}
                  or jump to{" "}
                  <Link href="/products/high-seas-swim-shorts" className="underline hover:text-navy">
                    High Seas
                  </Link>{" "}
                  and{" "}
                  <Link href="/products/polar-bear-swim-shorts" className="underline hover:text-navy">
                    Polar Bear
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Pair with underwear and gym shorts",
            body: (
              <>
                <p>
                  For everyday comfort under boardies or after the swim, see{" "}
                  <Link href="/best-underwear-for-men" className="underline hover:text-navy">
                    best underwear for men
                  </Link>
                  . For training and weekends, see{" "}
                  <Link href="/mens-gym-shorts" className="underline hover:text-navy">
                    men&apos;s gym shorts
                  </Link>
                  . Gift shopping?{" "}
                  <Link href="/gift-ideas-for-men" className="underline hover:text-navy">
                    Gift ideas for men
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Ordering and shipping",
            body: (
              <>
                <p>
                  Order online with Stripe checkout. Orca ships across Australia. Questions:{" "}
                  <a href="mailto:support@astryks.com" className="underline hover:text-navy">
                    support@astryks.com
                  </a>{" "}
                  or{" "}
                  <Link href="/contact" className="underline hover:text-navy">
                    contact
                  </Link>
                  . We sell direct online — we don&apos;t list retail stores or international shipping here.
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/mens-gym-shorts", label: "Men's gym shorts" },
          { href: "/gift-ideas-for-men", label: "Gift ideas for men" },
          { href: "/australian-menswear", label: "Australian menswear" },
          { href: "/products?category=SHORTS", label: "Shop swim shorts" },
        ]}
      />
    </>
  );
}
