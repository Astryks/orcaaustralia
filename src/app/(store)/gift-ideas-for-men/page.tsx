import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "Gift Ideas for Men in Australia";
const DESCRIPTION =
  "Practical Aussie summer gift ideas for men: swim shorts, gym shorts, and Tencel modal boxer briefs from Orca Australia. Ships across Australia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gift-ideas-for-men" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/gift-ideas-for-men",
  },
};

const FAQS = [
  {
    question: "What makes a good summer gift for men in Australia?",
    answer:
      "Something he'll actually wear in the heat: breathable underwear, swim shorts for the beach or pool, and gym shorts for training. Orca focuses on those three categories and ships across Australia.",
  },
  {
    question: "Does Orca Australia ship nationally?",
    answer:
      "Yes. Orca Australia ships across Australia. Checkout is secured with Stripe. For order questions, email support@astryks.com or use the contact page.",
  },
  {
    question: "What should I buy if I'm not sure of his size?",
    answer:
      "Check the size options on each product page (S–XXL). If something doesn't fit, contact support@astryks.com — we're happy to help with exchanges or returns where we can.",
  },
];

export default function GiftIdeasForMenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Gifts"
        title="Gift ideas for men (Aussie summer edition)"
        intro="Looking for gifts for him that suit Australian summers? Skip the novelty socks. Orca Australia makes men's swim shorts, gym shorts, and Tencel modal boxer briefs — practical pieces he'll use from the beach to the gym to everyday wear. We ship across Australia."
        ctas={[
          { href: "/products", label: "Shop all products" },
          { href: "/products?category=BOXER_BRIEF", label: "Shop boxer briefs" },
          { href: "/products?category=SHORTS", label: "Shop swim shorts" },
        ]}
        sections={[
          {
            heading: "Boxer briefs he'll actually keep wearing",
            body: (
              <>
                <p>
                  Underwear is a low-risk, high-use gift. Our{" "}
                  <Link href="/products?category=BOXER_BRIEF" className="underline hover:text-navy">
                    Tencel modal boxer briefs
                  </Link>{" "}
                  are soft, breathable, and built for warm weather — a better everyday upgrade than another gadget that gathers dust. See also our guide to{" "}
                  <Link href="/best-underwear-for-men" className="underline hover:text-navy">
                    best underwear for men
                  </Link>{" "}
                  and what{" "}
                  <Link href="/tencel-modal" className="underline hover:text-navy">
                    Tencel Modal
                  </Link>{" "}
                  is.
                </p>
              </>
            ),
          },
          {
            heading: "Swim shorts for beach and pool days",
            body: (
              <>
                <p>
                  For coastal weekends or backyard BBQs by the pool,{" "}
                  <Link href="/products?category=SHORTS" className="underline hover:text-navy">
                    men&apos;s swim shorts
                  </Link>{" "}
                  are an easy win. Browse styles like{" "}
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
            heading: "Gym shorts for training and weekends",
            body: (
              <>
                <p>
                  If he trains or just lives in shorts,{" "}
                  <Link href="/products?category=GYM_SHORTS" className="underline hover:text-navy">
                    gym shorts
                  </Link>{" "}
                  in black, blue, or green cover workouts and casual days. More detail on our{" "}
                  <Link href="/mens-gym-shorts" className="underline hover:text-navy">
                    men&apos;s gym shorts
                  </Link>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "How to order",
            body: (
              <>
                <p>
                  Shop online at{" "}
                  <Link href="/products" className="underline hover:text-navy">
                    orcaaustralia.com/products
                  </Link>
                  , check out securely with Stripe, and we ship across Australia. Support:{" "}
                  <a href="mailto:support@astryks.com" className="underline hover:text-navy">
                    support@astryks.com
                  </a>
                  . Orca Australia is part of the Astryks Group — we sell direct online (no retail storefronts listed here).
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/best-underwear-for-men", label: "Best underwear for men" },
          { href: "/tencel-modal", label: "What is Tencel Modal?" },
          { href: "/mens-swim-shorts", label: "Men's swim shorts" },
          { href: "/mens-gym-shorts", label: "Men's gym shorts" },
          { href: "/australian-menswear", label: "Australian menswear" },
        ]}
      />
    </>
  );
}
