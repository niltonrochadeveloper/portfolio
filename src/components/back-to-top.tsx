"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { useI18n } from "@/components/language-provider";

export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(globalThis.scrollY > 600);
    onScroll();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("nav.backToTop")}
      title={t("nav.backToTop")}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#7f3cff] to-[#00c6ff] text-white shadow-xl transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
