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
    tipoFalha: ""
  },
  {
    nTeste: 2,
    status: "Reprovado",
    tempoTeste: 150,
    menorTempo: 5,
    usoMemoria: 15,
    tipoFalha: "Tempo excedido"
  },
  {
    nTeste: 3,
    status: "Erro",
    tempoTeste: 200,
    menorTempo: 10,
    usoMemoria: 20,
    tipoFalha: ""
  }
];

export default function MainPage() {
  const [year] = useState(2025);
  const [fase] = useState(3);
  const [level] = useState("Júnior");
  const [question] = useState("nome");
  return (
    <>
      <div className="col-span-3 bg-slate-900 text-white">
        <Topbar collapsed={true} />

        <Header year={year} fase={fase} level={level} question={question} />

        <Input />

        <Results testes={teste} />
      </div>
    </>
  );
}