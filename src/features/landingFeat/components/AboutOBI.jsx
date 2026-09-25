import { BiWorld } from "react-icons/bi";

export function AboutOBI() {
  return (
    <div className="about-container">
      <div className="about-icon-container">
        <BiWorld className="w-6 h-6 mr-1" />
        Sobre a OBI
      </div>

      <div className="mt-9">
        <img src="src/assets/images/others/OBI_logo.png" alt="Logo da OBI"></img>
      </div>

      <div className="mt-9 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="text-blue-500">A Principal Olimpíada</span>
          {" "}de Programação do Brasil
        </h2>
        <p className="text-center w-2/3">
          A plataforma reúne questões da Olimpíada Brasileira de Informática em um
          ambiente onde estudantes podem resolver desafios e testar
          automaticamente suas soluções. Basta escolher um problema, enviar seu
          código e receber o resultado da execução com informações detalhadas
          sobre os testes.
        </p>
      </div>

      <a
        href="https://olimpiada.ic.unicamp.br/"
        className="bg-blue-600 hover:bg-blue-700 mt-6 custom-transition px-4 py-2 rounded-lg cursor-pointer text-sm leading-5 font-medium shadow-sm"
      >
        Acesse o site da OBI
      </a>
    </div>
  );
}