import React, { useCallback, useState } from "react";
import axios from "axios";

type ReturnType<T> = [
  (url: string) => Promise<void>,
  { data: T | undefined; loading: boolean; error: boolean },
];

function useLazyFetch<T = undefined>(): ReturnType<T> {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_API_URL}${url}`);
      setData(data);
      setError(false);
    } catch (e) {
      if (e instanceof Error) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return [
    fetchData,
    {
      data: data ?? undefined,
      loading,
      error,
    },
  ];
}

export default useLazyFetch;
