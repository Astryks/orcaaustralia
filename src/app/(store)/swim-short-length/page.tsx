import type { Metadata } from "next";
import Link from "next/link";
import { HubPage, hubFaqJsonLd } from "@/components/HubPage";

const TITLE = "Swim Short Length: Why Shorter Inseams Win";
const DESCRIPTION =
  "Why short, European-style swim short inseams beat long boardshorts for Aussie summers — freer movement, less drag, cleaner look. Shop Orca men's swim shorts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/swim-short-length" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/swim-short-length",
  },
};

const FAQS = [
  {
    question: "What is a European-style swim short length?",
    answer:
      "European-style swim shorts typically use a shorter inseam than classic long boardshorts — roughly mid-thigh rather than knee-length. The cut prioritises movement and a cleaner silhouette over coverage down the leg.",
  },
  {
    question: "Why choose short swim shorts over long boardshorts?",
    answer:
      "Shorter inseams usually mean less fabric dragging in the water, freer kicks and strides on the beach or pool deck, and a sharper look when you walk from the sand to the car. Long boardshorts still suit some surf and coverage preferences — shorter lengths suit most Aussie summer days.",
  },
  {
    question: "Does Orca sell short men's swim shorts in Australia?",
    answer:
      "Yes. Orca Australia sells men's swim shorts designed for Australian summers, including styles in a shorter, European-leaning length rather than long boardshort cuts. Browse the swim shorts category or the men's swim shorts hub for current prints and sizes.",
  },
  {
    question: "Where can I shop Orca swim shorts?",
    answer:
      "Shop the swim shorts category at https://orcaaustralia.com/products?category=SHORTS, or start from the men's swim shorts guide. We ship across Australia; checkout via Stripe; support at support@astryks.com.",
  },
];

export default function SwimShortLengthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Fit guide"
        title="Swim short length: why a shorter inseam wins Aussie summer"
        intro="Long boardshorts have their place — but for most Australian beach and pool days, a short, European-style inseam is the smarter cut. You move freely, pick up less drag in the water, and look cleaner walking off the sand. Here's the practical case — then a link to shop Orca men's swim shorts."
        ctas={[
          { href: "/products?category=SHORTS", label: "Shop swim shorts" },
          { href: "/mens-swim-shorts", label: "Men's swim shorts guide" },
        ]}
        sections={[
          {
            heading: "Short European length vs long boardshorts",
            body: (
              <>
                <p>
                  Classic boardshorts often fall toward the knee. European-style swim shorts sit higher on the thigh — enough coverage to feel decent, not so much fabric that you&apos;re swimming in excess material. The difference shows up the moment you sprint for a wave, climb pool stairs, or sit in a café after a swim.
                </p>
                <p>
                  Orca&apos;s{" "}
                  <Link href="/mens-swim-shorts" className="underline hover:text-navy">
                    men&apos;s swim shorts
                  </Link>{" "}
                  lean into that shorter summer silhouette rather than a long boardshort length. Check product photos for the exact cut on each style.
                </p>
              </>
            ),
          },
          {
            heading: "Move freely in Aussie heat",
            body: (
              <>
                <p>
                  Shorter inseams free up your stride for beach cricket, a coastal walk, or just grabbing towels from the boot. Less fabric bunching between the legs means less friction on hot days. Pair them with breathable underwear if you&apos;re wearing them as day shorts — see{" "}
                  <Link href="/best-underwear-for-men" className="underline hover:text-navy">
                    best underwear for men
                  </Link>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Less drag in the water",
            body: (
              <>
                <p>
                  Every extra centimetre of fabric catches water. A shorter cut sheds weight faster when you climb out, and Orca swim shorts use lightweight, quick-dry fabric so you&apos;re not stuck in a soggy knee-length tube on the walk back. Practical, not performative.
                </p>
              </>
            ),
          },
          {
            heading: "A cleaner look",
            body: (
              <>
                <p>
                  Mid-thigh lengths tend to look sharper with a simple tee or bare chest — less &quot;oversized boardie,&quot; more intentional summer short. Prints read better when the silhouette is tidy. Browse{" "}
                  <Link href="/products?category=SHORTS" className="underline hover:text-navy">
                    swim shorts
                  </Link>{" "}
                  for current High Seas and Polar Bear styles.
                </p>
              </>
            ),
          },
          {
            heading: "Shop short swim shorts from Orca",
            body: (
              <>
                <p>
                  Start at the{" "}
                  <Link href="/products?category=SHORTS" className="underline hover:text-navy">
                    swim shorts category
                  </Link>{" "}
                  or the{" "}
                  <Link href="/mens-swim-shorts" className="underline hover:text-navy">
                    men&apos;s swim shorts
                  </Link>{" "}
                  hub. We ship across Australia; checkout via Stripe; questions to{" "}
                  <a href="mailto:support@astryks.com" className="underline hover:text-navy">
                    support@astryks.com
                  </a>
                  . We sell direct online — no retail store list or international shipping claims here.
                </p>
              </>
            ),
          },
        ]}
        faqs={FAQS}
        related={[
          { href: "/mens-swim-shorts", label: "Men's swim shorts" },
          { href: "/fabric-guide", label: "Fabric guide" },
          { href: "/mens-gym-shorts", label: "Men's gym shorts" },
          { href: "/products?category=SHORTS", label: "Shop swim shorts" },
        ]}
      />
    </>
  );
}
