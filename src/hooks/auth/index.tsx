import { useAuthStore } from "@/store/Auth";
import { useUserStore } from "@/store/User";


const useAuthHandler = () => {

    const { isSignIn, setSignIn, setToken, token, resetAuth } = useAuthStore((state) => state)
    const { name, setUser, resetUser } = useUserStore((state) => state)

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