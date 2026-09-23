import type { MetadataRoute } from "next";
import { getActiveProducts } from "@/lib/products";

const BASE = "https://orcaaustralia.com";

const HUB_ROUTES = [
  "/gift-ideas-for-men",
  "/best-underwear-for-men",
  "/tencel-modal",
  "/mens-swim-shorts",
  "/mens-gym-shorts",
  "/australian-menswear",
  "/swim-short-length",
  "/fabric-guide",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE}/products?category=SHORTS`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/products?category=GYM_SHORTS`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/products?category=BOXER_BRIEF`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...HUB_ROUTES.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${BASE}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/track-order`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const products = await getActiveProducts();
    productRoutes = products.map((p) => ({
      url: `${BASE}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));
  } catch {
    // Preview/build without DB: still ship static public URLs.
  }

  return [...staticRoutes, ...productRoutes];
}
