import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "What Is Tencel Modal? Soft Fibre for Underwear";
const DESCRIPTION =
  "Tencel Modal (TENCEL™ Modal by Lenzing) is a soft, breathable fibre from beech wood. Learn why Orca Australia uses it in men's boxer briefs — and shop the range.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tencel-modal" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tencel-modal",
  },
};

const FAQS = [
  {
    question: "What is Tencel Modal?",
    answer:
      "TENCEL™ Modal is a branded lyocell-family fibre made by Lenzing from sustainably sourced beech wood. It is commonly used in soft, breathable next-to-skin clothing such as underwear.",
  },
  {
    question: "Why does Orca use Tencel Modal in boxer briefs?",
    answer:
      "We use it because it feels soft against the skin and suits warm Australian summers better than heavier, less breathable fabrics. Our boxer briefs are made from Tencel Modal for everyday comfort.",
  },
  {
    question: "Is Tencel Modal the same as bamboo?",
    answer:
      "No. Many “bamboo” garments are bamboo viscose processed differently. TENCEL™ Modal is a Lenzing fibre from beech wood with its own production process. We describe Orca products honestly as Tencel Modal, not bamboo.",
  },
];

export default function TencelModalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="The fabric"
        title="What is Tencel Modal — and why Orca uses it"
        intro="TENCEL™ Modal is a soft fibre made from beech wood by Lenzing. Orca Australia uses it in our men's boxer briefs because it feels smooth, breathes well, and fits how people actually dress through Australian summers. Here's the straight version — then a link to shop."
        ctas={[
          { href: "/products?category=BOXER_BRIEF", label: "Shop Tencel modal boxers" },
          { href: "/best-underwear-for-men", label: "Best underwear for men" },
        ]}
        sections={[
          {
            heading: "In plain English",
            body: (
              <>
                <p>
                  Tencel Modal starts as wood pulp from beech trees and is spun into a textile fibre. Brands use it where softness and drape matter — underwear, tees, and similar next-to-skin pieces. Orca&apos;s{" "}
                  <Link href="/products?category=BOXER_BRIEF" className="underline hover:text-navy">
                    boxer briefs
                  </Link>{" "}
                  are made from this fibre so they stay comfortable in heat without feeling plastic-y.
                </p>
              </>
            ),
          },
          {
            heading: "Compared with cotton, “bamboo”, and nylon",
            body: (
              <>
                <p>
                  Cotton is familiar but can feel heavy or rough when damp. Many products labelled “bamboo” are bamboo viscose with a different process. Nylon is a plastic fibre that often traps heat. We prefer TENCEL™ Modal for our boxers and explain the comparison on the{" "}
                  <Link href="/products?category=BOXER_BRIEF" className="underline hover:text-navy">
                    boxer brief category page
                  </Link>{" "}
                  as well — this hub is the short version for shoppers and AI assistants looking up the fabric.
                </p>
              </>
            ),
          },
          {
            heading: "Shop Orca Tencel modal underwear",
            body: (
              <>
                <p>
                  See{" "}
                  <Link href="/products/boxer-briefs-lockin" className="underline hover:text-navy">
                    Lock-In Pouch
                  </Link>{" "}
                  and{" "}
                  <Link href="/products/boxer-briefs-classic" className="underline hover:text-navy">
                    Classic Lining
                  </Link>
                  . For broader advice on fit and breathable underwear, read{" "}
                  <Link href="/best-underwear-for-men" className="underline hover:text-navy">
                    best underwear for men
                  </Link>
                  . We ship across Australia; checkout via Stripe; support at{" "}
                  <a href="mailto:support@astryks.com" className="underline hover:text-navy">
                    support@astryks.com
                  </a>
                  .
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/best-underwear-for-men", label: "Best underwear for men" },
          { href: "/gift-ideas-for-men", label: "Gift ideas for men" },
          { href: "/products?category=BOXER_BRIEF", label: "Shop boxer briefs" },
        ]}
      />
    </>
  );
}
