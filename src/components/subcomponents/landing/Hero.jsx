import { Link } from "react-router-dom";
import heroBackground from "../../../../images/Image Landing Page.png";

export default function Hero() {
  return (
    <div
      className="bg-center bg-no-repeat bg-contain w-full min-h-125 flex flex-col justify-center m-12"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center text-center w-1/2 m-10 text-white">
          <h1 className="text-[40px] font-bold mb-4">
            Resolva Problemas. Envie Código. Veja o Resultado
          </h1>
          <p className="text-lg text-center w-7/8">
            Uma plataforma gratuita para treinar programação competitiva
            resolvendo questões da OBI e recebendo feedback automático das suas
            soluções
          </p>
        </div>
      </div>

      <div className="flex justify-center m-5 text-white">
        <Link
          to="/grid"
          className="bg-blue-600 hover:bg-blue-700 custom-transition px-3 py-2 rounded-xl m-3 cursor-pointer"
        >
          Começar a praticar
        </Link>

        <a
          href="#about"
          className="border border-white hover:bg-gray-700 custom-transition px-3 py-2 rounded-xl m-3"
        >
          Conheça o projeto
        </a>
      </div>
    </div>
  );
}
