import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "Nylon vs Cotton vs Modal vs Tencel Modal";
const DESCRIPTION =
  "Plain-English fabric guide: nylon, cotton, modal, and TENCEL™ Modal compared for breathability, stretch, quick-dry, softness, and durability — plus how Orca uses them.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fabric-guide" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/fabric-guide",
  },
};

const FAQS = [
  {
    question: "What is the difference between modal and Tencel Modal?",
    answer:
      "Modal is a soft regenerated cellulose fibre often made from beech pulp. TENCEL™ Modal is Lenzing’s branded modal fibre — same fibre family, with Lenzing’s production standards and trademark. Orca uses Tencel Modal in boxer briefs.",
  },
  {
    question: "Is nylon or cotton better for swim shorts?",
    answer:
      "For swimming, synthetics such as nylon (and polyester blends) usually beat cotton: they dry faster, hold shape in water, and resist sagging when wet. Cotton soaks up water and stays heavy. Orca swim shorts are lightweight, quick-dry swim fabric — suited to beach and pool, not cotton day shorts.",
  },
  {
    question: "Why does Orca use Tencel Modal for underwear?",
    answer:
      "TENCEL™ Modal (Lenzing, from beech pulp) is soft, breathable, and comfortable next to skin — a better everyday underwear fibre for warm Australian summers than heavy cotton or heat-trapping nylon. Orca’s boxer briefs are cut from Tencel Modal.",
  },
  {
    question: "Does Orca make nylon underwear or cotton swim shorts?",
    answer:
      "No. Orca’s published range is men’s swim shorts and gym shorts (lightweight / quick-dry / breathable stretch fabrics as described on product pages) and Tencel modal boxer briefs. We don’t claim cotton swim shorts or nylon underwear in our current lineup.",
  },
];

