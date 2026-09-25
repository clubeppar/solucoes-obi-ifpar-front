import { useState, useCallback } from "react";

import { useLoading } from "./useLoading";

const API_URL =
  import.meta.env.VITE_BACKEND_URL ||
  (window.location.hostname === "localhost"
    ? "http://127.0.0.1:5000"
    : "https://solucoes-obi-ifpar.onrender.com");

export function useFetch() {
  const { startLoading, stopLoading } = useLoading();

  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, options = {}) => {
      const { skipLoading = false, ...fetchOptions } = options;

      if (!skipLoading) startLoading();
      setError(null);

      try {
        const response = await fetch(API_URL + url, {
          headers: {
            ...(fetchOptions.body instanceof FormData
              ? {}
              : { "Content-Type": "application/json" }),
            ...fetchOptions.headers,
          },
          ...fetchOptions,
        });

        let data = null;
        try {
          data = await response.json();
        } catch {
          data = null;
        }

        if (!response.ok) {
          const error = new Error(data?.error || "Request error");
          error.status = response.status;
          throw error;
        }

        if (data && "data" in data) return data.data;
        return data;
      } catch (err) {
        setError({
          message: err.message || "Unknown error",
          status: err.status || 500,
        });
        throw err;
      } finally {
        if (!skipLoading) stopLoading();
      }
    },
    [startLoading, stopLoading],
  );

  const get = useCallback((url, options) => request(url, options), [request]);

  const post = useCallback(
    (url, body) =>
      request(url, {
        method: "POST",
        body: JSON.stringify(body),
      }),
    [request],
  );

  return {
    get,
    post,
    request,
    error,
  };
}
