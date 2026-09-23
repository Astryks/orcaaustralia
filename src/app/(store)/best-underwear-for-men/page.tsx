import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "Best Underwear for Men — Breathable Boxer Briefs";
const DESCRIPTION =
  "Looking for the best underwear for men in Australian summers? Orca's Tencel modal boxer briefs are soft, breathable, and built for everyday comfort. Ships across Australia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-underwear-for-men" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/best-underwear-for-men",
  },
};

const FAQS = [
  {
    question: "What underwear is best for hot Australian summers?",
    answer:
      "Breathable, moisture-wicking fabrics help more than thick cotton in heat and humidity. Orca Australia makes Tencel modal boxer briefs designed for everyday comfort in warm weather.",
  },
  {
    question: "Are boxer briefs better than boxers or briefs?",
    answer:
      "Boxer briefs combine coverage with support. Preference is personal — Orca focuses on the boxer brief silhouette with Tencel Modal fabric rather than claiming one cut suits everyone.",
  },
  {
    question: "What styles of men's underwear does Orca sell?",
    answer:
      "Orca currently sells Tencel modal boxer briefs, including Lock-In Pouch and Classic Lining styles. Browse the boxer brief category for current options and sizes.",
  },
];

export default function BestUnderwearForMenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Underwear"
        title="Best underwear for men: breathable boxer briefs for Aussie summers"
        intro="If you're hunting for the best underwear for men — especially breathable options for Australian heat — start with fabric and fit, not branding hype. Orca Australia makes Tencel modal boxer briefs for everyday comfort. We ship across Australia."
        ctas={[
          { href: "/products?category=BOXER_BRIEF", label: "Shop boxer briefs" },
          { href: "/products/boxer-briefs-lockin", label: "Lock-In Pouch" },
          { href: "/products/boxer-briefs-classic", label: "Classic Lining" },
        ]}
        sections={[
          {
            heading: "What “best” actually means day to day",
            body: (
              <>
                <p>
                  Comfortable men&apos;s underwear usually comes down to soft fabric that breathes, a cut that stays put, and sizes that match how you actually wear clothes. We don&apos;t invent awards — we make{" "}
                  <Link href="/products?category=BOXER_BRIEF" className="underline hover:text-navy">
                    modal boxer briefs
                  </Link>{" "}
                  aimed at warm-weather wear and let you judge from the product pages.
                </p>
              </>
            ),
          },
          {
            heading: "Why Tencel Modal for boxer briefs",
            body: (
              <>
                <p>
                  TENCEL™ Modal is a soft, breathable fibre often chosen for next-to-skin clothing. Orca uses it in our boxers because it feels smooth and suits Australian summers better than heavy, clingy fabrics. Read the full explainer on{" "}
                  <Link href="/tencel-modal" className="underline hover:text-navy">
                    Tencel Modal
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Current Orca boxer brief styles",
            body: (
              <>
                <p>
                  <Link href="/products/boxer-briefs-lockin" className="underline hover:text-navy">
                    Lock-In Pouch
                  </Link>{" "}
                  and{" "}
                  <Link href="/products/boxer-briefs-classic" className="underline hover:text-navy">
                    Classic Lining
                  </Link>{" "}
                  boxer briefs are available in standard sizes (S–XXL). Prices and stock update on each product page — check there before buying.
                </p>
              </>
            ),
          },
          {
            heading: "Gifting underwear",
            body: (
              <>
                <p>
                  Underwear is a practical gift when you know his size. See{" "}
                  <Link href="/gift-ideas-for-men" className="underline hover:text-navy">
                    gift ideas for men
                  </Link>{" "}
                  for swim and gym shorts as alternatives, or pair them together.
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/tencel-modal", label: "What is Tencel Modal?" },
          { href: "/gift-ideas-for-men", label: "Gift ideas for men" },
          { href: "/australian-menswear", label: "Australian menswear" },
          { href: "/products?category=BOXER_BRIEF", label: "Shop boxer briefs" },
        ]}
      />
    </>
  );
}
