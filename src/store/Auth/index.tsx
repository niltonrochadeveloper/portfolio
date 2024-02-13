import { create, createStore } from "zustand";

interface AuthState {
    isSignIn: boolean,
    token: string,
}

interface AuthActions {
    setSignIn: (isSignIn: boolean) => void
    setToken: (token: string) => void
    resetAuth: () => void
}

const defaultState: AuthState ={
    isSignIn: false,
    token: '',
}

export type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()((set) => ({
    ...defaultState,
    setSignIn: (isSignIn) => set((state) => ({ ...state, isSignIn })),
    setToken: (token) => set((state) => ({ ...state, token })),
    resetAuth: () => set(defaultState),
}))
