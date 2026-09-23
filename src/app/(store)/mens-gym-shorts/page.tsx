import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "Men's Gym Shorts Australia";
const DESCRIPTION =
  "Men's gym shorts from Orca Australia — black, blue, and green training shorts built for workouts and warm weekends. Ships across Australia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/mens-gym-shorts" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/mens-gym-shorts",
  },
};

const FAQS = [
  {
    question: "What gym shorts does Orca sell?",
    answer:
      "Orca Australia sells men's gym shorts in black, blue, and green. Check each product page for sizes and current stock.",
  },
  {
    question: "Are these only for the gym?",
    answer:
      "They're made for training, but many people wear gym shorts for weekends and casual days in warm weather. Choose based on fit and fabric comfort on the product pages.",
  },
  {
    question: "Do you ship gym shorts across Australia?",
    answer:
      "Yes. Orca ships across Australia. Checkout is via Stripe. Contact support@astryks.com for order help.",
  },
];

export default function MensGymShortsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Train"
        title="Men's gym shorts for training and warm weekends"
        intro="Orca Australia gym shorts cover the workout and the rest of a hot day. Solid colours — black, blue, green — in men's sizes S–XXL. Ships across Australia with Stripe checkout."
        ctas={[
          { href: "/products?category=GYM_SHORTS", label: "Shop gym shorts" },
          { href: "/products/black-gym-shorts", label: "Black" },
          { href: "/products/blue-gym-shorts", label: "Blue" },
          { href: "/products/green-gym-shorts", label: "Green" },
        ]}
        sections={[
          {
            heading: "Current gym short colours",
            body: (
              <>
                <p>
                  Browse{" "}
                  <Link href="/products/black-gym-shorts" className="underline hover:text-navy">
                    black gym shorts
                  </Link>
                  ,{" "}
                  <Link href="/products/blue-gym-shorts" className="underline hover:text-navy">
                    blue gym shorts
                  </Link>
                  , and{" "}
                  <Link href="/products/green-gym-shorts" className="underline hover:text-navy">
                    green gym shorts
                  </Link>
                  , or the full{" "}
                  <Link href="/products?category=GYM_SHORTS" className="underline hover:text-navy">
                    gym shorts category
                  </Link>
                  . Prices and availability live on those pages.
                </p>
              </>
            ),
          },
          {
            heading: "Complete the kit",
            body: (
              <>
                <p>
                  Pair with{" "}
                  <Link href="/best-underwear-for-men" className="underline hover:text-navy">
                    breathable boxer briefs
                  </Link>{" "}
                  or grab{" "}
                  <Link href="/mens-swim-shorts" className="underline hover:text-navy">
                    swim shorts
                  </Link>{" "}
                  for beach days. Looking for presents?{" "}
                  <Link href="/gift-ideas-for-men" className="underline hover:text-navy">
                    Gift ideas for men
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Australian shipping",
            body: (
              <>
                <p>
                  We ship across Australia only (as listed). Support:{" "}
                  <a href="mailto:support@astryks.com" className="underline hover:text-navy">
                    support@astryks.com
                  </a>
                  . Orca is part of the Astryks Group and sells online at orcaaustralia.com.
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/mens-swim-shorts", label: "Men's swim shorts" },
          { href: "/gift-ideas-for-men", label: "Gift ideas for men" },
          { href: "/australian-menswear", label: "Australian menswear" },
          { href: "/products?category=GYM_SHORTS", label: "Shop gym shorts" },
        ]}
      />
    </>
  );
}
