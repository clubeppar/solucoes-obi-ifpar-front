import { useEffect, useState } from "react";

import { GoChevronDown } from "react-icons/go";

import { useFetch } from "../../../../../hooks/useFetch";

export default function SidebarItem({
  text,
  nextCall,
  selection,
  setSelection,
}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const { get } = useFetch();

  let actualArray = [];
  let prefix = "";
  let nextURL = "";
  let nextStep = "";
  let isSelected = selection.problem === text; //trocar para ID depois

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
      nextStep = "none";
      prefix = "Nivel ";
      nextURL = `/nav/years/${selection?.year}/phases/${selection?.phase}/levels/${selection?.level}/problems`;
      break;
    default:
      nextStep = null;
      break;
  }

  useEffect(() => {
    if (!open || data) return;

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
          if (!nextStep) {
            setSelection((prev) => ({ ...prev, problem: text }));
          } else {
            setOpen((prev) => !prev);

            if (nextStep === "Levels") {
              setSelection((prev) => ({ ...prev, year: text }));
            } else if (nextStep === "Questions") {
              setSelection((prev) => ({ ...prev, phase: text }));
            } else if (nextStep === "none") {
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
              />
            ))}
          </li>
        </ul>
      )}
    </li>
  );
}
