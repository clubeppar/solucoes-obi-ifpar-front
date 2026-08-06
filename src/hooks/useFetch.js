import { useState, useCallback } from "react";

import { useLoading } from "./useLoading";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://127.0.0.1:5000"
    : "https://solucoes-obi-ifpar.onrender.com";

export function useFetch() {
  const { startLoading, stopLoading } = useLoading();

  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, options = {}) => {
      startLoading();
      setError(null);

      try {
        const response = await fetch(API_URL + url, {
          headers: {
            ...(options.body instanceof FormData
              ? {}
              : { "Content-Type": "application/json" }),
            ...options.headers,
          },
          ...options,
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
        stopLoading();
      }
    },
    [startLoading, stopLoading],
  );

  const get = useCallback((url) => request(url), [request]);

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
