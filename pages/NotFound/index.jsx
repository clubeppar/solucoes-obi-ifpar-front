import { Link } from "react-router-dom";
import { Topbar } from "../../shared/components/Topbar";
import capivara_NotFound from "../../shared/images/public/capivara_NotFound.png"

export function NotFound(){
    return (<div className="justify-center content-center bg-[#030712]">
        <div className="landingpage-topbar-slot">
          <Topbar collapsed={false} />
        </div>
        <div className="w-full mt-5 min-w-[300px] p-5 text-white flex flex-col sm:flex-row justify-center content-center">
            <div className="h-60 sm:h-158 text-center sm:text-left flex flex-col justify-center content-center gap-2">
                <h1 className="text-[120px] font-black">404</h1>
                <p className="mb-10 text-[20px]">
                    <span className="font-black">Ops... Ocorreu um erro.</span> <br />
                    A página requisitada não existe. Recomendamos que volte para a página inicial.
                </p>
                <Link to={"/"}>
                    <button className="bg-[#2563EB] w-[155px] h-[51px] rounded-[10px]">Voltar ao início</button>
                </Link>
            </div>
            <img src={capivara_NotFound} alt="Imagem Not Found" className="w-120"/>
        </div>
    </div>);
};