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
              <div className="bg-gray-500 rounded-lg border border-blue-600 w-fit h-fit p-0.5 mr-2">
                <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
              </div>
              <div>
                <h6 className="text-lg font-medium">Todas as questões da OBI em um só lugar</h6>
                <p className="text-base">Explore a coleção completa de problemas da OBI e resolva desafios reais usados na competição.</p>
              </div>
            </div>
            <div className="flex m-2">
              <div className="bg-gray-500 rounded-lg border border-blue-600 w-fit h-fit p-0.5 mr-2">
                <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z"/></svg>
              </div>
              <div>
                <h6 className="text-lg font-medium">Treinamento Real para Programação Competitiva</h6>
                <p className="text-base">Envie seu código e veja sua solução sendo avaliada automaticamente como em um juiz de competição.</p>
              </div>
            </div>
            <div className="flex m-2">
              <div className="bg-gray-500 rounded-lg border border-blue-600 w-fit h-fit p-0.5 mr-2">
                <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z"/></svg>
              </div>
              <div>
                <h6 className="text-lg font-medium">Treine com Feedback de Verdade</h6>
                <p className="text-base">Veja o resultado completo da execução do seu código, incluindo tempo de execução e uso de memória.</p>
              </div>
            </div>
            
          </div>
          
          <div className="flex flex-col items-center justify-center m-10">
            <button className="flex items-center justify-center cursor-pointer border border-blue-500 p-2 
            rounded-3xl m-3 bg-blue-900 text-blue-500 font-bold">
              <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-240h640v-320H520v-160H160v480Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80v-480 480Z"/></svg>
              Sobre a plataforma
            </button>
            <h2 className="text-3xl font-bold m-5 text-center">Um Ambiente de Prática para <span className="text-blue-500">Programação Competitiva</span></h2>
            <p className="text-center w-1/2">A plataforma reúne questões da Olimpíada Brasileira de Informática em um ambiente onde estudantes podem resolver desafios e testar automaticamente suas soluções. Basta escolher um problema, enviar seu código e receber o resultado da execução com informações detalhadas sobre os testes.</p>
          </div>

          <div className="flex items-center justify-center flex-col mb-10 mt-10">
            <h2 className="text-3xl font-bold m-5 mb-10">Como Funciona</h2>
            <div className="grid grid-cols-13 w-3/4">
              <div className="col-span-6 grid grid-rows-4 items-center justify-items-end text-end">
                <div className="min-w-fit">
                  <h3 className="font-semibold text-lg">1. Escolha um problema</h3>
                  <p className="text-gray-300">Explore a lista de questões da OBI disponíveis na plataforma e selecione um desafio para resolver.</p>
                </div>

                <div className="bg-gray-500 rounded-lg border border-blue-600 w-fit h-fit p-0.5 mr-2">
                  <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"/></svg>
                </div>

                <div className="min-w-fit">
                  <h3 className="font-semibold text-lg">3. Envie seu código</h3>
                  <p className="text-gray-300">Submeta sua solução para o sistema de correção automática, que executará seu programa com diversos casos de teste.</p>
                </div>

                <div className="bg-gray-500 rounded-lg border border-blue-600 w-fit h-fit p-0.5 mr-2">
                  <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
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
                <div className="bg-gray-500 rounded-lg border border-blue-600 w-fit h-fit p-0.5 mr-2">
                  <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M365.5-153Q315-186 283-240l-95 54-40-69 103-60q-3-11-5-22.5t-4-22.5H120v-80h122q2-12 4-23.5t5-22.5l-103-60 40-69 94 55q8-14 18.5-27.5T322-612q-2-7-2-14v-14q0-24 7-46t19-41l-66-66 56-57 70 68q17-9 35.5-13.5T480-800q20 0 39 5t36 14l69-69 56 57-66 66q12 19 18.5 41t6.5 46v13.5q0 6.5-2 13.5 11 11 21.5 25t18.5 28l95-54 40 69-104 59q3 11 5.5 22.5T718-440h122v80H718q-2 12-4 23.5t-5 22.5l103 60-40 69-95-55q-32 54-82.5 87T480-120q-64 0-114.5-33ZM404-666q17-7 36.5-10.5T480-680q20 0 38.5 3t35.5 10q-8-23-28-38t-46-15q-26 0-47 15.5T404-666Zm76 466q73 0 116.5-61T640-400q0-70-40.5-135T480-600q-78 0-119 64.5T320-400q0 78 43.5 139T480-200Zm-40-80v-240h80v240h-80Z"/></svg>
                </div>

                <div className="min-w-fit">
                  <h3 className="font-semibold text-lg">2. Desenvolva sua solução</h3>
                  <p className="text-gray-300">Implemente o algoritmo que resolve o problema utilizando a linguagem de programação suportada.</p>
                </div>

                <div className="bg-gray-500 rounded-lg border border-blue-600 w-fit h-fit p-0.5 mr-2">
                  <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                </div>

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