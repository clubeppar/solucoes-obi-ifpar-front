export default function Task({
  numTask,
  status,
  taskTime,
  taskMemory,
  formatTime,
  formatMemory,
}) {
  return (
    <div className="flex flex-1 flex-col min-w-50 justify-between rounded-xl border border-white/10 bg-gray-950 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-gray-400">TESTE {numTask}</p>
          <p className="my-2 text-lg font-semibold text-white">
            {status ? "OK" : "Erro"}
          </p>
        </div>

        <span
          className={
            (status
              ? "border-green-500/40 bg-green-500/10 text-green-400"
              : "border-red-500/40 bg-red-500/10 text-red-400") +
            " rounded-full border px-3 py-1 text-sm font-bold"
          }
        >
          {status ? "Aprovado" : "Falhou"}
        </span>
      </div>

      <div className="grid gap-2 text-sm text-gray-300">
        <div className="flex items-center justify-between gap-4 rounded-lg bg-white/5 px-3 py-2">
          <span>Tempo</span>
          <span className="font-semibold text-white">
            {formatTime(taskTime)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg bg-white/5 px-3 py-2">
          <span>Memória</span>
          <span className="font-semibold text-white">
            {formatMemory(taskMemory)}
          </span>
        </div>
      </div>
    </div>
  );
}
