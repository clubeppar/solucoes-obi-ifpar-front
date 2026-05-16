import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useFetch } from "@hooks/useFetch";

export function Loading() {
  const { isLoading } = useFetch();
  const [text, setText] = useState("Carregando");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      if (count % 4 == 0) {
        setText("Carregando");
      } else {
        setText(text + ".");
      }
    }, 200);
  });

  return (
    <>
      {isLoading && (
        <div className="loading-bg">
          <AiOutlineLoading className="animate-spin size-20 invert" />

          <p className="text-white font-semibold text-xl">{text}</p>
          <div className="h-10 flex items-center">
            {count > 52 && (
              <p className="font-semibold text-white text-2xl pt-3">
                Algo deu errado, aguarde um pouco mais
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
