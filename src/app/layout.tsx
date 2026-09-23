import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://orcaaustralia.com";
const TITLE_DEFAULT = "Orca Australia — Men's Swim Shorts & Boxer Briefs";
const DESCRIPTION =
  "Men's swim shorts, gym shorts, and Tencel modal boxer briefs, designed for Australian summers. Shipping across Australia.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Always canonical production domain — never *.vercel.app.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s | Orca Australia",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Orca Australia",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/orca-icon.png",
        width: 512,
        height: 512,
        alt: "Orca Australia",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: ["/orca-icon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Orca Australia",
      url: SITE_URL,
      logo: `${SITE_URL}/orca-icon.png`,
      email: "support@astryks.com",
      description: DESCRIPTION,
      parentOrganization: {
        "@type": "Organization",
        name: "Astryks Group",
        url: "https://astryks.com",
      },
      areaServed: { "@type": "Country", name: "Australia" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Orca Australia",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-AU",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Orca Australia sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Orca Australia sells men's swim shorts, gym shorts, and Tencel modal boxer briefs designed for Australian summers.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Orca Australia ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Orca Australia ships across Australia.",
          },
        },
        {
          "@type": "Question",
          name: "How do I contact Orca Australia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email support@astryks.com or use https://orcaaustralia.com/contact.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
