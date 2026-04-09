import { useEffect, useState } from "react";

import { GoSidebarExpand } from "react-icons/go";
import { FaCode } from "react-icons/fa6";

import { useFetch } from "../../../../hooks/useFetch";
import SearchFilter from "./sidebar_components/SearchFilter";
import SidebarItem from "./sidebar_components/SidebarItem";

export default function Sidebar({ selection, setSelection }) {
  const [data, setData] = useState(null);
  const { get } = useFetch();

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
          <FaCode className="size-10 cursor-pointer ms-2" />
          <GoSidebarExpand className="size-8 me-2" />
        </div>

        <SearchFilter />

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
