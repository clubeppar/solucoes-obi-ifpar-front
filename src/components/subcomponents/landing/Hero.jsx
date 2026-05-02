import { Link } from "react-router-dom";
import heroBackground from "../../../../images/Image Landing Page.png";



export default function Hero() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-8 bg-top bg-no-repeat px-4 py-16 md:aspect-[1440/496] md:py-0"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "100% auto",
      }}
    >
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center text-center w-full max-w-[826px] text-white">
          <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-bold mb-4">
            Resolva Problemas. Envie Código. Veja o Resultado
          </h1>
          <p className="text-base md:text-lg md:leading-7 font-medium text-center w-full max-w-[650px]">
            Uma plataforma gratuita para treinar programação competitiva
            resolvendo questões da OBI e recebendo feedback automático das suas
            soluções
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-white">
        <Link
          to="/grid"
          className="bg-blue-600 hover:bg-blue-700 custom-transition px-4 py-2 rounded-lg cursor-pointer text-sm leading-5 font-medium shadow-sm"
        >
          Começar a praticar
        </Link>

        <a
          href="#about"
          className="border border-white bg-transparent hover:bg-blue-600 hover:border-blue-600 custom-transition px-4 py-2 rounded-lg text-sm leading-5 font-medium shadow-sm"
        >
          Conheça o projeto
        </a>
      </div>
    </div>
  );
}
