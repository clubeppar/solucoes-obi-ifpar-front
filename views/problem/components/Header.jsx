import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export function Header({
  year,
  fase,
  level,
  question,
  isEmpty,
  clearSelection,
}) {
  return (
    <>
      <div className="header-container">
        <h4 className="header-breadcrumb">
          {!isEmpty ? (
            <>
              <IoMdArrowBack
                onClick={clearSelection}
                className="mr-2 shrink-0 size-6 cursor-pointer"
              />
              {year} {">"} Fase {fase} {">"} Nível {level} {">"}
              <span className="text-blue-500 ml-1">{question}</span>
            </>
          ) : (
            <Link to="/">
              <IoMdArrowBack className="mr-2 shrink-0 size-6 cursor-pointer" />
            </Link>
          )}
        </h4>
      </div>
    </>
  );
}
