import axios from "axios";
import { ApiServiceType } from "./types";

export const apiController = async <T = any, P = any>({
  url,
  method,
  payload,
}: ApiServiceType<P>) => {
  const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  $api.interceptors.request.use((config) => {
    // let token = localStorage.getItem("token");
    // (config.headers ??= {}).Authorization = `Bearer ${token}`;
    return config;
  });

  return await $api.request<T>({
    data: payload,
    // signal: controllerRef.current.signal,
    method,
    url,
  });
};
