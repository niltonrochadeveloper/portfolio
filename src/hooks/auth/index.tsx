import { authService } from "@/services/Auth"
import useStore from "@/store"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"



const useAuthHandler = () => {

    const router = useRouter()

    const { useAuthStore: { isSignIn, resetAuth, setSignIn, setToken, token },
    useThemeStore: { setTheme, theme },
    useUserStore: { user, resetUser, setUser }
 } = useStore()
    
    const {triggerAuth, authDataInfo} = authService()

    useEffect(() => {
        if (token && user && authDataInfo.isSuccess) {
            router.push("/blog")
        }
    }, [authDataInfo.isSuccess])
    
    return {
        triggerAuth,
        authDataInfo,
        auth: {
            authenticated: isSignIn,
            token,
            client: authDataInfo?.data?.result?.user
        },
        resetAuth,
        setSignIn
    }
}

export default useAuthHandler;