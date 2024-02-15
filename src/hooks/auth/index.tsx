import useStore from "@/store"


const useAuthHandler = () => {

    const { useAuthStore: { isSignIn, resetAuth, setSignIn, setToken, token },
    useThemeStore: { setTheme, theme },
    useUserStore: { name, resetUser, setUser }
 } = useStore()

    const Authenticator = () => {
        
    }

    return {
        auth: {
            authenticated: isSignIn,
            token,
            client: {
                username: name,
            }
        },
        resetAuth,
        setSignIn
    }
}

export default useAuthHandler;