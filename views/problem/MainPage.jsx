import { useEffect, useState } from "react";

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

  const { post } = useFetch();

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

  const handleUpload = async () => {
    const { year, level, phase } = selection;
    const body = {
      year: year,
      phase: phase,
      level: level,
      name: selection.problem.toLowerCase(),
      filename: fileName,
      file: await file.text(),
    };
    const res = await post("/questions/validate", body);
    const data = await res.data;
    setResponseValues(data.max_memory, data.max_time, data.subtasks);
    setFileName("");
    setFile(null);
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

          <Input fileName={fileName} file={file} onFileChange={handleSetFile} />

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
