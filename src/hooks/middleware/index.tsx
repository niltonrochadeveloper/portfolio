import UseStore from '../../store';
import { useRouter } from 'next/navigation';

export const useMiddleware = ({pathname}: {pathname: string}) => {

    const router = useRouter()

    const { useAuthStore: { isSignIn } } = UseStore()
    
    const isSign = () => {
        if (!isSignIn && pathname.includes('dashboard')) {
            return router.replace('/')
        }
    }

    return {
        isSign
    }
}
