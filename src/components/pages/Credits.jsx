import { useNavigate } from "react-router-dom";

import Topbar from "@/global_components/Topbar";
import Footer from "@/global_components/Footer";

import ContributorCard from "@/subcomponents/credits/contributorcard";
import { CONTRIBUTORS } from "@/subcomponents/credits/contributors";

export default function Credits() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
        <div className="col-span-full bg-gray-950 flex items-center h-16">
          <Topbar colapsed={false} />
        </div>

        <div className="col-span-full bg-slate-900 light:bg-white flex flex-col items-center justify-start text-white">
          <div className="text-5xl font-bold text-center mt-16 mb-16">
            Contribuições
          </div>
          <div className="grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full justify-content:center">
            {CONTRIBUTORS.map((person, index) => (
              <ContributorCard
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
              />
            ))}
          </div>
          <div className="bottom-0 bg-slate-900 w-full flex justify-center flex-col items-center light:bg-white">
            {/* tentar fazer mais parecido com o figma */}
            <div className="w-fit mt-2 text-center text-[16px]/[24px] font-normal display-inline-block  border-2 border-gray-700 rounded-[20px]  light:text-black">
              Feito por alunos, para alunos
            </div>
            {/* mudar cor do botão quando hover */}
            <button
              onClick={() => navigate("/")}
              className="mt-4 mb-4 bg-blue-600 pr-10 pl-10 pt-2.5 pb-2.5 rounded-lg text-[14px]/[20px] font-medium cursor-pointer transition hover:bg-gray-400"
            >
              Voltar para o inicio
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
