"use client";

import { light } from "./light";
import { dark } from "./dark";
import { useStore } from "zustand";
import { useThemeStore } from "@/store/Theme";
import { ThemeProvider as SCThemeProvider, useTheme } from "styled-components";

const { theme: asTheme } = useTheme();

export const theme = asTheme === "light" ? light : dark;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
