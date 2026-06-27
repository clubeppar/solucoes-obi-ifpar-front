import { useEffect, useRef, useState } from "react";

import { CiFilter, CiSearch } from "react-icons/ci";

import { useFetch } from "@hooks";

import { FilterModal } from "./FilterModal";

export function SearchFilter({
  filters,
  setFilters,
  setDataSidebar,
  showSmallSearch,
  setSmallFilterOpen,
  collapsed,
  setCollapsed,
}) {
  const { get } = useFetch();

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [draftFilters, setDraftFilters] = useState({
    year: "",
    phase: "",
    level: "",
  });

  async function getSearchFilterAPI(currentFilters) {
    const queryParams = [];

    // for each pair in the items (Object), add to the query if it is not null
    Object.entries(currentFilters).forEach(([key, value]) => {
      const valueNormalized =
        key == "problem" ? value.trim().toLowerCase() : value;
      if (valueNormalized) {
        queryParams.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(valueNormalized)}`,
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
    if (collapsed) {
      setSmallFilterOpen(false);
      setCollapsed(false);
    }
  }

  const refTimer = useRef(null);

  const clearSearchTimer = () => {
    if (refTimer.current) {
      clearTimeout(refTimer.current);
      refTimer.current = null;
    }
  };

  const handleDebouncedSearch = (v) => {
    const updatedFilters = {
      ...filters,
      problem: v,
    };

    setFilters(updatedFilters);

    clearSearchTimer();

    refTimer.current = setTimeout(() => {
      getSearchFilterAPI(updatedFilters);
    }, 1200);
  };

  const handleApplyFilters = (queryObject = null) => {
    const nextFilters = queryObject
      ? queryObject
      : {
          ...draftFilters,
        };

    const updatedFilters = {
      ...filters,
      year: nextFilters.year || "",
      phase: nextFilters.phase || "",
      level: nextFilters.level || "",
    };

    setFilters(updatedFilters);
    clearSearchTimer();
    getSearchFilterAPI(updatedFilters);
  };

  function getFilterPosition() {
    setDraftFilters(() => ({
      year: filters.year,
      phase: filters.phase,
      level: filters.level,
    }));

    setIsOpenFilter(true);
  }

  useEffect(() => {
    return () => {
      clearSearchTimer();
    };
  }, []);

  if (!showSmallSearch && collapsed) return null;

  return (
    <div
      className={
        "py-1" +
        (showSmallSearch
          ? " w-max h-12 rounded-2xl fixed inset-x-15 inset-y-15 z-100 flex items-center justify-center bg-gray-800"
          : "")
      }
    >
      {isOpenFilter && (
        <FilterModal
          onClose={() => setIsOpenFilter(false)}
          draftFilters={draftFilters}
          setDraftFilters={setDraftFilters}
          handleGet={handleApplyFilters}
          onCancelFilters={clearSearchTimer}
        />
      )}

      <div className="mx-2 my-3 flex items-center gap-2">
        <div className="relative min-w-0 grow">
          <CiSearch className="pointer-events-none absolute left-3 top-1/2 size-6 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar questão..."
            className="h-9 w-full rounded-full border border-transparent bg-gray-900 pl-10 pr-3 text-sm text-gray-400 shadow-sm outline-none transition placeholder:text-stone-300/80 placeholder:hover:text-gray-200 hover:bg-gray-500 hover:text-gray-300"
            value={filters.problem}
            onChange={(e) => handleDebouncedSearch(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-gray-900 text-gray-400 shadow-sm transition hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200"
          onClick={() => {
            getFilterPosition();
          }}
        >
          <CiFilter className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
