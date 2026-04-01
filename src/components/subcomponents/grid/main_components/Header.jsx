export default function Header({ year, fase, level, question }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <h4 className="flex text-gray-400 w-19/20 m-3">
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
          {year} {">"} Fase {fase} {">"} {level} {">"}
          <span className="text-blue-500 ml-1">{question}</span>
        </h4>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-between w-19/20 m-3">
          <h1 className="text-2xl">{question}</h1>
          <button className="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded-xl cursor-pointer">
            Enviar questão
          </button>
        </div>
      </div>
    </>
  );
}
