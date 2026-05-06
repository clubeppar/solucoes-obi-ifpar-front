import { Task } from "@/subcomponents/grid/main_components/Task";

export function Subtask({
  numSubtask,
  tasks,
  formatTime,
  formatMemory,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-4">
      <p className="text-md text-gray-400">SUBTAREFA {numSubtask}</p>

      <div className="mt-4 flex flex-wrap justify-between gap-4">
        {tasks &&
          tasks.map((task, index) => (
            <Task
              key={index}
              numTask={index + 1}
              status={task.success}
              taskTime={task.time}
              taskMemory={task.memory}
              formatTime={formatTime}
              formatMemory={formatMemory}
            />
          ))}
      </div>
    </div>
  );
}
