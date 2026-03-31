import { useState } from "react";
import Teste from "./Teste";
import Topbar from "./Topbar";

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
        <Topbar collapsed={true}/>
        <div className="flex justify-center items-center">
          <h4 className="flex text-gray-400 w-19/20 m-3">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
            {year} {">"} Fase {fase} {">"} {level} {">"}<span className="text-blue-500 ml-1">{question}</span>
          </h4>
        </div>


        <div className="flex justify-center items-center">
          <div className="flex justify-between w-19/20 m-3">
            <h1 className="text-2xl">{question}</h1>
            <button className="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded-xl cursor-pointer">
              Enviar questão
            </button>
          </div>
        </div>


        <div className="flex justify-center items-center">
          <label htmlFor="file-upload" className="bg-gray-800 w-19/20 cursor-pointer p-4 rounded-xl flex flex-col items-center gap-2">
            <svg className="text-xl" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" /></svg>
            <h4 className="text-gray-300">
              <span className="font-bold text-white">Click to upload </span>
              or drag and drop
            </h4>
            <h5 className="text-xs text-gray-300">py, js, ts, cpp, or cs</h5>
          </label>
          <input id="file-upload" type="file" className="hidden" />
        </div>

        <div className="flex justify-center items-center">
          <h1 className="w-19/20 m-3 text-2xl ">Resultado:</h1>
        </div>

        <div className="flex justify-center">
          <div className="w-19/20 flex justify-between">
            {teste.map((t) => (
            <Teste
              key={t.nTeste}
              nTeste={t.nTeste}
              status={t.status}
              tempoTeste={t.tempoTeste}
              menorTempo={t.menorTempo}
              usoMemoria={t.usoMemoria}
              tipoFalha={t.tipoFalha}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  );
}