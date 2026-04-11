import { useEffect, useState } from "react";

import { GoSidebarExpand } from "react-icons/go";
import { FaCode } from "react-icons/fa6";

import { useFetch } from "../../../../hooks/useFetch";
import SearchFilter from "./sidebar_components/SearchFilter";
import SidebarItem from "./sidebar_components/SidebarItem";

export default function Sidebar({
  selection,
  setSelection,
  onQuestionSelect,
  activeQuestion,
}) {
  const [data, setData] = useState(null);
  const { get } = useFetch();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await get("/nav/years");
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className={`h-full bg-slate-900  flex justify-end overflow-y-auto scrollbar ${!collapsed?`border-0`:`border-e border-gray-800`} light:bg-white`}>
      <aside className="w-full text-sidebar light:text-black">
        <div className="light:bg-gray-500">
          <div className={!collapsed?`flex justify-between pt-2 `:`flex flex-col items-center pt-2 mx-1 gap-y-2 `}>
            <FaCode className={!collapsed?`size-10 cursor-pointer ms-2`:`size-10 cursor-pointer`} />
            <GoSidebarExpand className={!collapsed?`size-8 cursor-pointer transition me-2`:`size-10 cursor-pointer transition rotate-180`} onClick={() => setCollapsed(!collapsed)}/>
          </div>
          {!collapsed && <SearchFilter />}
        </div>

        {!collapsed && (
          <>
            <ul>
              {data?.anos?.map((year, index) => (
                <SidebarItem
                  key={index}
                  text={year}
                  nextCall="Phase"
                  selection={selection}
                  setSelection={setSelection}
                  onQuestionSelect={onQuestionSelect}
                  activeQuestion={activeQuestion}
                />
              ))}
            </ul>
          </>
        )}
      </aside>
    </div>
  );
}
