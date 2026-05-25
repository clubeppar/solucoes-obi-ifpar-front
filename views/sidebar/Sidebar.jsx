import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { GoSidebarExpand } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";

import { useFetch } from "@hooks/useFetch";
import { SearchFilter } from "./filter/SearchFilter";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({
  selection,
  setSelection,
  onQuestionSelect,
  activeQuestion,
}) {
  const { get } = useFetch();

  const [search, setSearch] = useState(null);
  const [data, setData] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const visibleYears = data?.filter((year) => {
    if (!search) return true;
    return Object.prototype.hasOwnProperty.call(search, year);
  });

  useEffect(() => {
    async function fetchData() {
      const data = await get("/nav/years");
      const orderedData = data?.anos?.reverse();
      setData(orderedData);
    }

    fetchData();
  }, []);

  return (
    <div
      className={`sidebar-bg scrollbar ${!collapsed ? `border-0` : `border-e border-gray-800`}`}
    >
      <aside className="sidebar-text sidebar-aside">
        <div className="light:bg-gray-500">
          <div
            className={
              !collapsed
                ? `flex justify-between pt-2 items-center`
                : `flex flex-col items-center pt-2 mx-1 gap-y-2 `
            }
          >
            {!collapsed && (
              <Link to="/">
                <FaCode
                  className={
                    !collapsed
                      ? `size-12 cursor-pointer ms-2`
                      : `size-12 cursor-pointer`
                  }
                />
              </Link>
            )}
            <GoSidebarExpand
              className={
                !collapsed
                  ? `size-10 cursor-pointer me-2`
                  : `size-10 cursor-pointer rotate-180`
              }
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
          {!collapsed && <SearchFilter setDataSidebar={setSearch} />}
        </div>

        {!collapsed && (
          <>
            <ul>
              {visibleYears?.map((year) => {
                return (
                  <SidebarItem
                    key={year}
                    text={year}
                    nextCall="Phase"
                    search={search}
                    selection={selection}
                    setSelection={setSelection}
                    onQuestionSelect={onQuestionSelect}
                    activeQuestion={activeQuestion}
                  />
                );
              })}
            </ul>
            {visibleYears?.length === 0 && (
              <div className="h-[75%] max-w-full flex flex-col justify-center items-center">
                <IoIosWarning className="size-8 mb-4" />
                <p className="font-semibold">Nenhum resultado encontrado</p>
                <p className="font-semibold">Tente novamente em breve</p>
              </div>
            )}
          </>
        )}
      </aside>
    </div>
  );
}
