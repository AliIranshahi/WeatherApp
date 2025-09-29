import axios from "axios";
import { useEffect, useState } from "react";

function useAxios<T, S>(url: string, method: "POST" | "GET", dataSend: S) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const Axios = async () => {
      setLoading(true);
      try {
        if (method == "POST") {
          const response = await axios.post(`${url}`, dataSend);
          const dataRecive: T = await response.data;
          setData(dataRecive);
        }
        if (method == "GET") {
          const response = await axios.get(`${url}`);
          const dataRecive: T = await response.data;
          setData(dataRecive);
        }
        setError(null);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    Axios();
  }, [url, method, dataSend]);

  return { data, error, loading };
}

export default useAxios;
