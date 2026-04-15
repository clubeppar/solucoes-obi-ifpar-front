import Topbar from "../global_components/Topbar";

import ContributorCard from "../subcomponents/credits/contributorcard";
import { contributors } from "../subcomponents/credits/contributors";

export default function Credits() {
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
            {contributors.map((person, index) => (
              <ContributorCard className="lm-[26px]"
              key={index}
              name={person.name}
              role={person.role}
              image={person.image}
              />
            ))}
          </div>
          <div className="fixed bottom-0 bg-slate-900 w-full flex justify-center flex-col items-center light:bg-white"> 
            <div className="w-fit mt-[8px] text-center text-[16px]/[24px] font-normal display-inline-block  border-2 border-gray-700 rounded-[20px]  light:text-black">
              Feito por alunos, para alunos
            </div>
            <button className="mt-[16px] mb-[16px] bg-blue-600 pr-[40px] pl-[40px] pt-[10px] pb-[10px] rounded-[8px] text-[14px]/[20px] font-medium">
              Voltar para o inicio
            </button>
            <div className=" mb-[12px] text-gray-400 text-[14px]/[20px] font-medium">
              Clube de Programação IFPAR
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
