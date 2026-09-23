import Link from "next/link";
import type { ReactNode } from "react";

export type HubFaq = { question: string; answer: string };
export type HubCta = { href: string; label: string };
export type HubSection = { heading: string; body: ReactNode };
export type HubRelated = { href: string; label: string };

type HubPageProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  sections: HubSection[];
  ctas: HubCta[];
  faqs?: HubFaq[];
  related?: HubRelated[];
};

export function hubFaqJsonLd(faqs: HubFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function HubPage({
  eyebrow,
  title,
  intro,
  sections,
  ctas,
  faqs,
  related,
}: HubPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-navy/75">{intro}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {ctas.map((cta) => (
          <Link
            key={cta.href + cta.label}
            href={cta.href}
            className="inline-block rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark"
          >
            {cta.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-navy">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-navy/75">
              {section.body}
            </div>
          </section>
        ))}
      </div>

      {faqs && faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-navy">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-navy">{faq.question}</dt>
                <dd className="mt-2 text-navy/75">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related && related.length > 0 && (
        <nav className="mt-14 border-t border-black/10 pt-8" aria-label="Related guides">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
            Related guides
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {related.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-navy underline hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  );
}
