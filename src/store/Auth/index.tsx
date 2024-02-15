import { create } from "zustand";

interface State {
    isSignIn: boolean,
    token: string,
}

interface Actions {
    setSignIn: (isSignIn: boolean) => void
    setToken: (token: string) => void
    resetAuth: () => void
}

const initialState: State ={
    isSignIn: false,
    token: '',
}

export type AuthStore = State & Actions

export const useAuthStore = create<AuthStore>()((set) => ({
    ...initialState,
    setSignIn: (isSignIn) => set((state) => ({ ...state, isSignIn })),
    setToken: (token) => set((state) => ({ ...state, token })),
    resetAuth: () => set(initialState),
}))
