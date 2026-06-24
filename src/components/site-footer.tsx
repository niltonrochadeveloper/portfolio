"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { SocialLinks } from "@/components/social-links";
import { useI18n } from "@/components/language-provider";
import { openCookieConsent } from "@/components/cookie-consent";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export function SiteFooter() {
  const { t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const year = new Date().getFullYear();

  const navItems = [
    { key: "nav.projects", hash: "projetos" },
    { key: "nav.contact", hash: "contato" },
  ];

  const goToHash = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    event.preventDefault();
    if (pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTarget", hash);
      router.push("/");
    }
  };

  return (
    <footer className="relative mt-16 border-t border-border/40">
      <div className="w-full max-w-400 x-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="text-lg font-semibold">
              devNilton
            </Link>
            <div className="mt-3 flex flex-col flex-wrap gap-2 text-sm text-foreground/60">
              {t("footer.builtWith")}
              <div className="flex items-center gap-2">
                <img
                  src={`${ICON_BASE}/nextjs/nextjs-original.svg`}
                  alt="Next.js"
                  className="size-5 dark:invert"
                  loading="lazy"
                />{" "}
                Next.js {t("footer.and")}
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={`${ICON_BASE}/tailwindcss/tailwindcss-original.svg`}
                  alt="Tailwind CSS"
                  className="size-5"
                  loading="lazy"
                />{" "}
                Tailwind CSS
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/80">
              {t("footer.navTitle")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/" className="hover:text-foreground">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-foreground">
                  {t("nav.blog")}
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={`/#${item.hash}`}
                    onClick={(event) => goToHash(event, item.hash)}
                    className="hover:text-foreground"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/80">
              {t("footer.socialTitle")}
            </h3>
            <SocialLinks className="mt-3" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border/40 pt-6 text-sm text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} Nilton Rocha. {t("footer.rights")}
          </span>
          <button
            type="button"
            onClick={openCookieConsent}
            className="text-left transition hover:text-foreground"
          >
            {t("footer.cookies")}
          </button>
        </div>
      </div>
    </footer>
  );
}
