"use client";

import StyledComponentsRegistry from "@/lib/registry";
import "./globals.scss";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { useThemeStore } from "@/store/Theme";
import { ThemeProvider } from "styled-components";
import { light } from "../../theme/light";
import { dark } from "../../theme/dark";

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

  const { theme: asTheme } = useThemeStore();

  // TODO: 1 modificar quando quiser mudar para light ou dark
  // const theme = asTheme === "light" ? light : dark;
  const theme = asTheme === "light" ? dark : light;

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <html lang="pt-BR">
          <body
            suppressHydrationWarning={true}
            className={`${poppins.className} justify-center flex`}
          >
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </html>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
