import { useEffect, useState } from "react";

import Topbar from "../../global_components/Topbar";

import Header from "./main_components/Header";
import Input from "./main_components/Input";
import Results from "./main_components/Results";

import { useFetch } from "../../../../hooks/useFetch";

export default function MainPage({ selection }) {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const [largerMemory, setLargerMemory] = useState(null);
  const [longerTime, setLongerTime] = useState(null);
  const [subtasks, setSubtasks] = useState(null);

  const { post } = useFetch();

  const handleSetFile = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const handleCancel = () => {
    setFileName("");
    setFile(null);
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
  };

  // TIRAR DEPOIS DOS TESTES: NÃO DEVE EXISTIR ESSE HOOK EM PRODUÇÃO
  useEffect(() => {
    console.log(subtasks);
    console.log(longerTime);
    console.log(largerMemory);
  }, [subtasks]);

  return (
    <div className="h-full bg-slate-900 text-white overflow-y-auto light:bg-white">
      <Topbar collapsed={true} />

      <Header
        year={selection.year}
        fase={selection.phase}
        level={selection.level}
        question={selection.problem}
        file={file}
        cancel={handleCancel}
        onSubmit={handleUpload}
      />

      <Input fileName={fileName} file={file} onFileChange={handleSetFile} />

      <Results memory={largerMemory} time={longerTime} subtasks={subtasks} />
    </div>
  );
}
