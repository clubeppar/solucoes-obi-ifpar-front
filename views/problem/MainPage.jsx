import { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

// tirar uso da topbar aqui e colocar no /page/GridPage
import { Topbar } from "@shared/Topbar";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Results } from "./components/Results";
import { EmptySelection } from "./components/EmptySelection";

import { useFetch } from "@hooks/useFetch";

export function MainPage({ selection, clearSelection }) {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const [largerMemory, setLargerMemory] = useState(null);
  const [longerTime, setLongerTime] = useState(null);
  const [subtasks, setSubtasks] = useState(null);

  const [problemFlag, setProblemFlag] = useState(null); // if it's false, there is no answer key
  // so, user can't submit in this problem

  const { get, post } = useFetch();

  const isEmptySelection = Object.values(selection).some((v) => v == "");

  const handleSetFile = (event) => {
    const selectedFile = event.target.files[0];

    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const setResponseValues = (memory, time, subtasks) => {
    setLargerMemory(memory);
    setLongerTime(time);
    setSubtasks(subtasks);
  };

  const handleClearFile = () => {
    setFileName("");
    setFile(null);
  };

  const handleUpload = async () => {
    setSubtasks(null);
    const { year, level, phase } = selection;
    const body = {
      year: year.toLowerCase(),
      phase: phase.toLowerCase(),
      level: level.toLowerCase(),
      name: selection.problem.toLowerCase(),
      filename: fileName,
      file: await file.text(),
    };
    const res = await post("/questions/validate", body);
    const data = await res.data;
    setResponseValues(data.max_memory, data.max_time, data.subtasks);
    handleClearFile();
  };

  useEffect(() => {
    const clearFile = () => {
      setFileName("");
      setFile(null);
      setLargerMemory(null);
      setLongerTime(null);
      setSubtasks(null);
    };

    clearFile();
  }, [selection]);

  useEffect(() => {
    if (isEmptySelection) return;

    const getFlagProblem = async () => {
      const { year, phase, level, problem } = selection;
      const res = await get(
        `/nav/years/${year.toLowerCase()}/phases/${phase.toLowerCase()}/levels/${level.toLowerCase()}/problems/${problem.toLowerCase()}`,
      );
      const flag = await res.flag;
      setProblemFlag(flag);
    };

    getFlagProblem();
  }, [isEmptySelection, selection]);

  return (
    <div className="mainpage-layout">
      <Topbar collapsed={true} />

      {isEmptySelection ? (
        <EmptySelection />
      ) : (
        <>
          <Header
            year={selection.year}
            fase={selection.phase}
            level={selection.level}
            question={selection.problem}
            isEmpty={isEmptySelection}
            file={file}
            onSubmit={handleUpload}
            clearSelection={clearSelection}
          />

          <div className="header-wrapper">
            <div className="header-content">
              <h1 className="text-2xl light:text-black">{selection.problem}</h1>
              <div className="flex items-center gap-2">
                <button
                  disabled={
                    file == null || file.size / 1024 == 0 || !problemFlag
                  }
                  className="header-btn-submit"
                  onClick={handleUpload}
                >
                  <MdOutlineFileUpload className="mr-1 w-6 h-6" />
                  Enviar questão
                </button>
              </div>
            </div>
          </div>

          <Input
            fileName={fileName}
            file={file}
            onFileChange={handleSetFile}
            clearFile={handleClearFile}
          />

          <div className="header-wrapper">
            {problemFlag ? null : (
              <div className="flex items-center gap-3 m-3 p-3 bg-red-700/40 rounded-2xl border-red-900 border">
                <IoIosWarning className="size-5 text-red-300" />
                <p className="font-semibold text-white">
                  Infelizmente o gabarito desse problema não é disponibilizado :/
                </p>
              </div>
            )}
          </div>

          <Results
            subtasks={subtasks}
            maxMemory={largerMemory}
            maxTime={longerTime}
          />
        </>
      )}
    </div>
  );
}
