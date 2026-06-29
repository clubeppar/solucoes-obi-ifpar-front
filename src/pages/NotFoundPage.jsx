import { Link } from "react-router-dom";
import { Topbar } from "../components/layout/Topbar";
import { Footer } from "../components/layout/Footer";
import capivara_NotFound from "../assets/images/others/capivara_NotFound.png";

export function NotFoundPage() {
  return (
    <div className="min-h-screen w-full justify-center content-center bg-[#030712]">
      <div className="landingpage-topbar-slot">
        <Topbar collapsed={false} />
      </div>
      <div className="min-w-full min-w-75 p-5 text-white flex flex-col mr-auto ml-auto md:flex-row justify-center content-center">
        <div className="md:h-158 text-center md:text-left flex flex-col justify-center content-center">
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
        <img src={capivara_NotFound} alt="Imagem de Not-Found" className="w-120 ml-auto mr-auto md:ml-0 md:mr-0" />
      </div>

      <div className="col-span-full flex w-full h-full">
        <Footer />
      </div>
    </div>
  );
}
