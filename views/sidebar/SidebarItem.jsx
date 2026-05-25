import { useEffect, useState } from "react";

import { GoChevronDown } from "react-icons/go";

import { useFetch } from "@hooks/useFetch";

export function SidebarItem({
  text,
  nextCall,
  search = null,
  selection,
  setSelection,
  onQuestionSelect,
  activeQuestion,
  branchYear = null,
  branchPhase = null,
  branchLevel = null,
}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const { get } = useFetch();

  const handleCapitalize = (str) => {
    if (!str) return str;
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
  };

  let actualArray = [];
  let prefix = "";
  let nextURL = "";
  let nextStep = "";

  const currentYear =
    nextCall === "Phase" ? text : handleCapitalize(branchYear);
  const currentPhase =
    nextCall === "Levels" ? text : handleCapitalize(branchPhase);
  const currentLevel =
    nextCall === "Questions" ? text : handleCapitalize(branchLevel);

  const hasUniqueLevel = (element) =>
    Array.isArray(element?.niveis) &&
    element.niveis.length === 1 && // According G-Aleixo, exists ["", "1", "2"] (for example)
    element.niveis[0] === ""; // so, it view if array have a unique empty element

  const isUniqueLevel = hasUniqueLevel(data);

  switch (nextCall) {
    case "Phase":
      actualArray = data?.fases;
      nextStep = "Levels";
      prefix = "";
      nextURL = `/nav/years/${currentYear}/phases`;
      break;
    case "Levels":
      if (isUniqueLevel) {
        actualArray = data?.questoes;
        nextStep = "Problem";
        prefix = "Fase ";
        nextURL = `/nav/years/${currentYear}/phases/${currentPhase}/levels`;
      } else {
        actualArray = data?.niveis;
        nextStep = "Questions";
        prefix = "Fase ";
        nextURL = `/nav/years/${currentYear}/phases/${currentPhase}/levels`;
      }
      break;
    case "Questions":
      actualArray = data?.questoes;
      nextStep = "Problem";
      prefix = "Nível ";
      nextURL = `/nav/years/${currentYear}/phases/${currentPhase}/levels/${currentLevel}/problems`;
      break;
    default:
      nextStep = null;
      break;
  }

  const isSelected =
    nextStep === null &&
    handleCapitalize(activeQuestion?.year) === currentYear &&
    handleCapitalize(activeQuestion?.phase) === currentPhase &&
    handleCapitalize(activeQuestion?.level) === currentLevel &&
    handleCapitalize(activeQuestion?.problem) === handleCapitalize(text);

  useEffect(() => {
    if (!open || data || !nextURL) return;

    async function fetchData() {
      if (!nextCall) return;
      const res = await get(nextURL.toLowerCase());

      if (nextCall === "Levels" && hasUniqueLevel(res)) {
        const problemsURL = `/nav/years/${currentYear}/phases/${currentPhase}/levels//problems`;
        const problemsData = await get(problemsURL.toLowerCase());
        setData({ ...res, questoes: problemsData?.questoes ?? [] });
        return;
      }

      setData(res);
    }

    fetchData();
  }, [open, data, nextCall, nextURL, get, currentYear, currentPhase]);

  return (
    <li>
      <button
        className={
          (isSelected
            ? "sidebaritem-selected light:bg-gray-500 light:text-white"
            : "sidebaritem-item light:hover:bg-gray-400") + " cursor-pointer"
        }
        onClick={() => {
          if (nextStep === null) {
            onQuestionSelect({
              year: currentYear,
              phase: currentPhase,
              level: currentLevel,
              problem: handleCapitalize(text),
            });
          } else {
            setOpen((prev) => !prev);

            if (nextStep === "Levels") {
              setSelection((prev) => ({
                ...prev,
                year: handleCapitalize(text),
                phase: null,
                level: null,
              }));
            } else if (nextStep === "Questions" || isUniqueLevel) {
              setSelection((prev) => ({
                ...prev,
                phase: handleCapitalize(text),
                level: null,
              }));
            } else {
              setSelection((prev) => ({
                ...prev,
                level: handleCapitalize(text),
              }));
            }
          }
        }}
      >
        {prefix + handleCapitalize(text)}
        {nextStep && (
          <GoChevronDown
            className={
              open ? "size-6 transition rotate-180" : "size-6 transition"
            }
          />
        )}
      </button>
      {open && (
        <ul className="ml-4 max-w-full overflow-x-hidden">
          {(() => {
            const thisSearch = search ? search[text] : null;

            return actualArray?.map((item) => {
              const searchScope =
                nextStep === "Problem" && isUniqueLevel
                  ? thisSearch?.[""]
                  : thisSearch;

              if (search && (!searchScope || searchScope[item] === undefined))
                return null;

              return (
                <SidebarItem
                  key={currentYear + currentPhase + currentLevel + item}
                  text={item}
                  nextCall={nextStep}
                  search={search ? searchScope : null}
                  selection={selection}
                  setSelection={setSelection}
                  onQuestionSelect={onQuestionSelect}
                  activeQuestion={activeQuestion}
                  branchYear={currentYear}
                  branchPhase={currentPhase}
                  branchLevel={currentLevel}
                />
              );
            });
          })()}
        </ul>
      )}
    </li>
  );
}
