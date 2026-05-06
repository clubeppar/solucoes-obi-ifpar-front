import { useEffect, useState } from "react";

import { GoSidebarExpand } from "react-icons/go";
import { FaCode } from "react-icons/fa6";

import { useFetch } from "@/hooks/useFetch";
import { SearchFilter } from "@/subcomponents/grid/sidebar_components/SearchFilter";
import { SidebarItem } from "@/subcomponents/grid/sidebar_components/SidebarItem";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    async function fetchData() {
      const data = await get("/nav/years");
      const orderedData = data?.anos?.reverse();
      setData(orderedData);
    }

    fetchData();
  }, []);

  const visibleYears = data?.filter((year) => {
    if (!search) {
      return true;
    }

    return Object.prototype.hasOwnProperty.call(search, year);
  });

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
            <Link to="/">
              <FaCode
                className={
                  !collapsed
                    ? `size-12 cursor-pointer ms-2`
                    : `size-12 cursor-pointer`
                }
              />
            </Link>
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
              {visibleYears?.map((year, index) => {
                return (
                  <SidebarItem
                    key={index}
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
              <p>Nenhum resultado encontrado</p>
            )}
          </>
        )}
      </aside>
    </div>
  );
}
