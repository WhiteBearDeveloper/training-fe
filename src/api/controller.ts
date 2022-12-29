import axios, { AxiosResponse } from "axios";
import { ApiServiceType } from "./types";

export const apiController = async <T = any, P = any>({
  url,
  method,
  payload,
}: ApiServiceType<P>): Promise<AxiosResponse<T, any>> => {
  const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  $api.interceptors.request.use((config) => {
    const token: string | null = localStorage.getItem("authToken");
    if (token !== null) {
      (config.headers ??= {}).Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return await $api.request<T>({
    data: payload,
    method,
    url,
  });
};
