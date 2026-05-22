import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";

import { MatrixRain } from "@/components/matrix-rain";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { BlogList, type PostMeta } from "@/components/blog-list";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog | Nilton Rocha",
  description: "Artigos e insights sobre desenvolvimento web, mobile e UI/UX.",
  alternates: { canonical: "/blog" },
};

function getPosts(): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { slug: filename.replace(/\.md$/, ""), ...data } as PostMeta;
  });
  posts.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  return posts;
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="relative min-h-screen px-2 sm:px-4 pt-12">
      <MatrixRain />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(127,60,255,0.22),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(0,198,255,0.18),transparent_45%),radial-gradient(circle_at_60%_100%,rgba(127,60,255,0.16),transparent_55%)]"
      />

      <SiteHeader />
      <BlogList posts={posts} />
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
