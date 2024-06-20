import { useAuthStore } from "./Auth";
import { useThemeStore } from "./Theme";
import { useUserStore } from "./User";

const UseStore = () => {

    const useAuth = useAuthStore((state) => state)
    const useTheme = useThemeStore((state) => state)
    const useUser = useUserStore((state) => state)

    return {
        useAuthStore: useAuth,
        useThemeStore: useTheme,
        useUserStore: useUser,
    }
};

export default UseStore;