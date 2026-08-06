import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

export function ModalIO({ userCode, input, correctOut, userOut, onClose }) {
  return createPortal(
    <div className="filtermodal-bg-container" onClick={onClose}>
      <div
        className="filtermodal-container w-[min(92vw,56rem)] max-w-4xl h-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky top-0 z-150 flex items-center justify-between rounded-t-xl bg-gray-900 px-5 py-4 text-white">
          <h2 className="text-lg font-semibold">Saída do teste</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 transition hover:cursor-pointer hover:text-blue-600"
            aria-label="Fechar modal"
          >
            <IoClose className="size-8" />
          </button>
        </header>

        <div className="overflow-y-auto scrollbar [scrollbar-gutter:stable] px-5 py-4 text-sm text-gray-100">
          <section className="mb-4">
            <h3 className="mb-2 font-semibold text-blue-400">Código enviado</h3>
            <pre className="max-h-44 overflow-auto rounded-xl bg-gray-950 p-4 whitespace-pre-wrap break-words text-gray-200">
              {userCode}
            </pre>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <section>
              <h3 className="mb-2 font-semibold text-blue-400">Entrada</h3>
              <pre className="min-h-24 rounded-xl bg-gray-950 p-4 whitespace-pre-wrap break-words text-gray-200">
                {input}
              </pre>
            </section>

            <section>
              <h3 className="mb-2 font-semibold text-blue-400">Saída esperada</h3>
              <pre className="min-h-24 rounded-xl bg-gray-950 p-4 whitespace-pre-wrap break-words text-gray-200">
                {correctOut}
              </pre>
            </section>
          </div>

          <section className="mt-4">
            <h3 className="mb-2 font-semibold text-blue-400">Sua saída</h3>
            <pre className="min-h-24 rounded-xl bg-gray-950 p-4 whitespace-pre-wrap break-words text-gray-200">
              {userOut}
            </pre>
          </section>
        </div>
      </div>
    </div>,
    document.body,
  );
}
