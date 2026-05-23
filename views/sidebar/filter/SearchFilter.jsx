import { useEffect, useRef, useState } from "react";

import { CiFilter, CiSearch } from "react-icons/ci";

import { useFetch } from "@hooks/useFetch";

import { FilterModal } from "./FilterModal";

export function SearchFilter({ setDataSidebar }) {
  const { get } = useFetch();

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchQuestion, setSearchQuestion] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [draftYear, setDraftYear] = useState("");
  const [draftPhase, setDraftPhase] = useState("");
  const [draftLevel, setDraftLevel] = useState("");

  async function getSearchFilterAPI({ question, year, phase, level }) {
    const items = {
      problem: question,
      year: year,
      phase: phase,
      level: level,
    };
    const queryParams = [];

    // for each pair in the items (Object), add to the query if it is not null
    Object.entries(items).forEach(([key, value]) => {
      if (value) {
        queryParams.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        );
      }
    });

    const url = "/search/?" + queryParams.join("&");

    if (queryParams.length === 0) {
      setDataSidebar(null);
      return;
    }

    const data = await get(url);

    if (!data) {
      setDataSidebar(null);
      return;
    }

    setDataSidebar(data);
  }

  const refTimer = useRef(null);

  const clearSearchTimer = () => {
    if (refTimer.current) {
      clearTimeout(refTimer.current);
      refTimer.current = null;
    }
  };

  const runSearch = ({
    question = searchQuestion,
    year = selectedYear,
    phase = selectedPhase,
    level = selectedLevel,
  } = {}) => {
    getSearchFilterAPI({ question, year, phase, level });
  };

  const handleDebouncedSearch = (value) => {
    setSearchQuestion(value);

    clearSearchTimer();

    refTimer.current = setTimeout(() => {
      runSearch({
        question: value.trim().toLowerCase(),
        year: selectedYear,
        phase: selectedPhase,
        level: selectedLevel,
      });
    }, 1200);
  };

  const handleApplyFilters = (queryObject = null) => {
    const nextFilters = queryObject
      ? queryObject
      : {
          year: draftYear,
          phase: draftPhase,
          level: draftLevel,
        };

    setSelectedYear(nextFilters.year || "");
    setSelectedPhase(nextFilters.phase || "");
    setSelectedLevel(nextFilters.level || "");

    clearSearchTimer();
    runSearch({
      question: searchQuestion,
      year: nextFilters.year || "",
      phase: nextFilters.phase || "",
      level: nextFilters.level || "",
    });
  };

  function getFilterPosition() {
    setDraftYear(selectedYear);
    setDraftPhase(selectedPhase);
    setDraftLevel(selectedLevel);

    setIsOpenFilter(true);
  }

  useEffect(() => {
    return () => {
      clearSearchTimer();
    };
  }, []);

  return (
    <div className="py-1">
      {isOpenFilter && (
        <FilterModal
          onClose={() => setIsOpenFilter(false)}
          year={draftYear}
          setYear={setDraftYear}
          phase={draftPhase}
          setPhase={setDraftPhase}
          level={draftLevel}
          setLevel={setDraftLevel}
          handleGet={handleApplyFilters}
          onCancelFilters={clearSearchTimer}
        />
      )}

      <div className="mx-2 mt-3 mb-2 flex items-center gap-2">
        <div className="relative min-w-0 grow">
          <CiSearch className="pointer-events-none absolute left-3 top-1/2 size-6 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar questão..."
            className="h-9 w-full rounded-full border border-transparent bg-gray-900 pl-10 pr-3 text-sm text-gray-400 shadow-sm outline-none transition placeholder:text-stone-300/80 hover:bg-gray-500"
            value={searchQuestion}
            onChange={(e) => handleDebouncedSearch(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-gray-900 text-gray-400 shadow-sm transition hover:cursor-pointer hover:bg-gray-400"
          onClick={getFilterPosition}
        >
          <CiFilter className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
