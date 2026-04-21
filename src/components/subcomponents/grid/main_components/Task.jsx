export default function Task({ numTask, status, taskTime, taskMemory }) {
  return (
    <div>
      <h1 className="flex text-xl light:text-black">
        Teste {numTask} -
        <span
          className={(status ? "text-green-500" : "text-red-500") + " ml-2"}
        >
          {status ? "OK" : "erro"}
        </span>
        <span className="flex text-gray-400 light:text-gray-700 text-xs items-center justify-center">
          <svg
            className="ml-2 w-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M339.5-108.5q-65.5-28.5-114-77t-77-114Q120-365 120-440t28.5-140.5q28.5-65.5 77-114t114-77Q405-800 480-800t140.5 28.5q65.5 28.5 114 77t77 114Q840-515 840-440t-28.5 140.5q-28.5 65.5-77 114t-114 77Q555-80 480-80t-140.5-28.5ZM480-440Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z" />
          </svg>
          {taskTime} ms
        </span>
      </h1>

      <p className="light:text-black">
        Uso de memória:{" "}
        <span className="text-gray-400 light:text-gray-700">
          {taskMemory} KB
        </span>
      </p>
    </div>
  );
}
