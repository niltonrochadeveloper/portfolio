import { useQuery } from "react-query"
import { signInWithEmailAndPassword, auth } from "@/firebase.config";
import { AuthenticatorProps } from "./types";
import useAuthHandler from "@/hooks/auth";



const Login = ({url = 'https://api.github.com/repos/niltonrochadeveloper/', token, body}: {url: string, token: string, body: any}) => {
    const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
      fetch(url, {
        method: 'GET',
        body
      }).then(res =>
        res.json()
      )
    )
}

export const Authenticator = ({email, password}: AuthenticatorProps) => { 

  const { setSignIn } = useAuthHandler()

  signInWithEmailAndPassword(auth, email, password).then((res) => {
    const user: any = auth.currentUser
    // setToken(user.accessToken)
    console.log('auth', auth.currentUser)
  }).catch((error) => {
    console.log('error', error)
  }).finally(

  )
}

export const AuthService = {
    Login,
    Authenticator
}