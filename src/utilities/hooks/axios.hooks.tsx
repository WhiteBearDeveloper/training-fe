import { useEffect, useRef, useState } from "react";
import axios, { Method } from "axios";

export const useAxios = <T, B>(url: string, method: Method, payload?: T) => {
  const [data, setData] = useState<B | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState<boolean>(false);

  // TODO: type ref block
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request<B>({
          data: payload,
          signal: controllerRef.current.signal,
          method,
          url,
        });

        console.log("response :>> ", response.data);

        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        }
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { cancel, data, error, loaded };
};
