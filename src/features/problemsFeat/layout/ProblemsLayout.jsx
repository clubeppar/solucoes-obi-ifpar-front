import { useEffect, useState } from "react";

import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

import {
  HeaderProblem,
  InputProblem,
  ResultsProblem,
  EmptySelectionProblem,
  CompileError,
} from "@feats/problemsFeat";

import { useFetch } from "@hooks";

export function ProblemsLayout({ selection, clearSelection }) {
  const { year, level, phase, problem, flag } = selection;

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const [submitDataInfo, setSubmitDataInfo] = useState(null);
  const [subtasks, setSubtasks] = useState(null);
  const [compileError, setCompileError] = useState(null);

  const { post } = useFetch();

  const isEmptySelection = Object.values(selection).some((v) => v === "");

  const handleSetFile = (event) => {
    const selectedFile = event.target.files[0];

    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const handleClearFile = () => {
    setFileName("");
    setFile(null);
    setCompileError(null);
  };

  const handleUpload = async () => {
    const body = {
      year: year.toLowerCase(),
      phase: phase.toLowerCase(),
      level: level.toLowerCase(),
      name: problem.toLowerCase(),
      filename: fileName,
      file: await file.text(),
    };
    try {
      const data = await post("/questions/validate", body);

      const { subtasks, ...dataInfo } = data;

      setSubtasks(subtasks);
      setSubmitDataInfo(dataInfo);

      handleClearFile();
    } catch (err) {
      setCompileError([err, fileName]);
    }
  };

  useEffect(() => {
    const clearFile = () => {
      setFileName("");
      setFile(null);
      setSubmitDataInfo(null);
      setSubtasks(null);
      setCompileError(null);
    };

    clearFile();
  }, [selection]);

  return (
    <div className="mainpage-layout scrollbar">
      {isEmptySelection ? (
        <EmptySelectionProblem />
      ) : (
        <>
          <HeaderProblem
            year={year}
            fase={phase}
            level={level}
            question={problem}
            isEmpty={isEmptySelection}
            file={file}
            onSubmit={handleUpload}
            clearSelection={clearSelection}
          />

          <div className="header-wrapper">
            <div className="header-content">
              <h1 className="text-2xl light:text-black">{problem}</h1>
              <div className="flex items-center gap-2">
                <button
                  disabled={file == null || file.size / 1024 == 0 || !flag}
                  className="header-btn-submit"
                  onClick={handleUpload}
                >
                  <MdOutlineFileUpload className="mr-1 w-6 h-6" />
                  Enviar questão
                </button>
              </div>
            </div>
          </div>

          <InputProblem
            fileName={fileName}
            file={file}
            onFileChange={handleSetFile}
            clearFile={handleClearFile}
            problem={problem.toLowerCase()}
          />

          <div className="header-wrapper">
            {flag ? null : (
              <div className="flex items-center gap-3 m-3 p-3 bg-red-700/40 rounded-2xl border-red-900 border">
                <IoIosWarning className="size-5 text-red-300" />
                <p className="font-semibold text-white">
                  Infelizmente o gabarito desse problema não é disponibilizado
                  :/
                </p>
              </div>
            )}
          </div>

          {subtasks && (
            <div className="">
              <div className="mx-6 my-4 space-y-1">
                <h4 className="text-xl font-bold">Resultados</h4>
                <p className="text-sm font-semibold text-gray-400">
                  Tempo de execução e uso de memória em cada subtarefa
                </p>
                <p className="text-sm font-semibold text-gray-400">
                  Esses dados não serão salvos
                </p>
              </div>

              <ResultsProblem
                submitDataInfo={submitDataInfo}
                subtasks={subtasks}
              />
            </div>
          )}

          {compileError && <CompileError message={compileError} />}
        </>
      )}
    </div>
  );
}
