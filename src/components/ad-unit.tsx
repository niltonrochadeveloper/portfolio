"use client";

import { useEffect, useRef } from "react";

const AD_CLIENT = "ca-pub-6430324712510623";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Bloco de anúncio do Google AdSense (responsivo).
 *
 * @param slot   ID numérico do bloco criado no painel do AdSense (data-ad-slot).
 * @param format Formato do anúncio. "auto" deixa o AdSense decidir (padrão).
 *
 * Os anúncios só são renderizados em produção — em dev mostra um placeholder.
 */
export function AdUnit({
  slot,
  format = "auto",
  className = "",
}: Readonly<{ slot: string; format?: string; className?: string }>) {
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const el = insRef.current;
    // Só faz push se o <ins> existe e ainda não foi preenchido. O atributo
    // data-adsbygoogle-status é setado pelo AdSense quando o slot já tem ad —
    // evita o erro "already have ads in them" em re-render/Strict Mode.
    if (!el || el.dataset.adsbygoogleStatus) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense ainda não carregou (ex.: bloqueador de anúncios).
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`flex min-h-24 items-center justify-center rounded-lg border border-dashed border-border/50 text-xs text-foreground/40 ${className}`}
      >
        Espaço de anúncio (slot {slot})
      </div>
    );
  }

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
