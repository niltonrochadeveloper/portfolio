"use client";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsentBanner, { Cookies } from "react-cookie-consent";

import { useI18n } from "@/components/language-provider";

const COOKIE_NAME = "cookie-consent";
const GA_ID = "G-JS6QQ94RG2";
const ADSENSE_CLIENT = "ca-pub-6430324712510623";

// Reabre o banner a partir do footer: apaga a escolha e recarrega.
export function openCookieConsent() {
  Cookies.remove(COOKIE_NAME);
  globalThis.location.reload();
}

export function CookieConsent() {
  const { t } = useI18n();

  return (
    <>
      {/* GA e AdSense carregam sempre, para todos os visitantes. O banner
          abaixo é apenas informativo (registra a escolha do usuário). */}
      <GoogleAnalytics gaId={GA_ID} />
      <Script
        id="google-adsense"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <CookieConsentBanner
        cookieName={COOKIE_NAME}
        enableDeclineButton
        buttonText={t("consent.accept")}
        declineButtonText={t("consent.reject")}
        disableStyles
        containerClasses="fixed inset-x-0 bottom-0 z-50 mx-auto m-4 flex max-w-3xl flex-col gap-4 rounded-lg border border-border/50 bg-card/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between"
        contentClasses="min-w-0 text-sm text-foreground/70"
        buttonWrapperClasses="flex shrink-0 gap-2"
        buttonClasses="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-lg bg-gradient-to-r from-[#7f3cff] to-[#00c6ff]"
        declineButtonClasses="rounded-md border border-border/60 px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-background/60"
      >
        <span className="block font-semibold text-foreground">
          {t("consent.title")}
        </span>
        <span className="mt-1 block">{t("consent.message")}</span>
      </CookieConsentBanner>
    </>
  );
}
