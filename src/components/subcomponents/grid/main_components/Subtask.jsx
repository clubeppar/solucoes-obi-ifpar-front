import Task from "./Task";

export default function Subtask({ numSubtask, tasks }) {
  return (
    <>
      <p>subtarefa {numSubtask}</p>
      <div>
        {tasks &&
          tasks.map((task, index) => (
            <Task
              key={index}
              numTask={index + 1}
              status={task.sucess}
              taskTime={task.time}
              taskMemory={task.memory}
            />
          ))}
      </div>
    </>
  );
}
