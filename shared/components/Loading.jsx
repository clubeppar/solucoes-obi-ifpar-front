import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useFetch } from "@hooks/useFetch";

export function Loading() {
  const { isLoading } = useFetch();
  const [isVisible, setIsVisible] = useState(false);
  const [dots, setDots] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    let showTimer;
    let hideTimer;
    let dotsTimer;
    let warningTimer;

    if (isLoading) {
      showTimer = setTimeout(() => {
        setIsVisible(true);
        setDots(0);
        setShowWarning(false);

        dotsTimer = setInterval(() => {
          setDots((currentDots) => (currentDots + 1) % 4);
        }, 350);
      }, 220);

      warningTimer = setTimeout(() => {
        setShowWarning(true);
      }, 15000);
    } else if (isVisible) {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        setDots(0);
        setShowWarning(false);
      }, 120);
    }

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(warningTimer);
      clearInterval(dotsTimer);
    };
  }, [isLoading, isVisible]);

  const text = `Carregando${".".repeat(dots)}`;

  return (
    <>
      {isLoading && isVisible && (
        <div className="loading-bg opacity-100 transition-opacity duration-200">
          <AiOutlineLoading className="animate-spin size-20 invert" />

          <p className="text-white font-semibold text-xl">{text}</p>
          {showWarning && (
            <div className="h-10 flex items-center">
              <p className="font-semibold text-white text-2xl pt-3">
                Algo deu errado, aguarde um pouco mais
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
