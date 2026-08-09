import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

import { CardTestData } from "./CardTestData";

export function ModalIO({ userCode, input, correctOut, userOut, onClose }) {
  const cards = [
    {
      title: "Seu código",
      value: userCode,
    },
    {
      title: "Entrada do teste",
      value: input,
    },
    {
      title: "Saída esperada",
      value: correctOut,
    },
    {
      title: "Sua saída",
      value: userOut,
    },
  ];

  return createPortal(
    <div className="filtermodal-bg-container" onClick={onClose}>
      <div
        className="filtermodal-container w-[min(86vw,48rem)] max-w-3xl px-5"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between rounded-t-xl bg-gray-900 pt-5 text-white">
          <h2 className="text-base font-bold text-white">Dados do teste</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-gray-300 transition cursor-pointer hover:text-blue-600"
            aria-label="Fechar modal"
          >
            <IoClose className="size-7" />
          </button>
        </header>

        <div className="overflow-y-auto scrollbar scrollbar-gutter-stable pb-5 text-sm text-gray-100">
          <div className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <CardTestData key={index} title={card.title} value={card.value} />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
