import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center w-1/2 m-10 light:text-black">
        <h1 className="text-4xl font-bold m-5">
          Resolva Problemas. Envie Código. Veja o Resultado
        </h1>
        <p className="text-lg text-center w-7/8">
          Uma plataforma gratuita para treinar programação competitiva
          resolvendo questões da OBI e recebendo feedback automático das suas
          soluções
        </p>
      </div>

      <div className="flex justify-center m-5 light:text-black">
        <button className="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded-xl m-3 cursor-pointer">
          Começar a praticar
        </button>

        <Link
          to="/grid"
          className="border border-white light:border-black px-3 py-2 rounded-xl m-3"
        >
          Conheça o projeto
        </Link>
      </div>
    </>
  );
}
