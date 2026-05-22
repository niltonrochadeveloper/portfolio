"use client";

import { Sparkles } from "lucide-react";

import { useI18n } from "@/components/language-provider";

type Tech = {
  name: string;
  slug: string;
  level: number;
  variant?: string;
  darkInvert?: boolean;
};

type Skill = {
  key: string;
  level: number;
};

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techs: Tech[] = [
  { name: "TypeScript", slug: "typescript", level: 9 },
  { name: "React", slug: "react", level: 9 },
  { name: "Next.js", slug: "nextjs", level: 9, darkInvert: true },
  { name: "React Native", slug: "reactnative", level: 8 },
  { name: "Node.js", slug: "nodejs", level: 8 },
  { name: "NestJS", slug: "nestjs", level: 7 },
  { name: "Angular", slug: "angularjs", level: 7 },
  { name: "Flutter", slug: "flutter", level: 7 },
  { name: "Java", slug: "java", level: 6 },
  { name: "Python", slug: "python", level: 6 },
  { name: "PHP", slug: "php", level: 7 },
  { name: "Laravel", slug: "laravel", level: 7 },
  { name: "Figma", slug: "figma", level: 8 },
  { name: "GitHub", slug: "github", level: 8, darkInvert: true },
  { name: "AWS", slug: "amazonwebservices", variant: "plain-wordmark", level: 9 },
  { name: "Google Cloud", slug: "googlecloud", level: 6 },
];

const skills: Skill[] = [
  { key: "skills.genai", level: 8 },
  { key: "skills.apis", level: 8 },
  { key: "skills.automation", level: 7 },
  { key: "skills.prompt", level: 8 },
];

function iconUrl(tech: Tech) {
  const variant = tech.variant ?? "original";
  return `${ICON_BASE}/${tech.slug}/${tech.slug}-${variant}.svg`;
}

function LevelBar({ level }: Readonly<{ level: number }>) {
  return (
    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#7f3cff] to-[#00c6ff]"
        style={{ width: `${level * 10}%` }}
      />
    </div>
  );
}

export function TechStack() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-card/90 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold">{t("tech.title")}</h3>
        <p className="mt-2 text-sm text-foreground/70">{t("tech.subtitle")}</p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {techs.map((tech) => (
            <li key={tech.name} className="flex items-center gap-3">
              <img
                src={iconUrl(tech)}
                alt={tech.name}
                loading="lazy"
                className={`size-7 shrink-0 object-contain ${
                  tech.darkInvert ? "dark:invert" : ""
                }`}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-sm font-medium">
                    {tech.name}
                  </span>
                  <span className="text-xs tabular-nums text-foreground/60">
                    {tech.level}/10
                  </span>
                </div>
                <LevelBar level={tech.level} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card/90 rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-[#7f3cff]" />
          <h3 className="text-lg font-semibold">{t("skills.title")}</h3>
        </div>
        <p className="mt-2 text-sm text-foreground/70">
          {t("skills.subtitle")}
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill.key} className="min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate text-sm font-medium">
                  {t(skill.key)}
                </span>
                <span className="text-xs tabular-nums text-foreground/60">
                  {skill.level}/10
                </span>
              </div>
              <LevelBar level={skill.level} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
