import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "Australian Menswear for Hot Summers";
const DESCRIPTION =
  "Australian menswear from Orca: swim shorts, gym shorts, and Tencel modal boxer briefs made for Aussie summers. Ships across Australia. Secure Stripe checkout.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/australian-menswear" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/australian-menswear",
  },
};

const FAQS = [
  {
    question: "What does Orca Australia sell?",
    answer:
      "Orca Australia sells men's swim shorts, gym shorts, and Tencel modal boxer briefs designed for Australian summers. We ship across Australia.",
  },
  {
    question: "Is Orca a retail store chain?",
    answer:
      "No. Orca Australia sells online at orcaaustralia.com. We do not list retail storefronts, wholesale programmes, or international shipping on this site.",
  },
  {
    question: "Who is behind Orca Australia?",
    answer:
      "Orca Australia is part of the Astryks Group. Customer support is available at support@astryks.com.",
  },
];

export default function AustralianMenswearPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Brand"
        title="Australian menswear built for summer"
        intro="Australian menswear shouldn't ignore the climate. Orca Australia is a focused online brand: men's swim shorts, gym shorts, and Tencel modal boxer briefs for heat, humidity, and weekends outdoors. Ships across Australia."
        ctas={[
          { href: "/products", label: "Shop all products" },
          { href: "/products?category=SHORTS", label: "Swim shorts" },
          { href: "/products?category=BOXER_BRIEF", label: "Boxer briefs" },
        ]}
        sections={[
          {
            heading: "A small range, three clear categories",
            body: (
              <>
                <p>
                  Instead of endless thin product lines, we stick to what we make well:{" "}
                  <Link href="/mens-swim-shorts" className="underline hover:text-navy">
                    men&apos;s swim shorts
                  </Link>
                  ,{" "}
                  <Link href="/mens-gym-shorts" className="underline hover:text-navy">
                    men&apos;s gym shorts
                  </Link>
                  , and{" "}
                  <Link href="/best-underwear-for-men" className="underline hover:text-navy">
                    breathable boxer briefs
                  </Link>{" "}
                  in{" "}
                  <Link href="/tencel-modal" className="underline hover:text-navy">
                    Tencel Modal
                  </Link>
                  . Browse everything at{" "}
                  <Link href="/products" className="underline hover:text-navy">
                    /products
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Summer shorts and everyday comfort",
            body: (
              <>
                <p>
                  Queries like “summer shorts Australia” or “breathable underwear” map to the same need: clothes that cope with heat. Start with category filters —{" "}
                  <Link href="/products?category=SHORTS" className="underline hover:text-navy">
                    SHORTS
                  </Link>
                  ,{" "}
                  <Link href="/products?category=GYM_SHORTS" className="underline hover:text-navy">
                    GYM_SHORTS
                  </Link>
                  ,{" "}
                  <Link href="/products?category=BOXER_BRIEF" className="underline hover:text-navy">
                    BOXER_BRIEF
                  </Link>{" "}
                  — or our{" "}
                  <Link href="/gift-ideas-for-men" className="underline hover:text-navy">
                    gift ideas for men
                  </Link>{" "}
                  hub.
                </p>
              </>
            ),
          },
          {
            heading: "Buying online",
            body: (
              <>
                <p>
                  Checkout uses Stripe. We ship across Australia. Track orders at{" "}
                  <Link href="/track-order" className="underline hover:text-navy">
                    /track-order
                  </Link>
                  ; support via{" "}
                  <Link href="/contact" className="underline hover:text-navy">
                    /contact
                  </Link>{" "}
                  or{" "}
                  <a href="mailto:support@astryks.com" className="underline hover:text-navy">
                    support@astryks.com
                  </a>
                  . Part of the Astryks Group (
                  <a
                    href="https://astryks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-navy"
                  >
                    astryks.com
                  </a>
                  ).
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/gift-ideas-for-men", label: "Gift ideas for men" },
          { href: "/best-underwear-for-men", label: "Best underwear for men" },
          { href: "/tencel-modal", label: "Tencel Modal" },
          { href: "/mens-swim-shorts", label: "Men's swim shorts" },
          { href: "/mens-gym-shorts", label: "Men's gym shorts" },
        ]}
      />
    </>
  );
}
