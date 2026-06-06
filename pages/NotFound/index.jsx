import { Link } from "react-router-dom";
import { Topbar } from "@shared/Topbar";
import { Footer } from "@shared/Footer";
import capivara_NotFound from "assets/public/capivara_NotFound.png";

export function NotFound() {
  return (
    <div className="justify-center content-center bg-[#030712]">
      <div className="landingpage-topbar-slot">
        <Topbar collapsed={false} />
      </div>
      <div className="w-full mt-5 min-w-75 p-5 text-white flex flex-col sm:flex-row justify-center content-center">
        <div className="h-60 sm:h-158 text-center sm:text-left flex flex-col justify-center content-center gap-2">
          <h1 className="text-[120px] font-black">404</h1>
          <p className="mb-10 text-[20px]">
            <p className="font-black">Ops... Ocorreu um erro.</p>
            <p>
              A página requisitada não existe. Recomendamos que volte para a
              página inicial.
            </p>
          </p>
          <Link to={"/"}>
            <button className="bg-[#2563EB] w-38.75 h-12.75 rounded-[10px] cursor-pointer">
              Voltar ao início
            </button>
          </Link>
        </div>
        <img src={capivara_NotFound} alt="Imagem Not Found" className="w-120" />
      </div>

      <div className="col-span-full flex w-full">
        <Footer />
      </div>
    </div>
  );
}
