import { create } from "zustand";

type Theme = "light" | "dark";

interface State {
  theme: Theme;
}

interface Actions {
  setTheme: (theme: Theme) => void;
}

const initialState: State = {
  theme: "light",
};

export type ThemeStore = State & Actions;

export const useThemeStore = create<ThemeStore>()((set) => ({
  ...initialState,
  setTheme: (theme) => set({ theme }),
}));
