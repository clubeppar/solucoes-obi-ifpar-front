import { SearchFilter } from "./SearchFilter"

export function CollapsedSearchFilter( {setDataSidebar, setSmallFilterOpen, setCollapsed} ) {
  return (
    <div className="w-max h-12 rounded-2xl fixed inset-x-15 inset-y-15 z-100 flex items-center justify-center bg-gray-800">
      <SearchFilter setDataSidebar={setDataSidebar} setSmallFilterOpen={setSmallFilterOpen} setCollapsed={setCollapsed}/>
    </div>
  )
} 

export default CollapsedSearchFilter