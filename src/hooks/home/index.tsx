import { useEffect } from "react"
import useStore from "@/store";

const useHomeHandler = () => {

    const { useAuthStore: { isSignIn, resetAuth, setSignIn, setToken, token },
    useThemeStore: { setTheme, theme },
    useUserStore: { name, resetUser, setUser }
 } = useStore()

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