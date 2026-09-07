import { HalfDonutChart } from "@ui/HalfDonutChart";
import { SubtaskProblem } from "./SubtaskProblem";

export function ResultsProblem({ submitDataInfo, subtasks }) {
  const {
    total_subtasks: totalSubtasks,
    correct_subtasks: correctSubtasks,
    max_memory: maxMemory,
    max_time: maxTime,
    user_code: userCode,
  } = submitDataInfo;

  const subtaskPercent = (correctSubtasks / totalSubtasks) * 100;
  const resultMessage =
    subtaskPercent === 100
      ? "Perfeito"
      : subtaskPercent >= 50
        ? "Dá para melhorar"
        : "Tudo errado";

  const formatValue = (value, text) => {
    if (value == null) return `0.0000 ${text}`;
    return `${value.toFixed(4)} ${text}`;
  };

  return (
    <div className="flex mx-10 rounded-xl overflow-hidden bg-gray-800">
      <aside className="flex-none w-72 p-8 space-y-4">
        <div className="text-center">
          <HalfDonutChart percentage={subtaskPercent} />
          <p className="font-semibold">{resultMessage}</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <p className="text-xl font-semibold">
              {correctSubtasks}/{totalSubtasks}
            </p>
            <p className="font-medium text-gray-300">Subtarefas</p>
          </div>
        </div>

        <div className="mx-2 space-y-3">
          <div>
            <p className="text-lg font-semibold">{formatValue(maxTime, "s")}</p>
            <p className="text-gray-300">Pior tempo</p>
          </div>
          <div>
            <p className="text-lg font-semibold">
              {formatValue(maxMemory, "MB")}
            </p>
            <p className="text-gray-300">Pior uso de memória</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 border-l border-gray-900 bg-gray-900">
        <table className="w-full">
          <colgroup>
            <col className="w-40" />
            <col className="w-32" />
            <col className="w-32" />
            <col className="w-32" />
            <col className="w-16" />
          </colgroup>

          <thead className="bg-gray-800">
            <tr className="h-16">
              <th></th>
              <th className="text-center font-bold text-gray-300">Memória</th>
              <th className="text-center font-bold text-gray-300">Tempo</th>
              <th className="text-center font-bold text-gray-300">Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {subtasks.map((subtask, index) => (
              <SubtaskProblem
                key={index}
                index={index}
                subtask={subtask}
                userCode={userCode}
                formatValue={formatValue}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
