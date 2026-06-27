import { IoClose } from "react-icons/io5";

import { yearList, phaseList, levelList } from "./constants";
import { ModalComponent } from "./ModalComponent";

export function FilterModal({
  onClose,
  draftFilters,
  setDraftFilters,
  handleGet,
  onCancelFilters,
}) {
  const useFilter = () => {
    handleGet();
    onClose();
  };

  const cancelFilter = () => {
    onCancelFilters?.();
    setDraftFilters(() => ({
      year: "",
      phase: "",
      level: "",
    }));
    handleGet({ year: "", level: "", phase: "" });
    onClose();
  };

  const ModalsComponents = [
    {
      title: "Anos",
      value: draftFilters.year,
      setValue: (v) => setDraftFilters((p) => ({ ...p, year: v })),
      arrayValues: yearList,
    },
    {
      title: "Fases",
      value: draftFilters.phase,
      setValue: (v) => setDraftFilters((p) => ({ ...p, phase: v })),
      arrayValues: phaseList,
    },
    {
      title: "Níveis",
      value: draftFilters.level,
      setValue: (v) => setDraftFilters((p) => ({ ...p, level: v })),
      arrayValues: levelList,
    },
  ];

  let textExibitPhase = "";
  let textExibitLevel = "";

  switch (draftFilters.phase) {
    case "cf":
      textExibitPhase = "Comp. Fem";
      break;
    default:
      textExibitPhase = draftFilters.phase;
      break;
  }

  switch (draftFilters.level) {
    case "j":
      textExibitLevel = "N. Júnior";
      break;
    case "s":
      textExibitLevel = "N. Sênior";
      break;
    case "u":
      textExibitLevel = "N. Universitário";
      break;
    default:
      textExibitLevel = draftFilters.level;
      break;
  }

  return (
    <div className="filtermodal-bg-container" onClick={onClose}>
      <div
        className="filtermodal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto scrollbar [scrollbar-gutter:stable]">
          <header className="sticky w-full top-0 z-150 py-4 flex items-center bg-gray-900 rounded-xl justify-between">
            <h2 className="text-lg ms-5 font-semibold text-white">Filtros</h2>
            <div className="flex justify-center items-stretch">
              {draftFilters.year && (
                <p className="bg-blue-700 mx-1 sm:mx-2 px-2 py rounded-xl">
                  {draftFilters.year}
                </p>
              )}
              {draftFilters.phase && (
                <p className="bg-blue-700 mx-1 sm:mx-2 px-2 py rounded-xl">
                  {draftFilters.phase === "cf"
                    ? `${textExibitPhase}`
                    : `Fase ${textExibitPhase}`}
                </p>
              )}
              {draftFilters.level && (
                <p className="bg-blue-700 mx-1 sm:mx-2 px-2 py rounded-xl">
                  {!["j", "s", "u"].includes(draftFilters.level)
                    ? `Nível ${textExibitLevel}`
                    : `${textExibitLevel}`}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1  text-white transition hover:cursor-pointer hover:text-blue-600"
            >
              <IoClose className="size-8" />
            </button>
          </header>

          {ModalsComponents.map((filter, index) => (
            <ModalComponent
              key={index}
              title={filter.title}
              value={filter.value}
              setValue={filter.setValue}
              arrayValues={filter.arrayValues}
            />
          ))}

          <footer className="mt-6 mb-2 px-3 flex items-baseline justify-end gap-2">
            <button
              type="button"
              onClick={useFilter}
              className="w-28 h-10 btn-info"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={cancelFilter}
              className="w-28 h-10 btn-info bg-gray-600 hover:bg-gray-500"
            >
              Limpar
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
