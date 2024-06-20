import { useMutation, useQuery } from "react-query";
import { AuthenticatorProps } from "./types";
import useAuthHandler from "@/hooks/auth";

import { api } from "../api";
import UseStore from "@/store";
import Router from "next/navigation";

export const authService = () => {
  const {
    useAuthStore: { setSignIn, setToken },
    useUserStore: { setUser },
  } = UseStore();

  const fetchAuth = async (data: { email: string; password: string }) => {
    return await api.POST({
      url: "/auth/login",
      payload: data,
      useCache: "no-cache",
    });
  };

  const useFetchAuth = useMutation(fetchAuth, {
    onSuccess: (data) => {
      console.log("Login bem-sucedido:", data);
      setSignIn(true);
      setUser(data.result.user);
      setToken(data.result.token);
    },
    onError: (error) => {
      console.error("Erro no login:", error);
    },
    mutationKey: "fetch-auth",
  });

  return {
    triggerAuth: useFetchAuth.mutateAsync,
    authDataInfo: useFetchAuth,
  };
};
