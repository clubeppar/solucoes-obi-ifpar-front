import { useState, useCallback, useContext } from "react";
import { Context } from "../src/Provider";

export function useFetch() {
  const { setIsLoading } = useContext(Context);
  const [error, setError] = useState(null);

  const baseUrl = window.location.href.includes("localhost")
    ? "http://127.0.0.1:5000"
    : ""; // URL do backend em produção

  const request = useCallback(async (url, options = {}) => {
    setIsLoading(true);

    try {
      const response = await fetch(baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw {
          message: data.error || "Request error",
          status: response.status,
        };
      }

      return data;
    } catch (err) {
      setError({
        message: err.message || "Unknown error",
        status: err.status || 500,
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  const get = (url) => request(url);

  const post = (url, body) =>
    request(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

  return { get, post, request, error };
}

// como importar:
// import { useFetch } from "../hooks/useFetch";

// exemplo de uso dentro de um componente:
// const { get, post, error } = useFetch();

// GET (exemplo real da nossa aplicação)
// useEffect(() => {
//   async function fetchData() {
//     const data = await get("/nav/years");
//     console.log(data);
//   }
//
//   fetchData();
// }, []);

// GET (genérico)
// const res = await get("https://viacep.com.br/ws/59143455/json/");

// POST
// const res = await post(`/api/projects/${project_id}/comments`, {
//   content: content,
//   employee_id: localStorage["id"],
//   createdAt: new Date().toLocaleString("pt-BR", {
//     timeZone: "America/Sao_Paulo",
//   }),
// });

// PUT
// const res = await request(`/api/projects/${projectId}`, {
//   method: "PUT",
//   body: JSON.stringify({
//     name: title.trim(),
//     text: text.trim(),
//   }),
// });

// DELETE
// const res = await request(`/api/projects/${id}`, {
//   method: "DELETE",
// });

// LOADING E ERROR
// {loading && <p>Carregando...</p>}
// {error && <p style={{ color: "red" }}>{error}</p>}
