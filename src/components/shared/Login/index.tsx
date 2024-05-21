import useAuthHandler from "@/hooks/auth";
import useStore from "@/store";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface LoginFormProps {
  email: '';
  password: '';
}

const LoginForm = () => {

  const { triggerAuth, auth } = useAuthHandler()
  

  const validation = {
    defaultValues: {
      email: '',
      password: '',
    }
  }

  const { useUserStore: { setUser }, useAuthStore: { setToken, isSignIn, setSignIn, resetAuth, token } } = useStore()

  const {register, handleSubmit, formState: { errors, isLoading }, formState } = useForm<any>(validation)

  const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    console.log('onSUbmit')
    const res = await triggerAuth(data)
    console.log('res', res)
  }

    return (
        <div className={`flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8`}>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-10 w-auto"
              src="/images/logotipo.png"
              width={32}
              height={32}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Acesse sua conta
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    {...register('email')}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Senha
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Esqueceu a senha?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    {...register('password')}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )
  }
  
  export default LoginForm