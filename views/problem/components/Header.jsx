import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

export function Header({ year, fase, level, question, file, onSubmit }) {
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
              <MdOutlineFileUpload className="mr-1 w-6 h-6" />
              Enviar questão
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
