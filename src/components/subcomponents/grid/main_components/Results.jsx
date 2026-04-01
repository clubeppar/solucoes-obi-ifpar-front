import Teste from "./Teste";

export default function Results({ testes }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="w-19/20 m-3 text-2xl ">Resultado:</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-19/20 flex justify-between">
          {testes.map((t) => (
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
    </>
  );
}
