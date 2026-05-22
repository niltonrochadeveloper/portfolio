import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devniltonrocha.com.br";
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const postSlugs = fs
    .readdirSync(postsDirectory)
    .map((filename) => filename.replace(/\.md$/, ""));

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...postSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return routes;
}
