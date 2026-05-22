"use client";

import { Gauge, Landmark, Palette, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MatrixRain } from "@/components/matrix-rain";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollLink } from "@/components/scroll-link";
import { ScrollOnLoad } from "@/components/scroll-on-load";
import { SocialLinks } from "@/components/social-links";
import { BackToTop } from "@/components/back-to-top";
import { TechStack } from "@/components/tech-stack";
import { useI18n } from "@/components/language-provider";

type Project = {
  title: string;
  type: string;
  tech: string;
  url: string;
  image: string;
};

const highlights = [
  { key: "product", Icon: Target },
  { key: "uiux", Icon: Palette },
  { key: "performance", Icon: Gauge },
  { key: "fintech", Icon: Landmark },
];

const personalProject = {
  url: "#projetos",
  image: "/projetos/mindflow.png",
  tech: "Next.js, React, TypeScript, Canvas, IA",
};

const projects: Project[] = [
  {
    title: "Aplicativo Trigg",
    type: "Aplicativo",
    tech: "React Native, Redux, Firebase, API Rest",
    url: "https://trigg.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/trigg/app/1.png",
  },
  {
    title: "Portal de cobranca Trigg",
    type: "Site",
    tech: "Nodejs, API Rest, Nextjs, Google Analytics, Google Tag Manager, SEO",
    url: "https://negocie.trigg.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/trigg/negocie/1.png",
  },
  {
    title: "Blog NetSofas",
    type: "Blog",
    tech: "PHP, Wordpress, API Rest, Google Analytics, Google Tag Manager, SEO",
    url: "https://blog.netsofas.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/netsofas/1.png",
  },
  {
    title: "Site institucional GrupoCard",
    type: "Site",
    tech: "Nodejs, API Rest, Google Analytics, Google Tag Manager, SEO",
    url: "https://www.grupocard.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/grupocard/card/1.png",
  },
  {
    title: "Intranet",
    type: "Intranet / CMS",
    tech: "Nodejs, API Rest, Nextjs, Google Analytics, Google Tag Manager, SEO",
    url: "https://intranet.grupocard.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/grupocard/intranet/1.png",
  },
  {
    title: "Blog GrupoCard",
    type: "Blog",
    tech: "Nodejs, API Rest, Google Analytics, Google Tag Manager, SEO",
    url: "https://www.grupocard.com.br/blog",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/grupocard/blog/1.png",
  },
  {
    title: "CardHub",
    type: "Site",
    tech: "Nodejs, API Rest, Nextjs, Google Analytics, Google Tag Manager, SEO",
    url: "https://cardhub.grupocard.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/grupocard/cardhub/1.png",
  },
  {
    title: "CardMais",
    type: "Landing Page",
    tech: "Nodejs, API Rest, Nextjs, Google Analytics, Google Tag Manager, SEO",
    url: "https://cardmais.grupocard.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/grupocard/cardmais/1.png",
  },
  {
    title: "CardMidia",
    type: "Landing Page",
    tech: "Nodejs, API Rest, Nextjs, Google Analytics, Google Tag Manager, SEO",
    url: "https://cardmidia.grupocard.com.br",
    image:
      "https://devniltonrocha.com.br/images/projetos/prints/grupocard/cardmidia/1.png",
  },
];

