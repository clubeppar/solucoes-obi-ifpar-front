import { CiSearch, CiFilter } from "react-icons/ci";

export default function SearchFilter() {
  return (
    <div className="flex justify-between items-center m-2">
      <form
        action=""
        method="post"
        className="flex justify-between items-center grow relative"
      >
        <CiSearch className="size-8 absolute left-3" />
        <input
          type="text"
          className="
                  bg-gray-600
                    rounded-full
                    grow h-8
                    me-1 px-4 ps-[17%]
                  "
        />
      </form>
      <button className="bg-gray-500 box-content rounded-full grow-0 flex items-center justify-center size-8">
        <CiFilter className="size-7" />
      </button>
    </div>
  );
}
