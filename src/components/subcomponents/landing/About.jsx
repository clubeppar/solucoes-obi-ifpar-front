import { MdTab } from "react-icons/md";

export function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-icon-container">
        <MdTab className="w-6 h-6 mr-1"/>
        Sobre a plataforma
      </div>
      <h2 className="text-3xl font-bold mb-2 text-center">
        Um Ambiente de Prática para{" "}
        <span className="text-blue-500">Programação Competitiva</span>
      </h2>
      <p className="text-center w-1/2">
        A plataforma reúne questões da Olimpíada Brasileira de Informática em um
        ambiente onde estudantes podem resolver desafios e testar
        automaticamente suas soluções. Basta escolher um problema, enviar seu
        código e receber o resultado da execução com informações detalhadas
        sobre os testes.
      </p>
    </div>
  );
}
