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

  return (
    <>
      <div className="col-span-3 bg-slate-900 text-white">
        <Topbar collapsed={true} />

        <Header 
        year={selection.year} 
        fase={selection.phase} 
        level={`Nivel ${selection.level}`} 
        question={selection.problem} 
        />

        <Input />

        <Results testes={teste} />
      </div>
    </>
  );
}
