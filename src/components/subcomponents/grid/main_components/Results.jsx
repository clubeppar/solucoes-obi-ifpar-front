import Subtask from "./Subtask";

export default function Results({ subtasks }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="w-19/20 m-3 text-2xl ">Resultado:</h1>
      </div>

      <div className="flex justify-left">
        <div>
          {subtasks &&
            subtasks.map((subtask, index) => (
              <Subtask
                key={index}
                numSubtask={index + 1}
                tasks={subtask.tests}
              />
            ))}
        </div>
      </div>
    </>
  );
}
