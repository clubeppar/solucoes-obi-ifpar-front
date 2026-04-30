import { useEffect, useRef, useState } from "react";

import { CiSearch, CiFilter } from "react-icons/ci";

import FilterModal from "./FilterModal";

import { useFetch } from "../../../../../hooks/useFetch";

export default function SearchFilter({ setDataSidebar }) {
  const { get } = useFetch();

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchQuestion, setSearchQuestion] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [draftYear, setDraftYear] = useState("");
  const [draftPhase, setDraftPhase] = useState("");
  const [draftLevel, setDraftLevel] = useState("");
  const [posFilter, setPosFilter] = useState(null);

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

    const res = await get(url);
    const data = await res.data;

    if (url.length < 12) {
      setDataSidebar(null);
    } else {
      setDataSidebar(data);
    }
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

  function getFilterPosition(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    setDraftYear(selectedYear);
    setDraftPhase(selectedPhase);
    setDraftLevel(selectedLevel);

    setPosFilter({
      top: rect.bottom - 35,
      left: rect.left + 60,
    });

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
          posFilter={posFilter}
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
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
