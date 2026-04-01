import { useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";

let api2 = { ano: 2022, fases: [1, 2, 3] };

let api3 = { ano: 2022, fase: [1, 2, 3], niveis: ["j", "1", "2", "s"] };

let api4 = {
  ano: 2022,
  fase: 1,
  nivel: "1",
  questoes: ["nome", "otonome", "kaio", "AAAAAAAAAAAAAAAA"],
};

export default function Sidebar() {
  const [questionSelect, setQuestionSelect] = useState(null);
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
              questionSelect={questionSelect}
              setQuestionSelect={setQuestionSelect}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
}

//SidebarBtns Abaixo

function SidebarItem({ text, nextCall, questionSelect, setQuestionSelect }) {
  const [open, setOpen] = useState(false);

  let actualArray = [];
  let prefix = "";
  let isSelected = questionSelect === `${text}`; //trocar para ID depois

  switch (nextCall) {
    case "Phase":
      actualArray = api2.fases;
      nextCall = "Levels";
      prefix = "";
      break;
    case "Levels":
      actualArray = api3.niveis;
      nextCall = "Questions";
      prefix = "Fase ";
      break;
    case "Questions":
      actualArray = api4.questoes;
      nextCall = "none";
      prefix = "Nivel ";
      break;
    default:
      nextCall = null;
      break;
  }

  return (
    <li>
      <button
        className={`item-sidebar ${isSelected ? "selected-sidebar" : ""}`}
        onClick={() => {
          if (!nextCall) {
            setQuestionSelect(`${text}`);
          } else {
            setOpen(!open);
          }
        }}
      >
        <p>{prefix + text}</p>
        {nextCall && (
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-down-icon.png"
            alt=""
            className={
              open
                ? "size-4 invert transition"
                : "size-4 invert transition rotate-180"
            }
          />
        )}
      </button>
      {open && (
        <ul className="ml-8 max-w-full overflow-x-hidden">
          <li>
            {actualArray.map((item, index) => (
              <SidebarItem
                key={index}
                text={item}
                nextCall={nextCall}
                questionSelect={questionSelect}
                setQuestionSelect={setQuestionSelect}
              />
            ))}
          </li>
        </ul>
      )}
    </li>
  );
}
