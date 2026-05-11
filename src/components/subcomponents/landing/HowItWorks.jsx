import { FaBug } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const leftSteps = [
  {
    title: "1. Escolha um problema",
    description:
      "Explore a lista de questões da OBI disponíveis na plataforma e selecione um desafio para resolver.",
  },
  {
    title: "3. Envie seu código",
    description:
      "Submeta sua solução para o sistema de correção automática, que executará seu programa com diversos casos de teste.",
  },
];

const rightSteps = [
  {
    title: "2. Desenvolva sua solução",
    description:
      "Implemente o algoritmo que resolve o problema utilizando a linguagem de programação suportada.",
  },
  {
    title: "4. Analise o resultado",
    description:
      "Veja o resultado da execução com informações detalhadas sobre os testes, incluindo tempo de execução e uso de memória.",
  },
];

export function HowItWorks() {
  return (
    <div className="flex items-center justify-center flex-col mb-12 mt-10 light:text-black">
      <h2 className="text-3xl font-bold m-5 mb-10">Como Funciona</h2>
      <div className="grid grid-cols-13 w-3/4">
        <div className="col-span-6 grid grid-rows-4 items-center justify-items-end text-end">
          <div className="min-w-fit">
            <h3 className="font-semibold text-lg">{leftSteps[0].title}</h3>
            <p className="text-white light:text-gray-800 text-balance">{leftSteps[0].description}</p>
          </div>

          <div className="bg-gray-800 light:bg-gray-300 rounded-lg border border-blue-600 light:border-blue-500 w-fit h-fit p-1 mr-2">
            <FaBug className='text-blue-600 light:text-blue-500 w-8 h-8'/>
          </div>

          <div className="min-w-fit">
            <h3 className="font-semibold text-lg">{leftSteps[1].title}</h3>
            <p className="text-white light:text-gray-800 text-balance">{leftSteps[1].description}</p>
          </div>

          <div className="bg-gray-800 light:bg-gray-300 rounded-lg border border-blue-600 light:border-blue-500 w-fit h-fit p-0.5 mr-2">
            <MdOutlineFileUpload className='text-blue-600 light:text-blue-500 w-9 h-9'/>
          </div>
        </div>

        <div className="grid grid-rows-4 items-center justify-items-center relative">
          <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-[75%] bg-blue-500"></div>
          </div>

          <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1"></div>

          <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1"></div>

          <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1"></div>
        </div>

        <div className="col-span-6 grid grid-rows-4 items-center justify-items-start">
          <div className="bg-gray-800 light:bg-gray-300 rounded-lg border border-blue-600 light:border-blue-500 w-fit h-fit p-0.5 mr-2">
            <AiOutlineExperiment className='text-blue-600 light:text-blue-500 w-9 h-9'/>
          </div>

          <div className="min-w-fit">
            <h3 className="font-semibold text-lg">{rightSteps[0].title}</h3>
            <p className="text-white light:text-gray-800 text-balance">{rightSteps[0].description}</p>
          </div>

          <div className="bg-gray-800 light:bg-gray-300 rounded-lg border border-blue-600 light:border-blue-500 w-fit h-fit p-1 mr-2">
            <FaCheckCircle className='text-blue-600 light:text-blue-500 w-8 h-8'/>
          </div>

          <div className="min-w-fit">
            <h3 className="font-semibold text-lg">{rightSteps[1].title}</h3>
            <p className="text-white light:text-gray-800 text-balance">{rightSteps[1].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
