import { Subtask } from "@/subcomponents/grid/main_components/Subtask";

export function Results({ subtasks, maxTime, maxMemory }) {
  const formatTime = (value) => {
    if (value == null) {
      return "0.0000 s";
    }

    return `${value.toFixed(4)} s`;
  };

  const formatMemory = (value) => {
    if (value == null) {
      return "0.0000 MB";
    }

    return `${value.toFixed(4)} MB`;
  };

  if (!subtasks) {
    return null;
  }

  return (
    <div className="mx-auto flex w-11/12 flex-col gap-6 py-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Resultados</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gray-900 p-4">
            <p className="text-md text-gray-400">PIOR TEMPO DE EXECUÇÃO</p>
            <p className="mt-2 text-2xl font-bold text-white">
              {formatTime(maxTime)}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-900 p-4">
            <p className="text-md text-gray-400">PIOR USO DE MEMÓRIA</p>
            <p className="mt-2 text-2xl font-bold text-white">
              {formatMemory(maxMemory)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {subtasks.map((subtask, index) => (
          <Subtask
            key={index}
            numSubtask={index + 1}
            tasks={subtask.tests}
            formatTime={formatTime}
            formatMemory={formatMemory}
          />
        ))}
      </div>
    </div>
  );
}
