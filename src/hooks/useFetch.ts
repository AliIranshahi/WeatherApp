import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const Fetch = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json: T[] = await response.json();
        setData(json);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    Fetch();
  }, [url]);
  return { data, error, loading };
}

export default useFetch;
