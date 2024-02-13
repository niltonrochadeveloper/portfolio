import { useEffect } from "react"
import { useAuthStore, AuthStore } from "@/store/Auth"
import { UserStore, useUserStore } from "@/store/User"

const useHomeHandler = () => {

    const { isSignIn, setSignIn,resetAuth }: AuthStore = useAuthStore();
    const { name, resetUser, setUser }: UserStore = useUserStore();

    const handleSign = (username?: string) => {
        if (username) {
        setUser(username)
        setSignIn(true);
        } else {
            resetAuth()
            resetUser()
        }
    };


    return {
        handleSign,
        authenticated: {
            name,
            isSignIn
        }
    }
}

export default useHomeHandler