import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export function Header({
  year,
  fase,
  level,
  question,
  file,
  onSubmit,
}) {
  return (
    <>
      <div className="header-container">
        <h4 className="header-breadcrumb">
          <Link to="/">
            <IoMdArrowBack className="mr-2 shrink-0 size-6" />
          </Link>
          {year} {">"} Fase {fase} {">"} Nível {level} {">"}
          <span className="text-blue-500 ml-1">{question}</span>
        </h4>
      </div>

      <div className="header-wrapper">
        <div className="header-content">
          <h1 className="text-2xl light:text-black">{question}</h1>
          <div className="flex items-center gap-2">
            <button
              disabled={file == null}
              className="header-btn-submit"
              onClick={onSubmit}
            >
              <svg
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              Enviar questão
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
