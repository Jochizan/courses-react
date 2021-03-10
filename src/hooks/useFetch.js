import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const answer = await fetch(url);
        if (!answer.ok) {
          // eslint-disable-next-line no-throw-literal
          throw {
            err: true,
            status: answer.status,
            statusText: !answer.statusText
              ? "Ocurrió un error"
              : answer.statusText,
          };
        }

        const data = await answer.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};

export { useFetch };
