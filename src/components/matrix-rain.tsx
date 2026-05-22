"use client";

import { useEffect, useRef } from "react";

import { useTheme } from "@/components/theme-provider";

const GLYPHS =
  "01{}[]()<>/*+-=;:アカサタナハマヤラワ$#&|!?ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = globalThis.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = globalThis.matchMedia("(max-width: 767px)").matches;

    // No mobile: glifos maiores (menos colunas) e menos quadros por segundo.
    const fontSize = isMobile ? 28 : 22;
    const fps = isMobile ? 12 : 24;
    const interval = 1000 / fps;

    const trail =
      theme === "dark" ? "rgba(12, 18, 40, 0.16)" : "rgba(247, 245, 255, 0.2)";
    const head =
      theme === "dark" ? "rgba(174, 240, 255, 0.7)" : "rgba(127, 60, 255, 0.5)";
    const body =
      theme === "dark"
        ? "rgba(127, 60, 255, 0.55)"
        : "rgba(0, 150, 200, 0.32)";

    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      columns = Math.ceil(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * canvas.height) / fontSize)
      );
      speeds = Array.from({ length: columns }, () => 0.4 + Math.random() * 0.8);
    };
    resize();
    globalThis.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = trail;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px var(--font-mono, monospace)`;

      for (let i = 0; i < columns; i++) {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.92 ? head : body;
        ctx.fillText(glyph, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speeds[i];
      }
    };

    const drawStatic = () => {
      ctx.fillStyle = theme === "dark" ? "#0c1228" : "#f7f5ff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = body;
      for (let i = 0; i < columns; i++) {
        ctx.fillText(
          GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          i * fontSize,
          drops[i] * fontSize
        );
      }
    };

    let frame = 0;
    let lastTime = 0;
    let running = false;

    const loop = (time: number) => {
      if (!running) return;
      frame = requestAnimationFrame(loop);
      if (time - lastTime < interval) return;
      lastTime = time;
      draw();
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTime = 0;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    // Pausa quando a aba/janela não está visível (economiza CPU/bateria no mobile).
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (reduceMotion) {
      drawStatic();
    } else {
      start();
    }

    return () => {
      stop();
      globalThis.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      tabIndex={-1}
      className="pointer-events-none fixed inset-0 -z-10 h-dvh w-screen opacity-40"
    />
  );
}
