import Topbar from "./Topbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
        <div className="col-span-full bg-gray-950 flex items-center">
          <Topbar />
        </div>

        <div className="col-span-full bg-slate-900 flex flex-col items-center justify-start text-white">
          <div className="flex flex-col justify-center items-center text-center w-1/2 m-10">
            <h1 className="text-4xl font-bold m-5">Resolva Problemas. Envie Código. Veja o Resultado</h1>
            <p className="text-lg text-center w-7/8">Uma plataforma gratuita para treinar programação competitiva resolvendo questões da OBI e recebendo feedback automático das suas soluções</p>
          </div>

          <div className="flex justify-center m-5">
            <button className="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded-xl m-3 cursor-pointer">
              Começar a praticar
            </button>

            <Link to="/grid" className="border border-white px-3 py-2 rounded-xl m-3">
              Conheça o projeto
            </Link>
          </div>

          <div className="grid grid-cols-3 divide-x-4 divide-gray-700 m-10">
            <div className="flex m-2">
              <img src="a"></img>
              <div>
                <h6 className="text-lg font-medium">Todas as questões da OBI em um só lugar</h6>
                <p className="text-base">Explore a coleção completa de problemas da OBI e resolva desafios reais usados na competição.</p>
              </div>
            </div>
            <div className="flex m-2">
              <img src="a"></img>
              <div>
                <h6 className="text-lg font-medium">Treinamento Real para Programação Competitiva</h6>
                <p className="text-base">Envie seu código e veja sua solução sendo avaliada automaticamente como em um juiz de competição.</p>
              </div>
            </div>
            <div className="flex m-2">
              <img src="a"></img>
              <div>
                <h6 className="text-lg font-medium">Treine com Feedback de Verdade</h6>
                <p className="text-base">Veja o resultado completo da execução do seu código, incluindo tempo de execução e uso de memória.</p>
              </div>
            </div>
            
          </div>
          
          <div className="flex flex-col items-center justify-center m-10">
            <button className="flex items-center justify-center cursor-pointer border border-blue-500 p-2 
            rounded-3xl m-3 bg-blue-900 text-blue-500 font-bold">
              <img src="a" className="m-1"></img>
              Sobre a plataforma
            </button>
            <h2 className="text-3xl font-bold m-5 text-center">Um Ambiente de Prática para <span className="text-blue-500">Programação Competitiva</span></h2>
            <p className="text-center w-1/2">A plataforma reúne questões da Olimpíada Brasileira de Informática em um ambiente onde estudantes podem resolver desafios e testar automaticamente suas soluções. Basta escolher um problema, enviar seu código e receber o resultado da execução com informações detalhadas sobre os testes.</p>
          </div>

          <div className="flex items-center justify-center flex-col mb-10 mt-10">
            <h2 className="text-3xl font-bold m-5 mb-10">Como Funciona</h2>
            <div className="grid grid-cols-11 w-3/4">
              <div className="col-span-5 grid grid-rows-4 items-center justify-items-end text-end">
                <div className="min-w-fit">
                  <h3 className="font-semibold text-lg">1. Escolha um problema</h3>
                  <p className="text-gray-300">Explore a lista de questões da OBI disponíveis na plataforma e selecione um desafio para resolver.</p>
                </div>

                <img src="a"></img>

                <div className="min-w-fit">
                  <h3 className="font-semibold text-lg">3. Envie seu código</h3>
                  <p className="text-gray-300">Submeta sua solução para o sistema de correção automática, que executará seu programa com diversos casos de teste.</p>
                </div>

                <img src="a"></img>
              </div>

              <div className="grid grid-rows-4 items-center justify-items-center relative">

                <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1">
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-[75%] bg-blue-500"></div>
                </div>

                <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1"></div>

                <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1"></div>

                <div className="w-4 h-4 rounded-full bg-blue-500 row-span-1"></div>
              </div>

              <div className="col-span-5 grid grid-rows-4 items-center justify-items-start">
                <img src="a"></img>

                <div className="min-w-fit">
                  <h3 className="font-semibold text-lg">2. Desenvolva sua solução</h3>
                  <p className="text-gray-300">Implemente o algoritmo que resolve o problema utilizando a linguagem de programação suportada.</p>
                </div>

                <img src="a"></img>

                <div className="min-w-fit">
                  <h3 className="font-semibold text-lg">4. Analise o resultado</h3>
                  <p className="text-gray-300">Veja o resultado da execução com informações detalhadas sobre os testes, incluindo tempo de execução e uso de memória.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Landingpage;