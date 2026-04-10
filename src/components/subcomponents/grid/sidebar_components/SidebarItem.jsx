import { useEffect, useState } from "react";

import { GoChevronDown } from "react-icons/go";

import { useFetch } from "../../../../../hooks/useFetch";

export default function SidebarItem({
  text,
  nextCall,
  selection,
  setSelection,
  onQuestionSelect,
  activeQuestion,
}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const { get } = useFetch();

  let actualArray = [];
  let prefix = "";
  let nextURL = "";
  let nextStep = "";

  switch (nextCall) {
    case "Phase":
      actualArray = data?.fases;
      nextStep = "Levels";
      prefix = "";
      nextURL = `/nav/years/${selection?.year}/phases`;
      break;
    case "Levels":
      actualArray = data?.niveis;
      nextStep = "Questions";
      prefix = "Fase ";
      nextURL = `/nav/years/${selection?.year}/phases/${selection?.phase}/levels`;
      break;
    case "Questions":
      actualArray = data?.questoes;
      nextStep = "Problem";
      prefix = "Nível ";
      nextURL = `/nav/years/${selection?.year}/phases/${selection?.phase}/levels/${selection?.level}/problems`;
      break;
    default:
      nextStep = null;
      break;
  }

  const isSelected =
    nextStep == null &&
    String(activeQuestion?.year) == String(selection?.year) &&
    String(activeQuestion?.phase) == String(selection?.phase) &&
    String(activeQuestion?.level) == String(selection?.level) &&
    String(activeQuestion?.problem) == String(text);

  useEffect(() => {
    if (!open || data || !nextURL) return;

    async function fetchData() {
      if (!nextCall) return;
      const data = await get(nextURL);
      setData(data);
    }

    fetchData();
  }, [open, data, nextCall, nextURL, get]);

  return (
    <li>
      <button
        className={isSelected ? "selected-sidebar" : "item-sidebar"}
        onClick={() => {
          if (nextStep == null) {
            onQuestionSelect({
              year: selection?.year,
              phase: selection?.phase,
              level: selection?.level,
              problem: text,
            });
          } else {
            setOpen((prev) => !prev);

            if (nextStep === "Levels") {
              setSelection((prev) => ({
                ...prev,
                year: text,
                phase: null,
                level: null,
              }));
            } else if (nextStep === "Questions") {
              setSelection((prev) => ({ ...prev, phase: text, level: null }));
            } else {
              setSelection((prev) => ({ ...prev, level: text }));
            }
          }
        }}
      >
        {prefix + text}
        {nextStep && (
          <GoChevronDown
            className={
              open ? "size-6 transition" : "size-6 transition rotate-180"
            }
          />
        )}
      </button>
      {open && (
        <ul className="ml-8 max-w-full overflow-x-hidden">
          <li>
            {actualArray?.map((item, index) => (
              <SidebarItem
                key={index}
                text={item}
                nextCall={nextStep}
                selection={selection}
                setSelection={setSelection}
                onQuestionSelect={onQuestionSelect}
                activeQuestion={activeQuestion}
              />
            ))}
          </li>
        </ul>
      )}
    </li>
  );
}
