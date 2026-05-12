import { IoClose } from "react-icons/io5";

import { yearList, phaseList, levelList } from "./constants";
import { ModalComponent } from "./ModalComponent";

export function FilterModal({
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
    handleGet({ year: "", level: "", phase: "" });
    onClose();
  };

  const ModalsComponents = [
    { title: "Anos", value: year, setValue: setYear, arrayValues: yearList },
    {
      title: "Fases",
      value: phase,
      setValue: setPhase,
      arrayValues: phaseList,
    },
    {
      title: "Níveis",
      value: level,
      setValue: setLevel,
      arrayValues: levelList,
    },
  ];

  let textExibitPhase = "";
  let textExibitLevel = "";

  switch (phase) {
    case "cf":
      textExibitPhase = "Comp. Fem";
      break;
    default:
      textExibitPhase = phase;
      break;
  }

  switch (level) {
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
      textExibitLevel = level;
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
              {year && (
                <p className="bg-blue-700 mx-1 sm:mx-2 px-2 py rounded-xl">
                  {year}
                </p>
              )}
              {phase && (
                <p className="bg-blue-700 mx-1 sm:mx-2 px-2 py rounded-xl">
                  {phase === "cf"
                    ? `${textExibitPhase}`
                    : `Fase ${textExibitPhase}`}
                </p>
              )}
              {level && (
                <p className="bg-blue-700 mx-1 sm:mx-2 px-2 py rounded-xl">
                  {!["j", "s", "u"].includes(level)
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
