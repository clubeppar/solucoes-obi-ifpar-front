import { IoMdArrowBack } from "react-icons/io";

export default function Header({
  year,
  fase,
  level,
  question,
  file,
  cancel,
  onSubmit,
}) {
  return (
    <>
      <div className="flex justify-center items-center">
        <h4 className="flex items-center text-gray-400 w-19/20 m-3">
          <IoMdArrowBack className="mr-2 shrink-0 size-6" />
          {year} {">"} Fase {fase} {">"} Nível {level} {">"}
          <span className="text-blue-500 ml-1">{question}</span>
        </h4>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-between w-19/20 m-3">
          <h1 className="text-2xl">{question}</h1>
          <div className="flex items-center gap-2">
            <button
              disabled={file == null}
              className="px-3 py-2 cursor-pointer rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-400"
              onClick={cancel}
            >
              Cancelar
            </button>
            <button
              disabled={file == null}
              className="px-3 py-2 cursor-pointer rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-400"
              onClick={onSubmit}
            >
              Enviar questão
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
