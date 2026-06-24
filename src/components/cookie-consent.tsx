"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = "G-JS6QQ94RG2";

// A mensagem de consentimento (LGPD/GDPR) é gerenciada pela CMP do Google,
// injetada pelo próprio script do AdSense (carregado no <head> do layout).
// Esta função reabre essa mensagem a partir do link no footer.
type GoogleFc = { callbackQueue?: { push: (cb: { CONSENT_DATA_READY?: () => void }) => void }; showRevocationMessage?: () => void };

export function openCookieConsent() {
  const fc = (globalThis as unknown as { googlefc?: GoogleFc }).googlefc;
  if (fc?.showRevocationMessage) {
    fc.showRevocationMessage();
  }
}

export function CookieConsent() {
  // GA carrega para todos os visitantes. O AdSense e a mensagem de
  // consentimento da Europa ficam a cargo da CMP do Google (via <head>).
  return <GoogleAnalytics gaId={GA_ID} />;
}