export default function FabricGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Fabric guide"
        title="Nylon vs cotton vs modal vs Tencel Modal"
        intro="Choosing fabric for swim shorts, gym shorts, or underwear comes down to how each fibre handles heat, water, stretch, and skin contact. Here’s a straight comparison — then how Orca Australia actually uses fabrics today (no invented materials)."
        ctas={[
          { href: "/products?category=BOXER_BRIEF", label: "Shop boxer briefs" },
          { href: "/products?category=SHORTS", label: "Shop swim shorts" },
          { href: "/products?category=GYM_SHORTS", label: "Shop gym shorts" },
        ]}
        sections={[
          {
            heading: "Quick comparison",
            body: (
              <>
                <div className="overflow-x-auto rounded-lg border border-black/10">
                  <table className="w-full min-w-[36rem] text-left text-sm">
                    <thead className="bg-sand text-navy">
                      <tr>
                        <th className="px-3 py-2 font-semibold">Fibre</th>
                        <th className="px-3 py-2 font-semibold">Breathability</th>
                        <th className="px-3 py-2 font-semibold">Quick-dry</th>
                        <th className="px-3 py-2 font-semibold">Softness</th>
                        <th className="px-3 py-2 font-semibold">Best use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10 text-navy/75">
                      <tr>
                        <td className="px-3 py-2 font-medium text-navy">Nylon</td>
                        <td className="px-3 py-2">Moderate (can trap heat)</td>
                        <td className="px-3 py-2">Strong</td>
                        <td className="px-3 py-2">Smooth, less “cottony”</td>
                        <td className="px-3 py-2">Swim / performance shells</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-navy">Cotton</td>
                        <td className="px-3 py-2">Good when dry</td>
                        <td className="px-3 py-2">Poor when soaked</td>
                        <td className="px-3 py-2">Familiar; can roughen</td>
                        <td className="px-3 py-2">Casual wear, not swim</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-navy">Modal</td>
                        <td className="px-3 py-2">Good</td>
                        <td className="px-3 py-2">Better than cotton</td>
                        <td className="px-3 py-2">Very soft</td>
                        <td className="px-3 py-2">Underwear, next-to-skin</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-navy">Tencel Modal</td>
                        <td className="px-3 py-2">Good</td>
                        <td className="px-3 py-2">Better than cotton</td>
                        <td className="px-3 py-2">Very soft, smooth</td>
                        <td className="px-3 py-2">Orca boxer briefs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-navy/60">
                  Stretch and durability depend on the knit or weave and any elastane blend — not the fibre name alone.
                </p>
              </>
            ),
          },
          {
            heading: "Nylon (in plain English)",
            body: (
              <>
                <p>
                  Nylon is a synthetic (plastic-based) fibre. It is strong, light, and usually dries much faster than cotton — which is why nylon and similar synthetics show up so often in swimwear and outer performance pieces. Downsides for all-day underwear: it can feel warmer against skin and hold onto heat or odour more than soft cellulosic fibres.
                </p>
              </>
            ),
          },
          {
            heading: "Cotton",
            body: (
              <>
                <p>
                  Cotton is a natural plant fibre most people know. Dry cotton breathes reasonably well, but once wet it soaks and stays heavy — a poor choice for swim shorts. Over many washes it can feel rougher or lose shape. Fine for some casual clothes; not ideal for beach swimming or high-sweat next-to-skin pieces in humid summers.
                </p>
              </>
            ),
          },
          {
            heading: "Modal vs Tencel Modal",
            body: (
              <>
                <p>
                  Modal is a regenerated cellulose fibre, commonly produced from beech wood pulp. It is prized for softness and drape in underwear and similar garments.{" "}
                  <strong className="text-navy">TENCEL™ Modal</strong> is Lenzing&apos;s branded modal fibre — made from beech pulp under Lenzing&apos;s process and trademark. When we say Tencel Modal on Orca products, we mean that Lenzing fibre family, not a generic marketing nickname for cotton.
                </p>
                <p>
                  Read the shorter explainer on{" "}
                  <Link href="/tencel-modal" className="underline hover:text-navy">
                    what Tencel Modal is
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "How Orca uses fabrics (honest map)",
            body: (
              <>
                <p>
                  <strong className="text-navy">Boxer briefs:</strong> Orca uses Tencel Modal for soft, breathable everyday underwear. Shop{" "}
                  <Link href="/products?category=BOXER_BRIEF" className="underline hover:text-navy">
                    boxer briefs
                  </Link>{" "}
                  or see{" "}
                  <Link href="/best-underwear-for-men" className="underline hover:text-navy">
                    best underwear for men
                  </Link>
                  .
                </p>
                <p>
                  <strong className="text-navy">Swim shorts:</strong> Described as lightweight, quick-dry swim fabric — built for water and Aussie summers, not cotton boardies. Shop{" "}
                  <Link href="/products?category=SHORTS" className="underline hover:text-navy">
                    swim shorts
                  </Link>{" "}
                  or{" "}
                  <Link href="/mens-swim-shorts" className="underline hover:text-navy">
                    men&apos;s swim shorts
                  </Link>
                  . Prefer a shorter cut? See{" "}
                  <Link href="/swim-short-length" className="underline hover:text-navy">
                    swim short length
                  </Link>
                  .
                </p>
                <p>
                  <strong className="text-navy">Gym shorts:</strong> Lightweight, breathable fabric with stretch for training and warm-weather casual wear. Shop{" "}
                  <Link href="/products?category=GYM_SHORTS" className="underline hover:text-navy">
                    gym shorts
                  </Link>
                  . We don&apos;t invent a fibre composition beyond what product pages state.
                </p>
              </>
            ),
          },
          {
            heading: "Ordering",
            body: (
              <>
                <p>
                  Order online with Stripe checkout. Orca ships across Australia. Support:{" "}
                  <a href="mailto:support@astryks.com" className="underline hover:text-navy">
                    support@astryks.com
                  </a>{" "}
                  or{" "}
                  <Link href="/contact" className="underline hover:text-navy">
                    contact
                  </Link>
                  . No retail store list, wholesale programme, or international shipping claims on this page.
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/tencel-modal", label: "What is Tencel Modal?" },
          { href: "/best-underwear-for-men", label: "Best underwear for men" },
          { href: "/swim-short-length", label: "Swim short length" },
          { href: "/mens-swim-shorts", label: "Men's swim shorts" },
          { href: "/mens-gym-shorts", label: "Men's gym shorts" },
        ]}
      />
    </>
  );
}
