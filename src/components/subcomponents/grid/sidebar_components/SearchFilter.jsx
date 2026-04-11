import { useState } from "react";

import { CiSearch, CiFilter } from "react-icons/ci";

import FilterModal from "./FilterModal";

export default function SearchFilter() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchQuestion, setSearchQuestion] = useState("");
  const validateSearchQuestion = (e) => {
    const value = e.trim();
    setSearchQuestion(value);
  };

  return (
    <div className="py-1">
      {isOpenFilter && <FilterModal onClose={() => setIsOpenFilter(false)} />}

      <div className="mx-2 mt-3 mb-2 flex items-center gap-2">
        <div className="relative min-w-0 grow">
          <CiSearch className="pointer-events-none absolute left-3 top-1/2 size-6 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Buscar questão..."
            className="h-8 w-full rounded-full border border-transparent bg-gray-600 pl-10 pr-3 text-sm text-stone-100 shadow-sm outline-none transition placeholder:text-stone-300/80 hover:bg-gray-500"
            value={searchQuestion}
            onChange={(e) => validateSearchQuestion(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-transparent bg-gray-600 text-stone-100 shadow-sm transition hover:cursor-pointer hover:bg-gray-400"
          aria-label="Abrir filtros"
          title="Filtros"
          onClick={() => setIsOpenFilter(true)}
        >
          <CiFilter className="size-6" />
        </button>
      </div>
    </div>
  );
}
