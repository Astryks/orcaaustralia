import type { MetadataRoute } from "next";

// Private commerce surfaces stay disallowed. Major AI crawlers inherit the same
// allow/disallow — we do NOT block GPTBot, ClaudeBot, Google-Extended, etc.
const PRIVATE = ["/admin", "/api", "/cart", "/checkout", "/account"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "PerplexityBot",
          "Applebot-Extended",
          "Amazonbot",
          "Bytespider",
        ],
        allow: "/",
        disallow: PRIVATE,
      },
    ],
    sitemap: "https://orcaaustralia.com/sitemap.xml",
    host: "https://orcaaustralia.com",
  };
}
