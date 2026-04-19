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

  switch (phase){
    case "cf":
      textExibitPhase = "Comp. Fem";
      break
    default:
      textExibitPhase = phase;
      break
  }

  switch (level){
    case "j":
      textExibitLevel = "N. Junior";
      break
    case "s":
      textExibitLevel = "N. Senior";
      break
    case "u":
      textExibitLevel = "Nível Uni";
      break
    default:
      textExibitLevel = level;
      break
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50"
      onClick={() => {
        onClose();
        cancelFilter();
      }}
    >
      <div
        className="w-full max-h-[80%] overflow-auto scrollbar max-w-md rounded-xl bg-gray-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky w-full top-0 z-150 py-4 flex items-center bg-gray-900 rounded-xl justify-between">
          <h2 className="text-lg ms-5 font-semibold text-white">Filtros</h2>
          <div className="flex justify-center items-center">
            {year && <p className="bg-blue-700 px-2 py rounded-xl">{year}</p>}
            {year && phase && <div className="bg-blue-700 w-5 h-1"></div>}
            {phase && <p className="bg-blue-700 px-2 py rounded-xl">{phase == "cf"?`${textExibitPhase}`:`Fase ${textExibitPhase}`}</p>}
            {phase && level && <div className="bg-blue-700  w-5 h-1"></div>}
            {level && <p className="bg-blue-700 px-2 py rounded-xl">{level in ["j","s","u"] ? `Nivel ${textExibitLevel}`:`${textExibitLevel}`}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 me-5 text-white transition hover:cursor-pointer hover:text-blue-600"
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

        <footer className="mt-6 mb-2 px-3 flex justify-end gap-2">
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
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}
