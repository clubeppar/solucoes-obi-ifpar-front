import { useState } from "react";

import Topbar from "../../global_components/Topbar";

import Header from "./main_components/Header";
import Input from "./main_components/Input";
import Results from "./main_components/Results";

let teste = [
  {
    nTeste: 1,
    status: "Aprovado",
    tempoTeste: 100,
    menorTempo: 2,
    usoMemoria: 10,
    tipoFalha: "",
  },
  {
    nTeste: 2,
    status: "Reprovado",
    tempoTeste: 150,
    menorTempo: 5,
    usoMemoria: 15,
    tipoFalha: "Tempo excedido",
  },
  {
    nTeste: 3,
    status: "Erro",
    tempoTeste: 200,
    menorTempo: 10,
    usoMemoria: 20,
    tipoFalha: "",
  },
];

export default function MainPage({ selection }) {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

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

  const handleUpload = () => {
    console.log("Nome do arquivo:", fileName);
    console.log("Arquivo selecionado:", file);

    handleCancel();
  };

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

      <Results testes={teste} />
    </div>
  );
}
