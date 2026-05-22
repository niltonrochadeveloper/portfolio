import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { MatrixRain } from "@/components/matrix-rain";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { BackToBlog } from "@/components/back-to-blog";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  const postPath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  if (!fs.existsSync(postPath)) return null;
  const fileContents = fs.readFileSync(postPath, "utf8");
  return matter(fileContents);
}

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  return fs.readdirSync(postsDirectory).map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const title = String(post.data.title || "Post");
  const description = String(post.data.description || "Post do blog");
  return {
    title: `${title} | Blog`,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();
  const { data, content } = post;
  const html = marked(content);

  return (
    <main className="relative min-h-screen px-2 sm:px-4 py-12">
      <MatrixRain />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(127,60,255,0.22),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(0,198,255,0.18),transparent_45%),radial-gradient(circle_at_60%_100%,rgba(127,60,255,0.16),transparent_55%)]"
      />

      <SiteHeader />

      <article className="w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12 py-12">
        <BackToBlog />

        <header className="mt-6 max-w-4xl">
          <span className="text-xs uppercase tracking-wider text-foreground/50">
            {formatDate(String(data.date))}
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-[1.1] bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
            {data.title}
          </h1>
          {data.description ? (
            <p className="mt-4 text-lg text-foreground/70">
              {String(data.description)}
            </p>
          ) : null}
        </header>

        <div className="mt-8 rounded-lg border border-border/40 bg-card/90 p-6 shadow-lg sm:p-10">
          <div
            className="post-content mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