export default function Home() {
  const { t } = useI18n();

  const stats = [
    { value: "+6", label: t("stats.experience") },
    { value: "+50", label: t("stats.projects") },
    { value: "+15", label: t("stats.clients") },
  ];

  return (
    <main className="relative min-h-screen px-2 sm:px-4 pt-12">
      <ScrollOnLoad />
      <MatrixRain />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(127,60,255,0.22),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(0,198,255,0.18),transparent_45%),radial-gradient(circle_at_60%_100%,rgba(127,60,255,0.16),transparent_55%)]"
      />

      <SiteHeader />

      <section className="relative w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12 py-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05] bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
            Nilton Rocha
          </h1>
          <p className="mt-4 text-lg text-foreground/80 font-medium">
            {t("hero.role")}
          </p>
          <p className="mt-4 text-sm text-foreground/60">
            TypeScript | React Native | Flutter | React | Next.js | Node.js |
            Angular | PHP | Laravel
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="px-6 py-4 text-base font-semibold shadow-xl bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] text-white border-none"
            >
              <ScrollLink targetId="projetos">
                {t("hero.viewProjects")}
              </ScrollLink>
            </Button>
            <Button asChild variant="outline" className="px-6 py-4">
              <a href="https://wa.me/11989186177?text=ola, ">
                {t("hero.requestCv")}
              </a>
            </Button>
          </div>
          <SocialLinks className="mt-6" />
        </div>
      </section>

      <section className="w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12 grid gap-10 md:grid-cols-2 py-10">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm uppercase tracking-wider text-foreground/70">
              {t("about.eyebrow")}
            </p>
            <h2 className="text-3xl font-bold">{t("about.title")}</h2>
            <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row">
              <div className="relative w-fit shrink-0">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#7f3cff]/30 to-[#00c6ff]/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/80 shadow-lg">
                  <img
                    src="https://devniltonrocha.com.br/images/header/foto.jpg"
                    alt="Nilton Rocha"
                    width={144}
                    height={144}
                    className="block h-32 w-32 object-cover sm:h-36 sm:w-36"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="text-foreground/80">{t("about.body")}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-lg border border-border/40 bg-card/80 p-4 text-center shadow-lg"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider text-foreground/70">
              {t("highlights.title")}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {highlights.map(({ key, Icon }) => (
                <div
                  key={key}
                  className="flex gap-3 rounded-lg border border-border/40 bg-card/80 p-4 shadow-lg"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#7f3cff]/20 to-[#00c6ff]/20 text-[#7f3cff]">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">
                      {t(`highlights.${key}.title`)}
                    </h3>
                    <p className="mt-0.5 text-xs text-foreground/65">
                      {t(`highlights.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TechStack />
      </section>

      <section
        id="projetos"
        className="w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12 py-10"
      >
        <p className="text-sm uppercase tracking-wider text-foreground/70">
          {t("projects.eyebrow")}
        </p>
        <h2 className="text-3xl font-bold mb-6">{t("projects.title")}</h2>

        <a
          href={personalProject.url}
          className="group relative mb-6 grid overflow-hidden rounded-lg border border-[#7f3cff]/40 bg-card/90 shadow-lg transition hover:-translate-y-0.5 md:grid-cols-2"
        >
          <div className="aspect-video w-full overflow-hidden bg-background/60 md:aspect-auto md:h-full">
            <img
              src={personalProject.image}
              alt={t("projects.mindflow.title")}
              width={1280}
              height={664}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-6 sm:p-8">
            <span className="inline-block rounded-full bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] px-3 py-1 text-xs font-semibold text-white">
              {t("projects.personalBadge")}
            </span>
            <h3 className="mt-4 text-2xl font-bold">
              {t("projects.mindflow.title")}
            </h3>
            <p className="mt-3 text-sm text-foreground/75">
              {t("projects.mindflow.description")}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-foreground/50">
              {t("projects.techUsed")}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {personalProject.tech.split(",").map((item) => (
                <span
                  key={item.trim()}
                  className="rounded-md border border-border/50 bg-background/60 px-2 py-0.5 text-xs text-foreground/70"
                >
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>
        </a>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              className="group flex flex-col overflow-hidden rounded-lg bg-card/90 shadow-lg transition hover:-translate-y-0.5"
            >
              <div className="aspect-video w-full overflow-hidden bg-background/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs uppercase tracking-wider text-foreground/60">
                  {project.type}
                </div>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <div className="mt-3 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                    {t("projects.techUsed")}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.split(",").map((item) => (
                      <span
                        key={item.trim()}
                        className="rounded-md border border-border/50 bg-background/60 px-2 py-0.5 text-xs text-foreground/70"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="mt-4 inline-block text-sm bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] bg-clip-text text-transparent">
                  {t("projects.learnMore")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="contato"
        className="w-full max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-12 py-12"
      >
        <div className="bg-card/90 rounded-lg p-6 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t("contact.title")}</h2>
            <p className="text-sm text-foreground/70">{t("contact.subtitle")}</p>
          </div>
          <a
            href="https://wa.me/11989186177?text=ola, "
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold shadow-xl bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] text-white"
          >
            {t("contact.cta")}
          </a>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
