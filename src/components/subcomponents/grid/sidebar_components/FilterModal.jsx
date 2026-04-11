import { IoClose } from "react-icons/io5";

import ModalComponent from "./ModalComponent";

import { yearList, phaseList, levelList } from "./constants";

export default function FilterModal({
  onClose,
  year,
  setYear,
  phase,
  setPhase,
  level,
  setLevel,
  handleGet,
  onCancelFilters,
}) {
  const useFilter = () => {
    handleGet();
    onClose();
  };

  const cancelFilter = () => {
    onCancelFilters?.();
    setYear("");
    setLevel("");
    setPhase("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-gray-900 p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Filtros</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-stone-600 transition hover:cursor-pointer hover:bg-stone-200 hover:text-stone-900"
          >
            <IoClose className="size-5" />
          </button>
        </header>

        <hr className="my-4 border-0 border-t border-stone-700" />

        <div>
          <ModalComponent
            title={"Anos"}
            value={year}
            setValue={setYear}
            arrayValues={yearList}
          />
          <ModalComponent
            title={"Fases"}
            value={phase}
            setValue={setPhase}
            arrayValues={phaseList}
          />
          <ModalComponent
            title={"Níveis"}
            value={level}
            setValue={setLevel}
            arrayValues={levelList}
          />
        </div>

        <hr className="my-4 border-0 border-t border-stone-700" />

        <footer className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={useFilter}
            className="w-28 rounded-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-900/30 transition hover:cursor-pointer hover:bg-blue-700"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={cancelFilter}
            className="w-28 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-md shadow-black/30 transition hover:cursor-pointer hover:bg-white/15"
          >
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}
