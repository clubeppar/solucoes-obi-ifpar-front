import { useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { GoChevronDown } from "react-icons/go";

export default function Sidebar( {selection, setSelection} ) {
  const [data, setData] = useState(null);
  const { get, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const data = await get("/nav/years");
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="col-span-1 bg-slate-900 flex justify-end overflow-y-auto max-h-screen scrollbar">
      <aside className="w-full text-sidebar">
        <div className="flex justify-between align-middle mt-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/711/711284.png"
            alt=""
            className="size-10 invert cursor-pointer ms-2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/7168/7168076.png"
            alt=""
            className="size-8 invert me-2"
          />
        </div>

        <div className="flex justify-between items-center m-2">
          <form
            action=""
            method="post"
            className="flex justify-between items-center grow relative"
          >
            <img
              src="https://www.iconpacks.net/icons/2/free-search-icon-2907-thumb.png"
              alt=""
              className="size-7 absolute left-3 invert"
            />
            <input
              type="text"
              className="
            bg-gray-600
            rounded-full
            grow h-8
            me-1 px-4 ps-[15%]
            "
            />
          </form>
          <button className=" bg-gray-500 box-content rounded-full grow-0 flex items-center justify-center size-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/107/107799.png"
              alt=""
              className="invert size-5"
            />
          </button>
        </div>

        <ul>
          {data?.anos?.map((year, index) => (
            <SidebarItem
              key={index}
              text={year}
              nextCall="Phase"
              selection={selection}
              setSelection={setSelection}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
}

//SidebarBtns Abaixo

function SidebarItem({ text, nextCall, selection, setSelection }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const { get, error } = useFetch();

  let actualArray = [];
  let prefix = "";
  let nextURL = "";
  let nextStep = nextCall;
  let isSelected = selection.problem === text; //trocar para ID depois

  useEffect(() => {
    if (!open || data) return;

    async function fetchData() {
      if (!nextCall) return;
      const data = await get(nextURL);
      setData(data);
    }

    fetchData();
  }, [open]);

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

  return (
    <li>
      <button
        className={isSelected ? "selected-sidebar" : "item-sidebar"}
        onClick={() => {
          if (!nextStep) {
            setSelection(prev => ({ ...prev, problem: text }));
          } else {
            setOpen(!open);

            if(nextStep === "Levels"){
              setSelection(prev => ({ ...prev, year: text }))
            }
            else if(nextStep === "Questions"){
              setSelection(prev => ({ ...prev, phase: text }))
            }
            else if(nextStep === "none"){
              setSelection(prev => ({ ...prev, level: text }))
            }
          }
        }}
      >
        {prefix + text}
        {nextStep && (
          <GoChevronDown className={open?"size-6 transition":"size-6 transition rotate-180"}/>
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
