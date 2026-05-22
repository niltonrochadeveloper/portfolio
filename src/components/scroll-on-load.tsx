"use client";

import { useEffect } from "react";

export function ScrollOnLoad() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;
    sessionStorage.removeItem("scrollTarget");
    // Aguarda o próximo frame para garantir que a seção já foi montada.
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return null;
}
