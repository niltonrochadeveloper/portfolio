"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useI18n } from "@/components/language-provider";

type NavLink = {
  key: string;
  href: string;
  hash?: string;
};

const links: NavLink[] = [
  { key: "nav.blog", href: "/blog" },
  { key: "nav.projects", href: "/", hash: "projetos" },
  { key: "nav.contact", href: "/", hash: "contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useI18n();
  const isBlog = pathname.startsWith("/blog");
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleHashNav = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    setOpen(false);
    if (!link.hash) return;
    event.preventDefault();
    if (pathname === link.href) {
      document
        .getElementById(link.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navega para a home com a URL limpa e deixa um alvo para rolar ao montar.
      sessionStorage.setItem("scrollTarget", link.hash);
      router.push(link.href);
    }
  };

  return (
    <header
      ref={headerRef}
      className="relative z-50 w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12"
    >
      <nav className="flex items-center justify-between rounded-full bg-card/70 px-4 sm:px-6 py-3 shadow-sm backdrop-blur">
        <Link href="/" className="text-lg font-semibold">
          devNilton
        </Link>

        <div className="hidden items-center gap-4 text-sm sm:flex">
          {isBlog ? (
            <Link
              href="/"
              aria-label={t("nav.home")}
              title={t("nav.home")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground/80 transition hover:bg-card hover:text-foreground"
            >
              <Home className="size-4" />
            </Link>
          ) : null}
          {links.map((link) => (
            <Link
              key={link.key}
              className="hover:opacity-80"
              href={link.hash ? `${link.href}#${link.hash}` : link.href}
              onClick={(event) => handleHashNav(event, link)}
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-card/60 text-foreground/80 transition hover:bg-card hover:text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="absolute left-2 right-2 top-full z-50 mt-2 flex flex-col gap-1 rounded-lg border border-border/50 bg-popover p-2 shadow-xl sm:hidden">
          {isBlog ? (
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition hover:bg-accent"
            >
              <Home className="size-4" />
              {t("nav.home")}
            </Link>
          ) : null}
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.hash ? `${link.href}#${link.hash}` : link.href}
              onClick={(event) => handleHashNav(event, link)}
              className="rounded-md px-3 py-2 text-sm transition hover:bg-accent"
            >
              {t(link.key)}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
