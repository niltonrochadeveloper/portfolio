import { MatrixRain } from "@/components/matrix-rain";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { BackToBlog } from "@/components/back-to-blog";
import { PostAuthor } from "@/components/post-author";
import { AdUnit } from "@/components/ad-unit";
import {
  PostTitle,
  PostDescription,
  PostBody,
  type LocalizedText,
} from "@/components/post-content";

interface PostLayoutProps {
  date: string;
  /** Título/resumo/corpo traduzidos por idioma. */
  title: LocalizedText;
  description: LocalizedText;
  body: LocalizedText;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PostLayout({
  title,
  description,
  body,
  date,
}: Readonly<PostLayoutProps>) {
  return (
    <main className="relative min-h-screen px-2 sm:px-4 py-12">
      <MatrixRain />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(127,60,255,0.22),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(0,198,255,0.18),transparent_45%),radial-gradient(circle_at_60%_100%,rgba(127,60,255,0.16),transparent_55%)]"
      />

      <SiteHeader />

      <article className="w-full max-w-400 mx-auto px-2 sm:px-6 lg:px-12 py-12">
        <BackToBlog />

        <header className="mt-6 max-w-4xl">
          <span className="text-xs uppercase tracking-wider text-foreground/50">
            {formatDate(date)}
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-[1.1] bg-linear-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
            <PostTitle title={title} />
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            <PostDescription description={description} />
          </p>
        </header>

        <div className="mt-8 rounded-lg border border-border/40 bg-card/90 p-6 shadow-lg sm:p-10">
          <div className="post-content mx-auto max-w-3xl">
            <PostBody body={body} />
          </div>
          <div className="mx-auto max-w-3xl">
            <AdUnit slot="0000000000" className="mt-10" />
            <PostAuthor />
          </div>
        </div>
      </article>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
