export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center m-12 light:text-black">
      <div
        className="flex items-center justify-center border border-blue-500 p-2 mb-5
            rounded-3xl m-3 bg-blue-950 text-blue-600 font-bold light:bg-blue-600 light:text-black light:border-blue-900"
      >
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M160-240h640v-320H520v-160H160v480Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80v-480 480Z" />
        </svg>
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
