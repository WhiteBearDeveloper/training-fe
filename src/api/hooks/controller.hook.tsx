import { useEffect, useState } from "react";
import axios, { Method } from "axios";
import { apiController } from "@api/controller";

export interface ControllerHookInterface<T> {
  data: T | null;
  error: string;
  loaded: boolean;
}

export const useApiController = <T, B = {}>(
  url: string,
  payload?: B,
  method: Method = "GET",
): ControllerHookInterface<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const response = await apiController<T>({
          payload,
          method,
          url,
        });

        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        }
      } finally {
        setLoaded(true);
      }
    })().catch((error) => console.error(error));
  }, []);

  return { data, error, loaded };
};
