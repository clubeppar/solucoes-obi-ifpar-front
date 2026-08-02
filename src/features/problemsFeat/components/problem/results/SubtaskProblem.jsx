import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

import { TestProblem } from "./TestProblem";

export function SubtaskProblem({ index, subtask, formatValue }) {
  const [open, setOpen] = useState(false);

  const {
    total_tests: totalTests,
    correct_tests: correctTests,
    tests,
  } = subtask;

  const testsPercent = (correctTests / totalTests) * 100;

  return (
    <>
      <tr className="h-16 border-y border-gray-800">
        <td className="text-gray-300 px-4 font-bold">Subtarefa {index + 1}</td>
        <td></td>
        <td></td>
        <td className="px-5">
          <div className="mx-auto relative h-6 w-40 rounded-full bg-gray-700">
            <div
              className="absolute h-full rounded-full bg-green-600"
              style={{ width: `${testsPercent}%` }}
            />
            <div className="relative flex h-full items-center justify-center">
              <p className="text-xs font-semibold">
                {correctTests}/{totalTests}
              </p>
            </div>
          </div>
        </td>
        <td
          className="pr-4 text-right cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <GoChevronDown
            className={`size-6 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </td>
      </tr>

      {open &&
        tests.map((test, index) => (
          <TestProblem
            key={index}
            index={index}
            test={test}
            formatValue={formatValue}
          />
        ))}
    </>
  );
}
