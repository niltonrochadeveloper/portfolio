"use client";

import StyledComponentsRegistry from "@/lib/registry";
import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { useThemeStore } from "@/store/Theme";
import Link from "next/link";
import LoginForm from "@/components/shared/Login";
import { useState } from "react";
import useHomeHandler from "@/hooks/home";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new QueryClient();

  const { theme } = useThemeStore();

  return (
    <QueryClientProvider client={client}>
      <html lang="pt-BR">
        <body
          suppressHydrationWarning={true}
          className={`${poppins.className} justify-center flex`}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </QueryClientProvider>
  );
}
