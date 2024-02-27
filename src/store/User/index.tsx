import { create, createStore } from "zustand";

interface UserState {
    name: string
}

interface UserActions {
    setUser: (name: string) => void
    resetUser: () => void
}

const defaultState: UserState ={
    name: ''
}

export type UserStore = UserState & UserActions

export const useUserStore = create<UserStore>()((set) => ({
      ...defaultState,
      setUser: (name: string) => set((state) => ({...state, name})),
      resetUser: () => set(defaultState)
}))